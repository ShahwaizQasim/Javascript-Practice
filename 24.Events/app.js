/* Events */
// 1. click
// 2. submit
// 3.mousemove
// 4.mouseout
// 5.mouseover


const body = document.querySelector("body");

body.addEventListener("mousemove", (event) => {
    console.log(`Event is x =${event.x} y = ${event.y} ` );
})