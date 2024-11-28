export function redundantCode(code: string) {
    const parity = code.split('').reduce((sum, bit) => sum + parseInt(bit, 2), 0) % 2
    return code + parity.toString()
}

export function huffmanEncode(symbols: {symbol: string, probability: number}[]) {
    const sortedSymbols = symbols.sort((a, b) => a.probability - b.probability)
    const tree: Map<string, string> = new Map()

    while (sortedSymbols.length > 1) {
        const [first, second] = sortedSymbols.splice(0, 2)
        const combinedSymbol = {
            symbol: first.symbol + second.symbol,
            probability: first.probability + second.probability,
        }

        for (const char of first.symbol) {
            const currentCode = tree.get(char) || ""
            tree.set(char, currentCode + "0")
        }

        for (const char of second.symbol) {
            const currentCode = tree.get(char) || ""
            tree.set(char, currentCode + "1")
        }

        sortedSymbols.push(combinedSymbol)
        sortedSymbols.sort((a, b) => a.probability - b.probability)
    }

    for (const [key, value] of tree.entries()) {
        tree.set(key, value.split("").reverse().join(""))
    }

    return tree
}

export default function testLab10() {
    // Task 1
    const symbols = {
        A1: "00",
        A2: "01",
        A3: "10",
        A4: "11",
        A5: "100",
        A6: "101",
    }

    Object.entries(symbols).forEach(([key, val]) => {
        console.log(`Symbol ${key}, redundant code: ${redundantCode(val)}`)
    })

    // Task 2
    const letters = [
        { symbol: "E", probability: 0.127 },
        { symbol: "T", probability: 0.091 },
        { symbol: "A", probability: 0.082 },
        { symbol: "O", probability: 0.075 },
        { symbol: "I", probability: 0.070 },
        { symbol: "N", probability: 0.067 },
        { symbol: "S", probability: 0.063 },
        { symbol: "H", probability: 0.061 },
        { symbol: "R", probability: 0.060 },
        { symbol: "D", probability: 0.043 },
        { symbol: "L", probability: 0.040 },
        { symbol: "C", probability: 0.028 },
        { symbol: "U", probability: 0.028 },
        { symbol: "M", probability: 0.024 },
        { symbol: "W", probability: 0.024 },
        { symbol: "F", probability: 0.022 },
        { symbol: "G", probability: 0.020 },
        { symbol: "Y", probability: 0.020 },
        { symbol: "P", probability: 0.019 },
        { symbol: "B", probability: 0.015 },
        { symbol: "V", probability: 0.010 },
        { symbol: "K", probability: 0.008 },
        { symbol: "J", probability: 0.002 },
        { symbol: "X", probability: 0.002 },
        { symbol: "Q", probability: 0.001 },
        { symbol: "Z", probability: 0.001 },
    ]

    const tree = huffmanEncode(letters)
    console.log(tree)
}

testLab10()