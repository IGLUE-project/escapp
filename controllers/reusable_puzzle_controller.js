/* eslint-disable  no-sync*/
const {models} = require("../models");
const fs = require("fs");
const path = require("path");
const StreamZip = require("node-stream-zip");
const sequelize = require("../models");

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
        const reusablePuzzle = await models.reusablePuzzle.findOne({"where": {"id": reusablePuzzleId}});

        res.render("reusablePuzzles/details", reusablePuzzle);
    } catch (e) {
        next(e);
    }
};


exports.deleteReusablePuzzle = async (req, res, next) => {
    const {reusablePuzzleId} = req.params;

    try {
        await models.reusablePuzzle.destroy({"where": {"id": reusablePuzzleId}});
        res.status(200);
        res.send();
    } catch (e) {
        console.erorr(e);
        next(e);
    }
};

exports.deleteReusablePuzzleInstance = async (req, res, next) => {
    const {reusablePuzzleInstanceId} = req.params;

    try {
        await models.reusablePuzzleInstance.destroy({"where": {"id": reusablePuzzleInstanceId}});
        res.status(200);
        res.send();
    } catch (e) {
        console.erorr(e);
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


exports.renderCreatePuzzle = (req, res) => {
    res.render("reusablePuzzles/reusablePuzzleCreation");
};


exports.createReusablePuzzle = async (req, res, next) => {
    const {name, description, config} = req.body;
    const t = await sequelize.transaction();

    try {
        let hasForm = false;
        const zip = new StreamZip.async({ "file": req.file.path });
        const entries = await zip.entries();

        for (const entry of Object.values(entries)) {
            if (entry.name === "form.ejs") {
                hasForm = true;
            }
        }

        const puzzle = await models.reusablePuzzle.create({name, description, config}, {"transaction": t});

        const newPath = path.join(__dirname, `../uploads/reusablePuzzles/${puzzle.id}`);

        fs.mkdirSync(newPath);
        await zip.extract(null, newPath);
        await zip.close();

        const puzzleConfig = fs.readFileSync(path.join(newPath, "config.json"));
        const parsedConfig = JSON.parse(puzzleConfig);

        if (hasForm) {
            puzzle.config = JSON.stringify({"url": `/uploads/reusablePuzzles/${puzzle.id}/form.ejs`, ...parsedConfig });
            puzzle.save({"transaction": t});
        }

        await puzzle.save({"transaction": t});
        await t.commit();
        res.redirect("back");
    } catch (e) {
        await t.rollback();
        console.error(e);
        fs.rm(
            path.join("../uploads/reusablePuzzles/${req.file.filename"), { "recursive": true, "force": true },
            (error) => {
                if (error) {
                    console.error("Error removing directory:", error);
                }
                next(e);
            }
        );
    }
};

// INSTANCES
exports.upsertReusablePuzzleInstance = async (req, res, next) => {
    const {escapeRoomId, reusablePuzzleInstanceId} = req.params;

    const {name, description, reusablePuzzleId, ...config} = req.body;

    const t = await sequelize.transaction();

    let newInstanceId = "";

    try {
        if (!reusablePuzzleInstanceId) {
            const trimedConfig = config;
            trimedConfig.puzzleSol = null;
            trimedConfig.validator = null;
            const reusablePuzzle = await models.reusablePuzzleInstance.create({escapeRoomId, reusablePuzzleId, name, description, "config": JSON.stringify(trimedConfig)}, {"transaction": t});

            newInstanceId = reusablePuzzle.id;
        } else {
            const reusablePuzzleInstance = await models.reusablePuzzleInstance.findOne({"where": {"id": reusablePuzzleInstanceId}});

            reusablePuzzleInstance.reusablePuzzleId = reusablePuzzleId || reusablePuzzleInstance.reusablePuzzleId;
            reusablePuzzleInstance.name = name || reusablePuzzleInstance.name;
            reusablePuzzleInstance.description = description || reusablePuzzleInstance.description;
            reusablePuzzleInstance.config = config ? JSON.stringify(config) : JSON.stringify(reusablePuzzleInstance.config);
            await reusablePuzzleInstance.save({"transaction": t});
        }

        if (config.puzzle && config.puzzleSol) {
            const puzzle = await models.puzzle.findOne({"where": {"id": config.puzzle}});

            if (puzzle) {
                puzzle.sol = config.puzzleSol;
                puzzle.validator = config.validator;
                puzzle.assignedReusablePuzzleInstance = newInstanceId ? newInstanceId : reusablePuzzleInstanceId;
                config.puzzleSol = undefined;
                await puzzle.save({"transaction": t});
            }
            config.puzzleSol = undefined;
        }

        t.commit();
        res.json({config, id: newInstanceId || reusablePuzzleInstanceId, "type": "reusable"});
    } catch (e) {
        t.rollback();
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

exports.renderReusablePuzzle = async (req, res, next) => { // eslint-disable-line  no-unused-vars
    const {reusablePuzzleInstanceId} = req.params;

    try {
        const reusablePuzzleInstance = await models.reusablePuzzleInstance.findByPk(reusablePuzzleInstanceId);
        const linkedPuzzle = await models.puzzle.findOne({"where": {"assignedReusablePuzzleInstance": reusablePuzzleInstanceId}});

        const solutionLength = linkedPuzzle ? (linkedPuzzle.validator !== "regex" ? linkedPuzzle.sol.length : 0) : 0;

        const filePath = path.join(__dirname, `/../uploads/reusablePuzzles/${reusablePuzzleInstance.reusablePuzzleId}/index.html`);
        let hostName = process.env.APP_NAME ? `https://${process.env.APP_NAME}` : "http://localhost:3000";
        const basePath = hostName + "/uploads/reusablePuzzles/" + reusablePuzzleInstance.reusablePuzzleId + "/";

       const config = { ...JSON.parse(reusablePuzzleInstance.config), solutionLength,  escappClientSettings : {
          endpoint:hostName + "/api/escapeRooms/" + reusablePuzzleInstance.escapeRoomId,
          linkedPuzzleIds: [1],
        }}

        if (reusablePuzzleInstance) {
            res.render("reusablePuzzles/reusablePuzzleContainer", {"file": filePath, basePath, hostName, config, "layout": false});
        } else {
            res.status(404).send("Puzzle not found");
        }
    } catch (err) {
        console.error(err);
        next(err);
    }
};
