
/* foreach loop */

let coding = ["c++","js","php","python","java","c"];

coding.forEach(function(val1){  // 1st Method
//   console.log(val1);
})

coding.forEach(loop); // 2nd Method
function loop(val1) {  // hum arrow function bi use kar sakte hain
    // console.log(val1);     
}



coding.forEach((index, values) => { 
//   console.log(`Items ${index} Index ${values}`);
})


const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js",
    },
    {
        languageName: "Python",
        languageFileName: "pyt",
    },
    {
        languageName: "Java",
        languageFileName: "java",
    },
]
myCoding.forEach((item) => {
    // console.log(item.languageName);
    // console.log(item.languageFileName);
})


const myArr2 = [1,3,2,4,5,66,7];

// myArr2.forEach((item) => {
//     console.log(`Item ${item}`); 
//     return "shehzad";
// }) 


/* forEach value return nahi karta */
const forEachReturn = myArr2.forEach((item) => {
    // console.log(`Item ${item}`);
    return "shahwaiz";
})

// console.log("ForEachReturn", forEachReturn);


/* Map */

myArr2.map((item) => {
    // console.log("MapItem", item);
})

/* map value return karta hai */ 
const MapFunctionReturn = myArr2.map((item) => {
    // console.log(item);
    return "shahwaiz"
})
// console.log("MapFunctionReturn", MapFunctionReturn );


// map function
const mapFunction = (elements) => {
//    console.log("Elements", elements);
   return elements * elements;
}
const mapReturn = myArr2.map(mapFunction); // map me function ko pass kiya hai
// console.log(mapReturn);


const square = myArr2.map((item) => item * item); // array ka number ka square
// console.log(square);


/* Sorting Numbers */ 
const myArr3 = [4,2,5,1000,-10,-4,1];

const sortFunction = (a, b ) => {
    // console.log("sortFunction a:", a);
    // console.log("sortFunction b:", b);

    const test = a - b;

    return test;
}
// myArr3.sort(sortFunction);
// console.log(myArr3);

myArr3.sort((a,b) => b - a); // descending order = largest to small 9 to 0 
myArr3.sort((a,b) => a - b); // ascending order = smallest to largest, 0 to 9
// console.log(myArr3);
console.log(myArr3);