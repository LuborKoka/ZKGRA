import { writeFileSync } from 'fs'
import { measureTime, reverseMapLetters } from '../misc'

const input = 'KOKA'
const alphabet = 'abcdefghijklmnopqrstuvwxyz'

const letterMap = new Map<string, number>()

for (let i = 0; i < alphabet.length; i++) {
    letterMap.set(alphabet[i], i + 1)
}

export function encodeStream(input: string) {
    const directNumbering = []
    const reverseNumbering = []

    for (const char of input.toLowerCase()) {
        directNumbering.push(letterMap.get(char))
    }

    for (const code of directNumbering) {
        if (!code) 
            return 'wrong input'
        reverseNumbering.push(27 - code)
    }

    return reverseMapLetters(reverseNumbering).join('')
}

/** 
 * @param input The information string to encode
 * @param separateAt The index of the letter in the alphabet at which it is split into 2 blocks
 */
export function encodeBlock(input: string, separateAt: number) {
    const directNumbering: (number | undefined)[] = []
    const reverseNumbering: number[] = []

    for (const char of input.toLowerCase()) {
        directNumbering.push(letterMap.get(char))
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

const [cipherStream, timeStream] = measureTime(() => encodeStream(input))
const [cipherBlock, timeBlock] = measureTime(() => encodeBlock(input, 5))

const data = `Cipher input: ${input}
Task 1a:

Output: ${cipherStream}
${timeStream}

Algorithm: 
I map each letter in the alphabet to its number (in the correct order). I then map the input to these numbers. In the next step, I subtract the numbers from 27, thus creating the reverse numbering.

Task 1b:

Output: ${cipherBlock}
${timeBlock}

Algorithm:
I start the same way as the previous task - I map the letters in the input to their corresponding numbers. Then, I subtract the order of the letter at which the alphabet blocks are separated (so for instance, if the blocks are separated by the letter 'e', i subtract 5). I add 26 to the numbers that are less or equal to 0 to reverse number 2 blocks in the alphabet.

`

writeFileSync('./reportFile.txt', data)