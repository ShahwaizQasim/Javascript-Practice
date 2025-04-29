
/* obj aur array aur function hamesha const ky sath bane ga */
const arr = [1, 2, 3, 4];
const copy = arr;
copy[1] = "Shahwaiz";
// console.log(arr);
// console.log(copy);

/*
 only b will be change not a because these are primitive values 
 primitive kabhi change nhi hota
 primitive ki changed copy save hoti hy
*/
let myName = "Ali";
let duplicate = myName;
duplicate = "Wasid";
// console.log(myName);
// console.log(duplicate);

let a = 3;
let b = a;
b = 4;
// console.log(a);
// console.log(b);

let id = "WMA-180991";
id.slice(0, 2); // ye change nhi hoga because humne variable ko reassign nahi kiya
id = id.slice(4);
// console.log(id);

// non-primitive types me object ki dusre variable me copy nahi banti
const student = { name: "Azain", age: 17 };
const anotherStudent = student;
const ayan = anotherStudent;
ayan.name = "Ayan"; // ayan me bi wahi wala same original object (on line 34) store hy
//console.log(anotherStudent);
//console.log(student);
//console.log(ayan);

const obj = { name: "Ahsan" };
obj.name = "Qasim"; // this is allowed
//obj = {name: "Abdullah"}; // Error: const se variable banaya hai humne (line no 43) me const variable ko hum reassign nhi kar sakte
//console.log(obj);

// kis bi cheez ko freeze krna ho tw hum object.freeze lagate hain
const user = Object.freeze({ name: "Muzaffar" });
user.name = "Hussain"; // object me se name change nhi hoga because mene (line no 49) me object.freeze lagaya hai
//console.log(user.name);

/* Rules 

1. var hum use nhi krenga 
2. let wahan use karenga hum jahan value ko reassign krna hoga
3.const har jaga use karenga (everywhere)

*/

const API_KEY = "https://myserver.com";
let sum1 = (a, b) => a + b; // valid but not a good idea
const sum2 = (a, b) => a + b;

const PROVICE_OF_PAKISTAN = Object.freeze([
  "LAHORE",
  "KARACHI",
  "ISLAMABAD",
  "MULTAN",
]);
