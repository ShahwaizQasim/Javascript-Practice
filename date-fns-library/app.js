
/* Try this date Using Library Date_Fns-Library */

// 1. 04/20/2024 12:45:30
// 2. Thu 20/4/2024 02:05
// 3. 2024-04-20 3:45 Thursday 
// 4. April 20th, 2024 01:45:30
// 5. 20 April 2024 at 01:45

let myTime = dateFns.format(new Date(2024, 3, 20, 13, 45, 30), "MM/dd/yyy HH:mm:ss");;
console.log(myTime);