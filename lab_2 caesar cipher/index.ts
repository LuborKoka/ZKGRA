import { measureTime, reverseMapLetters, ALPHABET } from "../misc"

const NAME = 'KOKA'

const letterMap = new Map<string, number>()

for (let i = 0; i < ALPHABET.length; i++) {
    letterMap.set(ALPHABET[i], i + 1)
}


export function encodeCaesar(text: string, k: number | string) {
    if (typeof k == 'string') {
        k = letterMap.get(k.toLowerCase()[0]) as number
    }

    const cipher = []

    for (const letter of text.toLowerCase()) {
        let index = letterMap.get(letter)
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

const [cipher, time] = measureTime(() => encodeCaesar(NAME, NAME))
console.log(cipher, time)