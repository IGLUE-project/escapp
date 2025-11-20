require("dotenv").config(); // Load environment variables from .env

const sequelize = require("../models");
const models = sequelize.models;
const args = process.argv.slice(2);
let email = null;
let password = "1234";

// Simple argument parser
for (let i = 0; i < args.length; i++) {
    if (args[i] === "--email") {
        email = args[i + 1];
        i++;
    } else if (args[i] === "--password") {
        password = args[i + 1];
        i++;
    }
}

if (!email || !password) {
    console.error("❌ Usage: node scripts/change_password.js --email user@example.com --password secret");
    process.exit(1);
}

async function changePassword() {
    try {
        const user = await models.user.findOne({"where": {"username": email}});
        if(!user){
            throw new Error("User with email " + email + " not found.");
        }
        user.password = password;
        await user.save();
        console.log("✅ The password of user with email " + email + " has been changed to " + password);
    } catch (error) {
        console.error("❌ Error:", error);
        process.exit(1);
    }
    process.exit(0);
}

changePassword();