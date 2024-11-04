/*
prompht se hum user se input lete hain
*/
let username = prompt("Enter your name");
alert("Welcome Mr. " + username);

let num1 = prompt("First Value");
let num2 = prompt("Second Value");

/*
string ko number me convert kiya hai
*/
num1 = Number(num1);
num2 = Number(num2);

let sum = num1 + num2;
let minus = num1 - num2;
let multiply = num1 * num2;
let divide = num1 / num2;

console.log("Addition : " + sum);
console.log("Minus : " + minus);
console.log("Multiplication : " + multiply);
console.log("Division : " + divide);

/* hum prompt ky input me value bi show kr sakte hain */
let num4 = prompt("First Value", "shahwaiz");

// agar variable me kuch define nhi hoga tw undefine store hoga
let shahwaiz; //undefined
//bad khali varibale ko value de sakte hain
shahwaiz = 50;
console.log(shahwaiz);
