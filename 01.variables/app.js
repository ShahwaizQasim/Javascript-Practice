//   practice

//valid variables name
let module_one_passed_students; // snake case
let balance1; // end me number bi use kar sakte hain
let $hello; // $ se start bi kr sakte hain
let _hello;

// variables name 
let fullName; // camel case
let full_name; // snake case
let FullName; // pascal case

//variables

//variables assign kardia
const id = 8597;
let country = "Pakistan";
var city = "Karachi";

//variables ko reassign krdia
// id = 8675 //not allow
country = "India"
city = "Lahore";
console.log(city);


/*
let variable me ak bar jo variable ko name de dia tw dusri bar let variable me wo name nhi de sakte jo humne pehly variable ko name diya tha
 wana error ayega

 let ko hum re-decalare nahi kar sakte but update kar sakte hain.
 */
let name = "syed shahwaiz";
// let name = "Qasim Ali" // error
console.log(name);

/*
var variable hum use nhi krte because var variable ko jub hum name dete hain agr phr se variable ko wohi name dengy tw pehly wali 
variable ki value change ho jaegi or bad waly variable ki value print ho jaegi
*/
var num = 40;
{
  var num = 20;
}
console.log(num);


/* var problem = var me hum kisi bi variable ko re-decalare kar sakte hain */
var age = 20;
var age = 43;
var age = 20;
console.log(age);


/*
const ko hum change nhi kr sakhte or na hi update kar sakte hain.
*/
const pi = 3.142;
//pi = 1.42 //error
console.log(pi);

//backtics
let language = "Javascript";
let message = `Let's learn ${language}`; // backtick = template literals
console.log(message);

// \n se line chane hoti hai 
let counting = " Shahwaiz \n Qasim" ;
console.log(counting); 