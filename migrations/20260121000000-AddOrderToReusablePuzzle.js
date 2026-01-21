"use strict";

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.addColumn("reusablePuzzles", "order", { "type": Sequelize.INTEGER});
    },

    async down (queryInterface) {
        await queryInterface.removeColumn("reusablePuzzles", "order");
    }
};