document.addEventListener('DOMContentLoaded', function () {
    const creoProject = document.querySelector("");
    const website = document.querySelector("");

    creoProject.addEventListener("click", function () {

    });
    website.addEventListener("click", function () {

    });

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;
        const textScaler = 1 - (window.scrollY * 0.00018)

        const pageText = document.querySelector(".header-img-text");

        pageText.style.transform = `scale(${textScaler})`;
    });
});