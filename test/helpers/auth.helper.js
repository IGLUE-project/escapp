/**
 * Authentication helpers for tests
 */
const session = require("supertest-session");

// Test credentials from seeders
const TEST_USERS = {
    "admin": {
        "email": "admin@upm.es",
        "password": "1234",
        "id": 1,
        "isAdmin": true,
        "isStudent": false
    },
    "teacher": {
        "email": "admin@upm.es", // Admin is also a teacher (owner of escape room 1)
        "password": "1234",
        "id": 1,
        "isAdmin": true,
        "isStudent": false
    },
    "testTeacher": {
        "email": "testteacher@test.com",
        "password": "testteacher",
        "id": 11, // Test teacher is user 11 in seeders
        "isAdmin": false,
        "isStudent": false
    },
    "testAdmin": {
        "email": "testadmin@test.com",
        "password": "testadmin",
        "id": 10, // Test admin is user 10 in seeders
        "isAdmin": true,
        "isStudent": false
    },
    "student1": {
        "email": "pepe@alumnos.upm.es",
        "password": "5678",
        "id": 2,
        "isAdmin": false,
        "isStudent": true
    },
    "student2": {
        "email": "al.jm@alumnos.upm.es",
        "password": "5678",
        "id": 3,
        "isAdmin": false,
        "isStudent": true
    },
    "student3": {
        "email": "aph@alumnos.upm.es",
        "password": "5678",
        "id": 4,
        "isAdmin": false,
        "isStudent": true
    }
};

/**
 * Create an authenticated session for a user type
 * @param {Object} app - Express app instance
 * @param {string} userType - 'admin', 'teacher', 'student1', 'student2', 'student3'
 * @returns {Object} Authenticated supertest session
 */
async function createAuthSession (app, userType) {
    const user = TEST_USERS[userType];

    if (!user) {
        throw new Error(`Unknown user type: ${userType}`);
    }

    const testSession = session(app);
    const res = await testSession.
        post("/").
        send({ "login": user.email, "password": user.password });

    if (res.statusCode !== 302) {
        throw new Error(`Failed to authenticate ${userType}: ${res.statusCode}`);
    }

    testSession.user = user;
    return testSession;
}

/**
 * Create a new user via registration
 * @param {Object} app - Express app instance
 * @param {Object} userData - User data for registration
 * @returns {Object} Response from registration
 */
async function registerUser (app, userData) {
    const request = require("supertest");

    return await request(app).
        post("/users").
        send(userData);
}

/**
 * Login with credentials
 * @param {Object} app - Express app instance
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Object} Authenticated session or null
 */
async function login (app, email, password) {
    const testSession = session(app);
    const res = await testSession.
        post("/").
        send({ "login": email, password });

    return { "session": testSession, "response": res };
}

/**
 * Logout from session
 * @param {Object} testSession - Supertest session
 * @returns {Object} Response from logout
 */
async function logout (testSession) {
    return await testSession.delete("/");
}

module.exports = {
    TEST_USERS,
    createAuthSession,
    registerUser,
    login,
    logout
};
