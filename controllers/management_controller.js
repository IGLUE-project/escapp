const {models} = require("../models");

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

    res.render("management/contact", {"title": escapeRoom.title, "author": escapeRoom.author.alias, "email": escapeRoom.author.username});
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
