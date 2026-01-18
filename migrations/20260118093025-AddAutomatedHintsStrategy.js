"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn("escapeRooms", "automatedHints", {
            type: Sequelize.ENUM(
                "NO_AUTOMATED_HINTS",
                "AUTOMATED_SUGGESTION",
                "AUTOMATED_HINTS"
            ),
            allowNull: true
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn("escapeRooms", "automatedHints");

        // Important for PostgreSQL: remove the ENUM type itself
        await queryInterface.sequelize.query(
            'DROP TYPE IF EXISTS "enum_escapeRooms_automatedHints";'
        );
    }
};
