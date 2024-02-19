document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav");
    const navLinks = document.querySelectorAll(".nav-list a");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("active");
        console.log("Hamburguer clicado");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });
});