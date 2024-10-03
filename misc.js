"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALPHABET = void 0;
exports.measureTime = measureTime;
exports.reverseMapLetters = reverseMapLetters;
exports.ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const letterMap = new Map();
for (let i = 0; i < exports.ALPHABET.length; i++) {
    letterMap.set(i + 1, exports.ALPHABET[i]);
}
/**
 *
 * @param callback encrypt/decrypt function that returns the cipher/decrypted text
 * @returns [cipher/decoded text, cpu time in ns]
 */
function measureTime(callback) {
    const startTime = process.hrtime();
    const output = callback();
    const endTime = process.hrtime();
    const ciphergram = output;
    const cpuTime = endTime[1] - startTime[1];
    return [ciphergram, cpuTime];
}
function reverseMapLetters(cipher) {
    return cipher.map(i => letterMap.get(i));
}
