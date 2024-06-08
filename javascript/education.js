document.addEventListener('DOMContentLoaded', function () {
    page = document.querySelector(".subpage");
    deny = document.querySelector(".denier");
    closePage = document.querySelector("#close-subpage");

    closePage.addEventListener("click", function () {
        page.style.transform = "translateY(-50%) translateX(-100vw)";
        deny.style.opacity = "0";
        deny.style.pointerEvents = "none";
    });

    rsrc = document.querySelector("#rsrc");
    asme = document.querySelector("#asme");
    aiaa = document.querySelector("#aiaa");
    inno = document.querySelector("#inno");
    ewbs = document.querySelector("#ewbs");
    robo = document.querySelector("#robo");
    gcsp = document.querySelector("#gcsp");
    clim = document.querySelector("#clim");
    clar = document.querySelector("#clar");
    orch = document.querySelector("#orch");

    rsrc.addEventListener("click", function () {
        page.style.transform = "translateY(-50%) translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
    });
    asme.addEventListener("click", function () {
        page.style.transform = "translateY(-50%) translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
    });
    aiaa.addEventListener("click", function () {
        page.style.transform = "translateY(-50%) translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
    });
    inno.addEventListener("click", function () {
        page.style.transform = "translateY(-50%) translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
    });
    ewbs.addEventListener("click", function () {
        page.style.transform = "translateY(-50%) translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
    });
    robo.addEventListener("click", function () {
        page.style.transform = "translateY(-50%) translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
    });
    gcsp.addEventListener("click", function () {
        page.style.transform = "translateY(-50%) translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
    });
    clim.addEventListener("click", function () {
        page.style.transform = "translateY(-50%) translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
    });
    clar.addEventListener("click", function () {
        page.style.transform = "translateY(-50%) translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
    });
    orch.addEventListener("click", function () {
        page.style.transform = "translateY(-50%) translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
    });

    window.addEventListener("scroll", function () {
        const textScaler = 1 - (window.scrollY * 0.00018)
        const pageText = document.querySelector(".header-img-text");
        pageText.style.transform = `scale(${textScaler})`;
    });
});