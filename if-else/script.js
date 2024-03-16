
// let user = Number(prompt("Wheather Check"));
//console.log(user)

//let condition = String(user) === "NaN"
//console.log(condition);

/* agar condition true hogi tw if chalega warna else chal jaega */
// if(condition){
//     alert("Allow Only Number")
// }

// if (user < 20) {
//    alert("Today wheather is Cold 😱😱")
// }
//warna
// else{
//   alert("Today wheater is Hot 😨😨")
// }

/*
let myinput = document.querySelector("#my-input");
//let mybutton = document.querySelector("#my-button");
let form = document.querySelector("#wheather-form");
let mypara = document.querySelector("#wheather-update");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let tem = Number(myinput.value);
    let conditions = tem < 20;
    console.log(conditions);

    if (conditions) {
        mypara.innerText = "Today Wheather is Cold 😱😱"
    }
    else{
        mypara.innerText = "Today Wheather is Hot 😨😨"
    }

});
*/


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


let number = 10;
let condition = number % 2 ===  0;

if (condition) {
    console.log(number + " is even");
} else {
    console.log(number + " is odd");
}