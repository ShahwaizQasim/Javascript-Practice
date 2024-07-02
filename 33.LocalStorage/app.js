
/* localStorage me key bi string honi chahiye and value bi  */ 

// const key = prompt("Enter key you want to set");
// const value = prompt("Enter value you want to set");

// localStorage.setItem(key, value); // setItem localStorage me value ko set krta hai

// const getElement = localStorage.getItem(key); // getItem key ki value batata hai
// console.log(getElement); 
// console.log(`The value at ${key} is ${localStorage.getItem(key)}`); 

// if (key == "color" || value == "red") {
    // localStorage.removeItem(key); // removeItem localStorage se value ko remove krta hai
// }   

// if (key === "0") {
    // localStorage.clear(); // clear puri localStorage ko empty kar deta hai
// }


/* 1 = storing mode preference in local storage */
// const userMode = localStorage.getItem("mode");

// if (!userMode) { 
//     const mode = prompt("Enter Your Mode Preference?")
//     localStorage.setItem("mode", mode)
// } 
    // localStorage.setItem("Name", "ali");

// console.log(userMode);


// 2 
const obj = {
    name: "Shahwaiz",
    age: 20,
    Institute: "SMIT",
    Sports:"Cricket"
}
// delete obj.Sports; // delete objects key & value 
// console.log(obj);

localStorage.setItem("myObj", JSON.stringify(obj)); // JSON.stringify object ko string banata hai

const storeObject = JSON.parse(localStorage.getItem("myObj"));
delete storeObject.Institute; // local storage me se object ki key ko delete kiye hai 

const updateObject = localStorage.setItem("myObj", JSON.stringify(storeObject));