"use strict";

module.exports = {
    "up": (queryInterface) => queryInterface.bulkInsert("puzzles", [
        {
            "escapeRoomId": 1,
            "id": 1,
            "title": "Reto 1",
            "sol": "1234",
            "score": 20,
            "order": 0,
            "automatic": false,
            "createdAt": new Date(),
            "updatedAt": new Date()
        },
        {
            "escapeRoomId": 1,
            "id": 2,
            "title": "Reto 2",
            "sol": "9101",
            "score": 20,
            "order": 1,
            "automatic": false,
            "createdAt": new Date(),
            "updatedAt": new Date()
        },
        {
            "escapeRoomId": 1,
            "id": 3,
            "title": "Reto 3",
            "sol": "5678",
            "score": 20,
            "order": 2,
            "automatic": false,
            "createdAt": new Date(),
            "updatedAt": new Date()
        },
        // Puzzle for escape room 2 (owned by testTeacher)
        {
            "escapeRoomId": 2,
            "id": 4,
            "title": "Math Puzzle 1",
            "sol": "42",
            "score": 25,
            "order": 0,
            "automatic": true,
            "createdAt": new Date(),
            "updatedAt": new Date()
        }
    ]),

    "down": (queryInterface) => queryInterface.bulkDelete("puzzles", null, {})
};
