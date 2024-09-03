/* Swap Variables */

/* a ki value b me chahiye and b ki value a me chaiye */

let a = 5;
let b = 15;


/* 1st with another variable */
let temporary = a;
a = b;
b = temporary;


/* 2nd */
//a = a + b; //20
//b = a - b; //5
//a = a - b; // 15
//console.log(`a = ${a} b = ${b}`);


/* 3rd */
//[a,b] = [b,a]
//console.log(`a = ${a} b = ${b}`);


// console.log(`a = ${a} b = ${b}`);


// practice  
// swaping

let one = 2;
let two = 4;

// 1st 

// temporary1 = one;
// one = two;
// two = temporary1;


// 2nd

// one = one + two; //6
// two = one - two; // 2
// one = one - two // 4


// 3rd 

[one,two] = [two,one]


console.log(`one = ${one} two = ${two}`);


