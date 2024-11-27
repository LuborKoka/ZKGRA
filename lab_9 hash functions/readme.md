# Lab 9

## Task 1

| Combination | h(n) = n mod m| h(n) = (h(n1) + h(n2) + h(n3) + h(n4) + h(n5) + h(n6)) mod m |
| ------------ | --------------- | --------------------------------------------------------------- |
| (n=10, m=3) |         1 |         0 |
| (n=15, m=4) |         3 |         1 |
| (n=22, m=7) |         1 |         0 |
| (n=33, m=6) |         3 |         3 |
| (n=8, m=5) |         3 |         3 |

## Task 2 

Suggested algorithm:

1. select a large prime number `P`
1. select modulus M to keep the hash within a reasonable range
1. initialize `hash` to 0
1. for each character `c` with index `i` of the string:
    1. convert `c` to its ascii value
    1. multiply ascii value of `c` by `p^i` (mod M)
    1. add result to hash (mod M)


## Task 3 and 4

All of these tasks are implemented in `lab_9 hash functions/index.ts`