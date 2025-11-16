// Definition of hooks for the Scene model:

function getPuzzleSolutionsFromSceneContent(content) {
  if (!content) return {};
  const result = {};
  if (content.screens instanceof Array) {
    for (let i = 0; i < content.screens.length; i++) {
      const screen = content.screens[i];
      const groups = ["hotspots", "hotzones"];
      for (let g = 0; g < groups.length; g++) {
        const groupName = groups[g];
        const list = screen[groupName];
        if (!(list instanceof Array)) continue;
        for (let j = 0; j < list.length; j++) {
          const item = list[j];
          if (!item || !(item.actions instanceof Array) || (typeof item.id !== "string")) continue;
          if((groupName==="hotzones")&&(typeof item.idAlias !== "string")) continue;
          for (let k = 0; k < item.actions.length; k++) {
            const action = item.actions[k];
            if (action && action.actionType === "solvePuzzle") {
                if (action.actionParams && typeof action.actionParams.puzzleId === "string") {
                    if(groupName==="hotzones"){
                        item.id = item.idAlias;
                    }
                    result[action.actionParams.puzzleId] = item.id;
                }
            }
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

    //Update puzzle solutions
    const puzzleSolutions = getPuzzleSolutionsFromSceneContent(content);
    if ((Object.keys(puzzleSolutions).length > 0)&&(sceneInstance.escapeRoomId)) {
        const puzzles = await puzzle.findAll({
            where: {escapeRoomId: sceneInstance.escapeRoomId},
            order: [["order", "ASC"]]
        });
        const puzzleLength = puzzles.length;
        for (const puzzleOrder in puzzleSolutions) {
            if((puzzleLength >= puzzleOrder)&&(puzzleOrder > 0)){
                const puzzleSolution = puzzleSolutions[puzzleOrder];
                let puzzleInstance = puzzles[puzzleOrder-1];
                await puzzleInstance.update(
                  { sol: puzzleSolution }
                );
            }
        }
    }
  });
};