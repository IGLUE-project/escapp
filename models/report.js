module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "report",
        {
            "reason": {
                "type": DataTypes.STRING,
                "validate": {"notEmpty": {"msg": "Se debe indicar el motivo de la denuncia."}}
            },
            "comments": DataTypes.STRING,
            "reportAuthor": DataTypes.STRING,
            "readed": DataTypes.BOOLEAN,
        }
    );
};
