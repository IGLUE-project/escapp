/* eslint-disable no-undef */
/* eslint-disable require-await */
/* eslint-disable no-loop-func */
const request = require("supertest");
const session = require("supertest-session");
const {execSync} = require("child_process");

global.console.log = jest.fn();

const app = require("../app");

// Const to = (promise) => promise.then((data) => [null, data]).catch((err) => [err]);

const studentId = 2;
const teacherId = 1;
const escapeRoomId = 1;
const turnoId = 1;
const puzzleId = 1;

const routes = require("./routes");
const dbName = process.env.DATABASE_URL;

const teacherRoutes = routes.teacherRoutes(escapeRoomId, teacherId, puzzleId, turnoId);
const studentRoutes = routes.studentRoutes(escapeRoomId, studentId, puzzleId, turnoId);
const publicRoutes = routes.publicRoutes(escapeRoomId, teacherId, puzzleId, turnoId);

let authenticatedSession = null;
let testSession = null;

beforeAll(() => {
    // Try {
    //     ExecSync(`npx sequelize db:drop --url ${dbName}`);
    // } catch (e) {
    //     Console.log("Test db could not be deleted");
    // }
    // Try {
    //     ExecSync(`npx sequelize db:create --url ${dbName}`);
    // } catch (e) {
    //     Console.log("Test db could not be created");
    // }
    // ExecSync(`npx sequelize db:migrate --url ${dbName}`);
    // ExecSync(`npx sequelize db:seed:all --url ${dbName}`);
});

beforeEach(async () => {
    testSession = await session(app);
});

describe("Unauthenticated routes", () => {
    for (const { route, statusCode } of publicRoutes) {
        it(`should return ${statusCode} for unauthenticated route ${route}`, async () => {
            const res = await request(app).get(route);

            expect(res.statusCode).toBe(statusCode);
        });
    }
});

describe("Teacher routes", () => {
    beforeAll(async () => {
        const res = await testSession.
            post("/").
            send({ "login": "admin@upm.es", "password": "1234" });

        expect(res.statusCode).toBe(302);
        authenticatedSession = testSession;
    });

    for (const { route, statusCode } of teacherRoutes) {
        it(`should return ${statusCode} for teacher route ${route}`, async () => {
            const res = await authenticatedSession.get(route);

            expect(res.statusCode).toBe(statusCode);
        });
    }
});

describe("Student routes", () => {
    beforeAll(async () => {
        const res = await testSession.
            post("/").
            send({ "login": "pepe@alumnos.upm.es", "password": "5678" });

        expect(res.statusCode).toBe(302);
        authenticatedSession = testSession;
    });

    for (const { route, statusCode } of studentRoutes) {
        it(`should return ${statusCode} for student route ${route}`, async () => {
            const res = await authenticatedSession.get(route);

            expect(res.statusCode).toBe(statusCode);
        });
    }
});
