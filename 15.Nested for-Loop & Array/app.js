/* Nested Loop */

for (let i = 0; i < 5; i++) {
  console.log(`Outer Loop is ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`Outer Loop is ${i} and Inner Loop is ${j}`);
  }
}

/* Nested Array */
let array = [
  [5, 2, 3],
  [2, 1, 2],
  [3, 5, 4],
];

// console.log(array[0][0]);
// console.log(array[0][1]);
// console.log(array[0][2]);

// console.log(array[1][0]);
// console.log(array[1][1]);
// console.log(array[1][2]);

// console.log(array[2][0]);
// console.log(array[2][1]);
// console.log(array[2][2]);

//let a = 0; is variable se hum ye maloom krte hain kay loop kitni bar chal raha hai

/* Nested Loop */

for (let i = 0; i < array.length; i++) {
    console.log("Start");
    for (let j = 0; j < 3; j++) {
       //console.log(`i is ${i} j is ${j}`);
       console.log(array[i][j]);
       //a++;
    }
    console.log("End");
}
// i = 0 0 0 , 1 1 1, 2 2 2
// j = 0 1 2 , 0 1 2, 0 1 2
//console.log(a);

let myArr = [[2, 3, 4, 2, 1, 4], [5, 1], [5], [9, 8, 7]];

for (let i = 0; i < myArr.length; i++) {
  //console.log(myArr[i].length);
  for (let j = 0; j < myArr[i].length; j++) {
    //console.log(`i is ${i} and j is ${j}`);
    console.log(myArr[i][j]);
    //console.log(i);
  }
}

/* 
once again practice 
Nested Array Print All Values
*/

let MyArr = [
  [1, 2, 3],
  [5, 6, 7, 2, 0],
  [1, 3, 4, 5],
  [5, 7, 8],
];

for (let i = 0; i < MyArr.length; i++) {
  console.log("Start");
  for (let j = 0; j < MyArr[i].length; j++) {
    //console.log(`i is ${i} and j is ${j}`);
    console.log(MyArr[i][j]);
  }
  console.log("End");
}

/* Nested Array, 2d Array, Multidimensional Array */
let matrix1 = [
  [3, 5, 6],
  [5, 6, 9],
  [7, 3, 6],
];

//console.log(matrix1[0][0] ** 2);
for (let i = 0; i < matrix1.length; i++) {
  for (let j = 0; j < matrix1[i].length; j++) {
    console.log(matrix1[i][j] ** 2);
  }
}
