
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface) {
        await queryInterface.changeColumn("reusablePuzzleInstances", "reusablePuzzleId", { "allowNull": true, "type": "INTEGER"});
    },

    async down (queryInterface) {
        // eslint-disable-next-line require-await
        // eslint-disable-next-line no-return-await
        return await queryInterface.sequelize.transaction(async (t) => {
            await queryInterface.bulkUpdate("reusablePuzzleInstances", { "reusablePuzzleId": 0 }, { "reusablePuzzleId": null }, { "transaction": t });
            await queryInterface.changeColumn("reusablePuzzleInstances", "reusablePuzzleId", { "allowNull": false, "type": "INTEGER", "defaultValue": 0}, { "transaction": t });
        });
    }
};
