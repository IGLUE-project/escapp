const {models} = require("../models");

exports.newScene = async (req, res, _) => {
    const escapeRoomId = req.params.escapeRoomId;
    const puzzles = await models.puzzle.findAll({where: {escapeRoomId}});
    const nPuzzles = puzzles.length;
    const user = req.session.user;
    const lang =  res.locals.i18n_lang;

    res.render("scenes/new", {escapeRoomId, nPuzzles, user, lang});
}

exports.editor = async (req, res, _) => {
    res.render("scenes/editor", { layout: false });
}

exports.preview = async (req, res, _) => {
    res.render("scenes/viewer", { layout: false });
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
        //TO DO. Send editPath to SM
        return res.status(201);
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: 'An error occurred while creating the scene.'});
    }
};

exports.editScene = async (req, res, _) => {
    const escapeRoomId = req.params.escapeRoomId;
    const sceneId = req.params.id;
    const puzzles = await models.puzzle.findAll({where: {escapeRoomId}});
    //const reusablePuzzlesInstances = await models.reusablePuzzleInstance.findAll({where: {escapeRoomId}});

    try{
        let scene = await getSceneByID(sceneId);
        scene = scene ? scene : {}
        console.log(reusablePuzzlesInstances)
        res.render("scenes/editor", {scene, puzzles, reusablePuzzlesInstances, escapeRoomId});
    }catch(error){
        console.error(error);
        return res.status(500).json({error: 'An error occurred while fetching the scene.'});
    }
}

exports.visualizeScene = async (req, res, _) => {
    const sceneId = req.params.id;
    try{
        const scene = await getSceneByID(sceneId);
        res.sendJSON(scene);
    }catch(error){
        console.error(error);
        return res.status(500).json({error: 'An error occurred while fetching the scene.'});
    }
}



const getSceneByID = async (sceneId) => {
    return await models.scene.findByPk(sceneId, {
        include: [
            {model: models.puzzle},
            {model: models.reusablePuzzleInstance}
        ]
    });
}