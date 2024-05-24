document.addEventListener('DOMContentLoaded', function () {
    function openNavPage() {
        let page = document.getElementsByClassName("home-screen-container")[0];
        if (page) {
            page.style.right = "50vw";
        } else {
            console.error("element not found");
        }
    }

    function closeNavPage() {
        let page = document.getElementsByClassName("home-screen-container")[0];
        if (page) {
            page.style.right = "0vw";
        } else {
            console.error("element not found");
        }
    }

    function sendMessageToMain(message) {
        window.parent.postMessage(message, "*");
    }

    let menuIcon = document.querySelector(".menu-icon-b");
    if (menuIcon) {
        menuIcon.addEventListener("click", openNavPage);
    } else {
        console.error("menu icon not found");
    }

    let homeButton = document.querySelector("#home-button");
    if (homeButton) {
        homeButton.addEventListener("click", function () {
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
    })
});

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const parallaxOffset = scrollPosition * 0.65;

    document.querySelector('.img-home').style.transform = `translateY(${parallaxOffset}px)`;
});
