const Sequelize = require("sequelize");
const sequelize = require("../models");
const {models} = sequelize;
const {getDataForFile} = require("../helpers/uploads");
const {nextStep, prevStep} = require("../helpers/progress");
const {ckeditorResponse, getHostname} = require("../helpers/utils");
const {getLocaleForEscapeRoom} = require("../helpers/I18n");
const queries = require("../queries");
const path = require("path");
const fs = require("fs/promises");
const fsSync = require("fs");
const StreamZip = require("node-stream-zip");


// POST /escapeRooms/:escapeRoomId/assets/new
exports.uploadAsset = async (req, res) => {
    const { escapeRoom } = req;
    const { i18n } = res.locals;
    const userId = req.session.user && req.session.user.id;

    try {
        let assetFilePath = `/${req.file.path}`;
        let assetFilePathFull = path.join(__dirname, "..", assetFilePath);
        const assetFileType = await getDataForFile(assetFilePathFull);
        const assetFileId = path.parse(req.file.filename).name;
        const assetFileName = req.file.originalname;

        const assetFileExtension = path.extname(req.body.filename);

        if (assetFileType.extension !== assetFileExtension) {
            const newAssetFilePath = `/uploads/${assetFileId}${assetFileType.extension}`;
            const newAssetFilePathFull = path.join(__dirname, "..", newAssetFilePath);

            await fs.rename(assetFilePathFull, newAssetFilePathFull);
            assetFilePath = newAssetFilePath;
            assetFilePathFull = newAssetFilePathFull;
        }

        const assetContentPath = assetFilePath;

        const asset = await models.asset.build({ "escapeRoomId": escapeRoom.id, "assetType": assetFileType.assetType, "mimetype": assetFileType.mimetype, "fileId": assetFileId, "filePath": assetFilePath, "fileExtension": assetFileType.extension, "filename": assetFileName, "contentPath": assetContentPath, userId }).save();

        if (asset.assetType === "zip") {
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
                const assetContentPathFolder = `/uploads/webapps/${assetFileId}`;
                const assetContentPathFolderFull = path.join(__dirname, `..${assetContentPathFolder}`);

                fsSync.mkdirSync(assetContentPathFolderFull);
                await zip.extract(null, assetContentPathFolderFull);
                await zip.close();
                const assetContentPath = `${assetContentPathFolder}/index.html`;
                const assetUrl = `/assets/${asset.id}/index.html`;

                await asset.update({ "assetType": "webapp", "contentPath": assetContentPath, "url": assetUrl });
            }
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

// DELETE /escapeRooms/:escapeRoomId/assets/:assetId
exports.deleteAsset = async (req, res) => {
    const {assetId} = req.params;
    const {i18n} = res.locals;

    try {
        const asset = await models.asset.findOne({ "where": { "escapeRoomId": req.escapeRoom.id, "id": assetId } });

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

// GET /escapeRooms/:escapeRoomId/browseResources
exports.browseResources = async (req, res, next) => {
    const {escapeRoom} = req;
    const mode = req.query.mode || "";

    try {
        const where = { "escapeRoomId": escapeRoom.id };

        if (mode === "image") {
            where.assetType = "image";
        }
        const assets = (await models.asset.findAll({ where })).
            map((a) => ({
                "id": a.id,
                "fileId": a.fileId,
                "url": req.app.locals.FULL_APP_NAME + a.url,
                "mimetype": a.mimetype,
                "name": a.filename
            }));

        res.render("escapeRooms/steps/browseResources", {escapeRoom, assets});
    } catch (e) {
        next(e);
    }
};

// GET /assets/:asset_id.:asset_extension
// GET /assets/:asset_id/:file_name
exports.getAsset = async (req, res, next) => {
    const {asset_id, asset_extension} = req.params;
    let asset;

    try {
        asset = await models.asset.findOne({"where": { "id": asset_id }});
        if (!asset) {
            res.status(404).send("Asset not found.");
            return;
        }
        const filePath = path.join(__dirname, "..", asset.filePath);

        switch (asset.assetType) {
        case "video":
            const stat = fsSync.statSync(filePath);
            const fileSize = stat.size;
            const {range} = req.headers;

            if (range) {
                const parts = range.replace(/bytes=/, "").split("-");
                const start = parseInt(parts[0], 10);
                const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
                const chunkSize = end - start + 1;
                const stream = fsSync.createReadStream(filePath, { start, end });
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
                fsSync.createReadStream(filePath).pipe(res);
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
                    "resourceId": `Webapp-${asset.id}`,
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
            const data = fsSync.readFileSync(filePath);

            res.setHeader("Content-Type", "application/pdf");
            res.contentType("application/pdf");
            res.send(data);
            return;
        case "image":
        case "audio":
        default:
            res.sendFile(filePath);
        }
    } catch (err) {
        // console.error(err);
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

exports.returnInstructions = (req, res) => {
    const {file_name} = req.params;

    res.sendFile(path.join(__dirname, `../uploads/instructions/${file_name}`));
};

exports.returnHybridInstructions = (req, res) => {
    const {file_name} = req.params;

    res.sendFile(path.join(__dirname, `../uploads/hybrid/${file_name}`));
};
