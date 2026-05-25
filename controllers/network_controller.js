const queries = require("../queries");
const {models} = require("../models");
const {fuzzy} = require("fast-fuzzy");
const urlsDefault = JSON.parse(process.env.NETWORK_URLS || "[]") || [];
const mailer = require("../helpers/mailer");
const {renderEJS, getHostname} = require("../helpers/utils");
const path = require("path");
const crypto = require("crypto");
const os = require("os");
const fs = require("fs/promises");

// Block hostnames that resolve to internal/non-routable space.
// Defence against SSRF to localhost, RFC1918 (10/8, 172.16/12, 192.168/16),
// link-local (169.254/16, including AWS/GCP metadata 169.254.169.254),
// loopback IPv6, multicast, etc. Pure string check — no DNS — so DNS-rebinding
// attacks aren't fully neutralised, but the obvious internal targets are.
const isPrivateHostname = function (host) {
    if (!host) {
        return true;
    }
    const h = host.toLowerCase().replace(/^\[|\]$/g, ""); // strip IPv6 brackets

    if (h === "localhost" || h.endsWith(".localhost") || h.endsWith(".local") || h.endsWith(".internal")) {
        return true;
    }
    // IPv4 dotted quad?
    const v4 = h.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);

    if (v4) {
        const [a, b] = [parseInt(v4[1], 10), parseInt(v4[2], 10)];

        if (a === 10 || a === 127 || a === 0) {
            return true;
        }
        if (a === 169 && b === 254) {
            return true;
        }
        if (a === 172 && b >= 16 && b <= 31) {
            return true;
        }
        if (a === 192 && b === 168) {
            return true;
        }
        if (a === 100 && b >= 64 && b <= 127) { // CGNAT 100.64/10
            return true;
        }
        if (a >= 224) { // multicast / reserved
            return true;
        }
    }
    // IPv6 loopback / link-local / unique-local
    if (h === "::1" || h === "::" || h.startsWith("fe80:") || h.startsWith("fc") || h.startsWith("fd")) {
        return true;
    }
    return false;
};

const getResultsFromInstance = async (value, before, after, lang, page = 1, limit = 10, participation, area, duration, format, level, license) => {
    try {
        const queryToExecute = queries.escapeRoom.network(before, after, lang, participation, area, duration, format, level, license);

        let results = await models.escapeRoom.findAll(queryToExecute);
        // Fuzzy finding of escaperooms
        const fuzzyThreshold = 0.4;
        const filteredResults = [];

        results = results.sort((a, b) => -fuzzy(value, a.title || "") - fuzzy(value, a.description || "") * 0.7 + fuzzy(value, b.title || "") + fuzzy(value, b.description || "") * 0.7);
        results = results.slice((page - 1) * limit, page * limit);

        for (let index = 0; index < results.length; index++) {
            const result = results[index];

            if (fuzzy(value, result.title || "") > fuzzyThreshold || fuzzy(value, result.description || "") > fuzzyThreshold) {
                filteredResults.push(result);
            } else {
                break;
            }
        }

        return filteredResults;
    } catch (error) {
        console.error("Error getting local results: ", error);
        return {};
    }
};

exports.searchInInstance = async (req, res, next) => { // Busqueda local
    try {
        const {query, before, after, lang, page, limit, participation, area, duration, format, level, license} = req.query || {};
        const results = await getResultsFromInstance(query, before, after, lang, page, limit, participation, area, duration, format, level, license);

        res.json(results);
    } catch (error) {
        console.error(error);
        next(error);
    }
};

exports.renderSearch = async (req, res) => {
    let instances = [];

    try {
        const dbUrls = await models.adminConfig.findOne({"attributes": ["urls"], "where": {"id": 1}});

        instances = JSON.parse(dbUrls.urls);
    } catch (error) {
        instances = urlsDefault;
    }
    res.render("network/search", {"user": req.user, instances});
};


// Promesa que si no se resuelve en X tiempo, rechaza
// Esta se usa para el fetch, si el fetch falla, rechaza, si se resuelve, limpia el timeout y resuelve con el json
// Si el json no es json correcto, rechaza, si no devuelve el json
const timeoutPromise = (timeout, ogPromise) => new Promise((resolve, reject) => {
    const timer = setTimeout(() => { // Timer
        reject(new Error("Request timed out"));
        console.warn("Request timed out");
    }, timeout);

    ogPromise.then( // Fetch original
        async (val) => { // Si se resuelve
            clearTimeout(timer);
            if (val && val.ok) {
                try {
                    const data = await val.json();

                    resolve(data);
                } catch (error) {
                    console.error("Error parsing JSON:", error);
                    reject(error);
                }
            } else {
                reject(new Error("Network response was not ok"));
            }
        },
        (error) => {
            clearTimeout(timer);
            reject(error);
        } // Si falla
    );
});


const tryFetch = async (url) => { // El fetch falla si no hay nadie, wrapper
    try {
        const response = await fetch(url);

        return response;
    } catch (error) {
        console.error(`Error fetching from ${url}: ${error.message}`);
        return null;
    }
};

// Network search: sends queries to all Escapp instances and aggregates the results
exports.searchInNetwork = async (req, res, _) => { 
    const {query, before, after, lang, page, limit, participation, area, duration, format, level, license, instance} = req.query;
    const aggregated = [];
    const promises = [];
    let localR = [];
    const dbUrls = await models.adminConfig.findOne({"attributes": ["urls"], "where": {"id": 1}});
    let jsonUrlsDB = [];

    try {
        jsonUrlsDB = JSON.parse(dbUrls.urls);
    } catch (error) {
        console.warn("No valid URLs in DB, using default URLs.");
    }
    const urls = instance ? [instance] : jsonUrlsDB || urlsDefault;

    try {
        localR = await getResultsFromInstance(query, before, after, lang, page, limit, participation, area, duration, format, level, license);
    } catch (error) {
        console.error("Error getting local results: ", error);
        localR = [{}];
    }

    if (localR.length > 0) {
        localR.forEach((r) => aggregated.push(r));
    }

    for (const index in urls) {
        const url = urls[index];
        try {
            promises.push(timeoutPromise(5000, tryFetch(`${url}/network/searchInInstance?query=${encodeURIComponent(query)}&before=${before || ""}&after=${after || ""}&lang=${lang || ""}&level=${level || ""}&format=${format || ""}&duration=${duration || ""}&area=${area || ""}&participation=${participation || ""}&page=${page || 1}&limit=${limit || 10}`)));
        } catch (error) {
            console.error(`Error fetching from ${url}: ${error.message}`);
        }
    }

    const values = await Promise.allSettled(promises); // Promise.all stops if one request fails

    for (let i = 0; i < values.length; i++) {
        const data = values[i];
        if (data.status === "fulfilled" && data.value && data.value instanceof Array) {
            data.value.forEach((v) => {
                aggregated.push({...v, "url": urls[i]});
            });
        }
    }

    res.json(aggregated);
};

exports.sendContactEmail = async (req, res, next) => {
    try {
        const {user} = req.session;
        const escapeRoomTitle = req.escapeRoom.title;
        const {author} = req.escapeRoom;
        const lang = author.lang || "en";
        const {text, contactName, contactEmail, captchaAnswer, captchaExpected} = req.body;
        const i18n = require(`../i18n/${lang}`);
        const localI18n = res.locals.i18n;

        // Validate captcha
        if (parseInt(captchaAnswer, 10) !== parseInt(captchaExpected, 10)) {
            req.flash("error", localI18n.network.contactForm.captchaError);
            return res.redirect("back");
        }

        // Use provided contact info or fall back to user data
        const senderName = contactName || "Anonymous";
        const senderEmail = contactEmail || "No email provided";

        const str = await renderEJS("views/emails/contact.ejs", {i18n, "user": senderName, "message": text, "userEmail": senderEmail, escapeRoomTitle }, {});

        await mailer.sendEmail(author.username, `Escapp: ${i18n.network.contact.subject}`, str, str);
        req.flash("success", localI18n.network.contactForm.success);
        res.redirect(`/escapeRooms/${req.escapeRoom.id}`);
    } catch (error) {
        console.error(error);
        next(error);
    }
};

// GET /network/:escapeRoomId/json
exports.getPreviewData = async (req, res) => {
    try {
        const escapeRoom = await models.escapeRoom.findByPk(req.escapeRoom.id, queries.escapeRoom.loadPreview);
        return res.json(escapeRoom.toJSON());
    } catch (error) {
        console.error("Error fetching preview data:", error);
        res.status(500).json({"error": "Error fetching preview data"});
    }
};

// GET /network/preview?url=...&escapeRoomId=...
exports.servePreviewRender = async (req, res, next) => {
    try {
        const {url, escapeRoomId} = req.query;
        let escapeRoomData;
        if (url) {
            // Remote preview - fetch from remote server
            const data = await tryFetch(`${url}/network/${escapeRoomId}/json`);
            if (!data || !data.ok) {
                throw new Error("Failed to fetch preview data");
            }
            escapeRoomData = await data.json();
        } else {
            // Local preview - query database directly to avoid self-fetch auth issues
            const localER = await models.escapeRoom.findByPk(escapeRoomId, queries.escapeRoom.loadPreview);
            if (!localER) {
                throw new Error("Escape room not found");
            }
            escapeRoomData = localER.toJSON();
        }

        const escapeRoom = models.escapeRoom.build(escapeRoomData);
        if(escapeRoomData.author){
            escapeRoom.author = models.user.build(escapeRoomData.author);
        }
        if(escapeRoomData.subjects){
            escapeRoom.subject = escapeRoomData.subjects.map(subject =>
                models.subject.build(subject)
            )
        }

        return res.render("escapeRooms/show", {escapeRoom, "user": req.session.user, "isParticipant": false, "fromNetwork": true, "networkUrl": url, "referer": req.get("referer")});
    } catch (error) {
        console.error("Error fetching preview data:", error);
        next(error);
    }
};


exports.importFromNetwork = async (req, res, next) => {
    try {
        const { url, escapeRoomId } = req.query;

        if (!url) {
            throw new Error("No url in query params");
        }
        if (!escapeRoomId) {
            throw new Error("No escape room id");
        }
        // Reject anything that isn't a numeric id — keeps the constructed URL tight
        if (!/^\d+$/.test(String(escapeRoomId))) {
            throw new Error("Invalid escape room id");
        }
        // SSRF guard.
        // 1) URL must parse as http(s).
        // 2) If a network-instances allowlist is configured (DB or .env) the
        //    URL must match one entry — the admin vouched for it (so e.g.
        //    a localhost dev allowlist still works).
        // 3) Otherwise (no allowlist), reject loopback/private/link-local
        //    hostnames so anonymous SSRF to internal services is blocked.
        let parsed;

        try {
            parsed = new URL(url);
        } catch (e) {
            throw new Error("Invalid url");
        }
        if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
            throw new Error("URL must be http or https");
        }

        const dbUrls = await models.adminConfig.findOne({"attributes": ["urls"], "where": {"id": 1}});
        let allowedUrls = [];

        try {
            allowedUrls = dbUrls && dbUrls.urls ? JSON.parse(dbUrls.urls) : [];
        } catch (e) {
            allowedUrls = [];
        }
        if (!allowedUrls.length) {
            allowedUrls = urlsDefault;
        }
        const normalize = (u) => String(u || "").replace(/\/$/, "");
        const requested = normalize(url);

        if (allowedUrls.length > 0) {
            if (!allowedUrls.map(normalize).includes(requested)) {
                throw new Error("URL not in network instances allowlist");
            }
        } else if (isPrivateHostname(parsed.hostname)) {
            throw new Error("Refusing to fetch private/internal host");
        }
        const urlFetch = `${requested}/escapeRooms/${escapeRoomId}/export`;
        const exportRes = await fetch(urlFetch);

        if (!exportRes.ok) {
            throw new Error("Fail to fetch");
        }
        const arrayBuffer = await exportRes.arrayBuffer();
        const zipBuffer = Buffer.from(arrayBuffer);

        const tmpPath = path.join(os.tmpdir(), `escapeRoom-${escapeRoomId}-${crypto.randomUUID()}.zip`);

        await fs.writeFile(tmpPath, zipBuffer);
        req.tmpPath = tmpPath;
        next();
    } catch (e) {
        next(e);
    }
};
