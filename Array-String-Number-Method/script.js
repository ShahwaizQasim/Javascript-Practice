
/* Array String And Number Method */

let colors = ["Red","Brown","Yellow","Gray","White"];


//start se
//colors.push("Black"); // push end me value add krta hai
//colors.pop()  // pop end se value remove krta hai
//console.log(colors);

//End se
//my sir speak not recommended
//colors.unshift("Black") // unshift start se element add krta hai
//colors.shift() //shift start se element remove krta hai
//console.log(colors);


//console.log(colors.at(-1)); // prints last value prrint 1st method
//console.log(colors[colors.length -1]); // last value print 2nd method



let myArray = ["Yawar","Ali","Ahmed","Saad","raza","Ahsan","Ali"];

let nums = [1,2,3,4,5,6,7,8,9];

/* array ko reassign kiya hai */
// myArray[12] = "Sufiyan";
// nums[13] = "Ali";

//console.log(myArray[12]);
//console.log(nums[13]);

//console.log(myArray.join('-')); //ye array ki value ko join krta hai

//console.log(myArray.reverse()); // reverse value ko ulta krta hai
console.log(nums.reverse()); // reverse number ko ulta krta hai

//console.log(nums.length); // length array ki lenth batata hai

//console.log(myArray.sort()); // sort value ko alphabet ky sequence se likhta hai
//console.log(nums.sort()); // sort value ko alphabet ky sequence se likhta hai

//console.log(nums.sort(a,b) => a - b);

//console.log(myArray.includes("Shehzad"));

//let returnvalue1 = myArray.indexOf("Ali") // ye array ki index maloom krne ky liye use hota hai
//let returnvalue2 = myArray.lastIndexOf("Ali"); // ye array ki last-index maloom krne ky liye use hota hai
//let returnvalue3 = nums.indexOf(9)
//console.log(returnvalue2);

//let fruits = ["Banana","Orange","Apple","Peache"];
//console.log(fruits.slice(0,3)); // zero se 2 tak


 let months = ['Jan','March','April','June']
//  months.splice(1,0,"Feb");  //splice me hum value remove bi kr sakte hain or add bi kr sakte hain 
//  months.splice(4,0,"May"); 
//months.splice(3,1)
//console.log(months);



// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = arr1.concat(arr2); //ye element ko mila deta hai
// console.log(arr3);


let myStr = "      My Name is shehzad iqbal this can       "
//console.log(myStr);
//console.log(myStr.trim()); //trim string se extra gap khatam krta hai
//let myStr_split = myStr.split(" ") //ye value ko tor deta hai
//let myStr_join = myStr_split.join(" ") //ye value ko join kr deta hai

let name = "shaHwaIz-ali";
//console.log(name.toUpperCase()); //ye value ko capital krta hai
//console.log(name.toLowerCase()); //ye value ko small krta hai
let firstAlpha = name.slice(0,1).toUpperCase(); 
let baqiAlpha = name.slice(1).toLowerCase();
let final = firstAlpha + baqiAlpha;
//console.log(final);

//console.log(final.charAt(3)); // hum index de kr value maloom kr sakte hain  

//console.log(final.indexOf('H')); // ye value ki index maloon krta hai

//console.log(final.lastIndexOf('a')); // ye last wala a return karega 

//console.log(final.substring(0,8)); // ye akhiri index ko count nhi krta 0 se 7 tak value count krta hai

// console.log(final.split('-')); ye string ko array banata hai

const url = "https://github.com/shahwaiz%20qasim";

//console.log(url.replace('%20','-')); // hum string ko replace bhi krwa sakte hain

//console.log(url.includes('sundar')); // includes se hum check krwate hain ye string hai ya nhi

//console.log(url);


/* Number Method */
const score = 400;
// console.log(score);

const balance = new Number(100.44444444444);
// console.log(balance);
// console.log(balance.toString()); // ye number ko string bana deta hai
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // toFixed se hum point kay bad value ko control kar sakhte hain

const otherNumber = 23.8966;
//console.log(otherNumber.toPrecision(4)); // toPrecision me hum jitna number dengy wo itna hi number output me roundoff krky show karega

const hundreds = 1000000;
//console.log(hundreds.toLocaleString('en-IN'));

/* ############################################# Maths #################################################### */

// console.log(Math);

// console.log(Math.abs(-4)); // ye negative number ko positive banata hai

// console.log(Math.round(4.7)); // ye number ko round of krta hai

// console.log(Math.ceil(4.1)); // point ky bad koi bi number ho ye round off krdeta hai

// console.log(Math.floor(4.9)); // ye point ky bad number ko count nhi krta

// console.log(Math.min(2,5,7,1)); // ye array me sab se chota number maloom krne ky liye hai

// console.log(Math.max(2,5,7,1)); // ye array me sab se bara number maloom krne ky liye hai


// console.log(Math.random()); // ye har bar refresh krny se new number genrate krta hai

// console.log((Math.random()*10) + 1 );

// console.log(Math.floor(Math.random()*10) + 1);



// const min = 10;
// const max = 20;
// console.log(Math.floor(Math.random() * (max - min + 1) + min));



  