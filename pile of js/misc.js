"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.measureTime = measureTime;
exports.reverseMapLetters = reverseMapLetters;
const constants_1 = require("./constants");
/**
 *
 * @param callback any function lol
 * @returns [callback return value, cpu time in ns]
 */
function measureTime(callback) {
    const startTime = process.hrtime();
    const output = callback();
    const endTime = process.hrtime();
    const cpuTime = endTime[1] - startTime[1];
    return [output, cpuTime];
}
/**
 * Maps numbers to their corresponding letters in the alphabet.
 *
 * @param {number[]} cipher - the codes of letters (enrypted or not)
 */
function reverseMapLetters(cipher) {
    return cipher.map(i => constants_1.NUMBER_TO_LETTER_MAP.get(i));
}
