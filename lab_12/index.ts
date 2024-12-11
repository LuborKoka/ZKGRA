import { ALPHABET } from "../constants";
import { modExp } from "../lab_8";

function rsaSign(hash: number, d: number, n: number) {
    return modExp(hash, d, n)
}

function rsaVerify(signature: number, e: number, n: number) {
    return modExp(signature, e, n) 
}

function findPQ(n: number) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return [i, n / i]
        }
    }
    return null
}


function bruteForceDecrypt(ciphergram: string) {    
    for (let x = 1; x <= 26; x++) {
        let decryptedText: string | null = ""
    
        const pairs = ciphergram.match(/.{1,2}/g)
        if (!pairs) continue
    
        for (const pair of pairs) {
            const number = parseInt(pair, 10)
    
            const position = number - x
            
            if (position >= 0 && position < ALPHABET.length) {
                decryptedText += ALPHABET[position]
            } else {
                decryptedText = null
                break
            }
        }
    
        if (decryptedText) {
            console.log(`Key: ${x}, Decoded Text: ${decryptedText}`);
        }
    }
}

export default function testLab12() {
    const p = 17
    const q = 19
    const n = p * q

    const e = 5
    const d = 29

    const hash = 88
    
    const signature = rsaSign(hash, d, n)
    console.log(`Signature: ${signature}`)
    
    const verifiedHash = rsaVerify(signature, e, n)
    console.log(`Verified Hash: ${verifiedHash}`)

    console.log(`Signature is ${verifiedHash === hash ? '' : 'in'}valid`)

    console.log(`Found p and q: ${findPQ(851)}`)

    bruteForceDecrypt("202412")
}