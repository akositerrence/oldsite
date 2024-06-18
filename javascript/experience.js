document.addEventListener("DOMContentLoaded", function () {
    const experienceEmbed = document.querySelector("#experience-embed");
    const company = document.querySelector("#specific-company");
    const workLocation = document.querySelector("#specific-work-location");
    const container = document.querySelector("#specific-experience-description");
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
                setTimeout(type, 10);
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
            · Built effective communication skills with customers
            ~· Operated and was proficient in all workstations
            ~· Handled multiple stations in a fast paced environment
            `;

            const targetLocation = `
            Bismarck, North Dakota, United States
            ~————— Jun '22 — Aug '23 —————
            `;
            const targetText = `
            · Applied interdepartmental knowledge to locate items on the sales floor under timed deadlines
            ~· Produced one of the highest productivity metrics in the department
            ~· Assisted other departments or team members with tasks beyond the scope of the job description
            `;

            const ndsuLocation = `
            Fargo, North Dakota, United States
            ~————— Nov '23 — Present —————
            `;
            const ndsuText = `
            · Performing undergraduate research in cybersecurity 
            ~· ITAR/CUI/NDA, working with the electrical team
            ~· Performing undergraduate research in mechanical engineering 
            ~· Assisting and engaging in various independent projects
            `;

            const aigenLocation = `
            Fargo, North Dakota, United States
            ~————— Mar '24 — Present —————
            `;
            const aigenText = `
            · Designated Zimmerman field captain and technician
            ~· Ensuring robots are operating at all times
            ~· Managing robots in the field for mechanical, electrical, or functional issues
            ~· Communicating with Washington engineering support staff for high complexity issues and assist with troubleshooting
            ~· Assisting with data capture for field waypoints
            `;

            const marvinLocation = `
            Fargo, North dakota, United states
            ~————— Aug '24 — Present —————
            `;
            const marvinText = `
            · Incoming intern, August 2024
            ~· test
            ~· test
            ~· test
            ~· test
            ~· test
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
                    figure.style.height = "5vw";
                    figure.style.padding = "1vw";
                    company.style.height = "16vw";
                    workLocation.style.height = "16vw";
                    container.style.height = "45vw";
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
                    figure.style.height = "5vw";
                    company.style.height = "16vw";
                    figure.style.padding = "1vw";
                    workLocation.style.height = "16vw";
                    container.style.height = "45vw";
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
                    figure.style.height = "5vw";
                    figure.style.padding = "1vw";
                    company.style.height = "16vw";
                    workLocation.style.height = "16vw";
                    container.style.height = "45vw";
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
                    figure.style.height = "5vw";
                    figure.style.padding = "1vw";
                    company.style.height = "16vw";
                    workLocation.style.height = "16vw";
                    container.style.height = "45vw";
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
                    figure.style.height = "5vw";
                    figure.style.padding = "1vw";
                    company.style.height = "16vw";
                    workLocation.style.height = "16vw";
                    container.style.height = "45vw";
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