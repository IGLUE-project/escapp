const Sequelize = require("sequelize");
const {models} = require("../models");
const {safeUserOrderColumn} = require("./sortColumns");

exports.hintsByParticipant = (escapeRoomId, turnId, orderBy) => {
    const options = {
        "include": [
            {
                "model": models.team,
                "as": "teamsAgregados",
                "where": {"startTime": {[Sequelize.Op.ne]: null}},
                "required": true,
                "include": [
                    {
                        "model": models.turno,
                        "where": {},
                        "include": {
                            "model": models.escapeRoom,
                            "required": true,
                            "where": {"id": escapeRoomId}
                        }
                    },
                    {
                        "model": models.requestedHint,
                        "include": {"model": models.hint}
                    }
                ]
            }

        ]
    };

    if (turnId) {
        options.include[0].include[0].where.id = turnId;
    }
    const orderCol = safeUserOrderColumn(orderBy);

    if (orderCol) {
        const isPg = process.env.DATABASE_URL;

        options.order = Sequelize.literal(isPg ? `lower("user"."${orderCol}") ASC` : `lower(user.${orderCol}) ASC`);
    }
    return options;
};

exports.hintsByTeam = (escapeRoomId, turnId, orderBy) => {
    const options = {
        "include": [
            {
                "model": models.turno,
                "where": {},
                "include": {
                    "model": models.escapeRoom,
                    "required": true,
                    "where": {"id": escapeRoomId}
                }
            },
            {
                "model": models.requestedHint,
                "include": {"model": models.hint}
            }
        ],
        "where": {"startTime": {[Sequelize.Op.ne]: null}}
    };

    if (turnId) {
        options.include[0].where.id = turnId;
    } else {
        options.include[0].where.status = {[Sequelize.Op.ne]: "test"};
    }
    // This query is team-rooted (and does not join the users table), and the "by teams"
    // view lists teams by name, so the user-column options from the shared order-by
    // dropdown don't apply here. Any requested ordering sorts teams by their name — the
    // previous `lower("user".<col>)` literal referenced a table absent from this query and
    // threw "missing FROM-clause entry for table user".
    if (orderBy) {
        options.order = [[Sequelize.fn("lower", Sequelize.col("team.name")), "ASC"]];
    }
    return options;
};
