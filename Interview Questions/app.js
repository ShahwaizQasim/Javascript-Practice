

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
console.log(`a = ${a} and b ${b}`);


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
console.log(findLargestValue(arr));



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
console.log("ReversedArray", reversedArray(reverseArr));


// Q4)
// apna name print krwao 10 times without loop

// first-Method
function printName(times) {
    if (times > 0) {
        //     console.log("Shahwaiz");
        printName(times - 1); // Recursive call
    }
}

printName(10);

// second-Method
// console.log(Array(10).fill("Shahwaiz").join("\n"));


// third method 
let count = 0;

function printShahwaiz() {
    if (count <= 10) {
        // console.log("Shahwaiz");
        count++;
        setTimeout(printShahwaiz, 0); // Call function again asynchronously
    }
}

printShahwaiz();


// Q5
// without buil-in function string ko reverse karwaya hai 
const reverseString = (str) => {
    let emptyString = "";
      for (let i = str.length - 1; i >= 0 ; i--) {
        emptyString += str[i]
      }    
    return emptyString; 
  }
  
  console.log(reverseString('Shahwaiz'));
  
  
