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
// console.log(x);

let y = 6;
y -= 6;
//y = y - 6; 
// console.log(y);


let z = 4;
z += 4
z *= 2
// console.log(z);



/* Comparison Operator */

let a1 = 20;
let b1 = 20;

// console.log( a1 == b1 )  // =>  ye sirf value check krta hai 
// console.log( a1 === b1 ) // =>  ye value or data-type dono check krta hai
// console.log( a1 != b1 ) // =>  ye != sirf value check karega data-type nhi
// console.log( a1 !== b1 ) // =>  ye !== value bi check karega or data type bi 
// console.log( a1 > b1 ) // => Greater Than
// console.log( a1 < b1 ) // => Less Than
// console.log( a1 >= b1 ) // => a1 ki value bari ho ya a1 ky braber ho b1 ki value
// console.log( a1 <= b1 ) // => b1 ki value bari ho ya b1 ky braber ho a ki value


/* Logical Operators */

// || Or operator
// && Operator
// !

let num1 = 5;
let num2 = 10;

// Or Operator
/* Or operator me ak bi value true tw condition true */
//console.log( false || false); //false
//console.log( true || false); //true

//Example
if (num1 > num2 || num1 < num2) {
//     console.log(true);
}else{
//     console.log(false);
}

//&& Operator
/* && operator me ak bi value false tw condition false*/
//console.log(false && true); // false
//console.log(true && true); // true

//Example
if (num2 > num1 && num1 < num2) {
//     console.log(true);
}else{
//     console.log(false);
}


// && (Logical AND):
// Jab tak falsy value nahi milti, tab tak evaluate karta hai. Pehli falsy value return karta hai. Agar sab truthy hain, to last truthy value return karta hai.
let test2 = true && "shehzad";
let test3 = "shehzad" && true;
let test4 = null && "shehzad" && 56;
let test = "shehzad" && null && 56;
let test5 = true && "shehzad" && 56;
let test6 = true && 0 && 56;
let test7 = "hh" && null;
let test8 = "hh" && "kk";

// || (Logical OR):
// Jab tak truthy value nahi milti, tab tak evaluate karta hai. Pehli truthy value return karta hai. Agar sab falsy hain, to last falsy value return karta hai.
let test9 = "shehzad" || true;
//console.log(test9);
let test10 = "" || null;
let test11 = "" || true;
let test12 = "shehzad" || 0 || null || true;
let test13 = null || "shehzad" || 56;
let test14 = true || "shehzad" || 56;
let test15 = false || 0 || 56;
let test16 = "hh" || null;
let test17 = "hh" || "kk";


let a = 5;
let b = 10;
let c = 20;
let d = 30;
console.log(a > b || b > a); // true
console.log(a > b && b > a); // false
console.log(d > b || b > a); // true
console.log(d > b && b > a); // true
