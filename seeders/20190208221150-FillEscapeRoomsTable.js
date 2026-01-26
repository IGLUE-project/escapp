"use strict";

module.exports = {
    up (queryInterface) {
        return queryInterface.bulkInsert("escapeRooms", [
            {
                "title": "My first escape room",
                "duration": 120,
                "description": "Educational escape room",
                "teamSize": 2,
                "invitation": "assfdtWeQv",
                "teamInstructions": "[{\"type\":\"text\",\"puzzles\":[\"0\",\"all\"],\"payload\":{\"text\":\"You can add a custom message, images, links... Do not forget to setup when you want to display this information by clicking in the eye icon on the left.</p>\"}}]",
                "authorId": 1,
                "scoreParticipation": 40,
                "status": "completed",
                "publishedOnce": true,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            // Escape room owned by testTeacher (user 11) for teacher-only tests
            {
                "title": "Teacher Test Escape Room",
                "duration": 60,
                "description": "Escape room for testing teacher features",
                "teamSize": 4,
                "invitation": "teacherTest1",
                "authorId": 11,
                "scoreParticipation": 50,
                "status": "active",
                "createdAt": new Date(),
                "updatedAt": new Date()
            }
        ]);
    },

    down (queryInterface) {
        return queryInterface.bulkDelete("escapeRooms", null, {});
    }
};
