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

            closePage.style.opacity = 0;
            closePage.style.fontSize = 0;
            main.style.background = "transparent";
            names.style.color = "rgb(180, 180, 190)";
            names.style.fontSize = "3vw";
            dates.style.color = "rgb(180, 180, 190)";
            dates.style.fontSize = "2.5vw";
            description.style.color = "rgb(180, 180, 190)";
            description.style.fontSize = "2vw";
        }
    });
});

/*

rgb(19, 18, 18)

#activities-awards-name {
    color: rgb(75, 75, 75);
    padding-top: 5vw;
    line-height: 1.5em;
    font-size: 4.25vw;
    text-align: center;
    padding-left: 15vw;
    padding-right: 15vw;
}

#activities-awards-dates {
    color: rgb(75, 75, 75);
    padding-top: 2.25vw;
    line-height: 1.5em;
    font-size: 3.3vw;
    text-align: center;
    padding-left: 10vw;
    padding-right: 10vw;
}

#activities-awards-description {
    color: rgb(75, 75, 75);
    padding-top: 2.75vw;
    line-height: 1.75em;
    font-size: 3.3vw;
    text-align: justify;
    padding-left: 10vw;
    padding-right: 10vw;
}

#version {
    color: rgb(75, 75, 75);
    padding-top: 1vw;
    padding-bottom: 8vw;
    line-height: 1.5em;
    font-size: 2.5vw;
}

width: 90vw;
    height: 80vh;
rgb(180, 180, 190)
.subpage - main - container {
    display: flex;
    align - items: center;
    justify - content: center;
    flex - direction: column;
    padding - top: 5vw;
    background: rgb(240, 240, 230);
    border - radius: 5vw;
}
*/