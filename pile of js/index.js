"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lab_4_polybius_square_1 = require("./lab_4 polybius square");
//console.log(encodePolybiusSquare('ENCRYPT ME 2 DAY'))
//console.log(encodePolybiusSquare(LAST_NAME))
let a = '1011', b = '0110', c = '0100';
console.log((0, lab_4_polybius_square_1.XOR)(b, (0, lab_4_polybius_square_1.XOR)(a, (0, lab_4_polybius_square_1.XOR)(c, (0, lab_4_polybius_square_1.XOR)(a, b)))));
a = '0101', b = '1110', c = '1101';
console.log((0, lab_4_polybius_square_1.XOR)(b, (0, lab_4_polybius_square_1.XOR)(a, (0, lab_4_polybius_square_1.XOR)(c, (0, lab_4_polybius_square_1.XOR)(a, b)))));
a = '0001', b = '0101', c = '1010';
console.log((0, lab_4_polybius_square_1.XOR)(b, (0, lab_4_polybius_square_1.XOR)(a, (0, lab_4_polybius_square_1.XOR)(c, (0, lab_4_polybius_square_1.XOR)(a, b)))));
