const {reusablePuzzles} = require("./reusable_puzzle.js");

const reusablePuzzlesList = [
    {
        "name": "Keypad",
        "zip": "defaultReusablePuzzles/keypad/Keypad_Puzzle.zip",
        "form": "keypad.ejs",
        "thumbnail": "defaultReusablePuzzles/keypad/Keypad_Thumbnail.png",
        "instructions": {
            "en": "defaultReusablePuzzles/keypad/Keypad_Instructions_EN.pdf",
            "es": "defaultReusablePuzzles/keypad/Keypad_Instructions_ES.pdf"
        }
    }
    /*,
    {
        "name": "Wires",
        "zip": "defaultReusablePuzzles/wires/Wires.zip",
        "form": "wires.ejs"
    }
    */
];

for (i in reusablePuzzlesList) {
    const puz = reusablePuzzlesList[i];

    reusablePuzzles(puz.name, puz.description, puz.form, puz.zip, puz.thumbnail);
}
