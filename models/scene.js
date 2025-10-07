// Definition of the Scene model:

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "scene",
        {
            "config": {"type": DataTypes.STRING},
            "name": {
                "type": DataTypes.STRING,
                "validate": {"notEmpty": {"msg": "name must not be empty"}}
            },
            "escapeRoomId": {"type": DataTypes.INTEGER},
        }
    );
};
