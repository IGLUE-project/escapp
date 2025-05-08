const {models} = require("../models");
const fs = require("fs");
const path = require("path");
const StreamZip = require("node-stream-zip");

exports.getReusablePuzzles = async (req, res, next) => {
    try {
        const reusablePuzzles = await models.reusablePuzzle.findAll();

        res.render("reusablePuzzles/index", {reusablePuzzles});
    } catch (e) {
        next(e);
    }
};

exports.getReusablePuzzle = async (req, res, next) => {
    const {reusablePuzzleId} = req.params;

    try {
        const reusablePuzzle = await models.reusablePuzzle.findOne({"where": {id:reusablePuzzleId}});

        res.render("reusablePuzzles/details", reusablePuzzle);
    } catch (e) {
        next(e);
    }
};

exports.getReusablePuzzleInstances = async (req, res, next) => {
    const {escapeRoomId} = req.params;

    try {
        const reusablePuzzleInstances = await models.reusablePuzzleInstance.findAll({"where": {escapeRoomId}});

        res.json(reusablePuzzleInstances);
    } catch (e) {
        next(e);
    }
};

exports.deleteReusablePuzzle = async (req, res, next) => {
    const {reusablePuzzleId} = req.params;

    try {
        await models.reusablePuzzle.destroy({"where": {reusablePuzzleId}});
        res.status(200);
    } catch (e) {
        next(e);
    }
};

exports.deleteReusablePuzzleInstance = async (req, res, next) => {
    const {reusablePuzzleInstanceId} = req.params;

    try {
        await models.reusablePuzzleInstance.destroy({"where": {reusablePuzzleInstanceId}});
        res.status(200);
    } catch (e) {
        next(e);
    }
};


exports.renderPuzzleConfiguration = async (_, res) => {

    const rPuzzles = await models.reusablePuzzle.findAll();

    res.render("reusablePuzzles/reusablePuzzleCreation", {rPuzzles});
};

exports.renderEditPuzzleConfiguration = async (req, res, next) => {
    const {reusablePuzzleInstanceId} = req.params;

    try {
        const {config, name, description} = await models.reusablePuzzleInstance.findOne({"where": {"id": reusablePuzzleInstanceId}});

        res.render("reusablePuzzles/reusablePuzzleConfiguration", {config, name, description});
    } catch (e) {
        next(e);
    }
};

exports.createReusablePuzzleInstance = async (req, res, next) => {
    const {escapeRoomId} = req.params;
    const {config, name, description, reusablePuzzleId} = req.body;

    try {
        await models.reusablePuzzleInstance.create({escapeRoomId, reusablePuzzleId, name, description, config});
        res.redirect(`/escapeRooms/${escapeRoomId}/team`);
        next();
    } catch (e) {
        next(e);
    }
};


exports.renderCreatePuzzle = async (req, res) => {
        res.render("reusablePuzzles/reusablePuzzleCreation");
}


exports.createReusablePuzzle = async (req, res, next) => {

    try {
        let hasConfig = false;
        const zip = new StreamZip.async({ file: req.file.path });
        const entries = await zip.entries();
        for (const entry of Object.values(entries)) {
            if (entry.name === "config.json") {
                hasConfig = true;
                break;
            }
        }

        const newPath = path.join(__dirname, `../uploads/reusablePuzzles/${req.file.filename}`);
        if (hasConfig) {
            fs.mkdirSync(newPath);
            await zip.extract(null, newPath);
            await zip.close();
        }

        const config = fs.readFileSync(path.join(newPath, "config.json"));
        const parsedConfig = JSON.parse(config);

        const {name, description, puzzleConfig} = parsedConfig;
        puzzleConfig.baseUrl = `uploads/reusablePuzzles/${req.file.filename}`;
        await models.reusablePuzzle.create({name, description, config:JSON.stringify(puzzleConfig)});
        res.redirect('back')
    }
    catch (e) {
        console.error(e);
        await fs.rm(path.join("../uploads/reusablePuzzles/${req.file.filename"), { recursive: true, force: true });
        next(e);
    }
};
