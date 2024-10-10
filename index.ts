import { LAST_NAME } from "./constants";
import { encodePolybiusSquare, XOR } from "./lab_4 polybius square";


//task 1
console.log(encodePolybiusSquare('ENCRYPT ME 2 DAY'))
console.log(encodePolybiusSquare(LAST_NAME))


//task 2
let a = '1011', b = '0110', c = '0100'

console.log(XOR(b, XOR(a, XOR(c, XOR(a, b)))))

a = '0101', b = '1110', c = '1101'

console.log(XOR(b, XOR(a, XOR(c, XOR(a, b)))))

a = '0001', b = '0101', c = '1010'

console.log(XOR(b, XOR(a, XOR(c, XOR(a, b)))))

//task 3 is in the report