"use strict";

const path = require("path");
const fs = require("fs/promises");
const fsSync = require("fs");

module.exports = {
    async up (queryInterface, Sequelize) {
        console.log("Updating thumbnails");

        const [attachments] = await queryInterface.sequelize.query(`
            SELECT * FROM "attachments";
        `);

        for (const thumbnail of attachments) {
            if (!thumbnail.url) {
                continue;
            }
            if (thumbnail.url.startsWith("https://res.cloudinary.com")) {
                continue;
            }
            if (!thumbnail.url.startsWith("/uploads/thumbnails/")) {
                continue;
            }

            const thumbnailFileId = path.basename(thumbnail.url, path.extname(thumbnail.url));

            await queryInterface.bulkUpdate(
                "attachments",
                {"public_id": thumbnailFileId},
                {"id": thumbnail.id}
            );
        }

        console.log("Thumbnails updated");
    },

    async down (queryInterface, Sequelize) {
        // Irreversible fix
    }
};
