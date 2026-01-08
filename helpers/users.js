const isAdmin = function (user) {
    return Boolean(user.isAdmin);
};

exports.isAdmin = isAdmin;

const isStudent = function (user) {
    return Boolean(user.isStudent);
};

exports.isStudent = isStudent;


exports.userNeedsConfirmation = function (user) {
    
    if (isStudent(user)) {
        return process.env.EMAIL_VALIDATION_STUDENT === "true";
    } else {
        return process.env.EMAIL_VALIDATION_TEACHER === "true" ;
    }
};