const Sequelize = require("sequelize");
const {models} = require("../models");

const {Op} = Sequelize;

// Educational levels, matching the eduLevel enum on the user model
const LEVELS = ["primary", "secondary", "vet", "higher", "other", "none"];

const toDateInput = (d) => (d ? new Date(d).toISOString().slice(0, 10) : "");

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
        const to = req.query.to || "";

        // Earliest terms acceptance across all users (the "since first terms" lower bound)
        const minTermsDate = await models.user.min("lastAcceptedTermsDate");
        const minTermsInput = toDateInput(minTermsDate);

        let from = req.query.from || "";
        // Lower bound: the exact MIN(lastAcceptedTermsDate) timestamp when "since first
        // terms" is used, otherwise the start of the chosen from-day.
        let fromDate = from ? new Date(`${from}T00:00:00.000`) : null;

        if (sinceTerms && minTermsDate) {
            fromDate = new Date(minTermsDate);
            from = minTermsInput;
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

        res.render("iglueStats", {
            table,
            "levels": LEVELS,
            totals,
            "filters": {from, to, sinceTerms, attendedOnly},
            "minTermsDate": minTermsInput
        });
    } catch (e) {
        next(e);
    }
};
