const {models} = require("../models");
const fs = require("fs");
const path = require("path");

//Upload file to catalog
exports.upload = async (req, res, next) => {
    try {
        const userId =  req.session.user.id.toString();
        let fileName = req.headers.filename;
        if(fileName === "") {
            res.status(400);
            return;
        }
        fileName = fileName.replace("C:\\fakepath\\", "");
        if (!fs.existsSync(path.join(__dirname, "../catalog/", userId))) {
            fs.mkdirSync(path.join(__dirname, "../catalog/", userId));
        }
        const data = [];
        req.on("data", (chunk) => {
            data.push(chunk);
        });

        req.on("end", async () => {
            let fileData = Buffer.concat(data);
            fs.writeFile(
                path.join(__dirname, "../catalog/", userId, fileName),
                fileData,
                "base64",
                (err) => {
                    if(err) {
                        throw new Error('Error writing file', err);
                    }
                }
            );
            await models.catalogResource.create({
                "fileName": fileName,
                "userId": userId,
                "type": "file", //TODO Poner tipos
            });
            res.status(200);
        });
    }catch (e) {
        console.error(e)
        next(e);
    }
};

//Add resource with external URL
exports.create = async (req, res, next) => {
    const userId = req.session.user.id;
    const {url} = req.body;
    try {
        await models.catalogResource.create({
            "url": url,
            "userId": userId,
            "type": "url", //TODO Poner tipos
        });
        res.status(200);
    }
    catch (e) {
        next(e);
    }
};

exports.download = async (req, res, next) => {
    const userId = req.session.user.id;
    const {id} = req.params;
    try {
        const resource = await models.catalogResource.findByPk(id);
        const fileName = resource.fileName;
        if(resource.userId !== userId) {
            res.status(401);
            return;
        }else if(resource.type === "url") { //Mirar que tipos no son descargables por ser externos
            res.status(400);
        } else {
            const file = path.join(__dirname, "../catalog/", userId.toString(), fileName);
            if (fs.existsSync(file)) {
                res.download(file, fileName);
            } else {
                res.status(404);
            }
        }
    } catch (e) {
        console.error(e);
        next(e);
    }
};

exports.show = async (req, res, next) => {
    const userId = req.session.user.id;
    const resourcesObjects = await models.catalogResource.findAll({where: {"userId": userId}});
    const resources = resourcesObjects.map((r) => {
        return {
            "id": r.id,
            "fileName": r.fileName,
            "type": r.type,
        };
    });
    res.render("catalog/catalog.ejs", {resources});
};

exports.get = async (req, res, next) => {
    const userId = req.session.user.id;
    const {resourceId} = req.params;
    try {
       const resource = await models.catalogResource.findByPk(resourceId);
        if (resource.userId !== userId) {
            res.status(401);
            return;
        }
        if (resource.type !== "url") {
            res.sendFile(path.join(__dirname, "../catalog/", userId, resource.fileName));
       }
    } catch (e) {
        next(e);
    }
};

exports.delete = async (req, res, next) => {
    const {resourceId} = req.params;
    try {
        await models.catalogResource.destroy({where: {"id": resourceId}});
        res.status(200);
    } catch (e) {
        next(e);
    }
};

exports.use = async (req, res, next) => {
    const {resourceId, escapeRoomId} = req.body;
    try {
        await models.catalogResourceUsage.create({
            "resourceId": resourceId,
            "escapeRoomId": escapeRoomId,
        });
        res.status(200);
    } catch (e) {
        next(e);
    }
};

exports.sendUploadView = async (req, res, next) => {
    res.render("catalog/upload.ejs");
};
