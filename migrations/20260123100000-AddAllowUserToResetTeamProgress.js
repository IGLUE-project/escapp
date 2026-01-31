"use strict";

module.exports = {
    up (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            "escapeRooms",
            "allowUserToResetTeamProgress",
            {
                "type": Sequelize.BOOLEAN,
                "defaultValue": false
            }
        );
    },

    down (queryInterface) {
        return queryInterface.removeColumn("escapeRooms", "allowUserToResetTeamProgress");
    }
};
