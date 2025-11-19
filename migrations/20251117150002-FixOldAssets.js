"use strict";

const path = require("path");
const fs = require("fs/promises");
const fsSync = require("fs");

module.exports = {
    async up(queryInterface, Sequelize) {
        console.log("Updating assets");

        const [assets] = await queryInterface.sequelize.query(`
            SELECT * FROM assets;
        `);

        const mimeTypesRegexs = {
            "zip": new RegExp(/application\/(zip|x-zip-compressed|x-zip)/),
            "image": new RegExp("image\/.*"),
            "video": new RegExp(/video\/(mp4|webm)/),
            "audio": new RegExp("audio\/.*"),
            "pdf": new RegExp("application\/pdf")
        }
        const mimeTypesRegexsEntries = Object.entries(mimeTypesRegexs);

        let updatedFileIds = {};
        let updatedUrls = {};

        for (const asset of assets) {
            if (updatedFileIds.hasOwnProperty(asset.fileId)) {
                asset.fileId = updatedFileIds[asset.fileId];
            }

            if(asset.assetType === ""){
                //Old asset
                if(asset.fileId === ""){
                    console.log("FileId undefined for asset with id " + asset.id);
                    continue;
                }

                //Check file
                let assetFilePath = "/uploads/" + asset.fileId;
                let assetFilePathFull = path.join(__dirname, ".." + assetFilePath);

                if (!fsSync.existsSync(assetFilePathFull)) {
                    if (asset.url && asset.url.startsWith('https://res.cloudinary.com')) {
                        //Legacy cloudinary asset. Ignore it.
                        continue;
                    }
                    console.log("File not found for asset with id " + asset.id + " at: " + assetFilePathFull);
                    continue;
                }

                //Fill assetType based on mimetype
                if((asset.mimetype === "")||(asset.mimetype === 'unsupported')){
                    asset.mimetype = "unknown";
                }
                let assetType = null;
                for (const [key, regex] of mimeTypesRegexsEntries) {
                    if (regex.test(asset.mimetype)) {
                        assetType = key;
                        break;
                    }
                }
                if(assetType === null){
                    assetType = "unknown";
                }
                asset.assetType = assetType;

                //Add extension to file if needed
                let assetFilePathIncludesExtension = true;
                let assetExtension = path.extname(assetFilePath);
                if(assetExtension===""){
                    assetFilePathIncludesExtension = false;
                    assetExtension = path.extname(asset.filename);
                }
                if(assetExtension===""){
                    //Get from mimetype
                    switch(asset.mimetype){
                        case "image/jpeg":
                            assetExtension = ".jpg";
                            break;
                        case "image/png":
                            assetExtension = ".png";
                            break;
                        case "application/webapp":
                            assetExtension = ".zip";
                            break;
                        default:
                            break;
                    }
                }

                if(assetExtension===""){
                    console.log("File extension not recognized for asset with id " + asset.id + " at: " + assetFilePathFull);
                    continue;
                }
                asset.fileExtension = assetExtension;

                if(assetFilePathIncludesExtension === false){
                    //Rename file for adding extension if necessary
                    let newAssetFileId = asset.fileId + asset.fileExtension;
                    updatedFileIds[asset.fileId] = newAssetFileId;
                    let newAssetFilePath = "/uploads/" + newAssetFileId;
                    let newAssetFilePathFull = path.join(__dirname, ".." + newAssetFilePath);
                    await fs.rename(assetFilePathFull, newAssetFilePathFull);
                    assetFilePath = newAssetFilePath;
                    assetFilePathFull = newAssetFilePathFull;
                }

                //File path
                asset.filePath = assetFilePath;
                asset.contentPath = assetFilePath;

                //Add asset url
                let newAssetUrl = "/assets/" + asset.id + assetExtension;
                if (!updatedUrls.hasOwnProperty(asset.url)) {
                    updatedUrls[asset.url] = newAssetUrl;
                }
                asset.url = newAssetUrl;
            }

            // console.log("Update asset", asset);

            await queryInterface.bulkUpdate(
                "assets",
                {
                    assetType: asset.assetType,
                    mimetype: asset.mimetype,
                    fileExtension: asset.fileExtension,
                    filePath: asset.filePath,
                    contentPath: asset.contentPath,
                    url: asset.url
                },
                {
                    id: asset.id
                }
            );
        }

        console.log("Assets updated");

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
                let newValue = value.replace(regex, newUrl);
                //Only for testing
                //newValue = newValue.replace(/https?:\/\/escapp\.es/g,"http://localhost:3000");
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
                teamInstructions: escapeRoom.teamInstructions,
                classInstructions: escapeRoom.classInstructions,
                indicationsInstructions: escapeRoom.indicationsInstructions,
                afterInstructions: escapeRoom.afterInstructions
              },
              { id: escapeRoom.id }
            );
          }
        }

        console.log("Content blocks updated");
    },

    async down(queryInterface, Sequelize) {
        //Irreversible fix
    }
};