let card = false;
let fee = false;
let assignment = false;
let time = 9.1;

/* agar ak bi condition false hoi tw else chalega */
// if(card == true && fee == true){
//     console.log("Study Kro");
// }else{
//     console.log("Ghr joa");
// }

/* nested if else */
// if (card === true) {
//   if (fee === true) {
//     if (assignment === true) {
//       if (time < 9) {
//         if (time < 8.5) {
//           console.log("Study in Class");
//         } else {
//           console.log("time par ao wrna khare ho kr class lo");
//         }
//       } else {
//         console.log("Dafa ho joa ghr");
//       }
//     } else {
//       console.log("Assignment Banoa abhi class me");
//     }
//   } else {
//     console.log("Fee pay kro");
//   }
// } else {
//   console.log("Card Banwao");
// }


if (!card) console.log("Card Banwao");
if (!fee) console.log("Fee Pay Kro");
if (!assignment) console.log("Abhi Class me Assignment Banao");
if (time > 9) console.log("dafa ho joa");
if (time > 8.5) console.log("time pr ao class me");


/* Vote System */

let age = prompt("Enter Your Age");
if (age >= 18) {
    document.write("You Can Vote <br/>");
    if (age >= 60) {
        document.write("You can two times vote");
    }
}
else{
    document.write("You Can not Vote <br/>");
    if (age <= 10) {
        document.write("You can must go to the school");
    }
}