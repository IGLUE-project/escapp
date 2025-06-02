"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
    // Add userId to retosSuperados
        await queryInterface.addColumn("retosSuperados", "userId", {
            "type": Sequelize.INTEGER,
            "references": {
                "model": "users",
                "key": "id"
            },
            "onUpdate": "CASCADE",
            "onDelete": "SET NULL"
        });
    },

    async down (queryInterface, Sequelize) {
    // Remove userId from retosSuperados
        await queryInterface.removeColumn("retosSuperados", "userId");
    }
};
