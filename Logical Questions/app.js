

// Question 1

// Swap Variables

// First 
let a = 10;
let b = 20;

// let temp = a
// a = b
// b = temp


//  Second 
// a = a + b
// b = a - b
// a = a - b;

// third

[a, b] = [b, a]
// console.log(`a = ${a} and b ${b}`);


// Question 2
// write a function akk Array banao uss me multiple string store krwao Task ye hai array me jo string sab se bara hai ussy print krwa do

function findLargestValue(arr) {
    let largestValue = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > largestValue.length) {
            largestValue = arr[i]
        }
    }
    return largestValue;
}

const arr = ["hello", "I", "helloShahwaiz"]
// console.log(findLargestValue(arr));



// Q3)
//  ak Array me String store krwo phr unko reverse krwo without use in built-in function like reverse 
const reversedArray = (arr) => {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

const reverseArr = ["ahsan", "qasim", "junaid", "talha"];
// console.log("ReversedArray", reversedArray(reverseArr));


// Q4)
// apna name print krwao 10 times without loop

// first-Method
function printName(times) {
    if (times > 0) {
        console.log("Shahwaiz");
        printName(times - 1); // Recursive call
    }
}

// printName(10);

// second-Method
// console.log(Array(10).fill("Shahwaiz").join("\n"));


// third method 
let count = 0;
function printShahwaiz() {
    if (count <= 10) {
        console.log("Shahwaiz");
        count++;
        setTimeout(printShahwaiz, 0); // Call function again asynchronously
    }
}
// printShahwaiz();

// Q5
// ak string lo usko reverse karna hai without built-in function it's mean reverse use nahi karna

function ReverseString(str) {
    let stringReverse = '';
    for (let i = str.length - 1; i >= 0; i--) {
        stringReverse += str[i];
    }
    return stringReverse;
}

// console.log('String Reverse', ReverseString("level"));


// Q6
// palindrome value check ki hai 
function checkPalindrome(str) {
    let stringCheck = str;
    let stringReverse = str.split("").reverse().join("");
    let result = stringCheck == stringReverse;
    return result;
}

// console.log("checkPalindrome", checkPalindrome("LEVEL"));


// Q7
// Write a function that takes a positive integer a as input and prints numbers from 1 to a with the following conditions
// 1)For numbers divisible by both 3 and 5, print "FizzBuzz".
// 2)For numbers divisible by only 3, print "Fizz".
// 3)For numbers divisible by only 5, print "Buzz".
// 4)For all other numbers, print the number itself.

let n = 50;

function ProblemSolve(n) {
    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log("FizzBuzz");
            }
            else if (i % 3 === 0) {
                console.log("Fizz");
            }
            else if (i % 5 === 0) {
                console.log("Buzz");
            }
            else {
                console.log(i);
            }
        }
    }
}

// ProblemSolve(n);


// Q8)"Write a function that implements the FizzBuzz logic and stores the results in an array. The function should take two parameters: an empty 
// array and a number n. It should return the array with processed results."

function ProblemFizzbuzzSolve(arr8, n1) {
    if (n1 > 0) {
        for (let i = 1; i <= n1; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                arr8.push("FizzBuzz");
            }
            else if (i % 3 === 0) {
                arr8.push("Fizz");

            }
            else if (i % 5 === 0) {
                arr8.push("Buzz");
            }
            else {
                arr8.push(i)
            }
        }
    }
    return arr8;
}

const arr8 = [];
const n1 = 50;

console.log(ProblemFizzbuzzSolve(arr8, n1));


