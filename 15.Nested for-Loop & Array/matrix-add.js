
/* Matrix Plus print only number addition */

// let matrix1 = [
//   [2, 6, 8, 0],
//   [1, 3, 5, 7],
//   [2, 3, 9, 5],
// ];

// let matrix2 = [
//   [5, 8, 9, 1],
//   [2, 3, 7, 3],
//   [2, 5, 7, 8]
// ];

//Ans [7 , 14, 17, 1]
//    [3, 6, 12, 10]
//    [4, 8, 16, 13]

// console.log(matrix1[0][0] + matrix2[0][0]);
// console.log(matrix1[0][1] + matrix2[0][1]);
// console.log(matrix1[0][2] + matrix2[0][2]);
// console.log(matrix1[0][3] + matrix2[0][3]);

// console.log(matrix1[1][0] + matrix2[1][0]);
// console.log(matrix1[1][1] + matrix2[1][1]);
// console.log(matrix1[1][2] + matrix2[1][2]);
// console.log(matrix1[1][3] + matrix2[1][3]);

// console.log(matrix1[2][0] + matrix2[2][0]);
// console.log(matrix1[2][1] + matrix2[2][1]);
// console.log(matrix1[2][2] + matrix2[2][2]);
// console.log(matrix1[2][3] + matrix2[2][3]);

// Not Dynamic
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 4; j++) {
//         console.log(matrix1[i][j] + matrix2[i][j]);
//     }        
// }


/* 
Dynamic Plus
matrix ko plus kiya hai and print bi matrix form me kiya hai
first Method
*/

let matrix3 = [
  [2, 6, 8, 0],
  [1, 3, 5, 7],
  [2, 3, 9, 5],
];

let matrix4 = [
  [5, 8, 9, 1],
  [2, 3, 7, 3],
  [2, 5, 7, 8]
];

let result5 = [[], [], []];

for (let i = 0; i < matrix3.length; i++) {
  //console.log(i);
  for (let j = 0; j < matrix3[i].length; j++) {
    const sum = matrix3[i][j] + matrix4[i][j];
    result5[i].push(sum);
  }
}
// //document.write(result)
// console.log(result);

/* 
Dynamic Plus
matrix ko plus kiya hai and print bi matrix form me kiya hai
2nd Method
*/

let matrix1 = [
  [2, 6, 8, 0],
  [1, 3, 5, 7],
  [2, 3, 9, 5],
];

let matrix2 = [
  [5, 8, 9, 1],
  [2, 3, 7, 3],
  [2, 5, 7, 8]
];

let result = [];

for (let i = 0; i < matrix1.length; i++) {
  result[i] = [];
  for (let j = 0; j < matrix1[i].length; j++) {
    const sum = matrix1[i][j] + matrix2[i][j];
    result[i].push([sum])
  }
}
console.log(result);

/* 
Dynamic Plus
matrix ko plus kiya hai and print bi matrix form me kiya hai
3rd Method
*/

// let matrix1 = [
//       [2, 6, 8, 0],
//       [1, 3, 5, 7],
//       [2, 3, 9, 5],
//     ];

// let matrix2 = [
//       [5, 8, 9, 1],
//       [2, 3, 7, 3],
//       [2, 5, 7, 8]
//     ];

// let result = [];

// if (matrix1.length === matrix2.length && matrix1[0].length === matrix2[0].length) {
//     //console.log("condition sahi hai");
//     for (let i = 0; i < matrix1.length; i++) {
//         let row = [];
//         //console.log(i);
//         for (let j = 0; j < matrix1[i].length; j++) {
//             //console.log(`i is ${i} And j is ${j}`);
//             //console.log(matrix1[i][j] + matrix2[i][j]);   
//             row.push(matrix1[i][j] + matrix2[i][j]);        
//         }
//         result.push(row);
//     }
//     console.log(result);
// }else{
//     console.log("Arrays have different dimensions, Cannot Perform Addition");
// }


/*matrix ki value ka square print krwaya hai */

// let matrix5 = [     /* Nested Array, 2d Array, Multidimensional Array */
//     [3, 5, 6],
//     [5, 6, 9],
//     [7, 3, 6] 
//   ];

//   //console.log(matrix1[0][0] ** 2);
//   for (let i = 0; i < matrix5.length; i++) {
//      for (let j = 0; j < matrix5[i].length; j++) {
//         console.log(matrix5[i][j] ** 2);
//      }
//   }




const matrix10 = [
  [5, 2, 1, 1],
  [6, 8, 3, 9],
  [10, 5, 15, 23],
  [9, 2, 5, 6]
]


const matrix11 = [
  [2, 9, 3, 8],
  [5, 3, 8, 19],
  [5, 15, 1, 13],
  [12, 12, 15, 16]
]

// Ans 
// result = [
//   [7, 11, 4, 9],
//   [11, 11, 11, 28],
//   [15, 20, 16, 38],
//   [21, 14, 20, 22]
// ]

const result10 = [[], [], [], []];
for (let i = 0; i < matrix10.length; i++) {
  for (let j = 0; j < matrix10[i].length; j++) {
    console.log(matrix10[i][j]);
    const sum = matrix10[i][j] + matrix11[i][j]
    console.log("sum", sum);
    result10[i].push(sum)

  }
}

console.log("result10", result10);
