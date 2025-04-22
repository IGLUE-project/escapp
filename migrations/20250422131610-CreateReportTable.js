"use strict";

module.exports = {
    "up": (queryInterface, Sequelize) => queryInterface.createTable(
        "reports",
        {
            "id": {
                "type": Sequelize.INTEGER,
                "allowNull": false,
                "primaryKey": true,
                "autoIncrement": true,
                "unique": true
            },
            "reason": {
                "type": Sequelize.STRING,
                "allowNull": false,
                "validate": {"notEmpty": {"msg": "Se debe indicar el motivo de la denuncia."}}
            },
            "comments": Sequelize.STRING,
            "reportAuthor": {
                "type": Sequelize.STRING,
                "allowNull": false,
            },
            "escapeRoomId": {
                "type": Sequelize.STRING,
                "allowNull": false,
            },
            "createdAt": {
                "type": Sequelize.DATE,
                "allowNull": false
            },
            "updatedAt": {
                "type": Sequelize.DATE,
                "allowNull": false
            }
        },
        {"sync": {"force": true}}
    ),

    "down": (queryInterface) => queryInterface.dropTable("reports")
};
