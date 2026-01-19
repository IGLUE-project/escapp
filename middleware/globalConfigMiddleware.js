const globalConfig = require("../helpers/globalInstanceConfig");

module.exports = async (req, res, next) => {
    try {
        res.locals.globalConfig = {
            "disableChoosingRole": await globalConfig.getDisableChoosingRole(),
            "enableTeacherPersonalInfo": await globalConfig.getEnableTeacherPersonalInfo()
        };
    } catch (e) {
        // Fallback to .env values if DB is not available
        res.locals.globalConfig = {
            "disableChoosingRole": process.env.DISABLE_CHOOSING_ROLE === "true",
            "enableTeacherPersonalInfo": process.env.ENABLE_TEACHER_PERSONAL_INFO === "true"
        };
    }
    next();
};
