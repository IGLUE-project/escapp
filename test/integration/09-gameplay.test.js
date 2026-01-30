/* eslint-disable no-undef */
/**
 * Gameplay Execution Tests
 * Tests for playing escape rooms, submitting solutions, etc.
 */
const app = require("../../app");
const { createAuthSession } = require("../helpers/auth.helper");

global.console.log = jest.fn();

describe("Gameplay", () => {
    let teacherSession;
    let studentSession;
    const escapeRoomId = 1;
    const turnoId = 1;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
        studentSession = await createAuthSession(app, "student1");
    });

    describe("Join Escape Room", () => {
        it("should allow student to view ready page", async () => {
            const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/ready`);
            expect(res.statusCode).toBe(200);
        });

        it("should redirect join request based on participation status", async () => {
            const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/join`);
            // 302 if redirect (student is participant), 404 if escape room status is not "completed"
            expect([302, 404]).toContain(res.statusCode);
        });
    });

    describe("Play Interface", () => {
        it("should redirect student play request based on game state", async () => {
            const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/play`);
            // Student play request redirects based on turno/team state
            expect(res.statusCode).toBe(302);
        });

        it("should allow teacher to view play interface for monitoring", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/turnos/${turnoId}/play`);
            expect(res.statusCode).toBe(200);
        });
    });

    describe("Results", () => {
        it("should handle student viewing results", async () => {
            const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/results`);
            // 200 if results available, 302 if redirect needed
            expect([200, 302]).toContain(res.statusCode);
        });

        it("should handle student viewing finish page", async () => {
            const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/finish`);
            // 200 if finish page shown, 302 if redirect needed
            expect([200, 302]).toContain(res.statusCode);
        });

        it("should handle teacher viewing finish interface", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/turnos/${turnoId}/finish`);
            // 200 if shown, 302 if redirect, 404 if turno not found
            expect([200, 302, 404]).toContain(res.statusCode);
        });
    });

    describe("Participants", () => {
        it("should allow teacher to view participants", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/participants`);
            expect(res.statusCode).toBe(200);
        });

        it("should deny student access to participants view", async () => {
            const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/participants`);
            expect(res.statusCode).toBe(403);
        });
    });
});

describe("Teacher Monitoring", () => {
    let teacherSession;
    const escapeRoomId = 1;
    const turnoId = 1;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
    });

    it("should allow teacher to view teams management", async () => {
        const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/teams`);
        expect(res.statusCode).toBe(200);
    });

    it("should allow teacher to access message page", async () => {
        const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/message`);
        expect(res.statusCode).toBe(200);
    });

    // Note: POST /message endpoint requires Socket.io which is not available in test environment
    // Integration tests for message broadcasting should use mocked Socket.io
});

describe("Instructions", () => {
    let teacherSession;
    let studentSession;
    const escapeRoomId = 1;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
        studentSession = await createAuthSession(app, "student1");
    });

    it("should allow teacher to view indications page", async () => {
        const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/indications`);
        expect(res.statusCode).toBe(200);
    });

    it("should deny student access to indications edit", async () => {
        const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/indications`);
        expect(res.statusCode).toBe(403);
    });

    it("should render page when updating escape room with partial data", async () => {
        const res = await teacherSession
            .put(`/escapeRooms/${escapeRoomId}`)
            .send({
                instructionsStudent: "Instructions for students",
                instructionsTeacher: "Instructions for teachers",
                subject: "Science"
                // Missing required fields like title causes re-render
            });

        // Incomplete update re-renders the page
        expect(res.statusCode).toBe(200);
    });
});

describe("Content Interfaces", () => {
    let teacherSession;
    const escapeRoomId = 1;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
    });

    it("should allow teacher to view team interface editor", async () => {
        const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/team`);
        expect(res.statusCode).toBe(200);
    });

    it("should allow teacher to view class interface editor", async () => {
        const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/class`);
        expect(res.statusCode).toBe(200);
    });

    it("should allow teacher to view after interface editor", async () => {
        const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/after`);
        expect(res.statusCode).toBe(200);
    });
});

describe("Resource Management", () => {
    let teacherSession;
    const escapeRoomId = 1;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
    });

    it("should allow teacher to browse resources", async () => {
        const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/browseResources`);
        expect(res.statusCode).toBe(200);
    });
});
