//Operators

/*Arithmetic Operators*/

// + = Addition
// - = Subtraction
// * = Multiplication
// ** = Exponentiation
// --x, ++x = prefix increment & decrement
// x--,x++ = postfix increment & decrement
// % = Modulus (Remainder)


/*Assignment Operators*/

// x += 5 => x = x + 5
// x -= 5 => x = x - 5
// x *= 5 => x = x * 5
// x /= 5 => x = x / 5
// x %= 5 => x = x % 5

//Example
let x = 5 ;
x += 4; // same
//x = x + 4; same
console.log(x);

let y = 6;
y -= 6;
//y = y - 6; 
console.log(y);


/* Comparison Operator */

let a = 20;
let b = 20;

//console.log( a == b )  // =>  ye sirf value check krta hai 
//console.log( a === b ) // =>  ye value or data-type dono check krta hai
//console.log( a != b ) // =>  ye != sirf value check karega data-type nhi
//console.log( a !== b ) // =>  ye !== value bi check karega or data type bi 
//console.log( a > b ) // => Greater Than
//console.log( a < b ) // => Less Than
//console.log( a >= b ) // => a ki value bari ho ya a ky braber ho b ki value
//console.log( a <= b ) // => b ki value bari ho ya b ky braber ho a ki value


/* Logical Operators */

// || Or operator
// && Operator

let num1 = 5;
let num2 = 10;

// Or Operator
/* Or operator me ak bi value true tw condition true */
//console.log( false || false); //false
//console.log( true || false); //true

//Example
// if (num1 > num2 || num1 < num2) {
//     console.log(true);
// }else{
//     console.log(false);
// }

//&& Operator
/* && operator me ak bi value false tw condition false*/
//console.log(false && true); // false
//console.log(true && true); // true

//Example
// if (num2 > num1 && num1 < num2) {
//     console.log(true);
// }else{
//     console.log(false);
// }

