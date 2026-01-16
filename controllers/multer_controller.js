const multer = require("multer");
const crypto = require("crypto");
const os = require("os");
const storageWithExtension = (destination) => multer.diskStorage({
    "destination" (_, __, callback) {
        callback(null, destination);
    },
    "filename" (_, file, cb) {
        const originalNameParts = file.originalname.split(".");
        const extension = originalNameParts.length > 1 ? `.${originalNameParts.pop()}` : "";
        const timestamp = Math.floor(Date.now() / 1000);
        const random = crypto.randomBytes(8).toString("hex");
        const fileId = timestamp + crypto.randomBytes(16).toString("hex");

        cb(null, fileId + extension);
    }
});

const temporaryStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, os.tmpdir());
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
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
exports.memoryStorage = multer({ storage: temporaryStorage})
exports.hints = multer({"dest": "./uploads/hints/"}); // Confirm if this needs extension
