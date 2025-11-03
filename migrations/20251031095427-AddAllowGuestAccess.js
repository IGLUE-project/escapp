
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.addColumn("escapeRooms", "allowGuests", { "type": Sequelize.BOOLEAN});
    },

    async down (queryInterface) {
        await queryInterface.removeColumn("escapeRooms", "allowGuests");
    }
};
