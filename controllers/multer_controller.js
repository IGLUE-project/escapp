const multer = require("multer");

const storage = multer.diskStorage({
    "destination" (req, file, callback) {
        callback(null, "./uploads/instructions/");
    },
    "filename" (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

exports.instructions = multer({storage});
exports.thumbnails = multer({"dest": "./uploads/thumbnails/"});
exports.hints = multer({"dest": "./uploads/hints/"});
exports.upload = multer({"dest": "./uploads/"});
