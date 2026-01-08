"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
      await queryInterface.addColumn("users", "confirmed", { "type": Sequelize.BOOLEAN, "allowNull": false, "defaultValue": false });
      await queryInterface.addColumn("users", "confirmationCode", { "type": Sequelize.STRING, "allowNull": true});
        // Mark all existing users as confirmed
      await queryInterface.sequelize.query(
          'UPDATE "users" SET "confirmed" = true'
      );
    },

    async down (queryInterface) {
      await queryInterface.removeColumn("users", "confirmed");
      await queryInterface.removeColumn("users", "confirmationCode");
    }

};
