const Sequelize = require("sequelize");
const sequelize = require("../models");
const {models} = sequelize;
const {nextStep, prevStep} = require("../helpers/progress");
const {ckeditorResponse, getHostname} = require("../helpers/utils");
const {getLocaleForEscapeRoom} = require("../helpers/I18n");
const queries = require("../queries");
const path = require("path");
const ejs = require("ejs");

const fs = require("fs");
const StreamZip = require("node-stream-zip");

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

const mimeTypesRegexs = {
    "zip": new RegExp(/application\/(zip|x-zip-compressed|x-zip)/),
    "image": new RegExp("image\/.*"),
    "video": new RegExp(/video\/(mp4|webm)/),
    "audio": new RegExp("audio\/.*"),
    "pdf": new RegExp("application\/pdf")
}
const mimeTypesRegexsEntries = Object.entries(mimeTypesRegexs);

// POST /escapeRooms/:escapeRoomId/uploadAssets
exports.uploadAssets = async (req, res) => {
    const { escapeRoom } = req;
    const { i18n } = res.locals;
    const userId = req.session.user && req.session.user.id;

    try {
        const assetMimetype = req.file.mimetype;
        let assetType = null;
        for (const [key, regex] of mimeTypesRegexsEntries) {
            if (regex.test(assetMimetype)) {
                assetType = key;
                break;
            }
        }
        if(assetType === null){
            assetType = "unknown";
        }

        let assetFileId = path.parse(req.file.filename).name;
        let assetFilePath = "/" + req.file.path;
        let assetFileExtension = path.extname(req.body.filename); 
        let assetContentPath = assetFilePath;

        const asset = await models.asset.build({ "escapeRoomId": escapeRoom.id, "assetType": assetType, "mimetype": assetMimetype, "fileId": assetFileId, "filePath": assetFilePath, "fileExtension": assetFileExtension, "filename": req.body.filename, "contentPath": assetContentPath, userId }).save();

        let assetUrl = "/assets/" + asset.id + asset.fileExtension;
        if (assetType === "zip") {
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
                const assetContentPathFolder = "/uploads/webapps/" + path.parse(req.file.filename).name;
                const assetContentPathFolderFull = path.join(__dirname, `..${assetContentPathFolder}`);
                fs.mkdirSync(assetContentPathFolderFull);
                await zip.extract(null, assetContentPathFolderFull);
                await zip.close();
                const assetContentPath = assetContentPathFolder + "/index.html";
                assetUrl = "/assets/" + asset.id + "/index.html";
                await asset.update({ "assetType": "webapp", "contentPath": assetContentPath, "url": assetUrl });
            }
        } else {
            await asset.update({ "url": assetUrl });
        }
        res.json({asset});
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
        const asset = await models.asset.findOne({ where: { escapeRoomId: req.escapeRoom.id, id: assetId } });
        if (asset) {
            await asset.destroy();
            res.json({"msg": i18n.api.ok});
        } else {
            res.status(404).json({"msg": i18n.api.notFound});
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({"msg": i18n.api.error});
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

// GET /assets/:asset_id.:asset_extension
// GET /assets/:asset_id/:file_name
exports.getAsset = async (req, res, next) => {
    const {asset_id, asset_extension} = req.params;
    let asset;

    try {
        asset = await models.asset.findOne({"where": { id: asset_id, "userId": req.session.user.id }});
        if (!asset) {
            res.status(404).send("Asset not found.");
        }
        const filePath = path.join(__dirname, "..", asset.filePath);
        switch(asset.assetType){
        case "video":
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
            return;
        case "webapp":
            const basePath = asset.contentPath;
            const indexFile = path.join(__dirname, "..", asset.contentPath);

            const referrer = req.get("Referrer");
            const preview = Boolean(referrer && referrer.match("/team$"));
            const hostName = getHostname(req);
            const {token} = await models.user.findByPk(req.session.user.id);
            const escapeRoom = await models.escapeRoom.findByPk(asset.escapeRoomId);
            const localeForAsset = getLocaleForEscapeRoom(req, escapeRoom, false);
            const config = {
                "locale": localeForAsset,
                "escappClientSettings": {
                    "endpoint": `${hostName}/api/escapeRooms/${asset.escapeRoomId}`,
                    preview,
                    "resourceId": ("Webapp-" + asset.id),
                    "user": {
                        "email": req.session.user.username,
                        token
                    },
                    "I18n": {"locale": localeForAsset}
                }
            };
            res.render("reusablePuzzles/reusablePuzzleContainer", {basePath, config, "file": indexFile, "layout": false});
            return;
        case "pdf":
            const data = fs.readFileSync(filePath);
            res.setHeader("Content-Type", "application/pdf");
            res.contentType("application/pdf");
            res.send(data);
            return;
        case "image":
        case "audio":
        default:
            res.sendFile(filePath);
            return;
        }
    } catch (err) {
        console.error(err);
        res.status(404).send("Error loading asset");
    }
};

// GET /uploads/:file_id/:webapp_file_name
exports.getWebAppFile = async (req, res, next) => {
    const { file_id, webapp_file_name } = req.params;
    try {
        const filePath = path.join(__dirname, `/../uploads/webapps/${file_id}/${webapp_file_name}`);
        res.sendFile(filePath);
    } catch (err) {
        console.error(err);
        next(err);
    }
};

exports.appendParameters = (...parameters) => {
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
    const {filename} = req.body;

    try {
        const asset = await models.asset.findByPk(assetId);

        if (asset) {
            asset.filename = filename;
            await asset.save();

            res.json({"config": {}, filename, "id": asset.id});
        } else {
            res.status(404);
            res.send("Asset not found");
        }
    } catch (err) {
        next(err);
    }
};

exports.getReusablePuzzleAsset = async (req, res, next) => {
    const {puzzle_id, file_name } = req.params;

    try {
        let name = puzzle_id;

        if (puzzle_id !== "forms") {
            const reusablePuzzle = await models.reusablePuzzle.findByPk(puzzle_id);

            name = reusablePuzzle ? reusablePuzzle.name : null;

            const filePath = path.join(__dirname, `/../reusablePuzzles/installed/${name}/${file_name}`);

            res.sendFile(filePath);
        } else { // If they are asking for a hardcoded form
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


exports.returnThumbnail = (req, res) => {
    const {file_name} = req.params;

    res.sendFile(path.join(__dirname, `../uploads/thumbnails/${file_name}`));
};

exports.returnInstructions = (req, res) => {
    const {file_name} = req.params;

    res.sendFile(path.join(__dirname, `../uploads/instructions/${file_name}`));
};

exports.returnHybridInstructions = (req, res) => {
    const {file_name} = req.params;

    res.sendFile(path.join(__dirname, `../uploads/hybrid/${file_name}`));
};


