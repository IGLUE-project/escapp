"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.addColumn( "puzzles", "sceneId", { "type": Sequelize.INTEGER});
        await queryInterface.addColumn( "reusablePuzzleInstances", "sceneId", { "type": Sequelize.INTEGER});
    },

    async down (queryInterface, _) {
        await queryInterface.removeColumn("puzzles", "sceneId");
        await queryInterface.removeColumn("reusablePuzzleInstances", "sceneId");
    }
};
