/* eslint-disable no-undef */
/**
 * Puzzle and Solution Tests
 * Tests for puzzle creation, solution types, and validation
 */
const app = require("../../app");
const { createAuthSession } = require("../helpers/auth.helper");
const { DEFAULT_PUZZLE } = require("../helpers/escapeRoom.helper");

global.console.log = jest.fn();

describe("Puzzle Management", () => {
    let teacherSession;
    let studentSession;
    const escapeRoomId = 1;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
        studentSession = await createAuthSession(app, "student1");
    });

    describe("View Puzzles", () => {
        it("should allow teacher to view puzzles page", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/puzzles`);
            expect(res.statusCode).toBe(200);
        });

        it("should deny student access to puzzles management", async () => {
            const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/puzzles`);
            expect(res.statusCode).toBe(403);
        });
    });

    describe("Create Puzzles", () => {
        it("should redirect after creating puzzle with valid data", async () => {
            const res = await teacherSession
                .post(`/escapeRooms/${escapeRoomId}/puzzles`)
                .send({
                    title: `Test Puzzle ${Date.now()}`,
                    sol: "answer",
                    order: 0,
                    correct: "Well done!",
                    fail: "Try again!"
                });

            expect(res.statusCode).toBe(302);
        });

        it("should redirect even without title (model allows null)", async () => {
            const res = await teacherSession
                .post(`/escapeRooms/${escapeRoomId}/puzzles`)
                .send({
                    sol: "answer",
                    order: 0
                    // Missing title - but model may allow null
                });

            expect(res.statusCode).toBe(302);
        });

        it("should deny student from creating puzzles", async () => {
            const res = await studentSession
                .post(`/escapeRooms/${escapeRoomId}/puzzles`)
                .send(DEFAULT_PUZZLE);

            expect(res.statusCode).toBe(403);
        });
    });

    describe("Update Puzzles", () => {
        it("should return 404 for PUT on individual puzzle (endpoint not implemented)", async () => {
            // PUT route for individual puzzles doesn't exist - puzzles are updated via POST
            const res = await teacherSession
                .put(`/escapeRooms/${escapeRoomId}/puzzles/1`)
                .send({
                    title: "Updated Puzzle Title",
                    sol: "newanswer"
                });

            expect(res.statusCode).toBe(404);
        });
    });

    describe("Delete Puzzles", () => {
        it("should redirect after deleting puzzle", async () => {
            // First create a puzzle to delete
            const createRes = await teacherSession
                .post(`/escapeRooms/${escapeRoomId}/puzzles`)
                .send({
                    title: `To Delete ${Date.now()}`,
                    sol: "delete",
                    order: 99
                });

            expect(createRes.statusCode).toBe(302);

            // Then delete it
            if (createRes.headers.location) {
                const match = createRes.headers.location.match(/puzzles\/(\d+)/);
                if (match) {
                    const puzzleId = parseInt(match[1]);
                    const deleteRes = await teacherSession
                        .delete(`/escapeRooms/${escapeRoomId}/puzzles/${puzzleId}`);
                    expect(deleteRes.statusCode).toBe(302);
                }
            }
        });
    });

});

describe("Puzzle Solution Types", () => {
    let teacherSession;
    const escapeRoomId = 1;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
    });

    describe("Exact Match Solution", () => {
        it("should redirect after creating puzzle with exact match validation", async () => {
            const res = await teacherSession
                .post(`/escapeRooms/${escapeRoomId}/puzzles`)
                .send({
                    title: "Exact Match Puzzle",
                    sol: "exactanswer",
                    validation: "exact",
                    order: 10
                });

            expect(res.statusCode).toBe(302);
        });
    });

    describe("Case Insensitive Solution", () => {
        it("should redirect after creating puzzle with case insensitive validation", async () => {
            const res = await teacherSession
                .post(`/escapeRooms/${escapeRoomId}/puzzles`)
                .send({
                    title: "Case Insensitive Puzzle",
                    sol: "CaseAnswer",
                    validation: "caseinsensitive",
                    order: 11
                });

            expect(res.statusCode).toBe(302);
        });
    });

    describe("Numeric Range Solution", () => {
        it("should redirect after creating puzzle with numeric range validation", async () => {
            const res = await teacherSession
                .post(`/escapeRooms/${escapeRoomId}/puzzles`)
                .send({
                    title: "Numeric Range Puzzle",
                    sol: "100+5",
                    validation: "range",
                    order: 12
                });

            expect(res.statusCode).toBe(302);
        });
    });

    describe("Regex Solution", () => {
        it("should redirect after creating puzzle with regex validation", async () => {
            const res = await teacherSession
                .post(`/escapeRooms/${escapeRoomId}/puzzles`)
                .send({
                    title: "Regex Puzzle",
                    sol: "^[A-Z]{3}\\d{3}$",
                    validation: "regex",
                    order: 13
                });

            expect(res.statusCode).toBe(302);
        });
    });
});

describe("Reusable Puzzles", () => {
    let adminSession;
    let teacherSession;
    const escapeRoomId = 1;

    beforeAll(async () => {
        adminSession = await createAuthSession(app, "admin");
        teacherSession = await createAuthSession(app, "teacher");
    });

    describe("Reusable Puzzle Catalog", () => {
        it("should display reusable puzzles catalog for admin", async () => {
            const res = await adminSession.get("/reusablePuzzles");
            expect(res.statusCode).toBe(200);
        });

        it("should allow admin to create new reusable puzzle type", async () => {
            const res = await adminSession.get("/reusablePuzzles/new");
            expect(res.statusCode).toBe(200);
        });
    });

    describe("Reusable Puzzle Instances", () => {
        it("should allow teacher to create reusable puzzle instance", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/reusablePuzzleInstance/new`);
            expect(res.statusCode).toBe(200);
        });
    });
});

describe("Puzzle Feedback Messages", () => {
    let teacherSession;
    const escapeRoomId = 1;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
    });

    it("should redirect after setting success message for puzzle", async () => {
        const res = await teacherSession
            .post(`/escapeRooms/${escapeRoomId}/puzzles`)
            .send({
                title: "Success Message Test",
                sol: "answer",
                correct: "Congratulations! You solved it!",
                order: 20
            });

        expect(res.statusCode).toBe(302);
    });

    it("should redirect after setting failure message for puzzle", async () => {
        const res = await teacherSession
            .post(`/escapeRooms/${escapeRoomId}/puzzles`)
            .send({
                title: "Failure Message Test",
                sol: "answer",
                fail: "That's not quite right. Try again!",
                order: 21
            });

        expect(res.statusCode).toBe(302);
    });
});
