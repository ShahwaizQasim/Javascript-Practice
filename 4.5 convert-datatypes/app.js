/*string convert to number*/

let name = "3.9"
name = Number(name); // 1st method
//name = parseInt(name); // 2nd method pareseInt me point ky bad wali ko configure nhi krta
//name = parseFloat(name); // 3rd method
//name = +name; // 4th method
console.log(name, typeof name);

/*
 "12345" => 12345
 33abc => Nan
 shahwaiz => Nan
*/



/* number convert to string */

let number = 12345;
number = String(number);
//console.log(number, typeof number);



/* number convert to boolean */

let somenumber = 2;
let boolean_somenumber = Boolean(somenumber);
console.log(boolean_somenumber);

/* 
1 => true , 0 => false
"" = false
"shahwaiz" => true
*/

/*
let strToNr2 = "hello";
strToNr2 = Number(strToNr2);
console.log(strToNr2, typeof strToNr2); //ans Nan number
*/


let message = "Hello";
//message = message + "World!"// boths are same
message += "World!"
console.log(message );