# Data Types & Variables
A variable is a placeholder to store data in, and to utilize variables in our C programs, we must undertstand of some of the data types that C offers. 

## Integers 
Integers are non-decimal numbers and can range from being only positive (unsigned) and negtive/positive (signed), some of the main integer data types are `int`, `short` and `long`. 

| Data Type | Size | Range |
| - | - | - | 
| `int` | 32 bits | - 2,147,483,648 - 2,147,483,647 | 
| `short` | 16 bits | - 32,768 - 32,767 |
| `long` | 64 bits | -9.22E18 - 9.22E18 - 1  |

> The Unsigned versions of each type will be \\(2^{n}\\) where \\(n\\) is 
the number of bits. 

>> **Note**: We will be only be using `int` during this book as it is enough for our purposes. 

## Floating Points 