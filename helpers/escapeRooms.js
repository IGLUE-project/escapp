const sequelize = require("../models");
const {models} = sequelize;
const query = require("../queries");

const isAuthor = function(user, er) {
    return user.id === er.authorId;
}
exports.isAuthor = isAuthor;

const isCoAuthor = function(user, er) {
    return er.userCoAuthor.some(author =>
        author.id === user.id &&
        author.coAuthors &&
        author.coAuthors.confirmed
    );
}
exports.isCoAuthor = isCoAuthor;

const isCoAuthorPending = function(user, er) {
    return er.userCoAuthor.some(author =>
        author.id === user.id &&
        author.coAuthors &&
        !author.coAuthors.confirmed
    );
}
exports.isCoAuthorPending = isCoAuthorPending;

const isParticipant = async function(user,er,includeTest = false) {
    const participants = await models.user.findAll(query.user.escapeRoomsForUser(er.id, user.id,includeTest));
    return (participants && participants.length > 0);
}
exports.isParticipant = isParticipant;

const getParticipant = async function(user,er,includeTest = false) {
    if(!user.id){
        return undefined;
    }
    const participants = await models.user.findAll(query.user.escapeRoomsForUser(er.id, user.id,includeTest));
    if(participants && participants.length===1){
        return participants[0];
    }
    return undefined;
}
exports.getParticipant = getParticipant;