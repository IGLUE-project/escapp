"use strict";

const { exec } = require("child_process");
const path = require("path");
const fs = require("fs/promises");
const fsSync = require("fs");
const { fileTypeFromFile } = require("file-type");

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
        console.log("Updating obsolete cloudinary assets");

        const [assets] = await queryInterface.sequelize.query(`
            SELECT * FROM assets;
        `);

        const destDownloadsFolder = path.join(__dirname, "..", "/uploads/cloudinary");

        if (!fsSync.existsSync(destDownloadsFolder)) {
            fsSync.mkdirSync(destDownloadsFolder, { "recursive": true });
        }

        const destAssetsFolder = path.join(__dirname, "..", "/uploads");

        const mimeTypesRegexs = {
            "zip": new RegExp(/application\/(zip|x-zip-compressed|x-zip)/),
            "image": new RegExp("image\/.*"),
            "video": new RegExp(/video\/(mp4|webm)/),
            "audio": new RegExp("audio\/.*"),
            "pdf": new RegExp("application\/pdf")
        };
        const mimeTypesRegexsEntries = Object.entries(mimeTypesRegexs);

        const updatedUrls = {};

        for (const asset of assets) {
            if (!asset.url || !asset.url.startsWith("https://res.cloudinary.com") || !asset.escapeRoomId) {
                continue;
            }

            // Download file
            try {
                const downloadFileName = path.basename(new URL(asset.url).pathname);
                const downloadFilePathFull = `${destDownloadsFolder}/${downloadFileName}`;
                const downloadOk = await downloadWithWget(asset.url, downloadFilePathFull);

                if (!downloadOk || !fsSync.existsSync(downloadFilePathFull)) {
                    console.log(`Error downloading ${asset.url}`);
                    continue;
                } else {
                    // Console.log(`File downloaded to: ${downloadFilePathFull}`);
                }

                const assetFileType = await fileTypeFromFile(downloadFilePathFull);
                let assetMimetype;

                if (assetFileType && assetFileType.mime) {
                    assetMimetype = assetFileType.mime;
                } else {
                    assetMimetype = "unknown";
                }
                let assetFileExtension;

                if (assetFileType && assetFileType.ext) {
                    assetFileExtension = `.${assetFileType.ext}`;
                } else {
                    assetFileExtension = path.extname(downloadFilePathFull);
                }

                let assetType = null;

                for (const [key, regex] of mimeTypesRegexsEntries) {
                    if (regex.test(assetMimetype)) {
                        assetType = key;
                        break;
                    }
                }
                if (assetType === null) {
                    assetType = "unknown";
                }

                const assetFileId = `cloudinary-${asset.id}-${downloadFileName}`;
                const assetFilePath = `/uploads/${assetFileId}`;
                const assetFilePathFull = `${destAssetsFolder}/${assetFileId}`;
                const assetContentPath = assetFilePath;

                if (fsSync.existsSync(assetFilePathFull)) {
                    console.log(`File already exists for asset: ${asset.id}`);
                    // Continue;
                }

                // Move asset file to final destination
                await fs.rename(downloadFilePathFull, assetFilePathFull);

                // Create new asset
                const [createdAsset] = await queryInterface.bulkInsert(
                    "assets",
                    [
                        {
                            "escapeRoomId": asset.escapeRoomId,
                            assetType,
                            "mimetype": assetMimetype,
                            "fileId": assetFileId,
                            "filePath": assetFilePath,
                            "fileExtension": assetFileExtension,
                            "filename": asset.filename,
                            "contentPath": assetContentPath,
                            "userId": asset.userId,
                            "createdAt": asset.createdAt,
                            "updatedAt": new Date()
                        }
                    ],
                    { "returning": true }
                );

                // Update asset URL of new asset
                const assetURL = `/assets/${createdAsset.id}${createdAsset.fileExtension}`;

                await queryInterface.bulkUpdate(
                    "assets",
                    { "url": assetURL },
                    { "id": createdAsset.id }
                );

                if (process.env.APP_NAME) {
                    const hostname = `https://${process.env.APP_NAME}${process.env.PORT && process.env.PORT !== "80" && process.env.PORT !== "443" ? `:${process.env.PORT}` : ""}`;

                    updatedUrls[asset.url] = `${hostname}${assetURL}`;
                }

                // Remove old asset
                await queryInterface.bulkDelete(
                    "assets",
                    { "id": asset.id }
                );
            } catch (e) {
                console.log(`Error ${e} fixing asset with id ${asset.id}`);
                continue;
            }
        }

        if (fsSync.existsSync(destDownloadsFolder)) {
            fsSync.rmSync(destDownloadsFolder, { "recursive": true, "force": true });
        }

        console.log("Cloudinary assets updated");

        console.log("Updating content blocks");
        const [escapeRooms] = await queryInterface.sequelize.query(`
            SELECT * FROM "escapeRooms";
        `);

        const updatedUrlsEntries = Object.entries(updatedUrls);
        const fieldsToUpdate = [
            "teamInstructions",
            "classInstructions",
            "indicationsInstructions",
            "afterInstructions"
        ];

        for (const escapeRoom of escapeRooms) {
            let hasChanges = false;

            for (const field of fieldsToUpdate) {
                let value = escapeRoom[field];

                if (value && typeof value === "string") {
                    for (const [oldUrl, newUrl] of updatedUrlsEntries) {
                        const regex = new RegExp(`${oldUrl}(?!\\.)`, "g");
                        const newValue = value.replace(regex, newUrl);

                        if (newValue !== value) {
                            value = newValue;
                            hasChanges = true;
                        }
                    }
                    escapeRoom[field] = value;
                }
            }

            if (hasChanges) {
                await queryInterface.bulkUpdate(
                    "escapeRooms",
                    {
                        "teamInstructions": escapeRoom.teamInstructions,
                        "classInstructions": escapeRoom.classInstructions,
                        "indicationsInstructions": escapeRoom.indicationsInstructions,
                        "afterInstructions": escapeRoom.afterInstructions
                    },
                    { "id": escapeRoom.id }
                );
            }
        }

        console.log("Content blocks updated");
    },

    async down (queryInterface, Sequelize) {
        // Irreversible fix
    }
};
