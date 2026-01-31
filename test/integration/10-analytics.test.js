/* eslint-disable no-undef */
/**
 * Analytics Tests
 * Tests for learning analytics dashboard and data export
 */
const app = require("../../app");
const { createAuthSession } = require("../helpers/auth.helper");

global.console.log = jest.fn();

describe("Learning Analytics Dashboard", () => {
    let teacherSession;
    let studentSession;
    const escapeRoomId = 1;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
        studentSession = await createAuthSession(app, "student1");
    });

    describe("Analytics Access", () => {
        it("should allow teacher to access analytics dashboard", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/analytics/`);

            expect(res.statusCode).toBe(200);
        });

        it("should deny student access to analytics dashboard", async () => {
            const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/analytics/`);

            expect(res.statusCode).toBe(403);
        });
    });

    describe("Analytics Views", () => {
        it("should display ranking view", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/analytics/ranking`);

            expect(res.statusCode).toBe(200);
        });

        it("should display timeline view", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/analytics/timeline`);

            expect(res.statusCode).toBe(200);
        });

        it("should display progress view", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/analytics/progress`);

            expect(res.statusCode).toBe(200);
        });

        it("should display histogram view", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/analytics/histogram`);

            expect(res.statusCode).toBe(200);
        });
    });

    describe("Hint Analytics", () => {
        it("should display hints by participants view", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/analytics/hints/participants`);

            expect(res.statusCode).toBe(200);
        });

        it("should display hints by teams view", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/analytics/hints/teams`);

            expect(res.statusCode).toBe(200);
        });
    });

    describe("Puzzle Analytics", () => {
        it("should display puzzles by participants view", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/analytics/puzzles/participants`);

            expect(res.statusCode).toBe(200);
        });

        it("should display puzzles by teams view", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/analytics/puzzles/teams`);

            expect(res.statusCode).toBe(200);
        });

        it("should display puzzle statistics view", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/analytics/puzzles`);

            expect(res.statusCode).toBe(200);
        });
    });

    describe("Grading View", () => {
        it("should display grading view", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/analytics/grading`);

            expect(res.statusCode).toBe(200);
        });
    });
});

describe("Data Export", () => {
    let teacherSession;
    let studentSession;
    const escapeRoomId = 1;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
        studentSession = await createAuthSession(app, "student1");
    });

    describe("CSV Export", () => {
        it("should allow teacher to download analytics CSV", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/analytics/download`);

            expect(res.statusCode).toBe(200);
        });

        it("should deny student access to analytics download", async () => {
            const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/analytics/download`);

            expect(res.statusCode).toBe(403);
        });
    });

    describe("Raw Data Export", () => {
        it("should allow teacher to download raw data", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/analytics/download_raw`);

            expect(res.statusCode).toBe(200);
        });

        it("should deny student access to raw data download", async () => {
            const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/analytics/download_raw`);

            expect(res.statusCode).toBe(403);
        });
    });
});

describe("Analytics Filtering", () => {
    let teacherSession;
    const escapeRoomId = 1;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
    });

    it("should filter analytics by shift", async () => {
        const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/analytics/?turnoId=1`);

        expect(res.statusCode).toBe(200);
    });

    it("should filter ranking by shift", async () => {
        const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/analytics/ranking?turnoId=1`);

        expect(res.statusCode).toBe(200);
    });
});
