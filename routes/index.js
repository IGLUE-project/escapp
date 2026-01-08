const express = require("express");
const router = express.Router();
const escapeRoomController = require("../controllers/escapeRoom_controller");
const turnoController = require("../controllers/turnos_controller");
const puzzleController = require("../controllers/puzzle_controller");
const hintController = require("../controllers/hint_controller");
const userController = require("../controllers/user_controller");
const sessionController = require("../controllers/session_controller");
const teamController = require("../controllers/team_controller");
const assetsController = require("../controllers/assets_controller");
const participantController = require("../controllers/participants_controller");
const playController = require("../controllers/play_controller");
const membersController = require("../controllers/members_controller");
const analyticsController = require("../controllers/analytics_controller");
const apiController = require("../controllers/api_controller");
const joinController = require("../controllers/join_controller");
const reusablePuzzleController = require("../controllers/reusable_puzzle_controller");
const managementController = require("../controllers/management_controller");
const sceneController = require("../controllers/scene_controller");
const { instructions, thumbnails, hints, upload, hybridInstructions } = require("../controllers/multer_controller");

router.all("*", sessionController.deleteExpiredUserSession);


// History: Restoration routes.

// Redirection to the saved restoration route.
const redirectBack = (req, res) => {
    const url = req.session.backURL;

    delete req.session.backURL;
    res.redirect(url);
};

// Save the route that will be the current restoration route.
const saveBack = (req, res, next) => {
    req.session.backURL = req.url;
    next();
};

router.get([
    "/",
    "/escapeRooms"
], saveBack);

router.get("/goback", redirectBack);

// Autoload for routes using :escapeRoomId
router.param("escapeRoomId", escapeRoomController.load);
router.param("turnoId", turnoController.load);
router.param("puzzleId", puzzleController.load);
router.param("hintId", hintController.load);
router.param("userId", userController.load);
router.param("teamId", teamController.load);

// Routes for LOGIN / REGISTER page
router.get("/", sessionController.new); // Login form
router.post("/", sessionController.create); // Create sesion
router.delete("/", sessionController.destroy); // Close sesion
router.get("/register", sessionController.logoutRequired, userController.new);
router.post("/accept-cookies", sessionController.cookieAccept);
router.get("/terms", sessionController.terms);
router.get("/privacy", sessionController.privacy);
router.get("/cookies", sessionController.cookiePolicy);
router.get("/accept-new", sessionController.acceptNewShow);
router.post("/accept-new", sessionController.acceptNew);

// Routes for users
router.get("/users/:userId(\\d+)", sessionController.loginRequired, sessionController.adminOrMyselfRequired, userController.show);
router.get("/users/password-reset", sessionController.logoutRequired, userController.resetPassword);
router.get("/users/password-reset/:userId(\\d+)", sessionController.logoutRequired, userController.resetPasswordHash);
router.post("/users/password-reset", sessionController.logoutRequired, userController.newResetPassword);
router.post("/users/password-reset/:userId(\\d+)", sessionController.logoutRequired, userController.newResetPasswordHash);
router.post("/users", sessionController.logoutRequired, userController.create, sessionController.create);
router.get("/users/:userId(\\d+)/edit", sessionController.loginRequired, sessionController.adminOrMyselfRequired, userController.edit);
router.put("/users/:userId(\\d+)", sessionController.loginRequired, sessionController.adminOrMyselfRequired, userController.update);
router.delete("/users/:userId(\\d+)", sessionController.loginRequired, sessionController.adminOrMyselfRequired, userController.destroy);
router.get("/users/:userId(\\d+)/escapeRooms", sessionController.loginRequired, sessionController.adminOrMyselfRequired, escapeRoomController.index);
router.get("/users/resend-confirmation/:userId(\\d+)", userController.resendConfirmationEmail);
router.get("/users/confirm/:userId(\\d+)", userController.confirmEmail);

// Routes for admins
router.get("/users/index", sessionController.loginRequired, sessionController.adminRequired, userController.index);
router.get("/escapeRoomsAdmin", sessionController.loginRequired, sessionController.adminRequired, escapeRoomController.admin);
router.get("/reports", sessionController.loginRequired, sessionController.adminRequired, managementController.showReports);
router.post("/reports/:reportId", sessionController.loginRequired, sessionController.adminRequired, managementController.editReport);
router.delete("/reports/:reportId", sessionController.loginRequired, sessionController.adminRequired, managementController.deleteReport);
router.post("/escapeRooms/:escapeRoomId(\\d+)/verify", sessionController.loginRequired, sessionController.adminRequired, escapeRoomController.verify);
router.put("/users/:userId(\\d+)/confirm", sessionController.loginRequired, sessionController.adminRequired, userController.confirmAdmin);

// Routes for escapeRooms
router.get("/escapeRooms", sessionController.loginRequired, escapeRoomController.index);
router.get("/escapeRooms/:escapeRoomId(\\d+)", sessionController.loginOrGuestAccessRequired, sessionController.authShowEscapeRoom, escapeRoomController.show);
router.get("/escapeRooms/:escapeRoomId(\\d+)/ready", sessionController.loginOrGuestAccessRequired, sessionController.authPlayEscapeRoom, escapeRoomController.ready);
router.get("/escapeRooms/new", sessionController.loginRequired, sessionController.authCreateEscapeRoom, escapeRoomController.new);
router.post("/escapeRooms", sessionController.loginRequired, sessionController.authCreateEscapeRoom, thumbnails.single("image"), escapeRoomController.create);
router.get("/escapeRooms/:escapeRoomId(\\d+)/edit", sessionController.loginRequired, sessionController.authEditEscapeRoom, escapeRoomController.edit);
router.put("/escapeRooms/:escapeRoomId(\\d+)", sessionController.loginRequired, sessionController.authEditEscapeRoom, thumbnails.single("image"), escapeRoomController.update);
router.delete("/escapeRooms/:escapeRoomId(\\d+)", sessionController.loginRequired, sessionController.authDeleteEscapeRoom, escapeRoomController.destroy);
router.put("/escapeRooms/:escapeRoomId(\\d+)/clone", sessionController.loginRequired, sessionController.authCreateEscapeRoom, escapeRoomController.clone);
router.get("/escapeRooms/:escapeRoomId(\\d+)/test", sessionController.loginRequired, sessionController.authEditEscapeRoom, escapeRoomController.test);
router.post("/escapeRooms/:escapeRoomId(\\d+)/test", sessionController.loginRequired, sessionController.authEditEscapeRoom, playController.startPlaying, playController.play);
router.get("/escapeRooms/:escapeRoomId(\\d+)/export", sessionController.loginRequired, sessionController.authShowEscapeRoom, escapeRoomController.export);
router.get("/escapeRooms/:escapeRoomId(\\d+)/thumbnail", escapeRoomController.returnThumbnail);

// Edit escape room steps
router.get("/escapeRooms/:escapeRoomId(\\d+)/settings", sessionController.loginRequired, sessionController.authEditEscapeRoom, escapeRoomController.settings);
router.get("/escapeRooms/:escapeRoomId(\\d+)/puzzles", sessionController.loginRequired, sessionController.authEditEscapeRoom, puzzleController.retos);
router.post("/escapeRooms/:escapeRoomId(\\d+)/puzzles", sessionController.loginRequired, sessionController.authEditEscapeRoom, puzzleController.retosUpdate);
router.get("/escapeRooms/:escapeRoomId(\\d+)/hints", sessionController.loginRequired, sessionController.authEditEscapeRoom, hintController.hints);
router.post("/escapeRooms/:escapeRoomId(\\d+)/hints", sessionController.loginRequired, sessionController.authEditEscapeRoom, hints.single("hints"), hintController.updateHints);
router.get("/escapeRooms/:escapeRoomId(\\d+)/indications", sessionController.loginRequired, sessionController.authEditEscapeRoom, escapeRoomController.indicationsInterface);
router.post("/escapeRooms/:escapeRoomId(\\d+)/indications", sessionController.loginRequired, sessionController.authEditEscapeRoom, hybridInstructions.single("hybrid"), escapeRoomController.indicationsInterfaceUpdate);
router.get("/escapeRooms/:escapeRoomId(\\d+)/team", sessionController.loginRequired, sessionController.authEditEscapeRoom, escapeRoomController.teamInterface);
router.post("/escapeRooms/:escapeRoomId(\\d+)/team", sessionController.loginRequired, sessionController.authEditEscapeRoom, escapeRoomController.teamInterfaceUpdate);
router.get("/escapeRooms/:escapeRoomId(\\d+)/class", sessionController.loginRequired, sessionController.authEditEscapeRoom, escapeRoomController.classInterface);
router.post("/escapeRooms/:escapeRoomId(\\d+)/class", sessionController.loginRequired, sessionController.authEditEscapeRoom, escapeRoomController.classInterfaceUpdate);
router.get("/escapeRooms/:escapeRoomId(\\d+)/after", sessionController.loginRequired, sessionController.authEditEscapeRoom, escapeRoomController.afterInterface);
router.post("/escapeRooms/:escapeRoomId(\\d+)/after", sessionController.loginRequired, sessionController.authEditEscapeRoom, escapeRoomController.afterInterfaceUpdate);
router.get("/escapeRooms/:escapeRoomId(\\d+)/evaluation", sessionController.loginRequired, sessionController.authEditEscapeRoom, escapeRoomController.evaluation);
router.post("/escapeRooms/:escapeRoomId(\\d+)/evaluation", sessionController.loginRequired, sessionController.authEditEscapeRoom, escapeRoomController.evaluationUpdate);
router.get("/escapeRooms/:escapeRoomId(\\d+)/sharing", sessionController.loginRequired, sessionController.authEditEscapeRoom, escapeRoomController.sharing);
router.post("/escapeRooms/:escapeRoomId(\\d+)/sharing", sessionController.loginRequired, sessionController.authEditEscapeRoom, instructions.single("instructions"), escapeRoomController.sharingUpdate);

// Manage escape rooms
// Collaborators
router.get("/escapeRooms/:escapeRoomId(\\d+)/collaborators", sessionController.loginRequired, sessionController.authEditEscapeRoom, escapeRoomController.showCollaborators);
router.post("/escapeRooms/:escapeRoomId(\\d+)/collaborators", sessionController.loginRequired, sessionController.authEditEscapeRoom, escapeRoomController.addCollaborators);
router.put("/escapeRooms/:escapeRoomId(\\d+)/confirmCoAuthor", sessionController.loginRequired, sessionController.authCreateEscapeRoom, escapeRoomController.confirmCollaborators);
router.delete("/escapeRooms/:escapeRoomId(\\d+)/collaborators", sessionController.loginRequired, sessionController.authEditEscapeRoom, escapeRoomController.deleteCollaborators);
// Shifts
router.get("/escapeRooms/:escapeRoomId(\\d+)/turnos", sessionController.loginRequired, sessionController.authEditEscapeRoom, turnoController.turnos);
router.post("/escapeRooms/:escapeRoomId(\\d+)/turnos", sessionController.loginRequired, sessionController.authEditEscapeRoom, turnoController.turnosUpdate);
router.delete("/escapeRooms/:escapeRoomId(\\d+)/turno/:turnoId(\\d+)/team/:teamId(\\d+)/user/:userId(\\d+)", sessionController.loginRequired, sessionController.authEditOrPlayEscapeRoom, participantController.studentLeave);
router.delete("/escapeRooms/:escapeRoomId(\\d+)/turno/:turnoId(\\d+)/team/:teamId(\\d+)", sessionController.loginRequired, sessionController.authPlayEscapeRoom, participantController.studentLeave);
router.put("/escapeRooms/:escapeRoomId(\\d+)/turnos/:turnoId(\\d+)/teams/:teamId(\\d+)/reset", sessionController.loginRequired, sessionController.authEditEscapeRoom, teamController.resetProgress);
router.delete("/escapeRooms/:escapeRoomId(\\d+)/turnos/:turnoId(\\d+)/teams/:teamId(\\d+)", sessionController.loginRequired, sessionController.authEditEscapeRoom, teamController.delete);
// Starting/stopping shifts
router.get("/escapeRooms/:escapeRoomId(\\d+)/activate", sessionController.loginRequired, sessionController.authEditEscapeRoom, turnoController.indexActivate);
router.put("/escapeRooms/:escapeRoomId(\\d+)/activate", sessionController.loginRequired, sessionController.authEditEscapeRoom, turnoController.activate);
router.post("/escapeRooms/:escapeRoomId(\\d+)/turnos/new", sessionController.loginRequired, sessionController.authEditEscapeRoom, turnoController.create);
router.post("/escapeRooms/:escapeRoomId(\\d+)/turnos/:turnoId(\\d+)/reset", sessionController.loginRequired, sessionController.authEditEscapeRoom, turnoController.reset);
router.put("/escapeRooms/:escapeRoomId(\\d+)/turnos/:turnoId(\\d+)", sessionController.loginRequired, sessionController.authEditEscapeRoom, turnoController.update);
router.delete("/escapeRooms/:escapeRoomId(\\d+)/turnos/:turnoId(\\d+)", sessionController.loginRequired, sessionController.authEditEscapeRoom, turnoController.destroy);
// Participants
router.get("/escapeRooms/:escapeRoomId(\\d+)/participants", sessionController.loginRequired, sessionController.authEditEscapeRoom, participantController.index);
router.get("/escapeRooms/:escapeRoomId(\\d+)/teams", sessionController.loginRequired, sessionController.authEditEscapeRoom, teamController.index);
// Reports
router.get("/escapeRooms/:escapeRoomId(\\d+)/report", sessionController.loginRequired, managementController.showReportForm);
router.post("/escapeRooms/:escapeRoomId(\\d+)/report", sessionController.loginRequired, managementController.generateReport);
// Contact
router.get("/escapeRooms/:escapeRoomId(\\d+)/contact", sessionController.loginRequired, managementController.showContact);

// Routes for hint app
router.get("/escapeRooms/:escapeRoomId(\\d+)/hintApp", sessionController.loginRequired, sessionController.authEditOrPlayEscapeRoom, hintController.hintApp);
router.get("/escapeRooms/:escapeRoomId(\\d+)/hintAppWrapper", sessionController.loginRequired, sessionController.authEditOrPlayEscapeRoom, hintController.hintAppWrapper);
router.get("/escapeRooms/:escapeRoomId(\\d+)/quizFile", sessionController.loginRequired, sessionController.authEditOrPlayEscapeRoom, hintController.downloadQuiz);

// Routes for playing - student
router.post("/escapeRooms/:escapeRoomId(\\d+)/play", sessionController.loginRequired, sessionController.authPlayEscapeRoom, turnoController.isTurnNotPending, playController.startPlaying, playController.play);
router.get("/escapeRooms/:escapeRoomId(\\d+)/play", sessionController.loginRequired, sessionController.authPlayEscapeRoom, turnoController.isTurnNotPending, turnoController.isTurnStarted, playController.play);
router.get("/escapeRooms/:escapeRoomId(\\d+)/finish", sessionController.loginRequired, sessionController.authPlayEscapeRoom, turnoController.isTurnNotPending, turnoController.isTurnStarted, playController.ranking, playController.finish, playController.results);
router.get("/escapeRooms/:escapeRoomId(\\d+)/results", sessionController.loginRequired, sessionController.authPlayEscapeRoom, turnoController.isTurnNotPending, turnoController.isTurnStarted, playController.ranking, playController.results);

// Routes for playing - teacher
router.get("/escapeRooms/:escapeRoomId(\\d+)/message", sessionController.loginRequired, sessionController.authEditEscapeRoom, playController.ranking, playController.writeMessage);
router.post("/escapeRooms/:escapeRoomId(\\d+)/message", sessionController.loginRequired, sessionController.authEditEscapeRoom, playController.ranking, playController.sendMessage);
router.get("/escapeRooms/:escapeRoomId(\\d+)/project", sessionController.loginRequired, sessionController.authEditEscapeRoom, playController.ranking, playController.classInterface);
router.get("/escapeRooms/:escapeRoomId(\\d+)/turnos/:turnoId(\\d+)/play", sessionController.loginRequired, sessionController.authEditEscapeRoom, playController.ranking, playController.classInterface);
router.get("/escapeRooms/:escapeRoomId(\\d+)/turnos/:turnoId(\\d+)/finish", sessionController.loginRequired, sessionController.authEditEscapeRoom, playController.ranking, playController.finish, playController.results);
router.post("/escapeRooms/:escapeRoomId(\\d+)/confirm", sessionController.loginRequired, sessionController.authEditEscapeRoom, participantController.confirmAttendance);
router.post("/escapeRooms/:escapeRoomId(\\d+)/puzzles/:puzzleId(\\d+)/check", sessionController.loginRequired, sessionController.authEditOrPlayEscapeRoom, apiController.checkParticipantSession, apiController.checkPuzzleSolution);

// Routes for the resource /teams
router.get("/escapeRooms/:escapeRoomId(\\d+)/join", sessionController.loginRequired, escapeRoomController.isStatusCompleted, sessionController.authJoinEscapeRoom, participantController.checkIsNotParticipant, participantController.checkSomeTurnAvailable, joinController.main);
router.post("/escapeRooms/:escapeRoomId(\\d+)/join", sessionController.loginRequired, escapeRoomController.isStatusCompleted, sessionController.authJoinEscapeRoom, participantController.checkIsNotParticipant, participantController.checkSomeTurnAvailable, joinController.indexTurnos, teamController.create);
router.post("/escapeRooms/:escapeRoomId/join-anon", sessionController.loginOrGuestAccessRequired, joinController.joinAnonymous, sessionController.create);
router.get("/escapeRooms/:escapeRoomId(\\d+)/turnos/:turnoId(\\d+)/select", sessionController.loginRequired, escapeRoomController.isStatusCompleted, sessionController.authJoinEscapeRoom, participantController.checkIsNotParticipant, participantController.checkTurnAvailable, joinController.mainTurnos, teamController.create);
router.post("/escapeRooms/:escapeRoomId(\\d+)/turnos/:turnoId(\\d+)/select", sessionController.loginRequired, escapeRoomController.isStatusCompleted, sessionController.authJoinEscapeRoom, participantController.checkIsNotParticipant, participantController.checkTurnAvailable, joinController.mainTurnos, teamController.create);
router.post("/escapeRooms/:escapeRoomId(\\d+)/turnos/:turnoId(\\d+)", sessionController.loginRequired, escapeRoomController.isStatusCompleted, sessionController.authJoinEscapeRoom, joinController.checkJoinToken, participantController.checkIsNotParticipant, participantController.checkTurnAvailable, joinController.selectTurno, teamController.create);
router.get("/escapeRooms/:escapeRoomId(\\d+)/turnos/:turnoId(\\d+)/teams", sessionController.loginRequired, escapeRoomController.isStatusCompleted, sessionController.authJoinEscapeRoom, joinController.checkJoinToken, participantController.checkIsNotParticipant, participantController.checkTurnAvailable, teamController.indexTurnos);
router.get("/escapeRooms/:escapeRoomId(\\d+)/turnos/:turnoId(\\d+)/teams/new", sessionController.loginRequired, escapeRoomController.isStatusCompleted, sessionController.authJoinEscapeRoom, joinController.checkJoinToken, participantController.checkIsNotParticipant, participantController.checkTurnAvailable, teamController.new);
router.post("/escapeRooms/:escapeRoomId(\\d+)/turnos/:turnoId(\\d+)/teams", sessionController.loginRequired, escapeRoomController.isStatusCompleted, sessionController.authJoinEscapeRoom, joinController.checkJoinToken, participantController.checkIsNotParticipant, participantController.checkTurnAvailable, teamController.create);
router.put("/escapeRooms/:escapeRoomId(\\d+)/turnos/:turnoId(\\d+)/teams/:teamId(\\d+)", sessionController.loginRequired, escapeRoomController.isStatusCompleted, sessionController.authJoinEscapeRoom, joinController.checkJoinToken, participantController.checkIsNotParticipant, participantController.checkTurnAvailable, participantController.checkTeamAvailable, membersController.add);

// Routes for learning analytics
router.get("/escapeRooms/:escapeRoomId/analytics/", sessionController.loginRequired, sessionController.authEditEscapeRoom, analyticsController.analytics);
router.get("/escapeRooms/:escapeRoomId/analytics/ranking", sessionController.loginRequired, sessionController.authEditEscapeRoom, analyticsController.ranking);
router.get("/escapeRooms/:escapeRoomId/analytics/timeline", sessionController.loginRequired, sessionController.authEditEscapeRoom, analyticsController.timeline);
router.get("/escapeRooms/:escapeRoomId/analytics/progress", sessionController.loginRequired, sessionController.authEditEscapeRoom, analyticsController.progress);
router.get("/escapeRooms/:escapeRoomId/analytics/histogram", sessionController.loginRequired, sessionController.authEditEscapeRoom, analyticsController.histogram);
router.get("/escapeRooms/:escapeRoomId/analytics/hints/participants", sessionController.loginRequired, sessionController.authEditEscapeRoom, analyticsController.hintsByParticipants);
router.get("/escapeRooms/:escapeRoomId/analytics/hints/teams", sessionController.loginRequired, sessionController.authEditEscapeRoom, analyticsController.hintsByTeams);
router.get("/escapeRooms/:escapeRoomId/analytics/puzzles/participants", sessionController.loginRequired, sessionController.authEditEscapeRoom, analyticsController.puzzlesByParticipants);
router.get("/escapeRooms/:escapeRoomId/analytics/puzzles/teams", sessionController.loginRequired, sessionController.authEditEscapeRoom, analyticsController.puzzlesByTeams);
router.get("/escapeRooms/:escapeRoomId/analytics/puzzles", sessionController.loginRequired, sessionController.authEditEscapeRoom, analyticsController.puzzleStats);
router.get("/escapeRooms/:escapeRoomId/analytics/grading", sessionController.loginRequired, sessionController.authEditEscapeRoom, analyticsController.grading);
router.get("/escapeRooms/:escapeRoomId/analytics/download", sessionController.loginRequired, sessionController.authEditEscapeRoom, analyticsController.download);
router.get("/escapeRooms/:escapeRoomId/analytics/download_raw", sessionController.loginRequired, sessionController.authEditEscapeRoom, analyticsController.downloadRaw);

// Routes for scenes
router.get("/escapeRooms/:escapeRoomId/scenes/new", sessionController.loginRequired, sessionController.authEditEscapeRoom, sceneController.newScene);
router.get("/escapeRooms/:escapeRoomId/scenes/:sceneId/framed", sessionController.loginRequired, sessionController.authEditOrPlayEscapeRoom, sceneController.show_framed);
router.get("/escapeRooms/:escapeRoomId/scenes/:sceneId", sessionController.loginRequired, sessionController.authEditOrPlayEscapeRoom, sceneController.show);
router.post("/escapeRooms/:escapeRoomId/scenes", sessionController.loginRequired, sessionController.authEditEscapeRoom, sceneController.createScene);
router.get("/escapeRooms/:escapeRoomId/scenes/:sceneId/edit", sessionController.loginRequired, sessionController.authEditEscapeRoom, sceneController.editScene);
router.put("/escapeRooms/:escapeRoomId/scenes/:sceneId/edit", sessionController.loginRequired, sessionController.authEditEscapeRoom, sceneController.updateScene);
router.delete("/escapeRooms/:escapeRoomId/scenes/:sceneId", sessionController.loginRequired, sessionController.authEditEscapeRoom, sceneController.deleteScene);
router.get("/scene_maker/viewer", sessionController.loginRequired, sceneController.preview);
router.get("/scene_maker/preview", sessionController.loginRequired, sceneController.preview);
router.get("/scene_maker/editor", sessionController.loginRequired, sceneController.editor);

// Routes for guide/apps/resources
router.get("/inspiration", escapeRoomController.showGuide);

// Routes for reusablePuzzles and reusablePuzzleInstances
router.get("/escapeRooms/:escapeRoomId(\\d+)/reusablePuzzleInstance/new", sessionController.loginRequired, sessionController.authEditEscapeRoom, reusablePuzzleController.renderPuzzleConfiguration);
router.post("/escapeRooms/:escapeRoomId(\\d+)/reusablePuzzleInstance", sessionController.loginRequired, sessionController.authEditEscapeRoom, reusablePuzzleController.upsertReusablePuzzleInstance, escapeRoomController.teamInterface);
router.get("/escapeRooms/:escapeRoomId(\\d+)/reusablePuzzleInstance/:reusablePuzzleInstanceId", sessionController.loginRequired, sessionController.authEditEscapeRoom, reusablePuzzleController.renderEditPuzzleConfiguration);
router.post("/escapeRooms/:escapeRoomId(\\d+)/reusablePuzzleInstance/:reusablePuzzleInstanceId", sessionController.loginRequired, sessionController.authEditEscapeRoom, reusablePuzzleController.upsertReusablePuzzleInstance);
router.delete("/escapeRooms/:escapeRoomId(\\d+)/reusablePuzzleInstance/:reusablePuzzleInstanceId", sessionController.loginRequired, sessionController.authEditEscapeRoom, reusablePuzzleController.deleteReusablePuzzleInstance);
router.get("/escapeRooms/:escapeRoomId(\\d+)/reusablePuzzleInstances/:reusablePuzzleInstanceId/render", sessionController.loginRequired, sessionController.authEditOrPlayEscapeRoom, reusablePuzzleController.renderReusablePuzzle);
router.post("/reusablePuzzles", sessionController.loginRequired, sessionController.adminRequired, upload.fields([{ "name": "thumbnail", "maxCount": 1 }, { "name": "file", "maxCount": 1 }, { "name": "instructions", "maxCount": 10 }]), reusablePuzzleController.createReusablePuzzle);
router.get("/reusablePuzzles", sessionController.loginRequired, sessionController.adminRequired, reusablePuzzleController.getReusablePuzzles);
router.put("/reusablePuzzles/:puzzle_id", sessionController.loginRequired, sessionController.adminRequired, upload.fields([{ "name": "thumbnail", "maxCount": 1 }, { "name": "file", "maxCount": 1 }]), reusablePuzzleController.editReusablePuzzle);
router.get("/reusablePuzzles/new", sessionController.loginRequired, sessionController.adminRequired, reusablePuzzleController.renderCreatePuzzle);
router.get("/reusablePuzzles/:reusablePuzzleId", sessionController.loginRequired, sessionController.adminRequired, reusablePuzzleController.getReusablePuzzle);
router.get("/reusablePuzzles/:puzzle_id/:file_name(*)", reusablePuzzleController.getReusablePuzzleAsset);
router.get("/reusablePuzzles/installed/:puzzle_id/:file_name(*)", reusablePuzzleController.getReusablePuzzleAsset);
router.delete("/reusablePuzzles/:puzzle_id", sessionController.loginRequired, sessionController.adminRequired, reusablePuzzleController.deleteReusablePuzzle);
router.get("/reusablePuzzlesInstances/:puzzle_id/form", sessionController.loginRequired, sessionController.authCreateEscapeRoom, reusablePuzzleController.getFormForInstance);
router.get("/reusablePuzzlePreview/:reusablePuzzleId", sessionController.authCreateEscapeRoom, reusablePuzzleController.renderReusablePuzzlePreview);

// Routes for assets
router.post("/escapeRooms/:escapeRoomId(\\d+)/assets/new", sessionController.loginRequired, sessionController.authEditEscapeRoom, upload.single("asset"), assetsController.uploadAsset);
router.put("/escapeRooms/:escapeRoomId(\\d+)/assets/:assetId(\\d+)", sessionController.loginRequired, sessionController.authEditEscapeRoom, assetsController.editAsset);
router.delete("/escapeRooms/:escapeRoomId(\\d+)/assets/:assetId(\\d+)", sessionController.loginRequired, sessionController.authEditEscapeRoom, assetsController.deleteAsset);
router.get("/escapeRooms/:escapeRoomId(\\d+)/browseResources", sessionController.loginRequired, sessionController.authEditEscapeRoom, assetsController.browseResources);
router.get("/assets/:asset_id.:asset_extension", assetsController.getAsset);
router.get("/assets/:asset_id/:file_name", assetsController.getAsset);
router.get("/uploads/webapps/:file_id/:webapp_file_name(*)", assetsController.getWebAppFile);
router.get("/uploads/instructions/:file_name", assetsController.returnInstructions);
router.get("/uploads/hybrid/:file_name", assetsController.returnHybridInstructions);
router.get("/uploads/:asset_id/:file_name?", assetsController.getAsset);

module.exports = router;
