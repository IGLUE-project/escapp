"use strict";

module.exports = {
    "up": (queryInterface, Sequelize) => queryInterface.addColumn("puzzles", "assignedReusablePuzzleInstance", {
        "type": Sequelize.STRING,
        "allowNull": true
    }),
    "down": (queryInterface) => queryInterface.removeColumn("puzzles", "assignedReusablePuzzleInstance")
};
