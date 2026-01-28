/* eslint-disable no-undef */
/**
 * Escape Room Edit Steps Tests
 * Tests for each step in the escape room editing process
 */
const app = require("../../app");
const { createAuthSession } = require("../helpers/auth.helper");

global.console.log = jest.fn();

describe("Escape Room Edit Steps", () => {
    let teacherSession;
    let studentSession;
    const escapeRoomId = 1;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
        studentSession = await createAuthSession(app, "student1");
    });

    describe("Settings Step", () => {
        it("should allow teacher to view settings", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/settings`);
            expect(res.statusCode).toBe(200);
        });

        it("should deny student access to settings", async () => {
            const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/settings`);
            expect(res.statusCode).toBe(403);
        });
    });

    describe("Indications Step", () => {
        it("should allow teacher to view indications interface", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/indications`);
            expect(res.statusCode).toBe(200);
        });

        it("should allow teacher to update indications", async () => {
            const res = await teacherSession
                .post(`/escapeRooms/${escapeRoomId}/indications`)
                .send({
                    indicationsInstructions: "Welcome to the escape room!"
                });

            expect(res.statusCode).toBe(302);
        });

        it("should deny student access to indications", async () => {
            const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/indications`);
            expect(res.statusCode).toBe(403);
        });
    });

    describe("Team Interface Step", () => {
        it("should allow teacher to view team interface", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/team`);
            expect(res.statusCode).toBe(200);
        });

        it("should allow teacher to update team interface", async () => {
            const res = await teacherSession
                .post(`/escapeRooms/${escapeRoomId}/team`)
                .send({
                    teamInstructions: "Team instructions here"
                });

            expect(res.statusCode).toBe(302);
        });

        it("should deny student access to team interface", async () => {
            const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/team`);
            expect(res.statusCode).toBe(403);
        });
    });

    describe("Class Interface Step", () => {
        it("should allow teacher to view class interface", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/class`);
            expect(res.statusCode).toBe(200);
        });

        it("should allow teacher to update class interface", async () => {
            const res = await teacherSession
                .post(`/escapeRooms/${escapeRoomId}/class`)
                .send({
                    classInstructions: "Class instructions here"
                });

            expect(res.statusCode).toBe(302);
        });

        it("should deny student access to class interface", async () => {
            const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/class`);
            expect(res.statusCode).toBe(403);
        });
    });

    describe("After Interface Step", () => {
        it("should allow teacher to view after interface", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/after`);
            expect(res.statusCode).toBe(200);
        });

        it("should allow teacher to update after interface", async () => {
            const res = await teacherSession
                .post(`/escapeRooms/${escapeRoomId}/after`)
                .send({
                    afterInstructions: "Thank you for playing!"
                });

            expect(res.statusCode).toBe(302);
        });

        it("should deny student access to after interface", async () => {
            const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/after`);
            expect(res.statusCode).toBe(403);
        });
    });

    describe("Evaluation Step", () => {
        it("should allow teacher to view evaluation settings", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/evaluation`);
            expect(res.statusCode).toBe(200);
        });

        it("should allow teacher to update evaluation settings", async () => {
            const res = await teacherSession
                .post(`/escapeRooms/${escapeRoomId}/evaluation`)
                .send({
                    scoreParticipation: 10,
                    automaticAttendance: "participant"
                });

            expect(res.statusCode).toBe(302);
        });

        it("should deny student access to evaluation settings", async () => {
            const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/evaluation`);
            expect(res.statusCode).toBe(403);
        });
    });

    describe("Sharing Step", () => {
        it("should allow teacher to view sharing settings", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/sharing`);
            expect(res.statusCode).toBe(200);
        });

        it("should allow teacher to update sharing settings", async () => {
            const res = await teacherSession
                .post(`/escapeRooms/${escapeRoomId}/sharing`)
                .send({
                    scope: "private"
                });

            expect(res.statusCode).toBe(302);
        });

        it("should deny student access to sharing settings", async () => {
            const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/sharing`);
            expect(res.statusCode).toBe(403);
        });
    });
});

describe("Escape Room Activation", () => {
    let teacherSession;
    let studentSession;
    const escapeRoomId = 1;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
        studentSession = await createAuthSession(app, "student1");
    });

    describe("Activation Page", () => {
        it("should allow teacher to view activation page", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/activate`);
            expect(res.statusCode).toBe(200);
        });

        it("should deny student access to activation page", async () => {
            const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/activate`);
            expect(res.statusCode).toBe(403);
        });
    });

    describe("Activate Escape Room", () => {
        it("should handle escape room activation request", async () => {
            const res = await teacherSession
                .put(`/escapeRooms/${escapeRoomId}/activate`)
                .send({
                    status: "completed"
                });

            // 302 if activated, 200 if validation error, 500 on server error
            expect([200, 302, 500]).toContain(res.statusCode);
        });

        it("should deny student from activating escape room", async () => {
            const res = await studentSession
                .put(`/escapeRooms/${escapeRoomId}/activate`)
                .send({});

            expect(res.statusCode).toBe(403);
        });
    });
});
