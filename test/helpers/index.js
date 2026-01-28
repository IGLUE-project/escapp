/**
 * Test Helpers Index
 * Exports all helper functions for easy importing
 */

const authHelper = require("./auth.helper");
const escapeRoomHelper = require("./escapeRoom.helper");
const databaseHelper = require("./database.helper");

module.exports = {
    // Auth helpers
    ...authHelper,

    // Escape room helpers
    ...escapeRoomHelper,

    // Database helpers
    ...databaseHelper
};
