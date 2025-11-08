"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.addColumn("reusablePuzzles", "instructions", { "type": Sequelize.STRING});
    },

    async down (queryInterface) {
        await queryInterface.removeColumn("reusablePuzzles", "instructions");
    }
};
