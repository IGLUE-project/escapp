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

exports.getNetworkURLS = async (_, res) => {
    const envURLS = JSON.parse(process.env.URLS) || [];
    const config = await models.adminConfig.findOne({"attributes": ["urls"]});
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
    console.log(urlsDBText);

    res.render("management/networkURLs", {urlsText,urlsDBText});
}

exports.editNetworkURLS = async (req, res) => {
    try{
        const {urls} = req.body;
        const parsedURLs = urls.split(";").map((url) => url.trim()).filter((url) => url.length > 0 && url.includes("http"));

        let config = await models.adminConfig.findOne({"attributes": ["urls", "id"]})
        if (!config){
            config = {urls: JSON.stringify(parsedURLs)}
            config = models.adminConfig.build(config);
            await config.save();
            res.status(200).send();
        }
        config.urls = JSON.stringify(parsedURLs);
        console.log(urls);
        await config.save();

        res.status(200).send();
    }catch (error){
        console.error("Error updating network URLs: ", error);
        res.status(500).send();
    }
}

