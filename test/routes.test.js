/* eslint-disable no-undef */
/* eslint-disable require-await */
/* eslint-disable no-loop-func */
const request = require("supertest");
const session = require("supertest-session");

global.console.log = jest.fn();

const app = require("../app");

// Const to = (promise) => promise.then((data) => [null, data]).catch((err) => [err]);

const studentId = 2;
const teacherId = 1;
const escapeRoomId = 1;
const turnoId = 1;
const puzzleId = 1;

const routes = require("./routes");

const teacherRoutes = routes.teacherRoutes(escapeRoomId, teacherId, puzzleId, turnoId);
const studentRoutes = routes.studentRoutes(escapeRoomId, studentId, puzzleId, turnoId);
const publicRoutes = routes.publicRoutes(escapeRoomId, teacherId, puzzleId, turnoId);

describe("Unauthenticated routes", () => {
    for (const { route, statusCode } of publicRoutes) {
        it(`should return ${statusCode} for unauthenticated route ${route}`, async () => {
            const res = await request(app).get(route);

            expect(res.statusCode).toBe(statusCode);
        });
    }
});

describe("Teacher routes", () => {
    let teacherSession = null;

    beforeAll(async () => {
        teacherSession = session(app);
        const res = await teacherSession.
            post("/").
            send({ "login": "admin@upm.es", "password": "1234" });

        expect(res.statusCode).toBe(302);
    });

    for (const { route, statusCode } of teacherRoutes) {
        it(`should return ${statusCode} for teacher route ${route}`, async () => {
            const res = await teacherSession.get(route);

            expect(res.statusCode).toBe(statusCode);
        });
    }
});

describe("Student routes", () => {
    let studentSession = null;

    beforeAll(async () => {
        studentSession = session(app);
        const res = await studentSession.
            post("/").
            send({ "login": "pepe@alumnos.upm.es", "password": "5678" });

        expect(res.statusCode).toBe(302);
    });

    for (const { route, statusCode } of studentRoutes) {
        it(`should return ${statusCode} for student route ${route}`, async () => {
            const res = await studentSession.get(route);

            expect(res.statusCode).toBe(statusCode);
        });
    }
});
