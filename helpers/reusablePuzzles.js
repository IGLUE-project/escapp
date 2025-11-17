const getLengthForPuzzleSolution = (sol, validator="exact") => {
    switch(validator){
        case 'exact':
        case 'caseinsensitive':
        case 'range':
            break;
        case 'regex':
        default:
            return 1;
    }

    //Solution formats
    //abcd => length 1
    //a;b;c;d => length 4
    //a;b;c;d+e;f+g => length [4,2,1]

    if (!sol || typeof sol !== "string" || sol.trim() === "") return 0;
    const groups = sol.split("&");
    const lengths = groups.map(g => g.split(";").length);
    return lengths.length === 1 ? lengths[0] : lengths;
};
exports.getLengthForPuzzleSolution = getLengthForPuzzleSolution;

const getPuzzleSolutionLength = (puzzle) => {
    return getLengthForPuzzleSolution(puzzle.sol,puzzle.validator);
}
exports.getPuzzleSolutionLength = getPuzzleSolutionLength;

exports.getPuzzlesSolutionLength = (puzzles) => {
    if ((!Array.isArray(puzzles))||(puzzles.length === 0)) {
        return undefined;
    }
    const solutionLength = puzzles.map((p) => getPuzzleSolutionLength(p));
    return puzzles.length === 1 ? solutionLength[0] : solutionLength;
};