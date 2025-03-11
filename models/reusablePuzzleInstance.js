// Definition of the Asset model:

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "reusablePuzzleInstance",
        {
            "config": {
                "type": DataTypes.STRING,
            },
        }
    );
};
