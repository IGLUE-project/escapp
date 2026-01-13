require("dotenv").config(); // Load environment variables from .env
const sequelize = require("../models");
const {models} = sequelize;

async function listTeachers () {
    try {
        const users = await models.user.findAll({"where": { "isStudent": false }});

        if (users.length === 0) {
            console.log("No teachers found.");
        } else {
            console.log("Teachers:");
            users.forEach((user) => {
                console.log(`- ${user.username}`);
            });
        }
    } catch (error) {
        console.error("❌ Error:", error);
        console.error("❌ Usage: node scripts/list_teachers.js");
        process.exit(1);
    }
    process.exit(0);
}

listTeachers();
