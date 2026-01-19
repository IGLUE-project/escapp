// Definition of the AdminConfig model:

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "adminConfig",
        {
            "urls": {
                "type": DataTypes.TEXT,
                "validate": {"notEmpty": {"msg": "urls must not be empty"}}
            },
            "whitelistDomains": {
                "type": DataTypes.TEXT,
                "allowNull": true
            },
            "teacherDomains": {
                "type": DataTypes.TEXT,
                "allowNull": true
            },
            "disableChoosingRole": {
                "type": DataTypes.BOOLEAN,
                "allowNull": true
            },
            "enableTeacherPersonalInfo": {
                "type": DataTypes.BOOLEAN,
                "allowNull": true
            },
            "emailValidationStudent": {
                "type": DataTypes.BOOLEAN,
                "allowNull": true
            },
            "emailValidationTeacher": {
                "type": DataTypes.BOOLEAN,
                "allowNull": true
            }
        }
    );
};
