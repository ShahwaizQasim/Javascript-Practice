/*string convert to number*/

let name = "3.922"
// name = Number(name); // 1st method
// name = parseInt(name); // 2nd method pareseInt me point ky bad wali value ko configure nhi krta
// name = parseFloat(name); // 3rd method
name = +name; // 4th method
console.log(name, typeof name);

/*
 "12345" => 12345
 33abc => NaN
 shahwaiz => NaN
*/



/* number convert to string */

let number = 12345;
number = String(number);
//console.log(number, typeof number);



/* number convert to boolean */

let someNumber = 0;
let boolean_someNumber = Boolean(someNumber);
console.log('Boolean Number', boolean_someNumber); 

/* 
1 => true , 0 => false
"" = false
"shahwaiz" => true
*/

/*
let strToNr2 = "hello";
strToNr2 = Number(strToNr2);
console.log(strToNr2, typeof strToNr2); //ans NaN number
*/


let message = "Hello";
//message = message + "World!"// boths are same
message += "World!"
console.log(message );