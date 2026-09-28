const fs = require("fs/promises");
const fsSync = require("fs");
const path = require("path");
const { fileTypeFromFile, fromFile } = require("file-type");
const fileFunction = fileTypeFromFile || fromFile;
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
    "public_id": mapping && el.public_id && mapping[el.public_id] ? mapping[el.public_id] : el.public_id,
    "config": el.config,
    "url": mapping && el.public_id && mapping[el.public_id] ? el.url.replace(el.public_id, mapping[el.public_id]) : el.url,
    "filename": el.filename,
    "mime": el.mime
});

exports.getFieldsForAsset = (el, mapping) => ({
    "assetType": el.assetType,
    "mimetype": el.mimetype,
    "fileId": mapping && el.fileId && mapping[el.fileId] ? mapping[el.fileId] : el.fileId,
    "filePath": mapping && el.fileId && mapping[el.fileId] ? el.filePath.replace(el.fileId, mapping[el.fileId]) : el.filePath,
    "fileExtension": el.fileExtension,
    "filename": el.filename,
    "contentPath": mapping && el.fileId && mapping[el.fileId] ? el.contentPath.replace(el.fileId, mapping[el.fileId]) : el.contentPath,
    "config": el.config,
    "url": el.url
});

// Rewrite an asset's on-disk path to its cloned/imported copy's location.
// Normally the fresh name (mapping value) embeds the original fileId, so a plain
// substring swap works — this is the exact behavior for all current data. But legacy
// import-mangled rows carry a fileId with an added "<ts>_" prefix that was never
// written into filePath/contentPath; there the swap would no-op and the copy would
// silently SHARE the source's directory (breaking the source's asset if it is deleted).
// In that case we rewrite the segment actually present in the path — the
// /uploads/webapps/<dir> folder, or the file basename — so every copy gets its own path.
exports.relocatePath = (p, oldFileId, newName) => {
    if (!p || !newName || newName === oldFileId) {
        return p;
    }
    if (oldFileId && p.includes(oldFileId)) {
        return p.replace(oldFileId, newName); // current-data path: unchanged behavior
    }
    const webapp = p.match(/^(.*\/uploads\/webapps\/)([^/]+)(\/.*)?$/);

    if (webapp) {
        return `${webapp[1]}${newName}${webapp[3] || ""}`;
    }
    const dir = path.posix.dirname(p);

    return `${dir}/${newName}${path.posix.extname(p)}`;
};

exports.getFieldsForAssetNoURL = (el, mapping) => {
    const newName = mapping && el.fileId && mapping[el.fileId] ? mapping[el.fileId] : null;

    return {
        "assetType": el.assetType,
        "mimetype": el.mimetype,
        "fileId": newName || el.fileId,
        "filePath": newName ? exports.relocatePath(el.filePath, el.fileId, newName) : el.filePath,
        "fileExtension": el.fileExtension,
        "filename": el.filename,
        "contentPath": newName ? exports.relocatePath(el.contentPath, el.fileId, newName) : el.contentPath,
        "config": el.config
    };
};
