/* eslint no-sync: 0 */
const Sequelize = require("sequelize");
const sequelize = require("../models");
const {models} = sequelize;
const attHelper = require("../helpers/attachments");
const {nextStep, prevStep} = require("../helpers/progress");
const {ckeditorResponse} = require("../helpers/utils");
const queries = require("../queries");
const path = require("path");
const ejs = require("ejs");

const fs = require("fs");
const StreamZip = require("node-stream-zip");

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

const supportedMimeTypes = ["image\/.*", "video\/mp4", "video\/webm", "audio\/.*", "application\/pdf"];

// POST /escapeRooms/:escapeRoomId/uploadAssets
exports.uploadAssets = async (req, res) => {
    const { escapeRoom } = req;
    const { i18n } = res.locals;
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
        const asset = await models.asset.build({ "escapeRoomId": escapeRoom.id, "public_id": req.file.filename, "url": `/${req.file.path}`, "filename": req.file.originalname, "mime": req.file.mimetype, userId }).save();

        // Res.json({"id": saved.id, "url": uploadResult.url});
        const html = ckeditorResponse(req.query.CKEditorFuncNum, req.file.url);

        if (mime === "application/zip") {
            let isWebapp = false;
            const zip = new StreamZip.async({ "file": req.file.path });
            const entries = await zip.entries();

            for (const entry of Object.values(entries)) {
                if (entry.name === "index.html") {
                    isWebapp = true;
                    break;
                }
            }
            if (isWebapp) {
                const newPath = path.join(__dirname, `../uploads/webapps/${req.file.filename}`);

                fs.mkdirSync(newPath);
                await zip.extract(null, newPath);
                await zip.close();
                await asset.update({ "mime": "application/webapp", "url": `/uploads/webapps/${req.file.filename}/index.html` });
            }
        }

        res.send(html);
    } catch (error) {
        console.error(error);
        if (error instanceof Sequelize.ValidationError) {
            res.send(i18n.common.flash.errorFile);
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
        console.error(err);
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
            const {range} = req.headers;

            if (range) {
                const parts = range.replace(/bytes=/, "").split("-");
                const start = parseInt(parts[0], 10);
                const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
                const chunkSize = end - start + 1;
                const stream = fs.createReadStream(filePath, { start, end });
                const head = {
                    "Content-Range": `bytes ${start}-${end}/${fileSize}`,
                    "Accept-Ranges": "bytes",
                    "Content-Length": chunkSize,
                    "Content-Type": "video/mp4"
                };

                res.writeHead(206, head);
                stream.pipe(res);
            } else {
                const head = {
                    "Content-Length": fileSize,
                    "Content-Type": "video/mp4"
                };

                res.writeHead(200, head);
                fs.createReadStream(filePath).pipe(res);
            }
        } else if (asset.mime.search(applicationRegex) !== -1) {
            res.render("partials/_webappContainer", {"path": filePath, "layout": false});
        } else {
            res.sendFile(filePath);
        }
    } catch (err) {
        console.error(err);
        next(err);
    }
};


const appendParameterers = (...parameters) => {
    let config = "";

    parameters.forEach((parameter) => {
        const {name} = parameter;
        const {value} = parameter;

        config += `${name}:${value};`;
    });
    return config;
};

// PUT /escapeRooms/:escapeRoomId/assets/:assetId
exports.editAsset = async (req, res, next) => {
    const {assetId} = req.params;

    try {
        const asset = await models.asset.findByPk(assetId);

        if (asset) {
            let config = "";

            if (asset.mime.search(imageRegex) !== -1) {
                config = appendParameterers({"name": "width", "value": req.body.width}, {"name": "height", "value": req.body.height});
            } else if (asset.mime.search(videoRegex) !== -1 || asset.mime.search(audioRegex) !== -1) {
                config = appendParameterers(
                    {"name": "width", "value": req.body.width},
                    {"name": "height", "value": req.body.height},
                    {"name": "controls", "value": req.body.controls},
                    {"name": "autoplay", "value": req.body.autoplay},
                    {"name": "download", "value": req.body.download}
                );
            } else if (asset.mime.search(applicationRegex) !== -1) {
                config = appendParameterers({"name": "width", "value": req.body.width}, {"name": "height", "value": req.body.height});
            } else {
                return "";
            }
            await asset.update({config});
            res.json({config, "id": asset.id});
        } else {
            res.status(404);
            res.send("Asset not found, did you remove it?");
        }
    } catch (err) {
        next(err);
    }
};
// GET /uploads/:public_id/:file_name
exports.getWebAppAsset = async (req, res, next) => { // eslint-disable-line  no-unused-vars
    const { public_id, file_name } = req.params;
    let asset = null;

    try {
        asset = await models.asset.findOne({ "where": { public_id, "userId": req.session.user.id } });
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
                res.json({ "msg": "Not found" });
                return;
            }
            [asset] = escapeRoomAssets;
        }

        if (asset.mime !== "application/webapp") {
            res.status(404);
            res.json({ "msg": "Not found" });
            return;
        }

        const filePath = path.join(__dirname, `/../uploads/webapps/${public_id}/${file_name}`);

        res.sendFile(filePath);
    } catch (err) {
        console.error(err);
        next(err);
    }
};

exports.getReusablePuzzleAsset = async (req, res, next) => { // eslint-disable-line  no-unused-vars
    const {puzzle_id, file_name } = req.params;

    try {
        let name;

        if (puzzle_id !== "forms") {
            const reusablePuzzle = await models.reusablePuzzle.findByPk(puzzle_id);

            name = reusablePuzzle ? reusablePuzzle.name : null;
            const filePath = path.join(__dirname, `/../reusablePuzzles/installed/${name}/${file_name}`);

            res.sendFile(filePath);
        } else { // If they are asking for a hardcoded form
            name = puzzle_id;
            const { i18n } = res.locals;
            const filePath = path.join(__dirname, `/../reusablePuzzles/${name}/${file_name}`);
            // Render the EJS file with i18n context

            ejs.renderFile(filePath, {i18n}, {}, function (err, data) {
                if (err) {
                    throw new Error(err);
                }
                res.setHeader("Content-type", "text/html");
                res.send(data);
            });
        }
    } catch (err) {
        console.error(err);
        next(err);
    }
};

exports.getFormForInstance = async (req, res, next) => {
    const {puzzle_id} = req.params;

    try {
        const instance = await models.reusablePuzzleInstance.findByPk(puzzle_id);
        const reusable = await models.reusablePuzzle.findByPk(instance.reusablePuzzleId);
        const config = JSON.parse(reusable.config);
        const regex = new RegExp(/\/reusablePuzzles\/[0-9]*\//); // Non hardcoded forms

        config.url = config.url.replace(regex, `/reusablePuzzles/installed/${reusable.name}/`);
        const filePath = path.join(__dirname, "/../", config.url);

        ejs.renderFile(filePath, {"i18n": res.locals.i18n}, {}, function (err, data) {
            if (err) {
                throw new Error(err);
            }
            res.setHeader("Content-type", "text/html");
            res.send(data);
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
};
