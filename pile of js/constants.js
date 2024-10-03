"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LETTER_TO_NUMBER_MAP = exports.NUMBER_TO_LETTER_MAP = exports.LAST_NAME = exports.FIRST_NAME = exports.ALPHABET = void 0;
exports.ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
exports.FIRST_NAME = 'LUBOR';
exports.LAST_NAME = 'KOKA';
exports.NUMBER_TO_LETTER_MAP = new Map();
exports.LETTER_TO_NUMBER_MAP = new Map();
for (let i = 0; i < exports.ALPHABET.length; i++) {
    exports.NUMBER_TO_LETTER_MAP.set(i + 1, exports.ALPHABET[i]);
    exports.LETTER_TO_NUMBER_MAP.set(exports.ALPHABET[i], i + 1);
}
