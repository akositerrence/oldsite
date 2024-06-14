document.addEventListener('DOMContentLoaded', function () {
    const creoProject = document.querySelector("#creomotor");
    const website = document.querySelector("#site");
    const age = document.querySelector("#age");

    page = document.querySelector(".subpage");
    deny = document.querySelector(".denier");

    const subPage = document.querySelector("#subpage-embed");
    subPage.addEventListener("load", function () {
        subPageAccess = subPage.contentDocument || subPage.contentWindow.document;

        if (subPageAccess) {
            closePage = subPageAccess.querySelector("#close-subpage");
            subImage = subPageAccess.querySelector("#activities-awards-images");
            subName = subPageAccess.querySelector("#activities-awards-name");
            subDates = subPageAccess.querySelector("#activities-awards-dates");
            subDescription = subPageAccess.querySelector("#activities-awards-description");
            subVersion = subPageAccess.querySelector("#version");
            closePage.addEventListener("click", function () {
                page.style.transform = "translateX(-100vw)";
                deny.style.opacity = "0";
                deny.style.pointerEvents = "none";
            });
        }
    });

    function shrinkAllProjects() {
        creoProject.style.filter = "grayscale(90%) opacity(60%)";
        website.style.filter = "grayscale(90%) opacity(60%)";
        age.style.filter = "grayscale(90%) opacity(60%)";
        creoProject.style.transform = "scale(1)";
        website.style.transform = "scale(1)";
        age.style.transform = "scale(1)";
    }

    creoProject.addEventListener("click", function () {
        shrinkAllProjects();
        creoProject.style.filter = "grayscale(0) opacity(95%)";
        creoProject.style.transform = "scale(1.1)";

        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "/images/creomotor.webp";
        subName.textContent = "reverse engineered starter motor";
        subDates.textContent = "———— oct '23 — dec '23 ————";
        subDescription.textContent = "test";
        subVersion.textContent = "";
    });
    website.addEventListener("click", function () {
        shrinkAllProjects();
        website.style.filter = "grayscale(0) opacity(95%)";
        website.style.transform = "scale(1.1)";

        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "/images/website.webp";
        subName.textContent = "documentation website";
        subDates.textContent = "———— may '24 — jun '24 ————";
        subDescription.textContent = `
        for my own personal documentation and public visibility, i coded an
        entire website from scratch. i was also learning from scratch, since my only
        experience with webside code is messing around with element inspect on my school grades and 
        changing them so i can gaslight my friends. my philosophy was to avoid using frameworks, since my
        main focus for the project is to familiarize myself with front end development
        using raw html, css, and javascript.`;
        subVersion.textContent = "";
    });
    age.addEventListener("click", function () {
        shrinkAllProjects();
        age.style.filter = "grayscale(0) opacity(95%)";
        age.style.transform = "scale(1.1)";

        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "/images/aging.webp";
        subName.textContent = "accelerated aging apparatus";
        subDates.textContent = "———— jun '24 — present ————";
        subDescription.textContent = "test";
        subVersion.textContent = "";
    });

    const cadButton = document.querySelector("#cad");
    const digButton = document.querySelector("#mod");
    const simButton = document.querySelector("#sim");
    const proButton = document.querySelector("#pro");
    const embButton = document.querySelector("#emb");
    const manButton = document.querySelector("#man");
    const cadText = document.querySelector("#cad3");
    const digText = document.querySelector("#mod3");
    const simText = document.querySelector("#sim3");
    const proText = document.querySelector("#pro3");
    const embText = document.querySelector("#emb3");
    const manText = document.querySelector("#man3");
    let cadState = false;
    let digState = false;
    let simState = false;
    let proState = false;
    let embState = false;
    let manState = false;

    cadButton.addEventListener("click", function () {
        if (cadState == false) {
            cadText.style.filter = "opacity(100%)";
            cadText.style.scale = "105%";
            cadState = !cadState;
        } else {
            cadText.style.filter = "opacity(65%)";
            cadText.style.scale = "90%";
            cadState = !cadState;
        }
    });

    digButton.addEventListener("click", function () {
        if (digState == false) {
            digText.style.filter = "opacity(100%)";
            digText.style.scale = "105%";
            digState = !digState;
        } else {
            digText.style.filter = "opacity(65%)";
            digText.style.scale = "90%";
            digState = !digState;
        }
    });

    simButton.addEventListener("click", function () {
        if (simState == false) {
            simText.style.filter = "opacity(100%)";
            simText.style.scale = "105%";
            simState = !simState;
        } else {
            simText.style.filter = "opacity(65%)";
            simText.style.scale = "90%";
            simState = !simState;
        }
    });

    proButton.addEventListener("click", function () {
        if (proState == false) {
            proText.style.filter = "opacity(100%)";
            proText.style.scale = "105%";
            proState = !proState;
        } else {
            proText.style.filter = "opacity(65%)";
            proText.style.scale = "90%";
            proState = !proState;
        }
    });

    embButton.addEventListener("click", function () {
        if (embState == false) {
            embText.style.filter = "opacity(100%)";
            embText.style.scale = "105%";
            embState = !embState;
        } else {
            embText.style.filter = "opacity(65%)";
            embText.style.scale = "90%";
            embState = !embState;
        }
    });

    manButton.addEventListener("click", function () {
        if (manState == false) {
            manText.style.filter = "opacity(100%)";
            manText.style.scale = "105%";
            manState = !manState;
        } else {
            manText.style.filter = "opacity(65%)";
            manText.style.scale = "90%";
            manState = !manState;
        }
    });

    window.addEventListener("scroll", function () {
        const textScaler = 1 - (window.scrollY * 0.00018)
        const pageText = document.querySelector(".header-img-text");
        pageText.style.transform = `scale(${textScaler})`;
    });
});