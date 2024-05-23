document.addEventListener('DOMContentLoaded', function () {
    let page = document.getElementsByClassName("home-screen-container")[0];

    function openNavPage() {
        if (page) {
            page.style.right = "50vw";
        } else {
            console.error('element not found')
        }
    }

    let menuIcon = document.querySelector('.menu-icon-b');
    if (menuIcon) {
        menuIcon.addEventListener('click', openNavPage);
    } else {
        console.error('menu icon not found')
    }

});