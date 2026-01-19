"use strict";

module.exports = {
    async up (queryInterface, Sequelize) {
        const transaction = await queryInterface.sequelize.transaction();
        let nErrors = 0;

        try {
            const rooms = await queryInterface.sequelize.query(
                'SELECT id, status FROM "escapeRooms"',
                { transaction, type: Sequelize.QueryTypes.SELECT }
            );

            for (const room of rooms) {
                try {
                    if (room.status === null) {
                        await queryInterface.sequelize.query(
                            'UPDATE "escapeRooms" SET status = ? WHERE id = ?',
                            { replacements: ['draft', room.id], transaction }
                        );
                    }
                } catch (err) {
                    nErrors++;
                    console.error(`Error updating escapeRoom ${room.id}:`);
                }
            }
            await transaction.commit();
        } catch (err) {
            await transaction.rollback();
            throw err;
        }
        if (nErrors > 0) {
            console.log(`Migration 'AddNetworkFieldsToOldEscapeRooms' ended with ${nErrors} errors.`);
        } else {
            console.log("Migration 'AddNetworkFieldsToOldEscapeRooms' completed successfully.");
        }
    },
    async down () {
    }
};
