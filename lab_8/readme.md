# Lab 8

## Task 1

Encode the word `Bratislava` using `p=5` and `q=7`.  

Unfortunately, this task seems to be a little impossible to solve. When generating the public key, I need to find modular inverse of `e = 3` and `(p-1)(q-1) = 24`. This doesn't exists because they aren't coprime. I could use a higher value of `e`, but that yields too small values of private and public keys and RSA doesn't work then. 


## Task 2

Encode the word `BANK` using `p=9` and `q=11`.  

Numbers `p` and `q` must be prime for this to work, and 9 is not prime, so unfortunate.  

However, I did implement the RSA encryption and decryption algorithm just to showcase that I can encode and decode the words `Bratislava` and `BANK`. And any other word for that matter.

## Task 3

The list of possible public keys for `p = 7` and `q = 11`:

43, 11, 37, 53, 19, 47, 29, 31, 13, 41, 7, 23, 49, 17, 5


Numbers `p = 9` and `q = 11` can't be used because p would not be a prime number.