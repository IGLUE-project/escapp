const multer = require("multer");
const crypto = require("crypto");

const storage = multer.diskStorage({
    "destination" (req, file, callback) {
        callback(null, "./uploads/instructions/");
    },
    "filename" (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const storageWithExtension = (destination) => {
    return multer.diskStorage({
        "destination" (_, __, callback) {
            callback(null, destination);
        },
        "filename" (_, file, cb) {
            const originalNameParts = file.originalname.split(".");
            const extension = originalNameParts.length > 1 ? "." + originalNameParts.pop() : "";
            cb(null, crypto.randomBytes(16).toString("hex") + extension);
        }
    })
}


const instructionStorage = storageWithExtension("./uploads/instructions/");
const thumbnailStorage = storageWithExtension("./uploads/thumbnails/");
const uploadStorage = storageWithExtension("./uploads/");


exports.instructions = multer({storage: instructionStorage});
exports.thumbnails = multer({storage: thumbnailStorage});
exports.upload = multer({storage: uploadStorage});

exports.hints = multer({"dest": "./uploads/hints/"}); //Confirm if this needs extension
