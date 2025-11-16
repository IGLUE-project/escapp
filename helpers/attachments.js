const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

 
const uploadResourceToFileSystem = (src) => new Promise(function (resolve, reject) {
    const salt = `${Math.round(new Date().valueOf() * Math.random())}`;
    const public_id = crypto.createHmac("sha256", salt).update(src).
        digest("hex");

    const url = path.join("/uploads", public_id);

    const destination = path.join("public", "uploads", public_id);

    fs.copyFile(src, destination, fs.constants.COPYFILE_EXCL, function (error) {
        if (error) {
            reject(error);
        } else {
            resolve({
                public_id,
                url
            });
        }
    });
});

exports.uploadResource = function (src, options) {
    return new Promise(function (resolve) {
        resolve(uploadResourceToFileSystem(src));
    });
};

exports.deleteResource = async function (public_id, model) {
    const inUse = await model.count({"where": {public_id}});

    if (inUse && inUse.length >= 1) {
        return;
    }
        const destination = path.join("public", "uploads", public_id); // Delete from local file system.

        fs.unlink(destination, function (error) {
            console.error("Failed to delete file from filesystem", error);
        });
};


/**
 * Returns the URL of the image with the given public_id.
 *
 * @param public_id Identifies the image.
 * @param options   Options to build the  URL:
 * @returns {string} The URL of the image.
 */
exports.image = function (public_id, options) {

    const src = path.join("/uploads", public_id);
    const width = options.width || "";

    return `<img alt="Upload" src='${src}' width='${width}' >`;
};


/**
 * Returns the URL of the mp4 video with the given public_id.
 *
 * @param public_id Identifies the video.
 * @param options   Options to build the  URL:
 * @returns {string} The URL of the video.
 */
exports.video = function (public_id, options) {

    const src = path.join("/uploads", public_id);
    const width = options.width || "";
    const controls = options.controls ? "controls" : "";

    return `<video width='${width}' ${controls} >` +
            `   <source src='${src}' type='video/mp4' >` +
            "</video>";
};

 
exports.getFields = (el) => ({"public_id": el.public_id, "config": el.config, "url": el.url, "filename": el.filename, "mime": el.mime});
