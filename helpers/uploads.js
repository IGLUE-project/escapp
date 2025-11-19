const fs = require("fs/promises");
const fsSync = require("fs");
const path = require("path");
const { fileTypeFromFile } = require('file-type');
const mimeTypesRegexs = {
    "zip": new RegExp(/application\/(zip|x-zip-compressed|x-zip)/),
    "image": new RegExp("image\/.*"),
    "video": new RegExp(/video\/(mp4|webm)/),
    "audio": new RegExp("audio\/.*"),
    "pdf": new RegExp("application\/pdf")
}
const mimeTypesRegexsEntries = Object.entries(mimeTypesRegexs);

const getAssetTypeFromMimeType = function(mimetype){
    for (const [key, regex] of mimeTypesRegexsEntries) {
        if (regex.test(mimetype)) {
            return key;
        }
    }
    return "unknown";
};
exports.getAssetTypeFromMimeType = getAssetTypeFromMimeType;

exports.getDataForFile = async function(filePathFull){
    let fileType = await fileTypeFromFile(filePathFull);
    if (fileType && fileType.ext) {
        fileType.ext = '.' + fileType.ext;
    }
    return {
        "assetType": getAssetTypeFromMimeType(fileType.mime),
        "mimetype": fileType.mime,
        "extension": fileType.ext
    };
};

exports.deleteResource = async function (fileId, model, folderNameInsideUploads) {
    const inUse = await model.count({"where": {"public_id": fileId}});
    if (inUse && inUse.length >= 1) {
        return;
    }
    if(!folderNameInsideUploads || typeof folderNameInsideUploads !== "string" || folderNameInsideUploads.trim()===""){
        return;
    }
    const fileToDelete = path.resolve(path.join(__dirname, "..", "uploads", folderNameInsideUploads, fileId));
    if (fsSync.existsSync(fileToDelete)) {
        await fs.unlink(fileToDelete);
    }
};

exports.getFields = (el) => ({
    "public_id": el.public_id, 
    "config": el.config, 
    "url": el.url, 
    "filename": el.filename, 
    "mime": el.mime
});

exports.getFieldsForAsset = (el) => ({
    "assetType": el.assetType, 
    "mimetype": el.mimetype,
    "fileId": el.fileId,
    "filePath": el.filePath,
    "fileExtension": el.fileExtension,
    "filename": el.filename, 
    "contentPath": el.contentPath,
    "config": el.config, 
    "url": el.url
});