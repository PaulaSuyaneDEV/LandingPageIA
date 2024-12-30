document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".navbar .toggle");
    const navLinks = document.querySelector(".navbar .nav-links");

    toggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});