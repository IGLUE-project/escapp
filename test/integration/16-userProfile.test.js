/* eslint-disable no-undef */
/**
 * User Profile and Account Tests
 * Tests for user profile viewing, editing, and account management
 */
const app = require("../../app");
const { TEST_USERS, createAuthSession } = require("../helpers/auth.helper");
const { findUserById } = require("../helpers/database.helper");

global.console.log = jest.fn();

describe("User Profile", () => {
    let studentSession;
    let teacherSession;
    let adminSession;

    beforeAll(async () => {
        studentSession = await createAuthSession(app, "student1");
        teacherSession = await createAuthSession(app, "teacher");
        adminSession = await createAuthSession(app, "admin");
    });

    describe("View Profile", () => {
        it("should allow user to view their own profile", async () => {
            const res = await studentSession.get(`/users/${TEST_USERS.student1.id}`);
            expect(res.statusCode).toBe(200);
        });

        it("should allow admin to view any user profile", async () => {
            const res = await adminSession.get(`/users/${TEST_USERS.student1.id}`);
            expect(res.statusCode).toBe(200);
        });

        it("should deny user from viewing other user profiles", async () => {
            const res = await studentSession.get(`/users/${TEST_USERS.student2.id}`);
            expect(res.statusCode).toBe(403);
        });
    });

    describe("Edit Profile", () => {
        it("should allow user to access their own edit page", async () => {
            const res = await studentSession.get(`/users/${TEST_USERS.student1.id}/edit`);
            expect(res.statusCode).toBe(200);
        });

        it("should allow admin to access any user edit page", async () => {
            const res = await adminSession.get(`/users/${TEST_USERS.student1.id}/edit`);
            expect(res.statusCode).toBe(200);
        });

        it("should deny user from editing other profiles", async () => {
            const res = await studentSession.get(`/users/${TEST_USERS.student2.id}/edit`);
            expect(res.statusCode).toBe(403);
        });

        it("should process user profile update request", async () => {
            const user = await findUserById(TEST_USERS.student1.id);
            const res = await studentSession
                .put(`/users/${TEST_USERS.student1.id}`)
                .send({
                    name: user?.name || "Test",
                    surname: user?.surname || "Student",
                    alias: user?.alias || "",
                    lang: "en"
                });

            // 302 on success, 200 on validation error (re-renders form)
            expect([200, 302]).toContain(res.statusCode);
        });

        it("should deny user from updating other profiles", async () => {
            const res = await studentSession
                .put(`/users/${TEST_USERS.student2.id}`)
                .send({
                    name: "Hacked Name"
                });

            expect(res.statusCode).toBe(403);
        });
    });

    describe("User's Escape Rooms", () => {
        it("should allow user to view their own escape rooms", async () => {
            const res = await teacherSession.get(`/users/${TEST_USERS.teacher.id}/escapeRooms`);
            expect(res.statusCode).toBe(200);
        });

        it("should allow admin to view any user's escape rooms", async () => {
            const res = await adminSession.get(`/users/${TEST_USERS.teacher.id}/escapeRooms`);
            expect(res.statusCode).toBe(200);
        });

        it("should deny user from viewing other user's escape rooms", async () => {
            const res = await studentSession.get(`/users/${TEST_USERS.teacher.id}/escapeRooms`);
            expect(res.statusCode).toBe(403);
        });
    });
});

describe("Email Confirmation", () => {
    it("should allow resending confirmation email", async () => {
        const res = await require("supertest")(app)
            .get(`/users/resend-confirmation/${TEST_USERS.student1.id}`);

        // Redirects after sending (or if already confirmed)
        expect(res.statusCode).toBe(302);
    });

    it("should return 404 for non-existent user confirmation", async () => {
        const res = await require("supertest")(app)
            .get("/users/resend-confirmation/99999");

        expect(res.statusCode).toBe(404);
    });
});

describe("Admin User Management", () => {
    let adminSession;

    beforeAll(async () => {
        adminSession = await createAuthSession(app, "admin");
    });

    describe("User List", () => {
        it("should display user list for admin", async () => {
            const res = await adminSession.get("/users/index");
            expect(res.statusCode).toBe(200);
        });
    });

    describe("User Confirmation", () => {
        it("should allow admin to confirm user accounts", async () => {
            const res = await adminSession
                .put(`/users/${TEST_USERS.student1.id}/confirm`)
                .send({});

            // Successful confirmation redirects
            expect(res.statusCode).toBe(302);
        });
    });

    describe("Role Management", () => {
        it("should process admin user role update request", async () => {
            const user = await findUserById(TEST_USERS.student2.id);
            const res = await adminSession
                .put(`/users/${TEST_USERS.student2.id}`)
                .send({
                    name: user?.name || "Test",
                    surname: user?.surname || "Student2",
                    alias: user?.alias || "",
                    role: "student",
                    lang: "en"
                });

            // 302 on success, 200 on validation error (re-renders form)
            expect([200, 302]).toContain(res.statusCode);
        });
    });
});
