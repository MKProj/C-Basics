# Introduction
C reads programs from top to bottom, and we can see this from a simple hello world program: 

```C
//hello.c
#include<stdio.h>

int main(){
    printf("Hello World!\n");
    return 0; 
}
```

The program consists of the following: 

- include statement: `#include<>` is used to include or in other terms import libraries to the program, 
in our case that was standard input/output found in `stdio.h`. 

- main function: a main function is used to execute a program as it is the entry to the program and must return an `int`, and for a successful program that's `0`. (Functions will be described 
in more detail in [Section 5 Functions](05-functions.md).)

- print function: from `stdio.h` we can use `printf()` that is used to 
display output to the terminal, and we will later see how to use it to 
interpolate with variables. 

Let's compile our program with Clang: 
```bash
$ clang hello.c #compile the program
$ ls #let's see what is produced 
a.out hello.c
$ ./a.out #executes the binary 
Hello World!
```