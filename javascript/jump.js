const home = 1;
const portfolio = 2;
const involvement = 3;
const education = 4;
const resources = 5;
const contact = 6;
let current = home;

document.addEventListener('DOMContentLoaded', function () {
    function openNavPage() {
        let page = document.getElementsByClassName("home-screen-container")[0];
        let fadeOutBar = document.querySelector(".home-top");
        if (page) {
            page.style.right = "40vw";
            page.style.borderRadius = "15vw";
            page.style.transform = "scale(0.95)";
            fadeOutBar.style.opacity = 0;
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

    function closeNavPage() {
        let page = document.getElementsByClassName("home-screen-container")[0];
        let fadeOutBar = document.querySelector(".home-top");
        if (page) {
            page.style.right = "0vw";
            page.style.borderRadius = "0vw";
            page.style.transform = "scale(1)";
            fadeOutBar.style.opacity = 1;
        } else {
            console.error("element not found");
        }
    }

    function returnVoid() {
        return ("javascript:void(0);")
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

        switch (current) {
            case home:
                returnButton = navAccess.querySelector("#home-button");
                current = home;
                break;
            case portfolio:
                returnButton = navAccess.querySelector("#home-portfolio");
                current = portfolio;
                break;
            case involvement:
                returnButton = navAccess.querySelector("#home-involvement");
                current = involvement;
                break;
            case education:
                returnButton = navAccess.querySelector("#home-education");
                current = education;
                break;
            case resources:
                returnButton = navAccess.querySelector("#home-resources");
                current = resources;
                break;
            case contact:
                returnButton = navAccess.querySelector("#home-contact");
                current = contact;
                break;
            default:
                returnButton = null;
                break;
        }

        if (returnButton) {
            returnButton.addEventListener("click", function (event) {
                sendMessageToMain("closeNavPage");
            });
        } else {
            console.error("button not found");
        }
    });
});