"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeCaesar = encodeCaesar;
const misc_1 = require("../misc");
const NAME = 'KOKA';
const letterMap = new Map();
for (let i = 0; i < misc_1.ALPHABET.length; i++) {
    letterMap.set(misc_1.ALPHABET[i], i + 1);
}
function encodeCaesar(text, k) {
    if (typeof k == 'string') {
        k = letterMap.get(k.toLowerCase()[0]);
    }
    const cipher = [];
    for (const letter of text.toLowerCase()) {
        let index = letterMap.get(letter);
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
const [cipher, time] = (0, misc_1.measureTime)(() => encodeCaesar(NAME, NAME));
console.log(cipher, time);
