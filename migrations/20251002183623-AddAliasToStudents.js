"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.addColumn("users", "alias", { "type": Sequelize.STRING, "unique": true });
        await queryInterface.sequelize.query("UPDATE \"users\" SET \"alias\" = CONCAT('anonymous_', CAST(id as TEXT))");
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.removeColumn("users");
    }
};
