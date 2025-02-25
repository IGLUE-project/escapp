const Sequelize = require("sequelize");
const sequelize = require("../models");
const {models} = sequelize;
const attHelper = require("../helpers/attachments");
const {nextStep, prevStep} = require("../helpers/progress");
const {ckeditorResponse} = require("../helpers/utils");
const queries = require("../queries");
const path = require("path");
const logMucho = (log)=>{
    console.log('----------------------');
    console.log(log);
    console.log('----------------------');
}
// GET /escapeRooms/:escapeRoomId/assets
exports.assets = async (req, res, next) => {
    const {escapeRoom} = req;

    try {
        const assets = (await models.asset.findAll({"where": { "escapeRoomId": escapeRoom.id }})).map((a) => {
            const {id, public_id, url, mime, filename} = a;

            return {id, public_id, url, mime, "name": filename};
        });

        res.render("escapeRooms/steps/assets", {escapeRoom, assets, "progress": "assets"});
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

// POST /escapeRooms/:escapeRoomId/uploadAssets
exports.uploadAssets = async (req, res) => {
    console.error('uploadAssets')
    const {escapeRoom} = req;
    let uploadResult = null;
    const {i18n} = res.locals;
    const userId = req.session.user && req.session.user.id;
    try {
        //await attHelper.checksCloudinaryEnv();
        // Save the new asset into Cloudinary:
        uploadResult = attHelper.uploadResourceToFileSystem2(req.file.path, escapeRoom.id);
        //uploadResult = await attHelper.uploadResource(req.file.path, attHelper.cloudinary_upload_options_zip);
    } catch (err) {
        res.status(500);
        res.send(err);
    }
    try {
        await models.asset.build({ "escapeRoomId": escapeRoom.id, "public_id": uploadResult.public_id, "url": uploadResult.url, "filename": req.file.originalname, "mime": req.file.mimetype, userId}).save();

        // Res.json({"id": saved.id, "url": uploadResult.url});
        const html = ckeditorResponse(req.query.CKEditorFuncNum, uploadResult.url);
        res.send(html);
    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            res.status(500);
            res.send(i18n.common.flash.errorFile);
            console.error(error);
            attHelper.deleteResource(uploadResult.public_id, models.asset);
        } else {
            res.send(i18n.common.flash.errorFile);
            res.status(500);
            console.error(error);
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
            attHelper.deleteResource(asset.public_id, models.asset);
            await asset.destroy();
            res.json({"msg": i18n.api.ok});
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
    logMucho('hola')
    const {public_id} = req.params;
    let asset = null;
    try {
        logMucho(public_id);
        asset = await models.asset.findOne({"where": { "public_id": public_id, "userId": req.session.user.id }});
        logMucho(asset);
        if(!asset) {
            const myEscapeRooms = queries.escapeRoom.all(req.session.user.id, null, null);
            const escapeRoomAssets = myEscapeRooms.filter((er) => er.assets.some((a) => a.public_id === public_id));
            if(escapeRoomAssets.lenght !== 1){
                console.log('Not found')
                res.status(404);
                res.json({"msg": "Not found"});
                return;
            }
            asset = escapeRoomAssets[0]
        }
        const file = asset.escapeRoomId + "/" + asset.public_id;
        const filePath = path.join(__dirname, "../catalog/" + file)
        console.log(filePath)
        res.sendFile(filePath);

    }
    catch (err) {
        console.log(err)
        next(err);
    }
}
