"use strict";

module.exports = {
    "up" (queryInterface, Sequelize) {
        return queryInterface.createTable(
            "catalogResourceUsage",
            {
                "catalogResourceId": {
                    "type": Sequelize.STRING,
                },
                "escapeRoomId": {
                    "type": Sequelize.STRING,
                }
            },
            {"sync": {"force": true}}
        );
    },
    down (queryInterface) {
        return queryInterface.dropTable("catalogResourceUsage");
    }
};
