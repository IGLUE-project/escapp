module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "report",
        {
            "reason": {
                "type": DataTypes.STRING,
                "validate": {
                    "notEmpty": {"msg": "The reason of the report must be specified."},
                    "isIn": [["inappropriateContent", "copyrightViolation", "policyViolation", "other"]]
                }
            },
            "comments": DataTypes.STRING,
            "reportAuthor": DataTypes.STRING,
            "readed": DataTypes.BOOLEAN
        }
    );
};
