
/* Array String And Number Method */

let colors = ["Red", "Brown", "Yellow", "Gray", "White"];


//start se
//colors.push("Black"); // push end me value add krta hai
//colors.pop()  // pop end se value remove krta hai
//console.log(colors);

//End se
//my sir speak not recommended
//colors.unshift("Black") // unshift start se element add krta hai
//colors.shift() //shift start se element remove krta hai
//console.log(colors);


//console.log(colors.at(-1)); // array last value print 1st method
//console.log(colors[colors.length -1]); // array last value print 2nd method



let myArray = ["Yawar", "Ali", "Ahmed", "Saad", "raza", "Ahsan", "Ali"];

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/* array ko reassign kiya hai */
myArray[12] = "Sufiyan";
nums[13] = "Ali";

// console.log(myArray);
// console.log(nums);

// console.log(myArray.join('-')); //ye array ki value ko join krta hai

// console.log(myArray.reverse()); // reverse value ko ulta krta hai
// console.log(nums.reverse()); // reverse number ko ulta krta hai

const str = "shahwaiz"
// console.log('nums',str.length); // length array ki lenth batata hai or string ki bi but number ki length nhi batata

//console.log(myArray.sort()); // sort value ko alphabet ky sequence se likhta hai
//console.log(nums.sort()); // sort value ko alphabet ky sequence se likhta hai

// console.log(myArray.includes("Ali")); // includes array me elements ko search krta hai agr elements array mil jae tw true return krta hai 

let returnvalue1 = myArray.indexOf("Ali") // ye array ki index maloom krne ky liye use hota hai
// console.log("IndexOf", returnvalue1);

let returnvalue2 = myArray.lastIndexOf("Ali"); // ye array ki last-index maloom krne ky liye use hota hai
// console.log("IndexOf", returnvalue2);

let returnvalue3 = nums.indexOf(9)
// console.log(returnvalue3);

let fruits = ["Banana", "Orange", "Apple", "Peache"];
//console.log(fruits.slice(0,3)); // zero se 2 tak slice jese 0 se 3 tak diya hai ye 3 ko count nhi krta sirf 2 tak print hoga

/* Slice for example */
// let userInput = prompt("Enter a month");
// let userMonthLength = userInput.length;
// if (userMonthLength > 3 ) {
//     userInput = userInput.slice(0,3)
// }
// console.log(userInput);


let months = ['Jan', 'March', 'April', 'June']
months.splice(1, 0, "Feb");  //splice me hum value remove bi kr sakte hain or add bi kr sakte hain 
months.splice(4, 0, "May");
months.splice(3, 1)
console.log(months);

const arr5 = ['saqib', 'abid', 'ali', 'zahid']
arr5.splice(2, 0, "Zuhaib");
// console.log(arr5);

let p = "A man, a plan, a canal: Panama";
p = p.replace(" ", ""); // replace kisi bhi element ko replace kr deta hai
p = p.replaceAll(" ", ""); // replace jis bhi element ko ap replace krna chate ho replaceAll sab ko replace kr deta hai


// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = arr1.concat(arr2); //ye element ko mila deta hai
// console.log(arr3);


let myStr = "      My Name is shehzad iqbal this can       "
console.log(myStr);
console.log(myStr.trim()); // trim string se extra gap khatam krta hai
let myStr_split = myStr.split("") // ye value ko tor deta hai and ye numbers ko split nhi krta
let myStr_join = myStr_split.join(" ") // ye value ko join kr deta hai


let nums2 = 123456678;
// console.log(nums2.split("")); // split numbers ko split nahi karta
//console.log(nums2.length); // and numbers ki hum length maloom karengy tw undefined ayega 

const myArr = [1, 2, 3, 4, 5, 6]
console.log(myArr.length); // ye array ki length hai numbers ki length nahi 


let name = "shaHwaIz-ali";
console.log(name.toUpperCase()); // ye value ko capital krta hai
console.log(name.toLowerCase()); // ye value ko small krta hai
let firstAlpha = name.slice(0, 1).toUpperCase();
let baqiAlpha = name.slice(1).toLowerCase();
let final = firstAlpha + baqiAlpha;
// console.log(final);

let newText = "Hello World";

// console.log("nexText", newText.startsWith("W"));

// console.log("final",final.charAt(3)); // hum index de kr value maloom kr sakte hain  

// console.log(final.indexOf('H')); // ye value ki index maloon krta hai

// console.log(final.lastIndexOf('a')); // ye last wala a return karega 

//console.log(final.substring(0,8)); // ye akhiri index ko count nhi krta 0 se 7 tak value count krta hai

// console.log(final.split('-')); ye string ko array banata hai

const url = "https://github.com/shahwaiz%20qasim";

// console.log(url.replace('%20','-')); // hum string ko replace bhi krwa sakte hain

// console.log(url.includes('sundar')); // includes se hum check krwate hain ye string array me hai ya nhi

// console.log(url);


/* Number Method */
const score = 400;
// console.log(score);

const balance = new Number(100.44444444444);
// console.log(balance);
// console.log(balance.toString()); // ye number ko string bana deta hai
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // toFixed se hum point kay bad value ko control kar sakhte hain

const otherNumber = 23.8966;
// console.log(otherNumber.toPrecision(2)); // toPrecision me hum jitna number dengy wo itna hi number output me roundoff krky show karega

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));


let myText = "Hello My name is Syed Shahwaiz Shah And My father name is Shah ali";
let mytxt = myText.replace("hello", "Hi") // replace array me se ak string ko replace krta hai
let mytext = mytxt.replaceAll(/Shah/g,"Qasim"); // replaceAll string ya array me se multiple element ko replace kr deta hai
// console.log(mytxt);


// let str = 'hello world hello world'
// let strChange = str.replace(/world/g, 'Pakistan'); // ye sentence ko change krny ky kaam ayega
// document.write(strChange);

let fullName = "Shahwaiz"; // charAt()
//console.log(fullName.charAt(fullName.charAt())); // jese hum array ki index ko print krwate hai wese chatAt-function se hum string me se kisi alphabet ko print krwa sakte hain
//console.log(fullName.charAt(fullName.length-1)); // is sy hum string ka last alphabet print krwa sakte hain


/* ############################################# Maths #################################################### */

// console.log(Math);

// console.log(Math.abs(-4)); // ye negative number ko positive banata hai

// console.log(Math.round(4.7)); // ye number ko round of krta hai

// console.log(Math.ceil(4.1)); // point ky bad koi bi number ho ye round off krdeta hai

// console.log(Math.floor(4.9)); // ye point ky bad number ko count nhi krta

// console.log(Math.min(2,5,7,1)); // ye array me sab se chota number maloom krne ky liye hai

// console.log(Math.max(2,5,7,1)); // ye array me sab se bara number maloom krne ky liye hai


// console.log(Math.random()); // ye har bar refresh krny se new number genrate krta hai

// console.log((Math.random() * 10 ) + 2);

// console.log(Math.floor(Math.random()*10) + 1);

// let num = Math.random() * 2; // math.random screen refresh krne pr har bar new number genrate krta hai
// let secondnum = Math.floor(num); // Math.floor point ky bad ki values ko remove krta hai
// console.log(secondnum);

// const min = 10;
// const max = 20;
// console.log(Math.floor(Math.random() * (max - min + 1) + min));


// pracice username
// let userFullName = prompt("Enter your Full Name");
// let userName = `@${userFullName}${userFullName.length}`;
// console.log(userName);

