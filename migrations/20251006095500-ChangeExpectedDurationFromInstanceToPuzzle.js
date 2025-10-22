
"use strict";

module.exports = {
    "up" (queryInterface, Sequelize) { return Promise.all([
            queryInterface.removeColumn("reusablePuzzleInstances", "expectedDuration"),
            queryInterface.addColumn("puzzles", "expectedDuration", Sequelize.STRING)])},
    "down" (queryInterface, Sequelize) { return Promise.all([
        queryInterface.removeColumn("puzzles", "expectedDuration"),
        queryInterface.addColumn("reusablePuzzleInstances", "expectedDuration", Sequelize.STRING)])},
};
