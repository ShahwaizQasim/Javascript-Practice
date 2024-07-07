/* Events */
// 1. click
// 2. submit
// 3.mousemove
// 4.mouseout
// 5.mouseover


// click event 
// let body2 = document.querySelector("body");
// let theme_button = document.querySelector("#btn1");
// let isDarkMode = true;

// theme_button.addEventListener("click", () => {
//    if (isDarkMode === true) {
//       body2.className = "dark";
//       theme_button.innerText = "Light Mode";
//    }else{
//       body2.className = "light";
//       theme_button.innerText = "Dark Mode";
//    }
//    isDarkMode = !isDarkMode;
// });



// submit event
// let myInput = document.querySelector("#my-input");
// //let mybutton = document.querySelector("#my-button");
// let form = document.querySelector("#wheather-form");
// let mypara = document.querySelector("#wheather-update");

// form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     let tem = Number(myInput.value);
//     let conditions = tem < 20;
//     console.log(conditions);

//     if (conditions) {
//         mypara.innerText = "Today Wheather is Cold 😱😱"
//     }
//     else{
//         mypara.innerText = "Today Wheather is Hot 😨😨"
//     }

// });




// const body = document.querySelector("body");

// body.addEventListener("mousemove", (event) => {
//     console.log(`Event is x =${event.x} y = ${event.y} ` );
// })


window.popup = (message) => {
    alert(message);
}

// const uoo = Number("222");
// console.log(String(uoo));

window.GreetUser = (UserMessage) => {
    const Inpt = prompt("Enter User Name");
    if (Number(Inpt)) {
        console.log("Number not Allow");
    }else{
        console.log(Inpt);
    }
    return Inpt;
}


window.checkAddress = () => {
    const userInpt = document.querySelector('#email').value;

    if (userInpt === "") {
        alert("Email address required.");
    }
    console.log(userInpt);
}

function fillCity() {
  let cityName;
  let zipEntered = document.getElementById("zip").value;

  switch (zipEntered) {
  case "74900" :
  cityName = "Karachi";
  break;

  case "6805" :
  cityName = "Lahore";
  break;

  case "5321" :
  cityName = "Islamabad";
}
    document.getElementById("city").value = cityName;
}
    
