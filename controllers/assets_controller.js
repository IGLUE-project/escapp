const Sequelize = require("sequelize");
const sequelize = require("../models");
const {models} = sequelize;
const attHelper = require("../helpers/attachments");
const {nextStep, prevStep} = require("../helpers/progress");
const {ckeditorResponse} = require("../helpers/utils");
const queries = require("../queries");
const path = require("path");
const fs = require("fs");

const imageRegex = new RegExp(/image\/.*/);
const videoRegex = new RegExp(/video\/.*/);
const audioRegex = new RegExp(/audio\/.*/);
const applicationRegex = new RegExp(/application\/.*/);

// GET /escapeRooms/:escapeRoomId/assets
exports.assets = async (req, res, next) => {
    const {escapeRoom} = req;
    const {mode} = req.query || "default";

    try {
        const assets = (await models.asset.findAll({"where": { "escapeRoomId": escapeRoom.id }})).map((a) => {
            const {id, public_id, url, mime, filename} = a;

            return {id, public_id, url, mime, "name": filename};
        });

        res.render("escapeRooms/steps/assets", {escapeRoom, assets, "progress": "assets", mode});
    } catch (e) {
        next(e);
    }
};

// GET /escapeRooms/:escapeRoomId/fetchAssets
exports.fetchAssets = async (req, res, next) => {
    const {escapeRoom} = req;

    try {
        const assets = (await models.asset.findAll({"where": { "escapeRoomId": escapeRoom.id }})).map((a) => {
            const {id, public_id, url, mime, filename} = a;

            return {id, public_id, url, mime, "name": filename};
        });

        res.json(assets);
    } catch (e) {
        next(e);
    }
};

// POST /escapeRooms/:escapeRoomId/assets
exports.assetsUpdate = (req, res /* , next*/) => {
    const {escapeRoom, body} = req;

    const isPrevious = Boolean(body.previous);
    const progressBar = body.progress;

    res.redirect(`/escapeRooms/${escapeRoom.id}/${isPrevious ? prevStep("assets") : progressBar || nextStep("assets")}`);
};

const supportedMimeTypes = ["image\/.*", "video\/mp4",  "video\/webm", "audio\/.*", "application\/pdf"];

// POST /escapeRooms/:escapeRoomId/uploadAssets
exports.uploadAssets = async (req, res) => {
    const {escapeRoom} = req;
    const {i18n} = res.locals;
    const userId = req.session.user && req.session.user.id;

    /*
    Try {
        // await attHelper.checksCloudinaryEnv();
        // Save the new asset into Cloudinary:
        //UploadResult = await attHelper.uploadResource(req.file.path, attHelper.cloudinary_upload_options_zip);
    } catch (err) {
        res.status(500);
        res.send(err);
    }
    */
    try {
        const mime = req.file.mimetype;
        const isSupported = supportedMimeTypes.some((m) => new RegExp(m).test(mime));
        if (!isSupported) {
            req.file.mimetype = "unsupported";
        }
        await models.asset.build({ "escapeRoomId": escapeRoom.id, "public_id": req.file.filename, "url": `/${req.file.path}`, "filename": req.file.originalname, "mime": req.file.mimetype, userId}).save();

        // Res.json({"id": saved.id, "url": uploadResult.url});
        const html = ckeditorResponse(req.query.CKEditorFuncNum, req.file.url);

        res.send(html);
    } catch (error) {
        console.error(error);
        if (error instanceof Sequelize.ValidationError) {
            res.send(i18n.common.flash.errorFile);
            attHelper.deleteResource(uploadResult.public_id, models.asset);
        } else {
            res.send(i18n.common.flash.errorFile);
        }
    }
};

// POST /escapeRooms/:escapeRoomId/deleteAssets/:assetId
exports.deleteAssets = async (req, res) => {
    const {assetId} = req.params;
    const {i18n} = res.locals;

    try {
        const assets = await models.asset.findAll({"where": { "escapeRoomId": req.escapeRoom.id }});
        const asset = assets.find((a) => a.id.toString() === assetId.toString());

        if (asset) {
            if (!asset.url.includes("http")) {
                try {
                    fs.unlinkSync(path.join(__dirname, `uploads/${asset.public_id}`));
                } catch (err) {
                    console.error("File does not exists, deleting from DB");
                }
                await asset.destroy();
                res.json({"msg": i18n.api.ok});
            } else {
                attHelper.deleteResource(asset.public_id, models.asset);
                await asset.destroy();
                res.json({"msg": i18n.api.ok});
            }
        } else {
            res.status(404);
            res.json({"msg": i18n.api.notFound});
        }
    } catch (err) {
        res.status(500);
        res.json({"msg": i18n.api.error});
    }
};

exports.browse = async (req, res, next) => {
    try {
        const assets = (await models.asset.findAll({"where": { "escapeRoomId": req.escapeRoom.id }})).map((a) => {
            const {id, public_id, url, mime, filename} = a;

            return {id, public_id, url, mime, "name": filename};
        });

        res.render("escapeRooms/steps/assets", {"escapeRoom": req.escapeRoom, assets});
    } catch (err) {
        next(err);
    }
};

// GET /uploads/:public_id
exports.getAsset = async (req, res, next) => { // eslint-disable-line  no-unused-vars
    const {public_id} = req.params;
    let asset = null;

    try {
        asset = await models.asset.findOne({"where": { public_id, "userId": req.session.user.id }});
        if (!asset) {
            const myEscapeRooms = await models.escapeRoom.findAll(queries.escapeRoom.all(req.session.user.id, null, null));
            const escapeRoomAssets = [];

            myEscapeRooms.forEach((er) => {
                er.assets.forEach((a) => {
                    if (a.public_id === public_id) {
                        escapeRoomAssets.push(a);
                    }
                });
            });
            if (escapeRoomAssets.length !== 1) {
                res.status(404);
                res.json({"msg": "Not found"});
                return;
            }
            [asset] = escapeRoomAssets;
        }
        const file = asset.public_id;

        const filePath = path.join(__dirname, `/../uploads/${file}`);

        if (asset.mime === "application/pdf") {
            const data = fs.readFileSync(filePath);
            res.setHeader("Content-Type", "application/pdf");
            res.contentType("application/pdf");
            res.send(data);
        } else if (asset.mime.search(videoRegex) !== -1) {
            const stat = fs.statSync(filePath);
            const fileSize = stat.size;
            const range = req.headers.range;

            if (range) {
                const parts = range.replace(/bytes=/, '').split('-');
                const start = parseInt(parts[0], 10);
                const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
                const chunkSize = end - start + 1;
                const file = fs.createReadStream(filePath, { start, end });
                const head = {
                    'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                    'Accept-Ranges': 'bytes',
                    'Content-Length': chunkSize,
                    'Content-Type': 'video/mp4',
                };

                res.writeHead(206, head);
                file.pipe(res);
            } else {
                const head = {
                    'Content-Length': fileSize,
                    'Content-Type': 'video/mp4',
                };

                res.writeHead(200, head);
                fs.createReadStream(filePath).pipe(res);
            }

        } else {
            res.sendFile(filePath);
        }
    } catch (err) {
        console.error(err);
        next(err);
    }
};



function appendParameterers (...parameters) {
    let config = "";

    parameters.forEach((parameter) => {
        const {name} = parameter;
        const {value} = parameter;

        config += `${name}:${value};`;
    });
    return config;
}

// PUT /escapeRooms/:escapeRoomId/assets/:assetId
exports.editAsset = async (req, res, next) => {
    const {assetId} = req.params;

    try {
        const asset = await models.asset.findByPk(assetId);

        if (asset) {
            let config = "";
            if (asset.mime.search(imageRegex) !== -1) {
                config = appendParameterers({"name": "width", "value": req.body.width}, {"name": "height", "value": req.body.height});
            } else if (asset.mime.search(videoRegex) !== -1) {
                config = appendParameterers(
                    {"name": "width", "value": req.body.width},
                    {"name": "height", "value": req.body.height},
                    {"name": "controls", "value": req.body.controls},
                    {"name": "autoplay", "value": req.body.autoplay},
                    {"name": "download", "value": req.body.dowload}
                );
            } else if (asset.mime.search(audioRegex) !== -1) {
                config = appendParameterers({"name": "controls", "value": req.body.controls});
            } else if (asset.mime.search(applicationRegex) !== -1) {
                config = appendParameterers({"name": "width", "value": req.body.width}, {"name": "height", "value": req.body.height});
            } else {
                return `<div>${item.name}</div>`;
            }
            await asset.update({config});
            res.redirect("back");
        } else {
            res.status(404);
            res.json({"msg": "Not found"});
        }
    } catch (err) {
        next(err);
    }
};

