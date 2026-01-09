const ES_LOCALES = require("../i18n/es");
const EN_LOCALES = require("../i18n/en");

const LOCALES = {
    "en": EN_LOCALES,
    "es": ES_LOCALES
};

function isValidLocale (locale) {
    return typeof locale === "string" && ["en", "es"].includes(locale);
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
