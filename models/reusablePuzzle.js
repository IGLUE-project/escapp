
// Definition of the Asset model:

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "reusablePuzzle",
        {
            "name": {
                "type": DataTypes.STRING,
                "validate": {"notEmpty": {"msg": "name must not be empty"}}
            },
            "description": {"type": DataTypes.STRING}
        }
    );
};
