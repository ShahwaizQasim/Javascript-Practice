
const arr = [2, 3, 4, 5];
// // console.log('arr=>', arr);
// // console.log('arr=>', arr.slice(0, 1)); // 2
arr.splice(0, 1);
arr.unshift(8);
// console.log(arr); // [8,3,4,5]


const obj = {
    a: 2,
    b: 4,
    c: 6,
    "a": 3,
    b: 7
}

// objects ki key hamesha unique hoti hai agr same key ho tw uper wali key print nhi hoti because niche wali key upper wali key ko overwrite kr deta hai
console.log(obj); // {a:3,b:7, c:6} 


console.log(!"string"); // true
console.log(+false); // 0 is liye aya hai boolean false ka numeric value always 0 hota hai


// NaN kisi value ky equal nahi hota, even apni apky bhi equal nhi  
console.log(NaN == NaN); //false
console.log(NaN === NaN); //false



console.log(typeof typeof 1000);


function myFunc() {
    xyz = 100;
    console.log(xyz);
}

console.log(myFunc());



const data = {
    name: "Nabil",
    fatherName: "Qasim Ali"
}

const abc = [1, 2, 3, 4];

console.log('obj', delete data.name);
console.log(data);
console.log('array', delete abc[0]);
console.log('array', abc);

