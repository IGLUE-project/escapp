"use strict";

const crypt = require("../helpers/crypt");
module.exports = {
    up (queryInterface) {
        return queryInterface.bulkInsert("users", [
            {
                "name": "Sonsoles",
                "surname": "López Pernas",
                "username": "admin@upm.es",
                "alias": "the_admin",
                "password": crypt.encryptPassword("1234", "aaaa"),
                "salt": "aaaa",
                "isAdmin": true,
                "dni": "xxxxxxxxx",
                "eduLevel": "higher",
                "confirmed": true,
                "createdAt": new Date(),
                "updatedAt": new Date(),
                "lastAcceptedTermsDate": new Date()
            },
            {
                "name": "Pepe",
                "surname": "Lopez Garcia",
                "username": "pepe@alumnos.upm.es",
                "alias": "pepe",
                "password": crypt.encryptPassword("5678", "bbbb"),
                "salt": "bbbb",
                "isStudent": true,
                "dni": "79881145Y",
                "eduLevel": "higher",
                "confirmed": true,
                "createdAt": new Date(),
                "updatedAt": new Date(),
                "lastAcceptedTermsDate": new Date()
            },
            {
                "name": "Alfonso",
                "surname": "Jiménez Martínez",
                "username": "al.jm@alumnos.upm.es",
                "alias": "alf2",
                "password": crypt.encryptPassword("5678", "bbbb"),
                "salt": "bbbb",
                "isStudent": true,
                "eduLevel": "higher",
                "dni": "67172247B",
                "confirmed": true,
                "createdAt": new Date(),
                "updatedAt": new Date(),
                "lastAcceptedTermsDate": new Date()
            },
            {
                "name": "Alejandro",
                "surname": "Pozo Huertas",
                "alias": "t-rex",
                "username": "aph@alumnos.upm.es",
                "password": crypt.encryptPassword("5678", "bbbb"),
                "salt": "bbbb",
                "isStudent": true,
                "dni": "83477468A",
                "eduLevel": "higher",
                "confirmed": true,
                "createdAt": new Date(),
                "updatedAt": new Date(),
                "lastAcceptedTermsDate": new Date()
            },
            {
                "name": "Nuria",
                "surname": "Martínez Arias",
                "alias": "nunu",
                "username": "nma@alumnos.upm.es",
                "password": crypt.encryptPassword("5678", "bbbb"),
                "salt": "bbbb",
                "isStudent": true,
                "dni": "12166084G",
                "eduLevel": "higher",
                "confirmed": true,
                "createdAt": new Date(),
                "updatedAt": new Date(),
                "lastAcceptedTermsDate": new Date()
            },
            {
                "name": "Clara",
                "surname": "Rodríguez Vega",
                "alias": "crv",
                "username": "crv@alumnos.upm.es",
                "password": crypt.encryptPassword("5678", "bbbb"),
                "salt": "bbbb",
                "isStudent": true,
                "dni": "01605680G",
                "eduLevel": "higher",
                "confirmed": true,
                "createdAt": new Date(),
                "updatedAt": new Date(),
                "lastAcceptedTermsDate": new Date()
            },
            {
                "name": "Ana",
                "surname": "de la Mata Martínez",
                "alias": "amm",
                "username": "amm@alumnos.upm.es",
                "password": crypt.encryptPassword("5678", "bbbb"),
                "salt": "bbbb",
                "isStudent": true,
                "eduLevel": "higher",
                "dni": "82311181T",
                "confirmed": true,
                "createdAt": new Date(),
                "updatedAt": new Date(),
                "lastAcceptedTermsDate": new Date()
            },
            {
                "name": "José",
                "surname": "González Martín",
                "alias": "joe1",
                "username": "jgm@alumnos.upm.es",
                "password": crypt.encryptPassword("5678", "bbbb"),
                "salt": "bbbb",
                "isStudent": true,
                "eduLevel": "higher",
                "dni": "03637194C",
                "confirmed": true,
                "createdAt": new Date(),
                "updatedAt": new Date(),
                "lastAcceptedTermsDate": new Date()
            },
            {
                "name": "Antonio",
                "surname": "Lorenzo Álvarez",
                "alias": "ala",
                "username": "ala@alumnos.upm.es",
                "password": crypt.encryptPassword("5678", "bbbb"),
                "salt": "bbbb",
                "isStudent": true,
                "eduLevel": "higher",
                "dni": "26077434B",
                "confirmed": true,
                "createdAt": new Date(),
                "updatedAt": new Date(),
                "lastAcceptedTermsDate": new Date()
            },
            // Test Admin - always has isAdmin true (for testing)
            {
                "name": "Test",
                "surname": "Admin",
                "username": "testadmin@test.com",
                "alias": "testadmin",
                "password": crypt.encryptPassword("testadmin", "cccc"),
                "salt": "cccc",
                "isAdmin": true,
                "dni": "00000001A",
                "eduLevel": "higher",
                "confirmed": true,
                "createdAt": new Date(),
                "updatedAt": new Date(),
                "lastAcceptedTermsDate": new Date()
            },
            // Test Teacher - has no student flag (for testing teacher-only features)
            {
                "name": "Test",
                "surname": "Teacher",
                "username": "testteacher@test.com",
                "alias": "testteacher",
                "password": crypt.encryptPassword("testteacher", "dddd"),
                "salt": "dddd",
                "isAdmin": false,
                "isStudent": false,
                "dni": "00000002B",
                "eduLevel": "higher",
                "confirmed": true,
                "createdAt": new Date(),
                "updatedAt": new Date(),
                "lastAcceptedTermsDate": new Date()
            }
        ]);
    },

    down (queryInterface) {
        return queryInterface.bulkDelete("users", null, {});
    }
};
