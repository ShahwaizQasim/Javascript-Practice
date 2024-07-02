 
/* for of loop */

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5,6]

for (const nums of arr) {
    //console.log(nums);
}

const greetings = "Hello World";

for (const greets of greetings) {
    // console.log(greets);
}


// maps
 
const map = new Map();
map.set("Pak","Pakistan");
map.set("Tur","Turkey");
map.set("Pal","Palestine");

// console.log(map);

for (const key of map) { // aese pura map print ho jaega 
    console.log(key);
}

// Array Destructuring
for (const [key,value] of map) { //aese key or value dono ko alag alag bi print krwa sakte hain
    //console.log(`${key} , ${value}`);
}



const obj = {
    game1: "GTA",
    game2: "IGI"
}

for (const oj of obj) {  // for of loop object pr kaam nhi krta
    console.log(oj, obj[oj]);
}