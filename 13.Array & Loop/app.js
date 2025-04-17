// let myArr = ["Ali","Asad","Bilal","Ahsan","Abrar"];
// console.log("Array Length", myArr.length);

/* value ak ak krky print krwany se bhter hai loop se ak hi dafa print krwa len */

// console.log(myArr[0]);
// console.log(myArr[1]);
// console.log(myArr[2]);
// console.log(myArr[3]);
// console.log(myArr[4]);

// for (let i = 0; i < myArr.length; i++) {
//     document.write(myArr[i], "<br/>");
// }

/* Array ky andher Value ko search krne ka tariqa */
let basket = ["Apple", "Banana", "Grapes", "Watermelon", "Pineapple"];

let ArrSearch = false; // flag variable

for (let i = 0; i < basket.length; i++) {
  if (basket[i] == "Grapes") {
    ArrSearch = true;
    break;
  }
}
if (ArrSearch == true) {
  console.log("Grapes Mil Gaye");
} else {
  console.log("Grapes Nhi mily");
}


const studentArray = ["ALi", "Ahsan", "Waqarw", "Haider", "Qasim"]
let arraySearch = false;

for (let i = 0; i < studentArray.length; i++) {
   if (studentArray[i] === "Waqar" ) {
       arraySearch = true;
       break
   }
}
if (arraySearch === true) {
  console.log("Student Mil Gaya"); 
}else{
  console.log("Student Nhi Mila");
}

/* splice array se value ko remove krta hai or jahan se remove krta hai wahin pr add bi krdeta hai */
basket.splice(1, 3, "Fruit", "Vegetables", "S");
// console.log(basket);

/* Student RollNumber */    

let student_rollNumber = [
  1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032,
];
let user_student = prompt("Enter Your Roll Number");
let userWin = false;

for (let i = 0; i < student_rollNumber.length; i++) {
  if (Number(user_student) === student_rollNumber[i]) {
    userWin = true;
    break;
  }
}

if (userWin) {
  alert("Allow my class");
} else {
  alert("Not Allow my class");
}
