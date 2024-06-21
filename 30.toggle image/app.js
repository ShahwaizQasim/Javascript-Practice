const myImg1 = document.querySelector("#img1");
const myImg2 = document.querySelector("#img2");
const button = document.querySelector("#mybtn");

const toggleImage = () => {
    if (!myImg1.style.display) {
        myImg1.style.display = 'none';
        myImg2.style.display = 'block'
        button.innerText = "Picture Change";
    }else{
        myImg1.style.display = '';
        myImg2.style.display = 'none'
        button.innerText = "Picture Change";
    }
}
button.addEventListener("click", toggleImage);
