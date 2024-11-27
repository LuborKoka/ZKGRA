"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodePolybiusSquare = encodePolybiusSquare;
exports.XOR = XOR;
exports.default = testLab4;
const constants_1 = require("../constants");
/**
 * @param {string} letter - a letter of the alphabet, a space or a number
 * @returns object with x and y coordinates of the letter in a 6x6 square, x = 0, y = 0 for spaces
 */
function getLetterCoordinates(letter) {
    if (letter === ' ') {
        return {
            x: 0,
            y: 0
        };
    }
    const index = constants_1.LETTER_TO_NUMBER_MAP.get(letter.toLowerCase()) ?? constants_1.LETTER_TO_NUMBER_MAP.get('z') + 1 + Number(letter);
    const x = index % 6 > 0 ? index % 6 : 6;
    const y = Math.ceil(index / 6);
    return { x, y };
}
/**
 * Encode message using 6x6 polybius square, where the missing spaces are filled by numbers 0-9
 */
function encodePolybiusSquare(message) {
    let ciphertext = '';
    for (const letter of message) {
        const { x, y } = getLetterCoordinates(letter);
        ciphertext = ciphertext.concat(` ${x}${y}`);
    }
    return ciphertext.trim();
}
function XOR(a, b) {
    if (a.length !== b.length) {
        return '';
    }
    let result = '';
    for (let i = 0; i < a.length; i++) {
        const x = Number(a.at(i));
        const y = Number(b.at(i));
        result = result.concat(`${x ^ y}`);
    }
    return result;
}
function testLab4() {
    // Task 1
    console.log(encodePolybiusSquare('ENCRYPT ME 2 DAY'));
    console.log(encodePolybiusSquare(constants_1.LAST_NAME));
    // Task 2
    let a = '1011', b = '0110', c = '0100';
    console.log(XOR(b, XOR(a, XOR(c, XOR(a, b)))));
    a = '0101', b = '1110', c = '1101';
    console.log(XOR(b, XOR(a, XOR(c, XOR(a, b)))));
    a = '0001', b = '0101', c = '1010';
    console.log(XOR(b, XOR(a, XOR(c, XOR(a, b)))));
    // Task 3 is in the report
}
