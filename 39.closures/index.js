
// Closures in JavaScript ko kyu use karte hain?
// Closures JavaScript me is liye use hote hain kyunki ye functions ko unki surrounding scope ke variables yaad rakhne ka option dete hain,
// even agar outer function execute ho chuka ho. Ye cheez bohot powerful hai aur alag-alag scenarios me kaam aati hai.

function Outer(){
    let name = "Syed Shahwaiz";
    function inner(){
        console.log(name);
    }
    return inner
}

const closureFunction = Outer();

closureFunction();