import { NUMBER_TO_LETTER_MAP } from "./constants"

/**
 * 
 * @param callback any function lol
 * @returns [callback return value, cpu time in ns]
 */
export function measureTime(callback: () => any) {
    const startTime = process.hrtime()
    const output = callback()
    const endTime = process.hrtime()

    const cpuTime = endTime[1] - startTime[1]

    return [output, cpuTime]
}


/**
 * Maps numbers to their corresponding letters in the alphabet.
 * 
 * @param {number[]} cipher - the codes of letters (enrypted or not)
 */
export function reverseMapLetters(cipher: number[]) {
    return cipher.map(i => NUMBER_TO_LETTER_MAP.get(i))
}