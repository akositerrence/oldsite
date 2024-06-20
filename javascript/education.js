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
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="">More information</a>`;
    nthsText = `
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="">More information</a>`;
    fligText = `
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="">More information</a>`;
    scioText = `
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center"
    href="">More information</a>`;
    scibText = `
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="">More information</a>`;
    windText = `
    In a job interview for an internship, I was asked to pick one item from the 
    scores of things on my resume that defined me the most. Despite being in college,
    I picked my involvement in high school band. Playing for the top ensemble at Century for 
    three years, I served as the Principal Clarinetist for the whole program. I was recognized by the
    directors with the John Philip Sousa Band Award, the most prestigious recognition for the band, 
    the Brad Melby Memorial Scholarship, the Danie Thomssen Memorial Scholarship, both recognitions 
    selected by peers, as well as the outstanding band member award for 4 years. Being one of the top
    clarinetists in the state, I and my peers earned countless star ratings and "best of the room" awards
    for ensembles and solos at state music contests across three instruments (Clarinet, Saxophone, Trumpet).
    Our band regularly worked with various music professionals, internationally recognized composers and conductors, 
    as well as fellow ensembles in the peripheral. Our group was named with multiple achievements,
    earning the Superior Rating at OrlandoFest, earning the Gold Rating at NDSU's Raging Red
    Band Festival, as well as being named the "Governor's Band," playing for a few
    government and public functions, such as the State of the State Address. My time with
    the band is easily the most rewarding experience I could ever have been involved in.
    I met most of my friends through band and I entirely credit my achievements in academics
    and other fields to this program. If I hadn't made the decision to join band in middle school,
    I would still be the isolated, introverted kid that I was. My own achievements and our band's achievements would never have been possible without
    the work of our directors, Chris Dasovick and Erik Stordalen, as well as those who taught us
    in our middle school years, Melinda Halverson and Sona Houle.
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://centurypatriotbands.weebly.com/">More information</a>`;
    jazzText = `
    Some time in junior year of high school, my friends all started to randomly purchase
    Saxophones. I thought it was hilarious, and so I purchased my own off of Facebook Marketplace.
    Though I never performed with the Saxophone my junior year, my friends and I decided to commit
    to the instrument and joined summer theatre pit doubling with Clarinet and Saxophone.
    During my senior year, my friends and I were proficient enough that we played solos and ensembles
    at the local West State Region festival, and even ended up earning star ratings. In addition,
    we also decided to join our school's jazz Band. Our school had 2 jazz bands, Jazz 1 being the top
    ensemble, Jazz 2 being the general ensemble. Though we were in Jazz 2, it offered us the opportunity
    to be leaders to underclassmen that we usually wouldn't work with since they weren't playing
    our main instrument. It was a great experience and it opened our eyes to new avenues of music. 
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://centurypatriotbands.weebly.com/">More information</a>`;
    marcText = `
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="">More information</a>`;
    colrText = `
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="">More information</a>`;
    pitoText = `
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="">More information</a>`;
    allsText = `
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="">More information</a>`;
    bmsoText = `
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75);
    text-decoration: underline; display: flex; justify-content: center" 
    href="">More information</a>`;
    concText = `
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75);
    text-decoration: underline; display: flex; justify-content: center" 
    href="">More information</a>`;
    crosText = `
    I was sitting in my Physics class one day in junior year, and my mind was wandering,
    thinking how it would feel to play a high school sport. It was a spontaneous 
    decision, partly me wanting to try a sport, partly me wanting to prove something.
    I joined cross country my senior year of high school, having never played a sport 
    in my life, having never ran more than a mile. I was a bigger kid back then, and 
    my fastest mile thus far was 12 minutes. We started preparing for the season during 
    the summer, and I could barely run half a mile. By the end of the season, my fastest mile 
    was 6 minutes, and my farthest run was 7 miles. It was a rough 3 months, but it 
    was a good introduction to running, a trial by fire, and I'm grateful for the experience.
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75);
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://sites.google.com/bismarckschools.org/centuryhsxc/home">More information</a>`;
    tracText = `
    Having made the commitment to Cross Country, noone warned me about the pressure to join Track.
    I wasn't a very fast runner, but the sheer question of "what can I achieve?" was too great 
    for me to skip such an opportunity. Though I was no longer new to running, I was still
    as nervous as when I joined cross, since I had no idea how track worked. As a senior,
    I was learning how to pass the baton with freshmen. I had very little understanding of how 
    events worked until the first meet. It was a difficult few months, especially on top
    everything else I was involved in, but it was a very rewarding experience.
    Nothing will beat the atmosphere of a Track meet.
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://sites.google.com/bismarckschools.org/century-boys-trackandfield/home">More information</a>`;
    nhso.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "National Honor Society";
        subDates.textContent = "———— Apr '22 — May '23 ————";
        subDescription.innerHTML = nhsoText;
        subVersion.textContent = "v06.19.2024";
    });
    nths.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "National Technical Honor Society";
        subDates.textContent = "———— Apr '22 — May '23 ————";
        subDescription.innerHTML = nthsText;
        subVersion.textContent = "v06.19.2024";
    });
    flig.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "/images/flight.webp";
        subName.textContent = "Flight Training";
        subDates.textContent = "———— Jul '21 — Aug '23 ————";
        subDescription.innerHTML = fligText;
        subVersion.textContent = "v06.19.2024";
    });
    scio.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "Science Olympiad";
        subDates.textContent = "———— Aug '19 — May '23 ————";
        subDescription.innerHTML = scioText;
        subVersion.textContent = "v06.19.2024";
    });
    scib.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "Science Bowl";
        subDates.textContent = "———— Dec '21 — Feb '23 ————";
        subDescription.innerHTML = scribText;
        subVersion.textContent = "v06.19.2024";
    });
    wind.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "/images/centuryband.webp";
        subName.textContent = "Wind Ensemble";
        subDates.textContent = "———— Aug '19 — May '23 ————";
        subDescription.innerHTML = windText;
        subVersion.textContent = "v06.19.2024";
    });
    jazz.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "/images/jazz.webp";
        subName.textContent = "Jazz Ensemble";
        subDates.textContent = "———— Aug '22 — May '23 ————";
        subDescription.innerHTML = jazzText;
        subVersion.textContent = "v06.19.2024";
    });
    marc.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "Marching Band";
        subDates.textContent = "———— Aug '19 — May '23 ————";
        subDescription.innerHTML = marcText;
        subVersion.textContent = "v06.19.2024";
    });
    colr.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "/images/colorguard.webp";
        subName.textContent = "Color Guard";
        subDates.innerHTML = "———— Aug '21 — May '23 ————";
        subDescription.innerHTML = colrText;
        subVersion.textContent = "v06.19.2024";
    });
    pito.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "Theatre Pit Orchestra";
        subDates.textContent = "———— Sep '20 — May '23 ————";
        subDescription.innerHTML = pitoText;
        subVersion.textContent = "v06.19.2024";
    });
    alls.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "North Dakota All State Music";
        subDates.textContent = "———— Mar '20 — Mar '23 ————";
        subDescription.innerHTML = allsText;
        subVersion.textContent = "v06.19.2024";
    });
    bmso.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "Bismarck Mandan Youth Symphony";
        subDates.textContent = "———— Sep '21 — Apr '22 ————";
        subDescription.innerHTML = bmsoText;
        subVersion.textContent = "v06.19.2024";
    });
    conc.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "Concordia College Honor Band";
        subDates.textContent = "———— Apr '23 ————";
        subDescription.innerHTML = concText;
        subVersion.textContent = "v06.19.2024";
    });
    cros.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "Cross Country";
        subDates.textContent = "———— Jun '22 — Sep '23 ————";
        subDescription.innerHTML = crosText;
        subVersion.textContent = "v06.19.2024";
    });
    trac.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "Track and Field";
        subDates.textContent = "———— Jun '22 — Mar '23 ————";
        subDescription.innerHTML = tracText;
        subVersion.textContent = "v06.19.2024";
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
    <a target="_blank" style="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://www.bismarckschools.org/CHS">More information</a>`;
    schlText = `
    "The North Dakota Scholars Program is open to high school students who score 
    at or above the ninety-fifth percentile among all ND test-takers who took the 
    ACT or SAT prior to July 1st in the calendar year preceding the individual's 
    enrollment in college. Students will be awarded in descending rank order, 
    based on test scores, until available funds are expended or until the pool 
    of applicants has been exhausted."
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75);
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://ndus.edu/paying-for-college/nd-scholars-program/">More information</a>`;
    apscText = `
    "Granted to students who receive an average score of at least 3.5 on all AP 
    Exams taken, and scores of 3 or higher on five or more of these exams"
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75);
    text-decoration: underline; display: flex; justify-content: center"
    href="https://apcentral.collegeboard.org/exam-administration-ordering-scores/scores/awards/scholar-awards">More information</a>`;
    presText = `
    "This award recognizes academic success in the classroom. To be eligible, students 
    must meet requirements, including grade point average or, school-set criteria and 
    choice of state tests or teacher recommendations."
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://ndus.edu/paying-for-college/nd-scholars-program/">More information</a>`;
    dolaText = `
    "Bismarck Dollars for Scholars is a locally operated and supported, non-profit, 
    tax-exempt scholarship foundation. Operated by an all-volunteer Board of Directors, 
    the purpose of Dollars for Scholars is to expand access to educational opportunities 
    by involving and assisting our community in the support of students and in the 
    encouragement of educational achievement."
    <br>
    <a target="_blank" style="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://bismarck.dollarsforscholars.org/">More information</a>`;
    melbText = `
    "The recipient of this award will receive $300.00 scholarship upon graduation 
    from Century High School. Voted upon by members of the Concert Band and Wind
    Ensemble, it is presented to the underclassman that displays the most dedication,
    spirit, and enthusiasm.It is given by Ron and Carol Melby in memory of their 
    son Brad."
    <br>
    <a target="_blank" style="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://centurypatriotbands.weebly.com/awards-and-lettering.html">More information</a>`;
    thomText = `
    "This scholarship is given in memory of Danie Thomssen (Class of 2016).
    The recipient of this award will receive a $1,000.00 scholarship upon graduation.
    It is presented to one senior in the Century High School Band Program that the
    band directors feel demonstrate a strong sense dedication to the band program,
    leadership in the classroom, self-discipline in their practice, and a high level
    of musical excellence."
    <br>
    <a target="_blank" style="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://centurypatriotbands.weebly.com/awards-and-lettering.html">More information</a>`;
    woldText = `
    "The scholarship will be awarded annually to 5 BPS senior students who have 
    excelled in their academic pursuits and will be attending college. 
    Preference will be given to those majoring in the area of science who 
    have a strong sense of giving back. Selection will be based on a minimum 
    3.0 GPA and minimum cumulative ACT of 20."
    <br>
    <a target="_blank" style="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://bpsfoundation.com/project/wold-family-scholarship/">More information</a>`;
    vlntText = `
    I was recognized for my volunteer work, having clocked more than 100 hours
    of volunteer service across various institutions.
    <br>
    <a target="_blank" style="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://www.bismarckschools.org/CHS">More information</a>`;
    soscText = `
    I was part of the science olympiad team that won the state 
    championship for the first time in our school's history. Our team ended up
    39th overall nationally.
    <br>
    <a target="_blank" style="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    ext-decoration: underline; display: flex; justify-content: center" 
    href="https://www.ndsu.edu/olympiad/">More information</a>`;
    fourText = `
    Recognition for being chosen to be a part of the All-State Music Festival
    for all 4 years of high school.
    <br>
    <a target="_blank" style="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://www.ndallstate.org/">More information</a>`;
    sousText = `
    "This award is given to a senior band member for outstanding and unique
    achievement and service in band through exemplary leadership, musicianship,
    attitude, and dedication.  Selected by the directors, the recipient of this
    award will have their name inscribed on a brass plaque, which is proudly
    displayed in the band room."
    <br>
    <a target="_blank" style="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://centurypatriotbands.weebly.com/awards-and-lettering.html">More information</a>`;
    woodText = `
    "This award, selected by the directors, is given to the member of
    Jazz Ensemble #2 that demonstrates outstanding leadership, improvisation,
    and dedication to jazz band."
    <br>
    <a target="_blank" style="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://centurypatriotbands.weebly.com/awards-and-lettering.html">More information</a>`;
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