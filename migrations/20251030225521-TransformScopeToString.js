"use strict";

module.exports = {
    async up (queryInterface, Sequelize) {
    // 1. Add a temporary column with the new string type
        await queryInterface.addColumn("escapeRooms", "scope_tmp", {
            "type": Sequelize.STRING,
            "allowNull": true
        });

        // 2. Copy and transform data from the old boolean column
        await queryInterface.sequelize.query(`
      UPDATE "escapeRooms"
      SET "scope_tmp" = CASE
        WHEN "scope" = FALSE THEN 'public'
        WHEN "scope" = TRUE THEN 'private'
        ELSE NULL
      END;
    `);

        // 3. Remove the old boolean column
        await queryInterface.removeColumn("escapeRooms", "scope");

        // 4. Rename the temporary column to the original name
        await queryInterface.renameColumn("escapeRooms", "scope_tmp", "scope");
    },

    async down (queryInterface, Sequelize) {
    // 1. Add a temporary boolean column to reverse the process
        await queryInterface.addColumn("escapeRooms", "scope_tmp", {
            "type": Sequelize.BOOLEAN,
            "allowNull": true
        });

        // 2. Convert string values back to booleans
        await queryInterface.sequelize.query(`
      UPDATE "escapeRooms"
      SET "scope_tmp" = CASE
        WHEN "scope" = 'escapp' THEN FALSE
        WHEN "scope" = 'public' THEN FALSE
        WHEN "scope" = 'private' THEN TRUE
        ELSE NULL
      END;
    `);

        // 3. Drop the string column
        await queryInterface.removeColumn("escapeRooms", "scope");

        // 4. Rename the temporary boolean column to the original name
        await queryInterface.renameColumn("escapeRooms", "scope_tmp", "scope");
    }
};
