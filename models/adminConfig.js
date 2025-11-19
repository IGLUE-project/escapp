// Definition of the Asset model:

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "adminConfig",
        {
            "urls": {
                "type": DataTypes.TEXT,
                "validate": {"notEmpty": {"msg": "urls must not be empty"}}
            },
       }
    );
};
