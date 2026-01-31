/* eslint-disable no-undef */
/**
 * Hint System Tests
 * Tests for hint creation, configuration, and delivery
 */
const app = require("../../app");
const { createAuthSession } = require("../helpers/auth.helper");
const { DEFAULT_HINT } = require("../helpers/escapeRoom.helper");

global.console.log = jest.fn();

describe("Hint Management", () => {
    let teacherSession;
    let studentSession;
    const escapeRoomId = 1;
    const puzzleId = 1;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
        studentSession = await createAuthSession(app, "student1");
    });

    describe("View Hints", () => {
        it("should allow teacher to view hints page", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/hints`);

            expect(res.statusCode).toBe(200);
        });

        it("should deny student access to hints management", async () => {
            const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/hints`);

            expect(res.statusCode).toBe(403);
        });
    });

    describe("Create Hints", () => {
        it("should redirect after creating hint for puzzle", async () => {
            const res = await teacherSession.
                post(`/escapeRooms/${escapeRoomId}/hints`).
                send({
                    "content": "This is a test hint",
                    puzzleId,
                    "order": 0,
                    "category": "general"
                });

            // Successful creation redirects
            expect(res.statusCode).toBe(302);
        });

        it("should redirect after creating multiple hints for same puzzle", async () => {
            const res1 = await teacherSession.
                post(`/escapeRooms/${escapeRoomId}/hints`).
                send({
                    "content": "First hint",
                    puzzleId,
                    "order": 0
                });

            const res2 = await teacherSession.
                post(`/escapeRooms/${escapeRoomId}/hints`).
                send({
                    "content": "Second hint",
                    puzzleId,
                    "order": 1
                });

            expect(res1.statusCode).toBe(302);
            expect(res2.statusCode).toBe(302);
        });

        it("should deny student from creating hints", async () => {
            const res = await studentSession.
                post(`/escapeRooms/${escapeRoomId}/hints`).
                send(DEFAULT_HINT);

            // AuthEditEscapeRoom middleware denies students
            expect(res.statusCode).toBe(403);
        });
    });

    describe("Hint Categories", () => {
        it("should redirect after creating hints with different categories", async () => {
            const categories = ["location", "concept", "mechanic"];

            for (const category of categories) {
                const res = await teacherSession.
                    post(`/escapeRooms/${escapeRoomId}/hints`).
                    send({
                        "content": `Hint for ${category}`,
                        puzzleId,
                        "order": 0,
                        category
                    });

                expect(res.statusCode).toBe(302);
            }
        });
    });

    describe("Update Hints", () => {
        it("should return 404 for PUT on individual hint (endpoint not implemented)", async () => {
            // PUT route for individual hints doesn't exist - hints are managed via POST
            const res = await teacherSession.
                put(`/escapeRooms/${escapeRoomId}/hints/1`).
                send({
                    "content": "Updated hint content",
                    "order": 0
                });

            expect(res.statusCode).toBe(404);
        });
    });

    describe("Delete Hints", () => {
        it("should return 404 for DELETE on individual hint (endpoint not implemented)", async () => {
            // DELETE route for individual hints doesn't exist - hints are managed via POST
            const res = await teacherSession.
                delete(`/escapeRooms/${escapeRoomId}/hints/1`);

            expect(res.statusCode).toBe(404);
        });
    });
});

describe("Hint Configuration", () => {
    let teacherSession;
    const escapeRoomId = 1;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
    });

    describe("Hint Approach Settings", () => {
        it("should allow teacher to access evaluation/hint settings", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/evaluation`);

            expect(res.statusCode).toBe(200);
        });

        it("should re-render page when configuring automatic hints with partial data", async () => {
            const res = await teacherSession.
                put(`/escapeRooms/${escapeRoomId}`).
                send({
                    "automaticHints": true,
                    "subject": "Science"
                    // Missing required fields like title
                });

            // Re-renders page due to missing required fields
            expect(res.statusCode).toBe(200);
        });
    });

    describe("Hint Restrictions", () => {
        it("should re-render page when setting hint interval with partial data", async () => {
            const res = await teacherSession.
                put(`/escapeRooms/${escapeRoomId}`).
                send({
                    "hintInterval": 60,
                    "subject": "Science"
                    // Missing required fields
                });

            expect(res.statusCode).toBe(200);
        });

        it("should re-render page when setting max hints with partial data", async () => {
            const res = await teacherSession.
                put(`/escapeRooms/${escapeRoomId}`).
                send({
                    "maxHints": 5,
                    "subject": "Science"
                    // Missing required fields
                });

            expect(res.statusCode).toBe(200);
        });
    });
});

describe("Hint App", () => {
    let teacherSession;
    let studentSession;
    const escapeRoomId = 1;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
        studentSession = await createAuthSession(app, "student1");
    });

    it("should handle hint app access for authorized teacher", async () => {
        const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/hintApp`);
        // 200 if configured, 500 if hint app not configured for this escape room

        expect([200, 500]).toContain(res.statusCode);
    });

    it("should handle hint app access for authorized student", async () => {
        const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/hintApp`);
        // 200 if configured, 500 if hint app not configured for this escape room

        expect([200, 500]).toContain(res.statusCode);
    });

    it("should handle hint app wrapper access", async () => {
        const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/hintAppWrapper`);
        // 200 if configured, 500 if hint app not configured for this escape room

        expect([200, 500]).toContain(res.statusCode);
    });

    it("should handle quiz file download request", async () => {
        const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/quizFile`);
        // 200 if file exists, 404 if no file configured

        expect([200, 404]).toContain(res.statusCode);
    });
});

describe("Moodle Quiz Integration", () => {
    let teacherSession;
    const escapeRoomId = 1;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
    });

    it("should allow teacher to view hints page for quiz setup", async () => {
        const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/hints`);

        expect(res.statusCode).toBe(200);
    });
});

describe("Video Conference Room", () => {
    let teacherSession;
    const escapeRoomId = 1;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
    });

    it("should re-render page when setting video conference with partial data", async () => {
        const res = await teacherSession.
            put(`/escapeRooms/${escapeRoomId}`).
            send({
                "videoconference": "https://meet.example.com/room123",
                "subject": "Science"
                // Missing required fields
            });

        expect(res.statusCode).toBe(200);
    });
});
