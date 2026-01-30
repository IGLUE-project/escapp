const sequelize = require("../models");
const {models} = sequelize;
const {checkOnlyOneTurn, checkTeamSizeOne} = require("../helpers/utils");

exports.checkJoinToken = (req, res, next) => {
    const token = req.query.token || req.body.token || "";
    const {i18n} = res.locals;
    const password = (req.turn ? req.turn.password || req.escapeRoom.invitation : req.escapeRoom.invitation) || "";

    if (token !== password) {
        // eslint-disable-next-line eqeqeq
        if (req.query.nocheck != 1) {
            req.flash("error", i18n.participant.wrongToken);
        }
        res.redirect(`/escapeRooms/${req.escapeRoom.id}/${req.turn ? `turnos/${req.turn.id}/select` : "/join"}`);
    } else {
        req.token = token;
        next();
    }
};


// GET /escapeRooms/:escapeRoomId/join -> Yes / No Screen
exports.main = (req, res, next) => {
    const {escapeRoom} = req;
    const token = req.query.token || req.body.token || "";

    try {
        // If (req.session.user.isStudent) {
        res.render("escapeRooms/indexInvitation", {escapeRoom, token});
        /* } else {
            res.status(403);
            next(new Error(403));
        }*/
    } catch (e) {
        next(e);
    }
};


// POST /escapeRooms/:escapeRoomId/join -> Submit Yes/No -> Select shift
exports.indexTurnos = async (req, res, next) => {
    try {
        const {escapeRoom} = req;
        const token = req.query.token || req.body.token || "";

        escapeRoom.turnos = req.turnos;
        const onlyOneTurn = checkOnlyOneTurn(escapeRoom);
        const onlyOneMember = checkTeamSizeOne(escapeRoom);

        if (onlyOneTurn) {
            const password = (req.escapeRoom.turnos && req.escapeRoom.turnos[0] ? req.escapeRoom.turnos[0].password || req.escapeRoom.invitation : req.escapeRoom.invitation) || "";

            if (token === password) {
                if (onlyOneMember) {
                    req.params.turnoId = escapeRoom.turnos[0].id;
                    req.body.name = req.session.user.name;
                    req.user = await models.user.findByPk(req.session.user.id);
                    next();
                } else {
                    res.redirect(`/escapeRooms/${escapeRoom.id}/turnos/${escapeRoom.turnos[0].id}/teams?token=${token}&nocheck=1`);
                }
            } else if (token) {
                res.redirect(`/escapeRooms/${escapeRoom.id}/turnos/${escapeRoom.turnos[0].id}/teams?token=${token}`);
            } else {
                res.redirect(`/escapeRooms/${escapeRoom.id}/turnos/${escapeRoom.turnos[0].id}/teams?token=${token}&nocheck=1`);
            }
        } else {
            res.render("turnos/_indexStudent.ejs", {"turnos": escapeRoom.turnos, escapeRoom, token});
        }
    } catch (e) {
        next(e);
    }
};

// POST /escapeRooms/:escapeRoomId/turnos/:turnoId/select -> Shift selected -> Ask for password
exports.mainTurnos = (req, res, next) => {
    const {escapeRoom, turn} = req;
    const token = req.query.token || req.body.token || "";
    const password = (req.turn ? req.turn.password || req.escapeRoom.invitation : req.escapeRoom.invitation) || "";

    if (token === password) {
        if (escapeRoom.teamSize === 1) {
            req.body.name = req.session.user.name;
            req.params.turnoId = req.body.turnSelected;
            next();
        } else {
            const direccion = req.body.redir || `/escapeRooms/${escapeRoom.id}/turnos/${req.turn.id}/teams?token=${token}&nocheck=1`;

            res.redirect(direccion);
        }
    } else {
        res.render("escapeRooms/turnoPassword.ejs", {"turno": turn, escapeRoom, token});
    }
};

// POST  /escapeRooms/:escapeRoomId/turnos/:turnId/
exports.selectTurno = (req, res, next) => {
    const {escapeRoom} = req;
    const token = req.query.token || req.body.token || "";

    if (escapeRoom.teamSize === 1) {
        req.body.name = req.session.user.name;
        next();
    } else {
        const direccion = req.body.redir || `/escapeRooms/${escapeRoom.id}/turnos/${req.turn.id}/teams?token=${token}&nocheck=1`;

        res.redirect(direccion);
    }
};


// EscapeRoomController.isStatusCompleted, participantController.isNotAuthorOrCoAuthorOrAdmin, participantController.checkIsNotParticipant, participantController.checkSomeTurnAvailable, joinController.indexTurnos, teamController.create);
exports.joinAnonymous = async (req, res, next) => {
    const { i18n } = res.locals;
    const currentLang = i18n.lang;

    let  redirURL = `/escapeRooms/${req.escapeRoom.id}`
    if(req.query.token) {
        redirURL +=  "?token=" + req.query.token;
    } 
    redirURL+= "#join-anon"

    if (!req.body.alias) {
        req.flash("error", i18n.common.flash.errorCreatingUser);
        res.redirect(redirURL);
        return;
    }
    req.body.password = Math.random().toString(36).slice(-8);
    req.body.username = `${req.escapeRoom.id}_${String(req.body.alias).toLowerCase()}_${Date.now()}@anonymous.org`;
    req.body.redir = redirURL // `/escapeRooms/${req.escapeRoom.id}/join`;
    req.body.anonymous = true;
    if (req.body.accept_terms != "on") {
        req.flash("error", i18n.common.flash.youMustAcceptTerms);
        res.redirect(redirURL);
        return;
    }
    const user = models.user.build({
        "name": "Anonymous",
        "surname": "Anonymous",
        "alias": req.body.alias,
        "eduLevel": req.body.eduLevel || "other",
        "username": req.body.username,
        "password": req.body.password,
        "lang": currentLang,
        "anonymized": true,
        "isStudent": true,
        "confirmed": true,
        "lastAcceptedTermsDate": new Date()
    });

    try {
        await user.save({"fields": ["name", "surname", "alias", "eduLevel", "username", "password", "isStudent", "salt", "token", "lang", "lastAcceptedTermsDate", "confirmed", "anonymized"]});

        req.body.login = user.username;

        next();
    } catch (error) {
        console.error(error);
        if (error && error.errors && error.errors.length > 0 && error.errors[0].message == "alias must be unique") {
            req.flash("error", i18n.common.flash.aliasAlreadyExists);
        } else {
            req.flash("error", i18n.common.flash.errorCreatingUser);
        }           
        res.redirect(redirURL);
    }
};
