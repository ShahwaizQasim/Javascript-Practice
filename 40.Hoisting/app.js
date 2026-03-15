
// Hoisting JavaScript mein ek default behavior hai jismein declarations (variable ya function ki 
// declaration) ko JavaScript engine automatically unke current scope ke top pe le jaata hai — code
// execute hone se pehle.

// Yeh actually code physically move nahi hota, bas memory allocation phase mein declarations pehle
// process ho jaati hain.

// Main 3 cheezein hoisted hoti hain:


// 1) Function declarations (poori function hoisted hoti hai — declaration + definition dono)

greet();           // Kaam karega → "Hello!"
function greet() {
  console.log("Hello!");
}


// 2) var variables (sirf declaration hoist hoti hai, value nahi — default value undefined hoti hai)
console.log(x);    // undefined
var x = 10;
console.log(x);    // 10
// JavaScript ke nazar mein yeh code aisa behave karta hai:
var x;             // declaration hoist ho gayi
console.log(x);    // undefined
x = 10;            // assignment yahin rehti hai


// 3) let aur const (declaration hoist hoti hai lekin value nahi — aur yeh Temporal Dead Zone (TDZ) mein rehte hain)
console.log(y);    // ReferenceError: Cannot access 'y' before initialization
let y = 20;

JavaScriptconsole.log(z);    // ReferenceError
const z = 30;

// Yani let/const ko declare karne se pehle use karne ki koshish karo to ReferenceError aayega (TDZ ki wajah se),
// jabke var mein sirf undefined milta hai.


// TDZ (Temporal Dead Zone)
// TDZ (Temporal Dead Zone) wo time hota hai jab let aur const variables scope me hoote hain lekin
// initialize nahi huay hote. Agar initialization se pehle access karein to ReferenceError aata hai.