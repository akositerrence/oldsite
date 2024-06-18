document.addEventListener('DOMContentLoaded', function () {
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

    rsrc = document.querySelector("#rsrc");
    asme = document.querySelector("#asme");
    aiaa = document.querySelector("#aiaa");
    inno = document.querySelector("#inno");
    ewbs = document.querySelector("#ewbs");
    robo = document.querySelector("#robo");
    gcsp = document.querySelector("#gcsp");
    clim = document.querySelector("#clim");
    clar = document.querySelector("#clar");
    orch = document.querySelector("#orch");
    rsrcText = `
    test`;
    asmeText = `
    test`;
    aiaaText = `
    test`;
    innoText = `
    test`;
    ewbsText = `
    test`;
    roboText = `
    test`;
    gcspText = `
    test`;
    climText = `
    test`;
    clarText = `
    test`;
    orchText = `
    test`;
    rsrc.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "undergraduate research";
        subDates.textContent = "———— nov '23 — present ————";
        subDescription.textContent = rsrcText;
        subVersion.textContent = "";
    });
    asme.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "/images/asme.webp";
        subName.textContent = "american society of mechanical engineers";
        subDates.textContent = "———— sep '23 — present ————";
        subDescription.textContent = asmeText;
        subVersion.textContent = "";
    });
    aiaa.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "/images/aiaa.webp";
        subName.textContent = "american institute of aeronautics and astronautics";
        subDates.textContent = "———— sep '23 — present ————";
        subDescription.textContent = aiaaText;
        subVersion.textContent = "";
    });
    inno.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "innovation studio";
        subDates.textContent = "———— sep '23 — present ————";
        subDescription.textContent = innoText;
        subVersion.textContent = "";
    });
    ewbs.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "engineers without borders";
        subDates.textContent = "———— feb '24 — present ————";
        subDescription.textContent = ewbsText;
        subVersion.textContent = "";
    });
    robo.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "/images/robotics.webp";
        subName.textContent = "bison robotics";
        subDates.textContent = "———— sep '23 — present ————";
        subDescription.textContent = roboText;
        subVersion.textContent = "";
    });
    gcsp.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "grand challenges scholars program";
        subDates.textContent = "———— jan '24 — present ————";
        subDescription.textContent = "";
        subVersion.textContent = "";
    });
    clim.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "climbing club";
        subDates.textContent = "———— jan '24 — present ————";
        subDescription.textContent = gcspText;
        subVersion.textContent = "";
    });
    clar.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "clarinet choir ensemble";
        subDates.textContent = "———— aug '23 — dec '23 ————";
        subDescription.textContent = clarText;
        subVersion.textContent = "";
    });
    orch.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "university symphony orchestra";
        subDates.textContent = "———— aug '23 — dec '23 ————";
        subDescription.textContent = orchText;
        subVersion.textContent = "";
    });

    nhso = document.querySelector("#nhso");
    nths = document.querySelector("#nths");
    flig = document.querySelector("#flig");
    scio = document.querySelector("#scio");
    scib = document.querySelector("#scib");
    wind = document.querySelector("#wind");
    jazz = document.querySelector("#jazz");
    marc = document.querySelector("#marc");
    colr = document.querySelector("#colr");
    pito = document.querySelector("#pito");
    alls = document.querySelector("#alls");
    bmso = document.querySelector("#bmso");
    conc = document.querySelector("#conc");
    cros = document.querySelector("#cros");
    trac = document.querySelector("#trac");
    nhsoText = `
    test`;
    nthsText = `
    test`;
    fligText = `
    test`;
    scioText = `
    test`;
    scibText = `
    test`;
    windText = `
    `;
    jazzText = `
    test`;
    marcText = `
    test`;
    colrText = `
    test`;
    pitoText = `
    test`;
    allsText = `
    test`;
    bmsoText = `
    test`;
    concText = `
    test`;
    crosText = `
    test`;
    tracText = `
    test`;
    nhso.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "national honor society";
        subDates.textContent = "———— apr '22 — may '23 ————";
        subDescription.textContent = rsrcText;
        subVersion.textContent = "";
    });
    nths.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "national technical honor society";
        subDates.textContent = "———— apr '22 — may '23 ————";
        subDescription.textContent = rsrcText;
        subVersion.textContent = "";
    });
    flig.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "/images/flight.webp";
        subName.textContent = "national technical honor society";
        subDates.textContent = "———— jul '21 — aug '23 ————";
        subDescription.textContent = rsrcText;
        subVersion.textContent = "";
    });
    scio.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "national technical honor society";
        subDates.textContent = "———— aug '19 — may '23 ————";
        subDescription.textContent = rsrcText;
        subVersion.textContent = "";
    });
    scib.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "national technical honor society";
        subDates.textContent = "———— dec '21 — feb '23 ————";
        subDescription.textContent = rsrcText;
        subVersion.textContent = "";
    });
    wind.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "/images/centuryband.webp";
        subName.textContent = "wind ensemble";
        subDates.textContent = "———— aug '19 — may '23 ————";
        subDescription.textContent = windText;
        subVersion.textContent = "";
    });
    jazz.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "/images/jazz.webp";
        subName.textContent = "jazz ensemble";
        subDates.textContent = "———— aug '22 — may '23 ————";
        subDescription.textContent = rsrcText;
        subVersion.textContent = "";
    });
    marc.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "marching band";
        subDates.textContent = "———— aug '19 — may '23 ————";
        subDescription.textContent = rsrcText;
        subVersion.textContent = "";
    });
    colr.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "/images/colorguard.webp";
        subName.textContent = "color guard";
        subDates.textContent = "———— aug '21 — may '23 ————";
        subDescription.textContent = rsrcText;
        subVersion.textContent = "";
    });
    pito.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "theatre pit orchestra";
        subDates.textContent = "———— sep '20 — may '23 ————";
        subDescription.textContent = rsrcText;
        subVersion.textContent = "";
    });
    alls.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "north dakota all state music";
        subDates.textContent = "———— march '20 — march '23 ————";
        subDescription.textContent = rsrcText;
        subVersion.textContent = "";
    });
    bmso.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "bismarck mandan youth symphony";
        subDates.textContent = "———— sep '21 — apr '22 ————";
        subDescription.textContent = rsrcText;
        subVersion.textContent = "";
    });
    conc.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "concordia college honor band";
        subDates.textContent = "———— apr '23 ————";
        subDescription.textContent = rsrcText;
        subVersion.textContent = "";
    });
    cros.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "cross country";
        subDates.textContent = "———— june '22 — sep '23 ————";
        subDescription.textContent = rsrcText;
        subVersion.textContent = "";
    });
    trac.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "track and field";
        subDates.textContent = "———— jan '22 — march '23 ————";
        subDescription.textContent = rsrcText;
        subVersion.textContent = "";
    });

    vald = document.querySelector("#vald");
    schl = document.querySelector("#schl");
    apsc = document.querySelector("#apsc");
    pres = document.querySelector("#pres");
    dola = document.querySelector("#dola");
    melb = document.querySelector("#melb");
    thom = document.querySelector("#thom");
    wold = document.querySelector("#wold");
    vlnt = document.querySelector("#vlnt");
    sosc = document.querySelector("#sosc");
    four = document.querySelector("#four");
    sous = document.querySelector("#sous");
    wood = document.querySelector("#wood");
    valdText = `
    Ranked 1 out of more than 350 students, percentile ranking, 4.0 on 4.0 scale.
    <br>
    <a target="_blank" style="padding-top: 2.5vw; color: rgb(75, 75, 75); text-decoration: underline; display: flex; justify-content: center" href="https://www.bismarckschools.org/CHS">More information</a>`;
    schlText = `
    "The North Dakota Scholars Program is open to high school students who score 
    at or above the ninety-fifth percentile among all ND test-takers who took the 
    ACT or SAT prior to July 1st in the calendar year preceding the individual's 
    enrollment in college. Students will be awarded in descending rank order, 
    based on test scores, until available funds are expended or until the pool 
    of applicants has been exhausted."
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); text-decoration: underline; display: flex; justify-content: center" href="https://ndus.edu/paying-for-college/nd-scholars-program/">More information</a>`;
    apscText = `
    "Granted to students who receive an average score of at least 3.5 on all AP 
    Exams taken, and scores of 3 or higher on five or more of these exams"
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); text-decoration: underline; display: flex; justify-content: center" href="https://apcentral.collegeboard.org/exam-administration-ordering-scores/scores/awards/scholar-awards">More information</a>`;
    presText = `
    "This award recognizes academic success in the classroom. To be eligible, students 
    must meet requirements, including grade point average or, school-set criteria and 
    choice of state tests or teacher recommendations."
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); text-decoration: underline; display: flex; justify-content: center" href="https://ndus.edu/paying-for-college/nd-scholars-program/">More information</a>`;
    dolaText = `
    "Bismarck Dollars for Scholars is a locally operated and supported, non-profit, 
    tax-exempt scholarship foundation. Operated by an all-volunteer Board of Directors, 
    the purpose of Dollars for Scholars is to expand access to educational opportunities 
    by involving and assisting our community in the support of students and in the 
    encouragement of educational achievement."
    <br>
    <a target="_blank" style="padding-top: 2.5vw; color: rgb(75, 75, 75); text-decoration: underline; display: flex; justify-content: center" href="https://bismarck.dollarsforscholars.org/">More information</a>`;
    melbText = `
    "The recipient of this award will receive $300.00 scholarship upon graduation 
    from Century High School. Voted upon by members of the Concert Band and Wind
    Ensemble, it is presented to the underclassman that displays the most dedication,
    spirit, and enthusiasm.It is given by Ron and Carol Melby in memory of their 
    son Brad."
    <br>
    <a target="_blank" style="padding-top: 2.5vw; color: rgb(75, 75, 75); text-decoration: underline; display: flex; justify-content: center" href="https://centurypatriotbands.weebly.com/awards-and-lettering.html">More information</a>`;
    thomText = `
    "This scholarship is given in memory of Danie Thomssen (Class of 2016).
    The recipient of this award will receive a $1,000.00 scholarship upon graduation.
    It is presented to one senior in the Century High School Band Program that the
    band directors feel demonstrate a strong sense dedication to the band program,
    leadership in the classroom, self-discipline in their practice, and a high level
    of musical excellence."
    <br>
    <a target="_blank" style="padding-top: 2.5vw; color: rgb(75, 75, 75); text-decoration: underline; display: flex; justify-content: center" href="https://centurypatriotbands.weebly.com/awards-and-lettering.html">More information</a>`;
    woldText = `
    "The scholarship will be awarded annually to 5 BPS senior students who have 
    excelled in their academic pursuits and will be attending college. 
    Preference will be given to those majoring in the area of science who 
    have a strong sense of giving back. Selection will be based on a minimum 
    3.0 GPA and minimum cumulative ACT of 20."
    <br>
    <a target="_blank" style="padding-top: 2.5vw; color: rgb(75, 75, 75); text-decoration: underline; display: flex; justify-content: center" href="https://bpsfoundation.com/project/wold-family-scholarship/">More information</a>`;
    vlntText = `
    I was recognized for my volunteer work, having clocked more than 100 hours
    of volunteer service across various institutions.
    <br>
    <a target="_blank" style="padding-top: 2.5vw; color: rgb(75, 75, 75); text-decoration: underline; display: flex; justify-content: center" href="https://www.bismarckschools.org/CHS">More information</a>`;
    soscText = `
    I was part of the science olympiad team that won the state 
    championship for the first time in our school's history. Our team ended up
    39th overall nationally.
    <br>
    <a target="_blank" style="padding-top: 2.5vw; color: rgb(75, 75, 75); text-decoration: underline; display: flex; justify-content: center" href="https://www.ndsu.edu/olympiad/">More information</a>`;
    fourText = `
    Recognition for being chosen to be a part of the All-State Music Festival
    for all four years of high school.
    <br>
    <a target="_blank" style="padding-top: 2.5vw; color: rgb(75, 75, 75); text-decoration: underline; display: flex; justify-content: center" href="https://www.ndallstate.org/">More information</a>`;
    sousText = `
    "This award is given to a senior band member for outstanding and unique
    achievement and service in band through exemplary leadership, musicianship,
    attitude, and dedication.  Selected by the directors, the recipient of this
    award will have their name inscribed on a brass plaque, which is proudly
    displayed in the band room."
    <br>
    <a target="_blank" style="padding-top: 2.5vw; color: rgb(75, 75, 75); text-decoration: underline; display: flex; justify-content: center" href="https://centurypatriotbands.weebly.com/awards-and-lettering.html">More information</a>`;
    woodText = `
    "This award, selected by the directors, is given to the member of
    Jazz Ensemble #2 that demonstrates outstanding leadership, improvisation,
    and dedication to jazz band."
    <br>
    <a target="_blank" style="padding-top: 2.5vw; color: rgb(75, 75, 75); text-decoration: underline; display: flex; justify-content: center" href="https://centurypatriotbands.weebly.com/awards-and-lettering.html">More information</a>`;
    vald.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "Valedictorian";
        subDates.textContent = "———— May '23 ————";
        subDescription.innerHTML = valdText;
        subVersion.textContent = "v06.18.2024";
    });
    schl.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "North Dakota Scholars Award";
        subDates.textContent = "———— Jun '23 ————";
        subDescription.innerHTML = schlText;
        subVersion.textContent = "v06.18.2024";
    });
    apsc.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "AP Scholar with Distinction";
        subDates.textContent = "———— Jul '23 ————";
        subDescription.innerHTML = apscText;
        subVersion.textContent = "v06.18.2024";
    });
    pres.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "Presidential Award for Academic Excellence";
        subDates.textContent = "———— Apr '23 ————";
        subDescription.innerHTML = presText;
        subVersion.textContent = "v06.18.2024";
    });
    dola.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "Bismarck Dollars for Scholars Scholarship";
        subDates.textContent = "———— May '23 ————";
        subDescription.innerHTML = dolaText;
        subVersion.textContent = "v06.18.2024";
    });
    melb.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "Brad Melby Memorial Scholarship";
        subDates.textContent = "———— May '23 ————";
        subDescription.innerHTML = melbText;
        subVersion.textContent = "v06.18.2024";
    });
    thom.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "Danie Thomssen Memorial Scholarship";
        subDates.textContent = "———— May '23 ————";
        subDescription.innerHTML = thomText;
        subVersion.textContent = "v06.18.2024";
    });
    wold.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "Wold Family Scholarship";
        subDates.textContent = "———— May '23 ————";
        subDescription.innerHTML = woldText;
        subVersion.textContent = "v06.18.2024";
    });
    vlnt.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "Outstanding Volunteer Award";
        subDates.textContent = "———— Apr '23 ————";
        subDescription.innerHTML = vlntText;
        subVersion.textContent = "v06.18.2024";
    });
    sosc.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "Science Olympiad State Champions";
        subDates.textContent = "———— Apr '22————";
        subDescription.innerHTML = soscText;
        subVersion.textContent = "v06.18.2024";
    });
    four.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "North Dakota All State Music Four Year Award";
        subDates.textContent = "———— Mar '23 ————";
        subDescription.innerHTML = fourText;
        subVersion.textContent = "v06.18.2024";
    });
    sous.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "John Philip Sousa Band Award";
        subDates.textContent = "———— May '23 ————";
        subDescription.innerHTML = sousText;
        subVersion.textContent = "v06.18.2024";
    });
    wood.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "Woody Herman Jazz Award";
        subDates.textContent = "———— May '23 ————";
        subDescription.innerHTML = woodText;
        subVersion.textContent = "v06.18.2024";
    });

    window.addEventListener("scroll", function () {
        const textScaler = 1 - (window.scrollY * 0.00018)
        const pageText = document.querySelector(".header-img-text");
        pageText.style.transform = `scale(${textScaler})`;
    });
});