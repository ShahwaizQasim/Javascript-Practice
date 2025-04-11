let age = 40; //variable assign karna
age = 20; //age variable ko reassign krdia

//console.log(age);

//console.error("??"); //??

//Dry run
//console.log("test" + 2 + 2); //test22

//console.log("test" - 2 + 2); // Nan

//console.log("2" + 2 - 2); // 20

//console.log("2" - 2 - 2); // -2

// BODMAS Brackets Orders Division Multiplication
// console.log(3 + 5 * 7); // 38

//console.log((5 + 3) * 2); // 16

//console.log("test" + 2 * 2); //test 4

//console.log(("test + 2") * 2); // Nan

//javascript me kisi bi number par power ** se laghti hai
//console.log( 2 ** 3 ) // 8

//console.log("Power ",3 * 5 ** 4 * 2); // 3750

//console.log((5 + 5) * 8); // 80

//console.log(4 * (4 - 55) + 60 / 4); // -189

let x = 1;
let y = 2;
// console.log(!(x > y));

let x1 = false;
// console.log(!x1);

let result = 3 + 4 * (8 / 8);
console.log(result);

const arr = ["hi there"];
// arr = ["new value"]; // error
arr[1] = "Hi Syed";
arr.push(2);
arr.pop();
console.log("arr", arr);

/* 
 Modulus 
 jo value remainder ho ussy hum modulus kehte hain
 */
let nm1 = 15;
let nm2 = 4;
let res = nm1 % nm2;
//  console.log("Modulus: " + res);// 3
//  console.log(`${nm1} % ${nm2} = ${res}`); // backticks

//Examle
let num1 = 2;
let num2 = "2";
//console.log(num1 + num2); // 22
//console.log(num1 * num2);// 4

/* percentage nikalne ka tariqa */
//  let total_number = 1100;
//  let obtain_marks = 780;
//  let percentage = (obtain_marks / total_number) * 100 ;
//  console.log("Percentage: ", percentage);

// let total_number = prompt("Total Number");
// let obtain_marks = prompt("Obtain Marks");
// let percentage = (obtain_marks / total_number) * 100;
// alert("Your Percentage" + Math.floor(percentage));

/* salary increase karne ka tariqa */
let salary = 25000;
//  salary = salary + (salary/100) * 50; // salary 50% increse ki hai
salary += (salary / 100) * 50; // both are some
console.log(salary);

//  Even Number: 2,4,6,8,10
//  Odd Numbers: 1,3,5,7,9
