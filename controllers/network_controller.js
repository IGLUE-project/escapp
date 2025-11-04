const query = require("../queries");
const {models} = require("../models");
const {fuzzy} = require("fast-fuzzy");
const urls = JSON.parse(process.env.URLS) || ["http://localhost:3000"];

exports.searchInInstance = async (req, res, next) => {
    try {
        console.log(req.query);
        let {value, page, limit, after, before, lang} = req.query || {};
        let queryToExecute = query.escapeRoom.text(before, after, lang);
        let results = await models.escapeRoom.findAll(queryToExecute);
        //Fuzzy finding of escaperooms
        if (req.query.orderBy === "text") {
            results = results.sort((a, b) => -fuzzy(value, a.title) - fuzzy(value, a.description)*0.7 + fuzzy(value, b.title) + fuzzy(value, b.description)*0.7);
            results = results.slice((page-1)*limit, page*limit);
        }
        res.json(results);
        console.log(results);
    } catch (error) {
        console.error(error);
        next(error);
    }
}

exports.renderSearch = (req, res) => {
    res.render("network/search", {user: req.user});
}

exports.searchInNetwork = async (req, res, _) => {
    const {query, before, after, language} = req.query;
    let aggregated = [];

    for (let index in urls){
        const url = urls[index];
        try {
            const response = await fetch(`${url}/network/searchInInstance?query=${encodeURIComponent(query)}&before=${before || ""}&after=${after || ""}&lang=${language || ""}`);
            if (response.ok) {
                let data = await response.json();
                aggregated = aggregated.concat(data);
            } else {
                console.error(`Error fetching from ${url}: ${response.statusText}`);
            }
        } catch (error) {
            console.error(`Error fetching from ${url}: ${error.message}`);
        }
    }
    res.json(aggregated);
}
