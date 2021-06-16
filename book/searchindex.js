Object.assign(window.search, {"doc_urls":["01.html#getting-started","02-intro.html#introduction","03-var.html#data-types--variables","03-var.html#integers","03-var.html#floating-points","04-array.html#arrays","05-functions.html#functions","06-cf.html#control-flow--loops","07-struct.html#structs--enums","08-pointer.html#pointers--references","09-file.html#file-handling"],"index":{"documentStore":{"docInfo":{"0":{"body":0,"breadcrumbs":4,"title":2},"1":{"body":90,"breadcrumbs":2,"title":1},"10":{"body":0,"breadcrumbs":4,"title":2},"2":{"body":13,"breadcrumbs":6,"title":3},"3":{"body":52,"breadcrumbs":4,"title":1},"4":{"body":0,"breadcrumbs":5,"title":2},"5":{"body":0,"breadcrumbs":2,"title":1},"6":{"body":0,"breadcrumbs":2,"title":1},"7":{"body":0,"breadcrumbs":6,"title":3},"8":{"body":0,"breadcrumbs":4,"title":2},"9":{"body":0,"breadcrumbs":4,"title":2}},"docs":{"0":{"body":"","breadcrumbs":"Getting Started » Getting Started","id":"0","title":"Getting Started"},"1":{"body":"C reads programs from top to bottom, and we can see this from a simple hello world program: //hello.c\n#include<stdio.h> int main(){ printf(\"Hello World!\\n\"); return 0; } The program consists of the following: include statement: #include<> is used to include or in other terms import libraries to the program, in our case that was standard input/output found in stdio.h. main function: a main function is used to execute a program as it is the entry to the program and must return an int, and for a successful program that's 0. (Functions will be described in more detail in Section 5 Functions .) print function: from stdio.h we can use printf() that is used to display output to the terminal, and we will later see how to use it to interpolate with variables. Let's compile our program with Clang: $ clang hello.c #compile the program\n$ ls #let's see what is produced a.out hello.c\n$ ./a.out #executes the binary Hello World!","breadcrumbs":"Introduction » Introduction","id":"1","title":"Introduction"},"10":{"body":"","breadcrumbs":"File Handling » File Handling","id":"10","title":"File Handling"},"2":{"body":"A variable is a placeholder to store data in, and to utilize variables in our C programs, we must undertstand of some of the data types that C offers.","breadcrumbs":"Data Types & Variables » Data Types & Variables","id":"2","title":"Data Types & Variables"},"3":{"body":"Integers are non-decimal numbers and can range from being only positive (unsigned) and negtive/positive (signed), some of the main integer data types are int, short and long. Data Type Size Range int 32 bits - 2,147,483,648 - 2,147,483,647 short 16 bits - 32,768 - 32,767 long 64 bits -9.22E18 - 9.22E18 - 1 The Unsigned versions of each type will be \\(2^{n}\\) where \\(n\\) is the number of bits. Note : We will be only be using int during this book as it is enough for our purposes.","breadcrumbs":"Data Types & Variables » Integers","id":"3","title":"Integers"},"4":{"body":"","breadcrumbs":"Data Types & Variables » Floating Points","id":"4","title":"Floating Points"},"5":{"body":"","breadcrumbs":"Arrays » Arrays","id":"5","title":"Arrays"},"6":{"body":"","breadcrumbs":"Functions » Functions","id":"6","title":"Functions"},"7":{"body":"","breadcrumbs":"Control Flow & Loops » Control Flow & Loops","id":"7","title":"Control Flow & Loops"},"8":{"body":"","breadcrumbs":"Structs & Enums » Structs & Enums","id":"8","title":"Structs & Enums"},"9":{"body":"","breadcrumbs":"Pointers & References » Pointers & References","id":"9","title":"Pointers & References"}},"length":11,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"1":{"6":{"df":1,"docs":{"3":{"tf":1.0}}},"df":1,"docs":{"3":{"tf":1.0}}},"2":{",":{"1":{"4":{"7":{",":{"4":{"8":{"3":{",":{"6":{"4":{"7":{"df":1,"docs":{"3":{"tf":1.0}}},"8":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"^":{"df":0,"docs":{},"{":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}},"3":{"2":{",":{"7":{"6":{"7":{"df":1,"docs":{"3":{"tf":1.0}}},"8":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"5":{"df":1,"docs":{"1":{"tf":1.0}}},"6":{"4":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"9":{".":{"2":{"2":{"df":0,"docs":{},"e":{"1":{"8":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{".":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}},"b":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}},"i":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}},"t":{"df":1,"docs":{"3":{"tf":2.0}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"c":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.4142135623730951}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":2,"docs":{"2":{"tf":1.7320508075688772},"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"b":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"8":{"tf":1.0}}}}},"x":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"10":{"tf":1.0}}}}},"l":{"df":0,"docs":{},"o":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{},"w":{"df":1,"docs":{"7":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":2,"docs":{"1":{"tf":2.23606797749979},"6":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"h":{"a":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"l":{"df":1,"docs":{"10":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{".":{"c":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"n":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"1":{"tf":1.7320508075688772}},"e":{"<":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{".":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"/":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}}},"t":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"3":{"tf":1.7320508075688772}},"e":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}},"r":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"l":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"'":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"i":{"b":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"7":{"tf":1.0}}}}},"s":{"df":1,"docs":{"1":{"tf":1.0}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":2,"docs":{"1":{"tf":1.7320508075688772},"3":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"n":{"df":1,"docs":{"3":{"tf":1.0}},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"/":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}}}}},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"p":{"df":0,"docs":{},"l":{"a":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"9":{"tf":1.0}}}}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}},"f":{"(":{"\"":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"df":1,"docs":{"1":{"tf":1.0}}}}}},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":2,"docs":{"1":{"tf":3.0},"2":{"tf":1.0}}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"9":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}}},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}},"z":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"t":{"a":{"df":0,"docs":{},"n":{"d":{"a":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}},"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{".":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}}}},"u":{"c":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"h":{"a":{"df":0,"docs":{},"t":{"'":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.0}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.7320508075688772}}}}}},"u":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}},"s":{"df":2,"docs":{"1":{"tf":2.23606797749979},"3":{"tf":1.0}}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"v":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"a":{"b":{"df":0,"docs":{},"l":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.7320508075688772}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"!":{"\\":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}}},"breadcrumbs":{"root":{"0":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"1":{"6":{"df":1,"docs":{"3":{"tf":1.0}}},"df":1,"docs":{"3":{"tf":1.0}}},"2":{",":{"1":{"4":{"7":{",":{"4":{"8":{"3":{",":{"6":{"4":{"7":{"df":1,"docs":{"3":{"tf":1.0}}},"8":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"^":{"df":0,"docs":{},"{":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}},"3":{"2":{",":{"7":{"6":{"7":{"df":1,"docs":{"3":{"tf":1.0}}},"8":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"5":{"df":1,"docs":{"1":{"tf":1.0}}},"6":{"4":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"9":{".":{"2":{"2":{"df":0,"docs":{},"e":{"1":{"8":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{".":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"5":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}},"b":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}},"i":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}},"t":{"df":1,"docs":{"3":{"tf":2.0}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"c":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.4142135623730951}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.7320508075688772}}}}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":3,"docs":{"2":{"tf":2.23606797749979},"3":{"tf":1.7320508075688772},"4":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"b":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"8":{"tf":1.7320508075688772}}}}},"x":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"10":{"tf":1.7320508075688772}}}}},"l":{"df":0,"docs":{},"o":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"w":{"df":1,"docs":{"7":{"tf":1.7320508075688772}}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":2,"docs":{"1":{"tf":2.23606797749979},"6":{"tf":1.7320508075688772}}}}}}},"df":0,"docs":{}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}},"h":{"a":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"l":{"df":1,"docs":{"10":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{".":{"c":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"n":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"1":{"tf":1.7320508075688772}},"e":{"<":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{".":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"/":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}}},"t":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"3":{"tf":1.7320508075688772}},"e":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":2.0}}},"r":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"l":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"'":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"i":{"b":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"7":{"tf":1.7320508075688772}}}}},"s":{"df":1,"docs":{"1":{"tf":1.0}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":2,"docs":{"1":{"tf":1.7320508075688772},"3":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"n":{"df":1,"docs":{"3":{"tf":1.0}},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"/":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}}}}},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"p":{"df":0,"docs":{},"l":{"a":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"9":{"tf":1.7320508075688772}}}}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}},"f":{"(":{"\"":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"df":1,"docs":{"1":{"tf":1.0}}}}}},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":2,"docs":{"1":{"tf":3.0},"2":{"tf":1.0}}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"9":{"tf":1.7320508075688772}}}}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}}},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}},"z":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"t":{"a":{"df":0,"docs":{},"n":{"d":{"a":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}},"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{".":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}},"u":{"c":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"h":{"a":{"df":0,"docs":{},"t":{"'":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.0}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":3,"docs":{"2":{"tf":2.0},"3":{"tf":2.0},"4":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}},"s":{"df":2,"docs":{"1":{"tf":2.23606797749979},"3":{"tf":1.0}}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"v":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"a":{"b":{"df":0,"docs":{},"l":{"df":4,"docs":{"1":{"tf":1.0},"2":{"tf":2.23606797749979},"3":{"tf":1.0},"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"!":{"\\":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}}},"title":{"root":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}},"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"10":{"tf":1.0}}}}},"l":{"df":0,"docs":{},"o":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{},"w":{"df":1,"docs":{"7":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"h":{"a":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"l":{"df":1,"docs":{"10":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.0}}}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"9":{"tf":1.0}}}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"9":{"tf":1.0}}}}}}},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"v":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"AND","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});