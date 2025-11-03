"use strict";

module.exports = {
    "up": async (queryInterface, Sequelize) => {
    // Step 1: Add the column as nullable
        await queryInterface.addColumn("assets", "userId", {
            "type": Sequelize.INTEGER,
            "allowNull": true
        });

        // Step 2: Optionally backfill existing rows with a default user ID (e.g., 1)
        await queryInterface.sequelize.query(`
      UPDATE "assets" SET "userId" = 1 WHERE "userId" IS NULL;
    `);

        // Step 3: Alter column to be NOT NULL
        await queryInterface.changeColumn("assets", "userId", {
            "type": Sequelize.INTEGER,
            "allowNull": false
        });
    },

    "down": async (queryInterface) => {
    // Remove the column in rollback
        await queryInterface.removeColumn("assets", "userId");
    }
};
