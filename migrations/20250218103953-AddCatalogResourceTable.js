"use strict";

module.exports = {
    "up" (queryInterface, Sequelize) {
        return queryInterface.createTable(
            "catalogResources",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "allowNull": false,
                    "primaryKey": true,
                    "autoIncrement": true,
                    "unique": true
                },
                "fileName": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                },
                "userId": {
                    "type": Sequelize.INTEGER,
                    "allowNull": false
                },
                "type": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                },
                "url": {
                    "type": Sequelize.STRING,
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
        );
    },
    down (queryInterface) {
        return queryInterface.dropTable("catalogResources");
    }
};
