const Sequelize = require("sequelize");
const {QueryTypes} = require("sequelize");
const sequelize = require("../models");
const {models} = sequelize;
const cloudinary = require("cloudinary");
const query = require("../queries");
const attHelper = require("../helpers/attachments");
const {nextStep, prevStep} = require("../helpers/progress");
const {saveInterface, getReusablePuzzles, getERPuzzles, paginate, validationError, getERAssets, getReusablePuzzlesInstances, stepsCompleted } = require("../helpers/utils");
const {getLocaleForEscapeRoom, getTextsForLocale, isValidLocale} = require("../helpers/I18n");

const fs = require("fs");
const path = require("path");

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
    let publicc = [];
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
        ({"count": countPending, "rows": pending} = await models.escapeRoom.findAndCountAll(query.escapeRoom.all(user.id, pagePending, limit, search, finished = false)));

        const pagesPending = Math.ceil(countPending / limit);

        if (pagePending > pagesPending && pagesPending !== 0) {
            pagePending = pagesPending;
        }
        const pagePendingArray = paginate(pagePending, pagesPending, 5);


        // Finished
        ({"count": countFinished, "rows": finished} = await models.escapeRoom.findAndCountAll(query.escapeRoom.all(user.id, pagePending, limit, search, finished = true)));

        const pagesFinished = Math.ceil(countPending / limit);

        if (pageFinished > pagesFinished && pagesFinished !== 0) {
            pageFinished = pagesFinished;
        }
        const pageFinishedArray = paginate(pageFinished, pagesFinished, 5);


        // Public
        let erAll = [];
        const searchCondition = search ? ` AND (LOWER(title) LIKE '%${search.toLowerCase()}%' OR LOWER(description) LIKE '%${search.toLowerCase()}%')` : "";

        countPublic = await sequelize.query(`SELECT count(distinct "escapeRooms"."id") AS "count" FROM "escapeRooms" INNER JOIN turnos ON "turnos"."escapeRoomId" = "escapeRooms".id  LEFT JOIN participants ON  "participants"."turnId" = "turnos"."id" WHERE ((("escapeRooms"."status" = 'completed') AND  (scope = FALSE OR SCOPE IS NULL) AND ("turnos".status = 'pending' OR "turnos"."status" = 'active') AND ("escapeRooms"."authorId" != ${user.id}))) ${searchCondition}`, {"raw": true, "type": QueryTypes.SELECT});
        erAll = await sequelize.query(`SELECT DISTINCT "escapeRoom"."id" FROM "escapeRooms" AS "escapeRoom" INNER JOIN turnos ON "turnos"."escapeRoomId" = "escapeRoom".id  LEFT JOIN participants ON  "participants"."turnId" = "turnos"."id" WHERE ((("escapeRoom"."status" = 'completed') AND (scope = FALSE OR SCOPE IS NULL) AND ("turnos"."status" = 'pending' OR "turnos"."status" = 'active')  AND ("escapeRoom"."authorId" != ${user.id}))) ${searchCondition} ORDER BY "escapeRoom"."id" DESC LIMIT ${limit} OFFSET ${(pagePublic - 1) * limit}`, {"raw": false, "type": QueryTypes.SELECT});
        countPublic = parseInt(countPublic[0].count, 10);

        const orIds = erAll.map((e) => e.id);

        erAll = await models.escapeRoom.findAll(query.escapeRoom.ids(orIds));
        const erFiltered = await models.escapeRoom.findAll(query.escapeRoom.all(user.id, null));
        const ids = erFiltered.map((e) => e.id);
        const now = new Date();

        now.setHours(now.getHours() - now.getTimezoneOffset() / 60);
        publicc = erAll.map((er) => {
            const {id, title, invitation, attachment} = er;
            const isSignedUp = ids.indexOf(er.id) !== -1;
            const isAuthorOrCoAuthor = er.authorId === user.id || er.userCoAuthor.some((e) => e.id === user.id);
            const tobeConfirmed = er.userCoAuthor.some((e) => e.id === user.id && !e.coAuthors.confirmed);

            const disabled = !isSignedUp && !er.turnos.some((e) => (!e.from || e.from < now) && (!e.to || e.to > now) && e.status !== "finished" && e.status !== "test" && (!e.capacity || e.students.length < e.capacity));

            return { id, title, invitation, attachment, disabled, isSignedUp, isAuthorOrCoAuthor, tobeConfirmed };
        });

        const pagesPublic = Math.ceil(countPublic / limit);

        if (pagePublic > pagesPublic && pagesPublic !== 0) {
            pagePublic = pagesPublic;
        }
        const pagePublicArray = paginate(pagePublic, pagesPublic, 5);

        // Render
        res.render("escapeRooms/index.ejs", {"escapeRooms": {pending, created, publicc, finished}, cloudinary, user, "count": {countCreated, countPending, countPublic, countFinished}, "page": {pagePublic, pagePending, pageCreated, pageFinished}, "pages": {pagesPublic, pagesPending, pagesCreated, pagesFinished}, "pageArray": {pagePublicArray, pagePendingArray, pageCreatedArray, pageFinishedArray}, search, "admin": false});
    } catch (error) {
        next(error);
    }
};

// GET /escapeRooms/:escapeRoomId
exports.show = async (req, res) => {
    const escapeRoom = await models.escapeRoom.findByPk(req.escapeRoom.id, query.escapeRoom.loadShow);

    escapeRoom.subject = await models.subject.findAll({"where": {"escapeRoomId": req.escapeRoom.id}});

    const {participant} = req;
    const hostName = process.env.APP_NAME ? `https://${process.env.APP_NAME}` : "http://localhost:3000";

    if (participant) {
        const [team] = participant.teamsAgregados;
        const howManyRetos = await models.retosSuperados.count({"where": {"success": true, "teamId": team.id }});
        const finished = howManyRetos === escapeRoom.puzzles.length;

        res.render("escapeRooms/showStudent", {escapeRoom, cloudinary, participant, team, finished});
    } else {
        const completed = stepsCompleted(escapeRoom);

        res.render("escapeRooms/show", {escapeRoom, cloudinary, completed, hostName, "email": req.session.user.username});
    }
};

// GET /escapeRooms/new
exports.new = (_req, res) => {
    const escapeRoom = {"title": "", "teacher": "", "subject": "", "duration": "", "description": "", "teamSize": "", "forceLang": ""};

    res.render("escapeRooms/new", {escapeRoom, "progress": "edit"});
};

// POST /escapeRooms/create
exports.create = async (req, res) => {
    const {title, subject, duration, forbiddenLateSubmissions, description, scope, teamSize, supportLink, forceLang, field, format, level, invitation, progress} = req.body,
        authorId = req.session.user && req.session.user.id || 0;

    const escapeRoom = models.escapeRoom.build({title, duration, "forbiddenLateSubmissions": forbiddenLateSubmissions === "on", invitation, description, supportLink, "scope": scope === "private", "teamSize": teamSize || 0, authorId, forceLang, field, format, level}); // Saves only the fields question and answer into the DDBB
    const {i18n} = res.locals;
    const transaction = await sequelize.transaction();

    escapeRoom.forceLang = isValidLocale(forceLang) ? forceLang : null;
    const subjects = subject.
        split(/[;,]/).
        map((s) => s.trim()).
        filter(Boolean);

    try {
        const er = await escapeRoom.save({"fields": ["title", "teacher", "duration", "description", "forbiddenLateSubmissions", "scope", "teamSize", "authorId", "supportLink", "invitation", "forceLang", "format", "level", "field"], transaction});
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
            res.redirect(`/escapeRooms/${escapeRoom.id}/${progress || nextStep("edit")}`);
            return;
        }

        try {
            // Await attHelper.checksCloudinaryEnv();
            // Const uploadResult = await attHelper.uploadResource(req.file.path, attHelper.cloudinary_upload_options);

            try {
                await models.attachment.create({
                    "public_id": req.file.originalname,
                    "url": `/uploads/thumbnails/${req.file.filename}`,
                    "filename": req.file.originalname,
                    "mime": req.file.mimetype,
                    "escapeRoomId": er.id
                });
                await transaction.commit();
            } catch (error) {
                console.error(error);
                await transaction.rollback();
                req.flash("error", i18n.common.flash.errorImage);
                fs.unlinkSync(req.file.path);
                // AttHelper.deleteResource(uploadResult.public_id, models.attachment);
                res.render("escapeRooms/new", {escapeRoom, "progress": "edit"});
                return;
            }
        } catch (error) {
            console.error(error);
            await transaction.rollback();
            req.flash("error", i18n.common.flash.errorFile);
            res.render("escapeRooms/new", {escapeRoom, "progress": "edit"});
            return;
        }
        res.redirect(`/escapeRooms/${escapeRoom.id}/${progress || nextStep("edit")}`);
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
        res.render("escapeRooms/new", {escapeRoom, "progress": "edit"});
    }
};

// GET /escapeRooms/:escapeRoomId/edit
exports.edit = async (req, res, next) => {
    try {
        req.escapeRoom.attachment = await models.attachment.findOne({"where": {"escapeRoomId": req.escapeRoom.id}});
        req.escapeRoom.subject = await models.subject.findAll({"where": {"escapeRoomId": req.escapeRoom.id}});
        res.render("escapeRooms/edit", {"escapeRoom": req.escapeRoom, "progress": "edit"});
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
    escapeRoom.level = body.level;
    escapeRoom.field = body.field;
    escapeRoom.format = body.format;
    escapeRoom.supportLink = body.supportLink;

    escapeRoom.teamSize = body.teamSize || 0;
    escapeRoom.forceLang = isValidLocale(body.forceLang) ? body.forceLang : null;

    const progressBar = body.progress;
    const transaction = await sequelize.transaction();
    const subjects = body.subject.
        split(/[;,]/).
        map((s) => s.trim()).
        filter(Boolean);

    try {
        const er = await escapeRoom.save({"fields": ["title", "duration", "forbiddenLateSubmissions", "description", "teamSize", "supportLink", "forceLang", "format", "level", "field"], transaction});

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
                    const old_url_used = await models.attachment.count({"where": {"url": er.attachment.url}}) > 1;

                    if (!old_url_used) {
                        fs.unlinkSync(path.join(__dirname, "/../", er.attachment.url));
                    }
                    er.attachment.destroy();
                }
                transaction.commit();
                res.redirect(`/escapeRooms/${req.escapeRoom.id}/${progressBar || nextStep("edit")}`);
                return;
            }
            try {
                const old_url = er.attachment ? er.attachment.url : null;
                let attachment = await er.getAttachment();

                if (!attachment) {
                    attachment = models.attachment.build({"escapeRoomId": er.id});
                }
                attachment.public_id = req.file.originalname;
                attachment.url = `/uploads/thumbnails/${req.file.filename}`;
                attachment.filename = req.file.originalname;
                attachment.mime = req.file.mimetype;
                try {
                    const old_url_used = await models.attachment.count({"where": {"url": old_url}}) > 1;

                    if (old_url && !old_url_used) {
                        try {
                            fs.unlinkSync(path.join(__dirname, "/../", old_url));
                        } catch (e) {
                            console.error("Error deleting old attachment file:", e);
                        }
                        // AttHelper.deleteResource(old_public_id, models.attachment);
                    }
                    await attachment.save();
                } catch (error) { // Ignoring image validation errors
                    console.error(error);
                    req.flash("error", i18n.common.flash.errorFile);
                    fs.unlinkSync(req.file.path);
                    // AttHelper.deleteResource(uploadResult.public_id, models.attachment);
                }
                transaction.commit();
                res.redirect(`/escapeRooms/${req.escapeRoom.id}/${progressBar || nextStep("edit")}`);
                return;
            } catch (error) {
                console.error(error);
                req.flash("error", i18n.common.flash.errorFile);
            }
        }
        transaction.commit();
        res.redirect(`/escapeRooms/${req.escapeRoom.id}/${progressBar || nextStep("edit")}`);
    } catch (error) {
        console.error(error);
        transaction.rollback();
        if (error instanceof Sequelize.ValidationError) {
            error.errors.forEach((err) => {
                req.flash("error", validationError(err, i18n));
            });
            if (req.file) {
                fs.unlinkSync(req.file.path);
            }
        } else {
            req.flash("error", i18n.common.flash.errorEditingER);
        }
        escapeRoom.subject = subjects.map((ss) => ({"subject": ss}));
        res.render("escapeRooms/edit", {escapeRoom, "progress": "edit"});
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
        await escapeRoom.save({"fields": ["survey", "pretest", "posttest", "scoreParticipation", "hintSuccess", "hintFailed", "automaticAttendance"]});
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
        escapeRoom.scope = body.scope === "private";
        if (escapeRoom.scope) { // Only public rooms  can have a password
            escapeRoom.invitation = body.invitation !== undefined ? body.invitation.toString() : undefined;
        } else {
            escapeRoom.invitation = null;
        }
        if (!escapeRoom.publishedOnce) { // Cannot change the license of a published room
            escapeRoom.license = body.license;
            if ((escapeRoom.status === "draft" || !escapeRoom.status) && body.status === "completed") {
                escapeRoom.publishedOnce = true;
                if (!escapeRoom.scope) {
                    await models.turno.create({"place": "_PUBLIC", "status": "active", "escapeRoomId": escapeRoom.id }, {transaction});
                }
            }
        }

        escapeRoom.status = body.status;

        const instructionsFile = req.file;

        if (instructionsFile && instructionsFile.filename) {
            try {
                fs.unlinkSync(path.join(__dirname, "/../uploads/instructions/", escapeRoom.instructions));
            } catch (e) {
                console.error("Error deleting old instructions file:", e);
            }
            escapeRoom.instructions = instructionsFile.filename;
        } else if (body.keepInstructions === "0") {
            try {
                fs.unlinkSync(path.join(__dirname, "/../uploads/instructions/", escapeRoom.instructions));
            } catch (e) {
                console.error("Error deleting old instructions file:", e);
            }
            escapeRoom.instructions = null;
        }


        await escapeRoom.save({"fields": ["invitation", "scope", "license", "instructions", "status", "publishedOnce"], transaction});
        await transaction.commit();
        res.redirect(`/escapeRooms/${escapeRoom.id}/${isPrevious ? prevStep("sharing") : progressBar || nextStep("sharing")}`);
    } catch (error) {
        await transaction.rollback();
        console.error(error);
        if (req.file) {
            fs.unlinkSync(req.file.path);
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

        const availableReusablePuzzles = await getReusablePuzzles();
        const assets = await getERAssets(escapeRoom.id);
        let reusablePuzzlesInstances = await getReusablePuzzlesInstances(escapeRoom.id);

        reusablePuzzlesInstances = reusablePuzzlesInstances.map((puzzleInstance) => ({
            "id": puzzleInstance.id,
            "name": puzzleInstance.name,
            "reusablePuzzleId": puzzleInstance.reusablePuzzleId,
            "config": puzzleInstance.config,
            "puzzles": puzzleInstance.puzzles.map((p) => p.id)
        }));

        escapeRoom.puzzles = await getERPuzzles(escapeRoom.id);
        escapeRoom.puzzles = escapeRoom.puzzles.map((puzzle) => ({
            "id": puzzle.id,
            "validator": puzzle.validator,
            "sol": puzzle.sol,
            "title": puzzle.title,
            "reusablePuzzleInstances": puzzle.reusablePuzzleInstances.map((p) => p.id)
        }));

        res.render("escapeRooms/steps/instructions", {escapeRoom, "progress": "team", "endPoint": "team", assets, reusablePuzzlesInstances, availableReusablePuzzles});
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
                fs.unlinkSync(path.join(__dirname, "/../", req.escapeRoom.attachment.url));
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
        const {"title": oldTitle, subject, duration, license, field, format, level, description, scope, invitation, teamSize, teamAppearance, classAppearance, forceLang, survey, pretest, posttest, numQuestions, numRight, feedback, forbiddenLateSubmissions, classInstructions, teamInstructions, indicationsInstructions, afterInstructions, scoreParticipation, hintLimit, hintSuccess, hintFailed, puzzles, hintApp, assets, attachment, allowCustomHints, hintInterval, supportLink, automaticAttendance, publishedOnce} = await models.escapeRoom.findByPk(req.escapeRoom.id, query.escapeRoom.loadComplete);
        const authorId = req.session && req.session.user && req.session.user.id || 0;
        const newTitle = `${res.locals.i18n.escapeRoom.main.copyOf} ${oldTitle}`;
        const include = [{"model": models.puzzle, "include": [models.hint]}];

        if (hintApp) {
            include.push(models.hintApp);
        }
        if (assets && assets.length) {
            include.push(models.asset);
        }
        if (attachment) {
            include.push(models.attachment);
        }

        const escapeRoom = models.escapeRoom.build({
            "title": newTitle,
            subject,
            duration,
            description,
            scope,
            teamSize,
            forceLang,
            teamAppearance,
            classAppearance,
            allowCustomHints,
            hintInterval,
            survey,
            pretest,
            posttest,
            numQuestions,
            invitation,
            numRight,
            feedback,
            forbiddenLateSubmissions,
            classInstructions,
            teamInstructions,
            indicationsInstructions,
            afterInstructions,
            scoreParticipation,
            hintLimit,
            hintSuccess,
            hintFailed,
            authorId,
            supportLink,
            automaticAttendance,
            "status": "draft",
            license,
            field,
            "publishedOnce": false,
            format,
            level,
            "puzzles": [...puzzles].map(({title, sol, desc, order, correct, fail, automatic, score, hints}) => ({
                title,
                sol,
                desc,
                order,
                correct,
                fail,
                automatic,
                score,
                "hints": [...hints].map(({content, "order": hintOrder, category}) => ({content, "order": hintOrder, category}))
            })),
            "hintApp": hintApp ? attHelper.getFields(hintApp) : undefined,
            "assets": assets && assets.length ? [...assets].map((asset) => ({...attHelper.getFields(asset), "userId": authorId})) : undefined,
            "attachment": attachment ? attHelper.getFields(attachment) : undefined
        }, {include});

        const saved = await escapeRoom.save({transaction});
        const testShift = await models.turno.create({"place": "test", "status": "test", "escapeRoomId": escapeRoom.id }, {transaction});
        const teamCreated = await models.team.create({ "name": req.session.user.name, "turnoId": testShift.id}, {transaction});

        await teamCreated.addTeamMembers(req.session.user.id, {transaction});
        await models.participants.create({"attendance": false, "turnId": testShift.id, "userId": req.session.user.id}, {transaction});
        transaction.commit();
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
        if (user && !user.isStudent) {
            ({count, "rows": escapeRooms} = await models.escapeRoom.findAndCountAll(query.escapeRoom.forAll(page, limit, search)));
        }
        const pages = Math.ceil(count / limit);

        if (page > pages && pages !== 0) {
            res.redirect(`/escapeRoomsAdmin?page=${pages}`);
        } else {
            const pageArray = paginate(page, pages, 5);

            res.render("escapeRooms/index.ejs", {escapeRooms, cloudinary, user, page, pages, pageArray, "isPublic": false, "isOwn": false, "whichMenu": "public", "admin": true, search});
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
        }

        await transaction.commit();
        req.flash("success", i18n.common.flash.successConfirmingCollaborator);
        res.redirect(`/escapeRooms/${escapeRoom.id}`);
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
            res.redirect(`/escapeRooms/${escapeRoom.id}/collaborators`);
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

    if (participant) {
        const [team] = participant.teamsAgregados;
        const howManyRetos = await models.retosSuperados.count({"where": {"success": true, "teamId": team.id }});
        const finished = howManyRetos === escapeRoom.puzzles.length;

        res.render("escapeRooms/showStudent", {escapeRoom, cloudinary, participant, team, finished});
    } else {
        res.redirect("escapeRooms/", req.escapeRoom.id);
    }
};


exports.showGuide = (req, res) => res.render("inspiration/inspiration");
