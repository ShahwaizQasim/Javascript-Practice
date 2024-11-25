

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

[a,b] = [b,a]
console.log(`a = ${a} and b ${b}`);


// Question 2
// write a function akk Array banao uss me multiple string store krwao Task ye hai array me jo string sab se bara hai ussy print krwa do

function findLargestValue(arr){
    let largestValue = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > largestValue.length) {
            largestValue = arr[i]
        }
    }
    return largestValue;
}

const arr = ["hello", "I","helloShahwaiz"]
console.log(findLargestValue(arr));



// Q3)
//  ak Array me String store krwo phr unko reverse krwo without use in built-in function like reverse 
const reversedArray = (arr) => {
    let reversedArray = [];
    for (let i = arr.length-1; i >= 0 ; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

const reverseArr = ["ahsan", "qasim", "junaid","talha"];
console.log("ReversedArray", reversedArray(reverseArr));


// const reversArray = ["Ali","Qasim","Junaid","Kashif","Hassan"]
// for (let i = reversArray.length-1; i >= 0; i--) {
//     console.log(reversArray[i]);
// }

// console.log(reversedArray(reversArray));

// for (let i = 10; i >= 0; i--) {
//     console.log(i);
    
// }


