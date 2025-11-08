"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
    // Add userid to requestedHints
        await queryInterface.addColumn("requestedHints", "userId", {
            "type": Sequelize.INTEGER,
            "references": {
                "model": "users",
                "key": "id"
            },
            "onUpdate": "CASCADE",
            "onDelete": "SET NULL"
        });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    },

    async down (queryInterface) {
    // Remove userid from requestedHints
        await queryInterface.removeColumn("requestedHints", "userId");
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    }
};
