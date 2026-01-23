const sequelize = require("../models");
const {models} = sequelize;
const query = require("../queries");
const uploadsHelper = require("./uploads");
const path = require("path");
const { replaceSceneUrls } = require("./reusablePuzzles");

const isAuthor = function (user, er) {
    return user.id === er.authorId;
};

exports.isAuthor = isAuthor;

const isCoAuthor = function (user, er) {
    return er.userCoAuthor.some((author) => author.id === user.id &&
        author.coAuthors &&
        author.coAuthors.confirmed);
};

exports.isCoAuthor = isCoAuthor;

const isCoAuthorPending = function (user, er) {
    return er.userCoAuthor.some((author) => author.id === user.id &&
        author.coAuthors &&
        !author.coAuthors.confirmed);
};

exports.isCoAuthorPending = isCoAuthorPending;

const isParticipant = async function (user, er, includeTest = false) {
    if (!user) {
        return false;
    }
    const participants = await models.user.findAll(query.user.escapeRoomsForUser(er.id, user.id, includeTest));

    return participants && participants.length > 0;
};

exports.isParticipant = isParticipant;

const getParticipant = async function (user, er, includeTest = false) {
    if (!user || !user.id) {
        return undefined;
    }
    const participants = await models.user.findAll(query.user.escapeRoomsForUser(er.id, user.id, includeTest));

    if (participants && participants.length === 1) {
        return participants[0];
    }
    return undefined;
};

exports.getParticipant = getParticipant;

const getReusablePuzzleIdByName = async (rpName) => {
    try {
        const reus = await models.reusablePuzzle.findOne({where: {name: rpName}});
        if (reus) {
            return reus.id;
        }
        throw new Error("No reusable puzzle with the name " + rpName)
    } catch(e) {
        throw new Error(e);
    }
}

exports.cloneER =  async function(er, authorId, newTitle, currentUser, prevUrl, currentUrl, fileMapping = {}, transaction) {
    let {subjects, duration, license, field, format, level, description, scope, invitation, teamSize, minTeamSize, teamAppearance, classAppearance, lang, forceLang, survey, pretest, posttest, numQuestions, numRight, feedback, forbiddenLateSubmissions, classInstructions, teamInstructions, indicationsInstructions, afterInstructions, scoreParticipation, hintLimit, hintSuccess, hintFailed, puzzles, hintApp, assets, attachment, allowCustomHints, hintInterval, automatedHints, supportLink, automaticAttendance, hybridInstructions, instructions, reusablePuzzleInstances, scenes} = er;

    const include = [{"model": models.puzzle, "include": [models.hint]}];

    if (hintApp) {
        include.push(models.hintApp);
    }
    if (attachment) {
        include.push(models.attachment);
    }
    if (subjects) {
        include.push(models.subject);
    }
    if (reusablePuzzleInstances && reusablePuzzleInstances.length) {
        include.push({
            "model": models.reusablePuzzleInstance,
            "include": [models.reusablePuzzle]
        });
    }

    
    lang = lang || "en";
    let theReusablePuzzleInstances = undefined;

    if (reusablePuzzleInstances) {
        theReusablePuzzleInstances = [];

        for (const instance of reusablePuzzleInstances) {
            theReusablePuzzleInstances.push({
                name: instance.name,
                config: instance.config,
                reusablePuzzleId: await getReusablePuzzleIdByName(instance.reusablePuzzle.name)
            });
        }
    }
    console.log(hybridInstructions)
    const escapeRoom = models.escapeRoom.build({
        "title": newTitle,
        subjects: subjects ? subjects.map((s) => ({ "subject": s.subject })) : [],
        duration,
        description,
        scope,
        teamSize,
        minTeamSize,
        lang,
        forceLang,
        teamAppearance,
        classAppearance,
        allowCustomHints,
        hintInterval,
        automatedHints,
        survey,
        pretest,
        posttest,
        numQuestions,
        invitation,
        hybridInstructions: (fileMapping["hybridInstructions"] && hybridInstructions && fileMapping["hybridInstructions"][hybridInstructions]) ? fileMapping["hybridInstructions"][hybridInstructions] : hybridInstructions, 
        instructions: (fileMapping["instructions"] && instructions && fileMapping["instructions"][instructions]) ? fileMapping["instructions"][instructions] : instructions, 
        numRight,
        feedback,
        forbiddenLateSubmissions,
        classInstructions,
        teamInstructions,
        indicationsInstructions,
        afterInstructions,
        scoreParticipation,
        hintLimit,
        hintSuccess,
        hintFailed,
        authorId,
        supportLink,
        automaticAttendance,
        "status": "draft",
        license,
        field,
        "publishedOnce": false,
        format,
        level,
        "puzzles": [...puzzles].map(({title, sol, desc, order, correct, fail, automatic, expectedDuration, validator, score, hints}) => ({
            title,
            sol,
            desc,
            order,
            correct,
            fail,
            automatic,
            expectedDuration,
            validator,
            score,
            "hints": [...hints].map(({content, "order": hintOrder, category}) => ({content, "order": hintOrder, category}))
        })),
        "hintApp": hintApp ? uploadsHelper.getFields(hintApp, fileMapping["hintApp"]) : undefined,
        "reusablePuzzleInstances": theReusablePuzzleInstances,
        "attachment": attachment ?  uploadsHelper.getFields(attachment, fileMapping["attachment"]) : undefined
    }, {include});
 
    const saved = await escapeRoom.save({transaction});
    const testShift = await models.turno.create({"place": "test", "status": "test", "escapeRoomId": escapeRoom.id }, {transaction});
    const teamCreated = await models.team.create({ "name": currentUser.name, "turnoId": testShift.id}, {transaction});
    for (let rpi in reusablePuzzleInstances) {
        const oldRPI = reusablePuzzleInstances[rpi];
        const newRPI = saved.reusablePuzzleInstances[rpi];
        saved.teamInstructions = saved.teamInstructions.replaceAll(
            "/escapeRooms/"+er.id+"/reusablePuzzleInstances/"+oldRPI.id, 
            "/escapeRooms/"+saved.id+"/reusablePuzzleInstances/"+newRPI.id);
    }
    const theAssets = assets && assets.length ? [...assets].
        filter((a) => a.assetType).
        map((asset) => ({...uploadsHelper.getFieldsForAssetNoURL(asset, fileMapping["assets"]), "userId": authorId, "escapeRoomId": saved.id})) : undefined;

    const savedAssets = await models.asset.bulkCreate(theAssets, {transaction});
    for (let asset in assets) {
        const oldAsset = assets[asset];
        const newAsset = savedAssets[asset];
        saved.description = description.replaceAll("assets/" + oldAsset.id, "assets/" + newAsset.id);
        saved.indicationsInstructions = saved.indicationsInstructions.replaceAll("assets/" + oldAsset.id, "assets/" + newAsset.id);
        saved.teamInstructions = saved.teamInstructions.replaceAll("assets/" + oldAsset.id, "assets/" + newAsset.id);
        saved.classInstructions = saved.classInstructions.replaceAll("assets/" + oldAsset.id, "assets/" + newAsset.id);
        saved.afterInstructions = saved.afterInstructions.replaceAll("assets/" + oldAsset.id, "assets/" + newAsset.id);
        if (theReusablePuzzleInstances && theReusablePuzzleInstances.length > 0) {
            for (let rpi in saved.reusablePuzzleInstances) {
                const newRPI = saved.reusablePuzzleInstances[rpi];
                newRPI.config = newRPI.config.replaceAll("assets/" + oldAsset.id, "assets/" + newAsset.id);
                saved.reusablePuzzleInstances[rpi] = newRPI;
            }
        }
        if (oldAsset.url) {
            savedAssets[asset].url = oldAsset.url.replaceAll("/assets/" + oldAsset.id, "/assets/" + newAsset.id);
        }
        await savedAssets[asset].save({transaction});
    }
    
    await saved.save({transaction});
    if (scenes) {
        const newScenes = [];
        const hostName =  currentUrl;
        for (let scene in scenes) {
            let oldScene = scenes[scene];
            const oldERid = er.id;
            const newERid = saved.id;
            const oldAssetsIds = assets ? assets.map(a=>a.id): [];
            const newAssetsIds = savedAssets ? savedAssets.map(a=>a.id) : [];
            const oldReusablePuzzleInstances = reusablePuzzleInstances ? reusablePuzzleInstances.map(rpi=>rpi.id) : [];
            const newReusablePuzzleInstances = saved.reusablePuzzleInstances ? saved.reusablePuzzleInstances.map(rpi=>rpi.id) : [];
            oldScene = oldScene.toJSON? oldScene.toJSON() : oldScene;
            const newScene = replaceSceneUrls(oldScene, oldERid, newERid, oldAssetsIds, newAssetsIds, oldReusablePuzzleInstances, newReusablePuzzleInstances, prevUrl, hostName); 
            newScenes.push(newScene)
        }

        if (newScenes.length > 0) {
            const savedScenes = await models.scene.bulkCreate(newScenes, {transaction});
            for (let scene in scenes) { 
                const oldScene = scenes[scene];
                const oldERid = er.id;
                const newERid = saved.id;
                const newSceneid = savedScenes[scene].id;
                saved.teamInstructions = saved.teamInstructions.replaceAll(oldERid + "/scenes/" + oldScene.id, newERid + "/scenes/" + newSceneid);
            }
            await saved.save({transaction});
        }                            

    }

    await teamCreated.addTeamMembers(currentUser.id, {transaction});
    await models.participants.create({"attendance": false, "turnId": testShift.id, "userId": currentUser.id}, {transaction});
    await transaction.commit();
    return saved;
}

exports.getFilePathsForER = function(toExport) {


    const assetCandidates = toExport.assets.map((ast) => ({
        "field": "assets",
        "pathStr": ast,
        "old":  ast.fileId
    }));
    const thumbnailCandidate = toExport.attachment ? [{
        "field": "attachment",
        "pathStr": {...toExport.attachment, 
            contentPath: toExport.attachment.url,
            filename : toExport.attachment.public_id
        },
        "old": toExport.attachment.public_id
    }]: [];
    const hybridInstructionsCandidate = toExport.hybridInstructions ? [{
        "field": "hybridInstructions",
        "pathStr": {
            filename: toExport.hybridInstructions, 
            contentPath: `/uploads/hybrid/${toExport.hybridInstructions}`
        },
        "old": toExport.hybridInstructions
    }]: [];
    const instructionsCandidate = toExport.instructions ? [{
        "field": "instructions",
        "pathStr": {
            filename: toExport.instructions, 
            contentPath: `/uploads/instructions/${toExport.instructions}`
        },
        "old": toExport.instructions
    }]: [];     
    const hintAppCandidate = toExport.hintApp ? [{
        "field": "hintApp",
        "pathStr": {
            ...toExport.hintApp, 
            contentPath: toExport.hintApp.url,
            filename : toExport.hintApp.public_id
        },
        "old": toExport.hintApp.public_id
    }]: [];      
    return [...thumbnailCandidate, ...assetCandidates, ...hybridInstructionsCandidate, ...instructionsCandidate, ...hintAppCandidate];
}