export const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

const letterMap = new Map<number, string>()
for (let i = 0; i < ALPHABET.length; i++) {
    letterMap.set(i + 1, ALPHABET[i])
}

/**
 * 
 * @param callback encrypt/decrypt function that returns the cipher/decrypted text
 * @returns [cipher/decoded text, cpu time in ns]
 */
export function measureTime(callback: () => any) {
    const startTime = process.hrtime()
    const output = callback()
    const endTime = process.hrtime()

    const ciphergram = output
    const cpuTime = endTime[1] - startTime[1]

    return [ciphergram, cpuTime]
}


export function reverseMapLetters(cipher: number[]) {
    return cipher.map(i => letterMap.get(i))
}