// While Loop

/* while loop 1 to 10 counting print */
let i = 1;
while (i <= 10) {
   //console.log(i);
    i++;
    //i = i+1;
}

/* Array Elements print for using while loop */
let myArr = ['Shahwaiz',"Qasim","Ali"];
let index = 0;
while(index < myArr.length){
  //console.log(myArr[index]);
  index++
}

// Reverse Counting 
let j = 10
while (j  > 0) {
   //console.log(j);
   j--;
}

let arr = [1,2,3,4,5,6,7,8];
while (arr.length) {
   //console.log(arr.pop());
   arr--;
}



/* do While Loop */
// agr condition false hogi tw do/while loopak bar execute oga 

let name1 = 0;
do{
   //console.log("shahwaiz");
   name1++;
}while(name1 < 5)


// let bol1 = confirm("Hello");

// let result;
// do{
//    let randomNum = Math.floor(Math.random() * 2);
//    // console.log(randomNum); 
//    if (randomNum === 0) console.log("You Lose"); 
//    if (randomNum === 1) console.log("You Win");
//    let result = confirm("Do You want to play again") 
// }while (result)


let score = 11;
do {
   //console.log(`Score is ${score}`);
   score++
} while (score <= 10);