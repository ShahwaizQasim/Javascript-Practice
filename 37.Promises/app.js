/* Promises */

// There are three state of promises
// 1. Pending = the result is undefined
// 2. fulfilled = the result is a value (fullfilled) // jb response a jaye ga tw state fullfilled ho jaegi
// 3. reject = the error is an error object


// Async:
// async ek function ko asynchronous bana deta hai. Iska matlab hai ke yeh function automatically ek promise return karega,

// Await:
// await ek keyword hai jo async function ke andar use hota hai. Yeh promise ka result tab tak wait karta hai jab tak promise resolve na ho jaye.

// Async: function ko asynchronous banata hai jo promise return karta hai.
// Await: promise ke complete hone tak rukta hai aur uska result return karta hai.

const functionApi = async (event) => {
  try {
    event.preventDefault();

    let API_URL = "https://api.github.com/users/shehza-d";
    const res = await fetch(API_URL);
    const data = await res.json();

    console.log("data", data);

    // throw new Error("sahi code likho");
  } catch (error) {
    console.log(error);
  }
};

document.getElementById("check").addEventListener("click", functionApi);
// console.log(await api.json());

const API_URL1 = "https://api.github.com/users/shehza-2d";
fetch(API_URL1)
  .then((result) => {
    // console.log(result);
    return result.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  });
