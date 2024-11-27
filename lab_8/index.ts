import { getGcd } from "../lab_5"

function textToAscii(text: string) {
    const res = []

    for (let i = 0; i < text.length; i++) {
        res.push(text.charCodeAt(i))
    }

    return res
}

function asciiToText(codes: number[]) {
    return codes.map(code => String.fromCharCode(code)).join('')
}


/**
 * So this is the Extended Euclidean Algorithm for finding inverse modulo.
 */
function modInverse(e: number, phi: number) {
    let [a, b] = [phi, e]
    let [x0, x1] = [0, 1]

    while (b !== 0) {
        const q = Math.floor(a / b);
        [a, b] = [b, a % b];
        [x0, x1] = [x1, x0 - q * x1]
    }

    return x0 < 0 ? x0 + phi : x0
}


// i have to confess, this is from chatgpt to prevent overflow on the large numbers
export function modExp(base: number, exp: number, mod: number) {
    let result = 1
    base = base % mod

    while (exp > 0) {
        if (exp % 2 === 1) {
            result = (result * base) % mod
        }
        base = (base * base) % mod
        exp = Math.floor(exp / 2)
    }

    return result
}

export function generateRsaKey(p: number, q: number, e = 3) {
    const n = p*q
    const phi = (p - 1) * (q - 1)
    const d = modInverse(e, phi)

    return {
        publicKey: n,
        privateKey: d
    }
}


export function encryptRSA(text: string, publicKey: number, e = 3) {
    const cyphertext = []
    const ascii = textToAscii(text)

    for (const charcode of ascii) {
        cyphertext.push(modExp(charcode, e, publicKey))
    }

    return cyphertext
}


export function decryptRSA(cyphertext: number[], privateKey: number, publicKey: number) {
    return cyphertext.map(c => modExp(c, privateKey, publicKey))
}

function isPrime(num: number): boolean {
    if (num < 2) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false
    }
    return true
}

function rsaPublicKeys(p: number, q: number) {
    if (!isPrime(p) || !isPrime(q)) {
        return `Both p and q must be prime numbers.`
    }
  
    const phi = (p - 1) * (q - 1)
    const keys: ReturnType<typeof generateRsaKey>[] = []

    for (let e = 3; e < phi; e++) {
        if (getGcd(e, phi) === 1) {
            keys.push(generateRsaKey(p, q, e))
        }
    }
  
    return keys
}


export default function testLab8() {
    const { publicKey, privateKey } = generateRsaKey(11, 17)
    let cyphertext = encryptRSA('Bratislava', publicKey)
    let decryptedText = decryptRSA(cyphertext, privateKey, publicKey)
    console.log(cyphertext)
    console.log(decryptedText)
    console.log(asciiToText(decryptedText))
    
    cyphertext = encryptRSA('BANK', publicKey)
    decryptedText = decryptRSA(cyphertext, privateKey, publicKey)
    console.log(cyphertext)
    console.log(decryptedText)
    console.log(asciiToText(decryptedText))

    console.log(rsaPublicKeys(7, 11))
    console.log(rsaPublicKeys(9, 11))
}

testLab8()
