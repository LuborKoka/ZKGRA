# Lab 7

## Task 1

My first name hexcodes: 0x4C 0x55 0x42 0x4F 0x52
My last name hex codes: 0x4B 0x4F 0x4B 0x41

Transformed using the Rijndael encryption table:

First name: `0x29 0xfc 0x2c 0x84 0x00`, the code prints values in decimal, so: `41 252 44 132 0`
Last name: `0xb3 0x84 0xb3 0x83`, in decimal: `179 132 179 131`

## Task 2

- a. `0x01, 0xAC, 0x03, 0x04, 0x64, 0x06, 0x0D, 0x10` -> `124, 145, 123, 242,  67, 111, 215, 202`
- b. `0xF1, 0xF3, 0xF4, 0xF6, 0xF8, 0xFF, 0x10` -> `43, 126, 186, 214, 225, 125, 124`

## Task 3

The table after shiftRows operation:

|   |   |   |   |
|---|---|---|---|
| 0x63 | 0x7C | 0x77 | 0x7B |
| 0x82 | 0xC9 | 0x7D | 0xCA |
| 0x93 | 0x26 | 0xB7 | 0xFD |
| 0x0C | 0x04 | 0xC7 | 0x23 |


The code once again returns decimal values, so the table looks like this:

|   |   |   |   |
|---|---|---|---|
| 99 | 124 | 119 | 123 |
| 130 | 201 | 125 | 202 |
| 147 | 38 | 183 | 253 |
| 12 | 4 | 199 | 35 |

## Task 4

So I 1st tranfer the values based on inverse sbox and then do shiftRows operation.

Result table:

|   |   |   |   |
|---|---|---|---|
| 0xBC | 0x01 | 0x02 | 0x03 |
| 0x41 | 0x12 | 0x13 | 0x59 |
| 0x22 | 0x3D | 0x20 | 0x21 |
| 0x81 | 0x30 | 0x31 | 0xA6 |

Once again, the code returns decimals, so the return table is:

|   |   |   |   |
|---|---|---|---|
| 188 | 1 | 2 | 3 |
| 65 | 18 | 19 | 89 |
| 34 | 61 | 32 | 33 |
| 129 | 48 | 49 | 166 |



## Task 5

So the only question is how many columns there are... that is 160/32, so 5 columns

|   |   |   |   |   |
|----------|----------|----------|----------|----------|
| 0    | 4     | 8    | 12     | 16     |
| 1   | 5    | 9   | 13    | 17     |
| 2   | 6   | 10   |  14    | 18     |
| 3    | 7 | 11     | 15     | 19    |
