import { LETTER_TO_NUMBER_MAP } from "../constants"
import { reverseMapLetters } from "../misc"


export function encodeCaesar(text: string, k: number | string) {
    if (typeof k == 'string') {
        k = LETTER_TO_NUMBER_MAP.get(k.toLowerCase()[0]) as number
    }

    const cipher = []

    for (const letter of text.toLowerCase()) {
        let index = LETTER_TO_NUMBER_MAP.get(letter)
        if ( !index ) {
            console.log('invalid input')
            return ''
        }
        index += k

        if ( index > 26 ) {
            index -= 26
        }

        cipher.push(index)
    }

    return reverseMapLetters(cipher).join('')
}