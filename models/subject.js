// Models/subject.js

// Definition of the Session model:

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "subject",
        {
            "id": {
                "type": DataTypes.INTEGER,
                "primaryKey": true,
                "autoIncrement": true
            },
            "escapeRoomId": {
                "type": DataTypes.INTEGER,
                "allowNull": false
            },
            "subject": {
                "type": DataTypes.STRING,
                "allowNull": false
            }
        }
    );
};
