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
        const config = JSON.parse(reusablePuzzle.config);
        const form = config.url.includes("reusablePuzzles/forms/") ? config.url.split("/").pop() : "";

        res.render("reusablePuzzles/details", {"id": reusablePuzzle.id, "name": reusablePuzzle.name, "description": reusablePuzzle.description, "thumbnail": reusablePuzzle.config.thumbnail, form});
    } catch (e) {
        next(e);
    }
};


exports.deleteReusablePuzzle = async (req, res, next) => {
    const {puzzle_id} = req.params;

    try {
        const puzzle = await models.reusablePuzzle.findOne({"where": {"id": puzzle_id}});
        const pathDelete = path.join(__dirname, `../reusablePuzzles/installed/${puzzle.name}`);

        await puzzle.destroy();
        fs.rmdir(pathDelete, { "recursive": true, "force": true }, (error) => {
            console.error(error);
        });
        res.status(200);
        res.redirect("back");
    } catch (e) {
        console.error(e);
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
    const {name, description, form } = req.body;
    const t = await sequelize.transaction();

    try {
        let thumbnailPath, thumbnailExtension,
            thumbnailName = "";

        if (req.files.thumbnail) {
            thumbnailPath = path.join(__dirname, "/../", req.files.thumbnail[0].path);
            thumbnailExtension = req.files.thumbnail[0].originalname.split(".").pop();
            thumbnailName = `thumbnail.${thumbnailExtension}`;
        }
        if (!req.files.file || !req.files.file[0]) {
            throw new Error("No file uploaded");
        }

        const zipPath = path.join(__dirname, "/../", req.files.file[0].path);
        let hasForm = false;

        const zip = new StreamZip.async({ "file": zipPath });
        const entries = await zip.entries();

        for (const entry of Object.values(entries)) {
            if (entry.name === "form.ejs") {
                hasForm = true;
            }
        }


        if (await models.reusablePuzzle.findOne({"where": {name}}) !== null) {
            throw new Error("Puzzle with that name already exists");
        }
        const puzzle = await models.reusablePuzzle.create({name, description}, {"transaction": t});

        const newPath = path.join(__dirname, `../reusablePuzzles/installed/${puzzle.name}`);

        if (!fs.existsSync(newPath)) {
            fs.mkdirSync(newPath);
        }

        if (thumbnailPath) {
            fs.renameSync(thumbnailPath, path.join(__dirname, `../reusablePuzzles/installed/${puzzle.name}/thumbnail.${thumbnailExtension}`));
        }

        await zip.extract(null, newPath);
        await zip.close();

        fs.unlinkSync(zipPath);

        if (hasForm) {
            puzzle.config = JSON.stringify({"url": `/reusablePuzzles/installed/${puzzle.id}/form.ejs`, "thumbnail": thumbnailName});
        } else {
            puzzle.config = JSON.stringify({"url": `/reusablePuzzles/forms/${form}`, "thumbnail": thumbnailName});
        }

        await puzzle.save({"transaction": t});
        await t.commit();
        res.redirect("back");
    } catch (e) {
        await t.rollback();
        if (req.files.file && req.files.file[0] && req.files.file[0].path) {
            fs.rm(
                path.join(__dirname, "/../", req.files.file[0].path), { "recursive": true, "force": true },
                (error) => {
                    if (error) {
                        console.error("Error removing directory:", error);
                    }
                    next(e);
                }
            );
        }
    }
};


exports.editReusablePuzzle = async (req, res, next) => {
    const {name, description, form } = req.body;
    const t = await sequelize.transaction();

    try {
        let thumbnailPath, thumbnailExtension,
            thumbnailName = "";

        if (req.files.thumbnail) {
            thumbnailPath = path.join(__dirname, "/../", req.files.thumbnail[0].path);
            thumbnailExtension = req.files.thumbnail[0].originalname.split(".").pop();
            thumbnailName = `thumbnail.${thumbnailExtension}`;
        }

        let hasForm = false;
        let zip = null;

        if (req.files.file && req.files.file[0]) {
            const zipPath = path.join(__dirname, "/../", req.files.file[0].path);

            zip = new StreamZip.async({ "file": zipPath });
            const entries = await zip.entries();

            for (const entry of Object.values(entries)) {
                if (entry.name === "form.ejs") {
                    hasForm = true;
                }
            }
        }

        const puzzle = await models.reusablePuzzle.findOne({"where": {name}});

        if (puzzle === null) {
            throw new Error("Puzzle doesnt exist");
        }

        puzzle.description = description;

        const newPath = path.join(__dirname, `../reusablePuzzles/installed/${puzzle.name}`);

        if (thumbnailPath) {
            fs.renameSync(thumbnailPath, path.join(__dirname, `../reusablePuzzles/installed/${puzzle.name}/thumbnail.${thumbnailExtension}`));
        }

        if (zip) {
            fs.rmdirSync(newPath, { "recursive": true, "force": true });
            fs.mkdirSync(newPath);
            await zip.extract(null, newPath);
            await zip.close();
        }

        if (hasForm) {
            puzzle.config = JSON.stringify({"url": `/reusablePuzzles/installed/${puzzle.name}/form.ejs`, "thumbnail": thumbnailName});
        } else {
            puzzle.config = JSON.stringify({"url": `/reusablePuzzles/forms/${form}`, "thumbnail": thumbnailName});
        }

        await puzzle.save({"transaction": t});
        await t.commit();
        res.redirect("back");
    } catch (e) {
        await t.rollback();
        if (req.files.file && req.files.file[0] && req.files.file[0].path) {
            fs.rm(
                path.join(__dirname, "/../", req.files.file[0].path), { "recursive": true, "force": true },
                (error) => {
                    if (error) {
                        console.error("Error removing directory:", error);
                    }
                    next(e);
                }
            );
        }
    }
};

// INSTANCES
exports.upsertReusablePuzzleInstance = async (req, res, next) => {
    const {escapeRoomId, reusablePuzzleInstanceId} = req.params;

    const {name, description, reusablePuzzleId, ...config} = req.body;

    const t = await sequelize.transaction();

    let newInstanceId = "";
    let reusablePuzzleInstance;

    try {
        if (!reusablePuzzleInstanceId) {
            const trimedConfig = {...config};

            trimedConfig.puzzleSol = null;
            trimedConfig.validator = null;
            const reusablePuzzle = await models.reusablePuzzleInstance.create({escapeRoomId, reusablePuzzleId, name, description, "config": JSON.stringify(trimedConfig)}, {"transaction": t});

            reusablePuzzleInstance = reusablePuzzle;
            newInstanceId = reusablePuzzle.id;
        } else {
            reusablePuzzleInstance = await models.reusablePuzzleInstance.findOne({"where": {"id": reusablePuzzleInstanceId}});
            const trimedConfig = {...config};

            trimedConfig.puzzleSol = null;
            trimedConfig.validator = null;
            const linkedPuzzle = await models.puzzle.findOne({"where": {"assignedReusablePuzzleInstance": reusablePuzzleInstanceId}});

            if (linkedPuzzle) {
                linkedPuzzle.assignedReusablePuzzleInstance = null;
                await linkedPuzzle.save({"transaction": t});
            }
            reusablePuzzleInstance.reusablePuzzleId = reusablePuzzleId || reusablePuzzleInstance.reusablePuzzleId;
            reusablePuzzleInstance.name = name || reusablePuzzleInstance.name;
            reusablePuzzleInstance.description = description || reusablePuzzleInstance.description;
            reusablePuzzleInstance.config = JSON.stringify(trimedConfig);
            await reusablePuzzleInstance.save({"transaction": t});
        }

        if (config.puzzle != "none") {
            const puzzle = await models.puzzle.findOne({"where": {"id": config.puzzle}});

            if (puzzle) {
                puzzle.sol = config.puzzleSol ? config.puzzleSol : puzzle.sol;
                puzzle.automatic = true;
                puzzle.validator = config.validator ? config.validator : puzzle.validator;
                puzzle.assignedReusablePuzzleInstance = newInstanceId ? newInstanceId : reusablePuzzleInstanceId;
                config.puzzleSol = undefined;
                await puzzle.save({"transaction": t});
            }
            config.puzzleSol = undefined;
        }
        t.commit();
        res.json({config, "name": reusablePuzzleInstance.name, "description": reusablePuzzleInstance.description, "id": newInstanceId || reusablePuzzleInstanceId, "type": "reusable"});
    } catch (e) {
        console.error(e);
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

// GET /escapeRooms/:escapeRoomId(\\d+)/reusablePuzzleInstances/:reusablePuzzleInstanceId/render
exports.renderReusablePuzzle = async (req, res, next) => { // eslint-disable-line  no-unused-vars
    const {reusablePuzzleInstanceId} = req.params;

    try {
        const reusablePuzzleInstance = await models.reusablePuzzleInstance.findByPk(reusablePuzzleInstanceId);
        const reusablePuzzle = await models.reusablePuzzle.findByPk(reusablePuzzleInstance.reusablePuzzleId);
        const linkedPuzzle = await models.puzzle.findOne({"where": {"assignedReusablePuzzleInstance": reusablePuzzleInstanceId}});
        const solutionLength = linkedPuzzle ? linkedPuzzle.validator !== "regex" ? linkedPuzzle.sol.length : 0 : 0;

        const filePath = path.join(__dirname, `/../reusablePuzzles/installed/${reusablePuzzle.name}/index.html`);
        const hostName = process.env.APP_NAME ? `https://${process.env.APP_NAME}` : "http://localhost:3000";
        const basePath = `${hostName}/reusablePuzzles/${reusablePuzzleInstance.reusablePuzzleId}/`;
        const {token} = await models.user.findByPk(req.session.user.id);
        const referrer = req.get("Referrer");
        const preview = Boolean(referrer && referrer.match("/team$"));
        const config = {
            ...JSON.parse(reusablePuzzleInstance.config),
            solutionLength,
            "escappClientSettings": {
                "endpoint": `${hostName}/api/escapeRooms/${reusablePuzzleInstance.escapeRoomId}`,
                preview,
                "linkedPuzzleIds": [linkedPuzzle ? linkedPuzzle.order + 1 : null],
                "user": {
                    "email": req.session.user.username,
                    token
                }
            }
        };

        if (reusablePuzzleInstance) {
            res.render("reusablePuzzles/reusablePuzzleContainer", {"file": filePath, basePath, hostName, config, "layout": false});
        } else {
            res.status(404).send("Puzzle not found");
        }
    } catch (err) {
        console.error(err);
        const msg = "Error loading reusable puzzle, the admin could have deleted it.";

        res.status(404).send(msg);
    }
};

// GET /reusablePuzzlePreview/:reusablePuzzleId
exports.renderReusablePuzzlePreview = async (req, res, next) => {
    const {reusablePuzzleId} = req.params;
    const receivedConfig = req.query.config ? JSON.parse(req.query.config) : {};
    const escapeRoomId = req.query.escapeRoomId || "";

    try {
        const reusablePuzzle = await models.reusablePuzzle.findByPk(reusablePuzzleId);
        const linkedPuzzle = await models.puzzle.findByPk(req.query.puzzleId);
        const filePath = path.join(__dirname, `/../reusablePuzzles/installed/${reusablePuzzle.name}/index.html`);
        const hostName = process.env.APP_NAME ? `https://${process.env.APP_NAME}` : "http://localhost:3000";
        const basePath = `${hostName}/reusablePuzzles/${reusablePuzzleId}/`;
        const {token} = await models.user.findByPk(req.session.user.id);
        const config = {
            ...receivedConfig,
            "escappClientSettings": {
                "endpoint": `${hostName}/api/escapeRooms/${escapeRoomId}`,
                "linkedPuzzleIds": [linkedPuzzle ? linkedPuzzle.order + 1 : null],
                "preview": true,
                "user": {
                    "email": req.session.user.username,
                    token
                }
            }
        };

        if (reusablePuzzle) {
            res.render("reusablePuzzles/reusablePuzzleContainer", {"file": filePath, basePath, hostName, config, "layout": false});
        } else {
            res.status(404).send("Puzzle not found");
        }
    } catch (err) {
        console.error(err);
        const msg = "Error loading reusable puzzle, the admin could have deleted it.";

        res.status(404).send(msg);
    }
};
