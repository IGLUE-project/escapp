"use strict";

require("dotenv").config();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.addColumn("adminConfigs", "errorReportUrl", {
            "type": Sequelize.TEXT,
            "allowNull": true
        });

        const errorReportUrl = process.env.ERROR_REPORT_URL || null;

        await queryInterface.sequelize.query(
            `UPDATE "adminConfigs" SET "errorReportUrl" = :errorReportUrl WHERE id = 1`,
            {"replacements": {errorReportUrl}}
        );
    },
    async down (queryInterface) {
        await queryInterface.removeColumn("adminConfigs", "errorReportUrl");
    }
};
