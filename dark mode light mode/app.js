let body = document.querySelector("body");
let theme_button = document.querySelector("#btn1");
let isDarkMode = true;

theme_button.addEventListener("click", () => {
   if (isDarkMode === true) {
      body.className = "dark";
      theme_button.innerText = "Light Mode";
   }else{
      body.className = "light";
      theme_button.innerText = "Dark Mode";
   }
   isDarkMode = !isDarkMode;
});