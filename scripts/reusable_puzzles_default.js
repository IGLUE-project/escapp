const {reusablePuzzles} = require("./reusable_puzzle.js");

const reusablePuzzlesList = [
    {
        "name": "Keypad",
        "zip": "defaultReusablePuzzles/Keypad/Keypad_Puzzle.zip",
        "form": "keypad.ejs",
        "thumbnail": "defaultReusablePuzzles/Keypad/Keypad_Thumbnail.png",
        "instructions": {
            "en": "defaultReusablePuzzles/Keypad/Keypad_Instructions_EN.pdf",
            "es": "defaultReusablePuzzles/Keypad/Keypad_Instructions_ES.pdf"
        }
    },
    {
        "name": "DecoderDisk",
        "zip": "defaultReusablePuzzles/DecoderDisk/DecoderDisk_Puzzle.zip",
        "form": "decoderDisk.ejs",
        "thumbnail": "defaultReusablePuzzles/DecoderDisk/DecoderDisk_Thumbnail.jpg",
        "instructions": {
            "en": "defaultReusablePuzzles/DecoderDisk/DecoderDisk_Instructions_EN.pdf",
            "es": "defaultReusablePuzzles/DecoderDisk/DecoderDisk_Instructions_ES.pdf"
        }
    },
    {
        "name": "Safebox",
        "zip": "defaultReusablePuzzles/Safebox/Safebox_Puzzle.zip",
        "form": "safebox.ejs",
        "thumbnail": "defaultReusablePuzzles/Safebox/Safebox_Thumbnail.jpg",
        "instructions": {
            "en": "defaultReusablePuzzles/Safebox/Safebox_Instructions_EN.pdf",
            "es": "defaultReusablePuzzles/Safebox/Safebox_Instructions_ES.pdf"
        }
    },

    // {
    //     "name": "CodeEditor",
    //     "zip": "defaultReusablePuzzles/CodeEditor/CodeEditor_Puzzle.zip",
    //     "form": "codeEditor.ejs",
    //     "thumbnail": "defaultReusablePuzzles/CodeEditor/CodeEditor_Thumbnail.png",
    //     "instructions": {
    //         "en": "defaultReusablePuzzles/CodeEditor/CodeEditor_Instructions_EN.pdf",
    //         "es": "defaultReusablePuzzles/CodeEditor/CodeEditor_Instructions_ES.pdf"
    //     }
    // }
];

for (i in reusablePuzzlesList) {
    const puz = reusablePuzzlesList[i];

    reusablePuzzles(puz.name, puz.form, puz.zip, puz.thumbnail, puz.instructions);
}
