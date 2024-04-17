
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

/* 
Dynamic Plus
matrix ko plus kiya hai and print bi matrix form me kiya hai
*/

if (matrix1.length === matrix2.length && matrix1[0].length === matrix2[0].length) {
    //console.log("consdition sahi hai");
    for (let i = 0; i < matrix1.length; i++) {
        let row = [];
        //console.log(i);
        for (let j = 0; j < matrix1[i].length; j++) {
            //console.log(`i is ${i} And j is ${j}`);
            //console.log(matrix1[i][j] + matrix2[i][j]);   
            row.push(matrix1[i][j] + matrix2[i][j]);        
        }
        result.push(row);
    }
    console.log(result);
}else{
    console.log("Arrays have different dimensions, Cannot Perform Addition");
}