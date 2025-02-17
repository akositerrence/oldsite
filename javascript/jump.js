const home = 1;
const portfolio = 2;
const reserved = 3;
const education = 4;
const records = 5;
let current;

window.onload = function () {
    setTimeout(function () {
        let slideIn = document.getElementsByClassName("home-screen-container")[0];
        if (slideIn) {
            slideIn.style.transition = "all 3s ease";
            slideIn.style.right = "0vw";
            slideIn.style.borderRadius = "0vw";
            setTimeout(function () {
                slideIn.style.transition = "all 1s ease";
            }, 1000);
        }
    }, 500);
}

document.addEventListener('DOMContentLoaded', function () {
    function setCurrentPage() {
        const path = window.location.pathname;
        const page = path.split("/").pop();
        switch (page) {
            case 'index.html':
                current = home;
                break;
            case 'portfolio.html':
                current = portfolio;
                break;
            case 'education.html':
                current = education;
                break;
            case 'records.html':
                current = records;
                break;
            case 'contact.html':
                current = contact;
                break;
            default:
                current = home;
        }
    }

    setCurrentPage();

    function openNavPage() {
        let page = document.getElementsByClassName("home-screen-container")[0];
        let fadeOutBar = document.querySelector(".home-top");
        let navBack = document.getElementsByClassName("nav-page")[0];
        if (page) {
            page.style.right = "41.5vw";
            page.style.borderRadius = "10vw";
            page.style.transform = "scale(0.95)";
            fadeOutBar.style.opacity = 0;
            navBack.style.opacity = 1;
        } else {
            console.error("element not found");
        }
    }

    function sendMessageToMain(message) {
        window.parent.postMessage(message, "*");
    }

    let menuIcon = document.querySelector(".menu-icon-b");
    if (menuIcon) {
        menuIcon.addEventListener("click", function () {
            sendMessageToMain("openNavPage");
        });
    }

    function closeNavPage() {
        let page = document.getElementsByClassName("home-screen-container")[0];
        let fadeOutBar = document.querySelector(".home-top");
        let navBack = document.getElementsByClassName("nav-page")[0];
        if (page) {
            page.style.right = "0vw";
            page.style.borderRadius = "0vw";
            page.style.transform = "scale(1)";
            fadeOutBar.style.opacity = 1;
            navBack.style.opacity = 0;
        }
    }

    function delayedExit(destination) {
        let page = document.getElementsByClassName("home-screen-container")[0];
        let navBack = document.getElementsByClassName("nav-page")[0];
        page.style.right = "100vw";
        page.style.borderRadius = "15vw";
        navBack.style.opacity = 0;

        setTimeout(function () {
            window.location.href = destination;
        }, 1000);
    }
    window.addEventListener("message", function (event) {
        if (event.data === "openNavPage") {
            openNavPage();
        } else if (event.data === "closeNavPage") {
            closeNavPage();
        }

        let navigationFrame = document.querySelector("iframe.nav-page");
        let navAccess = navigationFrame.contentDocument || navigationFrame.contentWindow.document;
        let returnButton = null;

        homeButton = navAccess.querySelector("#home-button");
        portfolioButton = navAccess.querySelector("#home-portfolio");
        educationButton = navAccess.querySelector("#home-education");
        recordsButton = navAccess.querySelector("#home-records");
        contactButton = navAccess.querySelector("#home-contact");

        switch (current) {
            case home:
                returnButton = navAccess.querySelector("#home-button");
                current = home;
                portfolioButton.addEventListener("click", function event() { delayedExit("/pages/portfolio.html"); });
                educationButton.addEventListener("click", function event() { delayedExit("/pages/education.html") });
                recordsButton.addEventListener("click", function event() { delayedExit("/pages/records.html") });
                break;
            case portfolio:
                returnButton = navAccess.querySelector("#home-portfolio");
                current = portfolio;
                homeButton.addEventListener("click", function event() { delayedExit("/index.html") });
                educationButton.addEventListener("click", function event() { delayedExit("/pages/education.html") });
                recordsButton.addEventListener("click", function event() { delayedExit("/pages/records.html") });
                break;
            case education:
                returnButton = navAccess.querySelector("#home-education");
                current = education;
                homeButton.addEventListener("click", function event() { delayedExit("/index.html") });
                portfolioButton.addEventListener("click", function event() { delayedExit("/pages/portfolio.html") });
                recordsButton.addEventListener("click", function event() { delayedExit("/pages/records.html") });
                break;
            case records:
                returnButton = navAccess.querySelector("#home-records");
                current = records;
                homeButton.addEventListener("click", function event() { delayedExit("/index.html") });
                portfolioButton.addEventListener("click", function event() { delayedExit("/pages/portfolio.html") });
                educationButton.addEventListener("click", function event() { delayedExit("/pages/education.html") });
                break;
            default:
                returnButton = null;
        }

        if (returnButton) {
            returnButton.addEventListener("click", function (event) {
                sendMessageToMain("closeNavPage");
            });
        } else {
            console.error("button not found");
        }

    });

    window.addEventListener("load", function (event) {
        if (window.innerWidth >= 768) {

            let homeDesktopButton = document.querySelector("#desktopHome");
            let portfolioDesktopButton = document.querySelector("#desktopPortfolio");
            let educationDesktopButton = document.querySelector("#desktopEducation");

            if (homeDesktopButton && portfolioDesktopButton && educationDesktopButton) {
                switch (current) {
                    case home:
                        homeDesktopButton.addEventListener("click", function event() {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        });

                        portfolioDesktopButton.addEventListener("click", function event() {
                            window.location.href = "/pages/portfolio.html";
                        });

                        educationDesktopButton.addEventListener("click", function event() {
                            window.location.href = "/pages/education.html";
                        });
                        break;
                    case portfolio:
                        homeDesktopButton.addEventListener("click", function event() {
                            window.location.href = "/index.html";
                        });

                        portfolioDesktopButton.addEventListener("click", function event() {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        });

                        educationDesktopButton.addEventListener("click", function event() {
                            window.location.href = "/pages/education.html";
                        });
                        break;
                    case education:
                        homeDesktopButton.addEventListener("click", function event() {
                            window.location.href = "/index.html";
                        });

                        portfolioDesktopButton.addEventListener("click", function event() {
                            window.location.href = "/pages/portfolio.html";
                        });

                        educationDesktopButton.addEventListener("click", function event() {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        });
                        break;
                    default:
                        null;
                }
            }
        }
    });
});

