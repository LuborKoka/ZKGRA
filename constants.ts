export const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

export const FIRST_NAME = 'LUBOR'
export const LAST_NAME = 'KOKA'

export const NUMBER_TO_LETTER_MAP = new Map<number, string>()
export const LETTER_TO_NUMBER_MAP = new Map<string, number>()

for (let i = 0; i < ALPHABET.length; i++) {
    NUMBER_TO_LETTER_MAP.set(i + 1, ALPHABET[i])
    LETTER_TO_NUMBER_MAP.set(ALPHABET[i], i + 1)
}

export const IP_TABLE = [
    6, 14, 22, 30, 38, 46, 54, 62,
    4, 12, 20, 28, 36, 44, 52, 60,
    2, 10, 18, 26, 34, 42, 50, 58,
    0, 8, 16, 24, 32, 40, 48, 56,
    7, 15, 23, 31, 39, 47, 55, 63,
    5, 13, 21, 29, 37, 45, 53, 61,
    3, 11, 19, 27, 35, 43, 51, 59,
    1, 9, 17, 25, 33, 41, 49, 57
]

export const FP_TABLE = [
    24, 56, 16, 48, 8, 40, 0, 32,
    25, 57, 17, 49, 9, 41, 1, 33,
    26, 58, 18, 50, 10, 42, 2, 34,
    27, 59, 19, 51, 11, 43, 3, 35,
    28, 60, 20, 52, 12, 44, 4, 36,
    29, 61, 21, 53, 13, 45, 5, 37,
    30, 62, 22, 54, 14, 46, 6, 38,
    31, 63, 23, 55, 15, 47, 7, 39
];
