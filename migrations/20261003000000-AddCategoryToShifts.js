"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        const transaction = await queryInterface.sequelize.transaction();

        try {
            // Add category column
            await queryInterface.addColumn("turnos", "category", {
                type: Sequelize.ENUM("PUBLIC", "TEST", "CUSTOM"),
                allowNull: false,
                defaultValue: "CUSTOM"
            }, { transaction });

            // Set TEST category for test shifts
            await queryInterface.bulkUpdate(
                "turnos",
                { category: "TEST" },
                { status: "test" },
                { transaction }
            );

            // Set PUBLIC category for public shifts
            await queryInterface.bulkUpdate(
                "turnos",
                { category: "PUBLIC" },
                { place: "_PUBLIC" },
                { transaction }
            );

            await transaction.commit();
        } catch (err) {
            await transaction.rollback();
            throw err;
        }
    },

    async down(queryInterface) {
        const transaction = await queryInterface.sequelize.transaction();

        try {
            await queryInterface.removeColumn(
                "turnos",
                "category",
                { transaction }
            );

            await transaction.commit();
        } catch (err) {
            await transaction.rollback();
            throw err;
        }
    }
};