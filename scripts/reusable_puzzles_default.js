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
    {
        "name": "Switches",
        "zip": "defaultReusablePuzzles/Switches/Switches_Puzzle.zip",
        "form": "switches.ejs",
        "thumbnail": "defaultReusablePuzzles/Switches/Switches_Thumbnail.png",
        "instructions": {
            "en": "defaultReusablePuzzles/Switches/Switches_Instructions_EN.pdf",
            "es": "defaultReusablePuzzles/Switches/Switches_Instructions_ES.pdf"
        }
    },
    {
        "name": "WireConnection",
        "zip": "defaultReusablePuzzles/WireConnection/WireConnection_Puzzle.zip",
        "form": "wireConnection.ejs",
        "thumbnail": "defaultReusablePuzzles/WireConnection/WireConnection_Thumbnail.png",
        "instructions": {
            "en": "defaultReusablePuzzles/WireConnection/WireConnection_Instructions_EN.pdf",
            "es": "defaultReusablePuzzles/WireConnection/WireConnection_Instructions_ES.pdf"
        }
    },
    {
        "name": "SignalGenerator",
        "zip": "defaultReusablePuzzles/SignalGenerator/SignalGenerator_Puzzle.zip",
        "form": "signalGenerator.ejs",
        "thumbnail": "defaultReusablePuzzles/SignalGenerator/SignalGenerator_Thumbnail.jpg",
        "instructions": {
            "en": "defaultReusablePuzzles/SignalGenerator/SignalGenerator_Instructions_EN.pdf",
            "es": "defaultReusablePuzzles/SignalGenerator/SignalGenerator_Instructions_ES.pdf"
        }
    },
    {
        "name": "Chessboard",
        "zip": "defaultReusablePuzzles/Chessboard/Chessboard_Puzzle.zip",
        "form": "chessboard.ejs",
        "thumbnail": "defaultReusablePuzzles/Chessboard/Chessboard_Thumbnail.jpg",
        "instructions": {
            "en": "defaultReusablePuzzles/Chessboard/Chessboard_Instructions_EN.pdf",
            "es": "defaultReusablePuzzles/Chessboard/Chessboard_Instructions_ES.pdf"
        }
    },
    {
        "name": "HiddenPath",
        "zip": "defaultReusablePuzzles/HiddenPath/HiddenPath_Puzzle.zip",
        "form": "hiddenPath.ejs",
        "thumbnail": "defaultReusablePuzzles/HiddenPath/HiddenPath_Thumbnail.png",
        "instructions": {
            "en": "defaultReusablePuzzles/HiddenPath/HiddenPath_Instructions_EN.pdf",
            "es": "defaultReusablePuzzles/HiddenPath/HiddenPath_Instructions_ES.pdf"
        }
    },
    {
        "name": "BasicTextBox",
        "zip": "defaultReusablePuzzles/BasicTextBox/BasicTextBox_Puzzle.zip",
        "form": "basicTextBox.ejs",
        "thumbnail": "defaultReusablePuzzles/BasicTextBox/BasicTextBox_Thumbnail.png",
        "instructions": {
            "en": "defaultReusablePuzzles/BasicTextBox/BasicTextBox_Instructions_EN.pdf",
            "es": "defaultReusablePuzzles/BasicTextBox/BasicTextBox_Instructions_ES.pdf"
        }
    },
    {
        "name": "ItemSelection",
        "zip": "defaultReusablePuzzles/ItemSelection/ItemSelection_Puzzle.zip",
        "form": "itemSelection.ejs",
        "thumbnail": "defaultReusablePuzzles/ItemSelection/ItemSelection_Thumbnail_EN.png",
        "instructions": {
            "en": "defaultReusablePuzzles/ItemSelection/ItemSelection_Instructions_EN.pdf",
            "es": "defaultReusablePuzzles/ItemSelection/ItemSelection_Instructions_ES.pdf"
        }
    },
    {
        "name": "SQL Editor",
        "zip": "defaultReusablePuzzles/SQLPuzzle/SQL_Puzzle.zip",
        "form": "sqlPuzzle.ejs",
        "thumbnail": "defaultReusablePuzzles/SQLPuzzle/SQL_Puzzle_thumnail.png",
        "instructions": {
            "en": "defaultReusablePuzzles/SQLPuzzle/SQL_Puzzle_Instructions_EN.pdf",
            "es": "defaultReusablePuzzles/SQLPuzzle/SQL_Puzzle_Instructions_ES.pdf"
        }
    }

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

async function addReusablePuzzles () {
    for (const puz of reusablePuzzlesList) {
        await reusablePuzzles(puz.name, puz.form, puz.zip, puz.thumbnail, puz.instructions);
    }
    console.log("✅ Task succesfully completed");
}

addReusablePuzzles().catch(console.error);
