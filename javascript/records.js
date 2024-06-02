document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        const textScaler = 1 - (window.scrollY * 0.00018)
        const pageText = document.querySelector(".header-img-text");
        pageText.style.transform = `scale(${textScaler})`;
    });
});