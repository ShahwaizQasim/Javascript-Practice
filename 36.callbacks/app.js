/* Synchronous Programming */

// js is synchronous language

// jo code line by line chalta hai ussy synchronous programming kehty hain

// console.log('one');
// console.log('two');
// console.log('three');

/* Asynchronous Programming */

// function hello(){
//     console.log("hello");
// }
// setTimeout(hello , 2000); // timeout: 2s = 2000ms

// console.log('one'); // first time ye execute hoa
// console.log('two'); // second time ye

setTimeout(() => {
  // console.log("hello"); // ye function time le raha tha is liye ye function nhi chala
}, 2000); // end me ye chala

// console.log('three'); // third time
// console.log('four'); // fourth time

/* Callbacks */
// Def = A callback is a function passed as an argument to another function

function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, callback) {
  callback(a, b);
}

// calculator(1, 2, sum); // callback


/* Callback hell */

function getData(dataId,getNextData) {
  setTimeout(() => {
    console.log(`data ${dataId}`);
    if (getNextData) {
        getNextData();
    }
  },2000);
}
  
getData(1, () => { // nested callback => callback hell 
    console.log("getting data 2");
    getData(2, () => {
    console.log("getting data 3");
        getData(3, () => {
    console.log("getting data 4");
            getData(4)
        })
    })
});

/* Promises Concept = callback hell wali problem ko solve krne me hum promises use krte hain */ 
