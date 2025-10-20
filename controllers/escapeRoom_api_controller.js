const query = require("../queries");
const {models} = require("../models");

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
        const results = await models.escapeRoom.findAll(queryToExecute);
        res.json(results);
    } catch (error) {
        console.error(error);
        next(error);
    }
}
