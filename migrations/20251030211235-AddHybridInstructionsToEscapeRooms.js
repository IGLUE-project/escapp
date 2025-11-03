
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.addColumn("escapeRooms", "hybridInstructions", { "type": Sequelize.STRING});
    },

    async down (queryInterface) {
        await queryInterface.removeColumn("escapeRooms", "hybridInstructions");
    }
};
