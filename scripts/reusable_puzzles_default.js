const {addReusablePuzzle} = require("./reusable_puzzle.js");

const reusablePuzzlesList = [
    {
        "name": "Keypad",
        "zip": "defaultReusablePuzzles/Keypad/Keypad_Puzzle.zip",
        "form": "keypad.ejs",
        "thumbnail": "defaultReusablePuzzles/Keypad/Keypad_Thumbnail.png",
        "instructions": {
            "en": "defaultReusablePuzzles/Keypad/Keypad_Instructions_EN.pdf",
            "es": "defaultReusablePuzzles/Keypad/Keypad_Instructions_ES.pdf",
            "sr": "defaultReusablePuzzles/Keypad/Keypad_Instructions_SR.pdf"
        },
        "order": 1
    },
    {
        "name": "DecoderDisk",
        "zip": "defaultReusablePuzzles/DecoderDisk/DecoderDisk_Puzzle.zip",
        "form": "decoderDisk.ejs",
        "thumbnail": "defaultReusablePuzzles/DecoderDisk/DecoderDisk_Thumbnail.jpg",
        "instructions": {
            "en": "defaultReusablePuzzles/DecoderDisk/DecoderDisk_Instructions_EN.pdf",
            "es": "defaultReusablePuzzles/DecoderDisk/DecoderDisk_Instructions_ES.pdf",
            "sr": "defaultReusablePuzzles/DecoderDisk/DecoderDisk_Instructions_SR.pdf"
        },
        "order": 2
    },
    {
        "name": "Safebox",
        "zip": "defaultReusablePuzzles/Safebox/Safebox_Puzzle.zip",
        "form": "safebox.ejs",
        "thumbnail": "defaultReusablePuzzles/Safebox/Safebox_Thumbnail.jpg",
        "instructions": {
            "en": "defaultReusablePuzzles/Safebox/Safebox_Instructions_EN.pdf",
            "es": "defaultReusablePuzzles/Safebox/Safebox_Instructions_ES.pdf",
            "sr": "defaultReusablePuzzles/Safebox/Safebox_Instructions_SR.pdf"
        },
        "order": 3
    },
    {
        "name": "Switches",
        "zip": "defaultReusablePuzzles/Switches/Switches_Puzzle.zip",
        "form": "switches.ejs",
        "thumbnail": "defaultReusablePuzzles/Switches/Switches_Thumbnail.png",
        "instructions": {
            "en": "defaultReusablePuzzles/Switches/Switches_Instructions_EN.pdf",
            "es": "defaultReusablePuzzles/Switches/Switches_Instructions_ES.pdf",
            "sr": "defaultReusablePuzzles/Switches/Switches_Instructions_SR.pdf"
        },
        "order": 4
    },
    {
        "name": "WireConnection",
        "zip": "defaultReusablePuzzles/WireConnection/WireConnection_Puzzle.zip",
        "form": "wireConnection.ejs",
        "thumbnail": "defaultReusablePuzzles/WireConnection/WireConnection_Thumbnail.png",
        "instructions": {
            "en": "defaultReusablePuzzles/WireConnection/WireConnection_Instructions_EN.pdf",
            "es": "defaultReusablePuzzles/WireConnection/WireConnection_Instructions_ES.pdf",
            "sr": "defaultReusablePuzzles/WireConnection/WireConnection_Instructions_SR.pdf"
        },
        "order": 5
    },
    {
        "name": "SignalGenerator",
        "zip": "defaultReusablePuzzles/SignalGenerator/SignalGenerator_Puzzle.zip",
        "form": "signalGenerator.ejs",
        "thumbnail": "defaultReusablePuzzles/SignalGenerator/SignalGenerator_Thumbnail.jpg",
        "instructions": {
            "en": "defaultReusablePuzzles/SignalGenerator/SignalGenerator_Instructions_EN.pdf",
            "es": "defaultReusablePuzzles/SignalGenerator/SignalGenerator_Instructions_ES.pdf",
            "sr": "defaultReusablePuzzles/SignalGenerator/SignalGenerator_Instructions_SR.pdf"
        },
        "order": 6
    },
    {
        "name": "Chessboard",
        "zip": "defaultReusablePuzzles/Chessboard/Chessboard_Puzzle.zip",
        "form": "chessboard.ejs",
        "thumbnail": "defaultReusablePuzzles/Chessboard/Chessboard_Thumbnail.jpg",
        "instructions": {
            "en": "defaultReusablePuzzles/Chessboard/Chessboard_Instructions_EN.pdf",
            "es": "defaultReusablePuzzles/Chessboard/Chessboard_Instructions_ES.pdf",
            "sr": "defaultReusablePuzzles/Chessboard/Chessboard_Instructions_SR.pdf"
        },
        "order": 7
    },
    {
        "name": "HiddenPath",
        "zip": "defaultReusablePuzzles/HiddenPath/HiddenPath_Puzzle.zip",
        "form": "hiddenPath.ejs",
        "thumbnail": "defaultReusablePuzzles/HiddenPath/HiddenPath_Thumbnail.png",
        "instructions": {
            "en": "defaultReusablePuzzles/HiddenPath/HiddenPath_Instructions_EN.pdf",
            "es": "defaultReusablePuzzles/HiddenPath/HiddenPath_Instructions_ES.pdf",
            "sr": "defaultReusablePuzzles/HiddenPath/HiddenPath_Instructions_SR.pdf"
        },
        "order": 8
    },
    {
        "name": "BasicTextBox",
        "zip": "defaultReusablePuzzles/BasicTextBox/BasicTextBox_Puzzle.zip",
        "form": "basicTextBox.ejs",
        "thumbnail": "defaultReusablePuzzles/BasicTextBox/BasicTextBox_Thumbnail.png",
        "instructions": {
            "en": "defaultReusablePuzzles/BasicTextBox/BasicTextBox_Instructions_EN.pdf",
            "es": "defaultReusablePuzzles/BasicTextBox/BasicTextBox_Instructions_ES.pdf",
            "sr": "defaultReusablePuzzles/BasicTextBox/BasicTextBox_Instructions_SR.pdf"
        },
        "order": 9
    },
    {
        "name": "ItemSelection",
        "zip": "defaultReusablePuzzles/ItemSelection/ItemSelection_Puzzle.zip",
        "form": "itemSelection.ejs",
        "thumbnail": "defaultReusablePuzzles/ItemSelection/ItemSelection_Thumbnail_EN.png",
        "instructions": {
            "en": "defaultReusablePuzzles/ItemSelection/ItemSelection_Instructions_EN.pdf",
            "es": "defaultReusablePuzzles/ItemSelection/ItemSelection_Instructions_ES.pdf",
            "sr": "defaultReusablePuzzles/ItemSelection/ItemSelection_Instructions_SR.pdf"
        },
        "order": 10
    },
    {
        "name": "Clock",
        "zip": "defaultReusablePuzzles/Clock/Clock_Puzzle.zip",
        "form": "clock.ejs",
        "thumbnail": "defaultReusablePuzzles/Clock/Clock_Thumbnail.jpg",
        "instructions": {
            "en": "defaultReusablePuzzles/Clock/Clock_Instructions_EN.pdf",
            "es": "defaultReusablePuzzles/Clock/Clock_Instructions_ES.pdf",
            "sr": "defaultReusablePuzzles/Clock/Clock_Instructions_SR.pdf"
        },
        "order": 11
    },
    {
        "name": "Jigsaw",
        "zip": "defaultReusablePuzzles/Jigsaw/Jigsaw_Puzzle.zip",
        "form": "jigsaw.ejs",
        "thumbnail": "defaultReusablePuzzles/Jigsaw/Jigsaw_Thumbnail_EN.jpg",
        "instructions": {
            "en": "defaultReusablePuzzles/Jigsaw/Jigsaw_Instructions_EN.pdf",
            "es": "defaultReusablePuzzles/Jigsaw/Jigsaw_Instructions_ES.pdf",
            "sr": "defaultReusablePuzzles/Jigsaw/Jigsaw_Instructions_SR.pdf"
        },
        "order": 12
    },
    {
        "name": "WiredBomb",
        "zip": "defaultReusablePuzzles/WiredBomb/WiredBomb_Puzzle.zip",
        "form": "wiredBomb.ejs",
        "thumbnail": "defaultReusablePuzzles/WiredBomb/WiredBomb_Thumbnail.jpg",
        "instructions": {
            "en": "defaultReusablePuzzles/WiredBomb/WiredBomb_Instructions_EN.pdf",
            "es": "defaultReusablePuzzles/WiredBomb/WiredBomb_Instructions_ES.pdf",
            "sr": "defaultReusablePuzzles/WiredBomb/WiredBomb_Instructions_SR.pdf"
        },
        "order": 13
    },
    {
        "name": "Login",
        "zip": "defaultReusablePuzzles/Login/Login_Puzzle.zip",
        "form": "login.ejs",
        "thumbnail": "defaultReusablePuzzles/Login/Login_Thumbnail_EN.jpg",
        "instructions": {
            "en": "defaultReusablePuzzles/Login/Login_Instructions_EN.pdf",
            "es": "defaultReusablePuzzles/Login/Login_Instructions_ES.pdf",
            "sr": "defaultReusablePuzzles/Login/Login_Instructions_SR.pdf"
        },
        "order": 14
    },
    {
        "name": "Video",
        "zip": "defaultReusablePuzzles/Video/Video_Puzzle.zip",
        "form": "video.ejs",
        "thumbnail": "defaultReusablePuzzles/Video/Video_Thumbnail.jpg",
        "instructions": {
            "en": "defaultReusablePuzzles/Video/Video_Instructions_EN.pdf",
            "es": "defaultReusablePuzzles/Video/Video_Instructions_ES.pdf",
            "sr": "defaultReusablePuzzles/Video/Video_Instructions_SR.pdf"
        },
        "order": 15
    },
    {
        "name": "SQLChallenge",
        "zip": "defaultReusablePuzzles/SQLChallenge/SQLChallenge_Puzzle.zip",
        "form": "SQLChallenge.ejs",
        "thumbnail": "defaultReusablePuzzles/SQLChallenge/SQLChallenge_Thumnail.png",
        "instructions": {
            "en": "defaultReusablePuzzles/SQLChallenge/SQLChallenge_Instructions_EN.pdf",
            "es": "defaultReusablePuzzles/SQLChallenge/SQLChallenge_Instructions_ES.pdf",
            "sr": "defaultReusablePuzzles/SQLChallenge/SQLChallenge_Instructions_SR.pdf"
        },
        "order": 16
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
        await addReusablePuzzle(puz.name, puz.form, puz.zip, puz.thumbnail, puz.instructions, puz.order);
    }
    console.log("✅ Task succesfully completed");
}

addReusablePuzzles().catch(console.error);
