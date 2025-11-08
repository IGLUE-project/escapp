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
                "alias": "pepe",
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
                "alias": "alf2",
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
                "alias": "t-rex",
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
                "alias": "nunu",
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
                "alias": "crv",
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
                "alias": "amm",
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
                "alias": "joe1",
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
                "alias": "ala",
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
