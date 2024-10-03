import { ALPHABET, reverseMapLetters } from "../misc"
import { encodeCaesar } from "../lab_2 caesar cipher"
import { encodeBlock, encodeStream } from "../lab_1 reverse coding"

/**
 * This function decodes a string encrypted according to task 1a
 * 
 * @param cipher The string to decode
 */
function decodeStream(cipher: string) {
    const result: number[] = []
    for (const letter of cipher.toLowerCase()) {
        const code = Math.abs(letter.charCodeAt(0) - 97 - 26)
        result.push(code)
    } 

    return reverseMapLetters(result).join('')
}

/**
 * This function decodes a string encrypted according to task 1b
 * 
 * @param cipher The string to decode
 * @param separateAt The letter at which the alphabet is separated or the index of that letter
 */
function decodeBlock(cipher: string, separateAt: number | string) {
    if ( typeof separateAt === 'string' ) {
        separateAt = separateAt.charCodeAt(0) - 97
    }

    const result: number[] = []

    for (const letter of cipher) {
        let code = letter.charCodeAt(0) - 96
        if ( code > separateAt ) {
            code -= 27
        }
        code = (code - separateAt) * -1
        if (code < separateAt) {
            code += 1
        }
        result.push(code)
    }
    return reverseMapLetters(result).join('')
}


/**
 * This function decodes caesar cipher
 * 
 * @param {string} cipher The string to decode
 * @param {string | number} k A string of which the first letter is the shift or a number (which is the  shift)
 */
function decodeCaesar(cipher: string, k: number | string) {
    if (typeof k == 'string') {
        k = k.charCodeAt(0) - 96 as number
    }

    const result: number[] = []
    for (const letter of cipher.toLowerCase()) {
        let code = letter.charCodeAt(0) - 96 - k

        if (code <= 0) {
            code += 26
        }

        result.push(code)
    }

    return reverseMapLetters(result).join('')
}

const cipher = encodeBlock('LUBOR', 10)
console.log(cipher)
const name = decodeBlock(cipher, 10)
console.log(name)