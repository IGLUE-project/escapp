/**
 * Database helpers for tests
 * Provides utilities for database operations during testing
 */

// Import models - these will be available after app initialization
let models;

/**
 * Initialize models (call after app is loaded)
 * Returns the sequelize instance with models property
 */
function initModels() {
    if (!models) {
        models = require("../../models");
    }
    return models;
}

/**
 * Get all models from sequelize.models
 * @returns {Object} Object containing all Sequelize models
 */
function getModels() {
    const sequelize = initModels();
    return sequelize.models;
}

/**
 * Find user by email
 * @param {string} email - User email
 * @returns {Object} User instance or null
 */
async function findUserByEmail(email) {
    const { user } = getModels();
    if (!user) return null;
    return await user.findOne({ where: { username: email } });
}

/**
 * Find user by ID
 * @param {number} id - User ID
 * @returns {Object} User instance or null
 */
async function findUserById(id) {
    const { user } = getModels();
    if (!user) return null;
    return await user.findByPk(id);
}

/**
 * Create a user directly in the database
 * @param {Object} userData - User data
 * @returns {Object} Created user instance
 */
async function createUser(userData) {
    const { user } = getModels();
    if (!user) return null;
    return await user.create(userData);
}

/**
 * Delete a user by ID
 * @param {number} id - User ID
 * @returns {number} Number of rows deleted
 */
async function deleteUser(id) {
    const { user } = getModels();
    return await user.destroy({ where: { id } });
}

/**
 * Find escape room by ID
 * @param {number} id - Escape room ID
 * @returns {Object} Escape room instance or null
 */
async function findEscapeRoomById(id) {
    const { escapeRoom } = getModels();
    if (!escapeRoom) return null;
    return await escapeRoom.findByPk(id, {
        include: ["puzzles", "hints", "turnos"]
    });
}

/**
 * Create an escape room directly in the database
 * @param {Object} escapeRoomData - Escape room data
 * @returns {Object} Created escape room instance
 */
async function createEscapeRoomDB(escapeRoomData) {
    const { escapeRoom } = getModels();
    if (!escapeRoom) return null;
    return await escapeRoom.create(escapeRoomData);
}

/**
 * Delete an escape room by ID
 * @param {number} id - Escape room ID
 * @returns {number} Number of rows deleted
 */
async function deleteEscapeRoom(id) {
    const { escapeRoom } = getModels();
    if (!escapeRoom) return 0;
    return await escapeRoom.destroy({ where: { id } });
}

/**
 * Find team by ID
 * @param {number} id - Team ID
 * @returns {Object} Team instance or null
 */
async function findTeamById(id) {
    const { team } = getModels();
    if (!team) return null;
    return await team.findByPk(id, {
        include: ["teamMembers", "retos"]
    });
}

/**
 * Find puzzle by ID
 * @param {number} id - Puzzle ID
 * @returns {Object} Puzzle instance or null
 */
async function findPuzzleById(id) {
    const { puzzle } = getModels();
    if (!puzzle) return null;
    return await puzzle.findByPk(id);
}

/**
 * Find solved puzzles for a team
 * @param {number} teamId - Team ID
 * @returns {Array} Array of solved puzzle records
 */
async function findSolvedPuzzles(teamId) {
    const { retosSuperados } = getModels();
    if (!retosSuperados) return [];
    return await retosSuperados.findAll({ where: { teamId } });
}

/**
 * Find requested hints for a team
 * @param {number} participantId - Participant ID
 * @returns {Array} Array of requested hint records
 */
async function findRequestedHints(participantId) {
    const { requestedHint } = getModels();
    if (!requestedHint) return [];
    return await requestedHint.findAll({ where: { participantId } });
}

/**
 * Find participant by user ID and turno ID
 * @param {number} oderId - User ID
 * @param {number} turnoId - Turno ID
 * @returns {Object} Participant instance or null
 */
async function findParticipant(oderId, turnoId) {
    const { participant } = getModels();
    if (!participant) return null;
    return await participant.findOne({ where: { oderId, turnoId } });
}

/**
 * Count users in database
 * @returns {number} User count
 */
async function countUsers() {
    const { User } = initModels();
    return await User.count();
}

/**
 * Count escape rooms in database
 * @returns {number} Escape room count
 */
async function countEscapeRooms() {
    const { EscapeRoom } = initModels();
    return await EscapeRoom.count();
}

/**
 * Clean up test data created during tests
 * Use with caution - only for cleanup after tests
 * @param {Object} options - Cleanup options
 */
async function cleanupTestData(options = {}) {
    const m = initModels();

    if (options.users) {
        for (const email of options.users) {
            await m.User.destroy({ where: { email } });
        }
    }

    if (options.escapeRooms) {
        for (const id of options.escapeRooms) {
            await m.EscapeRoom.destroy({ where: { id } });
        }
    }

    if (options.teams) {
        for (const id of options.teams) {
            await m.Team.destroy({ where: { id } });
        }
    }
}

/**
 * Reset test database to initial seed state
 * WARNING: This will delete all data and re-seed
 */
async function resetDatabase() {
    // This would need to run the seed scripts
    // For now, we rely on the pretest script to handle this
    console.warn("Database reset should be done via npm run pretest");
}

/**
 * Close database connection
 * Call this in afterAll to properly close connections
 */
async function closeConnection() {
    const sequelize = initModels();
    if (sequelize && typeof sequelize.close === "function") {
        await sequelize.close();
    }
}

/**
 * Get the Sequelize instance
 * @returns {Object} Sequelize instance
 */
function getSequelize() {
    return initModels();
}

module.exports = {
    initModels,
    getModels,
    getSequelize,
    closeConnection,
    findUserByEmail,
    findUserById,
    createUser,
    deleteUser,
    findEscapeRoomById,
    createEscapeRoomDB,
    deleteEscapeRoom,
    findTeamById,
    findPuzzleById,
    findSolvedPuzzles,
    findRequestedHints,
    findParticipant,
    countUsers,
    countEscapeRooms,
    cleanupTestData,
    resetDatabase
};
