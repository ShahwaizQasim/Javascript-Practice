
/* localStorage me key bi string honi chahiye and value bi  */ 

const key = prompt("Enter key you want to set");
const value = prompt("Enter value you want to set")

localStorage.setItem(key, value); // setItem localStorage me value ko set krta hai

const getElement = localStorage.getItem(key); // getItem key ki value batata hai      
// console.log(getElement); 
console.log(`The value at ${key} is ${getElement}`);

if (key == "black" || key == "pink") {
    localStorage.getItem(key).removeItem();
}