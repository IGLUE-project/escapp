const queries = require("../queries");
const {models} = require("../models");
const {fuzzy} = require("fast-fuzzy");
const urlsDefault = JSON.parse(process.env.NETWORK_URLS || "[]") || [];
const mailer = require("../helpers/mailer");
const {renderEJS} = require("../helpers/utils");

const getResultsFromInstance = async (value, before, after, lang, page = 1, limit = 10, participation, area, duration, format, level) => {
    try {
        const queryToExecute = queries.escapeRoom.text(before, after, lang, participation, area, duration, format, level);
        
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
        const {query, before, after, lang, page, limit, participation, area, duration, format, level} = req.query || {};
        const results = await getResultsFromInstance(query, before, after, lang, page, limit, participation, area, duration, format, level);

        res.json(results);
    } catch (error) {
        console.error(error);
        next(error);
    }
};

exports.renderSearch = (req, res) => {
    res.render("network/search", {"user": req.user});
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

exports.searchInNetwork = async (req, res, _) => { // Busqueda en la red, tira querys contra el resto de instancias y agrega
    const {query, before, after, lang, page, limit, participation, area, duration, format, level} = req.query;
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
    const urls = jsonUrlsDB || urlsDefault;

    try {
        localR = await getResultsFromInstance(query, before, after, lang, page, limit, participation, area, duration, format, level);
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

    const values = await Promise.allSettled(promises); // All a secas termina si una falla

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
        const {text} = req.body;
        const i18n = require(`../i18n/${lang}`);

        const str = await renderEJS("views/emails/contact.ejs", {i18n, "user": user.name, "message": text, "userEmail": user.username, escapeRoomTitle }, {});

        await mailer.sendEmail(author.username, "Contact Message", str, str);
        res.redirect("/");
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

// GET /network/:escapeRoomId/preview?url=...&id=...
exports.servePreviewRender = async (req, res) => {
    try {
        console.log(req)
        const data = await tryFetch(`${req.query.url}/network/${req.params.escapeRoomId}/json`);
        if (!data || !data.ok) {
            throw new Error("Failed to fetch preview data");
        }
        const escapeRoomData = await data.json();
        
        const escapeRoom = await models.escapeRoom.build(escapeRoomData);
        escapeRoom.author = await models.user.build(escapeRoomData.author);

        return res.render("escapeRooms/show", {"escapeRoom":  escapeRoom, "user": req.session.user, "isParticipant": false, fromNetwork: true, networkUrl: req.query.url});

    } catch (error) {
        console.error("Error fetching preview data:", error);
        next(error);
    }
};
