require("dotenv").config(); // Load environment variables from .env
const sequelize = require("../models");
const models = sequelize.models;

async function listAdmins() {
    try {
        const users = await models.user.findAll({
            where: { isAdmin: true }
        });
        if (users.length === 0) {
            console.log("No administrators found.");
        } else {
            console.log("Admins:");
            users.forEach(user => {
                console.log(`- ${user.username}`);
            });
        }
    } catch (error) {
        console.error("❌ Error:", error);
        console.error("❌ Usage: node scripts/list_admins.js");
        process.exit(1);
    }
    process.exit(0);
}

listAdmins();