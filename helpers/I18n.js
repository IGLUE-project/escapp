const ES_LOCALES = require("../i18n/es");
const EN_LOCALES = require("../i18n/en");
const SR_LOCALES = require("../i18n/sr");

const LOCALES = {
    "en": EN_LOCALES,
    "es": ES_LOCALES,
    "sr": SR_LOCALES
};

// Languages that have i18n files and can be enabled
const SUPPORTED_LANGUAGES = Object.keys(LOCALES);

function getAvailableLocales () {
    const envLanguages = process.env.AVAILABLE_LANGUAGES;

    if (envLanguages) {
        return envLanguages.split(",").map((l) => l.trim()).filter((l) => l.length > 0);
    }
    return ["en", "es", "sr"];
}


function isValidLocale (locale) {
    return typeof locale === "string" && getAvailableLocales().includes(locale);
}

function getBrowserLocale (req) {
    try {
        return req.headers["accept-language"].split(",")[0].split("-")[0];
    } catch (e) {
        return undefined;
    }
}

function getDefaultLocale () {
    return "en";
}


function getTextsForLocale (locale) {
    return LOCALES[isValidLocale(locale) ? locale : getDefaultLocale()];
}

exports.getLocaleForEscapeRoom = (req, escapeRoom, editing) => {
    if (editing !== true && isValidLocale(escapeRoom.forceLang) && req.route.path !== "/escapeRooms/:escapeRoomId(\\d+)/report") {
        return escapeRoom.forceLang;
    }
    if (req && req.cookies && isValidLocale(req.cookies.locale)) {
        return req.cookies.locale;
    }
    const browserLocale = getBrowserLocale(req);

    if (isValidLocale(browserLocale)) {
        return browserLocale;
    }
    return getDefaultLocale();
};

exports.isValidLocale = isValidLocale;
exports.getDefaultLocale = getDefaultLocale;
exports.getTextsForLocale = getTextsForLocale;
exports.getAvailableLocales = getAvailableLocales;
exports.SUPPORTED_LANGUAGES = SUPPORTED_LANGUAGES;
