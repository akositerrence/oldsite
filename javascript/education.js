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
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="">More information</a>`;
    asmeText = `
    "The NDSU chapter of the American Society of Mechanical Engineers is a once a month meeting for NDSU 
    engineering students. ASME provides students the opportunity to listen to speakers, compete in small design competitions for prizes, and go on plant tours."
    <br>
    I serve as the incumbent president for the club, effective fall of 2024, my sophomore year.
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://myndsu.ndsu.edu/organization/americansocietyofmechanicalengineers">More information</a>`;
    aiaaText = `
    "The NDSU Chapter of AIAA is dedicated to sharing experience with the student interested in aeronautics, aircraft, space and engineering. Students have the opportunity to learn from fellow students, professionals, and personal experiences. AIAA will arrange activities to offer these experiences."
    <br>
    Our chapter participated in AIAA's Design, Build, Fly competition in Wichita, Kansas in 2024, spring of my freshman year.
    It was a rewarding opportunity, with it being my first intercollegiate competition, meeting people from schools such as UCLA,
    MIT, and UNSW Sydney, and being able to connect with a larger community of RC hobbyists in the Fargo-Moorhead periphery.
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://myndsu.ndsu.edu/organization/americaninstituteofaeronauticsandastronautics">More information</a>`;
    innoText = `
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://www.ndsuinnovationstudio.com/">More information</a>`;
    ewbsText = `
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://www.ndsuewb.org/photo-gallery">More information</a>`;
    roboText = `
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://myndsu.ndsu.edu/organization/bisonrobotics">More information</a>`;
    gcspText = `
    "The Grand Challenges Scholars program at NDSU is a comprehensive research immersive program for energetic and ambitious undergraduate students who wish to participate in this great national venture of engineering. Graduates of this program are expected to be among the key players in solving the grand challenges to humanity. This program will selectively recruit students who are currently freshmen, as described in the application process. Participation in the program will be concurrent to student preparation towards their degrees in their respective departments in engineering. Upon selection, students will work on a project synergistically with the faculty in charge and graduate students."
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://www.ndsu.edu/coe/research/grand_challenge_scholars/">More information</a>`;
    climText = `
    Climbing good
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://myndsu.ndsu.edu/organization/rockclimbingclub">More information</a>`;
    clarText = `
    I played in clarinet choir for my first semester at NDSU. It was interesting to learn about 
    small details with my main instrument that I had never thought of previously.
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="">More information</a>`;
    orchText = `
    I played clarinet for the University Orchestra my first semester at NDSU. It was the first time I played
    in an orchestral setting since Youth Symphony my junior year of high school.
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://www.ndsu.edu/performingarts/music/ensembles-and-performances/orchestra/">More information</a>`;
    rsrc.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "Undergraduate Research";
        subDates.textContent = "———— Nov '23 — Present ————";
        subDescription.innerHTML = rsrcText;
        subVersion.textContent = "v06.20.2024";
    });
    asme.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "/images/asme.webp";
        subName.textContent = "American Society of Mechanical Engineers";
        subDates.textContent = "———— Sep '23 — Present ————";
        subDescription.innerHTML = asmeText;
        subVersion.textContent = "v06.20.2024";
    });
    aiaa.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "/images/aiaa.webp";
        subName.textContent = "American Institute of Aeronautics and Astronautics";
        subDates.textContent = "———— Sep '23 — Present ————";
        subDescription.innerHTML = aiaaText;
        subVersion.textContent = "v06.20.2024";
    });
    inno.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "Innovation Studio";
        subDates.textContent = "———— Sep '23 — Present ————";
        subDescription.innerHTML = innoText;
        subVersion.textContent = "v06.20.2024";
    });
    ewbs.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "Engineers Without Borders";
        subDates.textContent = "———— Feb '24 — Present ————";
        subDescription.innerHTML = ewbsText;
        subVersion.textContent = "v06.20.2024";
    });
    robo.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "/images/robotics.webp";
        subName.textContent = "Bison Robotics";
        subDates.textContent = "———— Sep '23 — Present ————";
        subDescription.innerHTML = roboText;
        subVersion.textContent = "v06.20.2024";
    });
    gcsp.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "Grand Challenges Scholars Program";
        subDates.textContent = "———— Jan '24 — present ————";
        subDescription.innerHTML = "";
        subVersion.textContent = "v06.20.2024";
    });
    clim.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "Climbing Club";
        subDates.textContent = "———— Jan '24 — Present ————";
        subDescription.innerHTML = gcspText;
        subVersion.textContent = "v06.20.2024";
    });
    clar.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "Clarinet Ensemble";
        subDates.textContent = "———— Aug '23 — Dec '23 ————";
        subDescription.innerHTML = clarText;
        subVersion.textContent = "v06.20.2024";
    });
    orch.addEventListener("click", function () {
        page.style.transform = "translateX(0vw)";
        deny.style.opacity = "80%";
        deny.style.pointerEvents = "auto";
        subImage.src = "";
        subName.textContent = "University Symphony Orchestra";
        subDates.textContent = "———— Aug '23 — Dec '23 ————";
        subDescription.innerHTML = orchText;
        subVersion.textContent = "v06.20.2024";
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
    National Honor Society at my school meant completing a series of different tiers of service hours, being involved in extracurriculars, and demonstrating qualities of good character.
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://sites.google.com/a/bismarckschools.org/bps-nhs/home">More information</a>`;
    nthsText = `
    Considered as one of the top aviation students in my program, I was nominated by my aviation teacher to be a part of the National Technical Honor Society. It's an organization that recognizes students in technical vocations. During my time in the aviation
    program, I held the top score on the FAA knowledge test my instructor saw associated with the program. 
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://nths.org/">More information</a>`;
    fligText = `
    Before my final decision to pursue engineering, I originally wanted to be an
    airline pilot. Our public school district offered a "career academy," which was basically a shared mini trade school. My sophomore year of high school, I decided to join the aviation program under the instruction of Brad Stangeland. The program offered a free discovery flight, and it was in that first flight that I discovered the thrill of aviation. I was a very technical student, largely focusing on "why" things were. It was a slow process, with me still being in school and all. I ended up getting over a 90% on the official FAA knowledge test for my PPL, which was the highest the program had 
    ever seen. After taking 2 years of aviation, I resumed my flight training with the Bismarck Aero Center under 3 different instructors. I transitioned from the C150 to the C172. I eventually completed my training in August of 2023.
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://bismarckaero.com/">More information</a>`;
    scioText = `
    Science Olympiad was probably the second favorite thing I did in high school, right next to band. It's basically track and field, but for science stuff. Think rocket competitions, plane competitions, cryptology tests, etc. It's one of the biggest factors that made me decide to pursue engineering as a
    career. I was in it for all 4 years of high school, and our team competed in regional and state competitions. I won multiple gold titles in multiple build events over the years, such as Detector Building, where we 
    build sensors that display values such as salinity and temperature as accurate as possible, and Flight, where we build a rubber powered aerial vehicle that stays airborne for the most amount of time. My favorite memory
    is winning State for the first time in our school's history my Junior year and advancing to nationals, ending up 39th of 60 teams nationally, and my favorite victory was winning the Flight event my senior year, when we won a full 30 seconds ahead of the other teams at state. It was a fulfilling experience, providing multiple opportunities that graced many different avenues of engineering, as well as provided the opportunity to be a leader and mentor to underclassmen and middle schoolers on a similar path to STEM.
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center"
    href="https://www.bismarckschools.org/Page/1652">More information</a>`;
    scibText = `
    Science Bowl is a competitive academic event, testing students' knowledge in
    different STEM disciplines such as science and math. I was selected to participate from a pool of applicants from our high school. I competed with the team my junior and senior year, with us finished 4th and 6th at the state level respectively.
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://science.osti.gov/wdts/nsb/Regional-Competitions/High-School-Regionals/ND_North-Dakota-High-School-Regional-Science-Bowl">More information</a>`;
    windText = `
    In a job interview for an internship, I was asked to pick one item from the 
    scores of things on my resume that defined me the most. Despite being in college, I picked my involvement in high school band. Playing for the top ensemble at Century for three years, I served as the Principal Clarinetist for the whole program. I was recognized by the directors with the John Philip Sousa Band Award, the most prestigious recognition for the band, the Brad Melby Memorial Scholarship, the Danie Thomssen Memorial Scholarship, both recognitions selected by peers, as well as the outstanding band member award for 4 years. Being one of the top clarinetists in the state, I and my peers earned countless star ratings and "best of the room" awards for ensembles and solos at state music contests across three instruments (Clarinet, Saxophone, Trumpet). Our band regularly worked with various music professionals, internationally recognized composers and conductors,  as well as fellow ensembles in the peripheral. Our group was named with multiple achievements, earning the Superior Rating at OrlandoFest, earning the Gold Rating at NDSU's Raging Red Band Festival, as well as being named the "Governor's Band," playing for a few government and public functions, such as the State of the State Address. My time with the band is easily the most rewarding experience I could ever have been involved in. I met most of my friends through band and I entirely credit my achievements in academics and other fields to this program. If I hadn't made the decision to join band in middle school, I would still be the isolated, introverted kid that I was. My own achievements and our band's achievements would never have been possible without the work of our directors, Chris Dasovick and Erik Stordalen, as well as those who taught us in our middle school years, Melinda Halverson and Sona Houle.
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://centurypatriotbands.weebly.com/">More information</a>`;
    jazzText = `
    Some time in junior year of high school, my friends all started to randomly purchase Saxophones. I thought it was hilarious, and so I purchased my own off of Facebook Marketplace. Though I never performed with the Saxophone my junior year, my friends and I decided to commit to the instrument and joined summer theatre pit doubling with Clarinet and Saxophone. During my senior year, my friends and I were proficient enough that we played solos and ensembles at the local West State Region festival, and even ended up earning star ratings. In addition, we also decided to join our school's jazz Band. Our school had 2 jazz bands, Jazz 1 being the top ensemble, Jazz 2 being the general ensemble. Though we were in Jazz 2, it offered us the opportunity to be leaders to underclassmen that we usually wouldn't work with since they weren't playing our main instrument. It was a great experience and it opened our eyes to new avenues of music. 
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://centurypatriotbands.weebly.com/">More information</a>`;
    marcText = `
    Part of being in our high school's band program means having the opportunity to particpate in marching band. Our school district was different in that we never had those fancy DCI competitions you saw on youtube, we just had march in a straight
    line down a road. We participated in 2 big parades every year, both held in Bismarck. Though marching in a straight line sounds real easy, doing so with over a hundred band kids in thick uniform takes much more practice. I was regularly a right 
    guide for the rows, meaning I was trusted enough to be a reference point for an entire row. My senior year, I was a line leader, coordinating my section to be better members of the marching band.
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://centurypatriotbands.weebly.com/marching-information.html">More information</a>`;
    colrText = `
    The Color Guard presents the nation's colors at various local events, such as Bismarck's 50th anniversary,
    school rallies, etc. members of the Color Guard include the Drum Major, the Spirit of '76, flag bearers, 
    rifle carriers, and trumpeters.
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://centurypatriotbands.weebly.com/marching-information.html">More information</a>`;
    pitoText = `
    My sophomore year of high school, I thought it would be cool to try playing music for the theatre program with my friends. Though it sounds very mundane work as a musician, it probably made me twice of a better musician than I was.
    As an instrumentalist, you tend follow the vocalist's key and tempo, not yours. This means super funky key signatures,
    frequent tempo changes, and much more. This means instead of purposefully practicing scales with 5 sharps all over and over again, you're forced to just do it as a surprise once you turn the page, and you just kind of learn as you go,
    having fun along the way. My friends and I played for both the school theatre program and the local Sleepy Hollow summer program,
    which never failed to be a fun experience. Lots of inside jokes and funny moments were produced. 10/10 would recommend.
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://www.shtap.org/orchestra">More information</a>`;
    allsText = `
    I credit my selection to the All-State music festival my freshman year to be a defining moment in my character. 
    Getting into All-State meant that you were one of the top musicians in the State. This meant that I was
    trying for a spot in the top concert band in the state of North Dakota as a freshman, when I had started a full year later than everyone else on my instrument. When I got in, it was valuable insight as to what I can achieve. It posed
    to me the question of "What else can I do?" While the result was very satisfying, it was the work behind it that taught
    me the most. I would spend many days skipping lunch or eating quicker to practice before band started, and spent many hours on the weekends to perfect my technique. Looking back on those 4 years, it taught me the value of frontloading, the idea of distributing the effort at the beginning of the process. Because of the work I put in my freshman year, it
    opened new opportunities for immense growth that would not have been available earlier.
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75); 
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://www.ndallstate.org/">More information</a>`;
    bmsoText = `
    At the recommendation of a friend, I was invited to audition for the Bismarck 
    Mandan Youth Symphony Orchestra, a collection of local advanced instrumentalists from high school through college. It was the first time I played my main instrument, the Clarinet, in an orchestral
    setting.
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75);
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://bismarckmandansymphony.org/education/youth-orchestra/">More information</a>`;
    crosText = `
    I was sitting in my Physics class one day in junior year, and my mind was wandering, thinking how it would feel to play a high school sport. It was a spontaneous decision, partly me wanting to try a sport, partly me wanting to prove something. I joined cross country my senior year of high school, having never played a sport in my life, having never ran more than a mile. I was a bigger kid back then, and my fastest mile thus far was 12 minutes. We started preparing for the season during the summer, and I could barely run half a mile. By the end of the season, my fastest mile was 6 minutes, and my farthest run was 7 miles. It was a rough 3 months, but it was a good introduction to running, a trial by fire, and I'm grateful for the experience.
    <br>
    <a target="_blank" style ="padding-top: 2.5vw; color: rgb(75, 75, 75);
    text-decoration: underline; display: flex; justify-content: center" 
    href="https://sites.google.com/bismarckschools.org/centuryhsxc/home">More information</a>`;
    tracText = `
    Having made the commitment to Cross Country, noone warned me about the pressure to join Track. I wasn't a very fast runner, but the sheer question of "what can I achieve?" was too great for me to skip such an opportunity. Though I was no longer new to running, I was still as nervous as when I joined cross, since I had no idea how track worked. As a senior, I was learning how to pass the baton with freshmen. I had very little understanding of how events worked until the first meet. It was a difficult few months, especially on top everything else I was involved in, but it was a very rewarding experience. Nothing will beat the atmosphere of a Track meet.
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
    href="https://sites.google.com/a/bismarckschools.org/bps-nhs/home">More information</a>`;
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