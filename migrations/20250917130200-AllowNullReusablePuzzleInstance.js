
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, _) {
        await queryInterface.changeColumn("reusablePuzzleInstances", "reusablePuzzleId", { "allowNull": true, type:"INTEGER"});
    },

    async down (queryInterface, _) {
        return queryInterface.sequelize.transaction(async (t) => {
            await queryInterface.bulkUpdate("reusablePuzzleInstances", { reusablePuzzleId: 0 }, { reusablePuzzleId: null }, { transaction: t });
            await queryInterface.changeColumn("reusablePuzzleInstances", "reusablePuzzleId", { "allowNull": false, type:"INTEGER", defaultValue: 0}, { transaction: t });
        })
    }
};
