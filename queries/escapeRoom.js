const {models} = require("../models");
const {Op} = require("sequelize");

exports.load = {
    "include": [
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


exports.loadShow = {
    "include": [
        {"model": models.turno},
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
            models.attachment
        ],
        "order": [["id", "desc"]]
    };

    return findOptions;
};

exports.all = (user, page = 1, limit = 10) => {
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
                "attributes": ["status", "capacity", "from", "to"],
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
            models.attachment
        ]
    };

    if (user) {
        findOptions.include[0].include[0].where = {"id": user};
        findOptions.include[0].include[0].required = true;
        findOptions.attributes = ["id", "title"];
        findOptions.distinct = false;
    }
    if (page !== null) {
        findOptions.limit = limit;
        findOptions.offset = (page - 1) * limit;
    }
    return findOptions;
};

exports.forTeacher = (id, page = 1, limit = 10) => ({
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
            "attributes": [],
            "duplicating": false,
            "required": false
        }
    ],
    "where": {
        [Op.or]: [
            { "authorId": id },
            { "$userCoAuthor.id$": id }
        ]
    },
    limit,
    "offset": (page - 1) * limit,
    "order": [["id", "desc"]]
});

exports.forAll = (page = 1, limit = 10) => ({
    "attributes": ["id", "title", "invitation"],
    "include": [models.attachment],
    limit,
    "offset": (page - 1) * limit,
    "order": [["id", "desc"]]
});
