"use strict";

const path = require("path");
const fs = require("fs/promises");
const fsSync = require("fs");

module.exports = {
    async up (queryInterface, Sequelize) {
        console.log("Adding lang to escape rooms");

        const [escapeRooms] = await queryInterface.sequelize.query(`
            SELECT * FROM "escapeRooms";
        `);

        for (const escapeRoom of escapeRooms) {
            if (escapeRoom.lang !== null) {
                continue;
            }
            if (escapeRoom.forceLang !== null) {
                escapeRoom.lang = escapeRoom.forceLang;
            } else {
                const [users] = await queryInterface.sequelize.query(
                    `SELECT *
               FROM "users"
               WHERE id = :authorId`,
                    {"replacements": { "authorId": escapeRoom.authorId }}
                );
                const author = users[0];

                if (author.lang !== null) {
                    escapeRoom.lang = author.lang;
                } else {
                    escapeRoom.lang = "es";
                }
            }

            await queryInterface.bulkUpdate(
                "escapeRooms",
                {"lang": escapeRoom.lang},
                {"id": escapeRoom.id}
            );
        }

        console.log("Escape rooms updated");
    },

    async down (queryInterface, Sequelize) {
        // Irreversible fix
    }
};
