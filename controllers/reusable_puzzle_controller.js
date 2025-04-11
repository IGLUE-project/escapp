const {models} = require("../models");
const reusablePuzzleInstance = require("../models/reusablePuzzleInstance");

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
        const reusablePuzzle = await models.reusablePuzzle.findOne({"where": {reusablePuzzleId}});

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
