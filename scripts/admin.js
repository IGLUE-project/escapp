// Scripts/admin.js
require("dotenv").config(); // Load environment variables from .env

const sequelize = require("../models");
const args = process.argv.slice(2);
let name = null;
let surname = null;
let email = null;
let password = null;

// Simple argument parser
for (let i = 0; i < args.length; i++) {
    if (args[i] === "--name") {
        name = args[i + 1];
        i++;
    } else if (args[i] === "--surname") {
        surname = args[i + 1];
        i++;
    } else if (args[i] === "--email") {
        email = args[i + 1];
        i++;
    } else if (args[i] === "--password") {
        password = args[i + 1];
        i++;
    }
}

if (!name || !surname || !email || !password) {
    console.error("❌ Usage: npm run create-admin -- --name \"First\" --surname \"Last\" --email user@example.com --password secret");
    process.exit(1);
}

const fullName = `${name} ${surname}`;

async function createAdmin () {
    try {
        const [admin, created] = await sequelize.models.user.findOrCreate({
            "where": { "username": email },
            "defaults": {
                name,
                surname,
                "alias": `admin_${Math.ceil(1000 * Math.random())}`,
                password,
                "isAdmin": true,
                "isStudent": false,
                "username": email,
                "lastAcceptedTermsDate": new Date()
            }
        });

        if (created) {
            console.log(`✅ Admin user created: ${fullName} (${email})`);
        } else {
            console.log(`ℹ️ Admin user with email ${email} already exists`);
        }
    } catch (error) {
        console.error("❌ Error creating admin user:", error);
        process.exit(1);
    }

    process.exit(0);
}

createAdmin();
