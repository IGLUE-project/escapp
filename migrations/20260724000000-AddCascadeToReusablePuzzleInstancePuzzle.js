"use strict";

/*
 * The join table reusablePuzzleInstancePuzzle (puzzle <-> reusablePuzzleInstance)
 * was created without foreign keys, so deleting a puzzle or a reusablePuzzleInstance
 * left orphaned association rows behind. Those stale links produced false "this
 * challenge is linked to another resource" warnings and broke the linked resource.
 *
 * This migration purges the existing orphans and adds ON DELETE CASCADE foreign
 * keys so future deletions clean up the join table automatically.
 */

const TABLE = "reusablePuzzleInstancePuzzle";
const FK_PUZZLE = "reusablePuzzleInstancePuzzle_puzzleId_fkey";
const FK_INSTANCE = "reusablePuzzleInstancePuzzle_reusablePuzzleInstanceId_fkey";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface) {
        const transaction = await queryInterface.sequelize.transaction();

        try {
            // 1) Remove orphaned associations (pointing to puzzles or instances that no longer exist)
            await queryInterface.sequelize.query(
                `DELETE FROM "${TABLE}" j
                 WHERE NOT EXISTS (SELECT 1 FROM "puzzles" p WHERE p.id = j."puzzleId")
                    OR NOT EXISTS (SELECT 1 FROM "reusablePuzzleInstances" r WHERE r.id = j."reusablePuzzleInstanceId")`,
                { transaction }
            );

            // 2) Add cascading foreign keys so future deletions clean up the join table
            await queryInterface.addConstraint(TABLE, {
                "fields": ["puzzleId"],
                "type": "foreign key",
                "name": FK_PUZZLE,
                "references": { "table": "puzzles", "field": "id" },
                "onDelete": "cascade",
                "onUpdate": "cascade",
                transaction
            });

            await queryInterface.addConstraint(TABLE, {
                "fields": ["reusablePuzzleInstanceId"],
                "type": "foreign key",
                "name": FK_INSTANCE,
                "references": { "table": "reusablePuzzleInstances", "field": "id" },
                "onDelete": "cascade",
                "onUpdate": "cascade",
                transaction
            });

            await transaction.commit();
        } catch (err) {
            await transaction.rollback();
            throw err;
        }
    },

    async down (queryInterface) {
        const transaction = await queryInterface.sequelize.transaction();

        try {
            await queryInterface.removeConstraint(TABLE, FK_PUZZLE, { transaction });
            await queryInterface.removeConstraint(TABLE, FK_INSTANCE, { transaction });
            await transaction.commit();
        } catch (err) {
            await transaction.rollback();
            throw err;
        }
    }
};
