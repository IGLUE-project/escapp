/* eslint-disable no-undef */
/**
 * Static Pages Tests
 * Tests for static pages, legal pages, and guides
 */
const request = require("supertest");
const app = require("../../app");
const { createAuthSession } = require("../helpers/auth.helper");

global.console.log = jest.fn();

describe("Legal Pages", () => {
    describe("Terms of Service", () => {
        it("should respond to terms page request", async () => {
            const res = await request(app).get("/terms");
            // 200 if rendered, 301 if redirect to external page
            expect([200, 301]).toContain(res.statusCode);
        });
    });

    describe("Privacy Policy", () => {
        it("should respond to privacy page request", async () => {
            const res = await request(app).get("/privacy");
            // 200 if rendered, 301 if redirect to external page
            expect([200, 301]).toContain(res.statusCode);
        });
    });

    describe("Cookie Policy", () => {
        it("should respond to cookie policy page request", async () => {
            const res = await request(app).get("/cookies");
            // 200 if rendered, 301 if redirect to external page
            expect([200, 301]).toContain(res.statusCode);
        });
    });

    describe("Cookie Acceptance", () => {
        it("should handle cookie acceptance POST", async () => {
            const res = await request(app)
                .post("/accept-cookies")
                .send({});

            // 200 or 302 depending on implementation
            expect([200, 302]).toContain(res.statusCode);
        });
    });
});

describe("Guide Pages", () => {
    describe("Guides Index", () => {
        it("should display guides index page", async () => {
            const res = await request(app).get("/guides");
            expect(res.statusCode).toBe(200);
        });
    });

    describe("Inspiration Guide", () => {
        it("should display inspiration guide page", async () => {
            const res = await request(app).get("/inspiration");
            expect(res.statusCode).toBe(200);
        });
    });

    describe("Manual", () => {
        it("should display manual page", async () => {
            const res = await request(app).get("/manual");
            expect(res.statusCode).toBe(200);
        });
    });
});

describe("Accept New Terms", () => {
    let studentSession;

    beforeAll(async () => {
        studentSession = await createAuthSession(app, "student1");
    });

    it("should display accept new terms page for logged in users", async () => {
        const res = await studentSession.get("/accept-new");
        expect(res.statusCode).toBe(200);
    });

    it("should redirect unauthenticated users from accept-new page", async () => {
        const res = await request(app).get("/accept-new");
        // Redirects to login
        expect(res.statusCode).toBe(302);
    });

    it("should allow accepting new terms", async () => {
        const res = await studentSession
            .post("/accept-new")
            .send({});

        // Redirects after acceptance
        expect(res.statusCode).toBe(302);
    });
});

describe("Navigation", () => {
    let studentSession;

    beforeAll(async () => {
        studentSession = await createAuthSession(app, "student1");
    });

    describe("Go Back", () => {
        it("should redirect to escape rooms when no back URL saved", async () => {
            const res = await studentSession.get("/goback");
            // Redirects to saved URL or default
            expect(res.statusCode).toBe(302);
        });
    });
});

describe("Scene Maker", () => {
    let teacherSession;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
    });

    it("should display scene viewer for authenticated users", async () => {
        const res = await teacherSession.get("/scene_maker/viewer");
        expect(res.statusCode).toBe(200);
    });

    it("should display scene preview for authenticated users", async () => {
        const res = await teacherSession.get("/scene_maker/preview");
        expect(res.statusCode).toBe(200);
    });

    it("should display scene editor for authenticated users", async () => {
        const res = await teacherSession.get("/scene_maker/editor");
        expect(res.statusCode).toBe(200);
    });

    it("should redirect unauthenticated users from scene editor", async () => {
        const res = await request(app).get("/scene_maker/editor");
        expect(res.statusCode).toBe(302);
    });
});
