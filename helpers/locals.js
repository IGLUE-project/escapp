const {steps} = require("./progress");
const {getContentForPuzzle} = require("./utils");
const {isAdmin, isStudent} = require("./users");
const {isAuthor, isCoAuthor} = require("./escapeRooms");

module.exports = function (app) {
    app.locals.FULL_APP_NAME = process.env.FULL_APP_NAME || "https://escapp.es";

    const zeroPadding = (d) => {
        if (d < 10) {
            return `0${d}`;
        }
        return d;
    };

    app.locals.zeroPadding = zeroPadding;
    app.locals.getFullDate = (date) => {
        const d = new Date(date.getTime());

        d.setMinutes(d.getMinutes() + d.getTimezoneOffset());
        return `${zeroPadding(d.getDate())}-${zeroPadding(d.getMonth() + 1)}-${d.getFullYear()} ${zeroPadding(d.getHours())}:${zeroPadding(d.getMinutes())}`;
    };
    app.locals.getFullDateY = (date) => {
        const d = new Date(date.getTime());

        d.setMinutes(d.getMinutes() + d.getTimezoneOffset());
        return `${d.getFullYear()}-${zeroPadding(d.getMonth() + 1)}-${zeroPadding(d.getDate())} ${zeroPadding(d.getHours())}:${zeroPadding(d.getMinutes())}`;
    };
    app.locals.formatTime = function (date) {
        const currentDate = new Date(date.getTime());

        currentDate.setMinutes(currentDate.getMinutes() + currentDate.getTimezoneOffset());
        return `${zeroPadding(currentDate.getHours())}:${zeroPadding(currentDate.getMinutes())}`;
    };

    app.locals.getDashDate = function (currentDate) {
        // CurrentDate.setMinutes(currentDate.getMinutes() + currentDate.getTimezoneOffset());
        return `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;
    };

    app.locals.zeroPadding = function (hour) {
        if (hour < 10) {
            return `0${hour}`;
        }
        return hour;
    };

    app.locals.secondsToDhms = function (secs) {
        const seconds = Number(secs);
        const d = Math.floor(seconds / (3600 * 24));
        const h = Math.floor(seconds % (3600 * 24) / 3600);
        const m = Math.floor(seconds % 3600 / 60);
        const s = Math.floor(seconds % 60);

        const dDisplay = d > 0 ? `${d}d` : "";
        const hDisplay = h > 0 ? `${h}h` : "";
        const mDisplay = m > 0 ? `${m}m` : "";
        const sDisplay = s > 0 ? `${s}s` : "";

        return [
            dDisplay,
            hDisplay,
            mDisplay,
            sDisplay
        ].filter((a) => a !== "").join(", ");
    };


    app.locals.getGradientColor = function (grade, threshold = 50, margin = 10) {
        if (grade < threshold - margin) {
            return "var(--lightred)";
        } else if (grade >= threshold - margin && grade <= threshold + margin) {
            return "var(--brightorange)";
        } else if (grade > threshold + margin) {
            return "var(--brightgreen)";
        }
    };
    app.locals.steps = steps;
    app.locals.getContentForPuzzle = getContentForPuzzle;
    app.locals.analyticsSections = () => ({
        "ranking": {
            "url": "/ranking",
            "icon": "event_seat"
        },
        "puzzleTimes": {
            "url": "/puzzles/teams",
            "icon": "timer"
        },
        "puzzleStats": {
            "url": "/puzzles",
            "icon": "table_chart"
        },
        "progress": {
            "url": "/progress",
            "icon": "timelapse"
        },
        "timeline": {
            "url": "/timeline",
            "icon": "timeline"
        },
        "hints": {
            "url": "/hints/teams",
            "icon": "search"
        },
        "histogram": {
            "url": "/histogram",
            "icon": "equalizer"
        },
        "grading": {
            "url": "/grading",
            "icon": "school"
        }
    });

    app.locals.formatTeamSize = function(minTeamSize, teamSize, i18n) {
        const hasMin = Number.isInteger(minTeamSize) && minTeamSize > 0;
        const hasMax = Number.isInteger(teamSize) && teamSize > 0;

        if (hasMin && !hasMax) {
            return `${minTeamSize}+`;
        }

        if (!hasMin && hasMax) {
            return teamSize === 1
            ? i18n.network.filters.participation.individual
            : `${i18n.common.upTo} ${teamSize}`;
        }

        if (hasMin && hasMax) {
            if (minTeamSize === teamSize) {
            return `${teamSize}`;
            }

            if (minTeamSize <= 1) {
            return `${i18n.common.upTo} ${teamSize}`;
            }

            return `${minTeamSize}-${teamSize}`;
        }

        return ""
    }

    /**
     * Check if user can export an escape room based on exportAllowed setting
     * @param {Object} user - Session user object
     * @param {Object} escapeRoom - Escape room object
     * @param {Object} globalConfig - Global config with exportAllowed and EXPORT_ALLOWED_OPTIONS
     * @returns {boolean}
     */
    app.locals.canExport = function(user, escapeRoom, globalConfig) {
        const {exportAllowed, EXPORT_ALLOWED_OPTIONS} = globalConfig;
        switch (exportAllowed) {
        case EXPORT_ALLOWED_OPTIONS.ALL:
            return true;

        case EXPORT_ALLOWED_OPTIONS.ONLY_USERS:
            return !!user;

        case EXPORT_ALLOWED_OPTIONS.ONLY_TEACHERS:
            return user && (isAdmin(user) || !isStudent(user));

        case EXPORT_ALLOWED_OPTIONS.ONLY_OWNER:
        default:
            return user && (isAdmin(user) || isAuthor(user, escapeRoom) || isCoAuthor(user, escapeRoom));
        }
    };
};
