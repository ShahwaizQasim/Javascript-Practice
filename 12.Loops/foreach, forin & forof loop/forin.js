
/* forin loop */

const myObj = {
    js: "javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "swift by apple"
}
for (const key in myObj) {  // forin loop Object pr kaam kr raha hai and forof loop obj pr kaam nhi kr raha
   // console.log(`${key} => ${myObj[key]}`);
}

const programming = ["js","py","php","c"];
// console.log(programming[0]);
for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map();
// map.set("Pak","Pakistan");
// map.set("Tur","Turkey");
// map.set("Pal","Palestine");

// for (const key in map) {
//    console.log(key);    
// }