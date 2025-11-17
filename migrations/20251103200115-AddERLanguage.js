"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.addColumn("escapeRooms", "lang", { "type": Sequelize.TEXT});
    },

    async down (queryInterface) {
        await queryInterface.removeColumn("escapeRooms", "lang");
    }
};
