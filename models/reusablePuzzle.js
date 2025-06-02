
// Definition of the Asset model:

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "reusablePuzzle",
        {
            "name": {
                "type": DataTypes.STRING,
                "unique": true,
                "validate": {"notEmpty": {"msg": "name must not be empty"}}
            },
            "description": {"type": DataTypes.STRING},
            "config": {
                "type": DataTypes.JSON,
                "validate": {"notEmpty": {"msg": "config must not be empty"}}
            }
        }
    );
};
