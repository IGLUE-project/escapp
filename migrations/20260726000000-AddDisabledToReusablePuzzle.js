"use strict";

/*
 * Adds a "disabled" flag to reusable puzzle types. When a type is disabled it
 * can no longer be selected from the catalog to create new instances, but any
 * existing instances that already use it keep working.
 */

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.addColumn("reusablePuzzles", "disabled", {
            "type": Sequelize.BOOLEAN,
            "allowNull": false,
            "defaultValue": false
        });
    },

    async down (queryInterface) {
        await queryInterface.removeColumn("reusablePuzzles", "disabled");
    }
};
