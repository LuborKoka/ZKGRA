"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeStream = encodeStream;
exports.encodeBlock = encodeBlock;
const constants_1 = require("../constants");
const misc_1 = require("../misc");
/**
 * This would be task 1.a - where letters are assigned numbers in reverse order
 *
 * @param {string} input - the message to be encrypted
 */
function encodeStream(input) {
    const directNumbering = [];
    const reverseNumbering = [];
    for (const char of input.toLowerCase()) {
        directNumbering.push(constants_1.LETTER_TO_NUMBER_MAP.get(char));
    }
    for (const code of directNumbering) {
        if (!code)
            return 'wrong input';
        reverseNumbering.push(27 - code);
    }
    return (0, misc_1.reverseMapLetters)(reverseNumbering).join('');
}
/**
 * This would be task 1.b
 *
 * @param input The information string to encode
 * @param separateAt The index of the letter in the alphabet at which it is split into 2 blocks
 */
function encodeBlock(input, separateAt) {
    if (typeof separateAt === 'string') {
        separateAt = constants_1.ALPHABET.lastIndexOf(separateAt.toLowerCase()[0]);
    }
    const directNumbering = [];
    const reverseNumbering = [];
    for (const char of input.toLowerCase()) {
        directNumbering.push(constants_1.LETTER_TO_NUMBER_MAP.get(char));
    }
    for (const code of directNumbering) {
        if (!code)
            return 'wrong input';
        reverseNumbering.push((code - separateAt - 1) * -1);
        if (reverseNumbering.at(-1) <= 0) {
            reverseNumbering[reverseNumbering.length - 1] += 26;
        }
    }
    return (0, misc_1.reverseMapLetters)(reverseNumbering).join('');
}
