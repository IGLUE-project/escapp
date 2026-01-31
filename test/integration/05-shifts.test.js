/* eslint-disable no-undef */
/**
 * Shift (Turno) Management Tests
 * Tests for creating and managing escape room shifts
 */
const app = require("../../app");
const { createAuthSession } = require("../helpers/auth.helper");
const { DEFAULT_TURNO } = require("../helpers/escapeRoom.helper");

global.console.log = jest.fn();

describe("Shift Management", () => {
    let teacherSession;
    let studentSession;
    const escapeRoomId = 1;

    beforeAll(async () => {
        teacherSession = await createAuthSession(app, "teacher");
        studentSession = await createAuthSession(app, "student1");
    });

    describe("View Shifts", () => {
        it("should allow teacher to view activation/shifts page", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/activate`);

            expect(res.statusCode).toBe(200);
        });

        it("should deny student access to shift management", async () => {
            const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/activate`);

            expect(res.statusCode).toBe(403);
        });
    });

    describe("Create Shifts", () => {
        it("should redirect after creating asynchronous shift", async () => {
            const tomorrow = new Date(Date.now() + 86400000);
            const nextWeek = new Date(Date.now() + 7 * 86400000);

            const res = await teacherSession.
                post(`/escapeRooms/${escapeRoomId}/turnos/new`).
                send({
                    "date": tomorrow.toISOString().split("T")[0],
                    "endDate": nextWeek.toISOString().split("T")[0],
                    "startTime": "00:00",
                    "endTime": "23:59",
                    "password": "",
                    "nlessSupervisor": 1,
                    "capacity": 100,
                    "allowNewTeamAfterStart": true
                });

            // Successful creation redirects back to activate page
            expect(res.statusCode).toBe(302);
        });

        it("should redirect after creating scheduled shift with specific date", async () => {
            const tomorrow = new Date(Date.now() + 86400000);

            const res = await teacherSession.
                post(`/escapeRooms/${escapeRoomId}/turnos/new`).
                send({
                    "date": tomorrow.toISOString().split("T")[0],
                    "startTime": "10:00",
                    "endTime": "12:00",
                    "password": "",
                    "nlessSupervisor": 0,
                    "capacity": 30
                });

            expect(res.statusCode).toBe(302);
        });

        it("should redirect after creating password-protected shift", async () => {
            const tomorrow = new Date(Date.now() + 86400000);

            const res = await teacherSession.
                post(`/escapeRooms/${escapeRoomId}/turnos/new`).
                send({
                    "date": tomorrow.toISOString().split("T")[0],
                    "startTime": "14:00",
                    "endTime": "16:00",
                    "password": "secretpass123",
                    "capacity": 20
                });

            expect(res.statusCode).toBe(302);
        });

        it("should deny student from creating shifts", async () => {
            const res = await studentSession.
                post(`/escapeRooms/${escapeRoomId}/turnos/new`).
                send(DEFAULT_TURNO);

            // AuthEditEscapeRoom middleware denies students
            expect(res.statusCode).toBe(403);
        });
    });

    describe("Shift Capacity", () => {
        it("should redirect after setting maximum capacity for shift", async () => {
            const tomorrow = new Date(Date.now() + 86400000);

            const res = await teacherSession.
                post(`/escapeRooms/${escapeRoomId}/turnos/new`).
                send({
                    "date": tomorrow.toISOString().split("T")[0],
                    "startTime": "09:00",
                    "endTime": "11:00",
                    "capacity": 5,
                    "password": ""
                });

            expect(res.statusCode).toBe(302);
        });
    });

    describe("Update Shifts", () => {
        it("should redirect after updating shift with valid data", async () => {
            const tomorrow = new Date(Date.now() + 86400000);

            const res = await teacherSession.
                put(`/escapeRooms/${escapeRoomId}/turnos/1`).
                send({
                    "date": tomorrow.toISOString().split("T")[0],
                    "from": tomorrow.toISOString(),
                    "to": new Date(tomorrow.getTime() + 7200000).toISOString(), // +2 hours
                    "capacity": 50,
                    "password": "newpassword",
                    "place": "Room 101"
                });

            // Successful update redirects back to activate page
            expect(res.statusCode).toBe(302);
        });

        it("should render page with error when update fails validation", async () => {
            const res = await teacherSession.
                put(`/escapeRooms/${escapeRoomId}/turnos/1`).
                send({
                    // Invalid date - should cause validation error
                    "date": "invalid-date",
                    "capacity": 50
                });

            // Validation error renders the page
            expect(res.statusCode).toBe(200);
        });
    });

    // Teacher Shift Control tests must run BEFORE delete tests
    describe("Teacher Shift Control", () => {
        it("should allow teacher to view play interface for shift", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/turnos/1/play`);

            expect(res.statusCode).toBe(200);
        });

        it("should allow teacher to view finish interface for shift", async () => {
            const res = await teacherSession.get(`/escapeRooms/${escapeRoomId}/turnos/1/finish`);

            expect(res.statusCode).toBe(200);
        });

        it("should deny student access to teacher play interface", async () => {
            const res = await studentSession.get(`/escapeRooms/${escapeRoomId}/turnos/1/play`);

            expect(res.statusCode).toBe(403);
        });
    });

    // Delete tests run last to avoid affecting other tests
    describe("Delete Shifts", () => {
        it("should return 404 when deleting non-existent shift", async () => {
            const res = await teacherSession.
                delete(`/escapeRooms/${escapeRoomId}/turnos/99999`);

            expect(res.statusCode).toBe(404);
        });

        it("should return 500 when deleting shift with dependencies", async () => {
            // Turno 2 has teams attached, so deletion fails with 500
            const deleteRes = await teacherSession.
                delete(`/escapeRooms/${escapeRoomId}/turnos/2`);

            // Delete fails due to foreign key constraints
            expect(deleteRes.statusCode).toBe(500);
        });

        it("should deny student from deleting shifts", async () => {
            const res = await studentSession.
                delete(`/escapeRooms/${escapeRoomId}/turnos/1`);

            // AuthEditEscapeRoom middleware denies students
            expect(res.statusCode).toBe(403);
        });
    });
});
