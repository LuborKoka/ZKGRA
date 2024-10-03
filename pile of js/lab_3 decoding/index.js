"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeStream = decodeStream;
exports.decodeBlock = decodeBlock;
exports.decodeCaesar = decodeCaesar;
const misc_1 = require("../misc");
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
/**
 * This function decodes a string encrypted according to task 1b
 *
 * @param cipher The string to decode
 * @param separateAt The letter at which the alphabet is separated or the index of that letter
 */
function decodeBlock(cipher, separateAt) {
    if (typeof separateAt === 'string') {
        separateAt = separateAt.toLowerCase().charCodeAt(0) - 97;
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
 * @param {string | number} k A string of which the first letter is the shift, or a number (which is the  shift)
 */
function decodeCaesar(cipher, k) {
    if (typeof k == 'string') {
        k = k.toLowerCase().charCodeAt(0) - 96;
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
