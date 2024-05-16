
let student1 = ['web','cit','graphics','ali',25,];  // sequential data

let Course = "Web and Mobile App Development";

let student2 = {
   // key : // value
   name : "Shahwaiz",
   age : 20,
   course: Course,
   Batch: "batch 11",
   isAbsent: true,
   hobbies:['cricket','coding','sleeping'], // array in object
   myteacher:{name: "Shehzad", age: 24,},
   test: {}, // this is empty object
}
console.log(student2.name); // objects name print
console.log(student2.hobbies[2]); // objects ky ander se array print krwaya hai
console.log(student2.myteacher.age); // objects ky ander se object print krwaya hai
console.log(student2?.myteacher?.name); // question mark error ant nhi dete error ki jaga undefined print krwa dete hain