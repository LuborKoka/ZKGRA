"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPrimeRoots = findPrimeRoots;
exports.generateMappingsTable = generateMappingsTable;
exports.default = testLab5;
/**
 * Find greatest common divisor
 * @returns 1 if a and b are coprime
 */
function getGcd(a, b) {
    if (b === 0)
        return a;
    return getGcd(b, a % b);
}
/**
 * @returns all numbers that are coprime with n
 */
function findCoprimes(n) {
    const coprimes = [];
    for (let a = 1; a < n; a++) {
        if (getGcd(a, n) === 1) {
            coprimes.push(a);
        }
    }
    return coprimes;
}
function isPrimeRoot(a, n, coprimes) {
    const seen = new Set();
    for (let x = 1; x < n; x++) {
        const exp = Math.pow(a, x) % n;
        seen.add(exp);
    }
    return seen.size === coprimes.length;
}
function generateReflectionsTable(n) {
    const candidates = findCoprimes(n);
    const maxPower = n - 1;
    console.log(` x | ${candidates.map(a => `a=${a}`).join(' | ')}`);
    console.log('-'.repeat(4 + 6 * candidates.length));
    for (let x = 0; x <= maxPower; x++) {
        const row = candidates.map(a => Math.pow(a, x) % n);
        console.log(`${x.toString().padStart(2, ' ')} | ${row.map(y => y.toString().padStart(3, ' ')).join(' | ')}`);
    }
    console.log('-'.repeat(4 + 6 * candidates.length));
    return candidates;
}
function findPrimeRoots(n) {
    const candidates = generateReflectionsTable(n);
    const primeRoots = [];
    for (const a of candidates) {
        if (isPrimeRoot(a, n, candidates)) {
            primeRoots.push(a);
        }
    }
    return primeRoots.length === 0 ? `No prime roots found` : primeRoots;
}
function generateMappingsTable(n) {
    const table = []; //[a, x, y]
    for (let a = 0; a < n; a++) {
        for (let x = 0; x < n; x++) {
            const y = a * x % n;
            table.push([a, x, y]);
        }
    }
    return table;
}
function testLab5() {
    // Task 2
    console.log(findPrimeRoots(8));
    console.log(findPrimeRoots(11));
    // Task 3
    const table = generateMappingsTable(7);
    const cases = [
        { a: 1, y: 1 },
        { a: 3, y: 4 },
        { a: 4, y: 2 },
        { a: 5, y: 6 },
        { a: 6, y: 6 }
    ];
    for (const { a, y } of cases) {
        const result = table.find(([A, _, Y]) => A === a && Y === y);
        console.log(`(a, x) → (y): (${result === null || result === void 0 ? void 0 : result.at(0)}, ${result === null || result === void 0 ? void 0 : result.at(1)}) → (${result === null || result === void 0 ? void 0 : result.at(2)})`);
    }
}
