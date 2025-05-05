// cloning / reference thorna

const originalObj = {
  name: "Shahwaiz",
  isMarried: false,
  address: { city: "Karachi", zip: 12345 },
};

// console.log(typeof JSON.parse("[3,4,5]"));


/* shallow copy */

// 1. Shallow Copy:
// Shallow copy ka matlab hai ki object ka ek naya copy banaya jata hai, lekin jo nested objects ya arrays hain unko reference ke saath copy kiya jata
// hai. Iska matlab hai ki agar nested objects ya arrays ko modify kiya jaye, to wo changes original object me bhi reflect honge.

const copy1Obj = { ...originalObj }; // humne original-oject ko clone kiya hai
copy1Obj.name = "ali";

console.log("shallowCopy" ,copy1Obj); 
console.log("orignalObject" ,copy1Obj); // original object me changes hongi


/* deep copy */

// 2. Deep Copy:
// Deep copy ka matlab hai ki object ka complete copy banaya jata hai, including all nested objects ya arrays. Isme recursive copying hoti hai, 
// jisme har nested object ka apna naya copy ban jata hai, aur original object ke saath koi reference link nahi rehta. Agar aap deep copy karte hain
// to nested objects ke changes original object ko effect nahi karte.

const copy2Obj = JSON.parse(JSON.stringify(originalObj)); // The JSON.stringify() converts a JavaScript value to a JSON string And The JSON.parse()  constructing the JavaScript value or object described by the string
copy2Obj.isMarried = true;

// console.log("deepCopy",copy2Obj);

// console.log("originalObject", originalObj); // orignal-object ki values change nhi hongi
