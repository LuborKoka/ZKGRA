"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shiftRows = shiftRows;
exports.entriesToDecimal = entriesToDecimal;
exports.default = testLab7;
const constants_1 = require("../constants");
function textToHex(text) {
    const result = [];
    for (let i = 0; i < text.length; i++) {
        result.push(text.charCodeAt(i).toString(16));
    }
    return result;
}
function shiftRows(table) {
    const result = [table.at(0)];
    for (let i = 1; i < table.length; i++) {
        const row = [...table.at(i).slice(i), ...table.at(i).slice(0, i)];
        result.push(row);
    }
    return result;
}
/**
 * performs substitution based on the rijndael table
 */
function entriesToDecimal(entries, table) {
    return entries.map(entry => {
        const x = Math.floor(entry / 16);
        const y = entry % 16;
        return table.at(x).at(y);
    });
}
function testLab7() {
    // Task 1
    const fnameHexString = textToHex(constants_1.FIRST_NAME);
    const lnameHexString = textToHex(constants_1.LAST_NAME);
    console.log(fnameHexString);
    console.log(lnameHexString);
    console.log(entriesToDecimal(fnameHexString.map(hex => Number(`0x${hex}`)), constants_1.FORWARD_SBOX));
    console.log(entriesToDecimal(lnameHexString.map(hex => Number(`0x${hex}`)), constants_1.FORWARD_SBOX));
    // Task 2a
    const forwardEntries = [0x01, 0xAC, 0x03, 0x04, 0x64, 0x06, 0x0D, 0x10];
    console.log(entriesToDecimal(forwardEntries, constants_1.FORWARD_SBOX));
    // Task 2b
    const inverseEntries = [0xF1, 0xF3, 0xF4, 0xF6, 0xF8, 0xFF, 0x10];
    console.log(entriesToDecimal(inverseEntries, constants_1.INVERSE_SBOX));
    // Task 3
    console.log(shiftRows(constants_1.MODEL_DATA));
    // Task 4
    const inverseData = constants_1.MODEL_DATA.map(row => {
        return entriesToDecimal(row, constants_1.INVERSE_SBOX);
    });
    console.log(shiftRows(inverseData));
}
testLab7();
