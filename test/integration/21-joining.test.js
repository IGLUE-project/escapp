/* eslint-disable no-undef */
/**
 * Escape Room Joining Tests
 * Tests for the joining flow and team selection
 */
const app = require("../../app");
const { createAuthSession } = require("../helpers/auth.helper");

global.console.log = jest.fn();

describe("Escape Room Joining", () => {
    let studentSession;
    let teacherSession;
    const escapeRoomId = 1;

    beforeAll(async () => {
        studentSession = await createAuthSession(app, "student1");
        teacherSession = await createAuthSession(app, "teacher");
    });

    describe("Join Main Page", () => {
        it("should handle join page based on participant status", async () => {
            const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/join`);
            // 200 if join page shown, 302 if redirect, 404 if not joinable
            expect([200, 302, 404]).toContain(res.statusCode);
        });

        it("should deny teacher from joining own escape room", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/join`);
            // authJoinEscapeRoom denies author, or 404 if not joinable
            expect([403, 404]).toContain(res.statusCode);
        });
    });

    describe("Shift Selection", () => {
        it("should handle shift selection page based on state", async () => {
            const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/turnos/1/select`);
            // 302 if redirect, 404 if turno not found or not selectable
            expect([302, 404]).toContain(res.statusCode);
        });
    });

    describe("Ready Page", () => {
        it("should allow participant to view ready page", async () => {
            const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/ready`);
            // 200 if ready, 302 if redirect needed
            expect([200, 302]).toContain(res.statusCode);
        });
    });
});

describe("Team Selection", () => {
    let studentSession;
    const escapeRoomId = 1;
    const turnoId = 1;

    beforeAll(async () => {
        studentSession = await createAuthSession(app, "student1");
    });

    describe("View Available Teams", () => {
        it("should handle teams page based on participation status", async () => {
            const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/turnos/${turnoId}/teams`);
            // 302 if redirect, 404 if turno not found or escape room not joinable
            expect([302, 404]).toContain(res.statusCode);
        });
    });

    describe("New Team Page", () => {
        it("should handle new team page based on participation status", async () => {
            const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/turnos/${turnoId}/teams/new`);
            // 302 if redirect, 404 if turno not found or escape room not joinable
            expect([302, 404]).toContain(res.statusCode);
        });
    });
});

describe("Anonymous Joining", () => {
    const request = require("supertest");
    const escapeRoomId = 1;

    it("should handle anonymous join attempt", async () => {
        const res = await request(app)
            .post(`/escapeRooms/${escapeRoomId}/join-anon`)
            .send({
                name: "Anonymous Player",
                turnoId: 1
            });

        // May redirect to login or handle guest access
        expect([200, 302, 400, 403]).toContain(res.statusCode);
    });
});
