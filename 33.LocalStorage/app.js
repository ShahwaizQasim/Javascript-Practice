
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



const userMode = localStorage.getItem("mode");

if (!userMode) {
    const mode = prompt("Enter Your Mode Preference?")
    localStorage.setItem("mode", mode)
    localStorage.setItem("Name", "ali");
}

console.log(userMode);