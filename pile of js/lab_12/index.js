"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = testLab12;
const constants_1 = require("../constants");
const lab_8_1 = require("../lab_8");
function rsaSign(hash, d, n) {
    return (0, lab_8_1.modExp)(hash, d, n);
}
function rsaVerify(signature, e, n) {
    return (0, lab_8_1.modExp)(signature, e, n);
}
function findPQ(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return [i, n / i];
        }
    }
    return null;
}
function bruteForceDecrypt(ciphergram) {
    for (let x = 1; x <= 26; x++) {
        let decryptedText = "";
        const pairs = ciphergram.match(/.{1,2}/g);
        if (!pairs)
            continue;
        for (const pair of pairs) {
            const number = parseInt(pair, 10);
            const position = number - x;
            if (position >= 0 && position < constants_1.ALPHABET.length) {
                decryptedText += constants_1.ALPHABET[position];
            }
            else {
                decryptedText += constants_1.ALPHABET[25 + position];
                break;
            }
        }
        if (decryptedText) {
            console.log(`Key: ${x}, Decoded Text: ${decryptedText}`);
        }
    }
}
function testLab12() {
    const p = 17;
    const q = 19;
    const n = p * q;
    const e = 5;
    const d = 29;
    const hash = 88;
    const signature = rsaSign(hash, d, n);
    console.log(`Signature: ${signature}`);
    const verifiedHash = rsaVerify(signature, e, n);
    console.log(`Verified Hash: ${verifiedHash}`);
    console.log(`Signature is ${verifiedHash === hash ? '' : 'in'}valid`);
    console.log(`Found p and q: ${findPQ(851)}`);
    bruteForceDecrypt("202412");
}
