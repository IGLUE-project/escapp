"use strict";

require("dotenv").config();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        // Add new columns
        await queryInterface.addColumn("adminConfigs", "availableLanguages", {
            "type": Sequelize.TEXT,
            "allowNull": true
        });
        await queryInterface.addColumn("adminConfigs", "exportAllowed", {
            "type": Sequelize.STRING,
            "allowNull": true
        });

        // Populate with values from .env
        const availableLanguages = process.env.AVAILABLE_LANGUAGES || null;
        const exportAllowed = process.env.EXPORT_ALLOWED || null;

        // Update existing record (id=1) with .env values
        await queryInterface.sequelize.query(
            `UPDATE "adminConfigs" SET
                "availableLanguages" = :availableLanguages,
                "exportAllowed" = :exportAllowed
            WHERE id = 1`,
            {
                "replacements": {
                    availableLanguages,
                    exportAllowed
                }
            }
        );
    },
    async down (queryInterface) {
        await queryInterface.removeColumn("adminConfigs", "availableLanguages");
        await queryInterface.removeColumn("adminConfigs", "exportAllowed");
    }
};
