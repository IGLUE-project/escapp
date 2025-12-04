
"use strict";

module.exports = {
    "up": (queryInterface, Sequelize) => queryInterface.createTable(
        "scenes",
        {
            "id": {
                "type": Sequelize.INTEGER,
                "primaryKey": true,
                "unique": true,
                "autoIncrement": true
            },
            "escapeRoomId": {
                "type": Sequelize.INTEGER,
                "allowNull": false
            },
            "content": {
                "type": Sequelize.JSON,
                "allowNull": false
            },
            "name": {
                "type": Sequelize.STRING,
                "allowNull": false
            },
            "thumbnail": {
                "type": Sequelize.TEXT,
                "allowNull": false
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

    "down": (queryInterface) => queryInterface.dropTable("scenes")
};
