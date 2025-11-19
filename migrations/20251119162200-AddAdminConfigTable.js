"use strict";

module.exports = {
    up (queryInterface, Sequelize) {
        return queryInterface.createTable(
            "adminConfigs",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "allowNull": false,
                    "primaryKey": true,
                    "autoIncrement": true,
                    "unique": true
                },
                urls: {
                    type: Sequelize.TEXT,
                    allowNull: false,
                },
                createdAt: {
                    type: Sequelize.DATE,
                    allowNull: false,
                },
                updatedAt: {
                    type: Sequelize.DATE,
                    allowNull: false,
                },
            },
            {"sync": {"force": true}}
        );
    },
    down (queryInterface) {
        return queryInterface.dropTable("adminConfigs");
    }
};
