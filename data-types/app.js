//Data-Types

//string
let name = "Shahwaiz";
let name2 = "Shahwaiz"

let name3 = ""

//console.log(name===name2);

//number
let age = 20;

//boolean
let light_switch = true;
let dark_switch = false;

//undefined
let test;
let test2 = undefined;

//object
let empty = null;

//Symbol
/*symbol ki value same nhi hoti*/
let practice = Symbol("Ali");
let practice2 = Symbol("Ali");
//console.log(practice===practice2);

//BigInt
let number = 2775446789000875335763n;
//console.log(number);
//console.log(typeof number);

/*Difference Symbol & String*/
let str1 = "Shahwaiz";
let str2 = "Shahwaiz";
//console.log("These two string value are the same:" , str1 === str2);

let sym1 = Symbol("Javascript is sum"); 
let sym2 = Symbol("Javascript is sum"); 
//console.log("These two symbol value are the same:" , sym1 === sym2);

/*Difference Undefined & Null*/
let pr1 = undefined;
let pr2;
//console.log("Same Undefined:", pr1 === pr2);

let emp1 = null;
//console.log("Same Null:",pr2 === emp1);


/*
variable ki data type check krne ky liye hum typeof ka use krte hain
*/
//console.log( typeof test);


/*Seven Data-Types in Javascript
string = " "
number = 123
boolean = true/ false
undefined =
null = object standalone value
symbol = Symbol("sha")
bigint = BigInt(268890091982q91)
*/ 