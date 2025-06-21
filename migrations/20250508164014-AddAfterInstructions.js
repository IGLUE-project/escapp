"use strict";

module.exports = {
    "up": (queryInterface, Sequelize) => queryInterface.
        addColumn("escapeRooms", "afterInstructions", Sequelize.STRING),
    "down": (queryInterface) => queryInterface.
        removeColumn("escapeRooms", "afterInstructions")
};
