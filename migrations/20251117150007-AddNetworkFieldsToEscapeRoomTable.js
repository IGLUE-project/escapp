"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn("escapeRooms", "verified", {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        });
        await queryInterface.addColumn("escapeRooms", "verified_at", {
            type: Sequelize.DATE,
            "allowNull": true
        });
        await queryInterface.addColumn("escapeRooms", "isLastVersionVerified", {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        });
        await queryInterface.addColumn("escapeRooms", "isAccessibleToAllUsers", {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        });
        await queryInterface.addColumn("escapeRooms", "isPubliclyAccessible", {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        });
        await queryInterface.addColumn("escapeRooms", "isNetworkAccessible", {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn("escapeRooms", "isNetworkAccessible");
        await queryInterface.removeColumn("escapeRooms", "isPubliclyAccessible");
        await queryInterface.removeColumn("escapeRooms", "isAccessibleToAllUsers");
        await queryInterface.removeColumn("escapeRooms", "isLastVersionVerified");
        await queryInterface.removeColumn("escapeRooms", "verified_at");
        await queryInterface.removeColumn("escapeRooms", "verified");
    }
};