const {authenticate, findFirstAvailableFile} = require("../helpers/utils");
const sequelize = require("../models");
const {models} = sequelize;
const query = require("../queries");
const path = require("path");

/*
 * This variable contains the maximum inactivity time allowed without
 * Making requests.
 * If the logged user does not make any new request during this time,
 * Then the user's session will be closed.
 * The value is in milliseconds.
 * 5 minutes.
 */
const maxIdleTime = 3 * 60 * 60 * 1000; /* * * Middleware used to destroy the user's session if the inactivity time * has been exceeded. * */
exports.maxIdleTime = maxIdleTime;

/* Helpers */
function isAdmin(user) {
    return Boolean(user.isAdmin);
}
function isAuthor(user, er) {
    return user.id === er.authorId;
}
function isCoAuthor(user, er) {
    return er.userCoAuthor.some(author =>
        author.id === user.id &&
        author.coAuthors &&
        author.coAuthors.confirmed
    );
}
function isCoAuthorPending(user, er) {
    return er.userCoAuthor.some(author =>
        author.id === user.id &&
        author.coAuthors &&
        !author.coAuthors.confirmed
    );
}
function isStudent(user) {
    return Boolean(req.session.user.isStudent);
}

async function isParticipant(user,er,includeTest = false) {
    let response = {"isParticipant": false, "participant": undefined};
    const isAnonymous = !user;
    if (isAnonymous) {
        response.isParticipant = true;
    } else {
        const participants = await models.user.findAll(query.user.escapeRoomsForUser(er.id, user.id,includeTest));
        if(participants && participants.length === 1){
            response.isParticipant = true;
            response.participant = participants[0];
        }
    }
    return response;
}

/*
 * Middleware: Login required.
 *
 * If the user is logged in previously then there will exist
 * The req.session.user object, so I continue with the others
 * Middlewares or routes.
 * If req.session.user does not exist, then nobody is logged,
 * So I redirect to the login screen.
 * I keep on redir which is my url to automatically return to
 * That url after login; but if redir already exists then
 * This value is maintained.
 *
 */
exports.loginRequired = (req, res, next) => {
    if (req.session.user) {
        if (!req.session.user.lastAcceptedTermsDate ||
            req.session.user.lastAcceptedTermsDate < process.env.LAST_MODIFIED_TERMS_OR_POLICY) {
            return res.redirect("/accept-new");
        } else if (req.route.path === "/uploads/thumbnails/:file_name") { // Allows to access thumbnails...
            return next();
        } else if ((req.params.file_name || req.params.public_id) && req.get("Referrer") && req.get("Referrer").includes(`/escapeRooms/${req.session.user.onlyForER}`)) {
            return next();
        } else if (req.session.user.anonymized) {
            if (req.session.user.onlyForER) {
                if (req.escapeRoom) {
                    if (req.escapeRoom.id == req.session.user.onlyForER) {
                        return next();
                    } else {
                        return res.redirect(`/escapeRooms/${req.session.user.onlyForER}`);
                    }
                } else {
                    return res.redirect(`/escapeRooms/${req.session.user.onlyForER}`);
                }
            } else {
                return res.redirect(`/?redir=${req.param("redir") || req.url}`);
            }
        } else {
            return next();
        }
    } else if ((req.params.file_name || req.params.public_id) && req.get("Referrer") && req.get("Referrer").includes("/escapeRooms/")) {
        return next();
    } else {
        return res.redirect(`/?redir=${req.param("redir") || req.url}`);
    }
};

exports.loginOrGuestAccessRequired = (req, res, next) => {
    if (req.session.user) {
        if (!req.session.user.lastAcceptedTermsDate ||
             req.session.user.lastAcceptedTermsDate < process.env.LAST_MODIFIED_TERMS_OR_POLICY) {
            res.redirect("/accept-new");
        } else {
            next();
        }
    } else if (req.escapeRoom && req.escapeRoom.allowGuests) {
        next();
    } else {
        res.redirect(`/?redir=${req.param("redir") || req.url}`);
    }
};

exports.adminOrAuthorOrCoauthorOrParticipantOrErPublicRequired = async(req, res, next) => {
    const er = req.escapeRoom;
    if (er && er.isFullyPublic()) {
        return next();
    }
    const user = req.session.user;
    if (user && (isAuthor(user, er) || isAdmin(user) || isCoAuthor(user,er))) {
        return next();
    }
    let participationEval = await isParticipant(user,er);
    if(participationEval.isParticipant === true){
        if(typeof participationEval.participant !== "undefined"){
            req.participant = participationEval.participant;
        }
        return next();
    }
    res.status(403);
    return next(new Error(res.locals.i18n.api.forbidden));
};

exports.logoutRequired = (req, res, next) => {
    if (!req.session.user) {
        next();
    } else {
        res.redirect("/escapeRooms");
    }
};

exports.deleteExpiredUserSession = (req, res, next) => {
    const {i18n} = res.locals;

    if (req.session.user) { // There exists a user session
        if (req.session.user.expires < Date.now()) { // Expired
            delete req.session.user; // Logout
            req.flash("info", i18n.user.sessionExpired);
        } else { // Not expired. Reset value.
            req.session.user.expires = Date.now() + maxIdleTime;
        }
    }
    // Continue with the request
    next();
};

// MW that allows to pass only if the logged user in is admin.
exports.adminRequired = (req, res, next) => {
    const user = req.session.user;
    if (user && isAdmin(user)) {
        return next();
    }
    res.status(403);
    next(new Error(res.locals.i18n.api.forbidden));
};

// MW that allows to pass only if the logged user in is not a student.
exports.teacherOrAdminRequired = (req, res, next) => {
    const user = req.session.user;
    if (user && (isStudent(user) === false)) {
        return next();
    }
    res.status(403);
    next(new Error(res.locals.i18n.api.forbidden));
};

// MW that allows to pass only if the logged user in is admin or student.
exports.studentOrAdminRequired = (req, res, next) => {
    const user = req.session.user;
    if (user && (isStudent(user) || isAdmin(user))) {
        return next();
    }
    res.status(403);
    next(new Error(res.locals.i18n.api.forbidden));
};

/*
 * MW that allows to pass only if the logged in user is:
 * - admin
 * - or is the user to be managed.
 */
exports.adminOrMyselfRequired = (req, res, next) => {
    const user = req.session.user;
    const isMyself = req.user.id === user.id;
    if (user && (isMyself || isAdmin(user))) {
        return next();
    }
    res.status(403);
    throw new Error(res.locals.i18n.api.forbidden);
};

// MW that allows actions only if the user logged in is admin or is the author of the escape room.
exports.adminOrAuthorRequired = (req, res, next) => {
    const user = req.session.user;
    const er = req.escapeRoom;
    if (user && (isAuthor(user, er) || isAdmin(user))) {
        return next();
    }
    res.status(403);
    next(new Error(res.locals.i18n.api.forbidden));
};

exports.adminOrCoAuthorRequired = (req, res, next) => {
    const user = req.session.user;
    const er = req.escapeRoom;
    if (user && (isAuthor(user, er) || isAdmin(user) || isCoAuthor(user,er))) {
        return next();
    }
    res.status(403);
    next(new Error(res.locals.i18n.api.forbidden));
};

// MW that allows actions only if the user logged in is admin, the author, or a participant of the escape room.
exports.adminOrAuthorOrCoauthorOrParticipantRequired = async (req, res, next) => {
    const user = req.session.user;
    const er = req.escapeRoom;
    if (user && (isAuthor(user, er) || isAdmin(user) || isCoAuthor(user,er))) {
        return next();
    }
    let participationEval = await isParticipant(user,er);
    if(participationEval.isParticipant === true){
        if(typeof participationEval.participant !== "undefined"){
            req.participant = participationEval.participant;
        }
        return next();
    }

    // This code should be in the controllers, not here.
    // try {
    //     if((er.status === "completed")||(user && isCoAuthorPending(user, er))){
    //         req.escapeRoom.subject = await models.subject.findAll({"where": {"escapeRoomId": req.escapeRoom.id}});
    //         res.render("escapeRooms/preview", {"escapeRoom": er, "user": user});
    //         return;
    //     } else {
    //         res.status(404);
    //         next(new Error(404));
    //     }
    // } catch (error) {
    //     return next(error);
    // }
    
    return next(new Error(res.locals.i18n.api.forbidden));
};

// MW that allows actions only if the user logged in is a participant of the escape room.
exports.participantRequired = async (req, res, next) => {
    const user = req.session.user;
    const er = req.escapeRoom;

    if (user && isAdmin(user)) {
        req.participant_is_admin = true;
        req.participant = user;
        return next();
    }

    let participationEval = await isParticipant(user,er,true);
    if(participationEval.isParticipant === true){
        if(typeof participationEval.participant !== "undefined"){
            req.participant = participationEval.participant;
        }
        return next();
    }

    return res.redirect("back");

    // This code should be in the controllers, not here.
    // if (isAdmin(user)) {
    //     const transaction = await sequelize.transaction();
    //     try {
    //         const player = await models.user.findByPk(user.id, {transaction});
    //         const testShift = await models.turno.findOne({"where": {"status": "test", "escapeRoomId": er.id}}, {transaction});
    //         const teamCreated = await models.team.create({ "name": `${player.alias}`, "turnoId": testShift.id}, {transaction});
    //         await teamCreated.addTeamMembers(player.id, {transaction});
    //         await models.participants.create({"attendance": false, "turnId": testShift.id, "userId": player.id}, {transaction});
    //         transaction.commit();
    //     } catch (error) {
    //         transaction.rollback();
    //         return next(error);
    //     }
    //     return next();
    // } else {
    //     return res.redirect("back");
    // }
};

exports.new = (req, res) => {
    // Page to go/show after login:
    const {redir} = req.query;
    if (req.session && req.session.user) {
        res.redirect(redir ? redir : "/escapeRooms");
        return;
    }
    res.render("index", {redir});
};

// POST /   -- Create the session if the user authenticates successfully
exports.create = async (req, res, next) => {
    const {redir, login, password} = req.body;
    const {i18n} = res.locals;

    try {
        const user = await authenticate((login || "").toLowerCase(), password);
        if (user) {
            if (user.anonymized && !req.body.anonymous) {
                req.flash("error", i18n.user.anonymizedCantLogin);
                res.render("index", {redir});
                return;
            }
            req.session.user = {
                "id": user.id,
                "name": user.alias,
                "username": user.username,
                "token": user.token,
                "isAdmin": user.isAdmin,
                "isStudent": user.isStudent,
                "anonymized": user.anonymized,
                "onlyForER": req.escapeRoom && req.escapeRoom.id,
                "lastAcceptedTermsDate": user.lastAcceptedTermsDate,
                "expires": Date.now() + maxIdleTime
            };
            req.session.save(() => {
                if (user.lang) {
                    res.cookie("locale", user.lang);
                }
                if (req.body.redir) {
                    res.redirect(req.body.redir);
                } else {
                    res.redirect("/escapeRooms");
                }
            });
        } else {
            req.flash("error", i18n.user.wrongCredentials);
            res.render("index", {redir});
        }
    } catch (error) {
        console.error(error);
        req.flash("error", `${error}`);
        next(error);
    }
};

// DELETE /  --  Close the session
exports.destroy = (req, res) => {
    req.session.destroy(() => {
        res.clearCookie("connect.sid", {"path": "/"});
        res.redirect("/"); // Redirect to login page
    });
};

// POST ACCEPT COOKIES
exports.cookieAccept = (req, res) => {
    res.cookie("cookieAccepted", "true", {
        "httpOnly": true,
        "secure": process.env.NODE_ENV === "production",
        "sameSite": "Strict",
        "maxAge": 1000 * 60 * 60 * 24 * 365 // 1 year
    });
    res.sendStatus(200);
};

exports.terms = async (req, res, next) => {
    const { i18n } = res.locals;
    const currentLang = i18n.lang;
    const section = "terms";
    const rootPath = path.join(__dirname, "../public");
    const op = { "root": rootPath };
    const fileToServe = await findFirstAvailableFile(section, currentLang);
    if (fileToServe) {
        res.sendFile(fileToServe, op);
    } else {
        res.sendFile("default_terms/default.html", op, (err) => {
            if (err) {
                next(err);
            }
        });
    }
};

exports.privacy = async (req, res, next) => {
    const { i18n } = res.locals;
    const currentLang = i18n.lang;
    const section = "privacy";
    const rootPath = path.join(__dirname, "../public");
    const op = { "root": rootPath };
    const fileToServe = await findFirstAvailableFile(section, currentLang);
    if (fileToServe) {
        res.sendFile(fileToServe, op);
    } else {
        res.sendFile("default_privacy/default.html", op, (err) => {
            if (err) {
                next(err);
            }
        });
    }
};

exports.cookiePolicy = async (req, res, next) => {
    const { i18n } = res.locals;
    const currentLang = i18n.lang;
    const section = "cookies";
    const rootPath = path.join(__dirname, "../public");
    const op = { "root": rootPath };
    const fileToServe = await findFirstAvailableFile(section, currentLang);
    if (fileToServe) {
        res.sendFile(fileToServe, op);
    } else {
        res.sendFile("default_cookies/default.html", op, (err) => {
            if (err) {
                next(err);
            }
        });
    }
};

exports.acceptNewShow = (req, res) => {
    res.render("users/new_terms", {});
};

exports.acceptNew = async (req, res, next) => {
    const {i18n} = res.locals;

    try {
        if (!req.session.user) {
            return res.status(401).send({ "error": i18n.api.unauthorized });
        }

        const userId = req.session.user.id;
        const lastAcceptedTermsDate = new Date();
        // Update the lastAcceptedTermsDate in the database

        await models.user.update(
            { lastAcceptedTermsDate },
            { "where": { "id": userId } }
        );

        // Update session user data
        req.session.user.lastAcceptedTermsDate = lastAcceptedTermsDate;

        // Redirect user to dashboard or another relevant page
        res.redirect("/"); // Adjust this route if needed
    } catch (error) {
        console.error(i18n.terms.error_accepting, error);
        next(error);
    }
};