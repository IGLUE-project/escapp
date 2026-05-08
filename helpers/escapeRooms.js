const sequelize = require("../models");
const {models} = sequelize;
const query = require("../queries");
const uploadsHelper = require("./uploads");
const path = require("path");
const fsSync = require("fs");
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
    // Build old->new puzzle id map. The cloning preserves order, so the i-th
    // puzzle in the source ER becomes the i-th puzzle in the saved ER.
    const puzzleIdMap = new Map();
    const oldPuzzleIds = er.puzzles ? er.puzzles.map((p) => String(p.id)) : [];

    for (let i = 0; i < oldPuzzleIds.length; i++) {
        if (saved.puzzles[i]) {
            puzzleIdMap.set(oldPuzzleIds[i], String(saved.puzzles[i].id));
        }
    }

    // Update join table (reusablePuzzleInstance <-> puzzle) to point to cloned puzzles
    for (const rpi in reusablePuzzleInstances) {
        const oldRPI = reusablePuzzleInstances[rpi];
        const newRPI = saved.reusablePuzzleInstances[rpi];

        if (oldRPI.puzzles && oldRPI.puzzles.length) {
            const newPuzzlesForRPI = [];

            for (const oldPuzzle of oldRPI.puzzles) {
                const newId = puzzleIdMap.get(String(oldPuzzle.id));

                if (newId) {
                    const newPuzzle = saved.puzzles.find((p) => String(p.id) === newId);

                    if (newPuzzle) {
                        newPuzzlesForRPI.push(newPuzzle);
                    }
                }
            }
            await newRPI.setPuzzles(newPuzzlesForRPI, { transaction });
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

    // Build old->new asset id map.
    const assetIdMap = new Map();

    for (let i = 0; i < filteredAssets.length; i++) {
        if (savedAssets[i]) {
            assetIdMap.set(String(filteredAssets[i].id), String(savedAssets[i].id));
        }
    }

    // Helpers: rewrite refs by old->new id map. Refs to ids that aren't in the
    // map (e.g. stale grandparent refs) are left untouched.
    const remapAssetRefs = (str) => str.replace(/\/assets\/(\d+)([./])/g, (m, oldId, sep) => {
        const newId = assetIdMap.get(oldId);

        return newId ? `/assets/${newId}${sep}` : m;
    });
    // Configs are stored as plain JSON (not double-encoded). Match
    // "puzzle":"<id>" exactly — the previous \"puzzle\":\"<id>\" form was a
    // long-standing escaping bug, so existing rows still carry stale refs.
    const remapPuzzleRefs = (str) => str.replace(/"puzzle":"(\d+)"/g, (m, oldId) => {
        const newId = puzzleIdMap.get(oldId);

        return newId ? `"puzzle":"${newId}"` : m;
    });

    // Asset id remap on rich-text fields and on each new asset's url.
    for (const field of ["description", "indicationsInstructions", "teamInstructions", "classInstructions", "afterInstructions"]) {
        if (typeof saved[field] === "string") {
            saved[field] = remapAssetRefs(saved[field]);
        }
    }
    for (let i = 0; i < filteredAssets.length; i++) {
        const oldAsset = filteredAssets[i];
        const newAsset = savedAssets[i];

        if (newAsset && oldAsset.url && typeof oldAsset.url === "string") {
            const updated = remapAssetRefs(oldAsset.url);

            if (updated !== oldAsset.url) {
                newAsset.url = updated;
                await newAsset.save({ transaction });
            }
        }
    }

    // Server URL rewrites on rich-text fields.
    const hasServerRewrite = typeof prevUrl === "string" && prevUrl.length > 0 &&
        typeof currentUrl === "string" && currentUrl.length > 0;

    if (hasServerRewrite) {
        for (const field of ["description", "indicationsInstructions", "teamInstructions", "classInstructions", "afterInstructions"]) {
            if (typeof saved[field] === "string") {
                saved[field] = saved[field].replaceAll(prevUrl, currentUrl);
            }
        }
    }

    // RPI configs: apply puzzle id, asset id, and server url rewrites in one pass
    // so each instance is saved at most once.
    if (Array.isArray(saved.reusablePuzzleInstances) && saved.reusablePuzzleInstances.length) {
        for (const rpi of saved.reusablePuzzleInstances) {
            if (typeof rpi?.config !== "string") {
                continue;
            }
            let cfg = rpi.config;

            cfg = remapPuzzleRefs(cfg);
            cfg = remapAssetRefs(cfg);
            if (hasServerRewrite) {
                cfg = cfg.replaceAll(prevUrl, currentUrl);
            }
            if (cfg !== rpi.config) {
                rpi.config = cfg;
                await rpi.save({ transaction });
            }
        }
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

            // Map old scene id -> new scene id so we can re-bind scene-scoped
            // RPIs and puzzles below.
            const sceneIdMap = new Map();

            for (let i = 0; i < scenes.length; i++) {
                if (savedScenes[i]) {
                    sceneIdMap.set(scenes[i].id, savedScenes[i].id);
                }
            }

            for (const scene in scenes) {
                const oldScene = scenes[scene];
                const oldERid = er.id;
                const newERid = saved.id;
                const newSceneid = savedScenes[scene].id;

                saved.teamInstructions = saved.teamInstructions.replaceAll(`/${oldERid}/scenes/${oldScene.id}`, `/${newERid}/scenes/${newSceneid}`);
            }
            await saved.save({transaction});

            // Restore sceneId on cloned RPIs that were scene-scoped in the source.
            // The build preserved insertion order, so saved.reusablePuzzleInstances[i]
            // corresponds to reusablePuzzleInstances[i].
            if (reusablePuzzleInstances && reusablePuzzleInstances.length) {
                for (let i = 0; i < reusablePuzzleInstances.length; i++) {
                    const oldRpi = reusablePuzzleInstances[i];
                    const newRpi = saved.reusablePuzzleInstances[i];

                    if (oldRpi && oldRpi.sceneId && newRpi) {
                        const newSceneId = sceneIdMap.get(oldRpi.sceneId);

                        if (newSceneId && newRpi.sceneId !== newSceneId) {
                            newRpi.sceneId = newSceneId;
                            await newRpi.save({transaction});
                        }
                    }
                }
            }

            // Same for scene-scoped puzzles. saved.puzzles[i] corresponds to puzzles[i]
            // because the build copies them in source order.
            if (puzzles && puzzles.length) {
                for (let i = 0; i < puzzles.length; i++) {
                    const oldP = puzzles[i];
                    const newP = saved.puzzles[i];

                    if (oldP && oldP.sceneId && newP) {
                        const newSceneId = sceneIdMap.get(oldP.sceneId);

                        if (newSceneId && newP.sceneId !== newSceneId) {
                            newP.sceneId = newSceneId;
                            await newP.save({transaction});
                        }
                    }
                }
            }
        }
    }

    await teamCreated.addTeamMembers(currentUser.id, {transaction});
    await models.participants.create({"attendance": false, "turnId": testShift.id, "userId": currentUser.id}, {transaction});
    await transaction.commit();
    console.log(JSON.stringify(saved, null, 5));

    return saved;
};

// Resolve a relative path from an imported escape-room ZIP into an absolute path
// under <project>/uploads/, refusing anything that escapes that directory (path
// traversal via "..", absolute paths, or symlink-style tricks). Throws on misuse.
const PROJECT_ROOT = path.resolve(__dirname, "..");
const UPLOADS_ROOT = path.resolve(PROJECT_ROOT, "uploads");

exports.safeImportPath = function (relPath) {
    if (typeof relPath !== "string" || relPath.length === 0) {
        throw new Error("Refusing to import: empty target path");
    }
    const stripped = relPath.replace(/^[/\\]+/, "");
    // Must address something *inside* uploads/
    const withinUploads = stripped.startsWith("uploads/") || stripped.startsWith("uploads\\")
        ? stripped.slice("uploads/".length)
        : null;

    if (withinUploads === null) {
        throw new Error(`Refusing to import: path outside uploads/: ${relPath}`);
    }
    const target = path.resolve(UPLOADS_ROOT, withinUploads);

    if (target !== UPLOADS_ROOT && !target.startsWith(UPLOADS_ROOT + path.sep)) {
        throw new Error(`Refusing to import: path traversal detected: ${relPath}`);
    }
    return target;
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

// Build the field/old-name -> new-name mapping for a list of file refs.
// Used by both import (file already in a ZIP we are extracting) and clone
// (files already on disk that we need to duplicate).
exports.getReplacements = function (all) {
    const mapping = {};

    for (const item of all) {
        const {old} = item;
        const newName = `${Date.now()}_${old.length > 200 ? old.slice(60) : old}`;

        if (mapping[item.field]) {
            mapping[item.field][old] = newName;
        } else {
            mapping[item.field] = {[old]: newName};
        }
    }
    return mapping;
};

// Canonical upload folder for each field, used when the stored contentPath/url
// is just a bare filename (legacy data) and we need a real /uploads/... path.
const CANONICAL_UPLOAD_DIR = {
    "attachment": "/uploads/thumbnails/",
    "hintApp": "/uploads/hints/",
    "instructions": "/uploads/instructions/",
    "hybridInstructions": "/uploads/hybrid/",
    "assets": "/uploads/"
};

// Resolve the on-disk path for a getFilePathsForER item. Handles webapp
// assets (directory, with /index.html suffix) and legacy rows whose
// contentPath/url is just a bare filename rather than a /uploads/... path.
const resolveItemPath = function (item, name) {
    const isWebapp = item.pathStr && item.pathStr.assetType === "webapp";
    let pathPart = item.pathStr.contentPath || `/uploads/${item.pathStr.public_id}`;

    if (isWebapp) {
        pathPart = pathPart.replace("/index.html", "");
    }
    // If the stored value is just a filename (no slash), fall back to the
    // canonical folder for this field type.
    if (!pathPart.includes("/") && !pathPart.includes("\\")) {
        const dir = CANONICAL_UPLOAD_DIR[item.field] || "/uploads/";

        pathPart = `${dir}${pathPart}`;
    }
    if (name && name !== item.old) {
        pathPart = pathPart.replace(item.old, name);
    }
    return pathPart;
};

// Duplicate every file referenced by `er` on disk under a fresh, time-stamped
// name and return the field-mapping suitable for cloneER's `fileMapping` arg.
// Mirrors what import does after ZIP extraction, so cloned escape rooms own
// their own physical files (deleting the source no longer breaks the clone).
exports.copyERFilesForClone = function (er) {
    const all = exports.getFilePathsForER(er);
    const replacements = exports.getReplacements(all);

    for (const item of all) {
        const sourceRel = resolveItemPath(item, null);
        const sourceAbs = path.join(PROJECT_ROOT, sourceRel.replace(/^[/\\]+/, ""));

        const replacementName = (replacements[item.field] && replacements[item.field][item.old]) || item.old;
        const targetRel = resolveItemPath(item, replacementName);
        const targetAbs = exports.safeImportPath(targetRel);

        if (!fsSync.existsSync(sourceAbs)) {
            console.warn(`Clone: source file missing, skipping: ${sourceAbs}`);
            continue;
        }
        fsSync.mkdirSync(path.dirname(targetAbs), {"recursive": true});
        const stat = fsSync.statSync(sourceAbs);

        if (stat.isDirectory()) {
            fsSync.cpSync(sourceAbs, targetAbs, {"recursive": true});
        } else {
            fsSync.copyFileSync(sourceAbs, targetAbs);
        }
    }
    return replacements;
};
