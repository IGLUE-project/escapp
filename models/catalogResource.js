// Definition of the Catalog resource model:

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "catalogResource",
        {
            "fileName": {
                "type": DataTypes.STRING,
                "allowNull": false,
            },
            "userId": {
                "type": DataTypes.INTEGER,
                "allowNull": false,
            },
            "type": {
                "type": DataTypes.STRING,
                "allowNull": false,
            },
            "url": {
                "type": DataTypes.STRING,
            }
        }
    );
};
