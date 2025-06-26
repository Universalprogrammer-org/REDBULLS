function menu(){
    let menu = document.getElementById("menu");
    if(menu.style.display === "none" || menu.style.display === ""){
        menu.style.display = "block";
        menu.style.animation = "appear 1s forwards";
    }
    else{
        menu.style.animation = "disapper 1s forwards";
        setTimeout(function() {
            menu.style.display = "none";
        }, 1001);
    }
}
let a = document.getElementById("audio");

a.addEventListener("click", function() {
    a.play()
});
function come(){
    location.href = "Entrada.html";
}
function come1(){
    location.href = "RED_BULLS.html";
}
