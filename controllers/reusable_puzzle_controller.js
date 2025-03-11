const {models} = require("../models");

exports.getReusablePuzzles = async (req, res, next) => {
    try {
        const reusablePuzzles = await models.reusablePuzzle.findAll();
        res.render("reusablePuzzles/index", reusablePuzzles);
    } catch (e) {
        next(e);
    }
};

exports.getReusablePuzzle = async (req, res, next) => {
    const {reusablePuzzleId} = req.params;
    try {
        const reusablePuzzle = await models.reusablePuzzle.findOne({where: {reusablePuzzleId}});
        res.render("reusablePuzzles/details", reusablePuzzle);
    } catch (e) {
        next(e);
    }
};

exports.getReusablePuzzleInstances = async (req, res, next) => {
    const {escapeRoomId} = req.params;
    try {
        const reusablePuzzleInstances = await models.reusablePuzzleInstance.findAll({where: {escapeRoomId}});
        res.json(reusablePuzzleInstances);
    } catch (e) {
        next(e);
    }
}

exports.deleteReusablePuzzle = async (req, res, next) => {
    const {reusablePuzzleId} = req.params;
    try {
        await models.reusablePuzzle.destroy({where: {reusablePuzzleId}});
        res.status(200);
    } catch (e) {
        next(e);
    }
};

exports.deleteReusablePuzzleInstance = async (req, res, next) => {
    const {reusablePuzzleInstanceId} = req.params;
    try {
        await models.reusablePuzzleInstance.destroy({where: {reusablePuzzleInstanceId}});
        res.status(200);
    } catch (e) {
        next(e);
    }
}


exports.renderPuzzleConfiguration = async (_, res, ) => {
    res.render("reusablePuzzles/reusablePuzzleCreation");
}

exports.renderEditPuzzleConfiguration = async (req, res, next) => {
    const {reusablePuzzleInstanceId} = req.params;

    try {
     console.log(models.reusablePuzzleInstance)
     let config = await models.reusablePuzzleInstance.findOne({where:{id:reusablePuzzleInstanceId}})
     res.render("reusablePuzzles/reusablePuzzleConfiguration", {config});
    } catch (e) {
        next(e);
    }
}
