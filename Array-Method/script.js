
/* Array Method */
let myArray = ["Ali","Ahmed","Saad","Yawar"];
let nums = [1,2,3,4,5,6,7,8,9];

/* array ko reassign kiya hai */
//myArray[12] = "Sufiyan";
nums[13] = "Ali";

//console.log(myArray[12]);

//console.log(nums.join("-")); //ye array ki value ko join krta hai

//console.log(nums.reverse() && nums.length); // reverse value ko ulta krta hai or length array ki lenth batata hai

//console.log(myArray.sort()); // sort value ko alphabet ky sequence se likhta hai

//console.log(nums.sort(a,b) => a - b);

//console.log(myArray.includes("Shehzad"));

let returnvalue = myArray.indexOf("Sufiyan") // ye array ki index maloom krne ky liye use hota hai
console.log(returnvalue);

let fruits = ["Banana","Orange","Apple","Peache"];
console.log(fruits.slice(0,3)); // zero se 2 tak
