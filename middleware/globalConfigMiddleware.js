const globalConfig = require("../helpers/globalInstanceConfig");

module.exports = async (req, res, next) => {
    try {
        res.locals.globalConfig = {
            "disableChoosingRole": await globalConfig.getDisableChoosingRole(),
            "enableTeacherPersonalInfo": await globalConfig.getEnableTeacherPersonalInfo(),
            "availableLanguages": await globalConfig.getAvailableLanguagesArray(),
            "exportAllowed": await globalConfig.getExportAllowed(),
            "errorReportUrl": await globalConfig.getErrorReportUrl(),
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
            "errorReportUrl": process.env.ERROR_REPORT_URL || globalConfig.DEFAULT_ERROR_REPORT_URL,
            "EXPORT_ALLOWED_OPTIONS": globalConfig.EXPORT_ALLOWED_OPTIONS
        };
    }
    next();
};
