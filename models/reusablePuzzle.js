
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
            "instructions": {"type": DataTypes.STRING},
            "order": {
                "type": DataTypes.INTEGER,
                "defaultValue": 99999,
                "validate": {
                    "min": 1,
                    "max": 99999
                }
            },
            "config": {
                "type": DataTypes.JSON,
                "validate": {"notEmpty": {"msg": "config must not be empty"}}
            }
        }
    );
};