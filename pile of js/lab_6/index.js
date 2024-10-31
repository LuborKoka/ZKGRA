"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.des = des;
const constants_1 = require("../constants");
const lab_4_polybius_square_1 = require("../lab_4 polybius square");
function initialPermutation(text) {
    return constants_1.IP_TABLE.map(i => text.at(i)).join('');
}
function finalPermutation(text) {
    return constants_1.FP_TABLE.map(i => text.at(i)).join('');
}
function shiftLeft(key, shift) {
    return key.slice(shift) + key.slice(0, shift);
}
function des(plainText, key) {
    const initialTextPermutation = initialPermutation(plainText);
    let L = initialTextPermutation.slice(0, initialTextPermutation.length / 2);
    let R = initialTextPermutation.slice(initialTextPermutation.length / 2);
    const subKey1 = shiftLeft(key, 1);
    const subKey2 = shiftLeft(key, 2);
    let newL = R;
    let newR = (0, lab_4_polybius_square_1.XOR)(L, subKey1.slice(0, L.length));
    L = newL;
    R = newR;
    newL = R;
    newR = (0, lab_4_polybius_square_1.XOR)(L, subKey2.slice(0, L.length));
    L = newL;
    R = newR;
    return R + L;
}
