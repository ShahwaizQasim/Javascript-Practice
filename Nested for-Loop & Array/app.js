
/* Nested Array */
let array = [[5,2,3],[2,1,2],[3,5,4]];

// console.log(array[0][0]);
// console.log(array[0][1]);
// console.log(array[0][2]);
// console.log(array[0][3]);

// console.log(array[1][0]);
// console.log(array[1][1]);
// console.log(array[1][2]);
// console.log(array[1][3]);

// console.log(array[2][0]);
// console.log(array[2][1]);
// console.log(array[2][2]);
// console.log(array[2][3]);


//let a = 0; is variable se hum ye maloom krte hain kay loop kitni bar chal raha hai

/* Nested Loop */

// for (let i = 0; i < array.length; i++) {
//     console.log("Start");
//     for (let j = 0; j < 3; j++) {
//        //console.log(`i is ${i} j is ${j}`);
//        console.log(array[i][j]);
//        //a++;
//     }
//     console.log("End");
// }
// i = 0 0 0 , 1 1 1, 2 2 2
// j = 0 1 2 , 0 1 2, 0 1 2
//console.log(a);


let myArr = [[2,3,4,2,1,4],[5,1],[5],[9,8,7]];

for (let i = 0; i < myArr.length; i++) {
    for (let j = 0; j < myArr[i].length; j++) {
        //console.log(`i is ${i} and j is ${j}`);
        console.log(myArr[i][j]);
        //console.log(i);
    }
}


