const {reusablePuzzles} = require("./reusable_puzzle.js")

const reusablePuzzlesList = [
    {
        "name": "Keypad2",
        "description": "Keypad desc",
        "zip": "defaultReusablePuzzles/keypad/Keypad_Puzzle_Escapp_Preview.zip",
        "form": "keypad.ejs",
        "thumbnail": "defaultReusablePuzzles/keypad/keypad.png"
    },
    {
        "name": "AnotherPuzzle",
        "description": "Keypad desc",
        "zip": "defaultReusablePuzzles/keypad/Keypad_Puzzle_Escapp_Preview.zip",
        "form": "keypad.ejs"
    }
];

for (i in reusablePuzzlesList) {
    const puz = reusablePuzzlesList[i];
    reusablePuzzles(puz.name, puz.description, puz.form, puz.zip, puz.thumbnail);
}
