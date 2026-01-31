/**
 * Escape Room helpers for tests
 */

// Default escape room data for creating test escape rooms
const DEFAULT_ESCAPE_ROOM = {
    "title": "Test Escape Room",
    "description": "A test escape room for automated testing",
    "duration": 60,
    "teamSize": 4,
    "minTeamSize": 1,
    "scope": "public",
    "lang": "en",
    "subject": "Science",
    "field": "00", // Field/subject area code
    "level": "secondary", // Educational level
    "format": "online", // Format type
    "invitation": ""
};

// Default puzzle data
const DEFAULT_PUZZLE = {
    "title": "Test Puzzle",
    "sol": "answer",
    "order": 0,
    "correct": "Correct! Well done!",
    "fail": "Try again!",
    "automatic": true
};

// Default hint data
const DEFAULT_HINT = {
    "content": "This is a test hint",
    "order": 0,
    "category": "general"
};

// Default shift (turno) data
const DEFAULT_TURNO = {
    "date": new Date(Date.now() + 86400000).toISOString(), // Tomorrow
    "startTime": "09:00",
    "endTime": "18:00",
    "password": "",
    "capacity": 50,
    "status": "pending"
};

/**
 * Create an escape room via POST request
 * @param {Object} testSession - Authenticated session
 * @param {Object} escapeRoomData - Escape room data (optional, uses defaults)
 * @returns {Object} Response from creation
 */
async function createEscapeRoom (testSession, escapeRoomData = {}) {
    const data = { ...DEFAULT_ESCAPE_ROOM, ...escapeRoomData };

    return await testSession.
        post("/escapeRooms").
        send(data);
}

/**
 * Get escape room by ID
 * @param {Object} testSession - Authenticated session
 * @param {number} escapeRoomId - Escape room ID
 * @returns {Object} Response with escape room data
 */
async function getEscapeRoom (testSession, escapeRoomId) {
    return await testSession.get(`/escapeRooms/${escapeRoomId}`);
}

/**
 * Update escape room
 * @param {Object} testSession - Authenticated session
 * @param {number} escapeRoomId - Escape room ID
 * @param {Object} updateData - Data to update
 * @returns {Object} Response from update
 */
async function updateEscapeRoom (testSession, escapeRoomId, updateData) {
    return await testSession.
        put(`/escapeRooms/${escapeRoomId}`).
        send(updateData);
}

/**
 * Delete escape room
 * @param {Object} testSession - Authenticated session
 * @param {number} escapeRoomId - Escape room ID
 * @returns {Object} Response from deletion
 */
async function deleteEscapeRoom (testSession, escapeRoomId) {
    return await testSession.delete(`/escapeRooms/${escapeRoomId}`);
}

/**
 * Create a puzzle for an escape room
 * @param {Object} testSession - Authenticated session
 * @param {number} escapeRoomId - Escape room ID
 * @param {Object} puzzleData - Puzzle data (optional, uses defaults)
 * @returns {Object} Response from creation
 */
async function createPuzzle (testSession, escapeRoomId, puzzleData = {}) {
    const data = { ...DEFAULT_PUZZLE, ...puzzleData };

    return await testSession.
        post(`/escapeRooms/${escapeRoomId}/puzzles`).
        send(data);
}

/**
 * Create a hint for a puzzle
 * @param {Object} testSession - Authenticated session
 * @param {number} escapeRoomId - Escape room ID
 * @param {number} puzzleId - Puzzle ID
 * @param {Object} hintData - Hint data (optional, uses defaults)
 * @returns {Object} Response from creation
 */
async function createHint (testSession, escapeRoomId, puzzleId, hintData = {}) {
    const data = { ...DEFAULT_HINT, puzzleId, ...hintData };

    return await testSession.
        post(`/escapeRooms/${escapeRoomId}/hints`).
        send(data);
}

/**
 * Create a shift (turno) for an escape room
 * @param {Object} testSession - Authenticated session
 * @param {number} escapeRoomId - Escape room ID
 * @param {Object} turnoData - Shift data (optional, uses defaults)
 * @returns {Object} Response from creation
 */
async function createTurno (testSession, escapeRoomId, turnoData = {}) {
    const data = { ...DEFAULT_TURNO, ...turnoData };

    return await testSession.
        post(`/escapeRooms/${escapeRoomId}/turnos`).
        send(data);
}

/**
 * Join an escape room as a student
 * @param {Object} studentSession - Student's authenticated session
 * @param {number} escapeRoomId - Escape room ID
 * @param {number} turnoId - Shift ID
 * @param {string} password - Shift password (if required)
 * @returns {Object} Response from join
 */
async function joinEscapeRoom (studentSession, escapeRoomId, turnoId, password = "") {
    return await studentSession.
        post(`/escapeRooms/${escapeRoomId}/join`).
        send({ turnoId, password });
}

/**
 * Create a team for an escape room shift
 * @param {Object} studentSession - Student's authenticated session
 * @param {number} escapeRoomId - Escape room ID
 * @param {number} turnoId - Shift ID
 * @param {string} teamName - Team name
 * @returns {Object} Response from team creation
 */
async function createTeam (studentSession, escapeRoomId, turnoId, teamName = "Test Team") {
    return await studentSession.
        post(`/escapeRooms/${escapeRoomId}/turnos/${turnoId}/teams`).
        send({ "name": teamName });
}

/**
 * Submit a puzzle solution via API
 * @param {Object} testSession - Authenticated session
 * @param {number} escapeRoomId - Escape room ID
 * @param {number} puzzleId - Puzzle ID
 * @param {string} answer - Solution answer
 * @returns {Object} Response from submission
 */
async function submitPuzzleSolution (testSession, escapeRoomId, puzzleId, answer) {
    return await testSession.
        post(`/api/escapeRooms/${escapeRoomId}/puzzles/${puzzleId}/submit`).
        send({ answer });
}

/**
 * Check a puzzle solution via API (without recording)
 * @param {Object} testSession - Authenticated session
 * @param {number} escapeRoomId - Escape room ID
 * @param {number} puzzleId - Puzzle ID
 * @param {string} answer - Solution answer
 * @returns {Object} Response from check
 */
async function checkPuzzleSolution (testSession, escapeRoomId, puzzleId, answer) {
    return await testSession.
        post(`/api/escapeRooms/${escapeRoomId}/puzzles/${puzzleId}/check`).
        send({ answer });
}

/**
 * Request a hint via API
 * @param {Object} testSession - Authenticated session
 * @param {number} escapeRoomId - Escape room ID
 * @param {number} puzzleId - Puzzle ID
 * @returns {Object} Response from hint request
 */
async function requestHint (testSession, escapeRoomId, puzzleId) {
    return await testSession.
        post(`/api/escapeRooms/${escapeRoomId}/puzzles/${puzzleId}/hint`).
        send({});
}

module.exports = {
    DEFAULT_ESCAPE_ROOM,
    DEFAULT_PUZZLE,
    DEFAULT_HINT,
    DEFAULT_TURNO,
    createEscapeRoom,
    getEscapeRoom,
    updateEscapeRoom,
    deleteEscapeRoom,
    createPuzzle,
    createHint,
    createTurno,
    joinEscapeRoom,
    createTeam,
    submitPuzzleSolution,
    checkPuzzleSolution,
    requestHint
};
