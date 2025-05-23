let colors = ["Red", "Brown", "Yellow", "Gray", "White"];

// console.log(colors[colors.length - 1]); // is method se array ki last index print ho jaegi
// console.log(colors.at(-1));

// console.log(colors.length); // ye array ki length maloom krne ky liye use krte hain

//End se
colors.push("Black"); // push end me value add krta hai
// colors.pop()  // pop end se value remove krta hai

//Start se
//my sir is not recommended
//colors.unshift("Black") //unshift start se element add krta hai
//colors.shift() //shift start se element remove krta hai

/* user se input lekr array me add krwane ka method */
// let userName = [];
// let names = prompt("Enter Your Name");
// if (names) {
//   alert("Welcome " + names);
// }
// userName.push(names);
// console.log(userName);

/*array me duplicate number ko dhunda hai*/
let array = [1, 2, 3, 4, 5, 1];

function myarray() {
  array.sort();
  for (let i = 0; i < array.length; i++) {
    //console.log(array[i]);
    if (array[i] === array[i + 1]) {
      // console.log("hello");
      return array[i];
    }
  }
  return false;
}
// console.log("Array Duplicate", myarray());

const student = ["student", 21];
const myName = student[0];
const age = student[1];

// console.log(myName);
// console.log(student);

/* DeStructuring */
const [MyName, Age] = ["shahwaiz", 20]; // short way of assigning array value to variable (this is equivalent above code)
// console.log(MyName);
// console.log(Age);

const fruits = ["mango", "banana"];
const addArray = [...fruits, 33, "watermelon"]; // elements add in array
// console.log("addArray->", addArray);

// array ky elements ko sum kiya hai and me in values ka average bi nikala hai
let Arr2 = [2, 4, 6, 8, 10, 30];
let sum = 0;
for (const items of Arr2) {
  sum += items;
  // console.log('items',items);
}
// console.log('sum',sum);

let avg = sum / Arr2.length;
// console.log(`avg mark of the class ${avg}`);

// array ki har element se 10% ko minus kiya hai
let myArray = [150, 250, 320, 480, 333]; // for of loop
let i = 0;

// 1st method
for (const val of myArray) {
  let offer = val / 10;
  // myArray[i] = myArray[i] - offer;
  myArray[i] -= offer;
  // console.log('Array', i, myArray[i]);
  i++;
}
// console.log('i', i);

// 2nd method
for (let i = 0; i < myArray.length; i++) {
  let offer = myArray[i] / 10;
  myArray[i] -= offer;
  // console.log(myArray[i]);
}

/* Sorting Numbers */
const myArr3 = [4, 2, 5, 1000, -10, -4, 1];

const sortFunction = (a, b) => {
  // console.log("sortFunction a:", a);
  // console.log("sortFunction b:", b);

  const test = a - b;

  return test;
};
myArr3.sort(sortFunction);
// console.log("Arr", myArr3);

myArr3.sort((a, b) => b - a); // descending order = largest to small 9 to 0
// console.log(myArr3);

myArr3.sort((a, b) => a - b); // ascending order = smallest to largest, 0 to 9
// console.log(myArr3);


// Practice Array

// Duplicate Number Found in Array 
const myArr = [1, 3, 2, 5, 4, 5, 6];
// console.log(myArr[myArr.length - 1]);

function SortArray(arr) {
  myArr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      return arr[i];
    }
  }
  return false;
}

// console.log(SortArray(myArr));



// Array Sorting 
const arr = [55, 20, 44, 22, 1, -1, -1000];

function ArraySorting(a,b){
  const sorting = a - b;
  return sorting;
}

arr.sort(ArraySorting)
console.log(arr);

arr.sort((a,b)=> a-b) // accending
console.log(arr);

arr.sort((a,b)=> b-a) // descending
console.log(arr);

