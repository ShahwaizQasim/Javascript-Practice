// While Loop

/* while loop 1 to 10 counting print */
let i = 1; // initialization
while (i <= 10) {
  // condition
//   console.log(i); // code
  i++; // incrementation
}

// Reverse Counting Method 1
let j2 = 1;
while (j2 <= 10) {
   // console.log(10 - j2);
   j2++
}

// Reverse Counting Method 2
let j = 10;
while (j > 0) {
  // console.log(j);
  j--;
}

/* Array Elements print for using while loop */
const StudentNames = ["Ali", "Wasid", "Basit", "Qasim"];
let w = 0
while (w < StudentNames.length) {
   // console.log(StudentNames[w]);
   w++
}


// practice
// let gameNum = 25;
// let UserInp = prompt("Guess the game number");
// if (!Number(UserInp)) {
//   alert("String Not Allow");
// }
// while (Number(UserInp) !== gameNum) {
//   UserInp = prompt("You entered wrong number. Guess Again :");
// }
// console.log("Congratulations, you enter the right number");


/* do While Loop */

// agr condition false hogi tw do/while loop ak bar execute hoga

let name1 = 0;
do {
  console.log("shahwaiz");
  name1++;
} while (name1 < 5);

// let bol1 = confirm("Hello");

let arr23 = ["Adil", "Kunal", "Wajid", "Qasim"];
let y = 0
do {
   console.log(arr23[y]);
   y++
} while (y < arr23.length);


let result;
// do {
//   let randomNum = Math.floor(Math.random() * 2);
//   // console.log(randomNum);
//   if (randomNum === 0) console.log("You Lose");
//   if (randomNum === 1) console.log("You Win");
// //   let result = confirm("Do You want to play again");
// } while (result);

let score = 11;
do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);

// Array Print using do-while loop
let array = [2, 4, 5, 6];
let i2 = 0;
do {
//   console.log(array[i2]);
  i2++;
} while (i2 < array.length);