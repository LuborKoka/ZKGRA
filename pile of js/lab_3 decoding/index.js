"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeStream = decodeStream;
exports.decodeBlock = decodeBlock;
exports.decodeCaesar = decodeCaesar;
exports.default = testLab3;
const constants_1 = require("../constants");
const lab_1_reverse_coding_1 = require("../lab_1 reverse coding");
const lab_2_caesar_cipher_1 = require("../lab_2 caesar cipher");
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
function testLab3() {
    function RNG(min, max) {
        return min + Math.random() * (max - min);
    }
    function encryptByRandomAlg(message) {
        //so if i get it right, i have to randomly pick an algorithm to encode the message, then i have to try all decoding algs
        //to decrypt it and one of them should succeed
        const random = RNG(0, 3);
        if (random > 2) {
            console.log('Used algorithm: lab 2');
            return (0, lab_2_caesar_cipher_1.encodeCaesar)(message, constants_1.LAST_NAME);
        }
        if (random > 1) {
            console.log('Used algorithm: lab 1.b');
            return (0, lab_1_reverse_coding_1.encodeBlock)(message, constants_1.LAST_NAME);
        }
        console.log('Used algorithm: lab 1.a');
        return (0, lab_1_reverse_coding_1.encodeStream)(message);
    }
    function decryptMessage(message) {
        const [outputStream, timeStream] = (0, misc_1.measureTime)(() => decodeStream(message));
        const [outputBlock, timeBlock] = (0, misc_1.measureTime)(() => decodeBlock(message, constants_1.LAST_NAME));
        const [outputCaesar, timeCaesar] = (0, misc_1.measureTime)(() => decodeCaesar(message, constants_1.LAST_NAME));
        console.log(`Results after decryption:\nCaesar: ${outputCaesar}\nBlock: ${outputBlock}\nStream: ${outputStream}\nExecution time for Caesar: ${timeCaesar}\nBlock: ${timeBlock}\nStream: ${timeStream}`);
    }
    for (let i = 0; i < 10; i++) {
        const cipher = encryptByRandomAlg(constants_1.LAST_NAME);
        decryptMessage(cipher);
    }
}
