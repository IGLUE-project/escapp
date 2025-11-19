const Sequelize = require("sequelize");
const {Op} = Sequelize;
const sequelize = require("../models");
const {models} = sequelize;
const {nextStep, prevStep} = require("./progress");
const ejs = require("ejs");
const queries = require("../queries");
const {OK, NOT_A_PARTICIPANT, AUTHOR, PARTICIPANT, NOK, NOT_ACTIVE, NOT_STARTED, TOO_LATE, ERROR} = require("../helpers/apiCodes");
const {getRetosSuperados, byRanking, getPuzzleOrderSuperados} = require("./analytics");
const {removeDiacritics} = require("./diacritics.js");
const fs = require("fs");
const path = require("path");

exports.flattenObject = (obj, labels, min = false) => {
    const rs = {};

    for (const r in obj) {
        rs[labels[r] + (min ? " Minute" : "")] = obj[r];
    }
    return rs;
};

exports.saveInterface = async (name, req, res, next) => {
    const {escapeRoom, body} = req;
    const isPrevious = Boolean(body.previous);
    const progressBar = body.progress;
    const {i18n} = res.locals;

    escapeRoom[`${name}Instructions`] = body.instructions;
    escapeRoom[`${name}Appearance`] = body.appearance;
    const fields = [`${name}Instructions`, `${name}Appearance`];

    if (name === "indications") {
        const hybridInstructionsFile = req.file;

        if (hybridInstructionsFile && hybridInstructionsFile.filename) {
            try {
                fs.unlinkSync(path.join(__dirname, "/../uploads/hybrid/", escapeRoom.hybridInstructions));
            } catch (e) {
                console.error("Error deleting old resources file:", e);
            }
            escapeRoom.hybridInstructions = hybridInstructionsFile.filename;
        } else if (body.keepHybridInstructions === "0") {
            try {
                fs.unlinkSync(path.join(__dirname, "/../uploads/hybrid/", escapeRoom.hybridInstructions));
            } catch (e) {
                console.error("Error deleting old resources file:", e);
            }
            escapeRoom.hybridInstructions = null;
        }
        fields.push("hybridInstructions");
    }
    try {
        await escapeRoom.save({fields});
        res.redirect(`/escapeRooms/${escapeRoom.id}/${isPrevious ? prevStep(name) : progressBar || nextStep(name)}`);
    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            error.errors.forEach(({message}) => req.flash("error", message));
            res.redirect(`/escapeRooms/${escapeRoom.id}/${name}`);
        } else {
            req.flash("error", `${i18n.common.flash.errorEditingER}: ${error.message}`);
            next(error);
        }
    }
};


exports.playInterface = async (name, req, res, next) => {
    const {i18n} = res.locals;
    const isAdmin = Boolean(req.session.user.isAdmin),
        isCoAuthor = req.escapeRoom.userCoAuthor.some((user) => user.id === req.session.user.id && user.coAuthors.confirmed),
        isAuthor = req.escapeRoom.authorId === req.session.user.id;

    req.escapeRoom = await models.escapeRoom.findByPk(req.escapeRoom.id, queries.escapeRoom.loadPuzzles);
    req.escapeRoom.hintApp = await models.hintApp.findOne({"where": { "escapeRoomId": req.escapeRoom.id }});
    const {token} = await models.user.findByPk(req.session.user.id);

    if (name === "class" && (isAdmin || isAuthor || isCoAuthor)) {
        res.render("escapeRooms/play/play", {
            "escapeRoom": req.escapeRoom,
            "team": {
                "turno": req.turn,
                "retos": []
            },
            "teams": req.teams,
            "hints": [],
            "teamId": null,
            "turnoId": req.params.turnoId,
            "isStudent": false,
            "status": req.turn.status,
            "endPoint": name,
            "hostName": process.env.APP_NAME ? `https://${process.env.APP_NAME}` : "http://localhost:3000",
            token,
            "layout": false
        });
    } else {
        try {
            const teams = await models.team.findAll({
                "include": [
                    {
                        "model": models.turno,
                        "include": {
                            "model": models.escapeRoom,
                            "where": {"id": req.escapeRoom.id}
                        },
                        "required": true

                    },
                    {
                        "model": models.user,
                        "as": "teamMembers",
                        "attributes": [],
                        "where": {"id": req.session.user.id},
                        "required": true
                    },
                    {
                        "model": models.puzzle,
                        "as": "retos",
                        "through": {
                            "model": models.retosSuperados,
                            "required": false,
                            "where": {"success": true},
                            "attributes": ["createdAt"]
                        }
                    }

                ],
                "required": true
            });

            const team = teams && teams[0] ? teams[0] : {};
            const tooLate = exports.isTooLate(team, req.escapeRoom.forbiddenLateSubmissions, req.escapeRoom.duration);
            const alreadyFinished = team.retos.length === req.escapeRoom.puzzles.length;

            if (!team.startTime || !(team.turno.status === "active" || team.turno.status === "test") || tooLate || alreadyFinished) {
                if (!team.startTime) {
                    req.flash("error", i18n.team.notStarted);
                } else if (!(team.turno.status === "active" || team.turno.status === "test")) {
                    req.flash("error", i18n.turno.notActive);
                } else if (tooLate) {
                    req.flash("error", i18n.team.tooLate);
                } else if (alreadyFinished) {
                    req.flash("error", i18n.team.alreadyFinished);
                }
                res.redirect(`/escapeRooms/${req.escapeRoom.id}`);
                return;
            }
            await exports.automaticallySetAttendance(team, req.session.user.id, req.escapeRoom.automaticAttendance);
            const hints = await models.requestedHint.findAll({"where": {"teamId": team.id, "success": true}, "include": [{"model": models.hint, "include": [{"model": models.puzzle, "attributes": ["order"]}]}], "order": [["createdAt", "ASC"]]});

            res.render("escapeRooms/play/play", {"escapeRoom": req.escapeRoom, "hostName": process.env.APP_NAME ? `https://${process.env.APP_NAME}` : "http://localhost:3000", "teams": [], team, token, "userId": req.session.user.id, "turnoId": team.turno.id, "teamId": team.id, "isStudent": true, "hints": hints || [], "endPoint": name, "layout": false });
        } catch (err) {
            next(err);
        }
    }
};

exports.isTooLate = (team, forbiddenLateSubmissions, duration) => {
    if (team.turno.status === "finished") {
        return true;
    }
    const startTime = team.turno.startTime || team.startTime;

    return forbiddenLateSubmissions && new Date(startTime.getTime() + duration * 60000) < new Date();
};

/*
 * User authentication: Checks that the user is registered.
 *
 * Return a Promise that searches a user with the given login, and checks that
 * the password is correct.
 * If the authentication is correct, then the promise is satisfied and returns
 * an object with the User.
 * If the authentication fails, then the promise is also satisfied, but it
 * returns null.
 */
exports.authenticate = (login, pass, token) => {
    const username = (login || "").toString();

    if (token) {
        return models.user.findOne({"where": {username, token}}).
            then((user) => user);
    }
    const password = (pass || "").toString();

    return models.user.findOne({"where": {username}}).
        then((user) => user && user.verifyPassword(password) ? user : null);
};

/**
 * Promisify render EJS view
 */
exports.renderEJS = (view, query = {}, options = {}) => new Promise((resolve, reject) => {
    ejs.renderFile(view, query, options, function (err, str) {
        if (err) {
            return reject(err);
        }
        resolve(str);
    });
});

exports.getERTurnos = (escapeRoomId) => models.turno.findAll({"where": {escapeRoomId, "status": {[Op.not]: "test"}}});

exports.getERPuzzles = (escapeRoomId) => models.puzzle.findAll({"where": {escapeRoomId}, "order": [["order", "asc"]], "include": [{"model": models.reusablePuzzleInstance}]});

exports.getReusablePuzzles = () => models.reusablePuzzle.findAll({"attributes": ["name", "description", "instructions", "config", ["id", "reusablePuzzleId"]]});

exports.getReusablePuzzlesInstances = (id) => models.reusablePuzzleInstance.findAll({"where": {"escapeRoomId": id}, "include": [{"model": models.puzzle, "attributes": ["id"]}]});

exports.getERPuzzlesAndHints = (escapeRoomId) => models.puzzle.findAll({
    "where": {escapeRoomId},
    "include": [{"model": models.hint}],
    "order": [
        ["order", "asc"],
        [
            {"model": models.hint},
            "order",
            "asc"
        ]
    ]
});

exports.getERState = async (user, escapeRoomId, team, turnId, duration, hintLimit, nPuzzles, attendance, attendanceScore, scoreHintSuccess, scoreHintFail, includeRanking = false) => {
    const {puzzlesSolved, puzzleData} = await getPuzzleOrderSuperados(team);
    const teamMembers = team.teamMembers.map((member) => member.alias);
    const participantTeamIndex = team.teamMembers.findIndex((member) => member.username === user.username);

    const {hintsAllowed, successHints, failHints} = await exports.areHintsAllowedForTeam(team.id, hintLimit);
    const progress = exports.getProgress(puzzlesSolved, nPuzzles);
    const score = exports.getScore(puzzlesSolved, puzzleData, successHints, failHints, attendance, attendanceScore, scoreHintSuccess, scoreHintFail);
    const ranking = includeRanking ? await exports.getRanking(escapeRoomId, turnId, true) : undefined;
    const startTime = team.turno.startTime || team.startTime;
    const timeLeft = duration * 60 - Math.round((new Date() - startTime) / 1000);
    const remainingTime = !timeLeft || timeLeft < 0 ? 0 : timeLeft;
    const teamId = team.id;

    return {teamId, startTime, remainingTime, puzzlesSolved, puzzleData, nPuzzles, hintsAllowed, progress, score, teamMembers, ranking, "duration": duration * 60, participantTeamIndex};
};

exports.getRanking = async (escapeRoomId, turnoId, anonymized = false) => {
    const teamsRaw = await models.team.findAll(queries.team.rankingShort(escapeRoomId, turnoId));
    const nPuzzles = await models.puzzle.count({"where": { escapeRoomId }});
    const ranking = getRetosSuperados(teamsRaw, nPuzzles, true, {"user": { "anonymous": "Anonymous"}}).sort(byRanking);
    const newRanking = [];

    for (const i in ranking) {
        const team = {
            "id": ranking[i].id,
            "name": ranking[i].name,
            "participants": ranking[i].participants,
            "result": ranking[i].result,
            "count": ranking[i].count,
            "latestRetoSuperado": ranking[i].latestRetoSuperado,
            "finishTime": ranking[i].finishTime,
            "startTime": ranking[i].startTime
        };

        newRanking.push(team);
    }
    return newRanking;
};
exports.getProgress = (puzzlesSolved, totalNumberOfPuzzles) => totalNumberOfPuzzles ? Math.round(puzzlesSolved.length / totalNumberOfPuzzles * 10000) / 100 : 0;

exports.getScore = (puzzlesSolved, puzzleData, successHints, failHints, attendance, attendanceScore, scoreHintSuccess, scoreHintFail) => {
    let score = 0;

    if (attendance) {
        for (const p of puzzlesSolved) {
            score += puzzleData[p].score || 0;
        }
        score += attendanceScore || 0;
        score += successHints * (scoreHintSuccess || 0);
        score += failHints * (scoreHintFail || 0);
    }

    return score;
};

exports.checkTurnoAccess = (teams, user, escapeRoom, preview = false) => {
    let participation = PARTICIPANT;
    const privileged = user.isAdmin || escapeRoom.authorId === user.id || (escapeRoom.userCoAuthor || []).some((e) => e.id === user.id && e.coAuthors.confirmed);

    if (preview && privileged) {
        participation = PARTICIPANT;
    } else if (teams && teams.length > 0) {
        const [team] = teams;

        if (team.turno.status === "pending") {
            participation = NOT_ACTIVE;
        } else if (!team.startTime) {
            participation = NOT_STARTED;
        } else if (exports.isTooLate(team, escapeRoom.forbiddenLateSubmissions, escapeRoom.duration)) {
            participation = TOO_LATE;
        } else {
            participation = PARTICIPANT;
        }
    } else if (!preview && privileged) {
        participation = AUTHOR;
    } else {
        participation = NOT_A_PARTICIPANT;
    }
    return participation;
};

exports.checkPuzzle = async (solution, puzzle, escapeRoom, teams, user, i18n, readOnly = false, preview = false) => {
    // eslint-disable-next-line no-undefined
    const answer = solution === undefined || solution === null ? "" : solution;
    // eslint-disable-next-line no-undefined
    const puzzleSol = puzzle.sol === undefined || puzzle.sol === null ? "" : puzzle.sol;
    // eslint-disable-next-line no-undefined
    const puzzleValidator = puzzle.validator === undefined || puzzle.validator === null ? "exact" : puzzle.validator;
    let status = 200;
    let code = NOK;
    let participation = PARTICIPANT;
    let msg = "";
    // eslint-disable-next-line init-declarations
    let erState;
    let correctAnswer = false;
    let alreadySolved = false;
    const transaction = await sequelize.transaction();

    try {
        switch (puzzleValidator) {
        case "exact":
            correctAnswer = removeDiacritics(answer.toString().trim()) === removeDiacritics(puzzleSol.toString().trim());
            break;
        case "regex":
            correctAnswer = new RegExp(puzzleSol).test(removeDiacritics(answer.toString()));
            break;
        case "range": {
            const splitArray = puzzleSol.toString().split("+");
            const solutionNum = Number(splitArray[0]);
            const range = Number(splitArray[1]);

            correctAnswer = answer > solutionNum - range && answer < solutionNum + range;
            break;
        }
        case "caseinsensitive":
            correctAnswer = removeDiacritics(answer.toString().toLowerCase().trim()) === removeDiacritics(puzzleSol.toString().toLowerCase().trim());
            break;
        default:
            throw new Error("Error during puzzle validation");
        }
        if (correctAnswer) {
            msg = puzzle.correct || i18n.escapeRoom.play.correct;
        } else {
            status = 423;
            msg = puzzle.fail || i18n.escapeRoom.play.wrong;
        }
        const participationCode = await exports.checkTurnoAccess(teams, user, escapeRoom, preview);

        participation = participationCode;
        alreadySolved = preview || Boolean(await models.retosSuperados.findOne({"where": {"puzzleId": puzzle.id, "teamId": teams[0].id, "success": true}}, {transaction}));
        if (participation === PARTICIPANT) {
            try {
                if (correctAnswer) {
                    code = OK;
                    if (!alreadySolved && !readOnly) {
                        await models.retosSuperados.create({"puzzleId": puzzle.id, "teamId": teams[0].id, "userId": user.id, "success": true, answer}, {transaction});
                    }
                } else {
                    if (!alreadySolved && !readOnly) {
                        await models.retosSuperados.create({"puzzleId": puzzle.id, "teamId": teams[0].id, "userId": user.id, "success": false, answer}, {transaction});
                    }
                    status = 423;
                }
            } catch (e) {
                console.error(e);
                code = ERROR;
                status = 500;
                msg = e.message;
            }
        } else if (participation === AUTHOR) {
            if (correctAnswer) {
                code = OK;
            }
            status = correctAnswer ? 202 : 423;
        } else {
            status = correctAnswer ? 202 : 423;
        }
        await transaction.commit();
        if (participation !== AUTHOR && (teams && teams.length)) {
            const attendance = participation === "PARTICIPANT" || participation === "TOO_LATE";

            erState = await exports.getERState(user, escapeRoom.id, teams[0], teams[0].turno.id, escapeRoom.duration, escapeRoom.hintLimit, escapeRoom.puzzles.length, attendance, escapeRoom.scoreParticipation, escapeRoom.hintSuccess, escapeRoom.hintFailed);
        }
    } catch (e) {
        console.error(e);
        await transaction.rollback();
        status = 500;
        code = ERROR;
        msg = e;
    }
    return {status, "body": {code, correctAnswer, alreadySolved, "authentication": true, "token": user.token, participation, msg, erState}};
};

exports.automaticallySetAttendance = async (team, userId, automaticAttendance) => {
    let inUser = [userId];

    switch (automaticAttendance) {
    case "team":
        // eslint-disable-next-line no-case-declarations
        const members = await team.getTeamMembers({"attributes": ["id", "name", "surname", "alias"]});

        inUser = members.map((t) => t.id);
        // eslint-disable-next-line no-fallthrough
    case "participant":
        await models.participants.update({"attendance": true}, {"where": {[Op.and]: [{"turnId": team.turno.id}, {"userId": {[Op.in]: inUser}}]}});
        break;
    case "none":
    default:
        break;
    }
    if (!(team.startTime instanceof Date && isFinite(team.startTime))) {
        team.startTime = new Date();

        await team.save({"fields": ["startTime"]});
        const {id, name, result, turno, finishTime} = team;
        const startTime = turno.startTime || team.startTime;

        return {id, turno, name, result, finishTime, startTime};
    }
};


exports.checkOnlyOneTurn = (escapeRoom) => escapeRoom.turnos && escapeRoom.turnos.length === 1;

exports.checkTeamSizeOne = (escapeRoom) => escapeRoom.teamSize === 1;

exports.checkIsTurnAvailable = (turn, duration) => {
    const now = new Date();

    now.setHours(now.getHours() - now.getTimezoneOffset() / 60);
    if (turn.status === "finished") {
        return false;
    }
    if (turn.from && turn.from > now) {
        return false;
    }
    if (turn.to && turn.to < now) {
        return false;
    }
    if (turn.startTime && new Date(turn.startTime.getTime() + duration * 60000) < now) {
        return false;
    }
    return turn.students && (!turn.capacity || turn.students.length < turn.capacity);
};

exports.getCurrentPuzzle = async (team, puzzles) => {
    const retosSuperados = await models.puzzle.findAll({
        "attributes": ["order", "title", "correct", "sol", "score"],
        "include": [
            {
                "model": models.team,
                "as": "superados",
                "where": {"id": team.id},
                "through": {
                    "model": models.retosSuperados,
                    "where": {"success": true},
                    "required": true
                }
            }
        ],
        "order": [["order", "ASC"]]
    });

    const retosSuperadosOrder = retosSuperados.map((r) => r.order);
    const pending = puzzles.map((p) => p.order).filter((p) => retosSuperadosOrder.indexOf(p) === -1);
    let currentlyWorkingOn = retosSuperadosOrder.length ? Math.max(...retosSuperadosOrder) + 1 : 0;

    if (retosSuperadosOrder.length === puzzles.length) {
        currentlyWorkingOn = null;
    } else if (currentlyWorkingOn >= puzzles.length) {
        [currentlyWorkingOn] = pending;
    }
    return currentlyWorkingOn;
};


exports.areHintsAllowedForTeam = async (teamId, hintLimit) => {
    const reqHints = await models.requestedHint.findAll({"where": { teamId}});
    let successHints = 0;
    let failHints = 0;
    let hintsAllowed = false;

    for (const h in reqHints) {
        if (reqHints[h].success) {
            successHints++;
        } else {
            failHints++;
        }
    }
    if (!hintLimit && hintLimit !== 0 || hintLimit >= successHints) {
        hintsAllowed = true;
    }
    return {hintsAllowed, successHints, failHints};
};

exports.getContentForPuzzle = (content = "[]", currentlyWorkingOn) => JSON.parse(content || "[]").map((block, index) => ({...block, index})).filter((block) => block.puzzles.indexOf(currentlyWorkingOn.toString()) !== -1);
exports.paginate = (page = 1, pages, limit = 5) => {
    let from = 0;
    let to = 0;

    if (pages < limit) {
        to = limit;
    } else {
        const positions = Math.floor(limit / 2);

        from = Math.min(pages - limit, Math.max(0, page - positions - 1));
        to = Math.max(Math.min(pages, page + positions), limit);
    }
    return Array(pages).fill(0).map((_e, i) => i + 1).slice(from, to);
};

exports.ckeditorResponse = (funcNum, url) => `<script type='text/javascript'>
    var funcNum = ${funcNum};
    var url     = "${url}";
    var message = "Uploaded file successfully";

    window.parent.CKEDITOR.tools.callFunction(funcNum, url, message);
</script>`;


exports.validationError = ({instance, paths, validatorKey}, i18n) => {
    try {
        if (i18n[instance.constructor.name] &&
            i18n[instance.constructor.name].attributes &&
            i18n[instance.constructor.name].attributes[paths] &&
            i18n.common.error[validatorKey]) {
            return `${i18n[instance.constructor.name].attributes[paths]} ${i18n.common.error[validatorKey]}`;
        }
        throw new Error("Error during validation");
    } catch (e) {
        return i18n.common.validationError;
    }
};

exports.isValidDate = (d) => d === null || d instanceof Date && !isNaN(d);

exports.groupByTeamRetos = (retos, useIdInsteadOfOrder = false) => retos.reduce((acc, val) => {
    const {id} = val;
    const success = val["puzzlesSolved.success"];
    const when = val["puzzlesSolved.createdAt"];
    const userId = val["puzzlesSolved.user.id"];
    const username = val["puzzlesSolved.user.username"];
    const alias = val["puzzlesSolved.user.alias"];
    const answer = val["puzzlesSolved.answer"];
    const order = useIdInsteadOfOrder ? val["puzzlesSolved.puzzle.id"] : val["puzzlesSolved.puzzle.order"];

    if (!acc[id]) {
        acc[id] = {[order]: [{success, when, answer, userId, username, alias}] };
    } else if (!acc[id][order]) {
        acc[id][order] = [{success, when, answer, userId, username, alias}];
    } else {
        acc[id][order].push({success, when, answer, userId, username, alias});
    }
    return acc;
}, {});

exports.getERAssets = (escapeRoomId) => models.asset.findAll({"where": {escapeRoomId}, "order": [["createdAt", "ASC NULLS LAST"]]});

exports.getERScenes = (escapeRoomId) => models.scene.findAll({"where": {escapeRoomId}, "order": [["createdAt", "ASC NULLS LAST"]]});

exports.isValidEmail = (email, whitelist = []) => {
    // Basic email format validation regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
        return false; // Invalid email format
    }

    // Extract domain from email safely
    const parts = email.split("@");

    if (parts.length !== 2) {
        return false;
    } // Malformed email

    const domain = parts[1].trim();

    // Ensure whitelist is properly formatted (trim spaces)
    const cleanedWhitelist = whitelist.map((dom) => dom.trim());

    // Check if domain is in the whitelist
    return cleanedWhitelist.includes(domain);
};

exports.getRole = (role, username = "", i18n) => {
    const whitelist = process.env.WHITELIST_DOMAINS ? process.env.WHITELIST_DOMAINS.split(",").map((domain) => domain.trim()) : undefined;
    const teacherWhitelist = process.env.TEACHER_DOMAINS ? process.env.TEACHER_DOMAINS.split(",").map((domain) => domain.trim()) : undefined;
    const disableChoosingRole = JSON.parse(process.env.DISABLE_CHOOSING_ROLE || "false"); // Default to false

    if ((!role || role === "teacher") && exports.isValidEmail(username, teacherWhitelist)) {
        if (disableChoosingRole) {
            return "teacher";
        }
        return role;
    } else if (exports.isValidEmail(username, whitelist)) {
        if (disableChoosingRole) {
            return "student";
        } else if (role === "student") {
            return role;
        } else if (role === "teacher") {
            if (teacherWhitelist) {
                throw new Error(i18n.user.messages.notAllowedTeacherEmail);
            } else {
                return role;
            }
        } else {
            throw new Error(i18n.user.messages.notAllowedStudentEmail);
        }
    } else if (disableChoosingRole && !whitelist) {
        return "student";
    } else if (disableChoosingRole && whitelist && whitelist.length > 0) {
        throw new Error(i18n.user.messages.notAllowedEmail);
    } else if (role === "student" || role === "teacher") {
        return role; // Allow any role if role selection is enabled
    } else {
        throw new Error(i18n.api.unauthorized);
    }
};

exports.generatePassword = () => {
    const length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let retVal = "";

    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
};

exports.findFirstAvailableFile = async (section, lang) => {
    const rootPath = path.join(__dirname, "../public");
    const candidates = [
        `${section}/${section}_${lang}.html`,
        `${section}/${section}_${lang}.pdf`,
        `${section}/${section}.html`,
        `${section}/${section}.pdf`,
        `${section}/${section}_en.html`,
        `${section}/${section}_en.pdf`
    ];

    for (const relativeFile of candidates) {
        const absolutePath = path.join(rootPath, relativeFile);

        try {
            await fs.accessSync(absolutePath);
            return relativeFile;
        } catch (error) {
            // Skip and continue
            console.error(error);
        }
    }

    return null;
};

exports.stepsCompleted = (escapeRoom) => {
    const step1 = Boolean(escapeRoom.title);
    const step2 = escapeRoom.puzzles && escapeRoom.puzzles.length > 0;
    const step3 = escapeRoom.hintLimit === 0 || escapeRoom.puzzles.map((p) => p.hints ? p.hints.length : 0).reduce((a, b) => a + b, 0) > 0;
    const step4 = Boolean(escapeRoom.indicationsInstructions);
    const step5 = Boolean(escapeRoom.teamInstructions);
    const step6 = Boolean(escapeRoom.classInstructions);
    const step7 = Boolean(escapeRoom.afterInstructions);
    const step8 = (escapeRoom.scoreParticipation || 0) + escapeRoom.puzzles.map((p) => p.score ? p.score : 0).reduce((a, b) => a + b, 0) > 0;
    const step9 = escapeRoom.status == "completed";

    return [step1, step2, step3, step4, step5, step6, step7, step8, step9];
};

exports.getHostname = (req) => {
    return process.env.APP_NAME? 
    `${req.protocol}://${process.env.APP_NAME}${
        process.env.PORT && process.env.PORT !== '80' && process.env.PORT !== '443' ? `:${process.env.PORT}` : ''
    }`
    : "http://localhost:3000";
};