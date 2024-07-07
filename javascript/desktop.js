window.addEventListener("DOMContentLoaded", function () {
    subpage = document.querySelector("#subpage-embed");
    subpage.addEventListener("load", function () {
        subpageAccess = subpage.contentDocument || subpage.contentWindow.document;
        if (window.innerWidth >= 768) {
            closePage = subpageAccess.querySelector("#close-subpage");
            main = subpageAccess.querySelector(".subpage-main-container");
            description = subpageAccess.querySelector("#activities-awards-description");
            names = subpageAccess.querySelector("#activities-awards-name");
            dates = subpageAccess.querySelector("#activities-awards-dates");
            version = subpageAccess.querySelector("#version");

            closePage.style.opacity = 0;
            closePage.style.fontSize = 0;
            main.style.background = "transparent";
            names.style.color = "rgb(180, 180, 190)";
            names.style.fontSize = "3vw";
            dates.style.color = "rgb(180, 180, 190)";
            dates.style.fontSize = "2.5vw";
            description.style.color = "rgb(180, 180, 190)";
            description.style.fontSize = "2vw";
            description.style.lineHeight = "2.75em";
            version.style.lineHeight = "1.75em";
            version.style.fontSize = "2vw";
            version.style.color = "rgb(80, 80, 80)";
        }
    });
});