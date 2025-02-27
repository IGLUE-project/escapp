"use strict";

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.addColumn("assets", "userId", {
            "type": Sequelize.INTEGER,
            "allowNull": false
        });
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.removeColumn("assets", "userId", {
            "type": Sequelize.INTEGER,
            "allowNull": false
        });
    }
};
