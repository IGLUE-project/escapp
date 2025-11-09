// Definition of the Scene model:

module.exports = function (sequelize, DataTypes) {

    const Scene = sequelize.define(
        "scene",
        {
            escapeRoomId: { type: DataTypes.INTEGER },
            content: { 
                type: DataTypes.JSON,
                validate: { notEmpty: { msg: "content must not be empty" } } 
            },
            name: {
                type: DataTypes.STRING,
                validate: { notEmpty: { msg: "name must not be empty" } }
            },
            thumbnail: { type: DataTypes.TEXT }
        }
    );

    Scene.beforeSave((scene, options) => {
        //console.log("Scene content to save:", scene.content);
        scene.name = scene.content.title
        scene.thumbnail = scene.content.avatar
    });

    return Scene;
};