let myDate = new Date();
console.log(myDate);

let currentTime = myDate.getTime(); // getTime se current time mila
console.log(currentTime);

let hours = myDate.getHours(); // getHours jo time ho raha ho without minutes & seconds
console.log(hours);

let minutes = myDate.getMinutes(); // getMinutes jo minutes ho rahe hon
console.log(minutes);

let seconds = myDate.getSeconds(); // getSeconds jo seconds ho rahe hon
console.log(seconds);

let milliseconds = myDate.getMilliseconds(); // milliSeconds jo milliseconds ho rahe hon
console.log(milliseconds);

let future = new Date("June 30,2025").getTime();
console.log(future);

// 0 Sunday
// 1 Monday
// 2 Tuesday
// 3 Thursday
// 4 Friday
// 5 Saturday
// 6 Sunday

const months = [
  "January",
  " February",
  " March",
  " April",
  " May",
  " June",
  " July",
  " August",
  " Sep",
  " Out",
  " Nov",
  " December",
];
console.log("test : ", months[new Date().getMonth()]); // is method se hum String me month maloom krte hain

let news = new Date().getMonth(); // is method se hum number me month maloom krte hain
console.log(news);


let a = new Date("April 25, 2025").getTime();
let daysleft = (new Date().getTime() - a) / (1000 * 60 * 60 * 24); 
// console.log(daysleft);
// console.log(Math.floor(daysleft)); // math.floor point ky bad numbers ko khatam krta hai
console.log(Math.abs(Math.floor(daysleft))); // math.floor point ky bad numbers ko khatam krta hai