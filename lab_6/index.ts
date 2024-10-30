import { FP_TABLE, IP_TABLE } from "../constants";
import { XOR } from "../lab_4 polybius square";


function initialPermutation(text: string) {
  return IP_TABLE.map(i => text.at(i)).join('')
}

function finalPermutation(text: string) {
  return FP_TABLE.map(i => text.at(i)).join('')
}

function shiftLeft(key: string, shift: number) {
  return key.slice(shift) + key.slice(0, shift)
}

export function des(plainText: string, key: string) {
  const initialTextPermutation = initialPermutation(plainText)
  let L = initialTextPermutation.slice(0, initialTextPermutation.length / 2)
  let R = initialTextPermutation.slice(initialTextPermutation.length / 2)

  const subKey1 = shiftLeft(key, 1)
  const subKey2 = shiftLeft(key, 2)

  let newL = R
  let newR = XOR(L, subKey1.slice(0, L.length))
  L = newL
  R = newR

  newL = R
  newR = XOR(L, subKey2.slice(0, L.length))
  L = newL
  R = newR

  return R + L
}