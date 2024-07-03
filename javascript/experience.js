document.addEventListener("DOMContentLoaded", function () {
    const experienceEmbed = document.querySelector("#experience-embed");
    const company = document.querySelector("#specific-company");
    const workLocation = document.querySelector("#specific-work-location");
    const container = document.querySelector("#specific-experience-description");
    const embedDesktopModifier = document.querySelector(".experience-scroller-container");
    let currentlyTyping = false;

    function stepPrint(workplace, location, text, container, callback) {
        container.innerHTML = "";
        company.innerHTML = "";
        workLocation.innerHTML = "";
        let i = 0;
        let j = 0;
        let m = 0;

        function type() {
            if (m < location.length) {
                if (location.charAt(i) === "~") {
                    workLocation.appendChild(document.createElement("br"));
                } else {
                    locationChar = document.createTextNode(location.charAt(j));
                    workLocation.appendChild(locationChar);
                }
            }

            if (j < workplace.length) {
                if (workplace.charAt(i) === "~") {
                    company.appendChild(document.createElement("br"));
                } else {
                    companyChar = document.createTextNode(workplace.charAt(j));
                    company.appendChild(companyChar);
                }
            }

            if (i < text.length) {
                if (text.charAt(i) === "~") {
                    container.appendChild(document.createElement("br"));
                } else {
                    character = document.createTextNode(text.charAt(i));
                    container.appendChild(character);
                }
                j++;
                i++;
                m++;
                setTimeout(type, 0.1);
            } else {
                if (callback) { callback(); }
            }
        }
        type();
    }

    if (experienceEmbed) {
        experienceEmbed.addEventListener("load", function () {
            var experienceAccess = experienceEmbed.contentDocument || experienceEmbed.contentWindow.document;
            const five = experienceAccess.querySelector("#fiv");
            const target = experienceAccess.querySelector("#tar");
            const ndsu = experienceAccess.querySelector("#nds");
            const aigen = experienceAccess.querySelector("#aig");
            const marvin = experienceAccess.querySelector("#mar");
            const scroller = experienceAccess.querySelector("#experience-bar");
            const figure = document.querySelector("#worked-figure");

            const fiveLocation = `
            Bismarck, North Dakota, United States
            ~————— Jun '20 — Jun '22 —————
            `;
            const fiveText = `
            Feeling a little behind my peers, I got my first job the summer 
            before my sophomore year of high school, right at the start of the pandemic.
            As an introverted kid, I was never one to just socialize with random people.
            Yet, throughout the duration of my work, I built up my communication skills
            with strangers, coworkers and customers alike, getting more comfortable 
            with the world each day. 
            ~
            ~
            A fast learner, I was proficient in every workstation in a few months.
            When corporate visited our store one day, I was even commended for my skills
            at the fry station. It wasn't uncommon for me to be tasked to train people well 
            beyond my age, nor was it uncommon for me to operate multiple stations at once, 
            even during lunch rush.`;

            const targetLocation = `
            Bismarck, North Dakota, United States
            ~————— Jun '22 — Aug '23 —————
            `;
            const targetText = `
            After working at Five Guys for two years, I decided that it was
            time for a switch. By the recommendation of a friend, I started working 
            at Target the summer before my senior year. My job was to apply my
            interdepartmental knowledge of the store to find items on the sales floor for
            order pickup, as well as manage the back of the store, all under timed deadlines.
            ~
            ~
            In a few months, I was producing one the highest productitivty metrics for our
            department. I was also often curious to see what my friends from other departments 
            were doing, and would regularly assist them with tasks beyond the scope of my job description.
            As a frequenter of the night shift, it wasn't uncommon for me to be in charge of our team
            whenever an official team lead was absent.`;

            const ndsuLocation = `
            Fargo, North Dakota, United States
            ~————— Nov '23 — Present —————
            `;
            const ndsuText = `
            I left Target after moving for college and I am now currently performing undergraduate 
            research in cybersecurity under the computer science department of NDSU. Though I'm
            a mechanical engineering student by title, I've always been open to expanding my mental abilities
            through many different mediums, and I believe in the importance of cross disciplinary 
            experience.
            ~
            ~
            The publicity of my work is heavily regulated as it is under ITAR/CUI/NDA restrictions, 
            and I can therefore provide very limited background as to what I do.`;

            const aigenLocation = `
            Fargo, North Dakota, United States
            ~————— Mar '24 — Present —————
            `;
            const aigenText = `
            I am currently working for Aigen, a Seattle based startup, for their first season of field operations.
            I am to work with a team of operators to ensure that robots are operating at all times, managing 
            the robots for mechanical, electrical, or functional issues, communicating with Washington engineers 
            for high complexity issues, and assisting with data capture for field waypoints and robot performance.`;

            const marvinLocation = `
            Fargo, North dakota, United states
            ~————— Aug '24 — Present —————
            `;
            const marvinText = `
            Incoming intern for August 2024, fall semester of my sophomore year.
            `;

            const fiveLimiter = 1;
            const targetLimiter = 2;
            const ndsuLimiter = 3;
            const aigenLimiter = 4;
            const marvinLimiter = 5;
            let currentClicked = 0;

            five.addEventListener("click", function () {
                if (currentlyTyping == false && currentClicked != fiveLimiter) {
                    currentlyTyping = true;
                    stepPrint("Five Guys~——— Crew Member ———", fiveLocation, fiveText, container, function () {
                        currentlyTyping = false;
                    });
                    contract();
                    five.style.transform = "scale(1.1)";
                    five.style.filter = "grayscale(0) contrast(1) opacity(0.9)";
                    scroller.style.left = "9.75vw";
                    currentClicked = 1;
                    figure.style.opacity = "0";
                    if (window.innerWidth >= 768) {
                        figure.style.height = "0vw";
                        figure.style.padding = "0vw";
                        company.style.height = "4vw";
                        company.style.padding = "1vw 0 1.5vw";
                        workLocation.style.height = "5.75vw";
                        container.style.height = "28vw";
                        embedDesktopModifier.style.paddingBottom = "0.1vw";
                    } else {
                        figure.style.height = "5vw";
                        figure.style.padding = "1vw";
                        company.style.height = "16vw";
                        workLocation.style.height = "16vw";
                        container.style.height = "112vw";
                    }
                }
            });
            target.addEventListener("click", function () {
                if (currentlyTyping == false && currentClicked != targetLimiter) {
                    currentlyTyping = true;
                    stepPrint("Target~——— Fulfillment Expert ———", targetLocation, targetText, container, function () {
                        currentlyTyping = false;
                    });
                    contract();
                    target.style.transform = "scale(1.1)";
                    target.style.filter = "grayscale(0) contrast(1) opacity(0.9)";
                    scroller.style.left = "28.75vw";
                    currentClicked = 2;
                    figure.style.opacity = "0";
                    if (window.innerWidth >= 768) {
                        figure.style.height = "0vw";
                        figure.style.padding = "0vw";
                        company.style.height = "4vw";
                        company.style.padding = "1vw 0 1.5vw";
                        workLocation.style.height = "5.75vw";
                        container.style.height = "28vw";
                        embedDesktopModifier.style.paddingBottom = "0.1vw";
                    } else {
                        figure.style.height = "5vw";
                        figure.style.padding = "1vw";
                        company.style.height = "16vw";
                        workLocation.style.height = "16vw";
                        container.style.height = "112vw";
                    }
                }
            });
            ndsu.addEventListener("click", function () {
                if (currentlyTyping == false && currentClicked != ndsuLimiter) {
                    currentlyTyping = true;
                    stepPrint("North Dakota State University~——— Undergraduate Researcher ———", ndsuLocation, ndsuText, container, function () {
                        currentlyTyping = false;
                    });
                    contract();
                    ndsu.style.transform = "scale(1.1)";
                    ndsu.style.filter = "grayscale(0) contrast(1) opacity(0.9)";
                    scroller.style.left = "47.75vw";
                    currentClicked = 3;
                    figure.style.opacity = "0";
                    if (window.innerWidth >= 768) {
                        figure.style.height = "0vw";
                        figure.style.padding = "0vw";
                        company.style.height = "4vw";
                        company.style.padding = "1vw 0 1.5vw";
                        workLocation.style.height = "5.75vw";
                        container.style.height = "20vw";
                        embedDesktopModifier.style.paddingBottom = "0.1vw";
                    } else {
                        figure.style.height = "5vw";
                        figure.style.padding = "1vw";
                        company.style.height = "16vw";
                        workLocation.style.height = "16vw";
                        container.style.height = "84vw";
                    }
                }
            });
            aigen.addEventListener("click", function () {
                if (currentlyTyping == false && currentClicked != aigenLimiter) {
                    currentlyTyping = true;
                    stepPrint("Aigen~——— Field Robot Operator ———", aigenLocation, aigenText, container, function () {
                        currentlyTyping = false;
                    });
                    contract();
                    aigen.style.transform = "scale(1.1)";
                    aigen.style.filter = "grayscale(0) contrast(1) opacity(0.9)";
                    scroller.style.left = "66.85vw";
                    currentClicked = 4;
                    figure.style.opacity = "0";
                    if (window.innerWidth >= 768) {
                        figure.style.height = "0vw";
                        figure.style.padding = "0vw";
                        company.style.height = "4vw";
                        company.style.padding = "1vw 0 1.5vw";
                        workLocation.style.height = "5.75vw";
                        container.style.height = "13vw";
                        embedDesktopModifier.style.paddingBottom = "0.1vw";
                    } else {
                        figure.style.height = "5vw";
                        figure.style.padding = "1vw";
                        company.style.height = "16vw";
                        workLocation.style.height = "16vw";
                        container.style.height = "56vw";
                    }
                }
            });
            marvin.addEventListener("click", function () {
                if (currentlyTyping == false && currentClicked != marvinLimiter) {
                    currentlyTyping = true;
                    stepPrint("Marvin Composites~—— Research and Development Intern ——", marvinLocation, marvinText, container, function () {
                        currentlyTyping = false;
                    });
                    contract();
                    marvin.style.transform = "scale(1.1)";
                    marvin.style.filter = "grayscale(0) contrast(1) opacity(0.9)";
                    scroller.style.left = "85.85vw";
                    currentClicked = 5;
                    figure.style.opacity = "0";
                    if (window.innerWidth >= 768) {
                        figure.style.height = "0vw";
                        figure.style.padding = "0vw";
                        company.style.height = "4vw";
                        company.style.padding = "1vw 0 1.5vw";
                        workLocation.style.height = "5.75vw";
                        container.style.height = "3vw";
                        embedDesktopModifier.style.paddingBottom = "0.1vw";
                    } else {
                        figure.style.height = "5vw";
                        figure.style.padding = "1vw";
                        company.style.height = "16vw";
                        workLocation.style.height = "16vw";
                        container.style.height = "14vw";
                    }
                }
            });

            function contract() {
                five.style.transform = "scale(1)";
                five.style.filter = "grayscale(2) contrast(1.25) opacity(0.5)";
                target.style.transform = "scale(1)";
                target.style.filter = "grayscale(2) contrast(1.25) opacity(0.5)";
                ndsu.style.transform = "scale(1)";
                ndsu.style.filter = "grayscale(2) contrast(1.25) opacity(0.5)";
                aigen.style.transform = "scale(1)";
                aigen.style.filter = "grayscale(2) contrast(1.25) opacity(0.5)";
                marvin.style.transform = "scale(1)";
                marvin.style.filter = "grayscale(2) contrast(1.25) opacity(0.5)";
            }
        });
    }
});