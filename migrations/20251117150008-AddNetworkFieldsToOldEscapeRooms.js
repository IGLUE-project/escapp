"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const { models } = require("../models");
    const transaction = await queryInterface.sequelize.transaction();
    let nErrors = 0;

    try {
      const rooms = await models.escapeRoom.findAll({ transaction });
      for (const er of rooms) {
        try {
          if(er.status === null){
            er.status = "draft"; //For old escape rooms
          }
          await er.save({ transaction });
        } catch (err) {
          nErrors++;
          console.error(`Error saving escapeRoom ${er.id}:`);
        }
      }
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
    if (nErrors > 0) {
      console.log("Migration 'AddNetworkFieldsToOldEscapeRooms' ended with " + nErrors + " errors.");
    } else {
      console.log("Migration 'AddNetworkFieldsToOldEscapeRooms' completed successfully.");
    }
  },
  async down(queryInterface, Sequelize) {

  },
};