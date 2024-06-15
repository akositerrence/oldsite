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
    in a job interview for an internship, i was asked to pick one item from the scores of things 
    on my resume that defined me the most. despite being in college, i picked my involvement in high school band. i 
    started out middle school not truly knowing a direction i wanted to go in life. my parents and i
    were immigrants, and quite frankly, we were deep into unknown territory. it's my first life, and it was
    their's too, and i had no idea what i wanted for a job, a career, much less a purpose. 
    and so i just thought that i'd be involved in as many things as possible and see where it takes me. 
    one of my grandfather's wishes before i left the philippines was for me to learn an instrument. and so,
    i started band in seventh grade on the clarinet, a year behind everyone else. music began to slowly pique 
    my interest, and pretty soon, i was practicing almost everyday. i was even prompted to audition
    for wind ensemble, the top concert band for century high school. i declined the offer, since i didn't think i
    was good enough. one day in eigth grade, i showed one of my band teachers a solo i was working on. 
    the solo was borderline impossible, especially for an eight grader. there were notes on that page that 
    i would not learn until years later. i don't think i could even play it today. still, they took a chance 
    and provided me the opportunity of a scholarship, full funding for some music lessons over the summer. those
    lessons would fully prepare me for what i was about to tackle my freshman year. when high school started,
    i played for freshman band, and pretty soon, i was ascending the ranks and began playing lead parts. one day, our
    director mentioned a group that we could audition for, the north dakota all state band. i had no idea what that meant.
    i had virtually no understanding as to what bands were at my school, much less a state band. i didn't even realize 
    we had a jazz band until late into my sophomore year. actually, we had two. i signed up for all state not truly knowing 
    what to expect. as audition date grew closer, the magnitude of what i was trying to achieve slowly loomed over me.
    i had started a year later than everyone else on my instrument, and i was now shooting for a spot in the top
    concert band in the state of north dakota, as a freshman. i didn't have very high hopes, especially after learning that
    there were people in our top concert band that couldn't get in either. 
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
    test`;
    schlText = `
    test`;
    apscText = `
    test`;
    presText = `
    test`;
    dolaText = `
    test`;
    melbText = `
    test`;
    thomText = `
    test`;
    woldText = `
    test`;
    vlntText = `
    test`;
    soscText = `
    test`;
    fourText = `
    test`;
    sousText = `
    test`;
    woodText = `
    test`;
    vald.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "valedictorian";
        subDates.textContent = "———— may '23 ————";
        subDescription.textContent = rsrcText;
        subVersion.textContent = "";
    });
    schl.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "north dakota scholars award";
        subDates.textContent = "———— jun '23 ————";
        subDescription.textContent = rsrcText;
        subVersion.textContent = "";
    });
    apsc.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "ap scholar with distinction";
        subDates.textContent = "———— jul '23 ————";
        subDescription.textContent = rsrcText;
        subVersion.textContent = "";
    });
    pres.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "presidential award for academic excellence";
        subDates.textContent = "———— apr '23 ————";
        subDescription.textContent = rsrcText;
        subVersion.textContent = "";
    });
    dola.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "bismarck dollars for scholars scholarship";
        subDates.textContent = "———— may '23 ————";
        subDescription.textContent = rsrcText;
        subVersion.textContent = "";
    });
    melb.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "brad melby memorial scholarship";
        subDates.textContent = "———— may '23 ————";
        subDescription.textContent = rsrcText;
        subVersion.textContent = "";
    });
    thom.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "danie thomssen memorial scholarship";
        subDates.textContent = "———— may '23 ————";
        subDescription.textContent = rsrcText;
        subVersion.textContent = "";
    });
    wold.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "wold family scholarship";
        subDates.textContent = "———— may '23 ————";
        subDescription.textContent = rsrcText;
        subVersion.textContent = "";
    });
    vlnt.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "outstanding volunteer award";
        subDates.textContent = "———— apr '23 ————";
        subDescription.textContent = rsrcText;
        subVersion.textContent = "";
    });
    sosc.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "science olympiad state champions";
        subDates.textContent = "———— apr '22————";
        subDescription.textContent = rsrcText;
        subVersion.textContent = "";
    });
    four.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "north dakota all state music four year award";
        subDates.textContent = "———— mar '23 ————";
        subDescription.textContent = rsrcText;
        subVersion.textContent = "";
    });
    sous.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "john philip sousa band award";
        subDates.textContent = "———— may '23 ————";
        subDescription.textContent = rsrcText;
        subVersion.textContent = "";
    });
    wood.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "woody herman jazz award";
        subDates.textContent = "———— may '23 ————";
        subDescription.textContent = rsrcText;
        subVersion.textContent = "";
    });

    window.addEventListener("scroll", function () {
        const textScaler = 1 - (window.scrollY * 0.00018)
        const pageText = document.querySelector(".header-img-text");
        pageText.style.transform = `scale(${textScaler})`;
    });
});