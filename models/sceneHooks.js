// Definition of hooks for the Scene model:

function getPuzzleSolutionsFromSceneContent(content) {
    if (!content) {
        return [];
    }
    let result = [];

    if (Array.isArray(content.screens)) {
        for (let i = 0; i < content.screens.length; i++) {
            const screen = content.screens[i];
            result = result.concat(_getPuzzleSolutionsFromSlideMarkers(screen));
            if (Array.isArray(screen.views)) {
                for (let j = 0; j < screen.views.length; j++) {
                    const view = screen.views[j];
                    result = result.concat(_getPuzzleSolutionsFromSlideMarkers(view));
                }
            }
        }
    }
    return Array.from(
        new Map(result.map(item => [item.puzzleId, item])).values()
    );
}

function _getPuzzleSolutionsFromSlideMarkers(slide) {
    if (!slide) {
        return [];
    }
    const result = [];

    const groups = ["hotspots", "hotzones"];
    for (let g = 0; g < groups.length; g++) {
        const groupName = groups[g];
        const list = slide[groupName];
        if (!Array.isArray(list)) {
            continue;
        }
        for (let j = 0; j < list.length; j++) {
            const item = list[j];
            if (!item || !(Array.isArray(item.actions)) || typeof item.id !== "string") {
                continue;
            }
            if (groupName === "hotzones" && typeof item.idAlias !== "string") {
                continue;
            }
            for (let k = 0; k < item.actions.length; k++) {
                const action = item.actions[k];
                if (action && action.actionType === "solvePuzzle") {
                    if (action.actionParams && typeof action.actionParams.puzzleId === "string") {
                        const puzzleSol = (groupName === "hotzones") ? item.idAlias : item.id;
                        result.push({puzzleId: action.actionParams.puzzleId, puzzleSol: puzzleSol})
                    }
                }
            }
        }
    }
    return result;
}

module.exports = ({ scene, puzzle }) => {
    scene.addHook("beforeSave", async (sceneInstance, options) => {
        const content = sceneInstance.content || {};

        sceneInstance.name = content.title || sceneInstance.name;
        sceneInstance.thumbnail = content.avatar || sceneInstance.thumbnail;

        // Update puzzle solutions
        const puzzleSolutions = getPuzzleSolutionsFromSceneContent(content);

        if (puzzleSolutions.length > 0 && sceneInstance.escapeRoomId) {
            const puzzles = await puzzle.findAll({
                where: {
                    escapeRoomId: sceneInstance.escapeRoomId
                }
            });

            const puzzlesByOrder = new Map(
                puzzles.map(puzzleInstance => [
                    String(puzzleInstance.order + 1),
                    puzzleInstance
                ])
            );

            for (const puzzleSolution of puzzleSolutions) {
                const puzzleInstance = puzzlesByOrder.get(
                    puzzleSolution.puzzleId
                );

                if (!puzzleInstance) {
                    continue;
                }

                await puzzleInstance.update({
                    sol: puzzleSolution.puzzleSol,
                    validator: "exact",
                    automatic: true
                });
            }
        }
    });
};