"use strict";

module.exports = {
    "up": (queryInterface, Sequelize) => queryInterface.createTable(
        "reusablePuzzles",
        {
            "id": {
                "type": Sequelize.INTEGER,
                "allowNull": false,
                "primaryKey": true,
                "autoIncrement": true,
                "unique": true
            },
            "name": {
                "type": Sequelize.STRING,
                "unique": true,
                "allowNull": false,
                "validate": {"notEmpty": {"msg": "El nombre no puede estar vacío."}}
            },
            "description": Sequelize.STRING,
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

    "down": (queryInterface) => queryInterface.dropTable("reusablePuzzles")
};
