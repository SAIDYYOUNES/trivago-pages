
const header = document.querySelector("header");

let icon = document.getElementById("menu-icon");


window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0) ? icon.style.color = "black" : icon.style.color = "white";
   

});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};