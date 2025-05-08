module.exports = {
  "up" (queryInterface, Sequelize) {
      return Promise.all([
          queryInterface.addColumn("escapeRooms", "field", {"type": Sequelize.STRING}),
          queryInterface.addColumn("escapeRooms", "format", {"type": Sequelize.STRING}),
          queryInterface.addColumn("escapeRooms", "level", {"type": Sequelize.STRING})
      ]);
  },

  "down" (queryInterface) {
      return Promise.all([
          queryInterface.removeColumn("escapeRooms", "field"),
          queryInterface.removeColumn("escapeRooms", "format"),
          queryInterface.removeColumn("escapeRooms", "level")
      ]);
  }
};
