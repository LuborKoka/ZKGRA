# Lab 5

## Task 1

### 1.1
`2^x mod 4`

transmittter: 2^6 mod 4 = 0  
receiver: 2^3 mod 4 = 0

Both expressions equal 0, so the common secret key is `0`.

`78^x mod 33`

transmitter: 78^6 mod 33 = 12
receiver: 78^3 mod 33 = 12

Both expressions equal to 12, so the common secret key is `12`.


### 1.2 
It's not possible to use the function `2^(-1) mod 6`. The modular inverse of `2 mod 6` does not exist. 


## Task 2

Finished in `./index.ts`

## Task 3

Finished in `./index.ts`

## Task 4

34 * x = 1 + k * 27

where `x` is the result number 

1. I use `Extended Euclidean Algorithm`  to find the greatest common divisor (GDC) of 34 and 27:

    - 34 = 1 * 27 + 7
    - 27 = 3 * 7 + 6
    - 7 = 1 * 6 + 0
    - 6 = 6 * 1 + 0

`GDC` of 34 and 27 is `1`.

1. Express 1 as a linear combination of 27 and 34

    - 1 = 7 - 1 * 6
    - 1 = 7 - 1 * (27 - 3 * 7) = 4 * 7 - 1 * 27
    - 1 = 4 * (34 - 1 * 27) - 1 * 27 = 4 * 34 - 5 * 27

    So `34 ^ -1 mod 27 = 4`