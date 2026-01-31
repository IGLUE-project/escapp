"use strict";

module.exports = {
    "up": (queryInterface) => queryInterface.bulkInsert("hints", [
        {
            "puzzleId": 1,
            "content": "Primera pista del primer reto",
            "createdAt": new Date(),
            "order": 0,
            "updatedAt": new Date()
        },
        {
            "puzzleId": 1,
            "content": "Segunda pista del primer reto",
            "createdAt": new Date(),
            "order": 1,
            "updatedAt": new Date()
        },
        {
            "puzzleId": 2,
            "content": "Primera pista del segundo reto",
            "createdAt": new Date(),
            "order": 0,
            "updatedAt": new Date()
        },
        {
            "puzzleId": 2,
            "content": "Segunda pista del segundo reto",
            "createdAt": new Date(),
            "order": 1,
            "updatedAt": new Date()
        },
        {
            "puzzleId": 3,
            "content": "Única pista del tercer reto",
            "createdAt": new Date(),
            "order": 0,
            "updatedAt": new Date()
        },
        // Hint for puzzle 4 (escape room 2)
        {
            "puzzleId": 4,
            "content": "Hint for math puzzle",
            "createdAt": new Date(),
            "order": 0,
            "updatedAt": new Date()
        }

    ]),

    "down": (queryInterface) => queryInterface.bulkDelete("hints", null, {})
};
