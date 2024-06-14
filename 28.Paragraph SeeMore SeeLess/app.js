const paragraph = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptas blanditiis voluptate dolorem voluptatum excepturi, eos aliquid illo dolore autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptas blanditiis voluptate dolorem voluptatum excepturi, eos aliquid illo dolore autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptas blanditiis voluptate dolorem voluptatum excepturi, eos aliquid illo dolore autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptas blanditiis voluptate dolorem voluptatum excepturi, eos aliquid illo dolore autem.`;

const myText = document.querySelector("#myParagraph");

window.seeMore = () => {
    myText.innerHTML = paragraph + "<a onClick='seeLess(event)'> see less...</a>";
    // console.log(event);
}

window.seeLess = () => {
    myText.innerHTML = paragraph.slice(0,304) + "<a onClick ='seeMore(event)'> see more...</a>";
}
seeLess();