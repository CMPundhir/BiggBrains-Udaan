// Q. What are Data types?
// Ans. JavaScript variables can hold different data types: numbers, strings, objects and more.

let name = "Chander Mohan Pundhir" // string
let age = 12 // number
let wallet = 100.50 // floating point number
let probalityOfPitayi = 123e-5
let isHavingScooty = true // boolean
let laptop = { // object
	"brand" : "Apple",
	"product" : "Macbook Pro",
}
let subjects = ["English", "Hindi", "Mathematics", "Science", "SSC"]

// method to check type of variable
console.log(typeof(name))
console.log(typeof(age))
console.log(typeof(wallet))
console.log(typeof(probalityOfPitayi))
console.log(typeof(isHavingScooty))
console.log(typeof(laptop))

// print object
console.log(laptop)
console.log(laptop.brand)

console.log(probalityOfPitayi)

// print array of subjects
console.log(subjects)
// access elements via index
console.log(subjects[2])
console.log(subjects[0])
