const multer = require("multer");
const crypto = require("crypto");

const storageWithExtension = (destination) => multer.diskStorage({
    "destination" (_, __, callback) {
        callback(null, destination);
    },
    "filename" (_, file, cb) {
        const originalNameParts = file.originalname.split(".");
        const extension = originalNameParts.length > 1 ? `.${originalNameParts.pop()}` : "";

        cb(null, crypto.randomBytes(16).toString("hex") + extension);
    }
});


const instructionStorage = storageWithExtension("./uploads/instructions/");
const thumbnailStorage = storageWithExtension("./uploads/thumbnails/");
const hybridStorage = storageWithExtension("./uploads/hybrid/");
const uploadStorage = storageWithExtension("./uploads/");


exports.instructions = multer({"storage": instructionStorage});
exports.thumbnails = multer({"storage": thumbnailStorage});
exports.upload = multer({"storage": uploadStorage});
exports.hybridInstructions = multer({"storage": hybridStorage});

exports.hints = multer({"dest": "./uploads/hints/"}); // Confirm if this needs extension
