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
        subName.textContent = "Reverse Engineered Starter Motor";
        subDates.textContent = "———— Oct '23 — Dec '23 ————";
        subDescription.innerHTML = `
        For the fall term project for our ME212 CAD class, our team decided to
        disassemble a tractor starter motor that one of our group members found.
        What made the task difficult was the lack of information online about 
        the part. Judging from part numbers, I estimated that the starter was used on a
        tractor dating from the 40s or 50s. The aim of the project was the summarize
        all that we've learned modeling with Creo Parametric, as well as to employ proper 
        tolerancing and dimensioning to ensure the quality of our final product. Though this 
        project was mainly in digital form, it also introduced me to my first experiences
        in a shop setting, since I was tasked to disassmble the difficult assemblies of the 
        starter and was forced to use heavier equipment due to the nature of the things
        I had to take apart.
        <br>
        <br>
        For now, you can find the final product on my <a target="_blank" style="color: rgb(75, 75, 75); text-decoration: underline;" href="https://www.linkedin.com/in/tsangabriel/">LinkedIn profile</a> 
        under my projects section.
        <br>
        <br>`;
        subVersion.textContent = "v06.18.2024";
    });
    website.addEventListener("click", function () {
        shrinkAllProjects();
        website.style.filter = "grayscale(0) opacity(95%)";
        website.style.transform = "scale(1.1)";

        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "/images/website.webp";
        subName.textContent = "Documentation Website";
        subDates.textContent = "———— May '24 — Jun '24 ————";
        subDescription.innerHTML = `
        For my own personal documentation and public visibility, I coded an
        entire website from scratch. I was also learning from scratch, since my only
        experience with webside code is messing around with element inspect on my school grades and 
        changing them so I can gaslight my friends. My philosophy was to avoid using frameworks, since my
        main focus for the project is to familiarize myself with front end development
        using raw HTML, CSS, and Javascript.
        <br>
        <br>
        You can find the full repository for this project on my <a target="_blank" style="color: rgb(75, 75, 75); text-decoration: underline;" href="https://github.com/akositerrence/akositerrence.github.io">Github</a> account.
        <br>
        <br>`;
        subVersion.textContent = "v06.18.2024";
    });
    age.addEventListener("click", function () {
        shrinkAllProjects();
        age.style.filter = "grayscale(0) opacity(95%)";
        age.style.transform = "scale(1.1)";

        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "/images/aging.webp";
        subName.textContent = "Accelerated Aging Apparatus";
        subDates.textContent = "———— Jun '24 — Present ————";
        subDescription.innerHTML = `
        This was an inherited project from a senior design built around 3 semesters before I picked it up.
        The device is supposed to simulate spirit maturation, mimicing seasonal temperature fluctuations
        and pressure changes. It does so through a set of relays acting as switches to solenoids, opening and
        closing nitrogen and glycol lines used to pressure and cool the main line. Usually, the full process 
        takes more than a decade. This device is meant to do it in around 1 year.
        <br>
        <br>
        This project is in progress. I'm currently using an Arduino to send instructions to the relays.
        The code can be found on my <a target="_blank" style="color: rgb(75, 75, 75); text-decoration: underline;" href="https://github.com/akositerrence/ndsu-accelerated-aging-apparatus">Github</a> account.
        <br>
        <br>
        `;
        subVersion.textContent = "v06.18.2024";
    });

    window.addEventListener("scroll", function () {
        const textScaler = 1 - (window.scrollY * 0.00018)
        const pageText = document.querySelector(".header-img-text");
        pageText.style.transform = `scale(${textScaler})`;
    });
});