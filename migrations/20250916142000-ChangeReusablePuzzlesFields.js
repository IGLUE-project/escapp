"use strict";

module.exports = {
    "up" (queryInterface, Sequelize) { return Promise.all([queryInterface.removeColumn("reusablePuzzles", "description"),
            queryInterface.addColumn("reusablePuzzles", "expectedDuration", Sequelize.STRING),
            queryInterface.removeColumn("reusablePuzzleInstances", "description"),
            queryInterface.addColumn("reusablePuzzleInstances", "expectedDuration", Sequelize.STRING)])},
    "down" (queryInterface, Sequelize) { return Promise.all([queryInterface.removeColumn("reusablePuzzles", "expectedDuration"),
        queryInterface.addColumn("reusablePuzzles", "description", Sequelize.STRING),
        queryInterface.removeColumn("reusablePuzzleInstances", "expectedDuration"),
        queryInterface.addColumn("reusablePuzzleInstances", "description", Sequelize.STRING)])},
};
