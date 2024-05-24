document.addEventListener('DOMContentLoaded', function () {
    function openNavPage() {
        let page = document.getElementsByClassName("home-screen-container")[0];
        if (page) {
            page.style.right = "40vw";
            page.style.borderRadius = "10vw";
            page.style.transform = "scale(0.95)";
        } else {
            console.error("element not found");
        }
    }

    function closeNavPage() {
        let page = document.getElementsByClassName("home-screen-container")[0];
        if (page) {
            page.style.right = "0vw";
            page.style.borderRadius = "0vw";
            page.style.transform = "scale(1)";
        } else {
            console.error("element not found");
        }
    }

    function sendMessageToMain(message) {
        window.parent.postMessage(message, "*");
    }

    let menuIcon = document.querySelector(".menu-icon-b");
    if (menuIcon) {
        menuIcon.addEventListener("click", function (event) {
            sendMessageToMain("openNavPage");
        });
    } else {
        console.error("menu icon not found");
    }

    let homeButton = document.querySelector("#home-button");
    if (homeButton) {
        homeButton.addEventListener("click", function (event) {
            sendMessageToMain("closeNavPage");
        });
    } else {
        console.error("home button not found");
    }

    window.addEventListener("message", function (event) {
        if (event.data === "openNavPage") {
            openNavPage();
        } else if (event.data === "closeNavPage") {
            closeNavPage();
        }
    });

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;
        const parallaxOffset = scrollPosition * 0.2;
        const headerOffset = -scrollPosition * 0.05;
        const scrollOffset = scrollPosition * 0.2;
        const buttonOffset = scrollPosition * 0.01;
        const morseOffset = -scrollPosition * 0.05;
        const imgHome = document.querySelector(".img-home");
        const headBar = document.querySelector(".home-top");
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
        headBar.style.transform = `translateY(${scrollPosition}px)`;
        fadedName.style.transform = `translateY(${headerOffset}px)`;
    });
});
