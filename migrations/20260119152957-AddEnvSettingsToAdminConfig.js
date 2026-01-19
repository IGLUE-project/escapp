"use strict";

require("dotenv").config();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        // Add new columns
        await queryInterface.addColumn("adminConfigs", "whitelistDomains", {
            "type": Sequelize.TEXT,
            "allowNull": true
        });
        await queryInterface.addColumn("adminConfigs", "teacherDomains", {
            "type": Sequelize.TEXT,
            "allowNull": true
        });
        await queryInterface.addColumn("adminConfigs", "disableChoosingRole", {
            "type": Sequelize.BOOLEAN,
            "allowNull": true
        });
        await queryInterface.addColumn("adminConfigs", "enableTeacherPersonalInfo", {
            "type": Sequelize.BOOLEAN,
            "allowNull": true
        });
        await queryInterface.addColumn("adminConfigs", "emailValidationStudent", {
            "type": Sequelize.BOOLEAN,
            "allowNull": true
        });
        await queryInterface.addColumn("adminConfigs", "emailValidationTeacher", {
            "type": Sequelize.BOOLEAN,
            "allowNull": true
        });

        // Populate with values from .env
        const whitelistDomains = process.env.WHITELIST_DOMAINS || null;
        const teacherDomains = process.env.TEACHER_DOMAINS || null;
        const disableChoosingRole = process.env.DISABLE_CHOOSING_ROLE === "true" ? true : (process.env.DISABLE_CHOOSING_ROLE === "false" ? false : null);
        const enableTeacherPersonalInfo = process.env.ENABLE_TEACHER_PERSONAL_INFO === "true" ? true : (process.env.ENABLE_TEACHER_PERSONAL_INFO === "false" ? false : null);
        const emailValidationStudent = process.env.EMAIL_VALIDATION_STUDENT === "true" ? true : (process.env.EMAIL_VALIDATION_STUDENT === "false" ? false : null);
        const emailValidationTeacher = process.env.EMAIL_VALIDATION_TEACHER === "true" ? true : (process.env.EMAIL_VALIDATION_TEACHER === "false" ? false : null);

        // Update existing record (id=1) with .env values
        await queryInterface.sequelize.query(
            `UPDATE "adminConfigs" SET
                "whitelistDomains" = :whitelistDomains,
                "teacherDomains" = :teacherDomains,
                "disableChoosingRole" = :disableChoosingRole,
                "enableTeacherPersonalInfo" = :enableTeacherPersonalInfo,
                "emailValidationStudent" = :emailValidationStudent,
                "emailValidationTeacher" = :emailValidationTeacher
            WHERE id = 1`,
            {
                "replacements": {
                    whitelistDomains,
                    teacherDomains,
                    disableChoosingRole,
                    enableTeacherPersonalInfo,
                    emailValidationStudent,
                    emailValidationTeacher
                }
            }
        );
    },
    async down (queryInterface) {
        await queryInterface.removeColumn("adminConfigs", "whitelistDomains");
        await queryInterface.removeColumn("adminConfigs", "teacherDomains");
        await queryInterface.removeColumn("adminConfigs", "disableChoosingRole");
        await queryInterface.removeColumn("adminConfigs", "enableTeacherPersonalInfo");
        await queryInterface.removeColumn("adminConfigs", "emailValidationStudent");
        await queryInterface.removeColumn("adminConfigs", "emailValidationTeacher");
    }
};
