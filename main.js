// vars
let button = document.querySelector("#navMenu");
let container = document.querySelector(".balckContainer");
let nav = document.querySelector("navbar-section");

button.addEventListener("click", function() {
    container.classList.toggle("active");
    button.classList.toggle("active");
    nav.classList.toggle("active");
});