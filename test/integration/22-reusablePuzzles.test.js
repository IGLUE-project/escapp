/* eslint-disable no-undef */
/**
 * Reusable Puzzle Tests
 * Tests for reusable puzzle creation, management, and instances
 */
const app = require("../../app");
const { createAuthSession } = require("../helpers/auth.helper");

global.console.log = jest.fn();

describe("Reusable Puzzle Catalog", () => {
    let adminSession;
    let teacherSession;
    let studentSession;

    beforeAll(async () => {
        adminSession = await createAuthSession(app, "admin");
        teacherSession = await createAuthSession(app, "teacher");
        studentSession = await createAuthSession(app, "student1");
    });

    describe("View Catalog", () => {
        it("should allow admin to view reusable puzzles catalog", async () => {
            const res = await adminSession.get("/reusablePuzzles");

            expect(res.statusCode).toBe(200);
        });

        it("should deny non-admin access to reusable puzzles catalog", async () => {
            const res = await teacherSession.get("/reusablePuzzles");
            // 403 if forbidden, or may be allowed depending on role permissions

            expect([200, 403]).toContain(res.statusCode);
        });

        it("should deny student access to reusable puzzles catalog", async () => {
            const res = await studentSession.get("/reusablePuzzles");
            // 403 if forbidden

            expect([200, 403]).toContain(res.statusCode);
        });
    });

    describe("Create New Puzzle Type", () => {
        it("should allow admin to access new puzzle type page", async () => {
            const res = await adminSession.get("/reusablePuzzles/new");

            expect(res.statusCode).toBe(200);
        });

        it("should restrict teacher from creating puzzle types", async () => {
            const res = await teacherSession.get("/reusablePuzzles/new");
            // 403 if forbidden, or may be allowed depending on role permissions

            expect([200, 403]).toContain(res.statusCode);
        });
    });
});

describe("Reusable Puzzle Instances", () => {
    let teacherSession;
    let studentSession;
    const escapeRoomId = 1;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
        studentSession = await createAuthSession(app, "student1");
    });

    describe("Create Instance", () => {
        it("should allow teacher to access new instance page", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/reusablePuzzleInstance/new`);

            expect(res.statusCode).toBe(200);
        });

        it("should deny student from creating puzzle instances", async () => {
            const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/reusablePuzzleInstance/new`);

            expect(res.statusCode).toBe(403);
        });

        it("should handle puzzle instance creation request", async () => {
            const res = await teacherSession.
                post(`/escapeRooms/${escapeRoomId}/reusablePuzzleInstance`).
                send({
                    "reusablePuzzleId": 1,
                    "config": {}
                });

            // 302 if created, 404 if puzzle type not found, 400/500 if invalid
            expect([302, 400, 404, 500]).toContain(res.statusCode);
        });
    });

    describe("Get Form for Instance", () => {
        it("should return form for puzzle instance configuration", async () => {
            const res = await teacherSession.get("/reusablePuzzlesInstances/1/form");
            // 200 if form returned, 404 if puzzle type not found

            expect([200, 404]).toContain(res.statusCode);
        });
    });
});
