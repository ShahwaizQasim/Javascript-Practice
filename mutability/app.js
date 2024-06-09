
/* obj aur array aur function hamesha const ky sath bane ga */
const arr = [1,2,3,4];
const copy = arr;
copy[1] = "Shahwaiz";
console.log(arr);
console.log(copy);

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

let id = "WMA-180991"
id.slice(0,2) // ye change nhi hoga because humne variable ko reassign nahi kiya
id = id.slice(4);
console.log(id);

const student = {name:"Azain", age:17};