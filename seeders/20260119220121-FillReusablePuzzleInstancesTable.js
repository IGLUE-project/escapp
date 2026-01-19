"use strict";

module.exports = {
    "up": async (queryInterface) => {
        // Create reusablePuzzleInstance with id 1
        await queryInterface.bulkInsert("reusablePuzzleInstances", [
            {
                "id": 1,
                "name": "Test Keypad Instance",
                "config": JSON.stringify({"solution": "1234"}),
                "reusablePuzzleId": 1,
                "escapeRoomId": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            }
        ]);

        // Link reusablePuzzleInstance 1 to puzzle 1
        await queryInterface.bulkInsert("reusablePuzzleInstancePuzzle", [
            {
                "reusablePuzzleInstanceId": 1,
                "puzzleId": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            }
        ]);
    },

    "down": async (queryInterface) => {
        await queryInterface.bulkDelete("reusablePuzzleInstancePuzzle", null, {});
        await queryInterface.bulkDelete("reusablePuzzleInstances", null, {});
    }
};
