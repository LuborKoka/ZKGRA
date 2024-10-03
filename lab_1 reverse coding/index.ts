import { ALPHABET, LETTER_TO_NUMBER_MAP } from '../constants'
import { reverseMapLetters } from '../misc'

/**
 * This would be task 1.a - where letters are assigned numbers in reverse order
 * 
 * @param {string} input - the message to be encrypted
 */
export function encodeStream(input: string) {
    const directNumbering = []
    const reverseNumbering = []

    for (const char of input.toLowerCase()) {
        directNumbering.push(LETTER_TO_NUMBER_MAP.get(char))
    }

    for (const code of directNumbering) {
        if (!code) 
            return 'wrong input'
        reverseNumbering.push(27 - code)
    }

    return reverseMapLetters(reverseNumbering).join('')
}

/** 
 * This would be task 1.b
 * 
 * @param input The information string to encode
 * @param separateAt The index of the letter in the alphabet at which it is split into 2 blocks
 */
export function encodeBlock(input: string, separateAt: number | string) {
    if (typeof separateAt === 'string') {
        separateAt = ALPHABET.lastIndexOf(separateAt.toLowerCase()[0])
    }

    const directNumbering: (number | undefined)[] = []
    const reverseNumbering: number[] = []

    for (const char of input.toLowerCase()) {
        directNumbering.push(LETTER_TO_NUMBER_MAP.get(char))
    }

    for (const code of directNumbering) {
        if (!code)
            return 'wrong input'
        reverseNumbering.push((code - separateAt - 1) * -1)
        if (reverseNumbering.at(-1)! <= 0) {
            reverseNumbering[reverseNumbering.length - 1] += 26
        }
    }

    return reverseMapLetters(reverseNumbering).join('')
}