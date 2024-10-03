"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const lab_1_reverse_coding_1 = require("./lab_1 reverse coding");
const lab_2_caesar_cipher_1 = require("./lab_2 caesar cipher");
const lab_3_decoding_1 = require("./lab_3 decoding");
const misc_1 = require("./misc");
function RNG(min, max) {
    return min + Math.random() * (max - min);
}
function encryptByRandomAlg(message) {
    //so if i get it right, i have to randomly pick an algorithm to encode the message, then i have to try all decoding algs
    //to decrypt it and one of them should succeed
    const random = RNG(0, 3);
    if (random > 2) {
        console.log('Used algorithm: lab 2');
        return (0, lab_2_caesar_cipher_1.encodeCaesar)(message, constants_1.LAST_NAME);
    }
    if (random > 1) {
        console.log('Used algorithm: lab 1.b');
        return (0, lab_1_reverse_coding_1.encodeBlock)(message, constants_1.LAST_NAME);
    }
    console.log('Used algorithm: lab 1.a');
    return (0, lab_1_reverse_coding_1.encodeStream)(message);
}
function decryptMessage(message) {
    const [outputStream, timeStream] = (0, misc_1.measureTime)(() => (0, lab_3_decoding_1.decodeStream)(message));
    const [outputBlock, timeBlock] = (0, misc_1.measureTime)(() => (0, lab_3_decoding_1.decodeBlock)(message, constants_1.LAST_NAME));
    const [outputCaesar, timeCaesar] = (0, misc_1.measureTime)(() => (0, lab_3_decoding_1.decodeCaesar)(message, constants_1.LAST_NAME));
    console.log(`Results after decryption:\nCaesar: ${outputCaesar}\nBlock: ${outputBlock}\nStream: ${outputStream}\nExecution time for Caesar: ${timeCaesar}\nBlock: ${timeBlock}\nStream: ${timeStream}`);
}
for (let i = 0; i < 10; i++) {
    const cipher = encryptByRandomAlg(constants_1.LAST_NAME);
    decryptMessage(cipher);
}
