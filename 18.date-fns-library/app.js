
/* Try this date Using Library Date_Fns-Library */

// 1. 04/20/2024 13:45:30
// 2. Thu 20/4/2024 13.45
// 3. 2024-04-20 3:45 Thursday
// 4. April 20th, 2024 01.45.30 PM
// 5. 20 April 2024 at 01:45 PM


let myTime1 = dateFns.format(new Date(2024, 3, 20, 13, 45, 30), "MM/dd/yyy HH:mm:ss");

let myTime2 = dateFns.format(new Date(2024, 3, 20, 13, 45), "E dd/M/yyy HH.mm");

let myTime3 = dateFns.format(new Date(2024, 3, 20, 3, 45), "yyy-MM-dd H:mm EEEE");

let myTime4 = dateFns.format(new Date(2024, 3, 20, 13, 45, 30), "MMMM do, yyy hh.mm.ss a");

let myTime5 = dateFns.format(new Date(2024, 3, 20, 13, 45), "dd MMMM yyy 'at' hh:mm a");

console.log(myTime1);
console.log(myTime2);
console.log(myTime3);
console.log(myTime4);
console.log(myTime5);