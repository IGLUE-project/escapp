"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      ALTER TABLE "users"
      DROP CONSTRAINT IF EXISTS "users_alias_key";
    `);
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(`
      ALTER TABLE "users"
      ADD CONSTRAINT "users_alias_key" UNIQUE ("alias");
    `);
  }
};