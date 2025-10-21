const query = require("../queries");
const {models} = require("../models");
const {fuzzy} = require("fast-fuzzy");

exports.escapeRoomsOrdered = async (req, res, next) => {
    try {
        let {value, page, limit} = req.query || {};
        let queryToExecute;

        switch (req.query.orderBy || "titleAsc"){
            case "text":
                queryToExecute = query.escapeRoom.text(page, limit, value);
                break;
            case "updated_after":
                queryToExecute = query.escapeRoom.update_after(page, limit, value);
                break;
            case "created_after":
                queryToExecute = query.escapeRoom.created_after(page, limit, value);
                break;
            case "public":
                queryToExecute = query.escapeRoom.public(page, limit, value);
                break;
            default:
                throw new Error("Invalid orderBy parameter");
        };
        let results = await models.escapeRoom.findAll(queryToExecute);
        //Fuzzy finding of escaperooms
        if (req.query.orderBy === "text") {
            results = results.sort((a, b) => -fuzzy(value, a.title) - fuzzy(value, a.description)*0.7 + fuzzy(value, b.title) + fuzzy(value, b.description)*0.7);
            results = results.slice((page-1)*limit, page*limit);
        }

        res.json(results);
    } catch (error) {
        console.error(error);
        next(error);
    }
}
