
// Switch Case 

// Switch case JavaScript ka conditional statement hai, jo ek hi variable ya expression ke multiple values ke against code ko check karta hai. 
// Har value ke liye ek case hota hai, aur jab case ka match milta hai to us case ka code run hota hai. Agar koi bhi case match nahi karta, to default block chalta hai. 
// Switch case me break statement zaruri hota hai, because jo case match ho jaye uska so uss sy jo next case ho wo execute na ho warna execution agle cases me bhi chala jata hai 

/* switch case syntax */

// switch (expression){
//     case value 1;
//     // code to be executed
//     break;

//     case value 2;
//     // code to be executed
//     break;

//     case value n;
//     // code to be executed
//     break;

//     default;
//     code to be executed agr in case me se koi case match nho hota tw default code execute hoga;
//     break;
// }

/* user se input lekr ativity check ki hai */

let userInput = prompt("Activity");
let firstAlpha = userInput.slice(0,1).toUpperCase();
let baqiAlpha = userInput.slice(1).toLowerCase();
let final = firstAlpha + baqiAlpha;

switch (final) {
    case "Get up":
    console.log("It is 6:30am");
    break;

    case "Breakfast":
    console.log("It is 7:30am");
    break;

    case "Lunch":
    console.log("It is 1:30pm");
    break;

    case "Dinner":
    console.log("It is 8:30pm");
    break;
}

/* user se input ky zarya grade maloom kiya hai */

// let gradeCheck = prompt("Enter your Grade");

// if (gradeCheck === gradeCheck.toLowerCase()) {  // agr user apna grade ka letter small likhta hai tw if ki condition chalegi
//     console.log("plz enter your grade is Capital");
// }else{

// switch (gradeCheck) {
//   case "A+":
//   case "A one":
//     console.log("Congratulations your grade is A+");
//     break;

//   case "A":
//     console.log("Congratulations your grade is A");
//     break;

//   case "B":
//     console.log("your grade is B");
//     break;

//   case "C":
//     console.log("your grade is C");
//     break;

//   case "D":
//   case "E":
//     console.log("you are fail");
//     break;

//   default:
//     console.log("I don't know this grade");
//     break;
// }
// }

