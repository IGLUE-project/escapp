"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    "up": (queryInterface, Sequelize) => queryInterface.addColumn("users", "eduLevel", Sequelize.STRING),
    "down": (queryInterface) => queryInterface.removeColumn("eduLevel", Sequelize.STRING)
};
