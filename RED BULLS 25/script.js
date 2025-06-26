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
function come(){
    location.href = "Entrada.html";
}
function come1(){
    location.href = "Lanzamientos.html";
}