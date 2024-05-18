
let student1 = ['web','cit','graphics','ali',25,];  // sequential data
//console.log(student1[1]);

/* Object Literal */
let Course = "Web and Mobile App Development";

let userName = "Your Name"

let student2 = {
   // key : // value
   [userName] : "Shahwaiz",
   age : 20,
   Course: Course,
   Batch: "batch 11",
   isAbsent: true,
   hobbies:['cricket','coding','sleeping'], // array in object
   myteacher:{name: "Shehzad", age: 24,},
   test: {}, // this is empty object
}
//console.log(student2); // objects print

//console.log(student2.Course); // objects name print

//console.log(student2.hobbies[2]); // objects ky ander se array print krwaya hai

//console.log(student2.myteacher.age); // objects ky ander se object print krwaya hai

//console.log(undefined.age); // undefined me . krky kuxh nikalogy tw error ayega 
//console.log(student2?.myteacher?.name); // ? error ki jaga undefined show krwa dega


let mobile = {
  ram: 8,
  modal: "A5S",
  company: "Iphone",
  company: "OPPO",  // Iphone ko overwrite krdia
  isGaming: "false",
  0: "shehzad",
  1: "Shahwaiz",
  2: "Qasim",      // not recommended
}

let a = "company"; 
//mobile[a] = "Realme" object ki company ko dubara reassign kiya hai
console.log(mobile.a); // . se undefined ayega agr key ko object ky bhr kisi variable me store kiya ho tw undefined ayega
console.log(mobile[a]); // [] se jo bi key ki value hogi print ho jaegi
console.log(mobile[0]); // looks like array because array is a construct





/* Chai our code Youtube series practice */

let mySym = Symbol("hello");
//console.log( typeof mySym); // data-type symbol hai

let jsUser = {
   "full name": "Syed Shahwaiz",
   age: 20,
   email: "syedshahwaiz32@gmail.com",
   location: "Karachi",
   [mySym]: "hello", // object ki key pr square bracket lagany se ye symbol ban jata hai
   isLoginDays: ["Monday",'Tuesday'],
 }

 //console.log(jsUser["full name"]);
 //console.log(jsUser.age);
 //console.log(typeof jsUser[mySym]); // object ky ander symbol ki data type bi string a rhi hai

 jsUser.email = "syedshahwaiz@google.com";
 Object.freeze(jsUser); // Object.freeze lagany se agr bad me koi key ki value change krni ho tw change nhi kr sakte 
 //console.log(jsUser.email);
 //jsUser.email = "syedshahwaizmicrosoft.com"; // iski value chnge nhi hogi beacause object.freeze laga hoa hai 
 //console.log(jsUser.email);

//  jsUser.greeting = function () {
//     console.log("Hello User!");
//  }
//  console.log(jsUser.greeting());

//  jsUser.greetingTwo = function(){
//    console.log("Hello Js");
//  }
//  console.log(jsUser.greetingTwo());


 // JSON = javascript object notation

