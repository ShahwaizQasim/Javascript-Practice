
/* foreach loop */

let coding = ["c++","js","php","python","java","c"];

coding.forEach(function(val1){  // 1st Method
//   console.log(val1);
})

coding.forEach(loop); // 2nd Method
function loop(val1) {  // hum arrow function bi use kar sakte hain
    // console.log(val1);     
}



coding.forEach((index, values) => { // ye dono perameters ak value ko get karega and second index bataega
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

let myName = "ShahwaizQasim"; 
// myName.forEach((string) => { // forEach Loop string pr apply nhi hoga agar krongy apply tw error ayega
//     // console.log(string);
// })

const myArr2 = [1,3,2,4,5,66,7];

// myArr2.forEach((item) => {
//     console.log(`Item ${item}`); 
//     return "shehzad";
// }) 


/* forEach value return nahi karta */
const forEachReturn = myArr2.forEach((item) => {
    // console.log(`Item5 ${item}`);
    // return item;
})
// console.log("ForEachReturn", forEachReturn);

let NumsArr = [3,4,5,9,2,3];
NumsArr.forEach((nums) => {
    // console.log(nums ** 2);
    // console.log(nums * nums); // both are same
})

/* Map */

let myArr3 = [2,3,5,9]
myArr3.map((item) => {
    console.log("MapItem", item);
})

/* map value return karta hai */ 
const MapFunctionReturn = myArr2.map((item) => {
    // console.log(item);
    return item;
})
console.log("MapFunctionReturn", MapFunctionReturn );


// map function
const mapFunction = (elements) => {
//    console.log("Elements", elements);
   return elements * elements;
}
const mapReturn = myArr2.map(mapFunction); // map me function ko pass kiya hai
// console.log(mapReturn);


const square = myArr2.map((item) => item * item); // array ka number ka square
// console.log(square);
