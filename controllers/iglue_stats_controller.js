const Sequelize = require("sequelize");
const {models} = require("../models");
const {getEscapp2Date} = require("../helpers/globalInstanceConfig");
const {createCsvFile} = require("../helpers/csv");

const {Op} = Sequelize;
const LEVELS = ["primary", "secondary", "vet", "higher", "other", "unspecified"];

const toDateInput = (date) => date ? new Date(date).toISOString().slice(0, 10) : "";

const safeDate = (value) => {
    if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return "";
    const date = new Date(`${value}T00:00:00.000Z`);
    return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value ? value : "";
};

const csvFilename = (prefix, from, to) => {
    const app = (process.env.APP_NAME || "").toLowerCase().trim()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9-]+/g, "-").replace(/^-|-$/g, "");
    const fmt = (date) => date ? date.split("-").reverse().join("-") : "";
    return `${prefix}${app ? "_" + app : ""}_from-${fmt(from) || "start"}-to-${fmt(to) || "now"}_generated-${fmt(toDateInput(new Date()))}`;
};

const resolveFilters = async (req) => {
    const forcePeriod = Object.keys(req.query).length === 0 ? true : req.query.forcePeriod === "1";
    const escapp2Input = toDateInput(await getEscapp2Date());

    let from = safeDate(req.query.from);
    let to = safeDate(req.query.to);

    if (forcePeriod) {
        from = escapp2Input;
        to = "2026-10-31";
    }

    return {
        forcePeriod, from, to, escapp2Input,
        fromDate: from ? new Date(`${from}T00:00:00.000Z`) : null,
        toDate: to ? new Date(`${to}T23:59:59.999Z`) : null
    };
};

// Build a date range for Sequelize queries.
const dateWindow = (fromDate, toDate) => ({
    ...(fromDate ? {[Op.gte]: fromDate} : {}),
    ...(toDate ? {[Op.lte]: toDate} : {})
});

// Exclude users whose educational level is "none".
const validEduLevel = () => ({
    [Op.or]: [
        {eduLevel: {[Op.ne]: "none"}},
        {eduLevel: {[Op.is]: null}}
    ]
});

// Include registered non-admin teachers and admins who authored or coauthored a room.
const eligibleTeacher = () => ({
    isStudent: false,
    anonymized: false,
    [Op.or]: [
        {isAdmin: false},
        Sequelize.literal(`EXISTS (
            SELECT 1 FROM "escapeRooms" er
            WHERE er."authorId" = "user"."id"
               OR EXISTS (SELECT 1 FROM "coAuthors" ca
                          WHERE ca."escapeRoomId" = er."id" AND ca."userId" = "user"."id")
        )`)
    ]
});

// Check whether the user has played in the selected period.
const playedExists = (fromDate, toDate, replacements, prefix) => {
    const conditions = [
        `p."userId" = "user"."id"`,
        `p."attendance" = true`,
        `tm."startTime" IS NOT NULL`
    ];

    if (fromDate) {
        conditions.push(`tm."startTime" >= :${prefix}From`);
        replacements[`${prefix}From`] = fromDate.toISOString();
    }

    if (toDate) {
        conditions.push(`tm."startTime" <= :${prefix}To`);
        replacements[`${prefix}To`] = toDate.toISOString();
    }

    return Sequelize.literal(`
        EXISTS (
            SELECT 1
            FROM "participants" p
            INNER JOIN "teams" tm ON tm."turnoId" = p."turnId"
            INNER JOIN "members" m ON m."teamId" = tm."id" AND m."userId" = p."userId"
            WHERE ${conditions.join(" AND ")}
        )
    `);
};

// Check whether a teacher created or updated an escape room in the period.
const createdRoomExists = (fromDate, toDate, replacements, prefix) => {
    const conditions = [`(
        er."authorId" = "user"."id"
        OR EXISTS (SELECT 1 FROM "coAuthors" ca
                   WHERE ca."escapeRoomId" = er."id" AND ca."userId" = "user"."id")
    )`];

    if (fromDate || toDate) {
        const range = (column) => {
            const parts = [];
            if (fromDate) parts.push(`${column} >= :${prefix}From`);
            if (toDate) parts.push(`${column} <= :${prefix}To`);
            return `(${parts.join(" AND ")})`;
        };

        conditions.push(`(${range('er."createdAt"')} OR ${range('er."updatedAt"')})`);
        if (fromDate) replacements[`${prefix}From`] = fromDate.toISOString();
        if (toDate) replacements[`${prefix}To`] = toDate.toISOString();
    }

    return Sequelize.literal(`EXISTS (SELECT 1 FROM "escapeRooms" er WHERE ${conditions.join(" AND ")})`);
};

// Build filters shared by the statistics and the detailed users CSV.
const buildCountedUsersWhere = (fromDate, toDate) => {
    const replacements = {};
    const teacherCond = {...eligibleTeacher(), [Op.and]: [validEduLevel()]};
    const studentCond = {isStudent: true, isAdmin: false, [Op.and]: [validEduLevel()]};

    if (fromDate || toDate) {
        const window = dateWindow(fromDate, toDate);

        teacherCond[Op.and].push({
            [Op.or]: [
                {createdAt: window},
                {lastAcceptedTermsDate: window},
                createdRoomExists(fromDate, toDate, replacements, "teacherRoom")
            ]
        });

        studentCond[Op.and].push({
            [Op.or]: [
                {createdAt: window},
                {lastAcceptedTermsDate: window},
                playedExists(fromDate, toDate, replacements, "studentPlay")
            ]
        });
    }

    return {
        where: {[Op.or]: [teacherCond, studentCond]},
        replacements
    };
};

// GET /iglue-stats
exports.iglueStats = async (req, res, next) => {
    try {
        const {forcePeriod, from, to, fromDate, toDate, escapp2Input} = await resolveFilters(req);
        const hasWindow = Boolean(fromDate || toDate);

        const countDistinctId = [Sequelize.literal(`COUNT(DISTINCT "user"."id")`), "count"];

        // Registered users are counted separately, without changing total counts.
        const countRegisteredId = [Sequelize.literal(`COUNT(DISTINCT "user"."id") FILTER (WHERE "user"."anonymized" = false)`), "registeredCount"];

        // Teachers: registration, terms acceptance or escape room creation.
        const teacherReplacements = {};
        const teacherWhere = { ...eligibleTeacher(), [Op.and]: [validEduLevel()] };

        if (hasWindow) {
            const window = dateWindow(fromDate, toDate);

            teacherWhere[Op.and].push({
                [Op.or]: [
                    {createdAt: window},
                    {lastAcceptedTermsDate: window},
                    createdRoomExists(fromDate, toDate, teacherReplacements, "teacherRoom")
                ]
            });
        }

        const teacherRows = await models.user.findAll({
            attributes: ["eduLevel", countDistinctId],
            where: teacherWhere,
            group: ["eduLevel"],
            replacements: teacherReplacements,
            raw: true
        });

        // Students: registration, terms acceptance or participation in an escape room.
        const studentReplacements = {};
        const studentWhere = { isStudent: true, isAdmin: false, [Op.and]: [validEduLevel()] };

        if (hasWindow) {
            const window = dateWindow(fromDate, toDate);

            studentWhere[Op.and].push({
                [Op.or]: [
                    {createdAt: window},
                    {lastAcceptedTermsDate: window},
                    playedExists(fromDate, toDate, studentReplacements, "studentPlay")
                ]
            });
        }

        const studentRows = await models.user.findAll({
            attributes: ["eduLevel", countDistinctId, countRegisteredId],
            where: studentWhere,
            group: ["eduLevel"],
            replacements: studentReplacements,
            raw: true,
            subQuery: false
        });

        // Players: students who played in the selected period.
        const playerReplacements = {};
        const playerRows = await models.user.findAll({
            attributes: ["eduLevel", countDistinctId, countRegisteredId],
            where: {
                isStudent: true,
                isAdmin: false,
                [Op.and]: [
                    validEduLevel(),
                    playedExists(fromDate, toDate, playerReplacements, "player")
                ]
            },
            group: ["eduLevel"],
            replacements: playerReplacements,
            raw: true,
            subQuery: false
        });

        // Build statistics by educational level.
        const emptyStats = () => ({
            teachers: 0,
            students: 0,
            registeredStudents: 0,
            players: 0,
            registeredPlayers: 0
        });

        const table = Object.fromEntries(LEVELS.map((level) => [level, emptyStats()]));

        const accumulate = (rows, totalKey, registeredKey = null) => {
            for (const row of rows) {
                const level = LEVELS.includes(row.eduLevel) ? row.eduLevel : "unspecified";
                table[level][totalKey] += Number(row.count) || 0;

                if (registeredKey) {
                    table[level][registeredKey] += Number(row.registeredCount) || 0;
                }
            }
        };

        accumulate(teacherRows, "teachers");
        accumulate(studentRows, "students", "registeredStudents");
        accumulate(playerRows, "players", "registeredPlayers");

        const totals = emptyStats();
        for (const level of LEVELS) {
            for (const key of Object.keys(totals)) totals[key] += table[level][key];
        }

        // Export general statistics as CSV.
        if (req.query.csv === "1") {
            const i18n = res.locals.i18n || {};
            const labels = i18n.user?.eduLevel || {};
            const tr = i18n.iglueStats || {};

            const head = {
                level: i18n.user?.eduLevelField || "Educational level",
                students: tr.studentsTotal || tr.students || "Total students",
                registeredStudents: tr.studentsRegistered || tr.registeredStudents || "Registered students",
                players: tr.playersTotal || tr.players || "Total players",
                registeredPlayers: tr.playersRegistered || tr.registeredPlayers || "Registered players",
                teachers: tr.teachers || "Registered teachers",
                total: tr.total || "Total"
            };

            const csvRow = (label, values) => ({
                [head.level]: label,
                [head.students]: values.students,
                [head.registeredStudents]: values.registeredStudents,
                [head.players]: values.players,
                [head.registeredPlayers]: values.registeredPlayers,
                [head.teachers]: values.teachers,
                [head.total]: values.students + values.teachers
            });

            const rows = LEVELS.map((level) => csvRow(labels[level] || level, table[level]));
            rows.push(csvRow(head.total, totals));

            return createCsvFile(res, rows, csvFilename("iglue-stats", from, to));
        }

        return res.render("iglueStats", {
            table,
            levels: LEVELS,
            totals,
            filters: {from, to, forcePeriod},
            escapp2Date: escapp2Input
        });

    } catch (e) {
        return next(e);
    }
};

// GET /iglue-stats/users
// Export counted users, ordered by role and registration status.
exports.iglueStatsUsers = async (req, res, next) => {
    try {
        const {from, to, fromDate, toDate} = await resolveFilters(req);
        const {where, replacements} = buildCountedUsersWhere(fromDate, toDate);

        // Count distinct escape rooms played by each user.
        const playedConds = [
            `p."userId" = "user"."id"`,
            `p."attendance" = true`,
            `tm."startTime" IS NOT NULL`
        ];

        if (fromDate) {
            playedConds.push(`tm."startTime" >= :playedFrom`);
            replacements.playedFrom = fromDate.toISOString();
        }

        if (toDate) {
            playedConds.push(`tm."startTime" <= :playedTo`);
            replacements.playedTo = toDate.toISOString();
        }

        const playedCount = Sequelize.literal(`
            (
                SELECT COUNT(DISTINCT t."escapeRoomId")
                FROM "participants" p
                INNER JOIN "turnos" t ON t."id" = p."turnId"
                INNER JOIN "teams" tm ON tm."turnoId" = t."id"
                INNER JOIN "members" m ON m."teamId" = tm."id" AND m."userId" = p."userId"
                WHERE ${playedConds.join(" AND ")}
            )
        `);

        // Count escape rooms authored or coauthored, created or updated in the period.
        const createdConds = [`(
            er."authorId" = "user"."id"
            OR EXISTS (SELECT 1 FROM "coAuthors" ca
                       WHERE ca."escapeRoomId" = er."id" AND ca."userId" = "user"."id")
        )`];

        if (fromDate || toDate) {
            const range = (col) => [
                fromDate ? `${col} >= :createdFrom` : null,
                toDate ? `${col} <= :createdTo` : null
            ].filter(Boolean).join(" AND ");

            createdConds.push(`((${range('er."createdAt"')}) OR (${range('er."updatedAt"')}))`);
            if (fromDate) replacements.createdFrom = fromDate.toISOString();
            if (toDate) replacements.createdTo = toDate.toISOString();
        }

        const createdCount = Sequelize.literal(`(
            SELECT COUNT(*) FROM "escapeRooms" er WHERE ${createdConds.join(" AND ")}
        )`);

        // First game played within the selected period.
        const firstPlayed = Sequelize.literal(`(
            SELECT MIN(tm."startTime")
            FROM "participants" p
            JOIN "teams" tm ON tm."turnoId" = p."turnId"
            JOIN "members" m ON m."teamId" = tm."id" AND m."userId" = p."userId"
            WHERE ${playedConds.join(" AND ")}
        )`);

        // First creation or update of an authored or coauthored escape room in the period.
        const firstCreated = Sequelize.literal(`(
            SELECT MIN(
                CASE
                    WHEN er."createdAt" IS NOT NULL ${fromDate ? 'AND er."createdAt" >= :createdFrom' : ''}
                         ${toDate ? 'AND er."createdAt" <= :createdTo' : ''} THEN er."createdAt"
                    ELSE er."updatedAt"
                END
            )
            FROM "escapeRooms" er WHERE ${createdConds.join(" AND ")}
        )`);

        const users = await models.user.findAll({
            attributes: [
                "eduLevel", "isStudent", "anonymized",
                [playedCount, "playedCount"], [createdCount, "createdCount"],
                [firstPlayed, "firstPlayed"], [firstCreated, "firstCreated"]
            ],
            where,
            replacements,
            order: [
                // Teachers first, then students.
                ["isStudent", "ASC"],

                // Teachers with created escape rooms first.
                [
                    Sequelize.literal(`CASE
                        WHEN "user"."isStudent" = false AND ${createdCount.val} > 0 THEN 0
                        WHEN "user"."isStudent" = false THEN 1
                        ELSE 0
                    END`),
                    "ASC"
                ],

                // Among students, prioritize users who have played.
                [
                    Sequelize.literal(`
                        CASE
                            WHEN "user"."isStudent" = true AND ${playedCount.val} > 0 THEN 0
                            WHEN "user"."isStudent" = true THEN 1
                            ELSE 0
                        END
                    `),
                    "ASC"
                ],

                // Registered users first within each group.
                [
                    Sequelize.literal(`
                        CASE WHEN "user"."anonymized" = false THEN 0 ELSE 1 END
                    `),
                    "ASC"
                ],

                // Randomize users within each group.
                Sequelize.literal("RANDOM()")
            ],
            raw: true
        });

        // Translate CSV headers and educational levels.
        const i18n = res.locals.i18n || {};
        const tr = i18n.iglueStats || {};
        const userTr = i18n.user || {};
        const eduLabels = userTr.eduLevel || {};

        const head = {
            anonymousID: tr.anonymizedID || "Anonymized User ID",
            role: tr.role || "Role",
            level: userTr.eduLevelField || "Educational level",
            registered: tr.registered || "Registered",
            played: tr.played || "Escape rooms played",
            created: tr.created || "Escape rooms created",
            firstPlayed: tr.playerDate || "First game date",
            firstCreated: tr.teacherDate || "First escape room date"
        };
        
        // Format dates as dd/MM/yyyy.
        const formatDate = (date) => date ? new Date(date).toISOString().slice(0, 10).split("-").reverse().join("/") : "-";

        const rows = users.map((u, index) => ({
            [head.anonymousID]: index + 1,
            [head.role]: u.isStudent ? (userTr.student || "Student") : (userTr.teacher || "Teacher"),
            [head.level]: eduLabels[u.eduLevel ?? "unspecified"] || eduLabels.unspecified || "Unspecified",
            [head.registered]: u.anonymized === false,
            [head.played]: u.isStudent ? (Number(u.playedCount) || 0) : "-",
            [head.created]: u.isStudent ? "-" : (Number(u.createdCount) || 0),
            [head.firstPlayed]: u.isStudent && Number(u.playedCount) > 0 ? formatDate(u.firstPlayed) : "-",
            [head.firstCreated]: !u.isStudent && Number(u.createdCount) > 0 ? formatDate(u.firstCreated) : "-"
        }));

        return createCsvFile(res, rows, csvFilename("iglue-stats-users", from, to));

    } catch (e) {
        return next(e);
    }
};