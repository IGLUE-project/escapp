/* eslint-disable no-console */
require("dotenv").config();
const sequelize = require("../models");
const {models} = sequelize;

// One-shot repair for reusablePuzzleInstance configs whose embedded
// "puzzle":"<id>" reference does not match the RPI's actual escapeRoom.
// Rewrites that field to the puzzle id from the reusablePuzzleInstancePuzzle
// join table (which has been correct all along).
//
// Default: dry-run. Pass --apply to persist the fixes.
//
//   node scripts/repair_rpi_configs.js            # report only
//   node scripts/repair_rpi_configs.js --apply    # also write
//   ER=118 node scripts/repair_rpi_configs.js     # restrict to one ER
async function main () {
    const apply = process.argv.includes("--apply");
    const onlyEr = process.env.ER ? Number(process.env.ER) : null;

    const where = {};

    if (onlyEr) {
        where.escapeRoomId = onlyEr;
    }

    const rpis = await models.reusablePuzzleInstance.findAll({
        where,
        "include": [{"model": models.puzzle}]
    });

    let scanned = 0;
    let mismatch = 0;
    let repaired = 0;
    let skippedNoConfig = 0;
    let skippedNoJoin = 0;
    let skippedAlreadyValid = 0;

    for (const rpi of rpis) {
        scanned++;
        if (typeof rpi.config !== "string" || rpi.config.length === 0) {
            skippedNoConfig++;
            continue;
        }
        const m = rpi.config.match(/"puzzle":"(\d+)"/);

        if (!m) {
            skippedNoConfig++;
            continue;
        }
        const cfgPuzzleId = Number(m[1]);

        // Is the config's puzzle ID a real puzzle in THIS RPI's escapeRoom?
        const cfgPuzzle = await models.puzzle.findOne({
            "where": {"id": cfgPuzzleId, "escapeRoomId": rpi.escapeRoomId}
        });

        if (cfgPuzzle) {
            skippedAlreadyValid++;
            continue;
        }

        mismatch++;

        // The join table is the source of truth. Pick the first puzzle that
        // actually belongs to this RPI's escape room (defensive: ignore any
        // join rows that point outside this ER).
        const candidate = (rpi.puzzles || []).find((p) => p.escapeRoomId === rpi.escapeRoomId);

        if (!candidate) {
            skippedNoJoin++;
            console.log(`  · rpi ${rpi.id} (er ${rpi.escapeRoomId}) has stale config puzzle ${cfgPuzzleId}, but no join row to repair from — skipping`);
            continue;
        }

        const newConfig = rpi.config.replace(/"puzzle":"\d+"/, `"puzzle":"${candidate.id}"`);

        console.log(`  ${apply ? "▶" : "·"} rpi ${rpi.id} (er ${rpi.escapeRoomId}): config "puzzle":"${cfgPuzzleId}" → "${candidate.id}"`);
        if (apply) {
            rpi.config = newConfig;
            await rpi.save();
        }
        repaired++;
    }

    console.log(`\nScanned ${scanned} reusable puzzle instances`);
    console.log(`  already valid:           ${skippedAlreadyValid}`);
    console.log(`  no config / no field:    ${skippedNoConfig}`);
    console.log(`  stale config:            ${mismatch}`);
    console.log(`    → repairable:          ${repaired}`);
    console.log(`    → skipped (no join):   ${skippedNoJoin}`);
    console.log(apply
        ? "\nChanges committed."
        : "\nDry-run only. Re-run with --apply to write changes.");
}

main()
    .then(() => process.exit(0))
    .catch((e) => {
        console.error("Error:", e);
        process.exit(1);
    });
