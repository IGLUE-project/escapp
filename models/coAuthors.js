// Models/coAuthors.js
module.exports = (sequelize, DataTypes) => sequelize.define("coAuthors", {
    "escapeRoomId": {
        "type": DataTypes.INTEGER,
        "allowNull": false,
        "primaryKey": true
    },
    "userId": {
        "type": DataTypes.INTEGER,
        "allowNull": false,
        "primaryKey": true
    },
    "confirmed": {
        "type": DataTypes.BOOLEAN,
        "allowNull": false,
        "defaultValue": false
    }
});
