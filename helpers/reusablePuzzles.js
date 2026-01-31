const { DELETE } = require("sequelize/lib/query-types");

function escapeRegExp (s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function normalizeBaseUrl (url) {
    // Remove trailing slashes so "http://x/" and "http://x" match consistently
    return url.replace(/\/+$/, "");
}

const getLengthForPuzzleSolution = (sol, validator = "exact") => {
    switch (validator) {
    case "exact":
    case "caseinsensitive":
    case "range":
        break;
    case "regex":
    default:
        return 1;
    }

    // Solution formats
    // Abcd => length 1
    // A;b;c;d => length 4
    // A;b;c;d+e;f+g => length [4,2,1]

    if (!sol || typeof sol !== "string" || sol.trim() === "") {
        return 0;
    }
    const groups = sol.split("&");
    const lengths = groups.map((g) => g.split(";").length);

    return lengths.length === 1 ? lengths[0] : lengths;
};

exports.getLengthForPuzzleSolution = getLengthForPuzzleSolution;

const getPuzzleSolutionLength = (puzzle) => getLengthForPuzzleSolution(puzzle.sol, puzzle.validator);

exports.getPuzzleSolutionLength = getPuzzleSolutionLength;

exports.getPuzzlesSolutionLength = (puzzles) => {
    if (!Array.isArray(puzzles) || puzzles.length === 0) {
        return undefined;
    }
    const solutionLength = puzzles.map((p) => getPuzzleSolutionLength(p));

    return puzzles.length === 1 ? solutionLength[0] : solutionLength;
};

exports.replaceSceneUrls = function (
    oldScene,
    oldEscapeId,
    newEscapeId,
    oldAssetIds,
    newAssetIds,
    oldReusablePuzzleIds,
    newReusablePuzzleIds,
    oldServerUrl,
    newServerUrl
) {
    const targetKeys = new Set(["avatar", "image", "body", "background", "thumbnail"]);

    if (!Array.isArray(oldAssetIds) || !Array.isArray(newAssetIds)) {
        throw new Error("oldAssetIds and newAssetIds must be arrays");
    }
    if (!Array.isArray(oldReusablePuzzleIds) || !Array.isArray(newReusablePuzzleIds)) {
        throw new Error("oldReusablePuzzleIds and newReusablePuzzleIds must be arrays");
    }
    if (oldAssetIds.length !== newAssetIds.length) {
        throw new Error("oldAssetIds and newAssetIds must have the same length");
    }
    if (oldReusablePuzzleIds.length !== newReusablePuzzleIds.length) {
        throw new Error("oldReusablePuzzleIds and newReusablePuzzleIds must have the same length");
    }

    const assetMap = new Map();

    for (let i = 0; i < oldAssetIds.length; i++) {
        assetMap.set(String(oldAssetIds[i]), String(newAssetIds[i]));
    }

    const reusableMap = new Map();

    for (let i = 0; i < oldReusablePuzzleIds.length; i++) {
        reusableMap.set(String(oldReusablePuzzleIds[i]), String(newReusablePuzzleIds[i]));
    }

    const oldEscapeStr = String(oldEscapeId);
    const newEscapeStr = String(newEscapeId);

    const assetRegex = /\/assets\/(\d+)/g;
    const reusableRegex = new RegExp(
        String.raw`/escapeRooms/${escapeRegExp(oldEscapeStr)}/reusablePuzzleInstances/(\d+)`,
        "g"
    );

    const hasServerRewrite =
    typeof oldServerUrl === "string" &&
    oldServerUrl.length > 0 &&
    typeof newServerUrl === "string" &&
    newServerUrl.length > 0;

    const normalizedOldServer = hasServerRewrite ? normalizeBaseUrl(oldServerUrl) : null;
    const normalizedNewServer = hasServerRewrite ? normalizeBaseUrl(newServerUrl) : null;

    const serverRegex = hasServerRewrite ? new RegExp(escapeRegExp(normalizedOldServer), "g") : null;

    function transformValue (key, value) {
        if (!targetKeys.has(key) || typeof value !== "string") {
            return value;
        }

        let out = value;

        if (serverRegex) {
            out = out.replaceAll(serverRegex, normalizedNewServer);
        }
        out = out.replaceAll(assetRegex, (match, id) => {
            const mapped = assetMap.get(id);

            return mapped ? `/assets/${mapped}` : match;
        });

        out = out.replaceAll(reusableRegex, (match, id) => {
            const mapped = reusableMap.get(id);

            return mapped
                ? `/escapeRooms/${newEscapeStr}/reusablePuzzleInstances/${mapped}`
                : match;
        });

        return out;
    }

    // Primitive or null just returns as-is
    if (oldScene === null || typeof oldScene !== "object") {
        return oldScene;
    }

    const seen = new WeakMap();

    const rootCopy = Array.isArray(oldScene) ? [] : {};

    seen.set(oldScene, rootCopy);

    // Stack items: { src, dst }
    const stack = [{ "src": oldScene, "dst": rootCopy }];

    while (stack.length) {
        const { src, dst } = stack.pop();

        if (Array.isArray(src)) {
            for (let i = 0; i < src.length; i++) {
                const v = src[i];

                if (v && typeof v === "object") {
                    const existing = seen.get(v);

                    if (existing) {
                        dst[i] = existing;
                    } else {
                        const childCopy = Array.isArray(v) ? [] : {};

                        seen.set(v, childCopy);
                        dst[i] = childCopy;
                        stack.push({ "src": v, "dst": childCopy });
                    }
                } else {
                    dst[i] = v;
                }
            }
        } else {
            for (const [k, v] of Object.entries(src)) {
                if (v && typeof v === "object") {
                    const existing = seen.get(v);

                    if (existing) {
                        dst[k] = existing;
                    } else {
                        const childCopy = Array.isArray(v) ? [] : {};

                        seen.set(v, childCopy);
                        dst[k] = childCopy;
                        stack.push({ "src": v, "dst": childCopy });
                    }
                } else {
                    dst[k] = transformValue(k, v);
                }
            }

            // Apply transformations for string values on target keys that might have been objects/arrays? Not needed.
            // But we also need to transform if a target key points to a string already handled above.
            // That’s covered by the else branch.
            for (const k of targetKeys) {
                if (typeof dst[k] === "string") {
                    dst[k] = transformValue(k, dst[k]);
                }
            }
        }
    }
    rootCopy.id = undefined;
    rootCopy.escapeRoomId = newEscapeId;
    rootCopy.content.erId = newEscapeId;
    rootCopy.createdAt = undefined;
    rootCopy.updatedAt = undefined;
    return rootCopy;
};

