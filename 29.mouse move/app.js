const body = document.querySelector("body");
const myImg = document.querySelector("#img");

window.HandleMyMouseMove = (event) => {

    // console.log(`X: ${event.clientX}`);
    // console.log(`Y: ${event.clientY}`);
    // myImg.style.top = '500px'
    // myImg.style.left = '500px'
    console.log(event);

    myImg.style.top = `${event.clientY}px`
    myImg.style.left = `${event.clientX}px`;
}