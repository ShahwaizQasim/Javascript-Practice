
let student1 = ['web','cit','graphics','ali',25,];  // sequential data
// console.log(student1[1]);

/* Object Literal non squential data */

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
// console.log(student2); // objects print

// console.log(student2[userName]); // objects name print

// console.log(student2.hobbies[2]); // objects ky ander se array print krwaya hai

// console.log(student2.myteacher.age); // objects ky ander se object print krwaya hai

// console.log(undefined.age); // undefined me . krky kuxh nikalogy tw error ayega 
// console.log(student2?.myteacher?.name); // ? error ki jaga undefined show krwa dega 

// ? ko optional chaining kehty hain

let a1 = "name";
let mobile = {
  name: "shahwaiz",
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
// console.log(mobile.a1); // . se undefined ayega agr key ko object ky bhr kisi variable me store kiya ho tw undefined ayega
// console.log(mobile[a1]); // [] se jo bi key ki value hogi print ho jaegi
// console.log(mobile[0]); // looks like array because array is a construct


const course = {
  StudentName: "Syed Shahwaiz Qasim",
  Institute: "SMIT",
  fees: 500,
  Days: "Tuesday, Thursday, Saturday",
  CourseInstructor: "Shehzad Iqbal",
  Information: {
    Institute: "Saylani Mass IT Training Program",
    Saylani_Goal: "Pakistan",
  }

}
// console.log(course.Information.Institute);
// console.log(course.fees);



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


//  const tinderUser = new Object();   // singleton Object

const tinderUser = {};  // non singleton Object
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(Object.keys(tinderUser)); // ye objects ki key array ki form me print krwata hai
// console.log(Object.values(tinderUser)); // ye objects ki value array ki form me print krwata hai
// console.log(Object.entries(tinderUser)); // ye array ky ander nested array me key or value ko print krwata hai

//console.log(tinderUser);


const regularUser = {
  email:"syedshahwaiz@gmail.com",
  fullName:{ 
    userfullname:{
      firstName: "Syed",
      lastName: "Shahwaiz",
    }
  }
}

//console.log(regularUser.fullName.userfullname.lastName);


const obj1 = {1: "a", 2: "b"};
const obj2 = {2: "a", 3: "b"};
const obj3 = {4: "a", 5: "b"};

//const obj4 = { obj1, obj2, obj3}; // object concat krny ka method1
//const obj4 = Object.assign({}, obj1, obj2, obj3); // object concat krny ka method2
const obj4 = { ...obj1, ...obj2, ...obj3}; // object concat krny ka method3
//console.log(obj4);


/* Array of Objects */
const users = [
  {
    id: 1,
    email: "syed@gmail.com",
  },
  {
    id: 2,
    email: "qasim@gmail.com",
  },
  {
    id: 3,
    email: "wasid@gmail.com",
  },
] 

//console.log(users[0].id);


/* Object DeStructure */

// const course = {
//   coursename: "js in hindi",
//   price: "Free",
//   courseInstructor: "Hitesh",
// }

//course.courseInstructor 

/* Object DeStructuring */
// const {courseInstructor: instructor} = course; // object ki key ko aese bhi print krwa sakte hain
// console.log(instructor);


const {name,age} = {name:"shahwaiz",age:21};
// console.log(name);
// console.log(age);

// [
//   {},
//   {},
//   {},
// ]


const myObj = {
  name:"Shehzad",
  age:20,
  smit:"saylani",
  hobbies:["cricket","coding","eating"],
  myBoolean:false
}
  
const myKey1 = "hobbies";
console.log(myObj[myKey1]); // array will be printed in object