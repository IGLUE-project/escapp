"use strict";

/*
 * Adds `puzzleId` to requestedHints so every hint request — automatic, manual/custom,
 * and failed attempts — records the puzzle the team was facing at request time. Until
 * now only automatic hints could be attributed (indirectly, via their linked hint's
 * puzzle); manual/failed hints had no puzzle at all, which broke the analytics CSVs.
 * Nullable + ON DELETE SET NULL, matching the existing userId column on this table.
 *
 * Written to be safe to re-run: the column is added with IF NOT EXISTS and the backfills
 * only touch rows still NULL, so a partial/failed run can simply be run again without the
 * usual "column already exists" trap. No wrapping transaction, to keep the lock the column
 * add takes on requestedHints as short as possible on a live table.
 */

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface) {
        // Idempotent column add (+ FK). ADD COLUMN of a nullable column is metadata-only
        // in Postgres (no table rewrite); the FK against puzzles(id) validates instantly
        // since every value is NULL.
        await queryInterface.sequelize.query(`
            ALTER TABLE "requestedHints"
            ADD COLUMN IF NOT EXISTS "puzzleId" INTEGER
            REFERENCES "puzzles" ("id") ON UPDATE CASCADE ON DELETE SET NULL
        `);

        // Retrospective backfill 1 — automatic hints (EXACT).
        // Automatic hints are linked to a predefined hint, which belongs to a puzzle, so
        // their puzzle is recoverable exactly. Indexed join on hints(id) (PK) — fast.
        await queryInterface.sequelize.query(`
            UPDATE "requestedHints" rh
            SET "puzzleId" = h."puzzleId"
            FROM "hints" h
            WHERE rh."hintId" = h."id" AND rh."puzzleId" IS NULL
        `);

        // Temporary index so backfill 2's per-hint lookup on retosSuperados is fast
        // regardless of table size (this table only has a PK by default). Dropped after.
        await queryInterface.sequelize.query(`
            CREATE INDEX IF NOT EXISTS "rs_team_created_bf_idx"
            ON "retosSuperados" ("teamId", "createdAt")
        `);

        // Retrospective backfill 2 — manual/custom and failed hints (INFERRED by timing).
        // A hint is about the puzzle the team was facing when it was requested, i.e. the
        // puzzle whose order equals how many puzzles the team had already solved before
        // that instant. That count comes from the solve timestamps in retosSuperados, so
        // the puzzle is: the ER puzzle whose "order" = COUNT(distinct puzzles solved by
        // this team before the hint's createdAt). Rows where that order no longer maps to
        // a puzzle (e.g. the team had solved everything) are left NULL. This assumes the
        // usual sequential progression; new hints store the exact puzzle at request time.
        await queryInterface.sequelize.query(`
            UPDATE "requestedHints" rh
            SET "puzzleId" = p."id"
            FROM "teams" tm
            JOIN "turnos" t ON t."id" = tm."turnoId"
            JOIN "puzzles" p ON p."escapeRoomId" = t."escapeRoomId"
            WHERE rh."teamId" = tm."id"
              AND rh."puzzleId" IS NULL
              AND p."order" = (
                  SELECT COUNT(DISTINCT rs."puzzleId")
                  FROM "retosSuperados" rs
                  WHERE rs."teamId" = rh."teamId"
                    AND rs."success" = true
                    AND rs."createdAt" < rh."createdAt"
              )
        `);

        await queryInterface.sequelize.query(`DROP INDEX IF EXISTS "rs_team_created_bf_idx"`);
    },

    async down (queryInterface) {
        await queryInterface.sequelize.query(`DROP INDEX IF EXISTS "rs_team_created_bf_idx"`);
        await queryInterface.removeColumn("requestedHints", "puzzleId");
    }
};
