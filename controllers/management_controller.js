const {models} = require("../models");
const {EXPORT_ALLOWED_OPTIONS, getExportAllowed, refreshConfig} = require("../helpers/globalInstanceConfig");
const {isAuthor, isCoAuthor} = require("../helpers/escapeRooms");
const {isAdmin, isStudent} = require("../helpers/users");

exports.showReports = async (req, res) => {
    const reports = await models.report.findAll({
        "include": [
            {"model": models.user, "attributes": ["name", "surname"]},
            {"model": models.escapeRoom, "attributes": ["id", "title"]}
        ],
        "order": [["readed", "ASC"], ["createdAt", "DESC"]]

    });

    res.render("management/reports", {reports});
};

exports.showReportForm = (req, res) => {
    const {escapeRoom} = req;

    res.render("management/reportForm", {escapeRoom});
};

// GET /escapeRooms/:escapeRoomId/contact
exports.showContact = (req, res) => {
    const {escapeRoom} = req;

    res.render("network/contactForm", {"title": escapeRoom.title, "escapeRoomId": escapeRoom.id, "author": escapeRoom.author.alias});
};

// POST /escapeRooms/:escapeRoomId/contact
exports.generateReport = async (req, res) => {
    const {escapeRoom} = req;
    const {i18n} = res.locals;
    const {reason, comments} = req.body;
    const sessionId = req.session.user.id;
    const report = models.report.build({
        reason,
        comments,
        "escapeRoomId": escapeRoom.id,
        "reportAuthor": sessionId
    });

    try {
        req.flash("success", i18n.common.flash.successSendingReport);
        await report.save();
        res.redirect(`/escapeRooms/${escapeRoom.id}`);
    } catch (err) {
        req.flash("success", i18n.common.flash.errorSendingReport);
        res.render("management/reportForm", {escapeRoom, report});
    }
};

exports.editReport = async (req, res) => {
    const {readed} = req.body;
    const {reportId} = req.params;
    const report = await models.report.findByPk(reportId);

    if (!report) {
        return res.status(404).send("Report not found");
    }
    report.readed = readed;
    await report.save();
    res.status(200).send();
};

exports.deleteReport = async (req, res) => {
    const {reportId} = req.params;
    const report = await models.report.findByPk(reportId);

    if (report) {
        await report.destroy();
        res.status(200).send();
    } else {
        res.status(404).send();
    }
};

exports.getEnvironmentSettings = async (_, res) => {
    try {
        const envURLS = JSON.parse(process.env.NETWORK_URLS || "[]") || [];
        const config = await models.adminConfig.findOne({"where": {"id": 1}}) || {};
        const dbURLs = config.urls ? JSON.parse(config.urls) : [];
        let urlsText = "";
        let urlsDBText = "";

        envURLS.forEach((url) => {
            urlsText += `${url};`;
        });
        dbURLs.forEach((url) => {
            urlsDBText += `${url};`;
        });
        urlsText = urlsText.slice(0, -1); // Ultimo ;
        urlsDBText = urlsDBText.slice(0, -1); // Ultimo ;

        // Environment settings from .env
        const envSettings = {
            "whitelistDomains": process.env.WHITELIST_DOMAINS || "",
            "teacherDomains": process.env.TEACHER_DOMAINS || "",
            "disableChoosingRole": process.env.DISABLE_CHOOSING_ROLE === "true",
            "enableTeacherPersonalInfo": process.env.ENABLE_TEACHER_PERSONAL_INFO === "true",
            "emailValidationStudent": process.env.EMAIL_VALIDATION_STUDENT === "true",
            "emailValidationTeacher": process.env.EMAIL_VALIDATION_TEACHER === "true",
            "availableLanguages": process.env.AVAILABLE_LANGUAGES || "en,es,sr",
            "exportAllowed": process.env.EXPORT_ALLOWED || "ONLY_OWNER"
        };

        // Database settings (overrides)
        const dbSettings = {
            "whitelistDomains": config.whitelistDomains ?? null,
            "teacherDomains": config.teacherDomains ?? null,
            "disableChoosingRole": config.disableChoosingRole ?? null,
            "enableTeacherPersonalInfo": config.enableTeacherPersonalInfo ?? null,
            "emailValidationStudent": config.emailValidationStudent ?? null,
            "emailValidationTeacher": config.emailValidationTeacher ?? null,
            "availableLanguages": config.availableLanguages ?? null,
            "exportAllowed": config.exportAllowed ?? null
        };

        res.render("management/environmentSettings", {urlsText, urlsDBText, envSettings, dbSettings, EXPORT_ALLOWED_OPTIONS});
    } catch (error) {
        console.error("Error fetching URLS");
        res.status(500).send();
    }
};

exports.setEnvironmentSettings = async (req, res) => {
    try {
        const {
            urls,
            whitelistDomains,
            teacherDomains,
            disableChoosingRole,
            enableTeacherPersonalInfo,
            emailValidationStudent,
            emailValidationTeacher,
            availableLanguages,
            exportAllowed
        } = req.body;

        const parsedURLs = urls
            .split(";")
            .map((url) => url.trim())
            .filter((url) => url.length > 0 && url.includes("http"))
            .map((url) => url.replace(/\/$/, ""));

        // Parse boolean values (empty string means use .env default, otherwise use the checkbox value)
        const parseBooleanField = (value) => {
            if (value === "" || value === undefined) {
                return null; // Use .env default
            }
            return value === "true" || value === "on";
        };

        // Parse domain fields (empty string means use .env default)
        const parseDomainField = (value) => {
            if (value === "" || value === undefined) {
                return null; // Use .env default
            }
            return value.trim();
        };

        let config = await models.adminConfig.findOne({"where": {"id": 1}});

        // Parse string fields (empty string means use .env default)
        const parseStringField = (value) => {
            if (value === "" || value === undefined) {
                return null; // Use .env default
            }
            return value.trim();
        };

        const configData = {
            "urls": JSON.stringify(parsedURLs),
            "whitelistDomains": parseDomainField(whitelistDomains),
            "teacherDomains": parseDomainField(teacherDomains),
            "disableChoosingRole": parseBooleanField(disableChoosingRole),
            "enableTeacherPersonalInfo": parseBooleanField(enableTeacherPersonalInfo),
            "emailValidationStudent": parseBooleanField(emailValidationStudent),
            "emailValidationTeacher": parseBooleanField(emailValidationTeacher),
            "availableLanguages": parseDomainField(availableLanguages),
            "exportAllowed": parseStringField(exportAllowed)
        };

        if (!config) { // First setup
            config = models.adminConfig.build({...configData, "id": 1});
            await config.save();
            await refreshConfig(); // Refresh cache immediately
            res.redirect("/environment");
            return;
        }

        Object.assign(config, configData);
        await config.save();
        await refreshConfig(); // Refresh cache immediately
        res.redirect("/environment");
    } catch (error) {
        console.error("Error updating network URLs: ", error);
        res.status(500).send();
    }
};

/**
 * Middleware to check if user is allowed to export an escape room
 * Based on the exportAllowed setting: ONLY_OWNER, ONLY_TEACHERS, ONLY_USERS, ALL
 */
exports.exportAuth = async (req, res, next) => {
    const {i18n} = res.locals;
    const {user} = req.session || {};
    const er = req.escapeRoom;

    try {
        const exportAllowed = await getExportAllowed();

        switch (exportAllowed) {
        case EXPORT_ALLOWED_OPTIONS.ALL:
            // Everyone can export
            return next();

        case EXPORT_ALLOWED_OPTIONS.ONLY_USERS:
            // Only logged-in users can export
            if (user) {
                return next();
            }
            break;

        case EXPORT_ALLOWED_OPTIONS.ONLY_TEACHERS:
            // Only teachers (non-students) and admins can export
            if (user && (isAdmin(user) || !isStudent(user))) {
                return next();
            }
            break;

        case EXPORT_ALLOWED_OPTIONS.ONLY_OWNER:
        default:
            // Only the author, co-authors, or admin can export
            if (user && (isAdmin(user) || isAuthor(user, er) || isCoAuthor(user, er))) {
                return next();
            }
            break;
        }

        res.status(403);
        return next(new Error(i18n.api.forbidden));
    } catch (error) {
        console.error("Error checking export authorization:", error);
        res.status(500);
        return next(error);
    }
};

