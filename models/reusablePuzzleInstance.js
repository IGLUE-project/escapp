// Definition of the Asset model:

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "reusablePuzzleInstance",
        {
            "config": {"type": DataTypes.STRING},
            "name": {
                "type": DataTypes.STRING,
                "validate": {"notEmpty": {"msg": "name must not be empty"}}
            },
            "reusablePuzzleId": {"type": DataTypes.INTEGER}
        }
    );
};
