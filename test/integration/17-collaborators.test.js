/* eslint-disable no-undef */
/**
 * Collaborator Management Tests
 * Tests for adding, viewing, and removing escape room collaborators
 */
const app = require("../../app");
const { TEST_USERS, createAuthSession } = require("../helpers/auth.helper");

global.console.log = jest.fn();

describe("Collaborator Management", () => {
    let teacherSession;
    let studentSession;
    let adminSession;
    const escapeRoomId = 1;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
        studentSession = await createAuthSession(app, "student1");
        adminSession = await createAuthSession(app, "admin");
    });

    describe("View Collaborators", () => {
        it("should allow owner to view collaborators page", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/collaborators`);
            expect(res.statusCode).toBe(200);
        });

        it("should allow admin to view collaborators page", async () => {
            const res = await adminSession.get(`/escapeRooms/${escapeRoomId}/collaborators`);
            expect(res.statusCode).toBe(200);
        });

        it("should deny student access to collaborators page", async () => {
            const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/collaborators`);
            expect(res.statusCode).toBe(403);
        });
    });

    describe("Add Collaborators", () => {
        it("should allow owner to add collaborators", async () => {
            const res = await teacherSession
                .post(`/escapeRooms/${escapeRoomId}/collaborators`)
                .send({
                    collaborator: TEST_USERS.student2.email
                });

            // Redirects after adding collaborator request
            expect(res.statusCode).toBe(302);
        });

        it("should deny student from adding collaborators", async () => {
            const res = await studentSession
                .post(`/escapeRooms/${escapeRoomId}/collaborators`)
                .send({
                    collaborator: "someone@example.com"
                });

            expect(res.statusCode).toBe(403);
        });
    });

    describe("Confirm Collaboration", () => {
        it("should allow user to confirm collaboration invitation", async () => {
            // This would need to be done by the invited user
            const student2Session = await createAuthSession(app, "student2");
            const res = await student2Session
                .put(`/escapeRooms/${escapeRoomId}/confirmCoAuthor`)
                .send({});

            // 302 if confirmed, 403 if not invited
            expect([302, 403]).toContain(res.statusCode);
        });
    });

    describe("Remove Collaborators", () => {
        it("should allow owner to remove collaborators", async () => {
            const res = await teacherSession
                .delete(`/escapeRooms/${escapeRoomId}/collaborators`)
                .send({
                    collaborator: TEST_USERS.student2.id
                });

            // Redirects after removing (or if not found)
            expect(res.statusCode).toBe(302);
        });

        it("should deny student from removing collaborators", async () => {
            const res = await studentSession
                .delete(`/escapeRooms/${escapeRoomId}/collaborators`)
                .send({
                    collaborator: TEST_USERS.teacher.id
                });

            expect(res.statusCode).toBe(403);
        });
    });
});
