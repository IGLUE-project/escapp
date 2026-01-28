/* eslint-disable no-undef */
/* eslint-disable require-await */
/* eslint-disable no-loop-func */
const request = require("supertest");
const session = require("supertest-session");

global.console.log = jest.fn();

const app = require("../app");

// Test IDs - escape room 2 is owned by testTeacher (user 11)
const studentId = 2;
const teacherId = 11; // testTeacher user ID
const teacherEscapeRoomId = 2; // Escape room owned by testTeacher
const teacherTurnoId = 5; // Turno in escape room 2
const teacherPuzzleId = 4; // Puzzle in escape room 2
const adminEscapeRoomId = 1; // Escape room owned by admin
const adminTurnoId = 1;
const adminPuzzleId = 1;

const routes = require("./routes");

// Teacher routes use escape room 2 (owned by testTeacher)
const teacherRoutes = routes.teacherRoutes(teacherEscapeRoomId, teacherId, teacherPuzzleId, teacherTurnoId);
// Student routes test against escape room 1 (to test access control)
const studentRoutes = routes.studentRoutes(adminEscapeRoomId, studentId, adminPuzzleId, adminTurnoId);
// Public routes test against escape room 1
const publicRoutes = routes.publicRoutes(adminEscapeRoomId, teacherId, adminPuzzleId, adminTurnoId);

describe("Unauthenticated routes", () => {
    for (const { route, statusCode } of publicRoutes) {
        it(`should return ${Array.isArray(statusCode) ? statusCode.join('/') : statusCode} for unauthenticated route ${route}`, async () => {
            const res = await request(app).get(route);

            if (Array.isArray(statusCode)) {
                expect(statusCode).toContain(res.statusCode);
            } else {
                expect(res.statusCode).toBe(statusCode);
            }
        });
    }
});

describe("Teacher routes", () => {
    let teacherSession = null;

    beforeAll(async () => {
        teacherSession = session(app);
        // Use testTeacher - a teacher who is NOT an admin
        const res = await teacherSession.
            post("/").
            send({ "login": "testteacher@test.com", "password": "testteacher" });

        expect(res.statusCode).toBe(302);
    });

    for (const { route, statusCode } of teacherRoutes) {
        it(`should return ${Array.isArray(statusCode) ? statusCode.join('/') : statusCode} for teacher route ${route}`, async () => {
            const res = await teacherSession.get(route);

            if (Array.isArray(statusCode)) {
                expect(statusCode).toContain(res.statusCode);
            } else {
                expect(res.statusCode).toBe(statusCode);
            }
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
        it(`should return ${Array.isArray(statusCode) ? statusCode.join('/') : statusCode} for student route ${route}`, async () => {
            const res = await studentSession.get(route);

            if (Array.isArray(statusCode)) {
                expect(statusCode).toContain(res.statusCode);
            } else {
                expect(res.statusCode).toBe(statusCode);
            }
        });
    }
});
