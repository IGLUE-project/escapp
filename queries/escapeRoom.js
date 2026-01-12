const {models} = require("../models");
const {Op} = require("sequelize");
const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
exports.load = {
    "include": [
        {
            "model": models.user,
            "as": "author"
        },
        {
            "model": models.attachment
        },
        {
            "model": models.user,
            "as": "userCoAuthor",
            "required": false
        }
    ]
};

exports.loadShow = {
    "include": [
        {
            "model": models.turno,
            "separate": true,
            "required": false,
            "where": {"status": {[Op.not]: "test"}},
            "order": [["date", "asc"]]
        },
        {
            "model": models.puzzle,
            "separate": true,
            "include": [{
                "model": models.hint,
                "separate": true,
                "order": [["order", "asc"]]
            }],
            "order": [["order", "asc"]]
        },
        { "model": models.attachment },
        { "model": models.hintApp }
    ]
};

exports.loadPuzzles = {
    "include": [
        {
            "model": models.puzzle,
            "separate": true,
            "include": [{
                "model": models.hint,
                "separate": true,
                "order": [["order", "asc"]]
            }],
            "order": [["order", "asc"]]
        }
    ]
};

exports.loadComplete = {
    "include": [
        {
            "model": models.turno,
            "separate": true,
            "required": false,
            "where": {"status": {[Op.not]: "test"}},
            "include": {
                "model": models.team,
                "separate": true,
                "attributes": ["id"]
            },
            "order": [["date", "asc"]]
        },
        {
            "model": models.puzzle,
            "separate": true,
            "include": [{
                "model": models.hint,
                "separate": true,
                "order": [["order", "asc"]]
            }],
            "order": [["order", "asc"]]
        },
        { "model": models.attachment },
        { "model": models.asset, "separate": true },
        { "model": models.hintApp },
        { "model": models.reusablePuzzleInstance, "separate": true },
        {
            "model": models.user,
            "as": "author"
        },
        {
            "model": models.user,
            "as": "userCoAuthor",
            "required": false
        }
    ]
};

exports.all = (user, page = 1, limit = 10, search, finished, isAccessibleToAllUsers = null, ignoreERIds = []) => {
    const findOptions = {
        "attributes": [
            "id",
            "title",
            "invitation",
            "duration",
            "scope",
            "isAccessibleToAllUsers"
        ],
        "distinct": true,
        "include": [
            {
                "model": models.turno,
                "attributes": ["status", "capacity", "from", "to", "startTime"],
                "required": true,
                "separate": finished === null,
                "where": {"status": {[Op.not]: "test" }},
                "include": [
                    {
                        "model": models.user,
                        "attributes": ["id"],
                        "as": "students",
                        "required": false
                    }
                ]
            },
            {
                "model": models.attachment,
                "required": false
            },
            {
                "model": models.asset,
                "required": false,
                "separate": true
            },
            {
                "model": models.reusablePuzzleInstance,
                "required": false,
                "separate": true
            }
        ]
    };

    findOptions.where = { [Op.and]: [] };

    if (user) {
        findOptions.include[0].include[0].where = {"id": user};
        findOptions.include[0].include[0].required = true;
        findOptions.attributes = ["id", "title"];
        findOptions.subQuery = false;
        findOptions.distinct = true;

        // Ensure Turno include has an explicit alias, and teams is a normal JOIN include
        findOptions.include[0].include = findOptions.include[0].include || [];
        findOptions.include[0].include.push({
            "model": models.team,
            "as": "teams",
            "required": true,
            "separate": false,
            // IMPORTANT: no separate: true here
            "attributes": ["startTime"],
            "include": [{
                "model": models.user,
                "as": "teamMembers",
                "required": true,
                "where": {"id": user}
            }]
        });

        if (finished === true) {
            // finished OR (pending/active AND played more than 24h ago)
            findOptions.where[Op.and].push({
                [Op.or]: [
                { "$turnos.status$": "finished" },
                { "$turnos.teams.startTime$": { [Op.lt]: twentyFourHoursAgo } }
                ]
            });
        }

        if (finished === false) {
            // pending/active AND (not played yet OR played in last 24h)
            findOptions.where[Op.and].push({
                [Op.and]: [
                { "$turnos.status$": { [Op.in]: ["pending", "active"] } },
                {
                    [Op.or]: [
                        { "$turnos.teams.startTime$": null },
                        { "$turnos.teams.startTime$": { [Op.gte]: twentyFourHoursAgo } }
                    ]
                }
                ]
            });
        }
    }

    if (page !== null) {
        findOptions.limit = limit;
        findOptions.offset = (page - 1) * limit;
    }


    if (typeof search === "string" && search.trim() !== "") {
        findOptions.where[Op.and].push({
            [Op.or]: [
                { "title": { [Op.iLike]: `%${search}%` }},
                { "description": { [Op.iLike]: `%${search}%` }}
            ]
        });
    }

    if (typeof isAccessibleToAllUsers === "boolean") {
        findOptions.where[Op.and].push({ isAccessibleToAllUsers });
    }

    if (Array.isArray(ignoreERIds) && ignoreERIds.length > 0) {
        findOptions.where[Op.and].push({"id": { [Op.notIn]: ignoreERIds }});
    }

    if (findOptions.where[Op.and].length === 0) {
        delete findOptions.where;
    }

    return findOptions;
};

exports.forTeacher = (id, page = 1, limit = 10, search = "") => ({
    "attributes": ["id", "title", "invitation"],
    "distinct": true,
    "include": [
        models.attachment,
        {
            "model": models.user,
            "as": "author",
            "attributes": [],
            "required": false
        },
        {
            "model": models.user,
            "as": "userCoAuthor",
            "duplicating": false,
            "required": false
        }
    ],
    "where": {
        [Op.and]: [
            {
                [Op.or]: [
                    {"title": {[Op.iLike]: `%${search}%`}},
                    {"description": {[Op.iLike]: `%${search}%`}}
                ]
            },
            {
                [Op.or]: [
                    { "authorId": id },
                    { "$userCoAuthor.id$": id }
                ]
            }
        ]
    },
    limit,
    "offset": (page - 1) * limit,
    "order": [["id", "desc"]]
});

exports.forAll = (page = 1, limit = 10, search = "", verified) => {
    const obj = {
        "attributes": ["id", "title", "invitation"],
        "include": [models.attachment],
        limit,
        "where": {
            [Op.or]: [
                {"title": {[Op.iLike]: `%${search}%`}},
                {"description": {[Op.iLike]: `%${search}%`}}
            ]
        },
        "offset": (page - 1) * limit,
        "order": [["id", "desc"]]
    };
    if (verified === true) {
        obj.where.verified = true;
        obj.where.isLastVersionVerified = true;
    } else if (verified === "changed") {
        obj.where.verified = true;
        obj.where.isLastVersionVerified = false;
    } else if (verified === false) {
        obj.where.verified = false;
    }
    return obj
};

exports.public = (page = 1, limit = 10) => ({
    "attributes": ["id", "title", "description"],
    limit,
    "where": {"status": "completed"},
    "order": [["createdAt", "desc"]],
    "offset": (page - 1) * limit
});

exports.text = (before, after, lang, participation, area, duration, format, level) => {
    const conditions = {
        "where": {"isNetworkAccessible": true},
        "attributes": ["isNetworkAccessible", "id", "title", "description", "lang", "teamSize", "field", "duration", "format", "level", "createdAt"],
        "include": [{"model": models.attachment, "required": false, "attributes": ["url"]}]
    };

    if (before && after) {
        conditions.where.createdAt = {[Op.between]: [new Date(after), new Date(before)]};
    } else {
        if (before) {
            conditions.where.createdAt = {[Op.lt]: new Date(before)};
        }
        if (after) {
            conditions.where.createdAt = {[Op.gt]: new Date(after)};
        }
    }
    if (lang) {
        conditions.where.lang = lang;
    }
    if (participation) {
        if (participation === "individual") {
            conditions.where.teamSize = {[Op.eq]: 1};
        } else if (participation === "team") {
            conditions.where.teamSize = {[Op.gt]: 1};
        }
    }
    if (area) {
        conditions.where.field = area;
    }

    if (duration) {
        conditions.where.duration = {[Op.lte]: duration};
    }
    if (format) {
        conditions.where.format = format;
    }
    if (level) {
        conditions.where.level = level;
    }
    console.log(conditions);

    return conditions;
};

exports.loadExport = {
    "include": [
        {
            "model": models.puzzle,
            "include": [{"model": models.hint}]
        },
        models.attachment,
        {
            "model": models.subject,
            "attributes": ["subject"]
        },
        models.hintApp,
        {
            "model": models.asset
        }
    ],
    "order": [
        [
            {"model": models.puzzle},
            "order",
            "asc"
        ],
        [
            {"model": models.puzzle},
            {"model": models.hint},
            "order",
            "asc"
        ]
    ]
};
