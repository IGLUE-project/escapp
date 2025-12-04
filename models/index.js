const path = require("path");

// Load ORM
const { Sequelize } = require("sequelize");

const url = process.env.DATABASE_URL;

const sequelize = new Sequelize(url);// Import the definition of the Escape Room Table from escapeRoom.js


require(path.join(__dirname, "escapeRoom"))(sequelize, Sequelize.DataTypes);

// Session
require(path.join(__dirname, "session"))(sequelize, Sequelize.DataTypes);

// Import the definition of the Turns Table from turno.js
require(path.join(__dirname, "turno"))(sequelize, Sequelize.DataTypes);

// Import the definition of the Attachment Table from attachment.js
require(path.join(__dirname, "attachment"))(sequelize, Sequelize.DataTypes);

// Import the definition of the User Table from user.js
require(path.join(__dirname, "user"))(sequelize, Sequelize.DataTypes);

// Import the definition of the User Table from puzzle.js (Retos)
require(path.join(__dirname, "puzzle"))(sequelize, Sequelize.DataTypes);

// Import the definition of the User Table from hint.js (Pistas)
require(path.join(__dirname, "hint"))(sequelize, Sequelize.DataTypes);

// Import the definition of the Team Table from team.js
require(path.join(__dirname, "team"))(sequelize, Sequelize.DataTypes);

// Import the definition of the Attachment Table from attachment.js
require(path.join(__dirname, "hintApp"))(sequelize, Sequelize.DataTypes);

// Import the definition of the Participants Table from participants.js
require(path.join(__dirname, "participants"))(sequelize, Sequelize.DataTypes);

// Import the definition of the Requested Hints Table from requestedHint.js
require(path.join(__dirname, "requestedHint"))(sequelize, Sequelize.DataTypes);

// Import the definition of the Asset Table from attachment.js
require(path.join(__dirname, "asset"))(sequelize, Sequelize.DataTypes);

// Import the definition of the RetosSuperados Table from retosSuperados.js
require(path.join(__dirname, "retosSuperados"))(sequelize, Sequelize.DataTypes);

// Import the definition of the RetosSuperados Table from retosSuperados.js
require(path.join(__dirname, "reusablePuzzleInstance"))(sequelize, Sequelize.DataTypes);

// Import the definition of the RetosSuperados Table from retosSuperados.js
require(path.join(__dirname, "reusablePuzzle"))(sequelize, Sequelize.DataTypes);

// Import the definition of the coAuthors Table from coAuthors.js
require(path.join(__dirname, "coAuthors"))(sequelize, Sequelize.DataTypes);

// Import the definition of the report Table from report.js
require(path.join(__dirname, "report"))(sequelize, Sequelize.DataTypes);

// Import the definition of the subjects Table from subject.js
require(path.join(__dirname, "subject"))(sequelize, Sequelize.DataTypes);

// Import the definition of the scenes Table from scene.js
require(path.join(__dirname, "scene"))(sequelize, Sequelize.DataTypes);

// Relation between models
const { escapeRoom, turno, attachment, user, puzzle, hint, hintApp, team, requestedHint, retosSuperados, asset, reusablePuzzle, reusablePuzzleInstance, report, coAuthors, subject, scene} = sequelize.models;


// Relation 1-to-N between Escape Room and Turn:

turno.belongsTo(escapeRoom);
escapeRoom.hasMany(turno, {
    "onDelete": "CASCADE",
    "hooks": true
});

// Relation 1-to-1 between Escape Room and Attachment:
attachment.belongsTo(escapeRoom);
escapeRoom.hasOne(attachment, {
    "onDelete": "CASCADE",
    "hooks": true
});

// Relation 1-to-N between Escape Room and Puzzle:
puzzle.belongsTo(escapeRoom);
escapeRoom.hasMany(puzzle, {
    "onDelete": "CASCADE",
    "hooks": true
});

// Relation 1-to-N between Puzzle and Hint:
hint.belongsTo(puzzle);
puzzle.hasMany(hint, {
    "onDelete": "CASCADE",
    "hooks": true
});


// Relation 1-to-N between User and Quiz:
user.hasMany(escapeRoom, {
    "foreignKey": "authorId",
    "onDelete": "CASCADE",
    "hooks": true
});

escapeRoom.belongsTo(user, {
    "as": "author",
    "foreignKey": "authorId"
});


escapeRoom.belongsToMany(user, {
    "as": "userCoAuthor",
    "through": coAuthors,
    "foreignKey": { "name": "escapeRoomId", "allowNull": false },
    "otherKey": "userId",
    "onDelete": "CASCADE",
    "constraints": true
});

user.belongsToMany(escapeRoom, {
    "as": "escapeRoomCoAuthored",
    "through": coAuthors,
    "foreignKey": { "name": "userId", "allowNull": false },
    "otherKey": "escapeRoomId",
    "onDelete": "CASCADE",
    "constraints": true
});


// Relation N-to-M between Turno and User:
//    A User participates in many turnos.
//    A turn has many participants (the users who have added it as participant)
turno.belongsToMany(user, {
    "as": "students",
    "through": "participants",
    "foreignKey": {
        "name": "turnId",
        "allowNull": false
    },
    "onDelete": "CASCADE",
    "otherKey": "userId",
    "constraints": true

});

user.belongsToMany(turno, {
    "as": "turnosAgregados",
    "through": "participants",
    "onDelete": "CASCADE",
    "foreignKey": {
        "name": "userId",
        "allowNull": false
    },
    "otherKey": "turnId",
    "constraints": true

});


// Relation N-to-M between Team and User:
//    A User belongs to many teams.
//    A team has many members (the users who have added it as member)
team.belongsToMany(user, {
    "as": "teamMembers",
    "through": "members",
    "foreignKey": {
        "name": "teamId",
        "allowNull": false
    },
    "onDelete": "CASCADE",
    "otherKey": "userId",
    "constraints": true

});

user.belongsToMany(team, {
    "as": "teamsAgregados",
    "through": "members",
    "foreignKey": {
        "name": "userId",
        "allowNull": false
    },
    "onDelete": "CASCADE",
    "otherKey": "teamId",
    "constraints": true
});

// Relation 1-to-N between Turno and Team:
team.belongsTo(turno);
turno.hasMany(team, {
    "onDelete": "CASCADE",
    "foreignKey": "turnoId",
    "hooks": true
});

// Relation 1-to-1 between Escape Room and HintApp:
hintApp.belongsTo(escapeRoom);
escapeRoom.hasOne(hintApp, {
    "onDelete": "CASCADE",
    "hooks": true
});

// Relation N-to-M between Team and Puzzle:
team.belongsToMany(puzzle, {
    "as": "retos",
    "through": "retosSuperados",
    "foreignKey": {
        "name": "teamId",
        "allowNull": false
    },
    "onDelete": "CASCADE",
    "otherKey": "puzzleId",
    "constraints": true
});

puzzle.belongsToMany(team, {
    "as": "superados",
    "through": "retosSuperados",
    "unique": false,
    "foreignKey": {
        "name": "puzzleId",
        "allowNull": false
    },
    "onDelete": "CASCADE",
    "otherKey": "teamId",
    "constraints": true
});

// Relation N-to-M between Team and Puzzle:
retosSuperados.belongsTo(user, { "unique": false, "foreignKey": "userId" });
retosSuperados.belongsTo(team, { "unique": false, "foreignKey": "teamId" });
retosSuperados.belongsTo(puzzle, { "unique": false, "foreignKey": "puzzleId" });

team.hasMany(retosSuperados, {
    "as": "puzzlesSolved",
    "foreignKey": {
        "name": "teamId",
        "unique": false,
        "allowNull": false
    }
});

user.hasMany(retosSuperados, {
    "as": "personSolved",
    "foreignKey": {
        "name": "userId",
        "unique": false,
        "allowNull": false
    }
});

// Relation N-to-M between Team and Hint:
requestedHint.belongsTo(hint, {});
requestedHint.belongsTo(team, {});
requestedHint.belongsTo(user, {});

team.hasMany(requestedHint, {
    "onDelete": "CASCADE",
    "hooks": true
});

hint.hasMany(requestedHint, {
    "onDelete": "CASCADE",
    "hooks": true
});

user.hasMany(requestedHint, {
    "onDelete": "CASCADE",
    "hooks": true
});

escapeRoom.hasMany(asset, {
    "onDelete": "CASCADE",
    "hooks": true
});

asset.belongsTo(escapeRoom);

user.hasMany(asset, {
    "onDelete": "CASCADE",
    "hooks": true
});

asset.belongsTo(user);

// Reports
escapeRoom.hasMany(report, {
    "onDelete": "CASCADE",
    "hooks": true,
    "foreignKey": "escapeRoomId"
});

report.belongsTo(escapeRoom, {"foreignKey": "escapeRoomId"});
report.belongsTo(user, {"foreignKey": "reportAuthor"});

user.hasMany(report, {
    "onDelete": "CASCADE",
    "hooks": true,
    "foreignKey": "reportAuthor"
});

// Relation 1-to-N between EscapeRoom and reusablePuzzleInstance:
escapeRoom.hasMany(reusablePuzzleInstance, {
    "foreignKey": "escapeRoomId",
    "onDelete": "CASCADE",
    "hooks": true
});

reusablePuzzleInstance.belongsTo(escapeRoom, {"foreignKey": "escapeRoomId"});

// Relation 1-to-N between reusablePuzzle and reusablePuzzleInstance:
reusablePuzzle.hasMany(reusablePuzzleInstance, {
    "foreignKey": "escapeRoomId",
    "onDelete": "CASCADE",
    "hooks": true
});

reusablePuzzleInstance.belongsTo(reusablePuzzle, {"foreignKey": "reusablePuzzleId"});

reusablePuzzleInstance.belongsToMany(puzzle, {"through": "reusablePuzzleInstancePuzzle"});

puzzle.belongsToMany(reusablePuzzleInstance, {"through": "reusablePuzzleInstancePuzzle"});


// Scenes
scene.belongsTo(escapeRoom);
escapeRoom.hasMany(scene, {"foreignKey": "escapeRoomId"});

scene.hasMany(reusablePuzzleInstance);
reusablePuzzleInstance.belongsTo(scene);

scene.hasMany(puzzle);
puzzle.belongsTo(scene);


// Relation 1-to-N between EscapeRoom and Subject

subject.belongsTo(escapeRoom, {
    "foreignKey": "escapeRoomId",
    "onDelete": "CASCADE",
    "onUpdate": "CASCADE"
});

escapeRoom.hasMany(subject, {
    "foreignKey": "escapeRoomId",
    "onDelete": "CASCADE",
    "hooks": true
});

// Hooks
const escapeRoomHooks = require(path.join(__dirname, "escapeRoomHooks"));

escapeRoomHooks({ escapeRoom, turno });
const sceneHooks = require(path.join(__dirname, "sceneHooks"));

sceneHooks({ scene, puzzle });

module.exports = sequelize;
