"use strict";

module.exports = {
    "up": (queryInterface, Sequelize) => queryInterface.addColumn("puzzles", "validator", {
        "type": Sequelize.TEXT,
        "defaultValue": "case-insensitive"
    }),
    "down": (queryInterface) => queryInterface.removeColumn("puzzles", "validator")
};

