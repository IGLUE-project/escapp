const fs = require("fs/promises");
const fsSync = require("fs");
const path = require("path");
const { fileTypeFromFile, fromFile } = require("file-type");
const fileFunction =  fileTypeFromFile || fromFile;
const mimeTypesRegexs = {
    "zip": new RegExp(/application\/(zip|x-zip-compressed|x-zip)/),
    "image": new RegExp("image\/.*"),
    "video": new RegExp(/video\/(mp4|webm)/),
    "audio": new RegExp("audio\/.*"),
    "pdf": new RegExp("application\/pdf"),
    "xml": new RegExp("^application\\/xml$|\\+xml$|^text\\/xml$")
};
const mimeTypesRegexsEntries = Object.entries(mimeTypesRegexs);

const getAssetTypeFromMimeType = function (mimetype) {
    for (const [key, regex] of mimeTypesRegexsEntries) {
        if (regex.test(mimetype)) {
            return key;
        }
    }
    return "unknown";
};

exports.getAssetTypeFromMimeType = getAssetTypeFromMimeType;

exports.getDataForFile = async function (filePathFull) {

    const fileType = await fileFunction(filePathFull);

    if (typeof fileType === "undefined") {
        return {
            "assetType": "unknown",
            "mimetype": "unknown",
            "extension": ""
        };
    }
    if (fileType && fileType.ext) {
        fileType.ext = `.${fileType.ext}`;
    }
    return {
        "assetType": getAssetTypeFromMimeType(fileType.mime),
        "mimetype": fileType.mime,
        "extension": fileType.ext
    };
};

exports.deleteResource = async function (fileId, model, folderNameInsideUploads) {
    const inUse = await model.count({"where": {"public_id": fileId}});

    if (inUse > 1) {
        return;
    }
    if (!folderNameInsideUploads || typeof folderNameInsideUploads !== "string" || folderNameInsideUploads.trim() === "") {
        return;
    }
    const fileToDelete = path.resolve(path.join(__dirname, "..", "uploads", folderNameInsideUploads, fileId));

    if (fsSync.existsSync(fileToDelete)) {
        await fs.unlink(fileToDelete);
    }
};

exports.getFields = (el, mapping) => ({
    "public_id": (mapping && el.public_id && mapping[el.public_id]) ? mapping[el.public_id] : el.public_id,
    "config": el.config,
    "url": (mapping && el.public_id && mapping[el.public_id]) ? mapping[el.public_id] : el.url.replace(el.public_id, mapping[el.public_id]),
    "filename": el.filename,
    "mime": el.mime
});

exports.getFieldsForAsset = (el, mapping) => ({
    "assetType": el.assetType,
    "mimetype": el.mimetype,
    "fileId": (mapping && el.fileId && mapping[el.fileId]) ? mapping[el.fileId] : el.fileId,
    "filePath": (mapping && el.filePath && mapping[el.filePath]) ? mapping[el.filePath] : el.filePath,
    "fileExtension": el.fileExtension,
    "filename": el.filename,
    "contentPath": (mapping && mapping[el.contentPath]) ? mapping[el.contentPath] : el.contentPath,
    "config": el.config,
    "url": el.url
});

exports.getFieldsForAssetNoURL = (el, mapping) => ({
    "assetType": el.assetType,
    "mimetype": el.mimetype,
    "fileId": (mapping && el.fileId && mapping[el.fileId]) ? mapping[el.fileId] : el.fileId,
    "filePath": (mapping && el.filePath && mapping[el.filePath]) ? mapping[el.filePath] : el.filePath,
    "fileExtension": el.fileExtension,
    "filename": el.filename,
    "contentPath": (mapping && el.contentPath && mapping[el.contentPath]) ? mapping[el.contentPath] : el.contentPath,
    "config": el.config
});
