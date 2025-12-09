const isAdmin = function (user) {
    return Boolean(user.isAdmin);
};

exports.isAdmin = isAdmin;

const isStudent = function (user) {
    return Boolean(user.isStudent);
};

exports.isStudent = isStudent;
