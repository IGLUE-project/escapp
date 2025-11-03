module.exports = {
    "up": (queryInterface, Sequelize) => queryInterface.
        changeColumn("escapeRooms", "description", {"type": Sequelize.TEXT})
};