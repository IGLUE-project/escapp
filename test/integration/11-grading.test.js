/* eslint-disable no-undef */
/**
 * Grading Tests
 * Tests for grading configuration and grade calculation
 */
const app = require("../../app");
const { createAuthSession } = require("../helpers/auth.helper");

global.console.log = jest.fn();

describe("Grading Configuration", () => {
    let teacherSession;
    let studentSession;
    const escapeRoomId = 1;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
        studentSession = await createAuthSession(app, "student1");
    });

    describe("Evaluation Settings", () => {
        it("should allow teacher to access evaluation page", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/evaluation`);

            expect(res.statusCode).toBe(200);
        });

        it("should deny student access to evaluation page", async () => {
            const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/evaluation`);

            expect(res.statusCode).toBe(403);
        });
    });

    describe("Grading Criteria", () => {
        it("should re-render page when setting attendance grading with partial data", async () => {
            const res = await teacherSession.
                put(`/escapeRooms/${escapeRoomId}`).
                send({
                    "gradeAttendance": true,
                    "subject": "Science"
                    // Missing required fields like title
                });

            // Re-renders page due to missing required fields
            expect(res.statusCode).toBe(200);
        });

        it("should re-render page when setting puzzle grading with partial data", async () => {
            const res = await teacherSession.
                put(`/escapeRooms/${escapeRoomId}`).
                send({
                    "gradePuzzles": true,
                    "subject": "Science"
                });

            expect(res.statusCode).toBe(200);
        });

        it("should re-render page when setting hint penalty with partial data", async () => {
            const res = await teacherSession.
                put(`/escapeRooms/${escapeRoomId}`).
                send({
                    "hintPenalty": 5,
                    "subject": "Science"
                });

            expect(res.statusCode).toBe(200);
        });
    });

    describe("Automatic Attendance", () => {
        it("should re-render page when setting attendance to none", async () => {
            const res = await teacherSession.
                put(`/escapeRooms/${escapeRoomId}`).
                send({
                    "automaticAttendance": "none",
                    "subject": "Science"
                });

            expect(res.statusCode).toBe(200);
        });

        it("should re-render page when setting attendance to participant", async () => {
            const res = await teacherSession.
                put(`/escapeRooms/${escapeRoomId}`).
                send({
                    "automaticAttendance": "participant",
                    "subject": "Science"
                });

            expect(res.statusCode).toBe(200);
        });

        it("should re-render page when setting attendance to team", async () => {
            const res = await teacherSession.
                put(`/escapeRooms/${escapeRoomId}`).
                send({
                    "automaticAttendance": "team",
                    "subject": "Science"
                });

            expect(res.statusCode).toBe(200);
        });
    });

    describe("Participation Points", () => {
        it("should re-render page when setting participation points with partial data", async () => {
            const res = await teacherSession.
                put(`/escapeRooms/${escapeRoomId}`).
                send({
                    "participationPoints": 50,
                    "subject": "Science"
                });

            expect(res.statusCode).toBe(200);
        });
    });
});

describe("View Grades", () => {
    let teacherSession;
    const escapeRoomId = 1;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
    });

    it("should display grading view with calculated grades", async () => {
        const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/analytics/grading`);

        expect(res.statusCode).toBe(200);
    });
});

describe("Grade Export", () => {
    let teacherSession;
    const escapeRoomId = 1;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
    });

    it("should allow teacher to export grades to CSV", async () => {
        const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/analytics/download`);

        expect(res.statusCode).toBe(200);
    });
});

describe("Hint Scoring", () => {
    let teacherSession;
    const escapeRoomId = 1;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
    });

    it("should re-render page when configuring hint success points", async () => {
        const res = await teacherSession.
            put(`/escapeRooms/${escapeRoomId}`).
            send({
                "hintSuccessScore": 2,
                "subject": "Science"
            });

        expect(res.statusCode).toBe(200);
    });

    it("should re-render page when configuring hint failure penalty", async () => {
        const res = await teacherSession.
            put(`/escapeRooms/${escapeRoomId}`).
            send({
                "hintFailureScore": -3,
                "subject": "Science"
            });

        expect(res.statusCode).toBe(200);
    });
});
