require("dotenv").config(); // Load environment variables from .env

const sequelize = require("../models");
const {models} = sequelize;
const args = process.argv.slice(2);
let email = null;

// Simple argument parser
for (let i = 0; i < args.length; i++) {
    if (args[i] === "--email") {
        email = args[i + 1];
        i++;
    }
}

if (!email) {
    console.error("❌ Usage: node scripts/grant_admin_role.js --email user@example.com");
    process.exit(1);
}

async function grantAdminRole(){
    try {
        const user = await models.user.findOne({"where": {"username": email}});
        if (!user) {
            throw new Error(`User with email ${email} not found.`);
        }
        if (user.isAdmin) {
            console.log(`User with email ${email} is already an admin.`);
        }
        user.isAdmin = true;
        user.isStudent = false;
        await user.save();
        console.log(`✅ User with email ${email} is now an admin.`);
    } catch (error) {
        console.error("❌ Error:", error);
        process.exit(1);
    }
    process.exit(0);
}

grantAdminRole();