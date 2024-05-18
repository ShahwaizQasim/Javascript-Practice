
/*
Class 1 
Function Introduction
*/

function dowork() { 
    //function ki definition
    console.log("Hello World");
}
//ye function ka reference hai or ye () call signature hai
//dowork();
//dowork();


// function helloUser(){
//     let userName = prompt("Enter Your Name");
//     let userName2 = Number(userName);
//     if (String(userName2) !== NaN) {
//         alert("Number Not Allow");
//     }else{
//     alert(`Hello ${userName} !`);
//     }
//     return userName;
// }
// helloUser();

// jidher se call hoga udher hi value return hogi
function addition(num1,num2){
    //num1 and num2 is perameter
    let result = num1 + num2;
    return result;
    //return "shehzad";
     //return last me hoga
    // return siuf ak bat ho sakta hai
    //return ky bad function nhi chlta

}
// koi function jb kuch bi return nhi krta tw undefined return krta hai
//console.log(addition(5, 5));

/* 
Class 2 Function
*/

function average(numArr){
              //perameter
    let sum = 0;
    for (let i = 0; i < numArr.length; i++) {
        //sum += numArr[i];
        sum = sum + numArr[i];
    }

    let avg = sum / numArr.length;
     
    return avg;
}
//console.log(average([5,7,3,6,9,6])); // arguments
//console.log(average([5,7,14])); // arguments


/* Default Perameter */
function sum(num1,num2 = 0){
    let addition = num1 + num2;
    return addition;
 }
 //console.log(sum(4)); // agr hum ak argument pass karengy tw wo default perameter ki value lega


 /* Arrow Function */
let subtraction = (a, b = 1) => {
    let minus = a - b;
    return minus;
}
//console.log(subtraction(5,8));


/* IIFE = Immediately Invoked Function Expression */

(function () {
    console.log("hello!");
})()
//console.log();


/* rest operator using in arrow function*/

let multiply = (a, b, ...c) => {
    let result = a * b;
    for (let i = 0; i < c.length; i++) {
        //console.log(c[i]);
        result = result * c[i];
    }
    return result;
}
//console.log(multiply(1,3,4,5,6,7,2));

/* array & function */
const myArray = [15,20,35,55,77];

function arrayValuesControl(getArray){
     return getArray[3];
}
//console.log(arrayValuesControl(myArray));
//console.log(arrayValuesControl([200,500,100,3000]));


//activity
const muFun = () => 6 * 4 - 24;
console.log(muFun() ? "agaya samajh" : "nahi aaya samajh"); // nahi aya samajh


function loginUser(usermessage){
    if (!usermessage) {  // agr user apna name nahi input karega tw ye if ki condition chalegi 
        console.log("Please Enter your name");
        return;
    }
    return `${usermessage} just Loggedin`;
}
//console.log(loginUser());


/*array me duplicate element ko dhoonda hai*/
let array = [1,2,3,4,5,1]; 

function myarray(){
    array.sort();
    for (let i = 0; i < array.length; i++) {
        //console.log(array[i]);
        if (array[i] === array[i + 1]) {
            console.log("hello");
            return true;
        }
    }
    return false;
}
//console.log(myarray()) ;

