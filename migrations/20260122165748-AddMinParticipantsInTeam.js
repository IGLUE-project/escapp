"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.addColumn("escapeRooms", "minTeamSize", { "type": Sequelize.INTEGER});
    },

    async down (queryInterface) {
        await queryInterface.removeColumn("escapeRooms", "minTeamSize");
    }
};
 