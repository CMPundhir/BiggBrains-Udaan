function factorial(n) {
	if(n<=0){
		return 1;
	}
	let res = 1;
	for (var i = n ; i > 0; i--) {
		res *= i;
	}
	return res;
}


function recursionFactorial(n) {
	if(n<=1){
		return 1;
	}
	return n * recursionFactorial(n-1);
}


let fact6 = recursionFactorial(6);
let fact9 = recursionFactorial(9);

console.log(`Factorial of 6 = ${fact6}`)
console.log(`Factorial of 9 = ${fact9}`)