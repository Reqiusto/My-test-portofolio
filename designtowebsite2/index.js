let timer = 4;
let total = 3; //disesuaikan denga jumlah img yang ingin di swipe
let swipecount = 0;
const menu = document.getElementById("menu");
const images = document.querySelector(".images");
function swipe(){
    swipecount++;
    if(swipecount >= total){
        swipecount = 0;
    }
    images.style.transform = `translateX(-${350 * swipecount}px)`;
}
function arrow1(){
    if(swipecount >= 1){
        swipecount--;
        timer = 4;
        images.style.transform = `translateX(-${350 * swipecount}px)`;
    }
}
function arrow2(){
    if(swipecount < total - 1){
        swipecount++;
        timer = 4;
        images.style.transform = `translateX(-${350 * swipecount}px)`;
    }
}
const interval = setInterval(() =>{
    timer--;
    if (timer <= 0){
        swipe();
        timer = 4;
    }
}, 1000)
function menul(){
    menu.style.display = "block";
}
function back(){
    menu.style.display = "none";
}