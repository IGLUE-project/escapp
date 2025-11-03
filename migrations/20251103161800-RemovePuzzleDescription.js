
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface) {
        await queryInterface.removeColumn("puzzles", "desc");
    },
    async down (queryInterface, Sequelize) {
        await queryInterface.addColumn("puzzles", "desc", { "type": Sequelize.TEXT });
    }
};
