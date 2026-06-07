"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkUpdate(
      "reusablePuzzles",
      { name: "DragAndDropClassification" },
      { name: "Classification" }
    );
    await queryInterface.bulkUpdate(
      "reusablePuzzles",
      { name: "DigitalClassifier" },
      { name: "IpadClassifier" }
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkUpdate(
      "reusablePuzzles",
      { name: "Classification" },
      { name: "DragAndDropClassification" }
    );
    await queryInterface.bulkUpdate(
      "reusablePuzzles",
      { name: "IpadClassifier" },
      { name: "DigitalClassifier" }
    );
  }
};