"use strict";

module.exports = {
    up (queryInterface) {
        return queryInterface.bulkInsert("reusablePuzzles", [
            {
                "name": "2D",
                "description": "WIP",
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Cables",
                "description": "WIP",
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Chess",
                "description": "WIP",
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Lock",
                "description": "WIP",
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Math",
                "description": "WIP",
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Memory",
                "description": "WIP",
                "createdAt": new Date(),
                "updatedAt": new Date()
            }
        ]);
    },

    down (queryInterface) {
        return queryInterface.bulkDelete("users", null, {});
    }
};
