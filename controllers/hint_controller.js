const Sequelize = require("sequelize");
const sequelize = require("../models");
const {models} = sequelize;
const http = require("https");
const uploadsHelper = require("../helpers/uploads");
const fs = require("fs/promises");
const fsSync = require("fs");
const path = require("path");
const {nextStep, prevStep} = require("../helpers/progress");
const {validationError} = require("../helpers/utils");

// Autoload the hint with id equals to :hintId
exports.load = (req, res, next, hintId) => {
    models.hint.findByPk(hintId).
        then((hint) => {
            if (hint) {
                req.hint = hint;
                next();
            } else {
                next(new Error(404));
            }
        }).
        catch((error) => next(error));
};

// GET /escapeRooms/:escapeRoomId/hints/hintapp
exports.hintApp = async (req, res, next) => {
    try {
        req.escapeRoom.hintApp = await models.hintApp.findOne({"where": {"escapeRoomId": req.escapeRoom.id}});
        res.render("escapeRooms/hintApp/hintApp", {"layout": false, "escapeRoom": req.escapeRoom });
    } catch (e) {
        next(e);
    }
};

// GET /escapeRooms/:escapeRoomId/hints/hintappwrapper
exports.hintAppWrapper = async (req, res, next) => {
    try {
        req.escapeRoom.hintApp = await models.hintApp.findOne({"where": {"escapeRoomId": req.escapeRoom.id}});
        res.render("escapeRooms/hintApp/hintAppScormWrapper", {"layout": false, "escapeRoom": req.escapeRoom});
    } catch (e) {
        next(e);
    }
};

// GET /escapeRooms/:escapeRoomId/quizFile
exports.downloadQuiz = async (req, res) => {
    try {
        const hintApp = await models.hintApp.findOne({"where": {"escapeRoomId": req.escapeRoom.id}});
        const fileUrl = hintApp.url;

        if (fileUrl) {
            const isAbsolute = (/^https?:\/\//i).test(fileUrl);

            if (!isAbsolute) {
                const filePath = path.join(__dirname, "..", fileUrl);

                res.setHeader("Content-Disposition", `attachment; filename="${hintApp.filename}"`);
                res.sendFile(filePath);
            } else {
                http.get(fileUrl, (resp) => {
                    res.setHeader("content-disposition", `attachment; filename="${hintApp.filename}"`);
                    resp.pipe(res);
                });
            }
        }
    } catch (e) {
        console.error(e);
        res.status(404).end();
    }
};

// GET /escapeRooms/:escapeRoomId/hints
exports.hints = async (req, res, next) => {
    try {
        const {escapeRoom} = req;

        req.escapeRoom.hintApp = await models.hintApp.findOne({"where": {"escapeRoomId": req.escapeRoom.id}});
        res.render("escapeRooms/steps/hints", { escapeRoom, "progress": "hints" });
    } catch (e) {
        next(e);
    }
};

// POST /escapeRooms/:escapeRoomId/hints
exports.updateHints = async (req, res) => {
    const {escapeRoom, body} = req;
    const isPrevious = Boolean(body.previous);
    const progressBar = body.progress;
    const {i18n} = res.locals;
    const {numQuestions, numRight, feedback, hintLimit, allowCustomHints, hintInterval, automatedHints} = body;
    let pctgRight = numRight || 0;

    pctgRight = (numRight >= 0 && numRight <= numQuestions ? numRight : numQuestions) * 100 / (numQuestions || 1);
    pctgRight = Math.floor(pctgRight);
    escapeRoom.hintLimit = !hintLimit && hintLimit != 0 || hintLimit === "" ? null : parseInt(hintLimit, 10);
    escapeRoom.numQuestions = numQuestions || 0;
    escapeRoom.numRight = pctgRight || 0;
    escapeRoom.feedback = Boolean(feedback);
    escapeRoom.automatedHints = automatedHints;
    escapeRoom.hintInterval = hintInterval || null;
    escapeRoom.allowCustomHints = Boolean(allowCustomHints);
    const back = `/escapeRooms/${escapeRoom.id}/${isPrevious ? prevStep("hints") : progressBar || nextStep("hints")}`;

    try {
        await escapeRoom.save({"fields": ["numQuestions", "hintLimit", "numRight", "feedback", "allowCustomHints", "hintInterval", "automatedHints"]});
        if (body.keepAttachment === "0") {
            // Delete/change old attachment.
            escapeRoom.hintApp = await models.hintApp.findOne({"where": {"escapeRoomId": req.escapeRoom.id}});
            if (!req.file) {
                // Delete old attachment
                if (escapeRoom.hintApp) {
                    await uploadsHelper.deleteResource(escapeRoom.hintApp.public_id, models.hintApp, "hints");
                    await escapeRoom.hintApp.destroy();
                }
            } else {
                try {
                    const quizFilePath = `/${req.file.path}`;
                    const quizFilePathFull = path.join(__dirname, "..", quizFilePath);
                    const quizFileType = await uploadsHelper.getDataForFile(quizFilePathFull);

                    if (quizFileType.mimetype !== "application/xml") {
                        throw new Error("Quiz file must be a valid Moodle XML file.");
                    }

                    const oldFileId = escapeRoom.hintApp ? escapeRoom.hintApp.public_id : null;
                    let hintApp = await escapeRoom.getHintApp();

                    if (!hintApp) {
                        hintApp = models.hintApp.build({"escapeRoomId": escapeRoom.id});
                    }
                    hintApp.public_id = req.file.filename;
                    hintApp.url = path.join("/uploads/hints/", hintApp.public_id);
                    hintApp.filename = req.file.originalname;
                    hintApp.mime = req.file.mimetype;
                    await hintApp.save();
                    if (oldFileId) {
                        await uploadsHelper.deleteResource(oldFileId, models.hintApp, "hints");
                    }
                } catch (e) {
                    if (req.file) {
                        fsSync.unlinkSync(req.file.path);
                    }
                    console.error(e.message);
                    req.flash("error", i18n.common.flash.errorFile);
                }
            }
        }
        res.redirect(back);
    } catch (error) {
        console.error(error);
        if (error instanceof Sequelize.ValidationError) {
            error.errors.forEach((err) => {
                req.flash("error", validationError(err, i18n));
            });
        } else {
            req.flash("error", i18n.common.flash.errorEditingER);
        }
        res.render("escapeRooms/steps/hints", { escapeRoom, "progress": "hints" });
    }
};
