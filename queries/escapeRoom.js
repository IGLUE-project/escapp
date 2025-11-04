const {models} = require("../models");
const {Op} = require("sequelize");

exports.load = {
    "include": [
        {
            "model": models.user,
            "as": "author"
        },
        {"model": models.attachment},
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
            "required": false,
            "where": {"status": {[Op.not]: "test"}}
        },
        {
            "model": models.puzzle,
            "include": [{"model": models.hint}]
        },
        models.attachment,
        models.hintApp
    ],
    "order": [
        [
            {"model": models.turno},
            "date",
            "asc"
        ],
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


exports.loadPuzzles = {
    "include": [
        {
            "model": models.puzzle,
            "include": [{"model": models.hint}]
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


exports.loadComplete = {
    "include": [
        {
            "model": models.turno,
            "required": false,
            "where": {"status": {[Op.not]: "test"}},
            "include": {
                "model": models.team,
                "attributes": ["id"]
            }
        },
        {
            "model": models.puzzle,
            "include": [{"model": models.hint}]
        },
        models.attachment,
        models.asset,
        models.hintApp,
        models.reusablePuzzleInstance,
        {
            "model": models.user,
            "as": "author"
        },
        {
            "model": models.user,
            "as": "userCoAuthor",
            "required": false
        }
    ],
    "order": [
        [
            {"model": models.turno},
            "date",
            "asc"
        ],
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

exports.ids = (ids) => {
    const findOptions = {
        "attributes": [
            "id",
            "title",
            "invitation",
            "scope"
        ],
        "distinct": true,
        "where": {"id": {[Op.in]: ids}},
        "include": [
            {
                "model": models.turno,
                "attributes": ["id", "date", "status", "capacity", "from", "to"],
                "required": true,
                "include": [
                    {
                        "model": models.user,
                        "attributes": ["id"],
                        "as": "students",
                        "required": false
                    }
                ]
            },
            models.attachment,
            {
                "model": models.user,
                "as": "author",
                "required": false
            },
            {
                "model": models.user,
                "as": "userCoAuthor",
                "duplicating": false,
                "required": false
            }
        ],
        "order": [["id", "desc"]]
    };

    return findOptions;
};

exports.all = (user, page = 1, limit = 10, search, finished) => {
    const findOptions = {
        "attributes": [
            "id",
            "title",
            "invitation",
            "duration",
            "scope"
        ],
        "distinct": true,
        "include": [
            {
                "model": models.turno,
                "attributes": ["status", "capacity", "from", "to", "startTime"],
                "required": true,
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
                "required": false
            },
            {
                "model": models.reusablePuzzleInstance,
                "required": false
            }
        ]
    };

    if (user) {
        findOptions.include[0].include[0].where = {"id": user};
        findOptions.include[0].include[0].required = true;
        findOptions.attributes = ["id", "title"];
        findOptions.distinct = false;


        if (finished === true) {
            findOptions.include[0].where = { "status": "finished" };
            findOptions.include[0].include.push({
                "model": models.team,
                "required": false,
                "where": {"startTime": {[Op.lt]: new Date(new Date() - 24 * 60 * 60 * 1000)}},
                "attributes": ["startTime"],
                "include": {"model": models.user, "as": "teamMembers", "required": true}
            });
        } else if (finished === false) {
            findOptions.include[0].where = { "status": {[Op.or]: ["pending", "active"] }};
            findOptions.include[0].include.push({
                "model": models.team,
                "required": false,
                "where": {"startTime": {[Op.or]: [{[Op.gte]: new Date(new Date() - 24 * 60 * 60 * 1000)}, null]}},
                "attributes": ["startTime"],
                "include": {"model": models.user, "as": "teamMembers", "required": true}
            });
        }
    }
    if (page !== null) {
        findOptions.limit = limit;
        findOptions.offset = (page - 1) * limit;
    }
    if (search) {
        findOptions.where = {
            [Op.and]: [
                {
                    [Op.or]: [
                        {"title": {[Op.iLike]: `%${search}%`}},
                        {"description": {[Op.iLike]: `%${search}%`}}
                    ]
                }
            ]
        };
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

exports.forAll = (page = 1, limit = 10, search = "") => ({
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
});

exports.public = (page = 1, limit = 10) => ({
    "attributes": ["id", "title", "description"],
    limit,
    "where": {
        "status": "completed",
    },
    "order": [["createdAt", "desc"]],
    "offset": (page - 1) * limit
})

exports.text = (before, after, lang) => {

    let conditions = {
        "where": {
            "status": "completed",
        },
        "attributes": ["id", "title", "description"]
    }
    if (before) {
        conditions.where.createdAt = {[Op.lt]: new Date(before)};
    }
    if (after) {
        conditions.where.createdAt = {[Op.gt]: new Date(after)};
    }
    if (lang) {
        conditions.where.lang = lang;
    }

    console.log(conditions);

    return conditions
}

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
            "model": models.asset,
            "attributes": ["url", "filename", "mime"]
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
