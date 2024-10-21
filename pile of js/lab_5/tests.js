"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testLab5 = testLab5;
const _1 = require(".");
function testLab5() {
    // Task 2
    console.log((0, _1.findPrimeRoots)(8));
    console.log((0, _1.findPrimeRoots)(11));
    // Task 3
    const table = (0, _1.generateMappingsTable)(7);
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
