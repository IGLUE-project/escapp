const {models} = require("../models");// Autoload the user with id equals to :userId
const {createCsvFile} = require("../helpers/csv");
const Sequelize = require("sequelize");
const {Op} = Sequelize;
const queries = require("../queries");
const {sendLeaveTeam, sendLeaveParticipant, isParticipantTeamConnected, isParticipantTeamConnectedWaiting} = require("../helpers/sockets");
const {checkIsTurnAvailable, getRanking} = require("../helpers/utils");

exports.checkIsNotParticipant = async (req, res, next) => {
    const {escapeRoom} = req;
    const {i18n} = res.locals;

    try {
        const isParticipant = await models.user.findOne({
            "where": {"id": req.session.user.id},
            "include": {
                "model": models.turno,
                "through": "participants",
                "as": "turnosAgregados",
                "where": {"escapeRoomId": escapeRoom.id}
            }
        });

        if (isParticipant) {
            req.flash("error", i18n.turno.alreadyIn);
            res.redirect("/escapeRooms");
        } else {
            next();
        }
    } catch (err) {
        next(err);
    }
};

exports.checkSomeTurnAvailable = async (req, res, next) => {
    const { escapeRoom } = req;
    const turnos = await models.turno.findAll({
        "where": {
            "escapeRoomId": req.escapeRoom.id,
            "status": {[Op.notIn]: ["finished", "test"]}
        },
        "include": [{"model": models.user, "as": "students", "through": "participants"}],
        "order": [["date", "ASC NULLS LAST"]]
    });

    const {i18n} = res.locals;

    req.turnos = turnos;
    for (const turno of turnos) {
        if (checkIsTurnAvailable(turno, escapeRoom.duration)) {
            next();
            return;
        }
    }
    req.flash("error", i18n.turno.noTurnAvailable);
    res.redirect("/escapeRooms");
};

exports.checkTurnAvailable = (req, res, next) => {
    const {turn, escapeRoom} = req;
    const {i18n} = res.locals;

    if (checkIsTurnAvailable(turn, escapeRoom.duration)) {
        next();
        return;
    }
    req.flash("error", i18n.turno.turnNotAvailable);
    res.redirect("back");
};

exports.checkTeamAvailable = (req, res, next) => {
    const {team, escapeRoom} = req;
    const {i18n} = res.locals;

    if (team.teamMembers && escapeRoom.teamSize && team.teamMembers.length >= escapeRoom.teamSize) {
        req.flash("error", i18n.team.fullTeam);
        res.redirect("back");
    } else if (team.startTime && new Date(team.startTime.getTime() + escapeRoom.duration * 60000) < new Date()) {
        req.flash("error", i18n.team.alreadyFinishedChoose);
        res.redirect("back");
    } else {
        next();
    }
};


// GET /escapeRooms/:escapeRoomId/participants
exports.index = async (req, res, next) => {
    const {escapeRoom, query} = req;
    const {turnId, orderBy} = query;
    const includeNames = true;

    try {
        const turnos = await models.turno.findAll({"where": {"escapeRoomId": escapeRoom.id, "status": {[Op.not]: "test"}}});
        const users = await models.user.findAll(queries.user.participantsWithTurnoAndTeam(escapeRoom.id, turnId, orderBy));
        const participants = [];

        users.forEach((user) => {
            const {id, name, username, surname, alias, teamsAgregados, turnosAgregados, anonymized} = user;
            const [{"id": turnoId, "date": turnDate, "participants": parts}] = turnosAgregados;
            const [{"id": teamId, "name": teamName}] = teamsAgregados;
            const connected = isParticipantTeamConnected(id, teamId);
            const waiting = connected ? false : isParticipantTeamConnectedWaiting(id, teamId);
            let {attendance} = parts;

            attendance = Boolean(attendance);
            if (includeNames) {
                participants.push({id, name, surname, username, alias, teamId, teamName, turnoId, turnDate, attendance, connected, waiting, anonymized});
            } else {
                participants.push({id, "name": alias, teamId, teamName, turnoId, turnDate, attendance, connected, waiting, anonymized});
            }
        });
        if (req.query.csv) {
            createCsvFile(res, participants, `participants-er-${escapeRoom.id}-${turnId?`turn-${turnId}-`:""}${Date.now()}`);
        } else {
            res.render("escapeRooms/participants", {escapeRoom, participants, turnos, turnId, orderBy});
        }
    } catch (e) {
        next(e);
    }
};

// POST /escapeRooms/:escapeRoomId/confirm
exports.confirmAttendance = async (req, res) => {
    try {
        const turnos = (await models.turno.findAll({"where": {"escapeRoomId": req.escapeRoom.id, "status": {[Op.not]: "test"}}})).map((t) => t.id);

        await models.participants.update({"attendance": true}, { "where": {[Op.and]: [{"turnId": {[Op.in]: turnos}}, {"userId": {[Op.in]: req.body.attendance.yes}}]} });
        await models.participants.update({"attendance": false}, { "where": {[Op.and]: [{"turnId": {[Op.in]: turnos}}, {"userId": {[Op.in]: req.body.attendance.no}}]}});
        await res.end();
    } catch (e) {
        res.status(500);
        res.end();
    }
};

// DELETE /escapeRooms/:escapeRoomId/turno/:turnId/team/:teamId/user/:userId
exports.studentLeave = async (req, res, next) => {
    let {user} = req;
    const {turn} = req;
    const {i18n} = res.locals;
    let redirectUrl = `/escapeRooms/${req.escapeRoom.id}`;

    try {
        if (req.user && req.user.id !== req.session.user.id && req.session.user.isStudent) {
            // If it's not myself and I am not a teacher
            res.redirect("back");
            return;
        } else if (!req.user && req.session.user.isStudent) {
            if (turn.status === "finished" || turn.status === "active" && (turn.startTime || req.team.startTime)) {
                req.flash("error", `${i18n.common.flash.errorStudentLeave}`);
                res.redirect("/");
                return;
            }
        }
        if (!user) {
            user = await models.user.findByPk(req.session.user.id);
        }
        const userId = user.id;
        const turnId = turn.id;
        const teamId = req.team.id;

        await req.team.removeTeamMember(user);
        const participant = await models.participants.findOne({"where": { turnId, userId}});

        if (!participant) {
            next(new Error(i18n.api.notAParticipant));
            return;
        }
        await participant.destroy();
        if (req.session.user.isStudent) {
            redirectUrl = `/users/${req.session.user.id}/escapeRooms`;
        }

        if (req.team.teamMembers.length <= 1) {
            await req.team.destroy();
            const teams = await getRanking(req.escapeRoom.id, turnId, true);

            sendLeaveTeam(teamId, turnId, teams);
        } else {
            const teams = await getRanking(req.escapeRoom.id, turnId, true);

            sendLeaveParticipant(user.username, req.team.id, turnId, teams);
        }
        res.redirect(redirectUrl);
    } catch (e) {
        next(e);
    }
};
