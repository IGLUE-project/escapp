"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
    // 1. Create new table 'subjects'
        await queryInterface.createTable("subjects", {
            "id": {
                "type": Sequelize.INTEGER,
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            },
            "escapeRoomId": {
                "type": Sequelize.INTEGER,
                "allowNull": false,
                "references": {
                    "model": "escapeRooms",
                    "key": "id"
                },
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE"
            },
            "subject": {
                "type": Sequelize.STRING,
                "allowNull": false
            },
            "createdAt": {
                "allowNull": false,
                "type": Sequelize.DATE,
                "defaultValue": Sequelize.fn("NOW")
            },
            "updatedAt": {
                "allowNull": false,
                "type": Sequelize.DATE,
                "defaultValue": Sequelize.fn("NOW")
            }
        });

        // 2. Transfer data from escapeRooms.subject to subjects table
        await queryInterface.sequelize.query(`
      INSERT INTO subjects ("escapeRoomId", subject, "createdAt", "updatedAt")
      SELECT id AS "escapeRoomId", subject, NOW(), NOW()
      FROM "escapeRooms"
      WHERE subject IS NOT NULL;
    `);

        // 3. Remove the subject column from escapeRooms
        await queryInterface.removeColumn("escapeRooms", "subject");
    },

    async down (queryInterface, Sequelize) {
    // 1. Add subject column back to escapeRooms
        await queryInterface.addColumn("escapeRooms", "subject", {
            "type": Sequelize.STRING,
            "allowNull": true
        });

        // 2. Move one subject (e.g., the first per escapeRoom) back
        await queryInterface.sequelize.query(`
      UPDATE "escapeRooms" AS e
      SET subject = s.subject
      FROM (
        SELECT DISTINCT ON ("escapeRoomId") "escapeRoomId", subject
        FROM subjects
        ORDER BY "escapeRoomId", id
      ) AS s
      WHERE e.id = s."escapeRoomId";
    `);

        // 3. Drop the subjects table
        await queryInterface.dropTable("subjects");
    }
};
