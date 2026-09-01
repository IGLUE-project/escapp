"use strict";

/*
 * Freezes the "Escapp 2.0" date in the general settings.
 * It is set once, here, to the earliest terms acceptance across all users
 * (MIN(lastAcceptedTermsDate)). From then on the IGLUE stats page reads this
 * frozen value ("Since Escapp 2.0") instead of recomputing the minimum, so the
 * reference date stays stable even as user data changes.
 */

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.addColumn("adminConfigs", "escapp2Date", {
            "type": Sequelize.DATE,
            "allowNull": true
        });

        const [rows] = await queryInterface.sequelize.query(
            `SELECT MIN("lastAcceptedTermsDate") AS "minDate" FROM "users" WHERE "lastAcceptedTermsDate" IS NOT NULL`
        );
        const escapp2Date = rows && rows[0] && rows[0].minDate ? rows[0].minDate : new Date();

        await queryInterface.sequelize.query(
            `UPDATE "adminConfigs" SET "escapp2Date" = :escapp2Date WHERE id = 1`,
            {"replacements": {escapp2Date}}
        );
    },

    async down (queryInterface) {
        await queryInterface.removeColumn("adminConfigs", "escapp2Date");
    }
};
