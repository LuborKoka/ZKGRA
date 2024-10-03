"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const misc_1 = require("../misc");
const lab_1_reverse_coding_1 = require("../lab_1 reverse coding");
/**
 * This function decodes a string encrypted according to task 1a
 *
 * @param cipher The string to decode
 */
function decodeStream(cipher) {
    const result = [];
    for (const letter of cipher.toLowerCase()) {
        const code = Math.abs(letter.charCodeAt(0) - 97 - 26);
        result.push(code);
    }
    return (0, misc_1.reverseMapLetters)(result).join('');
}
// a .b c d e f g h i j k  l  m .n o . p . q r . s t . u v w . x  y . z
// 10 9 8 7 6 5 4 3 2 1 26 25 24 23 22 21 20 19 18 17 16 15 14 13 12 11
function decodeBlock(cipher, separateAt) {
    if (typeof separateAt === 'string') {
        separateAt = separateAt.charCodeAt(0) - 97;
    }
    const result = [];
    for (const letter of cipher) {
        let code = letter.charCodeAt(0) - 96;
        if (code > separateAt) {
            code -= 27;
        }
        code = (code - separateAt) * -1;
        if (code < separateAt) {
            code += 1;
        }
        result.push(code);
    }
    return (0, misc_1.reverseMapLetters)(result).join('');
}
/**
 * This function decodes caesar cipher
 *
 * @param {string} cipher The string to decode
 * @param {string | number} k A string of which the first letter is the shift or a number (which is the  shift)
 */
function decodeCaesar(cipher, k) {
    if (typeof k == 'string') {
        k = k.charCodeAt(0) - 96;
    }
    const result = [];
    for (const letter of cipher.toLowerCase()) {
        let code = letter.charCodeAt(0) - 96 - k;
        if (code <= 0) {
            code += 26;
        }
        result.push(code);
    }
    return (0, misc_1.reverseMapLetters)(result).join('');
}
const cipher = (0, lab_1_reverse_coding_1.encodeBlock)('LUBOR', 10);
console.log(cipher);
const name = decodeBlock(cipher, 10);
console.log(name);
