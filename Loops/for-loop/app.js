/* for loop syntax */
// for(initialization;condition;increment/decrement){
//     loop_body
// }

// for(1; 2; 4){
//   3
// }

/* ak element ko bar bar print krnwane me use krte hain hum loop */
//agr loop ki condition false hogi tw loop nhi chalega
// for (let i=0; i < 5; i++) {
//     document.write("Shahwaiz <br/>");    
// }


//clock
// for (let i = 5; i <= 60; i+=5) {
//     console.log(i);;
// }


/* odd 1,3,5,7 and even 2,4,6,8 */
//let counter = 15;
//for (let i= 0; i < 15; i++) {
// if (i % 2 === 0) { 
//     console.log("This is Even ", i); // even number print
// }
// else{
//     console.log("This is Odd ", i); // odd number
// }
// console.log("My counter ", --counter);
// }


/* Reverse Counting Method 1 */
// for (let i = 10; i > 0; i--) {
//     document.write(`Reverse Counting ${i} <br/>` );
// }


/* Reverse Counting Method 2 */
// for (let i = 0; i < 10; i++) {
//     document.write(`${10 - i}  <br/>`);
// }


// let pets = [];
// pets[0] = "dog";
// pets[1] = "dog";
// pets[2] = "dog";
// pets[3] = "dog";
//console.log(pets);
// console.log(pets.length);

// let arr = [];
// for (let i = 1; i <= 10; i++) {
//  console.log(arr.push(i));
// }
//console.log(arr);

/* Array Values Print */
// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i ++){
//  names[i] = `Hello ${names[i]}`; // array me string add ki hai
//  console.log(names[i]);
// }


let namesArr = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let i = 0; i < namesArr.length; i++) {
    if (namesArr[i].startsWith("M")) {
        delete namesArr[i];
        continue;
    }
}
// console.log(namesArr);



//  Loops Chapter Continue page # 124



