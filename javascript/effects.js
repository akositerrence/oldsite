document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;
        const parallaxOffset = scrollPosition * 0.2;
        const headerOffset = -scrollPosition * 0.05;
        const scrollOffset = scrollPosition * 0.3;
        const buttonOffset = scrollPosition * 0.01;
        const morseOffset = -scrollPosition * 0.05;
        const imgHome = document.querySelector(".img-home");
        const headEmbed = document.querySelector("#head-embed");
        const navmenu = document.querySelector(".nav-page");
        const fadeEnd = 350;

        var topFadeBar = headEmbed.contentDocument || headEmbed.contentWindow.document;
        var fadedName = topFadeBar.querySelector("h1");
        var navPage = navmenu.contentDocument || headEmbed.contentWindow.document;
        var navScroll = navPage.querySelector(".scrollbar");
        var navMorse = navPage.querySelector(".nav-morse-container");
        var navButtons = navPage.querySelector(".off-screen-buttons");

        navScroll.style.transform = `translateY(${scrollOffset}px)`;
        navMorse.style.transform = `translateY(${morseOffset}px)`;
        navButtons.style.transform = `translateY(${buttonOffset}px)`;
        imgHome.style.transform = `translateY(${parallaxOffset}px)`;
        fadedName.style.opacity = Math.max(0, ((fadeEnd - scrollPosition) / fadeEnd));
        fadedName.style.transform = `translateY(${headerOffset}px)`;
    });
});
