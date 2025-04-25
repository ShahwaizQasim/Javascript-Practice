let myDate = new Date();
// console.log(myDate);

let currentTime = myDate.getTime(); // getTime se current time mila
// console.log(currentTime);

let hours = myDate.getHours(); // getHours jo time ho raha ho without minutes & seconds
// console.log(hours);

let minutes = myDate.getMinutes(); // getMinutes jo minutes ho rahe hon
// console.log(minutes);

let seconds = myDate.getSeconds(); // getSeconds jo seconds ho rahe hon
//console.log(seconds);

let milliseconds = myDate.getMilliseconds(); // milliSeconds jo milliseconds ho rahe hon
//console.log(milliseconds);

let future = new Date("June 30,2025").getTime();
// console.log(future);

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
//console.log("test : ", months[new Date().getMonth()]); // is method se hum String me month maloom krte hain

let news = new Date().getDay(); // is method se hum number me month maloom krte hain
// console.log(news);


let a = new Date("April 25, 2025").getTime();
// console.log(a); 
let daysleft = (new Date().getTime() - a) / (1000 * 60 * 60 * 24); 
// console.log("DaysLeft", daysleft);
//console.log(Math.abs(Math.floor(daysleft))); // math.floor point ky bad numbers ko khatam krta hai


/* Class 2 */
// 1. Wed 24-April 7:45 PM  // task1
// 2. April 5th 07:45 PM // task2

/* task1 complete */
const weekdays = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];
let todayDate = new Date();
let weekday = weekdays[todayDate.getDay()];
console.log("weekday", weekday);

let currentDate = todayDate.getDate();
let month = months[todayDate.getMonth()];
// console.log("month", month);

let hours1 = todayDate.getHours();
let minutes1 = todayDate.getMinutes();
let ampm = "";

if (hours1 === 0) {
  hours1 = 12;
  ampm = "AM";
}
if (hours1 > 12) {
  hours1 = hours - 12;
  ampm = "AM";
}else{
  ampm = "PM";
}

let task1 = `${weekday} ${currentDate}${month} ${hours1}:${minutes1} ${ampm}`;
// console.log(task1); 


// 2. April 5th 07:45 PM // task2

const month2 = months[todayDate.getMonth()];
const current_day = todayDate.getDay() + 1;
let current_hours = todayDate.getHours();
let current_minutes = todayDate.getMinutes();
let current_date = todayDate.getDate();
//const dates_method = `${month} ${current_day} ${current_hours}:${current_minutes}`;

if (current_date === 1 || current_date === 21) {
  current_date = `${current_date}st`
}else if(current_date === 2 || current_date === 22){
  current_date = `${current_date}nd`
}else if(current_date === 3 || current_date === 23){
  current_date = `${current_date}rd`
}else if(current_date === 4){
  current_date = `${current_date}th`
}

let ampm2 = "";

if (current_hours === 0) {
  current_hours = 12;
  ampm2 = "AM";
}
if (current_hours > 12) {
  current_hours = current_hours - 12;
  ampm2 = "AM";
}else{
  ampm2 = "PM";
}


current_hours = current_hours < 10 ? "0" + current_hours: current_hours;
current_minutes = current_minutes < 10 ? "0" + current_minutes: current_minutes;

let task2 = `${month} ${current_date} ${current_hours}: ${current_minutes} ${ampm}`;
// console.log(task2);