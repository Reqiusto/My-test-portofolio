const panel = document.getElementById("aaa");
const panel2 = document.getElementById("bbb")
function tes(){
    panel2.style.transform = "translateX(0)";
    panel.style.transform = "translateX(0)";
    panel.style.transition = "transform 0.5s ease";
}
function tes2(){
    panel.style.transform = "translateX(-254px)";
    panel2.style.transform = "translateX(-508px)";
    panel2.style.transition = "transform 0.5s ease";
}