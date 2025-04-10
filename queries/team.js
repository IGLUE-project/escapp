const Sequelize = require("sequelize");
const {models} = require("../models");


exports.teamRetosNoSuperados = (escapeRoomId, turnId) => {
    const where = {
        "attributes": ["id"],
        "raw": true,
        "where": {"startTime": {[Sequelize.Op.ne]: null}},
        "include": [
            {
                "model": models.turno,
                "attributes": [],
                "required": false,
                "where": {
                    escapeRoomId,
                    "status": {[Sequelize.Op.not]: "test"}
                }
            },
            {
                "model": models.retosSuperados,
                "as": "puzzlesSolved",
                "attributes": ["puzzleId", "success", "createdAt", "answer"],
                "where": {"success": false},
                "required": false,
                "duplicating": true,
                "include": [
                    {
                        "model": models.puzzle,
                        "attributes": ["order"]
                    }
                ]
            }
        ],
        "order": [
            Sequelize.literal("lower(team.name) ASC"),
            [
                {
                    "model": models.retosSuperados,
                    "as": "puzzlesSolved"
                },
                "createdAt",
                "ASC"
            ]
        ]
    };

    if (turnId) {
        where.include[0].where.id = turnId;
    }
    return where;
};

exports.teamComplete = (escapeRoomId, turnId, order, waiting = false) => {
    const where = {
        // "attributes": [],
        "where": {},
        "include": [
            {
                "model": models.turno,
                "attributes": ["startTime"],
                "required": true,
                "where": {
                    escapeRoomId,
                    "status": {[Sequelize.Op.not]: "test"}
                }
            },
            {
                "model": models.user,
                "as": "teamMembers",
                "attributes": [
                    "name",
                    "surname",
                    "anonymized"
                ]
            },
            {
                "model": models.puzzle,
                "as": "retos",
                "through": {
                    "model": models.retosSuperados,
                    "where": {"success": true}
                }
            },
            {
                "model": models.requestedHint,
                "attributes": [
                    "id",
                    "hintId",
                    "success",
                    "score",
                    "createdAt"
                ],
                "required": false,
                "include": [{"model": models.hint}]
            }
        ],
        "order": [
            [
                {
                    "model": models.puzzle,
                    "as": "retos"
                },
                {"model": models.retosSuperados},
                "createdAt",
                "ASC"
            ]
        ]
    };

    if (!waiting) {
        where.where.startTime = {[Sequelize.Op.ne]: null};
    }
    if (turnId) {
        where.include[0].where.id = turnId;
    }

    if (order) {
        if (order === "order") {
            where.order = [
                [
                    {
                        "model": models.puzzle,
                        "as": "retos"
                    },
                    "order",
                    "ASC"
                ]
            ];
        } else {
            where.order = [
                Sequelize.literal(order),
                ...where.order
            ];
        }
    }
    return where;
};

exports.puzzlesByTeam = (escapeRoomId, turnId, hints = false) => {
    const options = {
        "where": {"startTime": {[Sequelize.Op.ne]: null}},
        "include": [
            {
                "model": models.turno,
                "where": {
                    escapeRoomId,
                    "status": {[Sequelize.Op.not]: "test"}
                }
            },
            {
                "model": models.puzzle,
                "as": "retos",
                "through": {
                    "model": models.retosSuperados,
                    "where": {"success": true}
                }
            },
            {
                "model": models.user,
                "as": "teamMembers",
                "attributes": [
                    "name",
                    "surname",
                    "anonymized"
                ]
            }
        ],
        "order": [Sequelize.literal("lower(team.name) ASC"), [{"model": models.puzzle, "as": "retos"}, {"model": models.retosSuperados}, "createdAt", "ASC"]]
    };

    if (hints) {
        options.include.push({
            "model": models.requestedHint,
            "include": [{"model": models.hint}]
        });
    }
    if (turnId) {
        options.include[0].where.id = turnId;
    }
    return options;
};

exports.ranking = (escapeRoomId, turnId) => {
    // Const isPg = process.env.DATABASE_URL;
    // Const retoTime = isPg ? "\"retos->retosSuperados\".\"createdAt\"" : "`retos->retosSuperados`.`createdAt`";
    const options = {
        // "includeIgnoreAttributes": false,
        "where": {"startTime": {[Sequelize.Op.ne]: null}},
        "attributes": [
            "id",
            "name",
            "startTime"
        ],
        "include": [
            {
                "model": models.user,
                "as": "teamMembers",
                "attributes": [
                    "name",
                    "surname",
                    "anonymized"
                ],
                "through": {
                    "model": models.members,
                    "duplicating": true,
                    "attributes": []
                },
                "include": {
                    "model": models.turno,
                    "as": "turnosAgregados",
                    "through": {
                        "model": models.participants,
                        "required": true,
                        "attributes": ["attendance"],
                        "where": {"attendance": true}
                    }
                }
            },
            {
                "model": models.turno,
                "duplicating": true,
                "attributes": [
                    "id",
                    "date",
                    "startTime"
                ],
                "where": {
                    // "status": {[Sequelize.Op.not]: "pending"},
                    escapeRoomId
                }
            },
            {
                "model": models.puzzle,
                "attributes": ["id", "order"],
                "as": "retos",
                "required": false,
                "duplicating": true,
                "through": {
                    "model": models.retosSuperados,
                    "where": {"success": true},
                    "attributes": ["createdAt"],
                    "required": true
                }
            }
        ],
        "order": [
            [
                {"model": models.puzzle, "as": "retos"},
                {"model": models.retosSuperados}, "createdAt", "ASC"
            ]
        ]
    };


    if (turnId) {
        options.include[1].where.id = turnId;
    } else {
        options.include[1].where.status = {[Sequelize.Op.ne]: "test"};
    }

    return options;
};

exports.rankingShort = (escapeRoomId, turnId) => {
    const options = {
        "required": false,
        "where": {"startTime": {[Sequelize.Op.ne]: null}},
        "attributes": [
            "id",
            "name",
            "startTime"
        ],
        "include": [
            {
                "model": models.user,
                "as": "teamMembers",
                "attributes": [
                    "name",
                    "surname",
                    "username",
                    "anonymized"
                ],
                "through": {
                    "model": models.members,
                    "duplicating": true,
                    "attributes": []
                },
                "include": {
                    "model": models.turno,
                    "attributes": [],
                    "as": "turnosAgregados",
                    "through": {
                        "model": models.participants,
                        "required": true,
                        "attributes": []
                        // "where": {"attendance": true}
                    }
                }
            },
            {
                "model": models.turno,
                "duplicating": true,
                "attributes": [
                    "id",
                    "date",
                    "startTime"
                ],
                "where": {
                    // "status": {[Sequelize.Op.not]: "pending"},
                    escapeRoomId
                }
            },
            {
                "model": models.puzzle,
                "attributes": ["id", "order"],
                "as": "retos",
                "required": false,
                "duplicating": true,
                "through": {
                    "model": models.retosSuperados,
                    "where": {"success": true},
                    "attributes": ["createdAt"],
                    "required": true
                }
            }
        ],
        "order": [
            [
                {"model": models.puzzle, "as": "retos"},
                {"model": models.retosSuperados}, "createdAt", "ASC"
            ]
        ]
    };


    if (turnId) {
        options.include[1].where.id = turnId;
    } else {
        options.include[1].where.status = {[Sequelize.Op.not]: "test"};
    }

    return options;
};

exports.teamInfo = (escapeRoomId, includeTest = false) => {
    const ret = {
        "include": [
            {
                "model": models.turno,
                "required": true,
                "where": {escapeRoomId},
                "include": [
                    {
                        "model": models.escapeRoom,
                        "attributes": ["duration", "forbiddenLateSubmissions"],
                        "include": [
                            {
                                "model": models.puzzle,
                                "attributes": ["id"]
                            }
                        ]
                    }
                ]
            },
            {
                "model": models.user,
                "through": "members",
                "as": "teamMembers",
                "attributes": ["username","anonymized"]
            }
        ]
    };

    if (includeTest) {
        ret.include[0].where.status = {[Sequelize.Op.not]: "test"};
    }
    return ret;
};

exports.puzzlesAndHints = () => (
    {
        "include": [
            {
                "model": models.turno,
                "include": [
                    {
                        "model": models.escapeRoom,
                        "include": [
                            {
                                "model": models.puzzle,
                                "include": [{"model": models.hint}]
                            }
                        ]
                    }
                ]
            }
        ],
        "order": [
            [
                {"model": models.turno},
                {"model": models.escapeRoom},
                {"model": models.puzzle},
                "order",
                "asc"
            ],
            [
                {"model": models.turno},
                {"model": models.escapeRoom},
                {"model": models.puzzle},
                {"model": models.hint},
                "order",
                "asc"
            ]
        ]
    }
);
