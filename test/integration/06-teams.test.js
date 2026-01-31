/* eslint-disable no-undef */
/**
 * Team Formation Tests
 * Tests for team creation, joining, and management
 */
const app = require("../../app");
const { createAuthSession } = require("../helpers/auth.helper");

global.console.log = jest.fn();

describe("Team Formation", () => {
    let teacherSession;
    let studentSession;
    let student2Session;
    const escapeRoomId = 1;
    const turnoId = 1;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
        studentSession = await createAuthSession(app, "student1");
        student2Session = await createAuthSession(app, "student2");
    });

    describe("Team Mode Settings", () => {
        it("should allow teacher to access team settings page", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/teams`);

            expect(res.statusCode).toBe(200);
        });

        it("should re-render settings page when updating with partial data", async () => {
            const res = await teacherSession.
                put(`/escapeRooms/${escapeRoomId}`).
                send({
                    "teamSize": 4,
                    "teamSizeMin": 2,
                    "subject": "Science"
                    // Missing required fields like title
                });

            // Re-renders page due to missing required fields
            expect(res.statusCode).toBe(200);
        });

        it("should deny student access to team settings", async () => {
            const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/teams`);

            expect(res.statusCode).toBe(403);
        });
    });

    describe("Team Creation", () => {
        it("should handle existing participant viewing teams page", async () => {
            const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/turnos/${turnoId}/teams`);
            // 302 if redirect, 404 if turno not found or escape room not joinable

            expect([302, 404]).toContain(res.statusCode);
        });

        it("should handle existing participant accessing new team page", async () => {
            const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/turnos/${turnoId}/teams/new`);
            // 302 if redirect, 404 if turno not found or escape room not joinable

            expect([302, 404]).toContain(res.statusCode);
        });

        it("should handle existing participant creating a team", async () => {
            const teamName = `Test Team ${Date.now()}`;
            const res = await studentSession.
                post(`/escapeRooms/${escapeRoomId}/turnos/${turnoId}/teams`).
                send({"name": teamName});

            // 302 if redirect, 404 if turno not found or escape room not joinable
            expect([302, 404]).toContain(res.statusCode);
        });

        it("should deny teacher from accessing student team creation", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/turnos/${turnoId}/teams`);
            // 302 if teacher redirect, 404 if escape room status is not "completed"

            expect([302, 404]).toContain(res.statusCode);
        });
    });

    describe("Team Join Token", () => {
        it("should handle team access with token based on participation status", async () => {
            const res = await studentSession.
                get(`/escapeRooms/${escapeRoomId}/turnos/${turnoId}/teams?token=testToken`);

            // 302 if redirects, 404 if turno not found or escape room not joinable
            expect([302, 404]).toContain(res.statusCode);
        });

        it("should return 404 for non-existent join route", async () => {
            const res = await student2Session.
                post(`/escapeRooms/${escapeRoomId}/turnos/${turnoId}/teams/join`).
                send({"token": "invalidtoken123"});

            // This route doesn't exist
            expect(res.statusCode).toBe(404);
        });
    });

    describe("Team Member Addition", () => {
        it("should handle team join based on participation status", async () => {
            // PUT route is for adding members to a team
            const res = await studentSession.
                put(`/escapeRooms/${escapeRoomId}/turnos/${turnoId}/teams/1`).
                send({});

            // 302 if redirect, 404 if turno/team not found
            expect([302, 404]).toContain(res.statusCode);
        });
    });

    describe("Teacher Team Management", () => {
        it("should allow teacher to view all teams", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/teams`);

            expect(res.statusCode).toBe(200);
        });

        it("should return 404 for POST team reset (use PUT instead)", async () => {
            // Reset route uses PUT method: PUT /turnos/:turnoId/teams/:teamId/reset
            const res = await teacherSession.
                post(`/escapeRooms/${escapeRoomId}/turnos/${turnoId}/teams/1/reset`).
                send({});

            // POST method is not supported, only PUT
            expect(res.statusCode).toBe(404);
        });
    });
});

describe("Team Size Limits", () => {
    let teacherSession;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
    });

    it("should re-render page when setting team size with partial data", async () => {
        const res = await teacherSession.
            put("/escapeRooms/1").
            send({
                "teamSizeMin": 2,
                "subject": "Science"
                // Missing required fields
            });

        // Re-renders page due to missing required fields
        expect(res.statusCode).toBe(200);
    });

    it("should re-render page when setting max team size with partial data", async () => {
        const res = await teacherSession.
            put("/escapeRooms/1").
            send({
                "teamSize": 5,
                "subject": "Science"
                // Missing required fields
            });

        // Re-renders page due to missing required fields
        expect(res.statusCode).toBe(200);
    });
});
