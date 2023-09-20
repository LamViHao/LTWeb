// menu
const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const Overlay = document.querySelector("Overlay");
menuButton.addEventListener('click',()=>{
    menu.classList.toggle("navbar__open");
    menuButton.classList.toggle("open");
    Overlay.classList.toggle("show");
})

Overlay.addEventListener('click',()=>{
    menu.classList.toggle("navbar__open");
    menuButton.classList.toggle("open");
    Overlay.classList.toggle("show");
})