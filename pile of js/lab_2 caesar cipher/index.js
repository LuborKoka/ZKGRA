"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeCaesar = encodeCaesar;
const constants_1 = require("../constants");
const misc_1 = require("../misc");
function encodeCaesar(text, k) {
    if (typeof k == 'string') {
        k = constants_1.LETTER_TO_NUMBER_MAP.get(k.toLowerCase()[0]);
    }
    const cipher = [];
    for (const letter of text.toLowerCase()) {
        let index = constants_1.LETTER_TO_NUMBER_MAP.get(letter);
        if (!index) {
            console.log('invalid input');
            return '';
        }
        index += k;
        if (index > 26) {
            index -= 26;
        }
        cipher.push(index);
    }
    return (0, misc_1.reverseMapLetters)(cipher).join('');
}
