
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, _) {
        await queryInterface.changeColumn("reusablePuzzleInstances", "reusablePuzzleId", { "allowNull": true, type:"INTEGER"});
    },

    async down (queryInterface, _) {
        await queryInterface.changeColumn("reusablePuzzleInstances", "reusablePuzzleId", { "allowNull": false, type:"INTEGER"});
    }
};
