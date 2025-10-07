const {models} = require("../models");

exports.upsertScene = async (req, res, _) => {
    const {id,name} = req.body;
    let {puzzles, reusablePuzzlesInstances} = req.body;
    const escapeRoomId = req.params.escapeRoomId;
    const config = JSON.stringify(req.body.config || {});

    if(!name || !escapeRoomId){
        return res.status(400).json({error: 'Missing required fields: name and escapeRoomId are required.'});
    }

    if(!Array.isArray(puzzles) && puzzles){
        puzzles = [puzzles]
    }else if(!puzzles){
        puzzles = []
    }

    if(!Array.isArray(reusablePuzzlesInstances) && reusablePuzzlesInstances){
        reusablePuzzlesInstances = [reusablePuzzlesInstances]
    }else{
        reusablePuzzlesInstances = []
    }

    let scene;

    try {
        if(!id){
             scene = await models.scene.create({ name, config, escapeRoomId, });
        } else {
            scene = await models.scene.update({ name, config, escapeRoomId}, { where: {id} });
        }

        console.log(puzzles, reusablePuzzlesInstances);
        const associatedPuzzles = await models.puzzle.findAll({
            where: {id: puzzles}
        });

        const associatedReusablePuzzlesInstances = await models.reusablePuzzleInstance.findAll({
            where: {id: reusablePuzzlesInstances}
        });

        let puzzlesPromises = [];
        let instancesPromises = [];
        console.log(associatedPuzzles, associatedReusablePuzzlesInstances);

        associatedPuzzles.forEach(puzzle => {
            puzzlesPromises.push(puzzle.setScene(scene));
        })

        associatedReusablePuzzlesInstances.forEach(instance => {
            instancesPromises.push(instance.setScene(scene));
        })

        await Promise.all([...puzzlesPromises, ...instancesPromises]);

        const returnScene = await getSceneByID(id || scene.id);


        return res.status(201).json(returnScene);
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: 'An error occurred while upserting the scene.'});
    }
};


const getSceneByID = async (sceneId) => {
    return await models.scene.findByPk(sceneId, {
        include: [
            {model: models.puzzle},
            {model: models.reusablePuzzleInstance}
        ]
    });
}

exports.editScene = async (req, res, _) => {
    const escapeRoomId = req.params.escapeRoomId;
    const sceneId = req.params.id;
    const puzzles = await models.puzzle.findAll({where: {escapeRoomId}});
    const reusablePuzzlesInstances = await models.reusablePuzzleInstance.findAll({where: {escapeRoomId}});

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
