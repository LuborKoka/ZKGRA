export const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

export const FIRST_NAME = 'LUBOR'
export const LAST_NAME = 'KOKA'

export const NUMBER_TO_LETTER_MAP = new Map<number, string>()
export const LETTER_TO_NUMBER_MAP = new Map<string, number>()

for (let i = 0; i < ALPHABET.length; i++) {
    NUMBER_TO_LETTER_MAP.set(i + 1, ALPHABET[i])
    LETTER_TO_NUMBER_MAP.set(ALPHABET[i], i + 1)
}

