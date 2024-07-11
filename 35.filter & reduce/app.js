
/* Filter */ 

let Arr = [1,2,3,4,5,6,7,8,9,10]; // original array change nhi hota \

 // filter ky ander jo callback hota hai wo do value hi return karta hai true/false jis bi value ky liye true return hoga wo new array ky ander ho jaega
const EvenNumber = Arr.filter ((nums1) => {
    return nums1 % 2 !== 0;
})
// console.log('EvenNumbers', EvenNumber);

const BigNumber3 = Arr.filter ((nums2) => {
    return nums2 > 3;
})
// console.log(BigNumber3);


let marks = [85,75,90,70,88,40]

const toppersArr = marks.filter((numb) => {
    return numb >= 80;
})
// console.log( 'Above Percentages', toppersArr);



/* Reduce */ 

// All numbers in plus 
let Arr2 = [1,2,3,4,5];

const sumArr = Arr2.reduce((prev, curr) => { // reduce se pury array ko plus krwa dia
    return prev + curr;
})
// console.log('Sum Array' , sumArr);


// find the largest number in array 
let bigNumInArray = [6,4,8,2,9];

const largestNum = bigNumInArray.reduce((prev, curr ) => {
    return prev > curr ? prev: curr;
})
// console.log("largestNumber", largestNum);


// practice

let n = prompt("Enter Your Numbers"); // user se numbers liye hain

if (!Number(n)) {  // agr number nahi hon tw alert chal jaega 
    alert("String Not Allow");
}else{

let arr = []; // user jo number input karega wo array me push ho jaega
for (let i = 1; i <= n; i++) {
    arr[i-1] = i; //1(0), 2(1), 3(2), 4(3) // is tariqa se numbers ayengy loop me or hr number me se 1 ko minus krwa diya
}
console.log(arr);

let sum = arr.reduce((prev, curr) => {
    return prev + curr; // array ky all numbers ko plus karwaya hai
})
console.log('Sum', sum);

let factorial = arr.reduce((prev, curr) => {
      return prev * curr; // array ky all numbers ko multiply karwaya hai
})
console.log('Factorial', factorial);

}
