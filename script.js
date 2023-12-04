const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click",() => {
    question.innerHTML = "aaaaa, i like u too";
    gif.src = "https://raw.githubusercontent.com/DrazelDeveloper/Img/main/gifyou.webp";
});

noBtn.addEventListener("mouseover",() => {
    const noBtnRect  = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;
     
    const randomX = Math.floor(Math.random()*maxY);
    const randomY = Math.floor(Math.random()* maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomX + "px";
});