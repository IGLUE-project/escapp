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

// GET /iglue-stats
// Counts users by educational level (rows) and role (student/teacher columns) for a
// reporting window [from, to). `to` is an EXCLUSIVE upper bound (users/participations
// strictly before `to`). `from` defaults to MIN(lastAcceptedTermsDate) when the
// "since first accepted terms" option is used.
//
//   Teachers  = isStudent=false AND lastAcceptedTermsDate >= from AND createdAt < to
//   Students  = isStudent=true  AND lastAcceptedTermsDate >= from AND createdAt < to
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
        // otherwise the start of the chosen from-day.
        let fromDate = from ? new Date(`${from}T00:00:00.000`) : null;

        if (sinceTerms && escapp2Date) {
            fromDate = new Date(escapp2Date);
            from = escapp2Input;
        }

        // Upper bound is exclusive: strictly before `to` (start of the to-day)
        const toDate = to ? new Date(`${to}T00:00:00.000`) : null;

        const countDistinctId = [Sequelize.fn("COUNT", Sequelize.fn("DISTINCT", Sequelize.col("user.id"))), "count"];

        // User-based filter: consented on/after `from`, registered before `to`
        const userWhere = (isStudent) => {
            const where = {isStudent};

            if (fromDate) {
                where.lastAcceptedTermsDate = {[Op.gte]: fromDate};
            }
            if (toDate) {
                where.createdAt = {[Op.lt]: toDate};
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
            studentQuery.where = userWhere(true);
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

            return createCsvFile(res, rows, `iglue-stats-${Date.now()}`);
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
