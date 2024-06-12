let colors = ["Red","Brown","Yellow","Gray","White"];


//End se
//colors.push("Black"); // push end me value add krta hai
//colors.pop()  // pop end se value remove krta hai


//Start se
//not recommended
//colors.unshift("Black") // unshift start se element add krta hai
//colors.shift() //shift start se element remove krta hai


//console.log(colors.at(-1)); // prints last value print 1st method
//console.log(colors[colors.length -1]); // last value print 2nd method

//console.log(colors.length); // ye array ki length maloom krne ky liye use krte hain
//console.log(colors);

//console.log(colors[3]);

/* user se input lekr array me add krwane ka method */
let userName = [];
// let names = prompt("Enter Your Name");
// if (names) {
//     alert("Welcome "+ names)
// }
// userName.push(names);
// console.log(userName);


/*array me duplicate element ko value ko dhoonda hai*/
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
// console.log(myarray()) ;


const student = ["student",21];
const myName = student[0];
const age = student[1];

// console.log(myName);
// console.log(student);

/* DeStructuring */
const [MyName,Age] = ["shahwaiz",20,"something"] // short way of assigning array value to variable (this is equivalent above code)
console.log(MyName);
console.log(Age);