
// Closures in JavaScript ko kyu use karte hain?
// Closure ek function hota hai jo apny lexical scope ke variables ko retain karta hai,
// even jab outer function execute ho chuka ho.

// Iska use hum data persistence aur encapsulation ke liye karte hain — jaise private variables create
// karna ya kisi function ke andar state maintain karna.

// Encapsulation ka matlab data ko hide karna aur sirf controlled methods ke through access dena, 
// taake data secure aur manageable rahe.

function Outer(){
    let name = "Syed Shahwaiz";
    function inner(){
        console.log(name);
    }
    return inner
}

const closureFunction = Outer();

closureFunction();