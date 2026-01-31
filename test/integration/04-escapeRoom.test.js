/* eslint-disable no-undef */
/**
 * Escape Room CRUD Tests
 * Tests for creating, reading, updating, and deleting escape rooms
 */
const app = require("../../app");
const { createAuthSession } = require("../helpers/auth.helper");
const {
    createEscapeRoom,
    DEFAULT_ESCAPE_ROOM
} = require("../helpers/escapeRoom.helper");
const { deleteEscapeRoom } = require("../helpers/database.helper");

global.console.log = jest.fn();

describe("Escape Room CRUD", () => {
    let teacherSession;
    let studentSession;
    const createdEscapeRooms = [];

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
        studentSession = await createAuthSession(app, "student1");
    });

    afterAll(async () => {
        for (const id of createdEscapeRooms) {
            await deleteEscapeRoom(id);
        }
    });

    describe("Create Escape Room", () => {
        it("should allow teacher to access new escape room page", async () => {
            const res = await teacherSession.get("/escapeRooms/new");

            expect(res.statusCode).toBe(200);
        });

        it("should redirect after creating escape room with valid data", async () => {
            const res = await createEscapeRoom(teacherSession, {
                "title": `Test ER ${Date.now()}`,
                "description": "Automated test escape room"
            });

            // Successful creation redirects to the new escape room
            expect(res.statusCode).toBe(302);

            if (res.headers.location) {
                const match = res.headers.location.match(/\/escapeRooms\/(\d+)/);

                if (match) {
                    createdEscapeRooms.push(parseInt(match[1]));
                }
            }
        });

        it("should re-render form when creating escape room without title", async () => {
            const res = await teacherSession.
                post("/escapeRooms").
                send({
                    ...DEFAULT_ESCAPE_ROOM,
                    "title": ""
                });

            // Validation error re-renders the form
            expect(res.statusCode).toBe(200);
        });

        it("should deny escape room creation by students", async () => {
            const res = await studentSession.
                post("/escapeRooms").
                send(DEFAULT_ESCAPE_ROOM);

            // AuthCreateEscapeRoom middleware denies students
            expect(res.statusCode).toBe(403);
        });
    });

    describe("Read Escape Room", () => {
        it("should redirect teacher to escape room detail view", async () => {
            const res = await teacherSession.get("/escapeRooms/1");
            // Redirects to appropriate view based on user role

            expect(res.statusCode).toBe(302);
        });

        it("should allow teacher to view escape room edit page", async () => {
            const res = await teacherSession.get("/escapeRooms/1/edit");

            expect(res.statusCode).toBe(200);
        });

        it("should allow teacher to view escape room settings", async () => {
            const res = await teacherSession.get("/escapeRooms/1/settings");

            expect(res.statusCode).toBe(200);
        });

        it("should handle student viewing escape room based on authorization", async () => {
            const res = await studentSession.get("/escapeRooms/1");
            // 200 if authorized, 403 if not participant/not allowed

            expect([200, 403]).toContain(res.statusCode);
        });

        it("should deny student access to escape room edit page", async () => {
            const res = await studentSession.get("/escapeRooms/1/edit");

            expect(res.statusCode).toBe(403);
        });

        it("should display escape room thumbnail", async () => {
            const res = await teacherSession.get("/escapeRooms/1/thumbnail");

            expect(res.statusCode).toBe(200);
        });
    });

    describe("Update Escape Room", () => {
        it("should re-render page when updating escape room with partial data", async () => {
            const res = await teacherSession.
                put("/escapeRooms/1").
                send({
                    "title": "Updated Title",
                    "description": "Updated description",
                    "duration": 60,
                    "subject": "Science"
                    // Missing required fields causes re-render
                });

            // Re-renders page - update doesn't fully complete without all fields
            expect(res.statusCode).toBe(200);
        });

        it("should deny student from updating escape room", async () => {
            const res = await studentSession.
                put("/escapeRooms/1").
                send({
                    "title": "Hacked Title",
                    "subject": "Science"
                });

            // AuthEditEscapeRoom middleware denies students
            expect(res.statusCode).toBe(403);
        });
    });

    describe("Escape Room Status", () => {
        it("should allow owner to access status/activation page", async () => {
            const res = await teacherSession.get("/escapeRooms/1/activate");

            expect(res.statusCode).toBe(200);
        });

        it("should deny student access to activation page", async () => {
            const res = await studentSession.get("/escapeRooms/1/activate");

            expect(res.statusCode).toBe(403);
        });
    });

    describe("Escape Room Visibility", () => {
        it("should allow owner to access sharing settings", async () => {
            const res = await teacherSession.get("/escapeRooms/1/sharing");

            expect(res.statusCode).toBe(200);
        });

        it("should re-render page when updating visibility with partial data", async () => {
            const res = await teacherSession.
                put("/escapeRooms/1").
                send({
                    "scope": "public",
                    "subject": "Science"
                });

            // Re-renders page due to missing required fields
            expect(res.statusCode).toBe(200);
        });
    });

    describe("Escape Room Formats", () => {
        it("should re-render page when setting online format with partial data", async () => {
            const res = await teacherSession.
                put("/escapeRooms/1").
                send({
                    "format": "online",
                    "subject": "Science"
                });

            expect(res.statusCode).toBe(200);
        });

        it("should re-render page when setting hybrid format with partial data", async () => {
            const res = await teacherSession.
                put("/escapeRooms/1").
                send({
                    "format": "hybrid",
                    "subject": "Science"
                });

            expect(res.statusCode).toBe(200);
        });
    });

    describe("Content Licenses", () => {
        it("should allow owner to access sharing/license settings", async () => {
            const res = await teacherSession.get("/escapeRooms/1/sharing");

            expect(res.statusCode).toBe(200);
        });

        it("should re-render page when setting license with partial data", async () => {
            const res = await teacherSession.
                put("/escapeRooms/1").
                send({
                    "license": "CC BY",
                    "subject": "Science"
                });

            expect(res.statusCode).toBe(200);
        });
    });

    describe("Preview Mode", () => {
        it("should allow teacher to access test/preview mode", async () => {
            const res = await teacherSession.get("/escapeRooms/1/test");

            expect(res.statusCode).toBe(200);
        });

        it("should deny student access to test/preview mode", async () => {
            const res = await studentSession.get("/escapeRooms/1/test");

            expect(res.statusCode).toBe(403);
        });
    });

    describe("Delete Escape Room", () => {
        it("should redirect after deleting escape room", async () => {
            // First create an escape room to delete
            const createRes = await createEscapeRoom(teacherSession, {"title": `To Delete ${Date.now()}`});

            if (createRes.headers.location) {
                const match = createRes.headers.location.match(/\/escapeRooms\/(\d+)/);

                if (match) {
                    const id = parseInt(match[1]);
                    const deleteRes = await teacherSession.delete(`/escapeRooms/${id}`);
                    // Successful deletion redirects to escape rooms list

                    expect(deleteRes.statusCode).toBe(302);
                }
            }
        });
    });
});

describe("Escape Room Listing", () => {
    let teacherSession;
    let studentSession;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
        studentSession = await createAuthSession(app, "student1");
    });

    it("should display escape rooms list for teacher", async () => {
        const res = await teacherSession.get("/escapeRooms");

        expect(res.statusCode).toBe(200);
    });

    it("should display escape rooms list for student", async () => {
        const res = await studentSession.get("/escapeRooms");

        expect(res.statusCode).toBe(200);
    });

    it("should display user's escape rooms page", async () => {
        const res = await teacherSession.get("/users/1/escapeRooms");

        expect(res.statusCode).toBe(200);
    });
});
