import { LAST_NAME } from "../constants"
import { encodeBlock, encodeStream } from "../lab_1 reverse coding"
import { encodeCaesar } from "../lab_2 caesar cipher"
import { measureTime, reverseMapLetters } from "../misc"
/**
 * This function decodes a string encrypted according to task 1a
 * 
 * @param cipher The string to decode
 */
export function decodeStream(cipher: string) {
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
export function decodeBlock(cipher: string, separateAt: number | string) {
    if ( typeof separateAt === 'string' ) {
        separateAt = separateAt.toLowerCase().charCodeAt(0) - 97
    }

    const result: number[] = []

    for (const letter of cipher) {
        let code = letter.charCodeAt(0) - 96
        if (code > separateAt) {
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
 * @param {string | number} k A string of which the first letter is the shift, or a number (which is the  shift)
 */
export function decodeCaesar(cipher: string, k: number | string) {
    if (typeof k == 'string') {
        k = k.toLowerCase().charCodeAt(0) - 96 as number
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


export default function testLab3() {
    function RNG(min: number, max: number) {
        return min + Math.random() * (max - min)
    }

    function encryptByRandomAlg(message: string) {
        //so if i get it right, i have to randomly pick an algorithm to encode the message, then i have to try all decoding algs
        //to decrypt it and one of them should succeed
    
        const random = RNG(0, 3)
    
        if (random > 2) {
            console.log('Used algorithm: lab 2')
            return encodeCaesar(message, LAST_NAME)
        }
    
        if (random > 1) {
            console.log('Used algorithm: lab 1.b')
            return encodeBlock(message, LAST_NAME)
        }
    
        console.log('Used algorithm: lab 1.a')
        return encodeStream(message)
    }
    
    function decryptMessage(message: string) {
        const [outputStream, timeStream] = measureTime(() => decodeStream(message))
        const [outputBlock, timeBlock] = measureTime(() => decodeBlock(message, LAST_NAME))
        const [outputCaesar, timeCaesar] = measureTime(() => decodeCaesar(message, LAST_NAME))
    
        console.log(`Results after decryption:\nCaesar: ${outputCaesar}\nBlock: ${outputBlock}\nStream: ${outputStream}\nExecution time for Caesar: ${timeCaesar}\nBlock: ${timeBlock}\nStream: ${timeStream}`)
    }
    
    
    for (let i = 0; i < 10; i++) {
        const cipher = encryptByRandomAlg(LAST_NAME)
        decryptMessage(cipher)
    }
}