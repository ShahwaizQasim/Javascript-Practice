// Question 1

// Swap Variables

// First
let a = 10;
let b = 20;

let temp = a;
a = b;
b = temp[
  //  Second
  // a = a + b
  // b = a - b
  // a = a - b;

  // third

  (a, b)
] = [b, a];
// console.log(`a = ${a} and b ${b}`);

// Question 2
// write a function akk Array banao uss me multiple string store krwao Task ye hai array me jo string sab se bara hai ussy print krwa do

function findLargestValue(arr) {
  let largestValue = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > largestValue.length) {
      largestValue = arr[i];
    }
  }
  return largestValue;
}

const arr = ["hello", "I", "helloShahwaiz"];
// console.log(findLargestValue(arr));

// Q3)
//  ak Array me String store krwo phr unko reverse krwo without use in built-in function like reverse
const reversedArray = (arr) => {
  let reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
};

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
  let stringReverse = "";
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
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
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
      } else if (i % 3 === 0) {
        arr8.push("Fizz");
      } else if (i % 5 === 0) {
        arr8.push("Buzz");
      } else {
        arr8.push(i);
      }
    }
  }
  return arr8;
}

const arr8 = [];
const n1 = 50;

// console.log(ProblemFizzbuzzSolve(arr8, n1));

// Q9) Problem: Longest Sub String without repeating characters

function LongestStringWithoutRepeat(str) {
  let longest = "";
  let current = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // If the character is already in the current substring
    if (current.includes(char)) {
      // Remove all characters up to and including the repeated character
      current = current.slice(current.indexOf(char) + 1);
    }

    // Add the current character to the substring
    current += char;

    if (current.length > longest.length) {
      longest = current;
    }
  }

  return longest;
}

let str = "abcbba";
// console.log(LongestStringWithoutRepeat(str));

//Q10) An array will be given to you , in the array there will be some of the strings written , so you have to find it out by comparing two
// different strings together with each other . Those array element strings which are palindrome will be printed out in the console as True and those
// which are not palindrome will be printed out as False.

//Q)Write a function given array and check array index  if array index palindrome here true show if array index not palindrome here false show

// Input: ["madam", "hello", "world", "level", "radar"]

// Output: [Yes, No, No, Yes, Yes]

function PalindromeChecker(arr) {
  let reverseArray = [];
  let resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    reverseArray.push(arr[i].split("").reverse().join(""));
    if (arr[i] == reverseArray[i]) {
      resultArray.push(reverseArray[i]);
    } else {
      resultArray.push("not palindrome");
    }
  }
  return resultArray;
}

const arr10 = ["madam", "wasid", "husnain", "level", "racecar"];
// console.log(PalindromeChecker(arr10));

// Question_11

// Here you are required to find the factorial of any number given to us

const factorialFact = (n) => {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial = i * factorial; // 720
  }
  return factorial;
};

const num = 6;
// console.log(factorialFact(num));

// Q12) String Palindrom Check

let str3 = "racecar3";

function StringPalindrome(str3) {
  let str = str3;
  let reverseStr = str3.split("").reverse().join("");
  let result = str === reverseStr;
  return result;
}

// console.log(StringPalindrome(str3));

// Q13) Remove Duplicates from an array without using sets

function RemoveDuplicateArray(array) {
  // return [...new Set(array)] // JavaScript me Set ko use karna sabse best hai, kyunki ye automatically duplicates ko remove kar leta hai.

  let uniqueArr = [];
  for (let i = 0; i < array.length; i++) {
    if (!uniqueArr.includes(array[i])) {
      uniqueArr.push(array[i]);
    }
  }
  return uniqueArr;
}

const array = [2, 3, 4, 5, 6, 2, 7, 8, 2, 9, 0];
// console.log(RemoveDuplicateArray(array));
