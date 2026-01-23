"use strict";

module.exports = {
    "up": (queryInterface, Sequelize) => queryInterface.changeColumn(
        "reports",
        "reportAuthor",
        {
            "type": Sequelize.INTEGER,
            "allowNull": true
        }
    ),

    "down": (queryInterface, Sequelize) => queryInterface.changeColumn(
        "reports",
        "reportAuthor",
        {
            "type": Sequelize.INTEGER,
            "allowNull": false
        }
    )
};
