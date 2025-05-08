module.exports = {
    "up" (queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.addColumn("escapeRooms", "status", {"type": Sequelize.STRING}),
            queryInterface.addColumn("escapeRooms", "license", {"type": Sequelize.STRING})
        ]);
    },

    "down" (queryInterface) {
        return Promise.all([
            queryInterface.removeColumn("escapeRooms", "status"),
            queryInterface.removeColumn("escapeRooms", "license")
        ]);
    }
};
