

const paragraph = document.querySelectorAll("p");
console.log("paragraph", paragraph);

for (let i = 0; i < paragraph.length; i++) {
    paragraph[i].style.color = 'red';
    console.log("paragraph", paragraph[i]);
}