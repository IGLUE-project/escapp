"use strict";

module.exports = {
    "up": (queryInterface) => queryInterface.bulkInsert("hintApps", [
        {
            "escapeRoomId": 1,
            "public_id": "escapeRoom/attachments/idrxxae96xldmvzgpf9e",
            "url": "https://res.cloudinary.com/dbrbgqgfg/raw/upload/v1554105049/escapeRoom/attachments/idrxxae96xldmvzgpf9e",
            "filename": "react.xml",
            "mime": "text/xml",
            "createdAt": new Date(),
            "updatedAt": new Date()
        },
        // HintApp for escape room 2 (testTeacher's escape room)
        {
            "escapeRoomId": 2,
            "public_id": "escapeRoom/attachments/teachertest123",
            "url": "https://res.cloudinary.com/dbrbgqgfg/raw/upload/v1554105049/escapeRoom/attachments/teachertest123",
            "filename": "math.xml",
            "mime": "text/xml",
            "createdAt": new Date(),
            "updatedAt": new Date()
        }

    ]),

    "down": (queryInterface) => queryInterface.bulkDelete("hintApps", null, {})
};
