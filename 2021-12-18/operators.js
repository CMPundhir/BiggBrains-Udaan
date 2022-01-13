// Q. What is Operator?
// Ans. An operator, in computer programing, is a symbol that usually represents an 
// action or process. These symbols were adapted from mathematics and logic. An 
// operator is capable of manipulating a certain value or operand.

/*
Q. Types of operators?
Ans. 1. Arithmetic Operators
		a. +	Addition
		b. -	Subtraction
		c. *	Multiplication
		d. **	Exponentiation (ES2016)
		e. /	Division
		f. %	Modulus (Division Remainder)
		g. ++	Increment
		h. --	Decrement

*/

let x = 5
let y = 2
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x ** y)
console.log(x / y)
console.log(x % y)
console.log(x++) // post increment
console.log("x => "+x) 
console.log(++x) // pre increment
console.log(x--) // post decrement
console.log("x => "+x) 
console.log(--x) // pre decrement


/*
Q. Assignment Operators?
Ans. 
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
**=	x **= y	x = x ** y
*/


x **= y
console.log("x **= y => "+x)


/*
Comparision Operators

==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator

*/

console.log( 10 == 10) // true
console.log( "10" == 10) // true
console.log( "10" === 10) // false


let age = 12
if(age >= 18){
	console.log("It's Party time")
}else{
	console.log("Party kal karenge")
}

// ternary operator

let msg = age <18 ? "Tum bache ho" : "Tum bade ho"
console.log(msg)


/*
Logical operators

&&	logical and
||	logical or
!	logical not
*/


let schoolKiChhutti = true
let tuitionKiChhutti = true

if(schoolKiChhutti && tuitionKiChhutti){
	console.log("Moz karnege")
}else{
	console.log("Padayi karnege")
}


