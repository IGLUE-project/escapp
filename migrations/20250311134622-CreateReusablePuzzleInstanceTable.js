"use strict";

module.exports = {
    "up": (queryInterface, Sequelize) => queryInterface.createTable(
        "reusablePuzzleInstances",
        {
            "id": {
                "type": Sequelize.INTEGER,
                "allowNull": false,
                "primaryKey": true,
                "autoIncrement": true,
                "unique": true
            },
            "config": {
                "type": Sequelize.STRING,
            },
            "escapeRoomId": {
                "type": Sequelize.STRING,
                "allowNull": false,
            },
            "reusablePuzzleId": {
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

    "down": (queryInterface) => queryInterface.dropTable("reuseablePuzzleInstances")
};
