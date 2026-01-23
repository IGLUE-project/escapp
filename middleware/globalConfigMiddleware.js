const globalConfig = require("../helpers/globalInstanceConfig");

module.exports = async (req, res, next) => {
    try {
        res.locals.globalConfig = {
            "disableChoosingRole": await globalConfig.getDisableChoosingRole(),
            "enableTeacherPersonalInfo": await globalConfig.getEnableTeacherPersonalInfo(),
            "availableLanguages": await globalConfig.getAvailableLanguagesArray(),
            "exportAllowed": await globalConfig.getExportAllowed(),
            "EXPORT_ALLOWED_OPTIONS": globalConfig.EXPORT_ALLOWED_OPTIONS
        };
    } catch (e) {
        // Fallback to .env values if DB is not available
        const defaultLanguages = (process.env.AVAILABLE_LANGUAGES || "en,es,sr").split(",").map((l) => l.trim());
        res.locals.globalConfig = {
            "disableChoosingRole": process.env.DISABLE_CHOOSING_ROLE === "true",
            "enableTeacherPersonalInfo": process.env.ENABLE_TEACHER_PERSONAL_INFO === "true",
            "availableLanguages": defaultLanguages,
            "exportAllowed": process.env.EXPORT_ALLOWED || "ONLY_OWNER",
            "EXPORT_ALLOWED_OPTIONS": globalConfig.EXPORT_ALLOWED_OPTIONS
        };
    }
    next();
};
