"use strict";

module.exports = {
    "up": (queryInterface, Sequelize) => queryInterface.addColumn("reusablePuzzles", "config", Sequelize.JSON),
    "down": (queryInterface) => queryInterface.removeColumn("reusablePuzzles", "config")
};
