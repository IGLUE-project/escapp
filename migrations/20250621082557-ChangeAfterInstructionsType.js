module.exports = {
    "up": (queryInterface, Sequelize) => queryInterface.
        changeColumn("escapeRooms", "afterInstructions", {"type": Sequelize.TEXT}).then(() => queryInterface.changeColumn("escapeRooms", "afterInstructions", {"type": Sequelize.TEXT})),
    "down": (queryInterface, Sequelize) => queryInterface.
        changeColumn("escapeRooms", "afterInstructions", {"type": Sequelize.STRING}).then(() => queryInterface.changeColumn("escapeRooms", "afterInstructions", {"type": Sequelize.STRING}))
};
