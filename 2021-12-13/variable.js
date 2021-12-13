// Cache Memory -> Fastest, Size-> kb or mb, Costly
// Primary Storage ->  RAM {Random Access Memory} -> Volatile, Fast, Size -> GB, Less costly then Cache
// Secondary Storage -> ROM {Read only Memory} eg. SSD, HDD -> Non Valatile, Size -> GB, TB, cheap

// Q. What is a Variable?
// Ans. A variable is memory location with stores a value. It acts as a container to store program data in memory.

// There are 3 ways to declare a JavaScript variable:
// 1. var -> can declare multple times with same name, changable
// 2. let -> can only declare once, changable
// 3. const -> can only declare once, not changable

var a = 10
console.log(a)

var b = 20
console.log(b)

var name = "Chander Mohan Pundhir"
console.log("Hello "+name)

var c = a + b
console.log(c)

// change vlue of a
a = 20
console.log(a)

// using let to declare variable
let x = 18
let y = 19
let z = x + y
console.log(z)

// using const
const SHINCHAN_AGE = 5
const shinchan_age = 6
console.log(SHINCHAN_AGE)
console.log(shinchan_age)


// naming convetions for varibales
/*
1. Names can contain letters, digits, underscores, and dollar signs.
2. Names must begin with a letter
3. Names can also begin with $ and _ (but we will not use it in this tutorial)
4. Names are case sensitive (y and Y are different variables)
5. Reserved words (like JavaScript keywords) cannot be used as names
*/


