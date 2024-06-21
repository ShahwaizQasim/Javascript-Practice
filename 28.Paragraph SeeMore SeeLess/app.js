const paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic doloribus deserunt corrupti libero id ea quaerat dolore maxime minus eaque! Minima temporibus possimus suscipit cum facilis, magni vel. Asperiores nam animi hic, sint laboriosam in possimus labore voluptas deleniti omnis autem inventore excepturi quam modi obcaecati reiciendis quo enim amet! Nesciunt recusandae facere cupiditate laudantium non eaque fugit asperiores, amet porro ea praesentium exercitationem distinctio, ipsa ullam cum. Quae voluptatum labore veritatis, maiores recusandae optio itaque reprehenderit, officia officiis illum inventore quidem tenetur repellendus enim asperiores? Ea quam laborum commodi inventore fugit error, adipisci repellat harum eius nulla deserunt, similique enim illum nihil quidem mollitia facere rerum?Mollitia quasi, hic alias numquam cumque delectus sed quos ipsum vero reprehenderit eaque, voluptas similique perspiciatis sint illum error minima recusandae voluptatum, culpa nostrum. Suscipit possimus adipisci laboriosam sequi vel, beatae enim. Provident id aliquid explicabo fugiat adipisci nisi accusamus unde! Cum magnam dolore quibusdam quidem neque soluta qui maxime fugiat beatae, enim recusandae odit at tenetur, error molestiae dicta dolorem nesciunt atque, sed et laborum veritatis dolor iure placeat? Doloribus, officiis quaerat quibusdam tempora qui minima, eaque pariatur facilis officia inventore alias dolor tenetur veniam sequi modi voluptate  iste! Necessitatibus, pariatur quis."
const myText = document.querySelector("#myParagraph");

window.seeMore = () => {
    myText.innerHTML = `${paragraph} <a onclick="seeLess(event)" >see less</a>`;
    // console.log(event);
}

window.seeLess = () => {
    myText.innerHTML = `${paragraph.slice(0,318)}. <a onclick="seeMore(event)">see more</a>`;
}
seeLess()