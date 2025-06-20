"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.removeColumn("puzzles", "assignedReusablePuzzleInstance", { "type": Sequelize.STRING});
    },

    async down (queryInterface, _) {
        await queryInterface.addColumn("puzzles", "assignedReusablePuzzleInstance");
    }
};
