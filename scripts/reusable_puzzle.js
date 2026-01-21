// Scripts/admin.js
require("dotenv").config(); // Load environment variables from .env
const fs = require("fs");
const path = require("path");
const StreamZip = require("node-stream-zip");

const sequelize = require("../models"); // Adjust as needed
const {models} = sequelize;

exports.addReusablePuzzle = async function (name, form, zipPath, thumbnailPath, instructions = {}, order) {
    const t = await sequelize.transaction();

    try {
        let thumbnailName = "";
        let thumbnailExtension;

        if (!fs.existsSync(zipPath)) {
            throw new Error(`ZIP file not found at: ${zipPath}`);
        }

        if (thumbnailPath && fs.existsSync(thumbnailPath)) {
            thumbnailExtension = path.extname(thumbnailPath).replace(".", "");
            thumbnailName = `thumbnail.${thumbnailExtension}`;
        }

        let hasForm = false;
        const zip = new StreamZip.async({ "file": zipPath });
        const entries = await zip.entries();

        for (const entry of Object.values(entries)) {
            if (entry.name === "form.ejs") {
                hasForm = true;
            }
        }

        if (await models.reusablePuzzle.findOne({ "where": { name } }) !== null) {
            console.warn(`⚠️ Reusable puzzle with name "${name}" already exists. It will be overwritten.`);
        }

        const [reusablePuzzle] = await models.reusablePuzzle.upsert({ name }, { "transaction": t });
        const reusablePuzzleDir = path.join(__dirname, `../reusablePuzzles/installed/${reusablePuzzle.name}`);
        const reusablePuzzleInstructionsDir = path.join(reusablePuzzleDir, `instructions`);

        if (!fs.existsSync(reusablePuzzleDir)) {
            fs.mkdirSync(reusablePuzzleDir, { "recursive": true });
        }

        if (!fs.existsSync(reusablePuzzleInstructionsDir)) {
            fs.mkdirSync(reusablePuzzleInstructionsDir, { "recursive": true });
        }

        if (thumbnailPath && fs.existsSync(thumbnailPath)) {
            fs.copyFileSync(thumbnailPath, path.join(reusablePuzzleDir, thumbnailName));
        }

        await zip.extract(null, reusablePuzzleDir);
        await zip.close();

        let instructionsText = "";
        if (Object.keys(instructions).length > 0) {
            for (const [lang, instruction] of Object.entries(instructions)) {
                fs.copyFileSync(instruction, path.join(reusablePuzzleInstructionsDir, `${lang}.pdf`));
                instructionsText += `${lang},`;
            }
            reusablePuzzle.instructions = instructionsText;
        }

        if((typeof order === "number")&&(order > 0)){
            reusablePuzzle.order = order;
        }

        const config = {
            "url": hasForm
                ? `/reusablePuzzles/installed/${reusablePuzzle.id}/form.ejs`
                : `/reusablePuzzles/forms/${form || "default"}`,
            "thumbnail": thumbnailName
        };

        reusablePuzzle.config = JSON.stringify(config);
        await reusablePuzzle.save({ "transaction": t });
        await t.commit();

        console.log("✅ Reusable puzzle created successfully.");
    } catch (e) {
        await t.rollback();
        console.error("❌ Failed to create reusable puzzle:", e.message);
        if (require.main === module) {
            process.exit(1);
        }
    }
};


if (require.main === module) {
    const args = process.argv.slice(2);

    let name = null;
    let form = null;
    let zipPath = null;
    let thumbnailPath = null;
    const instructions = {};

    // Simple argument parser
    for (let i = 0; i < args.length; i++) {
        if (args[i] === "--name") {
            name = args[i + 1];
            i++;
        } else if (args[i] === "--form") {
            form = args[i + 1];
            i++;
        } else if (args[i] === "--path") {
            zipPath = args[i + 1];
            i++;
        } else if (args[i] === "--thumbnailPath") {
            thumbnailPath = args[i + 1];
            i++;
        } else if (args[i].startsWith("--instructions:")) {
            const [, lang] = args[i].split(":");

            if (lang && args[i + 1]) {
                instructions[lang] = args[i + 1];
                i++;
            }
        }
    }

    if (!name || !zipPath) {
        console.error(`❌ Usage: npm run create-reusable-puzzle -- 
            --name \"Puzzle name\" 
            --form path/file.ejs
            --path path/zipfile.zip
            --thumbnailPath path/thumbnail.png
            --instructions:en \"Instructions for en\"
            --instructions:es \"Instructions for es\"`);
        process.exit(1);
    }
    exports.addReusablePuzzle(name, form, zipPath, thumbnailPath, instructions);
}


