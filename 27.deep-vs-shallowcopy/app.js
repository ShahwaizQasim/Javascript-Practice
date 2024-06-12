// cloning / reference thorna

const originalObj = {
  name: "Shahwaiz",
  isMarried: false,
  address: { city: "Karachi", zip: 12345 },
};

// console.log(typeof JSON.parse("[3,4,5]"));

/* shallow copy */
const copy1Obj = { ...originalObj }; // humne original-oject ko clone kiya hai
copy1Obj.name = "ali";
// console.log(copy1Obj);

/* deep copy */
const copy2Obj = JSON.parse(JSON.stringify(originalObj)); // The JSON.stringify() converts a JavaScript value to a JSON string And The JSON.parse()  constructing the JavaScript value or object described by the string
copy2Obj.isMarried = true;
console.log(copy2Obj);

console.log(originalObj); // orignal-object ki values change nhi hongi
