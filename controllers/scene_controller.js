const {models} = require("../models");

exports.show = async (req, res, _) => {
    const escapeRoomId = req.params.escapeRoomId;
    if (!escapeRoomId) {
        return res.status(400).send("Escape room ID must be specified.");
    }
    const sceneId = req.params.sceneId;
    if (!sceneId) {
        return res.status(400).send("Scene ID must be specified.");
    }

    let scene;
    try{
        scene = await models.scene.findByPk(sceneId);
        if (!scene) {
            return res.status(404).send("Scene not found.");
        }
    }catch(error){
        console.error(error);
        return res.status(500).send('An error occurred while fetching the scene.');
    }

    const sceneJSON = scene.content;
    const user = req.session.user;
    const lang =  res.locals.i18n_lang;

    res.render("scenes/show", {sceneId, sceneJSON, escapeRoomId, nPuzzles: undefined, user, lang});
}

exports.newScene = async (req, res, _) => {
    const escapeRoomId = req.params.escapeRoomId;
    if (!escapeRoomId) {
        return res.status(400).send("Escape room ID must be specified ");
    }

    const puzzles = await models.puzzle.findAll({where: {escapeRoomId}});
    const nPuzzles = puzzles.length;
    const user = req.session.user;
    const lang =  res.locals.i18n_lang;

    res.render("scenes/edit", {sceneId: undefined, sceneJSON: undefined, escapeRoomId, nPuzzles, user, lang});
}

exports.editScene = async (req, res, _) => {
    const escapeRoomId = req.params.escapeRoomId;
    if (!escapeRoomId) {
        return res.status(400).send("Escape room ID must be specified ");
    }
    const sceneId = req.params.sceneId;
    if (!sceneId) {
        return res.status(400).send("Scene ID must be specified ");
    }

    let scene;
    try{
        scene = await models.scene.findByPk(sceneId);
        if (!scene) {
            return res.status(404).send("Scene not found.");
        }
    }catch(error){
        console.error(error);
        return res.status(500).send('An error occurred while fetching the scene.');
    }

    const sceneJSON = scene.content;
    const puzzles = await models.puzzle.findAll({where: {escapeRoomId}});
    const nPuzzles = puzzles.length;
    const user = req.session.user;
    const lang =  res.locals.i18n_lang;

    res.render("scenes/edit", {sceneId, sceneJSON, escapeRoomId, nPuzzles, user, lang});
}

exports.viewer = async (req, res, _) => {
    res.render("scenes/viewer", { layout: false });
}

exports.preview = async (req, res, _) => {
    res.render("scenes/viewer", { layout: false });
}

exports.editor = async (req, res, _) => {
    res.render("scenes/editor", { layout: false });
}

exports.createScene = async (req, res, _) => {
    const escapeRoomId = req.params.escapeRoomId;
    let sceneJSON;
    try {
        sceneJSON = JSON.parse(req.body.scene.json);
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: 'Invalid scene JSON.'});
    }

    try {
        let scene = await models.scene.create({
            escapeRoomId,
            content: sceneJSON
        });
        const uploadPath = `/escapeRooms/${escapeRoomId}/scenes/${scene.id}/edit`;
        return res.status(201).json({
            "uploadPath": uploadPath
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: 'An error occurred while creating the scene.'});
    }
};

exports.updateScene = async (req, res, _) => {
    const escapeRoomId = req.params.escapeRoomId;
    const sceneId = req.params.sceneId;

    let sceneJSON;
    try {
        sceneJSON = JSON.parse(req.body.scene.json);
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: 'Invalid scene JSON.'});
    }

    let scene;
    try{
        scene = await models.scene.findByPk(sceneId);
        if (!scene) {
            return res.status(404).json({ error: "Scene not found." });
        }
        await scene.update({
            content: sceneJSON
        });
        return res.status(200).json({ message: "Scene updated succesfully." });
    }catch(error){
        console.error(error);
        return res.status(500).json({error: 'An error occurred while fetching the scene.'});
    }
}