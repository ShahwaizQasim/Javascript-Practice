/* forin loop */

const myObj = {
  js: "javascript",
  cpp: "C++",
  rb: "Ruby",
  swift: "swift by apple",
};
for (const key in myObj) {
  // forin loop Object pr kaam kr raha hai and forof loop obj pr kaam nhi kr raha
//   console.log(`${key} => ${myObj[key]}`);
}

const programming = ["js", "py", "php", "c"];
// console.log(programming[0]);
for (const key in programming) {
  // console.log(key); // forin me aese array ki key ayengi
  //console.log(programming[key]); forin loop me aese array ki value print krwate hain
}

// const map = new Map();
// map.set("Pak","Pakistan");
// map.set("Tur","Turkey");
// map.set("Pal","Palestine");

// for (const key in map) {
//    console.log(key);
// }
