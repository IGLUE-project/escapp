"use strict";

module.exports = {
    up (queryInterface) {
        return queryInterface.bulkInsert("subjects", [
            {
                "escapeRoomId": 1,
                "subject": "Science",
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "escapeRoomId": 2,
                "subject": "Mathematics",
                "createdAt": new Date(),
                "updatedAt": new Date()
            }
        ]);
    },

    down (queryInterface) {
        return queryInterface.bulkDelete("subjects", null, {});
    }
};
