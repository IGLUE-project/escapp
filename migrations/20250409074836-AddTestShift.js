"use strict";


module.exports = {
    async up (queryInterface) {
        const transaction = await queryInterface.sequelize.transaction();

        try {
            const [rooms] = await queryInterface.sequelize.query("SELECT id, \"authorId\" FROM \"escapeRooms\"", { transaction });

            for (const room of rooms) {
                const [turnos] = await queryInterface.bulkInsert("turnos", [
                    {
                        "place": "Test",
                        "escapeRoomId": room.id,
                        "createdAt": new Date(),
                        "updatedAt": new Date(),
                        "status": "test"
                    }
                ], { "returning": true, transaction });

                const [teams] = await queryInterface.bulkInsert("teams", [
                    {
                        "name": "Test",
                        "turnoId": turnos.id,
                        "createdAt": new Date(),
                        "updatedAt": new Date()
                    }
                ], { "returning": true, transaction });

                await queryInterface.bulkInsert("participants", [
                    {
                        "userId": room.authorId,
                        "turnId": turnos.id,
                        "createdAt": new Date(),
                        "updatedAt": new Date()
                    }
                ], { transaction });

                // 3. Enroll room owner in the test team
                await queryInterface.bulkInsert("members", [
                    {
                        "userId": room.authorId,
                        "teamId": teams.id,
                        "createdAt": new Date(),
                        "updatedAt": new Date()
                    }
                ], { transaction });
            }

            await transaction.commit();
        } catch (err) {
            await transaction.rollback();
            throw err;
        }
    },

    async down (queryInterface) {
    // Clean-up if needed
        await queryInterface.bulkDelete("turnos", { "status": "test" }, {});
    }
};
