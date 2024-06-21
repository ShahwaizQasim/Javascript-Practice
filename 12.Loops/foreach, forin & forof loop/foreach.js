
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
  //console.log(`Index ${index} Item ${values}`);
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
    console.log(item.languageName);
})