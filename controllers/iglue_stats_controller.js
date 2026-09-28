const Sequelize = require("sequelize");
const {models} = require("../models");
const {getEscapp2Date} = require("../helpers/globalInstanceConfig");
const {createCsvFile} = require("../helpers/csv");

const {Op} = Sequelize;

// Educational levels, matching the eduLevel enum on the user model
const LEVELS = ["primary", "secondary", "vet", "higher", "other", "none"];

const toDateInput = (d) => (d ? new Date(d).toISOString().slice(0, 10) : "");

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

// Accept only a well-formed, real calendar date (YYYY-MM-DD). Anything else — a
// malformed string, an out-of-range date, an array from duplicated query params,
// or any object — is discarded. This keeps untrusted input from ever reaching a
// Date/DB boundary on this public endpoint.
const safeDate = (value) => {
    if (typeof value !== "string" || !DATE_RE.test(value)) {
        return "";
    }
    const parsed = new Date(`${value}T00:00:00.000Z`);

    return Number.isNaN(parsed.getTime()) ? "" : value;
};

// Build a CSV filename that embeds the reporting window and the day it was generated,
// e.g. "iglue-stats_from-2025-01-01_to-2025-06-30_generated-2026-09-28". Open bounds are
// labelled "start"/"now" so the range is always unambiguous from the file name alone.
const csvFilename = (prefix, from, to) => {
    const generated = new Date().toISOString().slice(0, 10);

    return `${prefix}_from-${from || "start"}_to-${to || "now"}_generated-${generated}`;
};

// Resolve the reporting window from the request — the same logic the stats table uses
// (safeDate-validated from/to; `from` overridden by the frozen Escapp 2.0 date when the
// "since Escapp 2.0" option is on). Kept here so the admin user export stays in sync.
const resolveFilters = async (req) => {
    const sinceTerms = req.query.sinceTerms === "1";
    const attendedOnly = req.query.attendedOnly === "1";
    const to = safeDate(req.query.to);

    let escapp2Date = await getEscapp2Date();

    if (!escapp2Date) {
        escapp2Date = await models.user.min("lastAcceptedTermsDate");
    }
    const escapp2Input = toDateInput(escapp2Date);

    let from = safeDate(req.query.from);
    let fromDate = from ? new Date(`${from}T00:00:00.000Z`) : null;

    if (sinceTerms && escapp2Date) {
        fromDate = new Date(escapp2Date);
        from = escapp2Input;
    }
    const toDate = to ? new Date(`${to}T00:00:00.000Z`) : null;

    return {sinceTerms, attendedOnly, from, to, fromDate, toDate, escapp2Input};
};

// A single user-level WHERE matching exactly the users counted in the stats table:
// teachers in the terms window, plus students in the terms window OR who attended in
// the window (or only attendance when that option is active). Returns {where, replacements}.
const buildCountedUsersWhere = (fromDate, toDate, attendedOnly) => {
    const replacements = {};
    const hasWindow = Boolean(fromDate || toDate);

    const termsWindow = () => {
        const window = {};

        if (fromDate) {
            window[Op.gte] = fromDate;
        }
        if (toDate) {
            window[Op.lt] = toDate;
        }
        return window;
    };

    const partConds = [`p."userId" = "user"."id"`, `p."attendance" = true`];

    if (fromDate) {
        partConds.push(`p."createdAt" >= :pFrom`);
        replacements.pFrom = fromDate.toISOString();
    }
    if (toDate) {
        partConds.push(`p."createdAt" < :pTo`);
        replacements.pTo = toDate.toISOString();
    }
    const attendedExists = Sequelize.literal(`EXISTS (SELECT 1 FROM "participants" p WHERE ${partConds.join(" AND ")})`);

    const teacherCond = {"isStudent": false};

    if (hasWindow) {
        teacherCond.lastAcceptedTermsDate = termsWindow();
    }

    let studentCond;

    if (attendedOnly) {
        studentCond = {"isStudent": true, [Op.and]: [attendedExists]};
    } else if (hasWindow) {
        studentCond = {"isStudent": true, [Op.or]: [{"lastAcceptedTermsDate": termsWindow()}, attendedExists]};
    } else {
        studentCond = {"isStudent": true};
    }

    return {"where": {[Op.or]: [teacherCond, studentCond]}, replacements};
};

// GET /iglue-stats
// Counts users by educational level (rows) and role (student/teacher columns) for a
// reporting window [from, to). `to` is an EXCLUSIVE upper bound. The window is applied
// on a single axis — lastAcceptedTermsDate (active users) — for BOTH bounds. `from`
// defaults to the frozen Escapp 2.0 date when the "since Escapp 2.0" option is used.
//
//   Teachers  = isStudent=false AND lastAcceptedTermsDate in [from, to)
//   Students  = isStudent=true  AND (lastAcceptedTermsDate in [from, to)
//               OR attended an escape room with participants.createdAt in [from, to))
//   Students (attendance option) = distinct students with a participants row where
//               attendance=true and participants.createdAt in [from, to)
exports.iglueStats = async (req, res, next) => {
    try {
        const sinceTerms = req.query.sinceTerms === "1";
        const attendedOnly = req.query.attendedOnly === "1";
        const to = safeDate(req.query.to);

        // Frozen "Escapp 2.0" date (earliest terms acceptance, captured at migration time).
        // Falls back to the live minimum if it has not been set yet.
        let escapp2Date = await getEscapp2Date();

        if (!escapp2Date) {
            escapp2Date = await models.user.min("lastAcceptedTermsDate");
        }
        const escapp2Input = toDateInput(escapp2Date);

        let from = safeDate(req.query.from);
        // Lower bound: the exact Escapp 2.0 timestamp when "since Escapp 2.0" is used,
        // otherwise the start of the chosen from-day (UTC, matching safeDate validation).
        let fromDate = from ? new Date(`${from}T00:00:00.000Z`) : null;

        if (sinceTerms && escapp2Date) {
            fromDate = new Date(escapp2Date);
            from = escapp2Input;
        }

        // Upper bound is exclusive: strictly before `to` (start of the to-day, UTC)
        const toDate = to ? new Date(`${to}T00:00:00.000Z`) : null;

        const countDistinctId = [Sequelize.fn("COUNT", Sequelize.fn("DISTINCT", Sequelize.col("user.id"))), "count"];

        // User-based filter: accepted terms within [from, to) (active users), single axis
        const userWhere = (isStudent) => {
            const where = {isStudent};

            if (fromDate || toDate) {
                where.lastAcceptedTermsDate = {};
                if (fromDate) {
                    where.lastAcceptedTermsDate[Op.gte] = fromDate;
                }
                if (toDate) {
                    where.lastAcceptedTermsDate[Op.lt] = toDate;
                }
            }
            return where;
        };

        // Teachers
        const teacherRows = await models.user.findAll({
            "attributes": ["eduLevel", countDistinctId],
            "where": userWhere(false),
            "group": ["eduLevel"],
            "raw": true
        });

        // Students
        const studentQuery = {
            "attributes": ["eduLevel", countDistinctId],
            "group": ["eduLevel"],
            "raw": true,
            "subQuery": false
        };

        if (attendedOnly) {
            // Distinct students who attended an escape room (participants.attendance = true)
            // whose participation date (participants.createdAt) falls within [from, to)
            const throughWhere = {"attendance": true};

            if (fromDate || toDate) {
                throughWhere.createdAt = {};
                if (fromDate) {
                    throughWhere.createdAt[Op.gte] = fromDate;
                }
                if (toDate) {
                    throughWhere.createdAt[Op.lt] = toDate;
                }
            }
            studentQuery.where = {"isStudent": true};
            studentQuery.include = [{
                "model": models.turno,
                "as": "turnosAgregados",
                "attributes": [],
                "required": true,
                "through": {"attributes": [], "where": throughWhere}
            }];
        } else {
            // Active students: accepted terms in the window OR attended an escape room
            // (participants.attendance = true) whose participation date falls in [from, to).
            // The two sets are unioned and deduplicated by COUNT(DISTINCT user.id) via a
            // correlated EXISTS, so a student in both sets is counted once.
            studentQuery.where = {"isStudent": true};

            if (fromDate || toDate) {
                const termsWindow = {};
                const partConds = [`p."userId" = "user"."id"`, `p."attendance" = true`];

                if (fromDate) {
                    termsWindow[Op.gte] = fromDate;
                    partConds.push(`p."createdAt" >= :pFrom`);
                }
                if (toDate) {
                    termsWindow[Op.lt] = toDate;
                    partConds.push(`p."createdAt" < :pTo`);
                }
                studentQuery.where[Op.or] = [
                    {"lastAcceptedTermsDate": termsWindow},
                    Sequelize.literal(`EXISTS (SELECT 1 FROM "participants" p WHERE ${partConds.join(" AND ")})`)
                ];
                studentQuery.replacements = {};
                if (fromDate) {
                    studentQuery.replacements.pFrom = fromDate.toISOString();
                }
                if (toDate) {
                    studentQuery.replacements.pTo = toDate.toISOString();
                }
            }
        }

        const studentRows = await models.user.findAll(studentQuery);

        const table = {};

        LEVELS.forEach((level) => {
            table[level] = {"students": 0, "teachers": 0};
        });

        const accumulate = (rows, bucket) => {
            rows.forEach((row) => {
                const level = LEVELS.includes(row.eduLevel) ? row.eduLevel : "other";

                table[level][bucket] += Number(row.count);
            });
        };

        accumulate(teacherRows, "teachers");
        accumulate(studentRows, "students");

        const totals = {"students": 0, "teachers": 0};

        LEVELS.forEach((level) => {
            totals.students += table[level].students;
            totals.teachers += table[level].teachers;
        });

        // Download the currently-filtered table as CSV
        if (req.query.csv === "1") {
            const i18n = res.locals.i18n || {};
            const labels = (i18n.user && i18n.user.eduLevel) || {};
            const head = {
                "level": (i18n.user && i18n.user.eduLevelField) || "Educational level",
                "students": (i18n.user && i18n.user.student) || "Students",
                "teachers": (i18n.user && i18n.user.teacher) || "Teachers",
                "total": (i18n.iglueStats && i18n.iglueStats.total) || "Total"
            };
            const rows = LEVELS.map((level) => ({
                [head.level]: labels[level] || level,
                [head.students]: table[level].students,
                [head.teachers]: table[level].teachers,
                [head.total]: table[level].students + table[level].teachers
            }));

            rows.push({
                [head.level]: head.total,
                [head.students]: totals.students,
                [head.teachers]: totals.teachers,
                [head.total]: totals.students + totals.teachers
            });

            return createCsvFile(res, rows, csvFilename("iglue-stats", from, to));
        }

        res.render("iglueStats", {
            table,
            "levels": LEVELS,
            totals,
            "filters": {from, to, sinceTerms, attendedOnly},
            "escapp2Date": escapp2Input
        });
    } catch (e) {
        next(e);
    }
};

// GET /iglue-stats/users  (ADMIN ONLY — the route is guarded)
// Downloads a CSV of every user counted in the current stats view, with per-user
// escape-rooms-created and escape-rooms-played counts. Contains personal data (email,
// alias), so it must never be exposed publicly.
exports.iglueStatsUsers = async (req, res, next) => {
    try {
        const {from, to, fromDate, toDate, attendedOnly} = await resolveFilters(req);
        const {where, replacements} = buildCountedUsersWhere(fromDate, toDate, attendedOnly);

        // Per-user counts are scoped to the SAME [from, to) window as the stats:
        //   created = escape rooms authored whose createdAt is in the window
        //   played  = distinct escape rooms participated in whose participation date is in the window
        // (:pFrom/:pTo are already bound by buildCountedUsersWhere whenever there is a window)
        const createdConds = [`er."authorId" = "user"."id"`];
        const playedConds = [`pp."userId" = "user"."id"`];

        if (fromDate) {
            createdConds.push(`er."createdAt" >= :pFrom`);
            playedConds.push(`pp."createdAt" >= :pFrom`);
        }
        if (toDate) {
            createdConds.push(`er."createdAt" < :pTo`);
            playedConds.push(`pp."createdAt" < :pTo`);
        }

        const users = await models.user.findAll({
            "attributes": [
                "username",
                "alias",
                "eduLevel",
                "isStudent",
                "createdAt",
                "lastAcceptedTermsDate",
                [Sequelize.literal(`(SELECT COUNT(*) FROM "escapeRooms" er WHERE ${createdConds.join(" AND ")})`), "createdCount"],
                [Sequelize.literal(`(SELECT COUNT(DISTINCT t."escapeRoomId") FROM "participants" pp JOIN "turnos" t ON t."id" = pp."turnId" WHERE ${playedConds.join(" AND ")})`), "playedCount"]
            ],
            where,
            replacements,
            "order": [["isStudent", "ASC"], ["eduLevel", "ASC"], ["username", "ASC"]],
            "raw": true
        });

        const i18n = res.locals.i18n || {};
        const eduLabels = (i18n.user && i18n.user.eduLevel) || {};
        const roleLabel = (isStudent) => (isStudent ? ((i18n.user && i18n.user.student) || "Student") : ((i18n.user && i18n.user.teacher) || "Teacher"));
        const head = {
            "email": (i18n.iglueStats && i18n.iglueStats.email) || "Email",
            "role": (i18n.iglueStats && i18n.iglueStats.role) || "Role",
            "alias": (i18n.iglueStats && i18n.iglueStats.alias) || "Alias",
            "level": (i18n.user && i18n.user.eduLevelField) || "Educational level",
            "registered": (i18n.iglueStats && i18n.iglueStats.registration) || "Registration date",
            "termsAccepted": (i18n.iglueStats && i18n.iglueStats.termsAccepted) || "Terms accepted date",
            "created": (i18n.iglueStats && i18n.iglueStats.created) || "Escape rooms created",
            "played": (i18n.iglueStats && i18n.iglueStats.played) || "Escape rooms played"
        };

        const rows = users.map((u) => ({
            [head.email]: u.username,
            [head.role]: roleLabel(u.isStudent),
            [head.alias]: u.alias,
            [head.level]: eduLabels[u.eduLevel] || u.eduLevel,
            [head.registered]: toDateInput(u.createdAt),
            [head.termsAccepted]: toDateInput(u.lastAcceptedTermsDate),
            [head.created]: Number(u.createdCount) || 0,
            [head.played]: Number(u.playedCount) || 0
        }));

        return createCsvFile(res, rows, csvFilename("iglue-stats-users", from, to));
    } catch (e) {
        next(e);
    }
};
