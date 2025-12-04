// Definition of the Asset model:

const fs = require("fs/promises");
const fsSync = require("fs");
const path = require("path");

module.exports = function (sequelize, DataTypes) {
    const Asset = sequelize.define(
        "asset",
        {
            "assetType": {
                "type": DataTypes.STRING,
                "validate": { "notEmpty": { "msg": "assetType must not be empty" } },
                "allowNull": false
            },
            "mimetype": {
                "type": DataTypes.STRING,
                "validate": { "notEmpty": { "msg": "mimetype must not be empty" } },
                "allowNull": false
            },
            "fileId": {
                "type": DataTypes.STRING,
                "validate": { "notEmpty": { "msg": "fileId must not be empty" } },
                "allowNull": false
            },
            "filePath": {
                "type": DataTypes.STRING,
                "validate": { "notEmpty": { "msg": "filePath must not be empty" } },
                "allowNull": false
            },
            "fileExtension": {
                "type": DataTypes.STRING,
                "validate": { "notEmpty": { "msg": "fileExtension must not be empty" } },
                "allowNull": false
            },
            "filename": {
                "type": DataTypes.STRING,
                "validate": { "notEmpty": { "msg": "filename must not be empty" } },
                "allowNull": false
            },
            "contentPath": {
                "type": DataTypes.STRING,
                "validate": { "notEmpty": { "msg": "contentPath must not be empty" } },
                "allowNull": false
            },
            "url": {
                "type": DataTypes.STRING,
                "allowNull": true
            },
            "config": {
                "type": DataTypes.TEXT,
                "allowNull": true
            }
        }
    );

    Asset.addHook("afterCreate", async (asset, options) => {
        asset.url = `/assets/${asset.id}${asset.fileExtension}`;
        await asset.save();
    });

    Asset.addHook("afterDestroy", async (asset, options) => {
        try {
            if (!asset.filePath || !asset.fileId) {
                return;
            }

            // Check if file should be deleted
            const count = await Asset.count({
                "where": { "fileId": asset.fileId },
                "transaction": options.transaction
            });

            if (count > 0) {
                // Do not delete the file if there are more assets using the same file
                return;
            }

            // Delete file
            const fileToDelete = path.resolve(path.join(__dirname, "..", asset.filePath));

            if (fsSync.existsSync(fileToDelete)) {
                await fs.unlink(fileToDelete);
            } else {
                // File does not exist
                return;
            }

            if (asset.assetType === "webapp") {
                // Remove webapp folder
                const indexFile = path.join(__dirname, "..", asset.contentPath);

                if (fsSync.existsSync(indexFile)) {
                    const stats = await fs.stat(indexFile);

                    if (stats.isFile()) {
                        const fileName = path.basename(indexFile);

                        if (fileName === "index.html") {
                            const webappFolder = path.dirname(indexFile);

                            if (fsSync.existsSync(webappFolder)) {
                                await fs.rm(webappFolder, { "recursive": true, "force": true });
                            }
                        }
                    }
                }
            }
        } catch (err) {
            console.error("Asset file could not be deleted", err);
        }
    });

    return Asset;
};
