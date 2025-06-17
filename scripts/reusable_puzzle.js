// Scripts/admin.js
require("dotenv").config(); // Load environment variables from .env
const fs = require("fs");
const path = require("path");
const StreamZip = require("node-stream-zip");

const sequelize = require("../models"); // Adjust as needed
const {models} = sequelize;

exports.reusablePuzzles = async function (name, description, form, zipPath, thumbnailPath, instructions = {}) {
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
            console.warn(`⚠️ Puzzle with name "${name}" already exists. It will be overwritten.`);
        }

        const [puzzle] = await models.reusablePuzzle.upsert({ name, description }, { "transaction": t });
        const puzzleDir = path.join(__dirname, `../reusablePuzzles/installed/${puzzle.name}`);

        if (!fs.existsSync(puzzleDir)) {
            fs.mkdirSync(puzzleDir, { "recursive": true });
        }

        if (thumbnailPath && fs.existsSync(thumbnailPath)) {
            fs.copyFileSync(thumbnailPath, path.join(puzzleDir, thumbnailName));
        }

        await zip.extract(null, puzzleDir);
        await zip.close();

        let instructionsText = "";
        console.log({instructions})
        if (Object.keys(instructions).length > 0) {
            for (const [lang, instruction] of Object.entries(instructions)) {
                fs.copyFileSync(instruction, path.join(puzzleDir, `${lang}.pdf`));
                instructionsText += `${lang},`;

            }
            puzzle.instructions = instructionsText;;
        }
        console.log(instructionsText)
        
        const config = {
            "url": hasForm
                ? `/reusablePuzzles/installed/${puzzle.id}/form.ejs`
                : `/reusablePuzzles/forms/${form || "default"}`,
            "thumbnail": thumbnailName
        };

        puzzle.config = JSON.stringify(config);
        await puzzle.save({ "transaction": t });
        await t.commit();

        console.log("✅ Reusable puzzle created successfully.");
    } catch (e) {
        await t.rollback();
        console.error("❌ Failed to create puzzle:", e.message);
        if (require.main === module) {
            process.exit(1);
        }
    }
};


if (require.main === module) {
    const args = process.argv.slice(2);

    let name = null;
    let description = null;
    let form = null;
    let zipPath = null;
    let thumbnailPath = null;
    let instructions = {};

    // Simple argument parser
    for (let i = 0; i < args.length; i++) {
        if (args[i] === "--name") {
            name = args[i + 1];
            i++;
        } else if (args[i] === "--description") {
            description = args[i + 1];
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
            const lang = args[i].split(":")[1];
            if (lang && args[i + 1]) {
                instructions[lang] = args[i + 1];
                i++;
            }
        }
    }

    if (!name || !description || !zipPath) {
        console.error(`❌ Usage: npm run create-reusable-puzzle -- 
            --name \"Puzzle name\" 
            --description \"Puzzle description\" 
            --form path/file.ejs
            --path path/zipfile.zip
            --thumbnailPath path/thumbnail.png
            --instructions:en \"Instructions for en\"
            --instructions:es \"Instructions for es\"`);
        process.exit(1);
    }
    exports.reusablePuzzles(name, description, form, zipPath, thumbnailPath, instructions);
}


