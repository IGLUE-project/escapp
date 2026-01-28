/* eslint-disable no-undef */
/**
 * API Endpoint Tests
 * Tests for REST API endpoints used by external web applications
 *
 * Note: These API endpoints require the user to be a valid participant
 * with a token. Without being a participant, all endpoints return 404.
 */
const request = require("supertest");
const app = require("../../app");
const { createAuthSession } = require("../helpers/auth.helper");

global.console.log = jest.fn();

describe("API Endpoints", () => {
    let studentSession;
    let teacherSession;
    const escapeRoomId = 1;
    const puzzleId = 1;

    beforeAll(async () => {
        studentSession = await createAuthSession(app, "student1");
        teacherSession = await createAuthSession(app, "teacher");
    });

    describe("Puzzle Check API", () => {
        it("should deny access when user is not a participant", async () => {
            const res = await studentSession
                .post(`/api/escapeRooms/${escapeRoomId}/puzzles/${puzzleId}/check`)
                .send({ answer: "testanswer" });

            // 401 if participant check first, 404 if puzzle not found
            expect([401, 404]).toContain(res.statusCode);
        });

        it("should return JSON content type on success", async () => {
            const res = await studentSession
                .post(`/api/escapeRooms/${escapeRoomId}/puzzles/${puzzleId}/check`)
                .send({ answer: "testanswer" });

            // Even 404 responses should be JSON from API
            expect(res.headers["content-type"]).toMatch(/json/);
        });
    });

    describe("Puzzle Submit API", () => {
        it("should deny access for non-participant when submitting answer", async () => {
            const res = await studentSession
                .post(`/api/escapeRooms/${escapeRoomId}/puzzles/${puzzleId}/submit`)
                .send({ answer: "testanswer" });

            // 401 if participant check first, 404 if puzzle not found
            expect([401, 404]).toContain(res.statusCode);
        });

        it("should deny access for non-participant with empty solution", async () => {
            const res = await studentSession
                .post(`/api/escapeRooms/${escapeRoomId}/puzzles/${puzzleId}/submit`)
                .send({ answer: "" });

            // 401 if participant check first, 404 if puzzle not found
            expect([401, 404]).toContain(res.statusCode);
        });

        it("should deny access for non-participant with missing answer", async () => {
            const res = await studentSession
                .post(`/api/escapeRooms/${escapeRoomId}/puzzles/${puzzleId}/submit`)
                .send({});

            // 401 if participant check first, 404 if puzzle not found
            expect([401, 404]).toContain(res.statusCode);
        });
    });

    describe("Check Solution API", () => {
        it("should deny access when user is not a participant", async () => {
            const res = await studentSession
                .post(`/api/escapeRooms/${escapeRoomId}/puzzles/${puzzleId}/check_solution`)
                .send({ answer: "testanswer" });

            // 401 if participant check first, 404 if puzzle not found
            expect([401, 404]).toContain(res.statusCode);
        });
    });

    describe("Auth API", () => {
        it("should deny access when user is not a participant", async () => {
            const res = await studentSession
                .post(`/api/escapeRooms/${escapeRoomId}/auth`)
                .send({});

            // 401 if participant check first, 404 if escape room not found
            expect([401, 404]).toContain(res.statusCode);
        });
    });

    describe("Start API", () => {
        it("should deny access when user is not a participant", async () => {
            const res = await studentSession
                .post(`/api/escapeRooms/${escapeRoomId}/start`)
                .send({});

            // 401 if participant check first, 404 if escape room not found
            expect([401, 404]).toContain(res.statusCode);
        });
    });

    describe("Tags API", () => {
        it("should return tags list", async () => {
            const res = await request(app).get("/api/tags");

            expect(res.statusCode).toBe(200);
            expect(res.headers["content-type"]).toMatch(/json/);
        });
    });

    describe("API Authentication", () => {
        it("should deny unauthenticated API requests", async () => {
            const res = await request(app)
                .post(`/api/escapeRooms/${escapeRoomId}/puzzles/${puzzleId}/check`)
                .send({ answer: "test" });

            // 401 if participant check first, 404 if puzzle not found
            expect([401, 404]).toContain(res.statusCode);
        });
    });

    describe("API Error Handling", () => {
        it("should return 404 for non-existent escape room", async () => {
            const res = await studentSession
                .post(`/api/escapeRooms/99999/puzzles/1/check`)
                .send({ answer: "test" });

            expect(res.statusCode).toBe(404);
        });

        it("should return 404 for non-existent puzzle", async () => {
            const res = await studentSession
                .post(`/api/escapeRooms/${escapeRoomId}/puzzles/99999/check`)
                .send({ answer: "test" });

            expect(res.statusCode).toBe(404);
        });
    });
});

describe("API Rate Limiting", () => {
    let studentSession;
    const escapeRoomId = 1;
    const puzzleId = 1;

    beforeAll(async () => {
        studentSession = await createAuthSession(app, "student1");
    });

    it("should handle multiple rapid requests without crashing", async () => {
        const requests = [];
        for (let i = 0; i < 5; i++) {
            requests.push(
                studentSession
                    .post(`/api/escapeRooms/${escapeRoomId}/puzzles/${puzzleId}/check`)
                    .send({ answer: `test${i}` })
            );
        }

        const responses = await Promise.all(requests);

        // All should complete (401 if not participant, 404 if puzzle not found)
        for (const res of responses) {
            expect([401, 404]).toContain(res.statusCode);
        }
    });
});
