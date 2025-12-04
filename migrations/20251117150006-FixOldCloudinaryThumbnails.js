"use strict";

const { exec } = require("child_process");
const path = require("path");
const fs = require("fs/promises");
const fsSync = require("fs");
const { fileTypeFromFile } = require("file-type");
const {getDataForFile} = require("../helpers/uploads");

function downloadWithWget (url, destPath) {
    return new Promise((resolve) => {
        const command = `wget -O "${destPath}" "${url}" --timeout=15 --tries=2`;

        exec(command, (error, stdout, stderr) => {
            if (error) {
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });
}

module.exports = {
    async up (queryInterface, Sequelize) {
        console.log("Updating obsolete cloudinary thumbnails");

        const [attachments] = await queryInterface.sequelize.query(`
            SELECT * FROM "attachments";
        `);

        const destDownloadsFolder = path.join(__dirname, "..", "/uploads/cloudinary");

        if (!fsSync.existsSync(destDownloadsFolder)) {
            fsSync.mkdirSync(destDownloadsFolder, { "recursive": true });
        }
        const destThumbnailsFolder = path.join(__dirname, "..", "/uploads/thumbnails");

        for (const thumbnail of attachments) {
            if (!thumbnail.url) {
                continue;
            }
            if (!thumbnail.url.startsWith("https://res.cloudinary.com")) {
                continue;
            }
            if (!thumbnail || !thumbnail.id) {
                continue;
            }

            // Cloudinary thumbnails

            // Download file
            try {
                const downloadFileName = path.basename(new URL(thumbnail.url).pathname);
                const downloadFilePathFull = `${destDownloadsFolder}/${downloadFileName}`;
                const downloadOk = await downloadWithWget(thumbnail.url, downloadFilePathFull);

                if (!downloadOk || !fsSync.existsSync(downloadFilePathFull)) {
                    console.log(`Error downloading ${thumbnail.url}`);
                    continue;
                } else {
                    // Console.log(`File downloaded to: ${downloadFilePathFull}`);
                }

                const thumbnailData = await getDataForFile(downloadFilePathFull);
                const thumbnailFileId = `cloudinaryt-${thumbnail.id}-${downloadFileName}`;
                // Let assetFilePath = "/uploads/" + assetFileId;
                const thumbnailFilePathFull = `${destThumbnailsFolder}/${thumbnailFileId}`;

                // Move thumbnail file to final destination
                await fs.rename(downloadFilePathFull, thumbnailFilePathFull);

                // Update thumbnail
                await queryInterface.bulkUpdate(
                    "attachments",
                    {
                        "public_id": thumbnailFileId,
                        "mime": thumbnailData.mimetype,
                        "url": `/escapeRooms/${thumbnail.escapeRoomId}/thumbnail`,
                        "updatedAt": new Date()
                    },
                    {"id": thumbnail.id}
                );
            } catch (e) {
                console.log(`Error ${e} fixing thumbnail with id ${thumbnail.id}`);
                continue;
            }
        }

        if (fsSync.existsSync(destDownloadsFolder)) {
            fsSync.rmSync(destDownloadsFolder, { "recursive": true, "force": true });
        }
        console.log("Cloudinary thumbnails updated");
    },

    async down (queryInterface, Sequelize) {
        // Irreversible fix
    }
};
