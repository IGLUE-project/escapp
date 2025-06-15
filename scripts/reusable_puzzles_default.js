const {reusablePuzzles} = require("./reusable_puzzle.js");

const reusablePuzzlesList = [
    {
        "name": "Keypad",
        "zip": "defaultReusablePuzzles/keypad/Keypad_Puzzle_Escapp_Preview.zip",
        "form": "keypad.ejs",
        "thumbnail": "defaultReusablePuzzles/keypad/keypad.png"
    }/*,
    {
        "name": "Wires",
        "zip": "defaultReusablePuzzles/wires/Wires.zip",
        "form": "wires.ejs"
    }*/
];

for (i in reusablePuzzlesList) {
    const puz = reusablePuzzlesList[i];

    reusablePuzzles(puz.name, puz.description, puz.form, puz.zip, puz.thumbnail);
}
