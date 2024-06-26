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
        For our ME212 CAD class's fall term project, our team decided to
        disassemble a tractor's starter motor sourced from one of our group members' farm.
        Judging from part numbers, I estimated that the starter was previously implemented on a tractor 
        dating from the 1940s - 1950s. This added a thick, navigable layer of complexity to our project
        due to the scarcity of information online about the specifics of our equipment. However, this
        layer was thinned by the exemplary level of collaboration and commuication my peers and I achieved.
        <br>
        <br>
        The aim of the project was the synthesize all that we've learned modeling with Creo Parametric.
        This included practicing precise tolerancing and dimensioning efforts to ensure the quality of our 
        final product. Though the project was prodominantly in digital form, it also marked my
        inititation to a shop setting. I was tasked with disassembling and modeling the more stubborn assemblies
        of the starter, which required the use of heavier equipment with the nature of the 
        components involved.
        <br>
        <br>
        As of now, you can find the final product on my <a target="_blank" style="color: rgb(75, 75, 75); text-decoration: underline;" href="https://www.linkedin.com/in/tsangabriel/">LinkedIn profile</a> 
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
        For my own personal documentation 
        and public visibility, I coded an entire website from scratch. I was also learning from 
        scratch, since my prior experience with webside code was limited to messing around with element inspect 
        on my school grades and changing them so I can gaslight my friends. 
        <br>
        <br>
        It was a significant learning experience, and driven by the philosophy of fundamentals,
        I deliberately avoided frameworks, since my primary goal was a thorough understanding of 
        introductory front-end development through raw HTML, CSS, and Javascript. I also made it
        a point to implement a few best practices I learned from podcasts and readings, such as using a 
        mobile first approach, relative units, image optimization, and much more.
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
        This was an inherited project from a senior design built initiated about a year before 
        I assumed responsibility. The device aims to simulate spirit maturation by mimicking seasonal
        temperature fluctuations and pressure changes. This is achieved through a set of relays, acting as 
        switches to solenoids, opening and closing nitrogen and glycol lines used to influence the 
        main line's environment. While traditional maturation methods take over a decade, this design is
        poised to achieve similar results in about a year.
        <br>
        <br>
        This is a dynamic project as it is in progress. I'm currently using an Arduino to send instructions to the relays.
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