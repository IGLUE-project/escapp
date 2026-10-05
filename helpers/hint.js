const Sequelize = require("sequelize");
const sequelize = require("../models");
const {models} = sequelize;
const {getCurrentPuzzle, rollbackIfPending} = require("./utils");

exports.calculateNextHint = async (escapeRoom, team, status, score, category, messages, userId, ai) => {
    const success = status === "completed" || status === "passed";
    const transaction = await sequelize.transaction({"isolationLevel": Sequelize.Transaction.ISOLATION_LEVELS.READ_COMMITTED});

    try {
        const teamId = team.id;

        // Puzzle the team is currently facing — a hint (automatic, manual or failed) is
        // always about this puzzle. Computed for BOTH branches so every requestedHint row
        // records its puzzle, which the analytics CSVs rely on.
        const currentlyWorkingOn = await getCurrentPuzzle(team, escapeRoom.puzzles);
        const currentPuzzle = escapeRoom.puzzles.find((p) => p.order === currentlyWorkingOn);
        const currentPuzzleId = currentPuzzle ? currentPuzzle.id : null;

        if (success) {
            const hints = await models.requestedHint.findAll({
                "where": {
                    teamId,
                    "success": true
                },
                "include": [
                    {
                        "model": models.hint,
                        "attributes": ["id", "category", "order"],
                        "include": [
                            {
                                "model": models.puzzle,
                                "attributes": ["id", "order"]
                            }
                        ]
                    }
                ],
                "order": [["createdAt", "ASC"]],
                transaction
            });

            if (escapeRoom.hintLimit !== undefined && escapeRoom.hintLimit !== null && hints.length >= escapeRoom.hintLimit) {
                return { "msg": messages.tooMany, "ok": false };
            }
            const hintInterval = ai ? 0 : escapeRoom.hintInterval;

            if (hintInterval && hints.length > 0) {
                const latestHint = hints[hints.length - 1].createdAt;
                const now = new Date();
                const timeSinceLastHint = (now - latestHint) / 1000 / 60;

                if (timeSinceLastHint < hintInterval) {
                    const timeAhead = hintInterval - timeSinceLastHint;
                    const each = timeAhead < 1 ? `${Math.round(timeAhead * 60)} s.` : `${Math.round(timeAhead)} min.`;

                    return { "msg": `${messages.notUntil} ${each}`, "ok": false };
                }
            }
            const requestedHints = hints.filter((h) => h.id !== null);
            let currentHint = -1;
            const allHints = [];
            const allHintsIndexes = [];
            const puzzleOrder = currentPuzzle ? currentPuzzle.order + 1 : null;

            if (!currentPuzzle) {
                return { "ok": false, "msg": messages.cantRequestMoreThis};
            }

            for (const i in currentPuzzle.hints) {
                const currentHintAll = currentPuzzle.hints[i];

                if (!category || category === currentHintAll.category) {
                    allHints.push(currentHintAll);
                    allHintsIndexes.push(currentHintAll.id);
                }
            }

            for (const h in requestedHints) {
                const hint = requestedHints[h];

                const hIndex = allHintsIndexes.indexOf(hint.hintId);

                if (hIndex > currentHint) {
                    currentHint = hIndex;
                }
            }
            currentHint++;
            let msg = messages.empty;
            let hintId = null;
            let hintOrder = null;

            if (currentHint < allHintsIndexes.length) {
                msg = allHints[currentHint].content;
                hintId = allHints[currentHint].id;
                hintOrder = allHints[currentHint].order + 1;
            }
            if (hintOrder || escapeRoom.allowCustomHints) {
                const reqHint = models.requestedHint.build({hintId, teamId, success, score, userId, "puzzleId": currentPuzzleId});
                // Only predefined hints are de-duplicated (never issue the same specific
                // hint twice). Custom hints have no hintId and are governed solely by
                // hintLimit/hintInterval, so a team may request several — including more
                // than one for the same puzzle. Matching on a null hintId would otherwise
                // collapse every custom hint (and every failed attempt) into one row.
                const exists = hintId !== null
                    ? await models.requestedHint.findOne({"where": {hintId, teamId}, transaction})
                    : null;

                if (!exists) {
                    await reqHint.save({transaction});
                    await transaction.commit();
                    return {"ok": true, msg, hintOrder, puzzleOrder, category};
                }
                await transaction.commit();
                return {"ok": false};
            }
            await transaction.commit();
            return {"ok": false, "msg": messages.cantRequestMoreThis, hintOrder, puzzleOrder, category};
        }
        const reqHint = models.requestedHint.build({"hintId": null, teamId, success, score, userId, "puzzleId": currentPuzzleId});

        await reqHint.save({transaction});
        await transaction.commit();
        return { "ok": false, "msg": messages.failed};
    } catch (e) {
        return {"ok": false, "msg": e.message};
    } finally {
        // Several branches above return early (hint limit reached, hint interval not
        // elapsed, no puzzle being worked on) without committing. Without this the
        // transaction's connection is never released and the pool drains during a
        // live game, which surfaces as SequelizeConnectionAcquireTimeoutError
        // everywhere else.
        await rollbackIfPending(transaction);
    }
};
