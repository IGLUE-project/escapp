"use strict";

const crypt = require("../helpers/crypt");

module.exports = {
    up (queryInterface) {
        return queryInterface.bulkInsert("users", [
            {
                "name": "Sonsoles",
                "surname": "López Pernas",
                "username": "admin@upm.es",
                "password": crypt.encryptPassword("1234", "aaaa"),
                "salt": "aaaa",
                "isAdmin": !process.env.TEST,
                "dni": "xxxxxxxxx",
                "eduLevel": "higher",
                "createdAt": new Date(),
                "updatedAt": new Date(),
                "lastAcceptedTermsDate": new Date()
            },
            {
                "name": "Pepe",
                "surname": "Lopez Garcia",
                "username": "pepe@alumnos.upm.es",
                "password": crypt.encryptPassword("5678", "bbbb"),
                "salt": "bbbb",
                "isStudent": true,
                "dni": "79881145Y",
                "eduLevel": "higher",
                "createdAt": new Date(),
                "updatedAt": new Date(),
                "lastAcceptedTermsDate": new Date()
            },
            {
                "name": "Alfonso",
                "surname": "Jiménez Martínez",
                "username": "al.jm@alumnos.upm.es",
                "password": crypt.encryptPassword("5678", "bbbb"),
                "salt": "bbbb",
                "isStudent": true,
                "eduLevel": "higher",
                "dni": "67172247B",
                "createdAt": new Date(),
                "updatedAt": new Date(),
                "lastAcceptedTermsDate": new Date()
            },
            {
                "name": "Alejandro",
                "surname": "Pozo Huertas",
                "username": "aph@alumnos.upm.es",
                "password": crypt.encryptPassword("5678", "bbbb"),
                "salt": "bbbb",
                "isStudent": true,
                "dni": "83477468A",
                "eduLevel": "higher",
                "createdAt": new Date(),
                "updatedAt": new Date(),
                "lastAcceptedTermsDate": new Date()
            },
            {
                "name": "Nuria",
                "surname": "Martínez Arias",
                "username": "nma@alumnos.upm.es",
                "password": crypt.encryptPassword("5678", "bbbb"),
                "salt": "bbbb",
                "isStudent": true,
                "dni": "12166084G",
                "eduLevel": "higher",
                "createdAt": new Date(),
                "updatedAt": new Date(),
                "lastAcceptedTermsDate": new Date()
            },
            {
                "name": "Clara",
                "surname": "Rodríguez Vega",
                "username": "crv@alumnos.upm.es",
                "password": crypt.encryptPassword("5678", "bbbb"),
                "salt": "bbbb",
                "isStudent": true,
                "dni": "01605680G",
                "eduLevel": "higher",
                "createdAt": new Date(),
                "updatedAt": new Date(),
                "lastAcceptedTermsDate": new Date()
            },
            {
                "name": "Ana",
                "surname": "de la Mata Martínez",
                "username": "amm@alumnos.upm.es",
                "password": crypt.encryptPassword("5678", "bbbb"),
                "salt": "bbbb",
                "isStudent": true,
                "eduLevel": "higher",
                "dni": "82311181T",
                "createdAt": new Date(),
                "updatedAt": new Date(),
                "lastAcceptedTermsDate": new Date()
            },
            {
                "name": "José",
                "surname": "González Martín",
                "username": "jgm@alumnos.upm.es",
                "password": crypt.encryptPassword("5678", "bbbb"),
                "salt": "bbbb",
                "isStudent": true,
                "eduLevel": "higher",
                "dni": "03637194C",
                "createdAt": new Date(),
                "updatedAt": new Date(),
                "lastAcceptedTermsDate": new Date()
            },
            {
                "name": "Antonio",
                "surname": "Lorenzo Álvarez",
                "username": "ala@alumnos.upm.es",
                "password": crypt.encryptPassword("5678", "bbbb"),
                "salt": "bbbb",
                "isStudent": true,
                "eduLevel": "higher",
                "dni": "26077434B",
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
