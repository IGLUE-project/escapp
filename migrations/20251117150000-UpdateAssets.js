"use strict";

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.renameColumn("assets", "public_id", "fileId");

        await queryInterface.addColumn("assets", "assetType", {
            "type": Sequelize.STRING,
            "allowNull": false,
            "defaultValue": ""
        });

        await queryInterface.renameColumn("assets", "mime", "mimetype");

        await queryInterface.addColumn("assets", "filePath", {
            "type": Sequelize.STRING,
            "allowNull": false,
            "defaultValue": ""
        });

        await queryInterface.addColumn("assets", "fileExtension", {
            "type": Sequelize.STRING,
            "allowNull": false,
            "defaultValue": ""
        });

        await queryInterface.addColumn("assets", "contentPath", {
            "type": Sequelize.STRING,
            "allowNull": false,
            "defaultValue": ""
        });
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.removeColumn("assets", "contentPath");
        await queryInterface.removeColumn("assets", "fileExtension");
        await queryInterface.removeColumn("assets", "filePath");
        await queryInterface.renameColumn("assets", "mimetype", "mime");
        await queryInterface.removeColumn("assets", "assetType");
        await queryInterface.renameColumn("assets", "fileId", "public_id");
    }
};
