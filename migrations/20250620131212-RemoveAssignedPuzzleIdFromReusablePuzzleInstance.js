"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      // 1) Read existing assignments
      const [rows] = await queryInterface.sequelize.query(
        `
          SELECT id AS "puzzleId",
                 "assignedReusablePuzzleInstance" AS "val"
          FROM puzzles
          WHERE "assignedReusablePuzzleInstance" IS NOT NULL
            AND TRIM("assignedReusablePuzzleInstance") <> ''
        `,
        { transaction }
      );

      // 2) Prepare join-table inserts
      const now = new Date();
      const inserts = [];
      for (const row of rows) {
        const raw = String(row.val);
        const parts = raw.split(",").map(s => s.trim()).filter(Boolean);
        for (const p of parts) {
          const rid = parseInt(p, 10);
          if (!Number.isNaN(rid)) {
            inserts.push({
              reusablePuzzleInstanceId: rid,
              puzzleId: row.puzzleId,
              createdAt: now,
              updatedAt: now
            });
          }
        }
      }

      if (inserts.length) {
        await queryInterface.bulkInsert(
          "reusablePuzzleInstancePuzzle",
          inserts,
          { transaction }
        );
      }

      // 3) Drop the old column
      await queryInterface.removeColumn(
        "puzzles",
        "assignedReusablePuzzleInstance",
        { transaction }
      );

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      // 1) Recreate the column (string to match the original)
      await queryInterface.addColumn(
        "puzzles",
        "assignedReusablePuzzleInstance",
        { type: Sequelize.STRING, allowNull: true },
        { transaction }
      );

      // 2) Repopulate from the join table using the smallest linked id per puzzle
      const [rows] = await queryInterface.sequelize.query(
        `
          SELECT puzzleId,
                 MIN("reusablePuzzleInstanceId") AS "rid"
          FROM "reusablePuzzleInstancePuzzle"
          GROUP BY puzzleId
        `,
        { transaction }
      );

      for (const { puzzleId, rid } of rows) {
        await queryInterface.sequelize.query(
          `
            UPDATE puzzles
            SET "assignedReusablePuzzleInstance" = :rid
            WHERE id = :puzzleId
          `,
          { replacements: { rid: String(rid), puzzleId }, transaction }
        );
      }

      await transaction.commit();
      
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};
