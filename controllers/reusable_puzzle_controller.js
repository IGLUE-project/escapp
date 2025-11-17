const {models} = require("../models");
const fs = require("fs");
const path = require("path");
const StreamZip = require("node-stream-zip");
const sequelize = require("../models");
const {getLocaleForEscapeRoom} = require("../helpers/I18n");
const {getHostname} = require("../helpers/utils");
const {getPuzzlesSolutionLength} = require("../helpers/reusablePuzzles");

//Reusable puzzles

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
        console.error(e);
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
        const {config, name} = await models.reusablePuzzleInstance.findOne({"where": {"id": reusablePuzzleInstanceId}});
        res.render("reusablePuzzles/reusablePuzzleConfiguration", {config, name});
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

        let instructions = "";

        if (req.files.instructions) {
            req.files.instructions.forEach((instruction, index) => {
                fs.renameSync(path.join(__dirname, "/../", req.files.instructions[index].path), path.join(__dirname, `../reusablePuzzles/installed/${puzzle.name}/${instruction.originalname}`));
                instructions += `${instruction.originalname.split(".")[0]},`;
            });
        }
        puzzle.instructions = instructions;

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

        let instructions = "";

        if (req.files.instructions) {
            req.files.instructions.forEach((instruction) => {
                fs.renameSync(path.join(__dirname, "/../", req.files.instructions[0].path), path.join(__dirname, `../reusablePuzzles/installed/${puzzle.name}/${instruction.originalname}`));
                instructions += `${instruction.originalname.split(".")[0]}, `;
            });
        }
        puzzle.instructions = instructions;

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


//Reusable puzzle instances

exports.upsertReusablePuzzleInstance = async (req, res, next) => {
    const {escapeRoomId, reusablePuzzleInstanceId} = req.params;
    const {name, reusablePuzzleId, ...config} = req.body;
    const t = await sequelize.transaction();
    const isPuzzleAssigned = !(config.puzzle === "noSelected" || config.puzzle === undefined); // Checkbox marked or the please select option marked
    config.isPuzzleAssigned = isPuzzleAssigned;
    let newInstanceId = "";
    let reusablePuzzleInstance;
    let puzzle = null;

    try {
        if (!reusablePuzzleInstanceId) {
            const trimedConfig = {...config};
            trimedConfig.puzzleSol = null;
            trimedConfig.validator = null;
            trimedConfig.rangeInput = null;
            trimedConfig.solutionLength = null;
            if (reusablePuzzleId) {
                Object.keys(trimedConfig).forEach((key) => {
                    if (trimedConfig[key] === "" || trimedConfig[key] === "undefined") {
                        trimedConfig[key] = undefined;
                    }
                });
            }

            const reusablePuzzle = await models.reusablePuzzleInstance.create({escapeRoomId, reusablePuzzleId, name, "config": JSON.stringify(trimedConfig)}, {"transaction": t});
            reusablePuzzleInstance = reusablePuzzle;
            newInstanceId = reusablePuzzle.id;
        } else {
            reusablePuzzleInstance = await models.reusablePuzzleInstance.findOne({"where": {"id": reusablePuzzleInstanceId}}, {"transaction": t});
            const trimedConfig = {...config};
            trimedConfig.puzzleSol = null;
            trimedConfig.validator = null;
            trimedConfig.rangeInput = null;
            trimedConfig.solutionLength = null;

            trimedConfig.range = trimedConfig.validator === "range" ? trimedConfig.range : undefined;

            reusablePuzzleInstance.name = name || reusablePuzzleInstance.name;

            if (reusablePuzzleId) {
                Object.keys(trimedConfig).forEach((key) => {
                    if (trimedConfig[key] === "" || trimedConfig[key] === "undefined") {
                        trimedConfig[key] = undefined;
                    }
                });
            }
            reusablePuzzleInstance.reusablePuzzleId = reusablePuzzleId;
            reusablePuzzleInstance.config = JSON.stringify(trimedConfig);
            await reusablePuzzleInstance.save({"transaction": t});
        }

        const puzzles = await reusablePuzzleInstance.getPuzzles({"transaction": t});
        await reusablePuzzleInstance.removePuzzles(puzzles, {"transaction": t});
        if (config.puzzle != "none" && isPuzzleAssigned) {
            puzzle = await models.puzzle.findOne({"where": {"id": config.puzzle}, "include": [{"model": models.reusablePuzzleInstance}]}, {"transaction": t});
            if (puzzle) {
                puzzle.sol = config.puzzleSol ? config.puzzleSol : puzzle.sol;
                puzzle.validator = config.validator ? config.validator : puzzle.validator;
                if ((puzzle.validator === "range")&&(config.puzzleSol)&&(config.rangeInput)) {
                    puzzle.sol = `${config.puzzleSol}+${config.rangeInput}`;
                }
                puzzle.automatic = true;
                await reusablePuzzleInstance.addPuzzle(puzzle.id, {"transaction": t});
                await puzzle.save({"transaction": t});
            }
        }
        if (typeof config.solutionLength !== "undefined") {
            reusablePuzzleInstance.config = JSON.stringify({...JSON.parse(reusablePuzzleInstance.config), "solutionLength": config.solutionLength});
        }
        await reusablePuzzleInstance.save({"transaction": t});
        t.commit();

        const newPuzzle = (puzzle && puzzle !== null && isPuzzleAssigned) ? {
            "id": puzzle.id,
            "validator": puzzle.validator,
            "title": puzzle.title,
            "sol": puzzle.sol,
            "assignedReusablePuzzleInstances": puzzle.reusablePuzzleInstances.map((instance) => instance.id)
        } : {};

        res.json({config, "name": reusablePuzzleInstance.name, "puzzle": newPuzzle, "reusablePuzzleId": reusablePuzzleInstance.reusablePuzzleId, "id": newInstanceId || reusablePuzzleInstanceId, "type": "reusablePuzzleInstance"});
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
exports.renderReusablePuzzle = async (req, res, _) => {
    const {reusablePuzzleInstanceId} = req.params;

    try {
        const reusablePuzzleInstance = await models.reusablePuzzleInstance.findByPk(reusablePuzzleInstanceId);
        if (!reusablePuzzleInstance) {
            throw new Error(`ReusablePuzzleInstance with ID ${reusablePuzzleInstanceId} not found`);
        }

        const reusablePuzzleInstanceConfig = JSON.parse(reusablePuzzleInstance.config);
        const reusablePuzzle = await models.reusablePuzzle.findByPk(reusablePuzzleInstance.reusablePuzzleId);
        const escapeRoom = await models.escapeRoom.findByPk(reusablePuzzleInstance.escapeRoomId);
        const localeForReusablePuzzle = getLocaleForEscapeRoom(req, escapeRoom, false);
        const linkedPuzzles = await reusablePuzzleInstance.getPuzzles();
        const linkedPuzzlesLength = linkedPuzzles.length;
        let solutionLength = undefined;
        if (linkedPuzzlesLength > 0) {
            if (typeof reusablePuzzleInstanceConfig.solutionLength !== "undefined"){
                solutionLength = reusablePuzzleInstanceConfig.solutionLength;
            } else {
                solutionLength = getPuzzlesSolutionLength(linkedPuzzles);
            }
        }

        const filePath = path.join(__dirname, `/../reusablePuzzles/installed/${reusablePuzzle.name}/index.html`);
        const hostName = getHostname(req);
        const basePath = `${hostName}/reusablePuzzles/${reusablePuzzleInstance.reusablePuzzleId}/`;
        const {token} = await models.user.findByPk(req.session.user.id);
        const referrer = req.get("Referrer");
        const preview = Boolean(referrer && referrer.match("/team$"));
        const config = {
            ...reusablePuzzleInstanceConfig,
            "solutionLength" : solutionLength,
            "locale": localeForReusablePuzzle,
            "escappClientSettings": {
                "endpoint": `${hostName}/api/escapeRooms/${reusablePuzzleInstance.escapeRoomId}`,
                preview,
                "resourceId": ("ReusablePuzzleInstance-" + reusablePuzzleInstance.id),
                "linkedPuzzleIds": linkedPuzzles ? (linkedPuzzles.map((p) => p.order+1)) : [],
                "user": {
                    "email": req.session.user.username,
                    token
                },
                "I18n": {"locale": localeForReusablePuzzle}
            }
        };
        res.render("reusablePuzzles/reusablePuzzleContainer", {"file": filePath, basePath, hostName, config, "layout": false});
    } catch (err) {
        console.error(err);
        res.status(404).send("Error loading reusable puzzle instance.");
    }
};

// GET /reusablePuzzlePreview/:reusablePuzzleId
exports.renderReusablePuzzlePreview = async (req, res) => {
    const {reusablePuzzleId} = req.params;
    const receivedConfig = req.query.config ? JSON.parse(req.query.config) : {};
    if ((typeof receivedConfig.solutionLength == "number")&&(receivedConfig.solutionLength < 1)){
        delete receivedConfig.solutionLength;
    }
    const escapeRoomId = req.query.escapeRoomId || "";

    try {
        const reusablePuzzle = await models.reusablePuzzle.findByPk(reusablePuzzleId);
        if (!reusablePuzzle) {
            throw new Error(`ReusablePuzzle with ID ${reusablePuzzleId} not found`);
        }

        const linkedPuzzles = []
        if (typeof req.query.puzzleId !== "undefined" && req.query.puzzleId !== "undefined" && req.query.puzzleId !== "noSelected"){
            const linkedPuzzle = await models.puzzle.findByPk(req.query.puzzleId);
            if(linkedPuzzle){
                linkedPuzzles.push(linkedPuzzle);
            }
        }
        receivedConfig.solutionLength = getPuzzlesSolutionLength(linkedPuzzles);

        const escapeRoom = await models.escapeRoom.findByPk(escapeRoomId);
        const localeForReusablePuzzle = getLocaleForEscapeRoom(req, escapeRoom, false);
        const filePath = path.join(__dirname, `/../reusablePuzzles/installed/${reusablePuzzle.name}/index.html`);
        const hostName = getHostname(req);
        const basePath = `${hostName}/reusablePuzzles/${reusablePuzzleId}/`;
        const {token} = await models.user.findByPk(req.session.user.id);

        Object.keys(receivedConfig).forEach((key) => {
            if (receivedConfig[key] === "" || receivedConfig[key] === "undefined") {
                receivedConfig[key] = undefined;
            }
        });
        const config = {
            ...receivedConfig,
            "locale": localeForReusablePuzzle,
            "escappClientSettings": {
                "endpoint": `${hostName}/api/escapeRooms/${escapeRoomId}`,
                "resourceId": ("ReusablePuzzlePreview-" + reusablePuzzle.id),
                "linkedPuzzleIds": linkedPuzzles ? (linkedPuzzles.map((p) => p.order+1)) : [],
                "preview": true,
                "user": {
                    "email": req.session.user.username,
                    token
                },
                "I18n": {"locale": localeForReusablePuzzle}
            }
        };

        res.render("reusablePuzzles/reusablePuzzleContainer", {"file": filePath, basePath, hostName, config, "layout": false});
    } catch (err) {
        console.error(err);
        res.status(404).send("Error loading reusable puzzle on preview.");
    }
};