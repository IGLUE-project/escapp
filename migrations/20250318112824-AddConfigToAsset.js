"use strict";

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.addColumn(
            "assets",
            "config",
            {"type": Sequelize.TEXT}
        );
    },

    async down (queryInterface) {
        await queryInterface.removeColumn("assets", "config");
    }
};
