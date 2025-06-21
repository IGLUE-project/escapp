"use strict";

module.exports = {
    "up": (queryInterface, Sequelize) => Promise.all([
        queryInterface.changeColumn("reusablePuzzleInstances", "config", {
            "type": Sequelize.TEXT,
            "allowNull": true
        })
    ]),

    "down": (queryInterface, Sequelize) => Promise.all([
        queryInterface.changeColumn("reusablePuzzleInstance", "config", {
            "type": Sequelize.STRING,
            "allowNull": true
        })
    ])
};
