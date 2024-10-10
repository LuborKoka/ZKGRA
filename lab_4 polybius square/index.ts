import { LETTER_TO_NUMBER_MAP } from "../constants";


/**
 * @param {string} letter - a letter of the alphabet, a space or a number 
 * @returns object with x and y coordinates of the letter in a 6x6 square, x = 0, y = 0 for spaces
 */
function getLetterCoordinates(letter: string) {
    if ( letter === ' ' ) {
        return {
            x: 0,
            y: 0
        }
    }
    const index = LETTER_TO_NUMBER_MAP.get(letter.toLowerCase()) ?? LETTER_TO_NUMBER_MAP.get('z')! + 1 + Number(letter)

    const x = index % 6 > 0 ? index % 6 : 6
    const y = Math.ceil(index / 6)

    return {x, y}
}

/**
 * Encode message using 6x6 polybius square, where the missing spaces are filled by numbers 0-9
 */
export function encodePolybiusSquare(message: string) {
    let ciphertext = ''
    for (const letter of message) {
        const {x, y} = getLetterCoordinates(letter)
        ciphertext = ciphertext.concat(` ${x}${y}`)
    }

    return ciphertext.trim()
}