import { FIRST_NAME, FORWARD_SBOX, INVERSE_SBOX, LAST_NAME, MODEL_DATA } from "../constants"

function textToHex(text: string) {
    const result: string[] = []
    for (let i = 0; i < text.length; i++) {
        result.push(text.charCodeAt(i).toString(16))
    }
    return result
}

export function shiftRows(table: number[][]) {
    const result = [table.at(0)]

    for (let i = 1; i < table.length; i++) {
        const row = [...table.at(i)!.slice(i), ...table.at(i)!.slice(0, i)]
        result.push(row)
    }

    return result
}

/**
 * performs substitution based on the table (that would be forward or inverse sbox)
 */
export function entriesToDecimal(entries: number[], table: number[][]) {
    return entries.map(entry => {
        const x = Math.floor(entry / 16)
        const y = entry % 16

        return table.at(x)!.at(y)!
    })
}


export default function testLab7() {
    // Task 1
    const fnameHexString = textToHex(FIRST_NAME)
    const lnameHexString = textToHex(LAST_NAME)
    console.log(entriesToDecimal(fnameHexString.map(hex => Number(`0x${hex}`)), FORWARD_SBOX))
    console.log(entriesToDecimal(lnameHexString.map(hex => Number(`0x${hex}`)), FORWARD_SBOX))

    // Task 2a
    const forwardEntries = [0x01, 0xAC, 0x03, 0x04, 0x64, 0x06, 0x0D, 0x10]
    console.log(entriesToDecimal(forwardEntries, FORWARD_SBOX))
    // Task 2b
    const inverseEntries = [0xF1, 0xF3, 0xF4, 0xF6, 0xF8, 0xFF, 0x10]
    console.log(entriesToDecimal(inverseEntries, INVERSE_SBOX))

    // Task 3
    console.log(shiftRows(MODEL_DATA))

    // Task 4
    const inverseData = MODEL_DATA.map(row => {
        return entriesToDecimal(row, INVERSE_SBOX)
    })
    console.log(shiftRows(inverseData))
}