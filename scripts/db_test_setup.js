#!/usr/bin/env node
const {execSync} = require("child_process");

const DATABASE_URL = process.env.DATABASE_URL || "postgres://loguser:password@localhost/er_jest";

console.log("Setting up test database...");

// Drop the database if it exists (ignore errors if it doesn't exist)
try {
    console.log("Dropping existing test database...");
    execSync(`npx sequelize db:drop --url ${DATABASE_URL}`, {stdio: "inherit"});
} catch (e) {
    console.log("Database did not exist or could not be dropped (this is OK for first run)");
}

// Create the database
try {
    console.log("Creating test database...");
    execSync(`npx sequelize db:create --url ${DATABASE_URL}`, {stdio: "inherit"});
} catch (e) {
    console.error("Failed to create test database:", e.message);
    process.exit(1);
}

// Run migrations
try {
    console.log("Running migrations...");
    execSync(`npx sequelize db:migrate --url ${DATABASE_URL}`, {stdio: "inherit"});
} catch (e) {
    console.error("Failed to run migrations:", e.message);
    process.exit(1);
}

// Seed the database
try {
    console.log("Seeding test database...");
    execSync(`npx sequelize db:seed:all --url ${DATABASE_URL}`, {stdio: "inherit"});
} catch (e) {
    console.error("Failed to seed database:", e.message);
    process.exit(1);
}

// Add default reusable puzzles
try {
    console.log("Adding default reusable puzzles...");
    execSync(`DATABASE_URL=${DATABASE_URL} npm run default_reusable_puzzles`, {stdio: "inherit"});
} catch (e) {
    console.error("Failed to add default reusable puzzles:", e.message);
    process.exit(1);
}

console.log("Test database setup complete!");
