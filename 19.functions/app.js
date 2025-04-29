/*
Class 1 
Function Introduction
*/

function dowork() {
  //function ki definition
  console.log("Hello World");
}
//ye function ka reference hai or ye () call signature hai
//dowork();
//dowork();

// function helloUser(){
//     let userName = prompt("Enter Your Name");
//     let userName2 = Number(userName);
//     if (String(userName2) !== NaN) {
//         alert("Number Not Allow");
//     }else{
//     alert(`Hello ${userName} !`);
//     }
//     return userName;
// }
// helloUser();

// jidher se call hoga udher hi value return hogi
function addition(num1, num2) {
  //num1 and num2 is perameter
  let result = num1 + num2;
  return result; // jb hum return pass nhi krte tw phir undefined print hota hai
  //return "shehzad";
  //return last me hoga
  //return ky bad function nhi chlta
}
// jb hum function me koi argument pass nhi krte tw phr NaN return krta hai
console.log("Addition", addition(15, 15));

/* 
Class 2 Function
*/

function average(numArr) {
  //perameter
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    //sum += numArr[i];
    sum = sum + numArr[i];
  }

  let avg = sum / numArr.length;

  return avg;
}
//console.log(average([5,7,3,6,9,6])); // arguments
//console.log(average([5,7,14])); // arguments

/* Default Perameter */
function sum(num1, num2 = 0) {
  let addition = num1 + num2;
  return addition;
}
// console.log(sum(4,5)); // agr hum ak argument pass karengy tw wo default perameter ki value lega

/* Arrow Function */
let subtraction = (a, b = 1) => {
  let minus = a - b;
  return minus;
};
//console.log(subtraction(8,5));

/* IIFE = Immediately Invoked Function Expression */

(function () {
  // console.log("hello!");
})();
//console.log();

/* rest operator using in arrow function*/

let multiply = (a, b, ...c) => {
  let result = a * b;
  for (let i = 0; i < c.length; i++) {
    //console.log(c[i]);
    result = result * c[i];
  }
  return result;
};
//console.log(multiply(1,3,4,5,6,7,2));

/* array & function */
const myArray = [15, 20, 35, 55, 77];

function arrayValuesControl(getArray) {
  return getArray[1]; // getArray se hum array ky element ko pakr sakte hain
}
// console.log(arrayValuesControl(myArray));
//console.log(arrayValuesControl([200,500,100,3000]));

//activity
const muFun = () => 6 * 4 - 24;
// console.log(muFun() ? "nahi aaya samajh" : "agaya samajh"); // nahi aya samajh

function loginUser(usermessage) {
  if (!usermessage) {
    // agr user apna name nahi input karega tw ye if ki condition chalegi
    // console.log("Please Enter your name");
    return;
  }
  return `${usermessage} just Loggedin`;
}
//console.log(loginUser());

/*array me duplicate element ko dhoonda hai*/

function myarray(array) {
  array.sort();
  for (let i = 0; i < array.length; i++) {
    //console.log(array[i]);
    if (array[i] === array[i + 1]) {
      console.log("hello");
      return true;
    }
  }
  return false;
}

let array = [1, 2, 3, 4, 5];
// console.log(myarray(array)) ;

// rest operator
function myFun(...shah) {
  console.log("shawaiz");
  return shah;
}
console.log("myFunc", myFun("ali", "azain", "wasid"));

let count = 0;
function countVowels(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
    if (
      string[i] === "a" ||
      string[i] === "e" ||
      string[i] === "i" ||
      string[i] === "o" ||
      string[i] === "u"
    ) {
      count++;
    }
  }
  console.log("Vowels", count);
}
countVowels("Qasim");

// Practice

// isNaN() check karta hai ki koi value number hai ya nahi — agar number nahi hai, to true return karega, aur agar number hai, to false.
// isNaN("Ali");     // true  → "Ali" is not a number
// isNaN("123");     // false → "123" can be converted to number

function showUserName() {
  // const userName = prompt("Enter your Name");
  // if (!isNaN(userName)) {
  //   console.log("Number Not Allow");
  // } else {
  //   console.log(`Hello ${userName}`);
  // }
}
showUserName();

function AverageArray(arr) {
  console.log(arr);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let result = sum / arr.length;
  return result;
}

const arr = [2, 4, 6, 7, 8, 10];
console.log(AverageArray(arr));
