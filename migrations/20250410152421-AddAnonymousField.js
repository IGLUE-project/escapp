"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: (queryInterface, Sequelize) => 
        queryInterface.addColumn("users", "anonymized", {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }),
    down: (queryInterface) => 
        queryInterface.removeColumn("users", "anonymized")
};