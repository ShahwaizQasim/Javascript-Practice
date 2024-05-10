/* Nested if/else */

// let age = prompt("Enter Your Age");
// if (age >= 18) {
//     document.write("You Can Vote <br/>");
//     if (age >= 60) {
//         document.write("You can two times vote");
//     }
// }
// else{
//     document.write("You Can not Vote <br/>");
//     if (age <= 10) {
//         document.write("You can must go to the school");
//     }
// }

/* if else value return nahi krta */
/* ternory value return krta hai */
/* if / else */

// let isOpen = true;
// let isLocked = false;
// let message = "";

// if (isOpen) {
//   message = "Gate is Open";
// } else {
//   message = "Gate is Close";
// }
//console.log(message);

/* Ternory Operator */

//first method
//  message = isOpen ? "Gate is Open" : "Gate is Close";
//  console.log( message);

//second method
// message = `Gate is ${isOpen ? "Open" : "Close"} and gate is ${
//   isLocked ? "Locked" : "unlocked"
// } !`;

/* Nested Ternary */
// condition
//   ? "if pehli condition true hai tw ye return hoga"
//   : condition
//   ? "second condition true"
//   : "dono false hain";

// console.log("Message", message);

// ternory 
let login = false;
let outputHolder = "";
let userOkay = login ? (outputHolder = "logout") : (outputHolder = "login");
console.log(userOkay); // answer login


 let val = 100;
// let message = (val > 100) ? `${val} was greater than 100` :
// `${val} was LESS or Equal to 100`;
// console.log(message);

// let check = (val % 2) ? `Odd` : `Even`;
// check = `${val} is ${check}`;
// console.log(check);