/* eslint-disable no-undef */
/**
 * Network and Repository Tests
 * Tests for network search, repository, and instance connections
 */
const request = require("supertest");
const app = require("../../app");
const { createAuthSession } = require("../helpers/auth.helper");
const { getModels } = require("../helpers/database.helper");

global.console.log = jest.fn();

describe("Network Search", () => {
    let teacherSession;
    let studentSession;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
        studentSession = await createAuthSession(app, "student1");
    });

    describe("Search Page Access", () => {
        it("should display network search page for unauthenticated users", async () => {
            const res = await request(app).get("/network/search");

            expect(res.statusCode).toBe(200);
        });

        it("should display network search page for students", async () => {
            const res = await studentSession.get("/network/search");

            expect(res.statusCode).toBe(200);
        });

        it("should display network search page for teachers", async () => {
            const res = await teacherSession.get("/network/search");

            expect(res.statusCode).toBe(200);
        });

        it("should render admin-configured instance URLs in the instance filter", async () => {
            const { adminConfig } = getModels();
            const testUrls = ["https://instance1.example.com", "https://instance2.example.com"];

            await adminConfig.upsert({ "id": 1, "urls": JSON.stringify(testUrls) });

            const res = await request(app).get("/network/search");

            expect(res.statusCode).toBe(200);
            expect(res.text).toContain("instance1.example.com");
            expect(res.text).toContain("instance2.example.com");
            expect(res.text).toContain("value=\"https://instance1.example.com\"");
            expect(res.text).toContain("value=\"https://instance2.example.com\"");
        });

        it("should render search page even if no admin URLs are configured", async () => {
            const { adminConfig } = getModels();

            await adminConfig.destroy({ "where": { "id": 1 } });

            const res = await request(app).get("/network/search");

            expect(res.statusCode).toBe(200);
        });
    });

    describe("Network Query", () => {
        it("should allow authenticated users to query network", async () => {
            const res = await teacherSession.get("/network/query");

            expect(res.statusCode).toBe(200);
        });

        it("should allow students to query network", async () => {
            const res = await studentSession.get("/network/query");

            expect(res.statusCode).toBe(200);
        });
    });
});

describe("Repository", () => {
    let teacherSession;
    let studentSession;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
        studentSession = await createAuthSession(app, "student1");
    });

    describe("Browse Escape Rooms", () => {
        it("should allow viewing escape rooms list", async () => {
            const res = await teacherSession.get("/escapeRooms");

            expect(res.statusCode).toBe(200);
        });

        it("should allow students to view escape rooms list", async () => {
            const res = await studentSession.get("/escapeRooms");

            expect(res.statusCode).toBe(200);
        });
    });

    describe("Search Escape Rooms", () => {
        it("should search by title", async () => {
            const res = await teacherSession.get("/escapeRooms?search=test");

            expect(res.statusCode).toBe(200);
        });

        it("should search by subject/topic", async () => {
            const res = await teacherSession.get("/escapeRooms?subject=Science");

            expect(res.statusCode).toBe(200);
        });

        it("should search by educational level", async () => {
            const res = await teacherSession.get("/escapeRooms?eduContext=highschool");

            expect(res.statusCode).toBe(200);
        });
    });
});

describe("Contact Owner", () => {
    let teacherSession;
    let studentSession;
    const escapeRoomId = 1;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
        studentSession = await createAuthSession(app, "student1");
    });

    it("should allow accessing contact page", async () => {
        const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/contact`);

        expect(res.statusCode).toBe(200);
    });

    it("should allow student to access contact page", async () => {
        const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/contact`);

        expect(res.statusCode).toBe(200);
    });

    it("should redirect after sending contact email with valid captcha", async () => {
        const res = await teacherSession.
            post(`/network/${escapeRoomId}/sendcontactemail`).
            send({
                "text": "Test contact message",
                "contactName": "Test User",
                "contactEmail": "test@example.com",
                "captchaAnswer": "5",
                "captchaExpected": "5"
            });

        // Successful submission redirects back
        expect(res.statusCode).toBe(302);
    });

    it("should redirect with error for invalid captcha", async () => {
        const res = await teacherSession.
            post(`/network/${escapeRoomId}/sendcontactemail`).
            send({
                "text": "Test contact message",
                "captchaAnswer": "0",
                "captchaExpected": "999"
            });

        // Invalid captcha redirects back with error
        expect(res.statusCode).toBe(302);
    });
});

describe("Report Content", () => {
    let teacherSession;
    let studentSession;
    let adminSession;
    const escapeRoomId = 1;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
        studentSession = await createAuthSession(app, "student1");
        adminSession = await createAuthSession(app, "admin");
    });

    describe("Report Page", () => {
        it("should allow teacher to access report page", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/report`);

            expect(res.statusCode).toBe(200);
        });

        it("should allow student to access report page", async () => {
            const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/report`);

            expect(res.statusCode).toBe(200);
        });
    });

    describe("Submit Report", () => {
        it("should re-render form when submitting report with invalid captcha", async () => {
            const res = await studentSession.
                post(`/escapeRooms/${escapeRoomId}/report`).
                send({
                    "reason": "inappropriateContent",
                    "comments": "Test report description",
                    "captchaAnswer": "0",
                    "captchaExpected": "999"
                });

            // Re-renders form due to captcha validation failure
            expect(res.statusCode).toBe(200);
        });

        it("should redirect after successful report submission", async () => {
            const res = await studentSession.
                post(`/escapeRooms/${escapeRoomId}/report`).
                send({
                    "reason": "inappropriateContent",
                    "comments": "Test report description",
                    "captchaAnswer": "5",
                    "captchaExpected": "5"
                });

            // Successful submission redirects to escape room page
            expect(res.statusCode).toBe(302);
        });
    });

    describe("Admin Reports View", () => {
        it("should allow admin to view reports", async () => {
            const res = await adminSession.get("/reports");

            expect(res.statusCode).toBe(200);
        });
    });
});
