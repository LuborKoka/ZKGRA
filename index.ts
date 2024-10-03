import { LAST_NAME } from "./constants"
import { encodeBlock, encodeStream } from "./lab_1 reverse coding"
import { encodeCaesar } from "./lab_2 caesar cipher"
import { decodeBlock, decodeCaesar, decodeStream } from "./lab_3 decoding"
import { measureTime } from "./misc"

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