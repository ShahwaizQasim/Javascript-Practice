/* truthy values sari true hoti hain */

/* falsy values 7 hoti hain in 7 value ky elawa sari value truthy hoti hain */
// false
// 0
// -0
// 0n
// " "
// null
// undefined
// NaN


//array
const myArray = [1,"hello",false];

//object
const myobject = {
    name: "hitesh",
    age: 22,
}

//function
let myFunction = function(){
  console.log("Hello World");
}



//let boolean = Boolean("sha");
//console.log(boolean);



// Or Operator
/* Or operator me ak bi value true tw condition true */

//console.log( false || false); //false
//console.log( true || false); //true

let test1 = false || true || false;
// console.log(test1);

let food = true;
let tea = false;
let drink = false;

if (food || tea || drink) {
    // console.log("le aao");
  } else {
    // console.log("ghar jao");
  }


//&& Operator

/* && operator me ak bi value false tw condition false */

//console.log(false && true); // false
//console.log(true && true); // true

let x = 1;
let y = 2;
let z = 3;

// if (x < y > z) {
// }
// console.log(x < y && y < z && x == 1); //true

let isEnroll = true;
let passed = true;
let age = 20;

if (isEnroll && passed && age > 18) {
  console.log("Pharai karo class ma");
} else {
  console.log("ghar jao");
}


// aakhir me truthy value return kare ga
let test2 = true && "shehzad";
let test3 = "shehzad" && true;
let test4 = null && "shehzad" && 56;
let test = "shehzad" && null && 56;
let test5 = true && "shehzad" && 56;
let test6 = true && 0 && 56;
let test7 = "hh" && null;
let test8 = "hh" && "kk";

// Phale truthy value return kare ga
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
