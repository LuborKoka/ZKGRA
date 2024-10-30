"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IP_TABLE = exports.IP_TABLE_x86 = exports.LETTER_TO_NUMBER_MAP = exports.NUMBER_TO_LETTER_MAP = exports.LAST_NAME = exports.FIRST_NAME = exports.ALPHABET = void 0;
exports.ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
exports.FIRST_NAME = 'LUBOR';
exports.LAST_NAME = 'KOKA';
exports.NUMBER_TO_LETTER_MAP = new Map();
exports.LETTER_TO_NUMBER_MAP = new Map();
for (let i = 0; i < exports.ALPHABET.length; i++) {
    exports.NUMBER_TO_LETTER_MAP.set(i + 1, exports.ALPHABET[i]);
    exports.LETTER_TO_NUMBER_MAP.set(exports.ALPHABET[i], i + 1);
}
exports.IP_TABLE_x86 = [
    6, 14, 22, 30, 38, 46, 54, 62,
    4, 12, 20, 28, 36, 44, 52, 60,
    2, 10, 18, 26, 34, 42, 50, 58,
    0, 8, 16, 24, 32, 40, 48, 56,
    7, 15, 23, 31, 39, 47, 55, 63,
    5, 13, 21, 29, 37, 45, 53, 61,
    3, 11, 19, 27, 35, 43, 51, 59,
    1, 9, 17, 25, 33, 41, 49, 57
];
exports.IP_TABLE = [
    6, 14, 22, 30, 38, 46, 54, 62,
    4, 12, 20, 28, 36, 44, 52, 60,
    2, 10, 18, 26, 34, 42, 50, 58,
    8, 16, 24, 32, 40, 48, 56, 64
];
