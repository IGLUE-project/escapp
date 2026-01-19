const {models} = require("../models");
// Cache for admin config settings
let cachedConfig = null;
let cacheTimestamp = null;
const CACHE_TTL = 60000; // 1 minute cache

/**
 * Load admin config from database and cache it
 */
const loadConfig = async function () {
    try {
        const config = await models.adminConfig.findOne({"where": {"id": 1}});
        cachedConfig = config ? config.dataValues : null;
        cacheTimestamp = Date.now();
        return cachedConfig;
    } catch (e) {
        console.error("Error loading admin config:", e);
        return null;
    }
};

/**
 * Get cached config, refreshing if stale
 */
const getConfig = async function () {
    if (!cachedConfig || !cacheTimestamp || Date.now() - cacheTimestamp > CACHE_TTL) {
        await loadConfig();
    }
    return cachedConfig;
};

/**
 * Force refresh of the config cache
 */
exports.refreshConfig = loadConfig;

/**
 * Get whitelist domains (DB override or .env fallback)
 */
const getWhitelistDomains = async function () {
    const config = await getConfig();
    if (config && config.whitelistDomains !== null && config.whitelistDomains !== undefined) {
        return config.whitelistDomains;
    }
    return process.env.WHITELIST_DOMAINS || "";
};

exports.getWhitelistDomains = getWhitelistDomains;

/**
 * Get email whitelist as array
 */
const getEmailWhitelist = async function () {
    const domains = await getWhitelistDomains();
    if (!domains) {
        return [];
    }
    return domains.split(",").map((domain) => domain.trim()).filter((d) => d.length > 0);
};

exports.getEmailWhitelist = getEmailWhitelist;

/**
 * Check if registration is open (no whitelist)
 */
exports.isOpenRegistration = async () => {
    const whitelist = await getEmailWhitelist();
    return whitelist.length === 0;
};

/**
 * Get teacher domains (DB override or .env fallback)
 */
const getTeacherDomains = async function () {
    const config = await getConfig();
    if (config && config.teacherDomains !== null && config.teacherDomains !== undefined) {
        return config.teacherDomains;
    }
    return process.env.TEACHER_DOMAINS || "";
};

exports.getTeacherDomains = getTeacherDomains;

/**
 * Get teacher domains as array
 */
exports.getTeacherDomainsArray = async function () {
    const domains = await getTeacherDomains();
    if (!domains) {
        return [];
    }
    return domains.split(",").map((domain) => domain.trim()).filter((d) => d.length > 0);
};

/**
 * Get disableChoosingRole setting (DB override or .env fallback)
 */
exports.getDisableChoosingRole = async function () {
    const config = await getConfig();
    if (config && config.disableChoosingRole !== null && config.disableChoosingRole !== undefined) {
        return config.disableChoosingRole;
    }
    return process.env.DISABLE_CHOOSING_ROLE === "true";
};

/**
 * Get enableTeacherPersonalInfo setting (DB override or .env fallback)
 */
exports.getEnableTeacherPersonalInfo = async function () {
    const config = await getConfig();
    if (config && config.enableTeacherPersonalInfo !== null && config.enableTeacherPersonalInfo !== undefined) {
        return config.enableTeacherPersonalInfo;
    }
    return process.env.ENABLE_TEACHER_PERSONAL_INFO === "true";
};

/**
 * Get emailValidationStudent setting (DB override or .env fallback)
 */
exports.getEmailValidationStudent = async function () {
    const config = await getConfig();
    if (config && config.emailValidationStudent !== null && config.emailValidationStudent !== undefined) {
        return config.emailValidationStudent;
    }
    return process.env.EMAIL_VALIDATION_STUDENT === "true";
};

/**
 * Get emailValidationTeacher setting (DB override or .env fallback)
 */
exports.getEmailValidationTeacher = async function () {
    const config = await getConfig();
    if (config && config.emailValidationTeacher !== null && config.emailValidationTeacher !== undefined) {
        return config.emailValidationTeacher;
    }
    return process.env.EMAIL_VALIDATION_TEACHER === "true";
};
