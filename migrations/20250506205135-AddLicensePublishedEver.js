"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    "up": (queryInterface, Sequelize) => queryInterface.addColumn("escapeRooms", "publishedOnce", {
        "type": Sequelize.BOOLEAN,
        "defaultValue": false
    }),
    "down": (queryInterface) => queryInterface.removeColumn("escapeRooms", "publishedOnce")
};
