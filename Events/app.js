const body = document.querySelector("body");

body.addEventListener("mousemove", (event) => {
    console.log(`Event is x =${event.x} y = ${event.y} ` );
})