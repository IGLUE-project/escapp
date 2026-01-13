require("dotenv").config(); // Load environment variables from .env
const sequelize = require("../models");
const {models} = sequelize;

async function removeAnonymizedUsers () {
    try {
        const users = await models.user.findAll({"where": { "anonymized": true }});

        if (users.length === 0) {
            console.log("No anonymized users found.");
        } else {
            for (const user of users) {
                console.log(`- Removing ${user.username} (Role: ${user.isStudent ? "Student" : "Teacher"})`);
                await user.destroy();
            }
        }
    } catch (error) {
        console.error("❌ Error:", error);
        console.error("❌ Usage: node scripts/remove_anonymized_users.js");
        process.exit(1);
    }
    process.exit(0);
}

removeAnonymizedUsers();
