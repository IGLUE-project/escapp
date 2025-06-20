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
    },
    {
        "name": "Wheel",
        "zip": "defaultReusablePuzzles/wheel/Wheel_Puzzle.zip",
        "form": "wheel.ejs",
        "thumbnail": "defaultReusablePuzzles/wheel/Wheel_Thumbnail.jpg",
        "instructions": {
            "en": "defaultReusablePuzzles/wheel/Wheel_Instructions_EN.pdf",
            "es": "defaultReusablePuzzles/wheel/Wheel_Instructions_ES.pdf"
        }
    }
];

for (i in reusablePuzzlesList) {
    const puz = reusablePuzzlesList[i];
    reusablePuzzles(puz.name, puz.form, puz.zip, puz.thumbnail, puz.instructions);
}
