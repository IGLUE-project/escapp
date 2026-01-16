"use strict";

module.exports = {
    async up (queryInterface, Sequelize) {
        try {
            await queryInterface.describeTable("reusablePuzzleInstancePuzzle");
            // If this succeeds, the table already exists
        } catch (err) {
            // If it throws, the table does not exist
            return queryInterface.createTable(
                "reusablePuzzleInstancePuzzle",
                {
                    "reusablePuzzleInstanceId": {
                        "type": Sequelize.INTEGER,
                        "primaryKey": true,
                        "unique": "compositeKey",
                        "allowNull": false
                    },
                    "puzzleId": {
                        "type": Sequelize.INTEGER,
                        "primaryKey": true,
                        "unique": "compositeKey",
                        "allowNull": false
                    },
                    "createdAt": {
                        "type": Sequelize.DATE,
                        "allowNull": false
                    },
                    "updatedAt": {
                        "type": Sequelize.DATE,
                        "allowNull": false
                    }
                },
                {"sync": {"force": true}}
            );
        }
    },

    down (queryInterface) {
        return queryInterface.dropTable("reusablePuzzleInstancePuzzle");
    }
};
