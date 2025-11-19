const fs = require("fs/promises");
const fsSync = require("fs");
const path = require("path");

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