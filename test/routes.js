
// Routes accessible without authentication
exports.publicRoutes = (escapeRoomId, userId, puzzleId, turnoId, teamId) => [
    // Login/Register pages
    {"route": "/", "statusCode": 200, "description": "Login form"},
    {"route": "/register", "statusCode": 200, "description": "Registration form"},
    {"route": "/terms", "statusCode": 301, "description": "Terms page"},
    {"route": "/privacy", "statusCode": 301, "description": "Privacy page"},
    {"route": "/cookies", "statusCode": 301, "description": "Cookie policy page"},
    {"route": "/accept-new", "statusCode": 302, "description": "Accept new terms - redirects to login"},

    // Password reset
    {"route": "/users/password-reset", "statusCode": 200, "description": "Password reset form"},
    {"route": `/users/password-reset/${userId}`, "statusCode": 404, "description": "Password reset with hash - user not found"},

    // Public resources
    {"route": "/inspiration", "statusCode": 200, "description": "Inspiration/guide page"},
    {"route": `/escapeRooms/${escapeRoomId}/thumbnail`, "statusCode": 200, "description": "Escape room thumbnail"},

    // Routes that require login - should redirect (302)
    {"route": `/users/${userId}`, "statusCode": 302, "description": "User profile - requires login"},
    {"route": `/users/${userId}/edit`, "statusCode": 302, "description": "Edit user - requires login"},
    {"route": `/users/${userId}/escapeRooms`, "statusCode": 302, "description": "User escape rooms - requires login"},
    {"route": "/users/index", "statusCode": 302, "description": "Users list - requires admin"},
    {"route": "/escapeRooms", "statusCode": 302, "description": "Escape rooms list - requires login"},
    {"route": "/escapeRoomsAdmin", "statusCode": 302, "description": "Admin escape rooms - requires admin"},
    {"route": `/escapeRooms/${escapeRoomId}`, "statusCode": 302, "description": "Show escape room - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/ready`, "statusCode": 302, "description": "Ready page - requires login"},
    {"route": "/escapeRooms/new", "statusCode": 302, "description": "New escape room - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/edit`, "statusCode": 302, "description": "Edit escape room - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/settings`, "statusCode": 302, "description": "Settings - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/puzzles`, "statusCode": 302, "description": "Puzzles - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/hints`, "statusCode": 302, "description": "Hints - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/indications`, "statusCode": 302, "description": "Indications - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/team`, "statusCode": 302, "description": "Team interface - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/class`, "statusCode": 302, "description": "Class interface - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/after`, "statusCode": 302, "description": "After interface - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/evaluation`, "statusCode": 302, "description": "Evaluation - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/sharing`, "statusCode": 302, "description": "Sharing - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/activate`, "statusCode": 302, "description": "Activate - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/participants`, "statusCode": 302, "description": "Participants - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/teams`, "statusCode": 302, "description": "Teams - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/collaborators`, "statusCode": 302, "description": "Collaborators - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/join`, "statusCode": 302, "description": "Join - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/play`, "statusCode": 302, "description": "Play - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/results`, "statusCode": 302, "description": "Results - forbidden without auth"},
    {"route": `/escapeRooms/${escapeRoomId}/finish`, "statusCode": 302, "description": "Finish - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/hintApp`, "statusCode": 302, "description": "Hint app - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/hintAppWrapper`, "statusCode": 302, "description": "Hint app wrapper - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/test`, "statusCode": 302, "description": "Test mode - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/export`, "statusCode": 302, "description": "Export - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/report`, "statusCode": 302, "description": "Report form - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/contact`, "statusCode": 302, "description": "Contact - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/message`, "statusCode": 302, "description": "Message - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/turnos/${turnoId}/play`, "statusCode": 302, "description": "Teacher play - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/turnos/${turnoId}/finish`, "statusCode": 302, "description": "Teacher finish - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/turnos/${turnoId}/teams`, "statusCode": 302, "description": "Teams list - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/turnos/${turnoId}/teams/new`, "statusCode": 302, "description": "New team - requires login"},

    // Analytics - requires login
    {"route": `/escapeRooms/${escapeRoomId}/analytics/`, "statusCode": 302, "description": "Analytics - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/ranking`, "statusCode": 302, "description": "Ranking - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/timeline`, "statusCode": 302, "description": "Timeline - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/progress`, "statusCode": 302, "description": "Progress - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/histogram`, "statusCode": 302, "description": "Histogram - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/hints/participants`, "statusCode": 302, "description": "Hints by participants - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/hints/teams`, "statusCode": 302, "description": "Hints by teams - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/puzzles/participants`, "statusCode": 302, "description": "Puzzles by participants - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/puzzles/teams`, "statusCode": 302, "description": "Puzzles by teams - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/puzzles`, "statusCode": 302, "description": "Puzzle stats - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/grading`, "statusCode": 302, "description": "Grading - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/download`, "statusCode": 302, "description": "Download analytics - requires login"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/download_raw`, "statusCode": 302, "description": "Download raw - requires login"},

    // Admin routes - requires login
    {"route": "/reports", "statusCode": 302, "description": "Reports - requires admin"},
    {"route": "/environment", "statusCode": 302, "description": "Environment settings - requires admin"},
    {"route": "/escapeRooms/import", "statusCode": 302, "description": "Import - requires admin"},
    {"route": "/reusablePuzzles", "statusCode": 302, "description": "Reusable puzzles - requires admin"},
    {"route": "/reusablePuzzles/new", "statusCode": 302, "description": "New reusable puzzle - requires admin"},

    // Network
    {"route": "/network/search", "statusCode": 200, "description": "Network search page"},
    {"route": "/network/query", "statusCode": 302, "description": "Network query - requires login"},

    // Scene maker
    {"route": "/scene_maker/viewer", "statusCode": 302, "description": "Scene viewer - requires login"},
    {"route": "/scene_maker/preview", "statusCode": 302, "description": "Scene preview - requires login"},
    {"route": "/scene_maker/editor", "statusCode": 302, "description": "Scene editor - requires login"}
];

// Routes for authenticated students
exports.studentRoutes = (escapeRoomId, userId, puzzleId, turnoId, teamId) => [
    // Login/Register - redirects when logged in
    {"route": "/", "statusCode": 302, "description": "Login - redirects when logged in"},
    {"route": "/register", "statusCode": 302, "description": "Register - redirects when logged in"},
    {"route": "/users/password-reset", "statusCode": 302, "description": "Password reset - redirects when logged in"},
    {"route": `/users/password-reset/${userId}`, "statusCode": 302, "description": "Password reset hash - redirects when logged in"},

    // Public pages
    {"route": "/terms", "statusCode": 301, "description": "Terms page"},
    {"route": "/privacy", "statusCode": 301, "description": "Privacy page"},
    {"route": "/cookies", "statusCode": 301, "description": "Cookie policy page"},
    {"route": "/inspiration", "statusCode": 200, "description": "Inspiration/guide page"},

    // User routes - own profile
    {"route": `/users/${userId}`, "statusCode": 200, "description": "Own profile"},
    {"route": `/users/${userId}/edit`, "statusCode": 200, "description": "Edit own profile"},
    {"route": `/users/${userId}/escapeRooms`, "statusCode": 200, "description": "Own escape rooms"},

    // Admin routes - forbidden
    {"route": "/users/index", "statusCode": 403, "description": "Users list - admin only"},
    {"route": "/escapeRoomsAdmin", "statusCode": 403, "description": "Admin escape rooms - admin only"},
    {"route": "/reports", "statusCode": 403, "description": "Reports - admin only"},
    {"route": "/environment", "statusCode": 403, "description": "Environment settings - admin only"},
    {"route": "/escapeRooms/import", "statusCode": 403, "description": "Import - admin only"},
    {"route": "/reusablePuzzles", "statusCode": 403, "description": "Reusable puzzles - admin only"},
    {"route": "/reusablePuzzles/new", "statusCode": 403, "description": "New reusable puzzle - admin only"},

    // Escape room viewing
    {"route": "/escapeRooms", "statusCode": 200, "description": "Escape rooms list"},
    {"route": `/escapeRooms/${escapeRoomId}`, "statusCode": 200, "description": "Show escape room"},
    {"route": `/escapeRooms/${escapeRoomId}/ready`, "statusCode": 200, "description": "Ready page"},
    {"route": `/escapeRooms/${escapeRoomId}/thumbnail`, "statusCode": 200, "description": "Thumbnail"},

    // Escape room creation/editing - forbidden for students
    {"route": "/escapeRooms/new", "statusCode": 403, "description": "New escape room - teachers only"},
    {"route": `/escapeRooms/${escapeRoomId}/edit`, "statusCode": 403, "description": "Edit - teachers only"},
    {"route": `/escapeRooms/${escapeRoomId}/settings`, "statusCode": 403, "description": "Settings - teachers only"},
    {"route": `/escapeRooms/${escapeRoomId}/puzzles`, "statusCode": 403, "description": "Puzzles - teachers only"},
    {"route": `/escapeRooms/${escapeRoomId}/hints`, "statusCode": 403, "description": "Hints - teachers only"},
    {"route": `/escapeRooms/${escapeRoomId}/indications`, "statusCode": 403, "description": "Indications - teachers only"},
    {"route": `/escapeRooms/${escapeRoomId}/team`, "statusCode": 403, "description": "Team interface - teachers only"},
    {"route": `/escapeRooms/${escapeRoomId}/class`, "statusCode": 403, "description": "Class interface - teachers only"},
    {"route": `/escapeRooms/${escapeRoomId}/after`, "statusCode": 403, "description": "After interface - teachers only"},
    {"route": `/escapeRooms/${escapeRoomId}/evaluation`, "statusCode": 403, "description": "Evaluation - teachers only"},
    {"route": `/escapeRooms/${escapeRoomId}/sharing`, "statusCode": 403, "description": "Sharing - teachers only"},
    {"route": `/escapeRooms/${escapeRoomId}/activate`, "statusCode": 403, "description": "Activate - teachers only"},
    {"route": `/escapeRooms/${escapeRoomId}/participants`, "statusCode": 403, "description": "Participants - teachers only"},
    {"route": `/escapeRooms/${escapeRoomId}/teams`, "statusCode": 403, "description": "Teams management - teachers only"},
    {"route": `/escapeRooms/${escapeRoomId}/collaborators`, "statusCode": 403, "description": "Collaborators - teachers only"},
    {"route": `/escapeRooms/${escapeRoomId}/test`, "statusCode": 403, "description": "Test mode - teachers only"},
    {"route": `/escapeRooms/${escapeRoomId}/export`, "statusCode": 403, "description": "Export - teachers only"},
    {"route": `/escapeRooms/${escapeRoomId}/message`, "statusCode": 403, "description": "Message - teachers only"},

    // Playing escape rooms - student access
    {"route": `/escapeRooms/${escapeRoomId}/join`, "statusCode": 302, "description": "Join - redirects based on status"},
    {"route": `/escapeRooms/${escapeRoomId}/play`, "statusCode": 302, "description": "Play - redirects based on participation"},
    {"route": `/escapeRooms/${escapeRoomId}/results`, "statusCode": 200, "description": "Results - student can see own results"},
    {"route": `/escapeRooms/${escapeRoomId}/finish`, "statusCode": 200, "description": "Finish - student can finish"},
    {"route": `/escapeRooms/${escapeRoomId}/hintApp`, "statusCode": 200, "description": "Hint app"},
    {"route": `/escapeRooms/${escapeRoomId}/hintAppWrapper`, "statusCode": 200, "description": "Hint app wrapper"},
    {"route": `/escapeRooms/${escapeRoomId}/report`, "statusCode": 200, "description": "Report form"},
    {"route": `/escapeRooms/${escapeRoomId}/contact`, "statusCode": 200, "description": "Contact"},

    // Teacher play routes - forbidden for students
    {"route": `/escapeRooms/${escapeRoomId}/turnos/${turnoId}/play`, "statusCode": 403, "description": "Teacher play - teachers only"},
    {"route": `/escapeRooms/${escapeRoomId}/turnos/${turnoId}/finish`, "statusCode": 403, "description": "Teacher finish - teachers only"},

    // Join team routes
    {"route": `/escapeRooms/${escapeRoomId}/turnos/${turnoId}/teams`, "statusCode": 302, "description": "Teams list - redirects"},
    {"route": `/escapeRooms/${escapeRoomId}/turnos/${turnoId}/teams/new`, "statusCode": 302, "description": "New team - redirects"},
    {"route": `/escapeRooms/${escapeRoomId}/turnos/${turnoId}/teams?token=testToken`, "statusCode": 302, "description": "Teams with token - redirects"},
    {"route": `/escapeRooms/${escapeRoomId}/turnos/${turnoId}/teams/new?token=testToken`, "statusCode": 302, "description": "New team with token - redirects"},

    // Analytics - forbidden for students
    {"route": `/escapeRooms/${escapeRoomId}/analytics/`, "statusCode": 403, "description": "Analytics - teachers only"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/ranking`, "statusCode": 403, "description": "Ranking - teachers only"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/timeline`, "statusCode": 403, "description": "Timeline - teachers only"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/progress`, "statusCode": 403, "description": "Progress - teachers only"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/histogram`, "statusCode": 403, "description": "Histogram - teachers only"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/hints/participants`, "statusCode": 403, "description": "Hints by participants - teachers only"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/hints/teams`, "statusCode": 403, "description": "Hints by teams - teachers only"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/puzzles/participants`, "statusCode": 403, "description": "Puzzles by participants - teachers only"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/puzzles/teams`, "statusCode": 403, "description": "Puzzles by teams - teachers only"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/puzzles`, "statusCode": 403, "description": "Puzzle stats - teachers only"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/grading`, "statusCode": 403, "description": "Grading - teachers only"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/download`, "statusCode": 403, "description": "Download - teachers only"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/download_raw`, "statusCode": 403, "description": "Download raw - teachers only"},

    // Network
    {"route": "/network/search", "statusCode": 200, "description": "Network search page"},
    {"route": "/network/query", "statusCode": 200, "description": "Network query"},

    // Scene maker
    {"route": "/scene_maker/viewer", "statusCode": 200, "description": "Scene viewer"},
    {"route": "/scene_maker/preview", "statusCode": 200, "description": "Scene preview"},
    {"route": "/scene_maker/editor", "statusCode": 200, "description": "Scene editor"}
];

// Routes for authenticated teachers (escape room owner)
exports.teacherRoutes = (escapeRoomId, userId, puzzleId, turnoId, teamId) => [
    // Login/Register - redirects when logged in
    {"route": "/", "statusCode": 302, "description": "Login - redirects when logged in"},
    {"route": "/register", "statusCode": 302, "description": "Register - redirects when logged in"},
    {"route": "/users/password-reset", "statusCode": 302, "description": "Password reset - redirects when logged in"},
    {"route": `/users/password-reset/${userId}`, "statusCode": 302, "description": "Password reset hash - redirects when logged in"},

    // Public pages
    {"route": "/terms", "statusCode": 301, "description": "Terms page"},
    {"route": "/privacy", "statusCode": 301, "description": "Privacy page"},
    {"route": "/cookies", "statusCode": 301, "description": "Cookie policy page"},
    {"route": "/inspiration", "statusCode": 200, "description": "Inspiration/guide page"},

    // User routes - own profile
    {"route": `/users/${userId}`, "statusCode": 200, "description": "Own profile"},
    {"route": `/users/${userId}/edit`, "statusCode": 200, "description": "Edit own profile"},
    {"route": `/users/${userId}/escapeRooms`, "statusCode": 200, "description": "Own escape rooms"},

    // Admin routes - forbidden for teachers
    {"route": "/users/index", "statusCode": 403, "description": "Users list - admin only"},
    {"route": "/escapeRoomsAdmin", "statusCode": 403, "description": "Admin escape rooms - admin only"},
    {"route": "/reports", "statusCode": 403, "description": "Reports - admin only"},
    {"route": "/environment", "statusCode": 403, "description": "Environment settings - admin only"},
    {"route": "/escapeRooms/import", "statusCode": 403, "description": "Import - admin only"},
    {"route": "/reusablePuzzles", "statusCode": 403, "description": "Reusable puzzles - admin only"},
    {"route": "/reusablePuzzles/new", "statusCode": 403, "description": "New reusable puzzle - admin only"},

    // Escape room viewing
    {"route": "/escapeRooms", "statusCode": 200, "description": "Escape rooms list"},
    {"route": `/escapeRooms/${escapeRoomId}`, "statusCode": 302, "description": "Show escape room"},
    {"route": `/escapeRooms/${escapeRoomId}/ready`, "statusCode": 302, "description": "Ready page"},
    {"route": `/escapeRooms/${escapeRoomId}/thumbnail`, "statusCode": 200, "description": "Thumbnail"},

    // Escape room creation/editing - allowed for teachers (owner)
    {"route": "/escapeRooms/new", "statusCode": 200, "description": "New escape room"},
    {"route": `/escapeRooms/${escapeRoomId}/edit`, "statusCode": 200, "description": "Edit escape room"},
    {"route": `/escapeRooms/${escapeRoomId}/settings`, "statusCode": 200, "description": "Settings"},
    {"route": `/escapeRooms/${escapeRoomId}/puzzles`, "statusCode": 200, "description": "Puzzles"},
    {"route": `/escapeRooms/${escapeRoomId}/hints`, "statusCode": 200, "description": "Hints"},
    {"route": `/escapeRooms/${escapeRoomId}/indications`, "statusCode": 200, "description": "Indications"},
    {"route": `/escapeRooms/${escapeRoomId}/team`, "statusCode": 200, "description": "Team interface"},
    {"route": `/escapeRooms/${escapeRoomId}/class`, "statusCode": 200, "description": "Class interface"},
    {"route": `/escapeRooms/${escapeRoomId}/after`, "statusCode": 200, "description": "After interface"},
    {"route": `/escapeRooms/${escapeRoomId}/evaluation`, "statusCode": 200, "description": "Evaluation"},
    {"route": `/escapeRooms/${escapeRoomId}/sharing`, "statusCode": 200, "description": "Sharing"},
    {"route": `/escapeRooms/${escapeRoomId}/activate`, "statusCode": 200, "description": "Activate"},
    {"route": `/escapeRooms/${escapeRoomId}/participants`, "statusCode": 200, "description": "Participants"},
    {"route": `/escapeRooms/${escapeRoomId}/teams`, "statusCode": 200, "description": "Teams management"},
    {"route": `/escapeRooms/${escapeRoomId}/collaborators`, "statusCode": 200, "description": "Collaborators"},
    {"route": `/escapeRooms/${escapeRoomId}/test`, "statusCode": 200, "description": "Test mode"},
    {"route": `/escapeRooms/${escapeRoomId}/export`, "statusCode": 200, "description": "Export"},
    {"route": `/escapeRooms/${escapeRoomId}/message`, "statusCode": 200, "description": "Message"},
    {"route": `/escapeRooms/${escapeRoomId}/report`, "statusCode": 200, "description": "Report form"},
    {"route": `/escapeRooms/${escapeRoomId}/contact`, "statusCode": 200, "description": "Contact"},
    {"route": `/escapeRooms/${escapeRoomId}/browseResources`, "statusCode": 200, "description": "Browse resources"},

    // Playing escape rooms - teacher can't join as student
    {"route": `/escapeRooms/${escapeRoomId}/join`, "statusCode": 403, "description": "Join - teachers can't join own escape room"},
    {"route": `/escapeRooms/${escapeRoomId}/play`, "statusCode": 302, "description": "Play - redirects"},
    {"route": `/escapeRooms/${escapeRoomId}/results`, "statusCode": 302, "description": "Results - redirects"},
    {"route": `/escapeRooms/${escapeRoomId}/finish`, "statusCode": 302, "description": "Finish - redirects"},
    {"route": `/escapeRooms/${escapeRoomId}/hintApp`, "statusCode": 200, "description": "Hint app"},
    {"route": `/escapeRooms/${escapeRoomId}/hintAppWrapper`, "statusCode": 200, "description": "Hint app wrapper"},
    {"route": `/escapeRooms/${escapeRoomId}/quizFile`, "statusCode": 200, "description": "Quiz file download"},

    // Teacher play routes
    {"route": `/escapeRooms/${escapeRoomId}/turnos/${turnoId}/play`, "statusCode": 200, "description": "Teacher play view"},
    {"route": `/escapeRooms/${escapeRoomId}/turnos/${turnoId}/finish`, "statusCode": 200, "description": "Teacher finish view"},

    // Join team routes - forbidden for teachers
    {"route": `/escapeRooms/${escapeRoomId}/turnos/${turnoId}/teams`, "statusCode": 403, "description": "Teams list - students only"},
    {"route": `/escapeRooms/${escapeRoomId}/turnos/${turnoId}/teams/new`, "statusCode": 403, "description": "New team - students only"},

    // Analytics - allowed for teachers (owner)
    {"route": `/escapeRooms/${escapeRoomId}/analytics/`, "statusCode": 200, "description": "Analytics"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/ranking`, "statusCode": 200, "description": "Ranking"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/timeline`, "statusCode": 200, "description": "Timeline"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/progress`, "statusCode": 200, "description": "Progress"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/histogram`, "statusCode": 200, "description": "Histogram"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/hints/participants`, "statusCode": 200, "description": "Hints by participants"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/hints/teams`, "statusCode": 200, "description": "Hints by teams"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/puzzles/participants`, "statusCode": 200, "description": "Puzzles by participants"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/puzzles/teams`, "statusCode": 200, "description": "Puzzles by teams"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/puzzles`, "statusCode": 200, "description": "Puzzle stats"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/grading`, "statusCode": 200, "description": "Grading"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/download`, "statusCode": 200, "description": "Download analytics"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/download_raw`, "statusCode": 200, "description": "Download raw"},

    // Scenes
    {"route": `/escapeRooms/${escapeRoomId}/scenes/new`, "statusCode": 200, "description": "New scene"},

    // Reusable puzzle instances
    {"route": `/escapeRooms/${escapeRoomId}/reusablePuzzleInstance/new`, "statusCode": 200, "description": "New reusable puzzle instance"},

    // Network
    {"route": "/network/search", "statusCode": 200, "description": "Network search page"},
    {"route": "/network/query", "statusCode": 200, "description": "Network query"},

    // Scene maker
    {"route": "/scene_maker/viewer", "statusCode": 200, "description": "Scene viewer"},
    {"route": "/scene_maker/preview", "statusCode": 200, "description": "Scene preview"},
    {"route": "/scene_maker/editor", "statusCode": 200, "description": "Scene editor"}
];

// Routes for authenticated admins
exports.adminRoutes = (escapeRoomId, userId, puzzleId, turnoId, teamId) => [
    // Login/Register - redirects when logged in
    {"route": "/", "statusCode": 302, "description": "Login - redirects when logged in"},
    {"route": "/register", "statusCode": 302, "description": "Register - redirects when logged in"},
    {"route": "/users/password-reset", "statusCode": 302, "description": "Password reset - redirects when logged in"},
    {"route": `/users/password-reset/${userId}`, "statusCode": 302, "description": "Password reset hash - redirects when logged in"},

    // Public pages
    {"route": "/terms", "statusCode": 301, "description": "Terms page"},
    {"route": "/privacy", "statusCode": 301, "description": "Privacy page"},
    {"route": "/cookies", "statusCode": 301, "description": "Cookie policy page"},
    {"route": "/inspiration", "statusCode": 200, "description": "Inspiration/guide page"},

    // User routes - admin can access all users
    {"route": `/users/${userId}`, "statusCode": 200, "description": "User profile"},
    {"route": `/users/${userId}/edit`, "statusCode": 200, "description": "Edit user"},
    {"route": `/users/${userId}/escapeRooms`, "statusCode": 200, "description": "User escape rooms"},

    // Admin-only routes - allowed
    {"route": "/users/index", "statusCode": 200, "description": "Users list"},
    {"route": "/escapeRoomsAdmin", "statusCode": 200, "description": "Admin escape rooms"},
    {"route": "/reports", "statusCode": 200, "description": "Reports"},
    {"route": "/environment", "statusCode": 200, "description": "Environment settings"},
    {"route": "/escapeRooms/import", "statusCode": 200, "description": "Import escape room"},
    {"route": "/reusablePuzzles", "statusCode": 200, "description": "Reusable puzzles"},
    {"route": "/reusablePuzzles/new", "statusCode": 200, "description": "New reusable puzzle"},

    // Escape room viewing
    {"route": "/escapeRooms", "statusCode": 200, "description": "Escape rooms list"},
    {"route": `/escapeRooms/${escapeRoomId}`, "statusCode": 200, "description": "Show escape room"},
    {"route": `/escapeRooms/${escapeRoomId}/ready`, "statusCode": 200, "description": "Ready page"},
    {"route": `/escapeRooms/${escapeRoomId}/thumbnail`, "statusCode": 200, "description": "Thumbnail"},

    // Escape room creation/editing - admin has full access
    {"route": "/escapeRooms/new", "statusCode": 200, "description": "New escape room"},
    {"route": `/escapeRooms/${escapeRoomId}/edit`, "statusCode": 200, "description": "Edit escape room"},
    {"route": `/escapeRooms/${escapeRoomId}/settings`, "statusCode": 200, "description": "Settings"},
    {"route": `/escapeRooms/${escapeRoomId}/puzzles`, "statusCode": 200, "description": "Puzzles"},
    {"route": `/escapeRooms/${escapeRoomId}/hints`, "statusCode": 200, "description": "Hints"},
    {"route": `/escapeRooms/${escapeRoomId}/indications`, "statusCode": 200, "description": "Indications"},
    {"route": `/escapeRooms/${escapeRoomId}/team`, "statusCode": 200, "description": "Team interface"},
    {"route": `/escapeRooms/${escapeRoomId}/class`, "statusCode": 200, "description": "Class interface"},
    {"route": `/escapeRooms/${escapeRoomId}/after`, "statusCode": 200, "description": "After interface"},
    {"route": `/escapeRooms/${escapeRoomId}/evaluation`, "statusCode": 200, "description": "Evaluation"},
    {"route": `/escapeRooms/${escapeRoomId}/sharing`, "statusCode": 200, "description": "Sharing"},
    {"route": `/escapeRooms/${escapeRoomId}/activate`, "statusCode": 200, "description": "Activate"},
    {"route": `/escapeRooms/${escapeRoomId}/participants`, "statusCode": 200, "description": "Participants"},
    {"route": `/escapeRooms/${escapeRoomId}/teams`, "statusCode": 200, "description": "Teams management"},
    {"route": `/escapeRooms/${escapeRoomId}/collaborators`, "statusCode": 200, "description": "Collaborators"},
    {"route": `/escapeRooms/${escapeRoomId}/test`, "statusCode": 200, "description": "Test mode"},
    {"route": `/escapeRooms/${escapeRoomId}/export`, "statusCode": 200, "description": "Export"},
    {"route": `/escapeRooms/${escapeRoomId}/message`, "statusCode": 200, "description": "Message"},
    {"route": `/escapeRooms/${escapeRoomId}/report`, "statusCode": 200, "description": "Report form"},
    {"route": `/escapeRooms/${escapeRoomId}/contact`, "statusCode": 200, "description": "Contact"},
    {"route": `/escapeRooms/${escapeRoomId}/browseResources`, "statusCode": 200, "description": "Browse resources"},
    {"route": `/escapeRooms/${escapeRoomId}/hintApp`, "statusCode": 200, "description": "Hint app"},
    {"route": `/escapeRooms/${escapeRoomId}/hintAppWrapper`, "statusCode": 200, "description": "Hint app wrapper"},
    {"route": `/escapeRooms/${escapeRoomId}/quizFile`, "statusCode": 200, "description": "Quiz file download"},

    // Teacher play routes - admin can access
    {"route": `/escapeRooms/${escapeRoomId}/turnos/${turnoId}/play`, "statusCode": 200, "description": "Teacher play view"},
    {"route": `/escapeRooms/${escapeRoomId}/turnos/${turnoId}/finish`, "statusCode": 200, "description": "Teacher finish view"},

    // Analytics - admin has full access
    {"route": `/escapeRooms/${escapeRoomId}/analytics/`, "statusCode": 200, "description": "Analytics"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/ranking`, "statusCode": 200, "description": "Ranking"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/timeline`, "statusCode": 200, "description": "Timeline"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/progress`, "statusCode": 200, "description": "Progress"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/histogram`, "statusCode": 200, "description": "Histogram"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/hints/participants`, "statusCode": 200, "description": "Hints by participants"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/hints/teams`, "statusCode": 200, "description": "Hints by teams"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/puzzles/participants`, "statusCode": 200, "description": "Puzzles by participants"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/puzzles/teams`, "statusCode": 200, "description": "Puzzles by teams"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/puzzles`, "statusCode": 200, "description": "Puzzle stats"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/grading`, "statusCode": 200, "description": "Grading"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/download`, "statusCode": 200, "description": "Download analytics"},
    {"route": `/escapeRooms/${escapeRoomId}/analytics/download_raw`, "statusCode": 200, "description": "Download raw"},

    // Scenes
    {"route": `/escapeRooms/${escapeRoomId}/scenes/new`, "statusCode": 200, "description": "New scene"},

    // Reusable puzzle instances
    {"route": `/escapeRooms/${escapeRoomId}/reusablePuzzleInstance/new`, "statusCode": 200, "description": "New reusable puzzle instance"},

    // Network
    {"route": "/network/search", "statusCode": 200, "description": "Network search page"},
    {"route": "/network/query", "statusCode": 200, "description": "Network query"},

    // Scene maker
    {"route": "/scene_maker/viewer", "statusCode": 200, "description": "Scene viewer"},
    {"route": "/scene_maker/preview", "statusCode": 200, "description": "Scene preview"},
    {"route": "/scene_maker/editor", "statusCode": 200, "description": "Scene editor"}
];
