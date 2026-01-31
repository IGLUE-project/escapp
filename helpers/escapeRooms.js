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
        const reus = await models.reusablePuzzle.findOne({"where": {"name": rpName}});

        if (reus) {
            return reus.id;
        }
        throw new Error(`No reusable puzzle with the name ${rpName}`);
    } catch (e) {
        throw new Error(e);
    }
};

exports.cloneER = async function (er, authorId, newTitle, currentUser, prevUrl, currentUrl, fileMapping = {}, transaction) {
    const {subjects, duration, license, field, format, level, description, scope, invitation, teamSize, minTeamSize, teamAppearance, classAppearance, forceLang, survey, pretest, posttest, numQuestions, numRight, feedback, forbiddenLateSubmissions, classInstructions, teamInstructions, indicationsInstructions, afterInstructions, scoreParticipation, hintLimit, hintSuccess, hintFailed, puzzles, hintApp, assets, attachment, allowCustomHints, hintInterval, automatedHints, supportLink, automaticAttendance, hybridInstructions, instructions, reusablePuzzleInstances, scenes, allowUserToResetTeamProgress} = er;
    let {lang } = er;
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
            "include": [models.reusablePuzzle, models.puzzle]
        });
    }


    lang = lang || "en";
    let theReusablePuzzleInstances;

    if (reusablePuzzleInstances) {
        theReusablePuzzleInstances = [];

        for (const instance of reusablePuzzleInstances) {
            theReusablePuzzleInstances.push({
                "name": instance.name,
                "config": instance.config,
                "reusablePuzzleId": await getReusablePuzzleIdByName(instance.reusablePuzzle.name)
            });
        }
    }
    const escapeRoom = models.escapeRoom.build({
        "title": newTitle,
        "subjects": subjects ? subjects.map((s) => ({ "subject": s.subject })) : [],
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
        "hybridInstructions": fileMapping.hybridInstructions && hybridInstructions && fileMapping.hybridInstructions[hybridInstructions] ? fileMapping.hybridInstructions[hybridInstructions] : hybridInstructions,
        "instructions": fileMapping.instructions && instructions && fileMapping.instructions[instructions] ? fileMapping.instructions[instructions] : instructions,
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
        allowUserToResetTeamProgress,
        "status": "draft",
        license,
        field,
        "publishedOnce": license && license.includes("SA"),
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
        "hintApp": hintApp ? uploadsHelper.getFields(hintApp, fileMapping.hintApp) : undefined,
        "reusablePuzzleInstances": theReusablePuzzleInstances,
        "attachment": attachment ? uploadsHelper.getFields(attachment, fileMapping.attachment) : undefined
    }, {include});

    const saved = await escapeRoom.save({transaction});
    const testShift = await models.turno.create({"place": "test", "status": "test", "escapeRoomId": escapeRoom.id }, {transaction});
    const teamCreated = await models.team.create({ "name": currentUser.name, "turnoId": testShift.id}, {transaction});
    // Convert to strings for consistent comparison
    const oldPuzzleIds = er.puzzles ? er.puzzles.map((p) => String(p.id)) : [];
    const newPuzzleIds = saved.puzzles ? saved.puzzles.map((p) => String(p.id)) : [];

    // Update puzzles on reusablePuzzleInstances to point to new puzzle IDs
    for (const rpi in reusablePuzzleInstances) {
        const oldRPI = reusablePuzzleInstances[rpi];
        const newRPI = saved.reusablePuzzleInstances[rpi];

        if (oldRPI.puzzles && oldRPI.puzzles.length) {
            const newPuzzlesForRPI = [];

            for (const oldPuzzle of oldRPI.puzzles) {
                const puzzleIndex = oldPuzzleIds.indexOf(String(oldPuzzle.id));

                if (puzzleIndex !== -1) {
                    newPuzzlesForRPI.push(saved.puzzles[puzzleIndex]);
                    if (newRPI.config) {
                        newRPI.config = newRPI.config.replaceAll(
                            `\\"puzzle\\":\\"${String(oldPuzzle.id)}\\"`,
                            `\\"puzzle\\":\\"${String(saved.puzzles[puzzleIndex].id)}\\"`
                        );
                    }
                }
            }
            await newRPI.setPuzzles(newPuzzlesForRPI, { transaction });
            await newRPI.save({ transaction });
        }

        saved.teamInstructions = saved.teamInstructions.replaceAll(
            `/escapeRooms/${er.id}/reusablePuzzleInstances/${oldRPI.id}`,
            `/escapeRooms/${saved.id}/reusablePuzzleInstances/${newRPI.id}`
        );
    }
    const filteredAssets = Array.isArray(assets)
        ? assets.filter((a) => a?.assetType)
        : [];

    const theAssets = filteredAssets.length
        ? filteredAssets.map((asset) => ({
            ...uploadsHelper.getFieldsForAssetNoURL(asset, fileMapping.assets),
            "userId": authorId,
            "escapeRoomId": saved.id
        }))
        : undefined;

    const savedAssets = theAssets
        ? await models.asset.bulkCreate(theAssets, { transaction })
        : [];


    for (const [i, oldAsset] of filteredAssets.entries()) {
        const newAsset = savedAssets[i];

        if (!newAsset) {
            continue;
        }

        // Update relative references too, if those exist in configs
        const fromRel = `/assets/${oldAsset.id}.`;
        const toRel = `/assets/${newAsset.id}.`;

        if (typeof saved.description === "string") {
            saved.description = saved.description.replaceAll(fromRel, toRel);
        }
        if (typeof saved.indicationsInstructions === "string") {
            saved.indicationsInstructions = saved.indicationsInstructions.replaceAll(fromRel, toRel);
        }
        if (typeof saved.teamInstructions === "string") {
            saved.teamInstructions = saved.teamInstructions.replaceAll(fromRel, toRel);
        }
        if (typeof saved.classInstructions === "string") {
            saved.classInstructions = saved.classInstructions.replaceAll(fromRel, toRel);
        }
        if (typeof saved.afterInstructions === "string") {
            saved.afterInstructions = saved.afterInstructions.replaceAll(fromRel, toRel);
        }

        if (Array.isArray(saved.reusablePuzzleInstances) && saved.reusablePuzzleInstances.length) {
            for (const rpi of saved.reusablePuzzleInstances) {
                if (typeof rpi?.config === "string") {
                    rpi.config = rpi.config.replaceAll(fromRel, toRel);
                }
            }
        }

        if (oldAsset.url && typeof oldAsset.url === "string") {
            newAsset.url = oldAsset.url.replaceAll(fromRel, toRel);
            await newAsset.save({ transaction });
        }
    }


    if (typeof saved.description === "string") {
        saved.description = saved.description.replaceAll(prevUrl, currentUrl);
    }
    if (typeof saved.indicationsInstructions === "string") {
        saved.indicationsInstructions = saved.indicationsInstructions.replaceAll(prevUrl, currentUrl);
    }
    if (typeof saved.teamInstructions === "string") {
        saved.teamInstructions = saved.teamInstructions.replaceAll(prevUrl, currentUrl);
    }
    if (typeof saved.classInstructions === "string") {
        saved.classInstructions = saved.classInstructions.replaceAll(prevUrl, currentUrl);
    }
    if (typeof saved.afterInstructions === "string") {
        saved.afterInstructions = saved.afterInstructions.replaceAll(prevUrl, currentUrl);
    }

    await saved.save({transaction});
    if (scenes) {
        const newScenes = [];
        const hostName = currentUrl;

        for (const scene in scenes) {
            let oldScene = scenes[scene];
            const oldERid = er.id;
            const newERid = saved.id;
            const oldAssetsIds = assets ? assets.map((a) => a.id) : [];
            const newAssetsIds = savedAssets ? savedAssets.map((a) => a.id) : [];
            const oldReusablePuzzleInstances = reusablePuzzleInstances ? reusablePuzzleInstances.map((rpi) => rpi.id) : [];
            const newReusablePuzzleInstances = saved.reusablePuzzleInstances ? saved.reusablePuzzleInstances.map((rpi) => rpi.id) : [];

            oldScene = oldScene.toJSON ? oldScene.toJSON() : oldScene;
            const newScene = replaceSceneUrls(oldScene, oldERid, newERid, oldAssetsIds, newAssetsIds, oldReusablePuzzleInstances, newReusablePuzzleInstances, prevUrl, hostName);

            newScenes.push(newScene);
        }

        if (newScenes.length > 0) {
            const savedScenes = await models.scene.bulkCreate(newScenes, {transaction});

            for (const scene in scenes) {
                const oldScene = scenes[scene];
                const oldERid = er.id;
                const newERid = saved.id;
                const newSceneid = savedScenes[scene].id;

                saved.teamInstructions = saved.teamInstructions.replaceAll(`/${oldERid}/scenes/${oldScene.id}`, `/${newERid}/scenes/${newSceneid}`);
            }
            await saved.save({transaction});
        }
    }

    await teamCreated.addTeamMembers(currentUser.id, {transaction});
    await models.participants.create({"attendance": false, "turnId": testShift.id, "userId": currentUser.id}, {transaction});
    await transaction.commit();
    console.log(JSON.stringify(saved, null, 5));

    return saved;
};

exports.getFilePathsForER = function (toExport) {
    const assetCandidates = toExport.assets.map((ast) => ({
        "field": "assets",
        "pathStr": ast,
        "old": ast.fileId
    }));
    const thumbnailCandidate = toExport.attachment ? [
        {
            "field": "attachment",
            "pathStr": {
                ...toExport.attachment,
                "contentPath": toExport.attachment.url,
                "filename": toExport.attachment.public_id
            },
            "old": toExport.attachment.public_id
        }
    ] : [];
    const hybridInstructionsCandidate = toExport.hybridInstructions ? [
        {
            "field": "hybridInstructions",
            "pathStr": {
                "filename": toExport.hybridInstructions,
                "contentPath": `/uploads/hybrid/${toExport.hybridInstructions}`
            },
            "old": toExport.hybridInstructions
        }
    ] : [];
    const instructionsCandidate = toExport.instructions ? [
        {
            "field": "instructions",
            "pathStr": {
                "filename": toExport.instructions,
                "contentPath": `/uploads/instructions/${toExport.instructions}`
            },
            "old": toExport.instructions
        }
    ] : [];
    const hintAppCandidate = toExport.hintApp ? [
        {
            "field": "hintApp",
            "pathStr": {
                ...toExport.hintApp,
                "contentPath": toExport.hintApp.url,
                "filename": toExport.hintApp.public_id
            },
            "old": toExport.hintApp.public_id
        }
    ] : [];

    return [...thumbnailCandidate, ...assetCandidates, ...hybridInstructionsCandidate, ...instructionsCandidate, ...hintAppCandidate];
};
