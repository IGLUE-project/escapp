module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "puzzle",
        {
            "title": {
                "type": DataTypes.STRING,
                "validate": {
                    "len": [0, 5000],
                    "notEmpty": {"msg": "El título no puede estar vacío."}
                }
            },
            "sol": {
                "type": DataTypes.TEXT,
                "validate": {"len": [0, 5000]}
            },
            "validator": {
                "type": DataTypes.TEXT,
                "validate": {"isIn": [["exact", "caseinsensitive", "range", "regex"]]}
            },
            "desc": {
                "type": DataTypes.TEXT,
                "validate": {"len": [0, 5000]}
            },
            "order": {
                "type": DataTypes.INTEGER,
                "allowNull": false
            },
            "correct": {
                "type": DataTypes.TEXT,
                "validate": {"len": [0, 5000]}
            },
            "fail": {
                "type": DataTypes.TEXT,
                "validate": {"len": [0, 5000]}
            },
            "automatic": {
                "type": DataTypes.BOOLEAN,
                "defaultValue": false
            },
            "score": {
                "type": DataTypes.FLOAT,
                "defaultValue": 0.0,
                "validate": {
                    "min": 0,
                    "max": 100
                }
            }
        }
    );
};
