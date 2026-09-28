"use strict";

/*
 * Adds a per-language map of bug-report form URLs to the general settings.
 * Shape: { "en": "https://…", "es": "https://…", … }. The existing single
 * `errorReportUrl` remains the fallback used when a language has no specific URL.
 */

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.addColumn("adminConfigs", "errorReportUrls", {
            "type": Sequelize.JSON,
            "allowNull": true
        });

        // Seed the known bug-report forms:
        //   default (English + any language without its own entry) -> errorReportUrl
        //   Spanish -> per-language override
        const defaultUrl = "https://forms.gle/B8F8B2E5Refy58ib8";
        const errorReportUrls = JSON.stringify({"es": "https://forms.gle/4sxufMCbBrkAFQ9YA"});

        await queryInterface.sequelize.query(
            `UPDATE "adminConfigs" SET "errorReportUrl" = :defaultUrl, "errorReportUrls" = CAST(:errorReportUrls AS json) WHERE id = 1`,
            {"replacements": {defaultUrl, errorReportUrls}}
        );
    },

    async down (queryInterface) {
        await queryInterface.removeColumn("adminConfigs", "errorReportUrls");
    }
};
