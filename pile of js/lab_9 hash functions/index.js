"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = testLab9;
const crypto = __importStar(require("crypto"));
function simpleHash(n, m) {
    return n % m;
}
function combinedHash(nValues, m) {
    const hValues = nValues.map(n => simpleHash(n, m));
    return hValues.reduce((prev, current) => prev += current, 0) % m;
}
function hash(data) {
    const hash = crypto.createHash("sha256").update(data).digest("hex");
    return BigInt(`0x${hash}`);
}
function fastHash(input) {
    const P = 31;
    const M = 2 ** 32 - 1;
    let hash = 0;
    let multiplier = 1;
    for (let i = 0; i < input.length; i++) {
        const charValue = input.charCodeAt(i);
        hash = (hash + charValue * multiplier) % M;
        multiplier = (multiplier * P) % M;
    }
    return String(hash);
}
class SchnorrSignature {
    constructor(p, q, g, x) {
        this.p = p;
        this.q = q;
        this.g = g;
        this.x = x;
        this.y = this.modExp(g, -x, p);
    }
    modExp(base, exp, mod) {
        let result = 1n;
        base = base % mod;
        if (exp < 0)
            exp = (mod - 1n) + exp;
        while (exp > 0) {
            if (exp % 2n === 1n)
                result = (result * base) % mod;
            exp = exp / 2n;
            base = (base * base) % mod;
        }
        return result;
    }
    sign(message) {
        const k = BigInt(crypto.randomInt(1, Number(this.q)));
        const r = this.modExp(this.g, k, this.p);
        const e = hash(r.toString() + message);
        const s = (k + this.x * e) % this.q;
        return { r, s, e };
    }
    verify(message, { s, e }) {
        const rPrime = (this.modExp(this.g, s, this.p) * this.modExp(this.y, e, this.p)) % this.p;
        const ePrime = hash(rPrime.toString() + message);
        return e === ePrime;
    }
}
function testLab9() {
    const testCases = [
        { n: 10, m: 3 },
        { n: 15, m: 4 },
        { n: 22, m: 7 },
        { n: 33, m: 6 },
        { n: 8, m: 5 },
    ];
    console.log('Combination | h(n) = n mod m| h(n) = (h(n1) + h(n2) + h(n3) + h(n4) + h(n5) + h(n6)) mod m');
    console.log('------------------------------------------------------------------------------------------');
    for (const { n, m } of testCases) {
        const nValues = Array.from({ length: 6 }, (_, i) => n + i);
        const h1 = simpleHash(n, m);
        const h2 = combinedHash(nValues, m);
        console.log(`(n=${n}, m=${m}) | ${h1.toString().padStart(9)} | ${h2.toString().padStart(9)}`);
    }
    const randomString = 'abcxdXDD';
    console.log(fastHash(randomString));
    const p = 23n;
    const q = 11n;
    const g = 2n;
    const x = 7n;
    const schnorrSignature = new SchnorrSignature(p, q, g, x);
    const message = 'Random message';
    const signature = schnorrSignature.sign(message);
    console.log(signature);
    console.log(schnorrSignature.verify(message, signature));
}
