/* eslint-disable no-undef */
/**
 * Login and Session Tests
 * Tests for authentication and session management
 */
const request = require("supertest");
const session = require("supertest-session");
const app = require("../../app");
const { TEST_USERS, login, logout } = require("../helpers/auth.helper");

global.console.log = jest.fn();

describe("Login and Session", () => {
    describe("Login Page", () => {
        it("should display login page for unauthenticated users", async () => {
            const res = await request(app).get("/");
            expect(res.statusCode).toBe(200);
        });

        it("should redirect authenticated users away from login page", async () => {
            const testSession = session(app);

            // Login first
            await testSession
                .post("/")
                .send({ login: TEST_USERS.admin.email, password: TEST_USERS.admin.password });

            // Try to access login page
            const res = await testSession.get("/");
            expect(res.statusCode).toBe(302);
        });
    });

    describe("Student Login", () => {
        it("should login student with correct email and password", async () => {
            const { response } = await login(app, TEST_USERS.student1.email, TEST_USERS.student1.password);
            expect(response.statusCode).toBe(302);
        });

        it("should re-render login page with error for incorrect password", async () => {
            const { response } = await login(app, TEST_USERS.student1.email, "wrongpassword");
            // Re-renders login page with error flash message
            expect(response.statusCode).toBe(200);
        });

        it("should re-render login page with error for non-existent email", async () => {
            const { response } = await login(app, "nonexistent@test.com", "anypassword");
            // Re-renders login page with error flash message
            expect(response.statusCode).toBe(200);
        });
    });

    describe("Teacher Login", () => {
        it("should login teacher with correct email and password", async () => {
            const { response } = await login(app, TEST_USERS.teacher.email, TEST_USERS.teacher.password);
            expect(response.statusCode).toBe(302);
        });
    });

    describe("Admin Login", () => {
        it("should login admin with correct email and password", async () => {
            const { response } = await login(app, TEST_USERS.admin.email, TEST_USERS.admin.password);
            expect(response.statusCode).toBe(302);
        });

        it("should grant admin access to admin routes after login", async () => {
            const testSession = session(app);

            await testSession
                .post("/")
                .send({ login: TEST_USERS.admin.email, password: TEST_USERS.admin.password });

            const res = await testSession.get("/users/index");
            expect(res.statusCode).toBe(200);
        });
    });

    describe("Session Management", () => {
        it("should maintain session across multiple requests", async () => {
            const testSession = session(app);

            // Login
            await testSession
                .post("/")
                .send({ login: TEST_USERS.student1.email, password: TEST_USERS.student1.password });

            // First authenticated request
            const res1 = await testSession.get("/escapeRooms");
            expect(res1.statusCode).toBe(200);

            // Second authenticated request (session should persist)
            const res2 = await testSession.get("/escapeRooms");
            expect(res2.statusCode).toBe(200);
        });

        it("should allow user to access their profile when logged in", async () => {
            const testSession = session(app);

            await testSession
                .post("/")
                .send({ login: TEST_USERS.student1.email, password: TEST_USERS.student1.password });

            const res = await testSession.get(`/users/${TEST_USERS.student1.id}`);
            expect(res.statusCode).toBe(200);
        });
    });

    describe("Logout", () => {
        it("should logout user and invalidate session", async () => {
            const testSession = session(app);

            // Login
            await testSession
                .post("/")
                .send({ login: TEST_USERS.student1.email, password: TEST_USERS.student1.password });

            // Verify logged in
            const loggedInRes = await testSession.get("/escapeRooms");
            expect(loggedInRes.statusCode).toBe(200);

            // Logout redirects to home page
            const logoutRes = await testSession.delete("/");
            expect(logoutRes.statusCode).toBe(302);

            // Verify logged out - should redirect to login
            const loggedOutRes = await testSession.get("/escapeRooms");
            expect(loggedOutRes.statusCode).toBe(302);
        });
    });

    describe("Access Control", () => {
        it("should deny student access to teacher-only routes", async () => {
            const testSession = session(app);

            await testSession
                .post("/")
                .send({ login: TEST_USERS.student1.email, password: TEST_USERS.student1.password });

            // Try to create escape room (teacher only)
            const res = await testSession.get("/escapeRooms/new");
            expect(res.statusCode).toBe(403);
        });

        it("should deny student access to admin routes", async () => {
            const testSession = session(app);

            await testSession
                .post("/")
                .send({ login: TEST_USERS.student1.email, password: TEST_USERS.student1.password });

            const res = await testSession.get("/users/index");
            expect(res.statusCode).toBe(403);
        });

        it("should allow teacher who is admin to access admin routes", async () => {
            const testSession = session(app);

            await testSession
                .post("/")
                .send({ login: TEST_USERS.teacher.email, password: TEST_USERS.teacher.password });

            // Note: In seed data, admin@upm.es is both admin and teacher
            const res = await testSession.get("/users/index");
            // This teacher is also an admin, so they get access
            expect(res.statusCode).toBe(200);
        });
    });

    describe("Password Reset", () => {
        it("should display password reset page", async () => {
            const res = await request(app).get("/users/password-reset");
            expect(res.statusCode).toBe(200);
        });

        it("should redirect after password reset request", async () => {
            const res = await request(app)
                .post("/users/password-reset")
                .send({ login: TEST_USERS.student1.email });

            // Password reset always redirects back to the reset page
            expect(res.statusCode).toBe(302);
        });

        it("should redirect for non-existent email (security - no reveal)", async () => {
            const res = await request(app)
                .post("/users/password-reset")
                .send({ login: "nonexistent@test.com" });

            // Redirects regardless of email existence (security best practice)
            expect(res.statusCode).toBe(302);
        });
    });
});
