
/* Changing Case */


let name = "shaHwaIz-ali";
//console.log(name.toUpperCase()); //ye value ko capital krta hai
//console.log(name.toLowerCase()); //ye value ko small krta hai
let firstAlpha = name.slice(0,1).toUpperCase(); 
let baqiAlpha = name.slice(1).toLowerCase();
let final = firstAlpha + baqiAlpha;
//console.log(final);

let newText = "Hello World";
console.log(newText.startsWith("H"));



// let cars = ['Alto','Mehran','Cultus','Corolla','Civic','Brv'];
// let userinp = prompt('Enter Your Car Name');
// let firstAlpha = userinp.slice(0,1).toUpperCase(); // user agr input me pehla alphabet small letter me likhy ga tw wo capital ho jaega 
// let baqiAlpha = userinp.slice(1).toLowerCase();
// let final = firstAlpha + baqiAlpha;
// let match = false;

// for (let i = 0; i < cars.length; i++) {
//     if (final === cars[i]) {
//         match = true;
//         break;
//     }
// }

// if (match == true) {
//     alert(final + " Car Hai gi");
// }else{
//     alert(final + " Car nahi hai");
// }

let citiesNames = ['lahore','karachi','islamabad','rawalpindi','multan','hyderabad','sukkar','quetta'];
let UserCity = prompt('Enter Your City');
let arrayAlpha = UserCity.slice(0).toLowerCase();
let userNumber = Number(arrayAlpha);
let match = false; // falg variable

if (String(userNumber) !== NaN) {
   alert("Number not Allow");   
}else{
for (let i = 0; i < citiesNames.length; i++) {
    if (arrayAlpha === citiesNames[i]) {
       match = true;
       break;        
    }
}
if (match === true) {
    alert("Your Right City Name");
}else{
    alert("Your Wrong City Name");
}
}