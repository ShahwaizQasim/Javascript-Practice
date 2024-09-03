
let user = Number(prompt("Weather Check"));

let condition2 = String(user) === "NaN";
console.log('condition2', condition2);


/* agar condition true hogi tw if chalega warna else chal jaega */
if(condition2){
    alert("Allow Only Number");
}else{
if (user < 20) {
    // alert("Today wheather is Cold 😱😱")
    console.log("Today wheather is Cold 😱😱");
 }
 else{
//    alert("Today wheater is Hot 😨😨");
   console.log("Today wheather is Hot 😱😱");
 }
}

let myInput = document.querySelector("#my-input");
//let mybutton = document.querySelector("#my-button");
let form = document.querySelector("#wheather-form");
let mypara = document.querySelector("#wheather-update");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let tem = Number(myInput.value);
    let conditions = tem < 20;
    console.log(conditions);

    if (conditions) {
        mypara.innerText = "Today Wheather is Cold 😱😱"
    }
    else{
        mypara.innerText = "Today Wheather is Hot 😨😨"
    }

});



// let username = prompt("Enter Your Field");
// if (username === "IT" || username==="it") {
//   let userage = prompt("Enter Your Age");
//   if (userage >= 18 && userage <= 40) {
//     alert("You are selected");
//   } else {
//     alert("You are not selected");
//   }
// } else {
//   alert("Invalid Field");
// }


// let number = 10;
// let condition = number % 2 ===  0;

// if (condition) {
//     console.log(number + " is even");
// } else {
//     console.log(number + " is odd");
// }

// even number = 2,4,6,8,10
// odd number = 1,3,5,7,9

/* book practice */
let age = 10;
let cost = 0; 
let message;
if (age < 3) {
    cost = 0;
    message = "Access is free under three."
}else if(age >= 3 && age < 12){ // true condition
    cost = 5;
    message = "With the child discount, the fee is 5 dollars";
}else if(age >= 11 && age < 20){
    cost = 10;
    message = "A regular ticket costs 10 dollars";
}else{
    cost = 7;
    message = "A ticket is 7 dollars.";
}
 //console.log(`Message: ${message} Cost: ${cost}`); // string interpulation


// Let's Practice 

//  const userInput = prompt("Enter Your Number");
//  if (!Number(userInput)) {
//     alert("String Not Allow");
//  }
//  if (userInput % 5 === 0) {
//     console.log(`${userInput} is multiple of 5`);        
// }else{
//     console.log(`${userInput} is not multiple of 5`);        
// }


const score = 85;
let grade;

if (score >= 80 && score <= 100) {
    console.log(`Your Grade is A+`);
}else if(score >= 70 && score <= 79){
    console.log('Your Grade is A');
}else if(score >= 60 && score <= 69){
    console.log('Your Grade is B');
}else{
    console.log('You are Fail');
}