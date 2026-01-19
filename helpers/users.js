const globalConfig = require("./globalInstanceConfig");

const isAdmin = function (user) {
    return Boolean(user.isAdmin);
};

exports.isAdmin = isAdmin;

const isStudent = function (user) {
    return Boolean(user.isStudent);
};

exports.isStudent = isStudent;


exports.userNeedsConfirmation = async function (user) {
    if (isStudent(user)) {
        return globalConfig.getEmailValidationStudent();
    }
    return globalConfig.getEmailValidationTeacher();
};
