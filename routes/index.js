const express = require("express"),
    router = express.Router();
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
const {instructions, thumbnails, hints, upload} = require("../controllers/multer_controller");


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


// Routes for LOGIN / REGISTER page /
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

// Routes for the resource /users
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

// Admin
router.get("/users/index", sessionController.loginRequired, sessionController.adminRequired, userController.index);
router.get("/escapeRoomsAdmin", sessionController.loginRequired, sessionController.adminRequired, escapeRoomController.admin);
router.get("/reports", sessionController.loginRequired, sessionController.adminRequired, managementController.showReports);
router.post("/reports/:reportId", sessionController.loginRequired, sessionController.adminRequired, managementController.editReport);
router.delete("/reports/:reportId", sessionController.loginRequired, sessionController.adminRequired, managementController.deleteReport);

// Routes for the resource /escapeRooms
router.get("/escapeRooms", sessionController.loginRequired, escapeRoomController.index);
router.get("/escapeRooms/:escapeRoomId(\\d+)", sessionController.loginRequired, sessionController.adminOrAuthorOrCoauthorOrParticipantRequired, escapeRoomController.show);
router.get("/escapeRooms/new", sessionController.loginRequired, sessionController.notStudentRequired, escapeRoomController.new);
router.post("/escapeRooms", sessionController.loginRequired, sessionController.notStudentRequired, thumbnails.single("image"), escapeRoomController.create);
router.get("/escapeRooms/:escapeRoomId(\\d+)/edit", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, escapeRoomController.edit);
router.put("/escapeRooms/:escapeRoomId(\\d+)", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, thumbnails.single("image"), escapeRoomController.update);
router.delete("/escapeRooms/:escapeRoomId(\\d+)", sessionController.loginRequired, sessionController.adminOrAuthorRequired, escapeRoomController.destroy);
router.put("/escapeRooms/:escapeRoomId(\\d+)/clone", sessionController.loginRequired, sessionController.notStudentRequired, escapeRoomController.clone);
router.get("/escapeRooms/:escapeRoomId(\\d+)/test", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, escapeRoomController.test);
router.post("/escapeRooms/:escapeRoomId(\\d+)/test", sessionController.loginRequired, sessionController.participantRequired, playController.startPlaying, playController.play);

// Edit escape room steps
router.get("/escapeRooms/:escapeRoomId(\\d+)/turnos", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, turnoController.turnos);
router.post("/escapeRooms/:escapeRoomId(\\d+)/turnos", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, turnoController.turnosUpdate);
router.get("/escapeRooms/:escapeRoomId(\\d+)/puzzles", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, puzzleController.retos);
router.post("/escapeRooms/:escapeRoomId(\\d+)/puzzles", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, puzzleController.retosUpdate);
router.get("/escapeRooms/:escapeRoomId(\\d+)/hints", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, hintController.pistas);
router.post("/escapeRooms/:escapeRoomId(\\d+)/hints", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, hints.single("hints"), hintController.pistasUpdate);
router.get("/escapeRooms/:escapeRoomId(\\d+)/assets", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, assetsController.assets);
router.post("/escapeRooms/:escapeRoomId(\\d+)/asset/:assetId(\\d+)", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, assetsController.editAsset);
router.get("/escapeRooms/:escapeRoomId(\\d+)/fetchAssets", sessionController.loginRequired, assetsController.fetchAssets);
router.post("/escapeRooms/:escapeRoomId(\\d+)/assets", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, upload.single("upload"), assetsController.assetsUpdate);
router.post("/escapeRooms/:escapeRoomId(\\d+)/uploadAssets", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, upload.single("asset"), assetsController.uploadAssets);
router.post("/escapeRooms/:escapeRoomId(\\d+)/deleteAssets/:assetId(\\d+)", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, assetsController.deleteAssets);
router.get("/escapeRooms/:escapeRoomId(\\d+)/evaluation", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, escapeRoomController.evaluation);
router.post("/escapeRooms/:escapeRoomId(\\d+)/evaluation", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, escapeRoomController.evaluationUpdate);
router.get("/escapeRooms/:escapeRoomId(\\d+)/indications", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, escapeRoomController.indicationsInterface);
router.post("/escapeRooms/:escapeRoomId(\\d+)/indications", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, escapeRoomController.indicationsInterfaceUpdate);
router.get("/escapeRooms/:escapeRoomId(\\d+)/after", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, escapeRoomController.afterInterface);
router.post("/escapeRooms/:escapeRoomId(\\d+)/after", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, escapeRoomController.afterInterfaceUpdate);
router.get("/escapeRooms/:escapeRoomId(\\d+)/sharing", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, escapeRoomController.sharing);
router.post("/escapeRooms/:escapeRoomId(\\d+)/sharing", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, instructions.single("instructions"), escapeRoomController.sharingUpdate);
router.get("/escapeRooms/:escapeRoomId(\\d+)/team", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, escapeRoomController.teamInterface);
router.post("/escapeRooms/:escapeRoomId(\\d+)/team", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, escapeRoomController.teamInterfaceUpdate);
router.get("/escapeRooms/:escapeRoomId(\\d+)/class", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, escapeRoomController.classInterface);
router.post("/escapeRooms/:escapeRoomId(\\d+)/class", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, escapeRoomController.classInterfaceUpdate);
router.get("/escapeRooms/:escapeRoomId(\\d+)/reusablePuzzleInstance/new", sessionController.loginRequired, reusablePuzzleController.renderPuzzleConfiguration);
router.post("/escapeRooms/:escapeRoomId(\\d+)/reusablePuzzleInstance", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, reusablePuzzleController.upsertReusablePuzzleInstance, escapeRoomController.teamInterface);
router.get("/escapeRooms/:escapeRoomId(\\d+)/reusablePuzzleInstance/:reusablePuzzleInstanceId", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, reusablePuzzleController.renderEditPuzzleConfiguration);
router.post("/escapeRooms/:escapeRoomId(\\d+)/reusablePuzzleInstance/:reusablePuzzleInstanceId", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, reusablePuzzleController.upsertReusablePuzzleInstance);
router.delete("/escapeRooms/:escapeRoomId(\\d+)/reusablePuzzleInstance/:reusablePuzzleInstanceId", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, reusablePuzzleController.deleteReusablePuzzleInstance);
router.get("/escapeRooms/:escapeRoomId(\\d+)/reusablePuzzleInstances/:reusablePuzzleInstanceId/render", sessionController.loginRequired, reusablePuzzleController.renderReusablePuzzle);
router.get("/escapeRooms/:escapeRoomId(\\d+)/report", sessionController.loginRequired, managementController.showReportForm);
router.post("/escapeRooms/:escapeRoomId(\\d+)/report", sessionController.loginRequired, managementController.generateReport);
router.get("/escapeRooms/:escapeRoomId(\\d+)/contact", sessionController.loginRequired, managementController.showContact);

// Routes for starting/stopping shifts
router.get("/escapeRooms/:escapeRoomId(\\d+)/activate", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, turnoController.indexActivate);
router.put("/escapeRooms/:escapeRoomId(\\d+)/activate", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, turnoController.activate);
router.post("/escapeRooms/:escapeRoomId(\\d+)/turnos/new", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, turnoController.create);
router.post("/escapeRooms/:escapeRoomId(\\d+)/turnos/:turnoId(\\d+)/reset", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, turnoController.reset);
router.put("/escapeRooms/:escapeRoomId(\\d+)/turnos/:turnoId(\\d+)", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, turnoController.update);
router.delete("/escapeRooms/:escapeRoomId(\\d+)/turnos/:turnoId(\\d+)", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, turnoController.destroy);

// Routes for hint app
router.get("/escapeRooms/:escapeRoomId(\\d+)/hintApp", sessionController.loginRequired, sessionController.adminOrAuthorOrCoauthorOrParticipantRequired, hintController.hintApp);
router.get("/escapeRooms/:escapeRoomId(\\d+)/hintAppWrapper", sessionController.loginRequired, sessionController.adminOrAuthorOrCoauthorOrParticipantRequired, hintController.hintAppWrapper);
router.get("/escapeRooms/:escapeRoomId(\\d+)/xml", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, hintController.downloadMoodleXML);

// Routes for playing - student
router.post("/escapeRooms/:escapeRoomId(\\d+)/play", sessionController.loginRequired, sessionController.participantRequired, turnoController.isTurnNotPending, playController.startPlaying, playController.play);
router.get("/escapeRooms/:escapeRoomId(\\d+)/play", sessionController.loginRequired, sessionController.participantRequired, turnoController.isTurnNotPending, turnoController.isTurnStarted, playController.play);
router.get("/escapeRooms/:escapeRoomId(\\d+)/finish", sessionController.loginRequired, sessionController.participantRequired, turnoController.isTurnNotPending, turnoController.isTurnStarted, playController.ranking, playController.finish, playController.results);
router.get("/escapeRooms/:escapeRoomId(\\d+)/results", sessionController.loginRequired, sessionController.participantRequired, turnoController.isTurnNotPending, turnoController.isTurnStarted, playController.ranking, playController.results);

// Routes for playing - teacher
router.get("/escapeRooms/:escapeRoomId(\\d+)/collaborators", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, escapeRoomController.showCollaborators);
router.post("/escapeRooms/:escapeRoomId(\\d+)/collaborators", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, escapeRoomController.addCollaborators);
router.delete("/escapeRooms/:escapeRoomId(\\d+)/collaborators", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, escapeRoomController.deleteCollaborators);
router.get("/escapeRooms/:escapeRoomId(\\d+)/message", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, playController.ranking, playController.writeMessage);
router.post("/escapeRooms/:escapeRoomId(\\d+)/message", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, playController.ranking, playController.sendMessage);
router.get("/escapeRooms/:escapeRoomId(\\d+)/project", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, playController.ranking, playController.classInterface);
router.get("/escapeRooms/:escapeRoomId(\\d+)/turnos/:turnoId(\\d+)/play", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, playController.ranking, playController.classInterface);
router.get("/escapeRooms/:escapeRoomId(\\d+)/turnos/:turnoId(\\d+)/finish", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, playController.ranking, playController.finish, playController.results);
router.post("/escapeRooms/:escapeRoomId(\\d+)/confirm", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, participantController.confirmAttendance);
router.post("/escapeRooms/:escapeRoomId(\\d+)/puzzles/:puzzleId(\\d+)/check", sessionController.loginRequired, sessionController.adminOrAuthorOrCoauthorOrParticipantRequired, apiController.checkParticipantSession, apiController.checkPuzzleSolution);

// Routes for the resource participants of a turn
router.get("/escapeRooms/:escapeRoomId(\\d+)/participants", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, participantController.index);
router.get("/escapeRooms/:escapeRoomId(\\d+)/teams", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, teamController.index);
router.delete("/escapeRooms/:escapeRoomId(\\d+)/turno/:turnoId(\\d+)/team/:teamId(\\d+)/user/:userId(\\d+)", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, participantController.studentLeave);
router.delete("/escapeRooms/:escapeRoomId(\\d+)/turno/:turnoId(\\d+)/team/:teamId(\\d+)", sessionController.loginRequired, participantController.studentLeave);
router.put("/escapeRooms/:escapeRoomId(\\d+)/turnos/:turnoId(\\d+)/teams/:teamId(\\d+)/reset", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, teamController.resetProgress);
router.delete("/escapeRooms/:escapeRoomId(\\d+)/turnos/:turnoId(\\d+)/teams/:teamId(\\d+)", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, teamController.delete);

// Routes for the resource /teams
router.get("/escapeRooms/:escapeRoomId(\\d+)/join", sessionController.loginRequired, participantController.isNotAuthorOrCoAuthorOrAdmin, participantController.checkIsNotParticipant, participantController.checkSomeTurnAvailable, joinController.main);
router.post("/escapeRooms/:escapeRoomId(\\d+)/join", sessionController.loginRequired, participantController.isNotAuthorOrCoAuthorOrAdmin, participantController.checkIsNotParticipant, participantController.checkSomeTurnAvailable, joinController.indexTurnos, teamController.create);
router.get("/escapeRooms/:escapeRoomId(\\d+)/turnos/:turnoId(\\d+)/select", sessionController.loginRequired, participantController.isNotAuthorOrCoAuthorOrAdmin, participantController.checkIsNotParticipant, participantController.checkTurnAvailable, joinController.mainTurnos, teamController.create);
router.post("/escapeRooms/:escapeRoomId(\\d+)/turnos/:turnoId(\\d+)/select", sessionController.loginRequired, participantController.isNotAuthorOrCoAuthorOrAdmin, participantController.checkIsNotParticipant, participantController.checkTurnAvailable, joinController.mainTurnos, teamController.create);
// Router.get("/escapeRooms/:escapeRoomId(\\d+)/turnos/:turnoId(\\d+)/", sessionController.loginRequired, participantController.isNotAuthorOrCoAuthorOrAdmin, participantController.checkIsNotParticipant, participantController.checkTurnAvailable, turnoController.password);
router.post("/escapeRooms/:escapeRoomId(\\d+)/turnos/:turnoId(\\d+)", sessionController.loginRequired, participantController.isNotAuthorOrCoAuthorOrAdmin, joinController.checkJoinToken, participantController.checkIsNotParticipant, participantController.checkTurnAvailable, joinController.selectTurno, teamController.create);

router.get("/escapeRooms/:escapeRoomId(\\d+)/turnos/:turnoId(\\d+)/teams", sessionController.loginRequired, participantController.isNotAuthorOrCoAuthorOrAdmin, joinController.checkJoinToken, participantController.checkIsNotParticipant, participantController.checkTurnAvailable, teamController.indexTurnos);
router.get("/escapeRooms/:escapeRoomId(\\d+)/turnos/:turnoId(\\d+)/teams/new", sessionController.loginRequired, participantController.isNotAuthorOrCoAuthorOrAdmin, joinController.checkJoinToken, participantController.checkIsNotParticipant, participantController.checkTurnAvailable, teamController.new);
router.post("/escapeRooms/:escapeRoomId(\\d+)/turnos/:turnoId(\\d+)/teams", sessionController.loginRequired, participantController.isNotAuthorOrCoAuthorOrAdmin, joinController.checkJoinToken, participantController.checkIsNotParticipant, participantController.checkTurnAvailable, teamController.create);
router.put("/escapeRooms/:escapeRoomId(\\d+)/turnos/:turnoId(\\d+)/teams/:teamId(\\d+)", sessionController.loginRequired, participantController.isNotAuthorOrCoAuthorOrAdmin, joinController.checkJoinToken, participantController.checkIsNotParticipant, participantController.checkTurnAvailable, participantController.checkTeamAvailable, membersController.add);

// Routes for learning analytics
router.get("/escapeRooms/:escapeRoomId/analytics/", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, analyticsController.analytics);
router.get("/escapeRooms/:escapeRoomId/analytics/ranking", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, analyticsController.ranking);
router.get("/escapeRooms/:escapeRoomId/analytics/timeline", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, analyticsController.timeline);
router.get("/escapeRooms/:escapeRoomId/analytics/progress", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, analyticsController.progress);
router.get("/escapeRooms/:escapeRoomId/analytics/histogram", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, analyticsController.histogram);
router.get("/escapeRooms/:escapeRoomId/analytics/hints/participants", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, analyticsController.hintsByParticipants);
router.get("/escapeRooms/:escapeRoomId/analytics/hints/teams", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, analyticsController.hintsByTeams);
router.get("/escapeRooms/:escapeRoomId/analytics/puzzles/participants", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, analyticsController.puzzlesByParticipants);
router.get("/escapeRooms/:escapeRoomId/analytics/puzzles/teams", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, analyticsController.puzzlesByTeams);
router.get("/escapeRooms/:escapeRoomId/analytics/puzzles", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, analyticsController.puzzleStats);
router.get("/escapeRooms/:escapeRoomId/analytics/grading", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, analyticsController.grading);
router.get("/escapeRooms/:escapeRoomId/analytics/download", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, analyticsController.download);
router.get("/escapeRooms/:escapeRoomId/analytics/download_raw", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, analyticsController.downloadRaw);

// Routes for guide/apps/resources
router.get("/inspiration", escapeRoomController.showGuide);

// Routes for reusablePuzzles
router.post("/reusablePuzzles", sessionController.loginRequired, sessionController.loginRequired, upload.fields([{"name": "thumbnail", "maxCount": 1}, {"name": "file", "maxCount": 1}, {"name": "instructions", "maxCount": 10}]), reusablePuzzleController.createReusablePuzzle);
router.get("/reusablePuzzles", sessionController.loginRequired, reusablePuzzleController.getReusablePuzzles);
router.put("/reusablePuzzles/:puzzle_id", sessionController.loginRequired, sessionController.loginRequired, upload.fields([{"name": "thumbnail", "maxCount": 1}, {"name": "file", "maxCount": 1}]), reusablePuzzleController.editReusablePuzzle);
router.get("/reusablePuzzles/new", sessionController.loginRequired, reusablePuzzleController.renderCreatePuzzle);
router.get("/reusablePuzzles/:reusablePuzzleId", sessionController.loginRequired, reusablePuzzleController.getReusablePuzzle);
router.get("/reusablePuzzles/:puzzle_id/:file_name(*)", sessionController.loginRequired, assetsController.getReusablePuzzleAsset);
router.get("/reusablePuzzles/installed/:puzzle_id/:file_name(*)", sessionController.loginRequired, assetsController.getReusablePuzzleAsset);
router.delete("/reusablePuzzles/:puzzle_id", sessionController.loginRequired, sessionController.loginRequired, reusablePuzzleController.deleteReusablePuzzle);
router.get("/escapeRooms/:escapeRoomId/browse", sessionController.loginRequired, sessionController.adminOrCoAuthorRequired, assetsController.browse);
router.get("/reusablePuzzlesInstances/:puzzle_id/form", sessionController.loginRequired, assetsController.getFormForInstance);
router.get("/reusablePuzzlePreview/:reusablePuzzleId", reusablePuzzleController.renderReusablePuzzlePreview);

// Routes for assets
router.get("/uploads/webapps/:public_id/:file_name(*)", sessionController.loginRequired, assetsController.getWebAppAsset);
router.get("/uploads/thumbnails/:file_name", sessionController.loginRequired, assetsController.returnThumbnail);
router.get("/uploads/instructions/:file_name", sessionController.loginRequired, assetsController.returnInstructions);

router.get("/uploads/:public_id", sessionController.loginRequired, assetsController.getAsset);

module.exports = router;
