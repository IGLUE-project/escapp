/* eslint-disable no-undef */
/**
 * Scene Editor Tests
 * Tests for 2D scenario editor and scene management
 */
const app = require("../../app");
const { createAuthSession } = require("../helpers/auth.helper");

global.console.log = jest.fn();

describe("Scene Editor", () => {
    let teacherSession;
    let studentSession;
    const escapeRoomId = 1;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
        studentSession = await createAuthSession(app, "student1");
    });

    describe("Scene Maker Access", () => {
        it("should allow teacher to access scene editor", async () => {
            const res = await teacherSession.get("/scene_maker/editor");
            expect(res.statusCode).toBe(200);
        });

        it("should allow student to access scene editor", async () => {
            const res = await studentSession.get("/scene_maker/editor");
            expect(res.statusCode).toBe(200);
        });

        it("should allow teacher to access scene viewer", async () => {
            const res = await teacherSession.get("/scene_maker/viewer");
            expect(res.statusCode).toBe(200);
        });

        it("should allow teacher to access scene preview", async () => {
            const res = await teacherSession.get("/scene_maker/preview");
            expect(res.statusCode).toBe(200);
        });
    });

    describe("Create Scene", () => {
        it("should allow teacher to access new scene page", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/scenes/new`);
            expect(res.statusCode).toBe(200);
        });

        it("should create scene with valid data", async () => {
            const res = await teacherSession
                .post(`/escapeRooms/${escapeRoomId}/scenes`)
                .send({
                    scene: {
                        json: JSON.stringify({
                            name: "Test Scene",
                            width: 800,
                            height: 600,
                            objects: []
                        })
                    }
                });

            // Successful creation returns 201
            expect(res.statusCode).toBe(201);
        });

        it("should return 500 when creating scene with invalid JSON format", async () => {
            const res = await teacherSession
                .post(`/escapeRooms/${escapeRoomId}/scenes`)
                .send({
                    scene: {
                        json: "not valid json {"
                    }
                });

            // Invalid JSON format causes parse error
            expect(res.statusCode).toBe(500);
        });
    });

    describe("Update Scene", () => {
        it("should return 500 for invalid scene data format", async () => {
            const res = await teacherSession
                .put(`/escapeRooms/${escapeRoomId}/scenes/99999/edit`)
                .send({
                    name: "Updated Scene Name"
                });

            // Controller expects scene.json field, invalid format returns 500
            expect(res.statusCode).toBe(500);
        });

        it("should return 404 for non-existent scene with valid data", async () => {
            const res = await teacherSession
                .put(`/escapeRooms/${escapeRoomId}/scenes/99999/edit`)
                .send({
                    scene: { json: JSON.stringify({ name: "Test" }) }
                });

            // Non-existent scene returns 404
            expect(res.statusCode).toBe(404);
        });

        it("should return 404 for wrong update URL format", async () => {
            // Using wrong URL format (missing /edit)
            const res = await teacherSession
                .put(`/escapeRooms/${escapeRoomId}/scenes/1`)
                .send({
                    name: "Updated Scene Name"
                });

            expect(res.statusCode).toBe(404);
        });
    });

    describe("Delete Scene", () => {
        it("should return 404 when deleting non-existent scene", async () => {
            const res = await teacherSession
                .delete(`/escapeRooms/${escapeRoomId}/scenes/99999`);

            expect(res.statusCode).toBe(404);
        });

        it("should deny student from deleting scenes", async () => {
            const res = await studentSession
                .delete(`/escapeRooms/${escapeRoomId}/scenes/1`);

            expect(res.statusCode).toBe(403);
        });
    });
});

describe("Scene Thumbnails", () => {
    let teacherSession;
    const escapeRoomId = 1;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
    });

    it("should return escape room thumbnail", async () => {
        const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/thumbnail`);
        expect(res.statusCode).toBe(200);
    });
});
