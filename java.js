const header = document.querySelector("header");
const logo = document.querySelector('.logo');

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
    logo.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon'); // Fixed selector
let nvmenu = document.querySelector('.nvmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nvmenu.classList.toggle('open');
};
