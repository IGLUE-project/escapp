const Sequelize = require("sequelize");
const AdmZip = require("adm-zip");
const sequelize = require("../models");
const {models} = sequelize;
const query = require("../queries");
const uploadsHelper = require("../helpers/uploads");
const {nextStep, prevStep} = require("../helpers/progress");
const {isAuthor, isParticipant, cloneER, getFilePathsForER} = require("../helpers/escapeRooms");
const {saveInterface, getReusablePuzzles, getERPuzzles, paginate, validationError, getERAssets, getERScenes, getReusablePuzzlesInstances, stepsCompleted, getHostname} = require("../helpers/utils");
const {getLocaleForEscapeRoom, getTextsForLocale, isValidLocale} = require("../helpers/I18n");
const fsSync = require("fs");
const fs = require("fs/promises");
const path = require("path");
const archiver = require("archiver");
const { Server } = require("socket.io");

// Autoload the escape room with id equals to :escapeRoomId
exports.load = async (req, res, next, escapeRoomId) => {
    try {
        const escapeRoom = await models.escapeRoom.findByPk(escapeRoomId, query.escapeRoom.load);

        if (escapeRoom && res.locals) {
            req.escapeRoom = escapeRoom;
            const editing = req.session && req.session.user && !req.session.user.isStudent;

            res.locals.i18n_lang = getLocaleForEscapeRoom(req, escapeRoom, editing);
            res.locals.i18n_texts = getTextsForLocale(res.locals.i18n_lang);
            res.locals.i18n = res.locals.i18n_texts;

            next();
        } else {
            res.status(404);
            const {i18n} = res.locals;

            next(new Error(i18n.api.notFound));
        }
    } catch (error) {
        res.status(500);
        next(error);
    }
};

// GET /escapeRooms
exports.index = async (req, res, next) => {
    const user = req.user || req.session.user;
    const {search} = req.query;

    let pagePublic = parseInt(req.query.pagePublic || 1, 10);

    pagePublic = isNaN(pagePublic) || pagePublic < 1 ? 1 : pagePublic;

    let pageCreated = parseInt(req.query.pageCreated || 1, 10);

    pageCreated = isNaN(pageCreated) || pageCreated < 1 ? 1 : pageCreated;

    let pagePending = parseInt(req.query.pagePending || 1, 10);

    pagePending = isNaN(pagePending) || pagePending < 1 ? 1 : pagePending;

    let pageFinished = parseInt(req.query.pageFinished || 1, 10);

    pageFinished = isNaN(pageFinished) || pageFinished < 1 ? 1 : pageFinished;

    const limit = 10;
    let pending = [];
    let created = [];
    let publicERs = [];
    let finished = [];
    let countPending = 0;
    let countPublic = 0;
    let countCreated = 0;
    let countFinished = 0;

    try {
        // Created
        if (!user.isStudent) {
            ({"count": countCreated, "rows": created} = await models.escapeRoom.findAndCountAll(query.escapeRoom.forTeacher(user.id, pageCreated, limit - 1, search)));
        }
        const pagesCreated = Math.ceil(countCreated / limit);

        if (pageCreated > pagesCreated && pagesCreated !== 0) {
            pageCreated = pagesCreated;
        }
        const pageCreatedArray = paginate(pageCreated, pagesCreated, 5);

        // Pending
        ({"count": countPending, "rows": pending} = await models.escapeRoom.findAndCountAll(query.escapeRoom.all(user.id, pagePending, limit, search, false)));
        const pagesPending = Math.ceil(countPending / limit);

        if (pagePending > pagesPending && pagesPending !== 0) {
            pagePending = pagesPending;
        }
        const pagePendingArray = paginate(pagePending, pagesPending, 5);

        // Finished
        ({"count": countFinished, "rows": finished} = await models.escapeRoom.findAndCountAll(query.escapeRoom.all(user.id, pageFinished, limit, search, true)));
        const pagesFinished = Math.ceil(countFinished / limit);

        if (pageFinished > pagesFinished && pagesFinished !== 0) {
            pageFinished = pagesFinished;
        }
        const pageFinishedArray = paginate(pageFinished, pagesFinished, 5);

        // Get ids from created, pending and finished escape rooms
        let shownEscapeRoomIds = [
            ...created.map((o) => o.id),
            ...pending.map((o) => o.id),
            ...finished.map((o) => o.id)
        ];

        shownEscapeRoomIds = [...new Set(shownEscapeRoomIds)];

        // Public
        ({"count": countPublic, "rows": publicERs} = await models.escapeRoom.findAndCountAll(query.escapeRoom.all(undefined, pagePublic, limit, search, null, true, shownEscapeRoomIds)));
        const pagesPublic = Math.ceil(countPublic / limit);

        if (pagePublic > pagesPublic && pagesPublic !== 0) {
            pagePublic = pagesPublic;
        }
        const pagePublicArray = paginate(pagePublic, pagesPublic, 5);

        // Render
        res.render("escapeRooms/index.ejs", {"escapeRooms": {pending, created, "public": publicERs, finished}, user, "count": {countCreated, countPending, countPublic, countFinished}, "page": {pagePublic, pagePending, pageCreated, pageFinished}, "pages": {pagesPublic, pagesPending, pagesCreated, pagesFinished}, "pageArray": {pagePublicArray, pagePendingArray, pageCreatedArray, pageFinishedArray}, search, "admin": false});
    } catch (error) {
        next(error);
    }
};

// GET /escapeRooms/:escapeRoomId
exports.show = async (req, res) => {
    if (req.session.user && isAuthor(req.session.user, req.escapeRoom)) {
        return res.redirect(`/escapeRooms/${req.escapeRoom.id}/edit`);
    }
    const escapeRoom = await models.escapeRoom.findByPk(req.escapeRoom.id, query.escapeRoom.loadShow);
    const isUserParticipant = await isParticipant(req.session.user, escapeRoom);

    return res.render("escapeRooms/show", {"escapeRoom": req.escapeRoom, "user": req.session.user, "isParticipant": isUserParticipant});
};

// GET /escapeRooms/:escapeRoomId/ready
exports.ready = async (req, res) => {
    if (req.participant) {
        const escapeRoom = await models.escapeRoom.findByPk(req.escapeRoom.id, query.escapeRoom.loadShow);
        const [team] = req.participant.teamsAgregados;
        const howManyRetos = await models.retosSuperados.count({"where": {"success": true, "teamId": team.id }});
        const finished = howManyRetos === escapeRoom.puzzles.length;

        return res.render("escapeRooms/ready", {escapeRoom, "participant": req.participant, team, finished, "isAdmin": req.session.user.isAdmin});
    }
    req.flash("error", res.locals.i18n.common.flash.errorReady);
    return res.redirect(`/escapeRooms/${req.escapeRoom.id}`);
};

// GET /escapeRooms/:escapeRoomId/edit
exports.edit = async (req, res) => {
    const escapeRoom = await models.escapeRoom.findByPk(req.escapeRoom.id, query.escapeRoom.loadShow);

    escapeRoom.subject = await models.subject.findAll({"where": {"escapeRoomId": req.escapeRoom.id}});
    const hostName = getHostname(req);
    const completed = stepsCompleted(escapeRoom);

    res.render("escapeRooms/edit", {escapeRoom, completed, hostName, "email": req.session.user.username});
};

// GET /escapeRooms/new
exports.new = (_req, res) => {
    const escapeRoom = {"title": "", "teacher": "", "subject": "", "duration": "", "description": "", "teamSize": "", "minTeamSize": "", "lang": "", "forceLang": ""};

    res.render("escapeRooms/new", {escapeRoom, "progress": "settings"});
};

// POST /escapeRooms/create
exports.create = async (req, res) => {
    const {title, subject, duration, forbiddenLateSubmissions, description, lang, teamSize, minTeamSize, supportLink, forceLang, field, format, level, invitation, progress} = req.body,
        authorId = req.session.user && req.session.user.id || 0;
    const escapeRoom = models.escapeRoom.build({title, duration, "forbiddenLateSubmissions": forbiddenLateSubmissions === "on", invitation, description, supportLink, "scope": "private", "teamSize": teamSize || 0, "minTeamSize": minTeamSize || 0, authorId, forceLang, lang, field, format, level}); // Saves only the fields question and answer into the DDBB
    const {i18n} = res.locals;
    const transaction = await sequelize.transaction();

    escapeRoom.forceLang = isValidLocale(forceLang) ? forceLang : null;
    const subjects = subject.
        split(/[;,]/).
        map((s) => s.trim()).
        filter(Boolean);

    try {
        const er = await escapeRoom.save({"fields": ["title", "teacher", "duration", "description", "forbiddenLateSubmissions", "scope", "teamSize", "minTeamSize", "authorId", "supportLink", "invitation", "lang", "forceLang", "format", "level", "field"], transaction});
        const newSubjects = subjects.map((s) => ({
            "subject": s,
            "escapeRoomId": er.id
        }));

        await models.subject.bulkCreate(newSubjects, {transaction});

        const testShift = await models.turno.create({"place": "test", "status": "test", "escapeRoomId": er.id }, {transaction});
        const teamCreated = await models.team.create({ "name": req.session.user.name, "turnoId": testShift.id}, {transaction});

        await teamCreated.addTeamMembers(req.session.user.id, {transaction});
        await models.participants.create({"attendance": false, "turnId": testShift.id, "userId": req.session.user.id}, {transaction});
        req.flash("success", i18n.common.flash.successCreatingER);

        if (!req.file) {
            await transaction.commit();
            return res.redirect(`/escapeRooms/${escapeRoom.id}/${progress || nextStep("settings")}`);
        }

        try {
            try {
                // Create thumbnail
                let thumbnailFilePath = `/${req.file.path}`;
                let thumbnailFilePathFull = path.join(__dirname, "..", thumbnailFilePath);
                const thumbnailFileType = await uploadsHelper.getDataForFile(thumbnailFilePathFull);

                if (thumbnailFileType.assetType !== "image") {
                    throw new Error("Thumbnail must be an image.");
                }
                let thumbnailFileId = req.file.filename;
                const thumbnailFileName = req.file.originalname;

                const thumbnailFileExtension = path.extname(req.file.filename);

                if (thumbnailFileType.extension !== thumbnailFileExtension) {
                    thumbnailFileId = path.parse(thumbnailFileId).name + thumbnailFileType.extension;
                    const newThumbnailFilePath = `/uploads/thumbnails/${thumbnailFileId}`;
                    const newThumbnailFilePathFull = path.join(__dirname, "..", newThumbnailFilePath);

                    await fs.rename(thumbnailFilePathFull, newThumbnailFilePathFull);
                    thumbnailFilePath = newThumbnailFilePath;
                    thumbnailFilePathFull = newThumbnailFilePathFull;
                }

                await models.attachment.create({
                    "public_id": thumbnailFileId,
                    "url": thumbnailFilePath,
                    "filename": thumbnailFileName,
                    "mime": thumbnailFileType.mimetype,
                    "escapeRoomId": er.id
                });
                await transaction.commit();
            } catch (error) {
                console.error(error);
                await transaction.rollback();
                req.flash("error", i18n.common.flash.errorImage);
                fsSync.unlinkSync(req.file.path);
                res.render("escapeRooms/new", {escapeRoom, "progress": "settings"});
                return;
            }
        } catch (error) {
            console.error(error);
            await transaction.rollback();
            req.flash("error", i18n.common.flash.errorFile);
            res.render("escapeRooms/new", {escapeRoom, "progress": "settings"});
            return;
        }
        res.redirect(`/escapeRooms/${escapeRoom.id}/${progress || nextStep("settings")}`);
    } catch (error) {
        console.error(error);
        await transaction.rollback();
        if (error instanceof Sequelize.ValidationError) {
            console.error(error);
            error.errors.forEach((err) => {
                req.flash("error", validationError(err, i18n));
            });
        } else {
            console.error(error.message);
            req.flash("error", i18n.common.flash.errorCreatingER);
        }
        res.render("escapeRooms/new", {escapeRoom, "progress": "settings"});
    }
};

// GET /escapeRooms/:escapeRoomId/settings
exports.settings = async (req, res, next) => {
    try {
        req.escapeRoom.attachment = await models.attachment.findOne({"where": {"escapeRoomId": req.escapeRoom.id}});
        req.escapeRoom.subject = await models.subject.findAll({"where": {"escapeRoomId": req.escapeRoom.id}});
        res.render("escapeRooms/steps/settings", {"escapeRoom": req.escapeRoom, "progress": "settings"});
    } catch (error) {
        console.error(error);
        next(error);
    }
};

// PUT /escapeRooms/:escapeRoomId
exports.update = async (req, res) => {
    const {escapeRoom, body} = req;
    const {i18n} = res.locals;

    escapeRoom.title = body.title;
    escapeRoom.duration = body.duration;
    escapeRoom.forbiddenLateSubmissions = body.forbiddenLateSubmissions === "on";
    escapeRoom.description = body.description;
    escapeRoom.supportLink = body.supportLink;
    escapeRoom.level = body.level || null;
    escapeRoom.field = body.field || null;
    escapeRoom.format = body.format;
    escapeRoom.lang = body.lang;
    escapeRoom.teamSize = body.teamSize || 0;
    escapeRoom.minTeamSize = body.minTeamSize || 0;
    escapeRoom.forceLang = isValidLocale(body.forceLang) ? body.forceLang : null;

    const progressBar = body.progress;
    const transaction = await sequelize.transaction();
    const subjects = body.subject.
        split(/[;,]/).
        map((s) => s.trim()).
        filter(Boolean);

    try {
        const er = await escapeRoom.save({"fields": ["title", "duration", "forbiddenLateSubmissions", "description", "teamSize", "minTeamSize", "supportLink", "lang", "forceLang", "format", "level", "field"], transaction});

        // Remove all previous subjects for this escape room
        await models.subject.destroy({ "where": { "escapeRoomId": er.id } }, {transaction});

        // Insert the new ones
        const newSubjects = subjects.map((s) => ({
            "subject": s,
            "escapeRoomId": er.id
        }));

        await models.subject.bulkCreate(newSubjects, {transaction});

        if (body.keepAttachment === "0") {
            // There is no attachment: Delete old attachment.
            if (!req.file) {
                if (er.attachment) {
                    await uploadsHelper.deleteResource(er.attachment.public_id, models.attachment, "thumbnails");
                    await er.attachment.destroy();
                }
                await transaction.commit();
                res.redirect(`/escapeRooms/${req.escapeRoom.id}/${progressBar || nextStep("settings")}`);
                return;
            }
            try {
                const oldFileId = er.attachment ? er.attachment.public_id : null;
                let attachment = await er.getAttachment();

                if (!attachment) {
                    attachment = models.attachment.build({"escapeRoomId": er.id});
                }

                let thumbnailFilePath = `/${req.file.path}`;
                let thumbnailFilePathFull = path.join(__dirname, "..", thumbnailFilePath);
                const thumbnailFileType = await uploadsHelper.getDataForFile(thumbnailFilePathFull);

                if (thumbnailFileType.assetType !== "image") {
                    throw new Error("Thumbnail must be an image.");
                }
                let thumbnailFileId = req.file.filename;
                const thumbnailFileName = req.file.originalname;

                const thumbnailFileExtension = path.extname(req.file.filename);

                if (thumbnailFileType.extension !== thumbnailFileExtension) {
                    thumbnailFileId = path.parse(thumbnailFileId).name + thumbnailFileType.extension;
                    const newThumbnailFilePath = `/uploads/thumbnails/${thumbnailFileId}`;
                    const newThumbnailFilePathFull = path.join(__dirname, "..", newThumbnailFilePath);

                    await fs.rename(thumbnailFilePathFull, newThumbnailFilePathFull);
                    thumbnailFilePath = newThumbnailFilePath;
                    thumbnailFilePathFull = newThumbnailFilePathFull;
                }

                attachment.public_id = thumbnailFileId;
                attachment.url = thumbnailFilePath;
                attachment.filename = thumbnailFileName;
                attachment.mime = thumbnailFileType.mimetype;
                await attachment.save();

                if (oldFileId) {
                    await uploadsHelper.deleteResource(oldFileId, models.attachment, "thumbnails");
                }

                await transaction.commit();
                res.redirect(`/escapeRooms/${req.escapeRoom.id}/${progressBar || nextStep("settings")}`);
                return;
            } catch (error) {
                if (req.file) {
                    fsSync.unlinkSync(req.file.path);
                }
                console.error(error);
                req.flash("error", i18n.common.flash.errorFile);
            }
        }
        await transaction.commit();
        res.redirect(`/escapeRooms/${req.escapeRoom.id}/${progressBar || nextStep("settings")}`);
    } catch (error) {
        await transaction.rollback();
        console.error(error);
        console.error(req.body.field);
        if (error instanceof Sequelize.ValidationError) {
            error.errors.forEach((err) => {
                req.flash("error", validationError(err, i18n));
            });
            if (req.file) {
                fsSync.unlinkSync(req.file.path);
            }
        } else {
            req.flash("error", i18n.common.flash.errorEditingER);
        }
        escapeRoom.subject = subjects.map((ss) => ({"subject": ss}));
        res.render("escapeRooms/steps/settings", {escapeRoom, "progress": "settings"});
    }
};

exports.returnThumbnail = async (req, res, next) => {
    try {
        const thumbnail = await models.attachment.findOne({"where": {"escapeRoomId": req.escapeRoom.id}});

        if (thumbnail && thumbnail.public_id) {
            res.sendFile(path.join(__dirname, `../uploads/thumbnails/${thumbnail.public_id}`));
            return;
        } else {
            const alt = req.escapeRoom.getThumbnailUrl();
            if (alt){
                res.sendFile(path.join(__dirname, "..", "public", alt));
                return;
            }
            throw new Error();
        }
    } catch (e) {
        next(e);
    }
};

// GET /escapeRooms/:escapeRoomId/evaluation
exports.evaluation = async (req, res, next) => {
    try {
        const escapeRoom = await models.escapeRoom.findByPk(req.escapeRoom.id, query.escapeRoom.loadPuzzles);

        escapeRoom.hintApp = await models.hintApp.findOne({"where": {"escapeRoomId": req.escapeRoom.id}});
        res.render("escapeRooms/steps/evaluation", {escapeRoom, "progress": "evaluation"});
    } catch (e) {
        next(e);
    }
};

// POST /escapeRooms/:escapeRoomId/evaluation
exports.evaluationUpdate = async (req, res) => {
    const {body} = req;
    const isPrevious = Boolean(body.previous);
    const progressBar = body.progress;
    const {i18n} = res.locals;
    let {escapeRoom} = req;

    try {
        escapeRoom = await models.escapeRoom.findByPk(req.escapeRoom.id, query.escapeRoom.loadPuzzles);

        escapeRoom.survey = body.survey;
        escapeRoom.pretest = body.pretest;
        escapeRoom.posttest = body.posttest;
        escapeRoom.scoreParticipation = body.scoreParticipation;
        escapeRoom.hintSuccess = body.hintSuccess;
        escapeRoom.hintFailed = body.hintFailed;
        escapeRoom.automaticAttendance = body.automaticAttendance;
        escapeRoom.allowUserToResetTeamProgress = body.allowUserToResetTeamProgress === "true";
        await escapeRoom.save({"fields": ["survey", "pretest", "posttest", "scoreParticipation", "hintSuccess", "hintFailed", "automaticAttendance", "allowUserToResetTeamProgress"]});
        if (body.scores && body.scores.length !== escapeRoom.puzzles.length) {
            throw new Error("");
        }
        const promises = [];

        for (const p in body.scores || []) {
            if (parseFloat(escapeRoom.puzzles[p].score || 0) !== parseFloat(body.scores[p] || 0)) {
                escapeRoom.puzzles[p].score = body.scores[p];
                promises.push(escapeRoom.puzzles[p].save({"fields": ["score"]}));
            }
        }
        await Promise.all(promises);
        res.redirect(`/escapeRooms/${escapeRoom.id}/${isPrevious ? prevStep("evaluation") : progressBar || nextStep("evaluation")}`);
    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            error.errors.forEach((err) => {
                req.flash("error", validationError(err, i18n));
            });
        } else {
            req.flash("error", i18n.common.flash.errorEditingER);
        }
        res.render("escapeRooms/steps/evaluation", {escapeRoom, "progress": "evaluation"});
    }
};

// GET /escapeRooms/:escapeRoomId/sharing
exports.sharing = async (req, res, next) => {
    try {
        const escapeRoom = await models.escapeRoom.findByPk(req.escapeRoom.id, query.escapeRoom.loadShow);
        const completed = stepsCompleted(escapeRoom);

        res.render("escapeRooms/steps/sharing", {escapeRoom, "progress": "sharing", completed});
    } catch (e) {
        next(e);
    }
};

// POST /escapeRooms/:escapeRoomId/sharing
exports.sharingUpdate = async (req, res) => {
    const {body} = req;
    const isPrevious = Boolean(body.previous);
    const progressBar = body.progress;
    const {i18n} = res.locals;
    const {escapeRoom} = req;
    const transaction = await sequelize.transaction();

    try {
        escapeRoom.scope = body.scope;
        if (escapeRoom.scope === "private") { // Only private rooms  can have a password
            escapeRoom.invitation = body.invitation !== undefined ? body.invitation.toString() : undefined;
        } else {
            escapeRoom.invitation = null;
        }
        if (!escapeRoom.publishedOnce) { // Cannot change the license of a published room
            escapeRoom.license = body.license;
            if ((escapeRoom.status === "draft" || !escapeRoom.status) && body.status === "completed") {
                escapeRoom.publishedOnce = true;
            }
        }
        if (typeof body.status !== "undefined") {
            escapeRoom.status = body.status;
        }
        escapeRoom.allowGuests = body.allowGuests === "on";

        const instructionsFile = req.file;

        if (instructionsFile && instructionsFile.filename) {
            try {
                fsSync.unlinkSync(path.join(__dirname, "/../uploads/instructions/", escapeRoom.instructions));
            } catch (e) {
                console.error("Error deleting old instructions file:", e);
            }
            escapeRoom.instructions = instructionsFile.filename;
        } else if (body.keepInstructions === "0" && escapeRoom.instructions) {
            try {
                fsSync.unlinkSync(path.join(__dirname, "/../uploads/instructions/", escapeRoom.instructions));
            } catch (e) {
                console.error("Error deleting old instructions file:", e);
            }
            escapeRoom.instructions = null;
        }

        await escapeRoom.save({"fields": ["invitation", "scope", "license", "instructions", "status", "publishedOnce", "allowGuests", "verified", "isLastVersionVerified", "isAccessibleToAllUsers", "isPubliclyAccessible", "isNetworkAccessible"], transaction});
        await transaction.commit();
        res.redirect(`/escapeRooms/${escapeRoom.id}/${isPrevious ? prevStep("sharing") : progressBar || nextStep("sharing")}`);
    } catch (error) {
        await transaction.rollback();
        console.error(error);
        if (req.file) {
            fsSync.unlinkSync(req.file.path);
        }
        if (error instanceof Sequelize.ValidationError) {
            error.errors.forEach((err) => {
                req.flash("error", validationError(err, i18n));
            });
        } else {
            req.flash("error", i18n.common.flash.errorEditingER);
        }
        const escapeRoom2 = await models.escapeRoom.findByPk(req.escapeRoom.id, query.escapeRoom.loadShow);

        const completed = stepsCompleted(escapeRoom2);

        res.render("escapeRooms/steps/sharing", {escapeRoom, completed, "progress": "sharing"});
    }
};

// GET /escapeRooms/:escapeRoomId/team
exports.teamInterface = async (req, res, next) => {
    try {
        const {escapeRoom} = req;

        escapeRoom.puzzles = await getERPuzzles(escapeRoom.id);
        escapeRoom.puzzles = escapeRoom.puzzles.map((puzzle) => ({
            "id": puzzle.id,
            "validator": puzzle.validator,
            "sol": puzzle.sol,
            "title": puzzle.title,
            "reusablePuzzleInstances": puzzle.reusablePuzzleInstances.map((p) => p.id)
        }));

        const assets = await getERAssets(escapeRoom.id);
        const scenes = await getERScenes(escapeRoom.id);

        const availableReusablePuzzles = await getReusablePuzzles();
        let reusablePuzzlesInstances = await getReusablePuzzlesInstances(escapeRoom.id);

        reusablePuzzlesInstances = reusablePuzzlesInstances.map((puzzleInstance) => ({
            "id": puzzleInstance.id,
            "name": puzzleInstance.name,
            "updatedAt": puzzleInstance.updatedAt,
            "reusablePuzzleId": puzzleInstance.reusablePuzzleId,
            "config": puzzleInstance.config,
            "puzzles": puzzleInstance.puzzles.map((p) => p.id)
        }));

        res.render("escapeRooms/steps/instructions", {escapeRoom, "progress": "team", "endPoint": "team", assets, scenes, reusablePuzzlesInstances, availableReusablePuzzles});
    } catch (e) {
        req.flash("error", res.locals.i18n.common.flash.errorEditingER);
        next(e);
    }
};

// GET /escapeRooms/:escapeRoomId/class
exports.classInterface = async (req, res) => {
    const {escapeRoom} = req;
    const assets = await getERAssets(escapeRoom.id);

    res.render("escapeRooms/steps/instructions", {escapeRoom, "progress": "class", "endPoint": "class", assets, "availableReusablePuzzles": [], "reusablePuzzlesInstances": []});
};

// GET /escapeRooms/:escapeRoomId/indications
exports.indicationsInterface = async (req, res) => {
    const {escapeRoom} = req;
    const assets = await getERAssets(escapeRoom.id);

    res.render("escapeRooms/steps/instructions", {escapeRoom, "progress": "indications", "endPoint": "indications", assets, "availableReusablePuzzles": [], "reusablePuzzlesInstances": []});
};

// GET /escapeRooms/:escapeRoomId/after
exports.afterInterface = async (req, res) => {
    const {escapeRoom} = req;
    const assets = await getERAssets(escapeRoom.id);

    res.render("escapeRooms/steps/instructions", {escapeRoom, "progress": "after", "endPoint": "after", assets, "availableReusablePuzzles": [], "reusablePuzzlesInstances": []});
};


// POST /escapeRooms/:escapeRoomId/after
exports.afterInterfaceUpdate = (req, res, next) => saveInterface("after", req, res, next);

// POST /escapeRooms/:escapeRoomId/indications
exports.indicationsInterfaceUpdate = (req, res, next) => saveInterface("indications", req, res, next);

// POST /escapeRooms/:escapeRoomId/team
exports.teamInterfaceUpdate = (req, res, next) => saveInterface("team", req, res, next);

// POST /escapeRooms/:escapeRoomId/class
exports.classInterfaceUpdate = (req, res, next) => saveInterface("class", req, res, next);

// DELETE /escapeRooms/:escapeRoomId
exports.destroy = async (req, res, next) => {
    const transaction = await sequelize.transaction();
    const {i18n} = res.locals;

    try {
        await req.escapeRoom.destroy({}, {transaction});
        if (req.escapeRoom.attachment && await models.attachment.count({"where": {"url": req.escapeRoom.attachment.url}}) === 0) {
            try {
                fsSync.unlinkSync(path.join(__dirname, "/../", req.escapeRoom.attachment.url));
            } catch (e) {
                console.error("Error deleting attachment file:", e);
            }
        }
        await transaction.commit();
        req.flash("success", i18n.common.flash.successDeletingER);
        res.redirect("/escapeRooms");
    } catch (error) {
        await transaction.rollback();
        req.flash("error", `${i18n.common.flash.errorDeletingER}: ${error.message}`);
        next(error);
    }
};

exports.clone = async (req, res, next) => {
    const transaction = await sequelize.transaction();

    try {
        const escapeRoom = await models.escapeRoom.findByPk(req.escapeRoom.id, query.escapeRoom.loadComplete);
        const authorId = req.session && req.session.user && req.session.user.id || 0;
        const newTitle = `${res.locals.i18n.escapeRoom.main.copyOf} ${escapeRoom.title}`;
        const currentUser = req.session.user;
        const saved = await cloneER(escapeRoom, authorId, newTitle, currentUser, undefined, undefined, undefined, transaction);

        res.redirect(`/escapeRooms/${saved.id}/edit`);
    } catch (err) {
        await transaction.rollback();
        next(err);
    }
};

// GET /escapeRoomsAdmin

exports.admin = async (req, res, next) => {
    const {search} = req.query;
    const user = req.user || req.session.user;
    let page = parseInt(req.query.page || 1, 10);

    page = isNaN(page) || page < 1 ? 1 : page;
    const limit = 10;
    let escapeRooms = [];
    let count = 0;

    try {
        if (user && user.isAdmin) {
            ({count, "rows": escapeRooms} = await models.escapeRoom.findAndCountAll(query.escapeRoom.forAll(page, limit, search)));
        }
        const pages = Math.ceil(count / limit);

        if (page > pages && pages !== 0) {
            res.redirect(`/escapeRoomsAdmin?page=${pages}`);
        } else {
            const pageArray = paginate(page, pages, 5);

            res.render("escapeRooms/index.ejs", {escapeRooms, user, page, pages, pageArray, "isPublic": false, "isOwn": false, "whichMenu": "public", "admin": true, search});
        }
    } catch (error) {
        next(error);
    }
};

// GET /escapeRooms/:escapeRoomId/collaborators
exports.showCollaborators = async (req, res) => {
    const {escapeRoom} = req;

    const collaborators = await escapeRoom.getUserCoAuthor();

    res.render("escapeRooms/collaborators", {escapeRoom, collaborators});
};


// POST /escapeRooms/:escapeRoomId/collaborators
exports.addCollaborators = async (req, res, next) => {
    const {escapeRoom, body} = req;
    const {collaborator} = body;
    const transaction = await sequelize.transaction();
    const {i18n} = res.locals;

    try {
        if (collaborator) {
            const collab = await models.user.findOne({
                "where": {"username": collaborator},
                "include": {
                    "model": models.escapeRoom,
                    "as": "escapeRoomCoAuthored"
                }
            }, {transaction});

            if (collab) {
                if (collab.escapeRoomCoAuthored.some((x) => x.id === escapeRoom.id)) {
                    await transaction.rollback();
                    req.flash("error", i18n.common.flash.errorUserIsAlreadyACollaborator);
                    res.redirect(`/escapeRooms/${escapeRoom.id}/collaborators`);
                } else if (!collab.isStudent) {
                    await escapeRoom.addUserCoAuthor(collab.id, {transaction});
                    await transaction.commit();
                    req.flash("success", i18n.common.flash.successAddingCollaborator);
                    res.redirect(`/escapeRooms/${escapeRoom.id}/collaborators`);
                } else {
                    await transaction.rollback();
                    req.flash("error", i18n.common.flash.errorUserIsNotTeacher);
                    res.redirect(`/escapeRooms/${escapeRoom.id}/collaborators`);
                }
            } else {
                await transaction.rollback();
                req.flash("error", i18n.common.flash.errorUserNotExists);
                res.redirect(`/escapeRooms/${escapeRoom.id}/collaborators`);
            }
        }
    } catch (error) {
        await transaction.rollback();
        req.flash("error", `${error.message}`);
        next(error);
    }
};

exports.confirmCollaborators = async (req, res, next) => {
    const {escapeRoom, body, session} = req;
    const {i18n} = res.locals;
    const transaction = await sequelize.transaction();

    try {
        const findCollab = await models.coAuthors.findOne(
            {"escapeRoomId": escapeRoom.id, "userId": req.session.user.id},
            {transaction}
        );

        if (!findCollab) {
            throw new Error(i18n.common.flash.youHaveNotBeenAddedAsACollaborator);
        }
        if (!body.confirm) { // Cancel collaboration
            await escapeRoom.removeUserCoAuthor(req.session.user.id, {transaction});
            await transaction.commit();
            req.flash("success", i18n.common.flash.successCancellingCollaborator);
            res.redirect(`/escapeRooms`);
        } else { // Accept collaboration
            await models.coAuthors.update(
                { "confirmed": true },
                {
                    "where": {
                        "escapeRoomId": escapeRoom.id,
                        "userId": req.session.user.id
                    },
                    transaction
                }
            );
            const user = await models.user.findByPk(session.user.id, {transaction});
            const [testShift] = await escapeRoom.getTurnos({"where": {"status": "test"}}, {transaction});
            const teamCreated = await models.team.create({ "name": `${user.alias}`, "turnoId": testShift.id}, {transaction});

            await teamCreated.addTeamMembers(user.id, {transaction});
            await models.participants.create({"attendance": false, "turnId": testShift.id, "userId": req.session.user.id}, {transaction});
            await transaction.commit();
            req.flash("success", i18n.common.flash.successConfirmingCollaborator);
            res.redirect(`/escapeRooms/${escapeRoom.id}/edit`);
        }

        
    } catch (error) {
        await transaction.rollback();
        console.error(error);
        req.flash("error", `${error.message}`);
        next(error);
    }
};
// DELETE /escapeRooms/:escapeRoomId/collaborators
exports.deleteCollaborators = async (req, res, next) => {
    const {escapeRoom, body} = req;
    const {collaborator} = body;
    const transaction = await sequelize.transaction();

    if (collaborator) {
        try {
            const collab = await models.user.findByPk(collaborator, {transaction});

            await escapeRoom.removeUserCoAuthor(collaborator);
            const [testShift] = await escapeRoom.getTurnos({"where": {"status": "test"}}, {transaction});

            const teamCreated = await models.team.findOne({
                "where": { "name": collab.alias, "turnoId": testShift.id },
                transaction
            });

            if (teamCreated) {
                // Remove member via association helper, within transaction
                await teamCreated.removeTeamMembers(collab.id, { transaction });
                await teamCreated.destroy({ transaction });
            }

            await models.participants.destroy({
                "where": { "attendance": false, "turnId": testShift.id, "userId": collab.id },
                transaction
            });

            await transaction.commit();
            if (collab.id === req.session.user.id) {
                res.redirect(`/escapeRooms/${escapeRoom.id}`);
            } else {
                res.redirect(`/escapeRooms/${escapeRoom.id}/collaborators`);                
            }
        } catch (error) {
            await transaction.rollback();
            req.flash("error", `${error.message}`);
            next(error);
        }
    }
};

exports.isStatusCompleted = (req, res, next) => {
    if (req.escapeRoom.status === "completed") {
        next();
    } else {
        res.status(404);
        next(new Error(404));
    }
};
exports.test = async (req, res) => {
    const escapeRoom = await models.escapeRoom.findByPk(req.escapeRoom.id, query.escapeRoom.loadShow);
    const participants = await models.user.findAll(query.user.escapeRoomsForUser(req.escapeRoom.id, req.session.user.id, true));
    const participant = participants && participants.length ? participants[0] : null;
    const isAdmin = req.session.user && req.session.user.isAdmin;

    if (participant) {
        const [team] = participant.teamsAgregados;
        const howManyRetos = await models.retosSuperados.count({"where": {"success": true, "teamId": team.id }});
        const finished = howManyRetos === escapeRoom.puzzles.length;

        res.render("escapeRooms/ready", {escapeRoom, participant, team, finished, isAdmin});
    } else if (isAdmin) {
        res.render("escapeRooms/ready", {escapeRoom, "participant": {}, "team": {"turno": {"status": "test"}, "teamMembers": []}, "finished": false, isAdmin});
    } else {
        res.redirect(`/escapeRooms/${req.escapeRoom.id}`);
    }
};


exports.showGuide = (_, res) => res.render("inspiration/inspiration");

exports.showManual = (_, res) => res.render("inspiration/manual");

exports.showGuides = (_, res) => res.render("inspiration/guides");

exports.verify = async (req, res, next) => {
    try {
        if (req.body.unverify === "stop") {
            req.escapeRoom.verified = false;
            req.escapeRoom.isLastVersionVerified = false;
            req.escapeRoom.verified_at = null;
        } else {
            req.escapeRoom.verified = true;
            req.escapeRoom.isLastVersionVerified = true;
            req.escapeRoom.verified_at = new Date();
        }
        await req.escapeRoom.save({"fields": ["verified", "verified_at", "isLastVersionVerified", "isNetworkAccessible"] });
        res.redirect(`/escapeRooms/${req.escapeRoom.id}/edit`);
    } catch (error) {
        console.error(error);
        next(error);
    }
};

exports.export = async (req, res, next) => {
    try {
        const escapeRoom = await models.escapeRoom.findByPk(
            req.escapeRoom.id,
            query.escapeRoom.loadExport
        );

        if (!escapeRoom) {
            return res.status(404).json({ "error": "Escape room not found" });
        }

        const toExport = escapeRoom.toJSON ? escapeRoom.toJSON() : escapeRoom.dataValues;
        const all = getFilePathsForER(toExport);
        toExport.server =  getHostname(req);

        const zipName = `escape-room-${escapeRoom.id}.zip`;

        res.setHeader("Content-Type", "application/zip");
        res.setHeader("Content-Disposition", `attachment; filename="${zipName}"`);

        const archive = archiver("zip", { "zlib": { "level": 9 } });

        archive.on("error", (err) => {
            throw err;
        });
        archive.pipe(res);

        for (const item of all) {
            const folderName = item.field; // E.g. "assets"
            const idFolder = item.pathStr.id && String(item.pathStr.id); // E.g. "670"

            // ContentPath is relative to project root, possibly starting with "/"
            let filePathOriginal = item.pathStr.contentPath || `/uploads/${item.pathStr.public_id}`;

            if (item.pathStr && item.pathStr.assetType === "webapp") {
                filePathOriginal = item.pathStr.contentPath.replace("/index.html","");
            }
            const relativeFromRoot = filePathOriginal.replace(/^[/\\]+/, "");
            const filePath = path.join(process.cwd(), relativeFromRoot);
            const originalName = item.pathStr.fileId || item.pathStr.filename || path.basename(filePath);
            if (fsSync.existsSync(filePath)) {
                const stats = fsSync.statSync(filePath);

                if (stats.isDirectory()) {
                    const targetPath = idFolder
                        ? `${folderName}/${idFolder}`
                        : `${folderName}`;

                    archive.directory(filePath, targetPath);

                } else if (stats.isFile()) {
                    const targetPath = idFolder
                        ? `${folderName}/${idFolder}/${originalName}`
                        : `${folderName}/${originalName}`;

                    archive.file(filePath, {
                        name: targetPath
                    });
                } else {
                    console.warn("Path exists but is neither file nor directory, skipping:", filePath);
                }
            } else {
                console.warn("File not found, skipping:", filePath);
            }

        }

        archive.append(JSON.stringify(toExport, null, 2), { "name": "escape-room.json" });
        await archive.finalize();
    } catch (err) {
        console.error(err);
        next(err);
    }
};

exports.importView = async (_, res) => {
    res.render("escapeRooms/import");
}

const getReplacements = function(all) {
    const currentDate = Date.now();

    const mapping = { };
    for (let item of all) {
        const {old} = item;
        let newName = Date.now() + "_" + ((old.length > 200) ? old.slice(60) : old);

        if(mapping[item.field]) {
            mapping[item.field][old] =  newName
        } else {
            mapping[item.field] = {[old]:  newName}
        }
    }
    return mapping;
}

exports.import = async (req, res, next) => {
  const transaction = await sequelize.transaction();
  try {
    const zip = new AdmZip(req.tmpPath || req.file.path);

    // Try to get escapeRoom.json from the root
    const entry = zip.getEntry("escape-room.json");

    if (!entry || entry.isDirectory) {
      return res.status(400).send("escape-room.json not found at ZIP root");
    }

    const rawJson = entry.getData().toString("utf8");

    const escapeRoom = JSON.parse(rawJson);
    const all = getFilePathsForER(escapeRoom);
    const replacements = getReplacements(all); 
    for (const fi in all) {
        const item = all[fi];
        const folderName = item.field; // E.g. "assets"
        const idFolder = item.pathStr.id && String(item.pathStr.id); // E.g. "670"
        let filePathOriginal = item.pathStr.contentPath || `/uploads/${item.pathStr.public_id}`;
        if (item.pathStr && item.pathStr.assetType === "webapp") {
            filePathOriginal = item.pathStr.contentPath.replace("/index.html", "");
        }
        const relativeFromRoot = filePathOriginal.replace(/^[/\\]+/, "");
        const filePath = path.join(process.cwd(), relativeFromRoot);
        const originalName = item.pathStr.fileId || item.pathStr.filename || path.basename(filePath);
        let replacementName = originalName;
        if (replacements[folderName] && replacements[folderName][originalName]) {
            replacementName = replacements[folderName][originalName];
        }
        const route = idFolder ? `${folderName}/${idFolder}/${originalName}` : `${folderName}/${originalName}`;
        let newRoute = item.pathStr.contentPath;
        if (item.pathStr && item.pathStr.assetType === "webapp") {
            newRoute = item.pathStr.contentPath.replace("/index.html", "");
        }
        newRoute = newRoute.replace(item.old,replacementName);
        const fileZip = zip.getEntry(route)
        const newRouteRelative = newRoute.replace(/^[/\\]+/, "");


        if (fileZip && !fileZip.isDirectory) {
            // Single-file case
            const data = fileZip.getData();

            const targetPath = path.join(__dirname, "..", newRouteRelative);
            
            fsSync.mkdirSync(path.dirname(targetPath), { recursive: true });
            fsSync.writeFileSync(targetPath, data);

        } else {
            // Directory case: extract everything under route/
            const prefix = route.endsWith("/") ? route : `${route}/`;

            const entries = zip.getEntries().filter(e => e.entryName.startsWith(prefix));

            if (entries.length === 0) {
                console.warn("No file or folder entries found in zip for:", route);
            } else {
                for (const entry of entries) {
                if (entry.isDirectory) continue;

                const data = entry.getData();

                // Path inside the folder, relative to `route/`
                const innerRel = entry.entryName.slice(prefix.length);

                // Write into the destination folder path (newRouteRelative)
                const targetPath = path.join(__dirname, "..", newRouteRelative, innerRel);

                fsSync.mkdirSync(path.dirname(targetPath), { recursive: true });
                fsSync.writeFileSync(targetPath, data);
                }
            }
        }
    }
    const authorId = req.session && req.session.user && req.session.user.id || 0;
    const newTitle = escapeRoom.title;
    const currentUser = req.session.user;
    const prevUrl = escapeRoom.server;
    const currentUrl = getHostname(req);
    const saved = await cloneER(escapeRoom, authorId, newTitle, currentUser, prevUrl, currentUrl, replacements, transaction);
    res.redirect("/escapeRooms/" + saved.id);

  } catch (err) {
    req.flash("error",err)
    console.error(err)
    next(err)
  }

};
