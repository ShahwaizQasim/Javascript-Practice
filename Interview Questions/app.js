

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
// write a function akk Array banao uss multiple values daalo or jab se vari value ussy print krwa do 

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

