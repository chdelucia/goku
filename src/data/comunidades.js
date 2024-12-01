const comunidades = [
    {
        "name": "AFRICA 1 A, BDN",
        "image": "img/GEMA.jpg",
        "empleado": "GEMA",
        "dias": {
            "L": "entera",
            "M": "",
            "X": "",
            "J": "vestibulo",
            "V": "vestibulo"
        },
        "entera": 60,
        "vestibulo": 30,
        "renovacionLimpieza": 6,
        "renovacionAbrillantado": 12
    },
    {
        "name": "AMERICA 92, BDN",
        "image": "img/GEMA.jpg",
        "empleado": "GEMA",
        "dias": {
            "L": "",
            "M": "entera",
            "X": "",
            "J": "",
            "V": "vestibulo"
        },
        "entera": 90,
        "vestibulo": 15,
        "renovacionLimpieza": 6,
        "renovacionAbrillantado": 12
    },
    {
        "name": "CTRA.A.VALENCIA 56, BDN",
        "image": "img/annie.jpg",
        "empleado": "ANNIE",
        "dias": {
            "L": "vestibulo",
            "M": "",
            "X": "entera",
            "J": "",
            "V": "vestibulo"
        },
        "entera": 60,
        "vestibulo": 15,
        "renovacionLimpieza": 6,
        "renovacionAbrillantado": 12
    },
    {
        "name": "DEMOCRACIA 58, BDN",
        "image": "img/GEMA.jpg",
        "empleado": "GEMA",
        "dias": {
            "L": "entera",
            "M": "vestibulo",
            "X": "",
            "J": "",
            "V": ""
        },
        "entera": 60,
        "vestibulo": 15,
        "renovacionLimpieza": 6,
        "renovacionAbrillantado": 12
    },
    {
        "name": "DON PELAYO 18, BDN",
        "image": "img/GEMA.jpg",
        "empleado": "GEMA",
        "dias": {
            "L": "vestibulo",
            "M": "",
            "X": "entera",
            "J": "",
            "V": "vestibulo"
        },
        "entera": 60,
        "vestibulo": 15,
        "renovacionLimpieza": 6,
        "renovacionAbrillantado": 12
    },
    {
        "name": "DR.BASSOLS 125, BDN",
        "image": "img/GEMA.jpg",
        "empleado": "GEMA",
        "dias": {
            "L": "vestibulo",
            "M": "entera",
            "X": "vestibulo",
            "J": "vestibulo",
            "V": "vestibulo"
        },
        "entera": 60,
        "vestibulo": 15,
        "renovacionLimpieza": 6,
        "renovacionAbrillantado": 12
    },
    {
        "name": "DR.BASSOLS 71, BDN",
        "image": "img/GEMA.jpg",
        "empleado": "GEMA",
        "dias": {
            "L": "vestibulo",
            "M": "entera",
            "X": "vestibulo",
            "J": "vestibulo",
            "V": "vestibulo"
        },
        "entera": 60,
        "vestibulo": 15,
        "renovacionLimpieza": 6,
        "renovacionAbrillantado": 12
    },
    {
        "name": "DR.BASSOLS 77, BDN",
        "image": "img/GEMA.jpg",
        "empleado": "GEMA",
        "dias": {
            "L": "vestibulo",
            "M": "",
            "X": "entera",
            "J": "",
            "V": "vestibulo"
        },
        "entera": 60,
        "vestibulo": 30,
        "renovacionLimpieza": 6,
        "renovacionAbrillantado": 12
    },
    {
        "name": "EUNASA",
        "image": "img/annie.jpg",
        "empleado": "ANNIE",
        "dias": {
            "L": "entera",
            "M": "entera",
            "X": "entera",
            "J": "entera",
            "V": "entera"
        },
        "entera": 180,
        "vestibulo": 0,
        "renovacionLimpieza": 0,
        "renovacionAbrillantado": 0
    },
    {
        "name": "FOIX 32, BDN",
        "image": "img/GEMA.jpg",
        "empleado": "GEMA",
        "dias": {
            "L": "vestibulo",
            "M": "",
            "X": "",
            "J": "entera",
            "V": ""
        },
        "entera": 60,
        "vestibulo": 15,
        "renovacionLimpieza": 6,
        "renovacionAbrillantado": 12
    },
    {
        "name": "GS AUTOBAT",
        "image": "img/annie.jpg",
        "empleado": "ANNIE",
        "dias": {
            "L": "",
            "M": "entera",
            "X": "",
            "J": "",
            "V": "entera"
        },
        "entera": 60,
        "vestibulo": 0,
        "renovacionLimpieza": 0,
        "renovacionAbrillantado": 0
    },
    {
        "name": "LONDRES 4, BDN",
        "image": "img/GEMA.jpg",
        "empleado": "GEMA",
        "dias": {
            "L": "",
            "M": "vestibulo",
            "X": "",
            "J": "",
            "V": "entera"
        },
        "entera": 60,
        "vestibulo": 15,
        "renovacionLimpieza": 6,
        "renovacionAbrillantado": 12
    },
    {
        "name": "LONDRES 6, BDN",
        "image": "img/GEMA.jpg",
        "empleado": "GEMA",
        "dias": {
            "L": "",
            "M": "entera",
            "X": "",
            "J": "vestibulo",
            "V": ""
        },
        "entera": 60,
        "vestibulo": 15,
        "renovacionLimpieza": 6,
        "renovacionAbrillantado": 12
    },
    {
        "name": "LONDRES 8, BDN",
        "image": "img/GEMA.jpg",
        "empleado": "GEMA",
        "dias": {
            "L": "entera",
            "M": "",
            "X": "",
            "J": "",
            "V": "vestibulo"
        },
        "entera": 60,
        "vestibulo": 15,
        "renovacionLimpieza": 6,
        "renovacionAbrillantado": 12
    },
    {
        "name": "MIQUEL DEL PRAT 2, BDN",
        "image": "img/GEMA.jpg",
        "empleado": "GEMA",
        "dias": {
            "L": "",
            "M": "entera",
            "X": "",
            "J": "vestibulo",
            "V": ""
        },
        "entera": 120,
        "vestibulo": 30,
        "renovacionLimpieza": 6,
        "renovacionAbrillantado": 12
    },
    {
        "name": "OLOT 8, BDN",
        "image": "img/GEMA.jpg",
        "empleado": "GEMA",
        "dias": {
            "L": "",
            "M": "vestibulo",
            "X": "",
            "J": "",
            "V": "entera"
        },
        "entera": 60,
        "vestibulo": 15,
        "renovacionLimpieza": 6,
        "renovacionAbrillantado": 12
    },
    {
        "name": "PAU CLARIS 13, BDN",
        "image": "img/GEMA.jpg",
        "empleado": "GEMA",
        "dias": {
            "L": "entera",
            "M": "",
            "X": "",
            "J": "vestibulo",
            "V": ""
        },
        "entera": 60,
        "vestibulo": 15,
        "renovacionLimpieza": 6,
        "renovacionAbrillantado": 12
    },
    {
        "name": "PAU CLARIS 5, BDN",
        "image": "img/GEMA.jpg",
        "empleado": "GEMA",
        "dias": {
            "L": "vestibulo",
            "M": "",
            "X": "entera",
            "J": "",
            "V": "vestibulo"
        },
        "entera": 60,
        "vestibulo": 15,
        "renovacionLimpieza": 6,
        "renovacionAbrillantado": 12
    },
    {
        "name": "PIO XII 1-7, BDN",
        "image": "img/annie.jpg",
        "empleado": "ANNIE",
        "dias": {
            "L": "vestibulo",
            "M": "vestibulo",
            "X": "vestibulo",
            "J": "entera",
            "V": "vestibulo"
        },
        "entera": 150,
        "vestibulo": 30,
        "renovacionLimpieza": 6,
        "renovacionAbrillantado": 12
    },
    {
        "name": "QUEVEDO 68, BDN",
        "image": "img/GEMA.jpg",
        "empleado": "GEMA",
        "dias": {
            "L": "",
            "M": "",
            "X": "",
            "J": "entera",
            "V": ""
        },
        "entera": 60,
        "vestibulo": 0,
        "renovacionLimpieza": 6,
        "renovacionAbrillantado": 12
    },
    {
        "name": "RDA.S.ANTONI 104, BDN",
        "image": "img/GEMA.jpg",
        "empleado": "GEMA",
        "dias": {
            "L": "vestibulo",
            "M": "",
            "X": "entera",
            "J": "",
            "V": "vestibulo"
        },
        "entera": 60,
        "vestibulo": 15,
        "renovacionLimpieza": 6,
        "renovacionAbrillantado": 12
    },
    {
        "name": "RDA.S.ANTONI 108, BDN",
        "image": "img/GEMA.jpg",
        "empleado": "GEMA",
        "dias": {
            "L": "vestibulo",
            "M": "",
            "X": "entera",
            "J": "",
            "V": "vestibulo"
        },
        "entera": 60,
        "vestibulo": 15,
        "renovacionLimpieza": 6,
        "renovacionAbrillantado": 12
    },
    {
        "name": "RDA.S.ANTONI 113, BDN",
        "image": "img/GEMA.jpg",
        "empleado": "GEMA",
        "dias": {
            "L": "vestibulo",
            "M": "vestibulo",
            "X": "vestibulo",
            "J": "entera",
            "V": "vestibulo"
        },
        "entera": 60,
        "vestibulo": 15,
        "renovacionLimpieza": 6,
        "renovacionAbrillantado": 12
    },
    {
        "name": "RDA.S.ANTONI 38, BDN",
        "image": "img/GEMA.jpg",
        "empleado": "GEMA",
        "dias": {
            "L": "vestibulo",
            "M": "",
            "X": "vestibulo",
            "J": "",
            "V": "entera"
        },
        "entera": 60,
        "vestibulo": 15,
        "renovacionLimpieza": 6,
        "renovacionAbrillantado": 12
    },
    {
        "name": "RODRIGO CARO 95, BDN",
        "image": "img/annie.jpg",
        "empleado": "ANNIE",
        "dias": {
            "L": "",
            "M": "entera",
            "X": "",
            "J": "",
            "V": "vestibulo"
        },
        "entera": 60,
        "vestibulo": 15,
        "renovacionLimpieza": 6,
        "renovacionAbrillantado": 12
    },
    {
        "name": "ROSELLON 1, BDN",
        "image": "img/annie.jpg",
        "empleado": "ANNIE",
        "dias": {
            "L": "",
            "M": "entera",
            "X": "vestibulo",
            "J": "",
            "V": "vestibulo"
        },
        "entera": 60,
        "vestibulo": 15,
        "renovacionLimpieza": 6,
        "renovacionAbrillantado": 12
    },
    {
        "name": "ROSELLON 3, BDN",
        "image": "img/annie.jpg",
        "empleado": "ANNIE",
        "dias": {
            "L": "vestibulo",
            "M": "",
            "X": "entera",
            "J": "",
            "V": "vestibulo"
        },
        "entera": 60,
        "vestibulo": 15,
        "renovacionLimpieza": 6,
        "renovacionAbrillantado": 12
    },
    {
        "name": "ROSELLON 4, BDN",
        "image": "img/annie.jpg",
        "empleado": "ANNIE",
        "dias": {
            "L": "",
            "M": "",
            "X": "entera",
            "J": "",
            "V": ""
        },
        "entera": 60,
        "vestibulo": 0,
        "renovacionLimpieza": 6,
        "renovacionAbrillantado": 12
    },
    {
        "name": "ROSELLON 5, BDN",
        "image": "img/annie.jpg",
        "empleado": "ANNIE",
        "dias": {
            "L": "entera",
            "M": "",
            "X": "vestibulo",
            "J": "",
            "V": "vestibulo"
        },
        "entera": 60,
        "vestibulo": 15,
        "renovacionLimpieza": 6,
        "renovacionAbrillantado": 12
    },
    {
        "name": "ROSELLON 6, BDN",
        "image": "img/annie.jpg",
        "empleado": "ANNIE",
        "dias": {
            "L": "entera",
            "M": "",
            "X": "vestibulo",
            "J": "",
            "V": "vestibulo"
        },
        "entera": 60,
        "vestibulo": 15,
        "renovacionLimpieza": 6,
        "renovacionAbrillantado": 12
    },
    {
        "name": "ROSELLON 7, BDN",
        "image": "img/annie.jpg",
        "empleado": "ANNIE",
        "dias": {
            "L": "vestibulo",
            "M": "",
            "X": "vestibulo",
            "J": "",
            "V": "entera"
        },
        "entera": 60,
        "vestibulo": 15,
        "renovacionLimpieza": 6,
        "renovacionAbrillantado": 12
    },
    {
        "name": "ROSELLON 8, BDN",
        "image": "img/annie.jpg",
        "empleado": "ANNIE",
        "dias": {
            "L": "",
            "M": "vestibulo",
            "X": "",
            "J": "entera",
            "V": "vestibulo"
        },
        "entera": 60,
        "vestibulo": 15,
        "renovacionLimpieza": 6,
        "renovacionAbrillantado": 12
    },
    {
        "name": "ST.BARTOLOME 18, BDN",
        "image": "img/GEMA.jpg",
        "empleado": "GEMA",
        "dias": {
            "L": "vestibulo",
            "M": "",
            "X": "vestibulo",
            "J": "",
            "V": "entera"
        },
        "entera": 60,
        "vestibulo": 15,
        "renovacionLimpieza": 6,
        "renovacionAbrillantado": 12
    },
    {
        "name": "V.SALUT BLOQUE 2, BDN",
        "image": "img/GEMA.jpg",
        "empleado": "GEMA",
        "dias": {
            "L": "",
            "M": "entera",
            "X": "",
            "J": "vestibulo",
            "V": ""
        },
        "entera": 60,
        "vestibulo": 15,
        "renovacionLimpieza": 6,
        "renovacionAbrillantado": 12
    },
    {
        "name": "Vinos Christian",
        "image": "img/ch.jpg",
        "empleado": "Christian",
        "dias": {
            "X": "entera",
            "M": "entera",
            "J": "vestibulo"
        },
        "entera": 60,
        "vestibulo": 15,
        "renovacionLimpieza": 6,
        "renovacionAbrillantado": 6
    }
]

export default comunidades;

