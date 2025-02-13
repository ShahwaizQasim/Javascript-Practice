
/* Scopes Of Function */

/* let & const global-variables hon tw block-scopes me mil jaty hain */

// let a = 10;
// const b = 20;
// var c = 30; // var global-variables hon or hum block-scopes me call krwayen

if (true) {
//   console.log(a);
//   console.log(b);
//   console.log(c);   
}

/* agr hum local-variables me let & const banaega tw hum inko block-scopes ky ander hi use kr sakte hain agr hum block-scopes ky bhr call krwaengy
 tw error ayega */
// easy words = let & const scopes ky ander banaega tw ye scopes kay bhr nhi milengy

var c = 80; // var hamy scopes kay under bi milega or bhr bi
if (true) {
    let a = 20;   // let => bahar wali chez andar mile gyi andar wali bahar nhi mile gyi
    const b = 40;
    var c = 60; // chahy var scopes ky ander ho ya bhr ye var mil jata hai 
}
// console.log(a);
// console.log(b);
// console.log(c); // var scopes wali value print hogi


let x = 5;
{
    x = 6;
}
x += 1;
//console.log(x); // 7


// chai our code series practice

function one(){

    const username = "Shahwaiz";
    
    function two(){
        const website = "Youtube";
        //console.log(username);
    }

    // console.log(website); // error website is not defined

    two()

}

one();



if (true) {
    const username = "Qasim";
    if (username === "Qasim") {
        const website = "Youtube";
       // console.log(`${username} ${website}`);
    }
    // console.log(website); // error
}


// ++++++++++++++++++++++++++++++++++interesting++++++++++++++++++++++++++++++++

// console.log(addone(5));
function addone(num){  // is function ko hum is function se pehly bi print karwa sakty hain  beacuse humne is function ko sirf decalre kiya hai
   return num + 1;
}

 
// Hoisting

console.log(addTwo(5)); // Error
/* is function ko hum is function se pehly access nhi kar sakte because humne is funcyion ko sirf decalar nhi kiya 
is function ko humne ak variable me store krdia */
const addTwo = function(nums){  
    return nums + 2;
}


// Javascript Scopes 


// 1) Global Scope 

// Agar aap variable ko function ke bahar declare karte ho, to vo globally available hota hai.
// Example
// var a = 10; // Global variable
// console.log(a); // Accessible anywhere in your code



// 2) Block Scope 

// ES6 me let aur const introduce hue, jo block-level scoping provide karte hain.
// Iska matlab hai ke agar aap variable ko kisi block (jaise if, for, while, etc.) ke andar declare karte
// ho, to vo sirf us block ke andar accessible hota hai.

// Example

// if (true) {
//     let c = 30; // Block-scoped variable
//     console.log(c); // Accessible yahan
// }
// console.log(c); // Error: c is not defined, kyunki yeh block ke bahar accessible nahi hai



// 3) Function Scope 

// Variables jo ek function ke andar declare hote hain, vo sirf us function ke andar hi accessible hote
// hain.
// Example
// function myFunction() {
//     var b = 20; // Function-scoped variable
//     console.log(b); // Accessible here
// }
// myFunction();
// console.log(b); // Error: b is not defined, kyunki yeh function ke bahar accessible nahi hai



// Summary:
// Global Scope: Variable ko code ke kahin se bhi access kiya ja sakta hai.
// Function Scope: Variable sirf function ke andar available hota hai.
// Block Scope: let aur const se declare kiye hue variables sirf unke block ke andar available hote hain.
// Lexical Scoping: Variable ka scope uski declaration location se determine hota hai.
// Closures: Inner functions outer variables ko access aur remember karte hain, jo powerful aur useful technique hai.