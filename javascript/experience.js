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
            bismarck, north dakota, united states
            ~————— jun '20 — jun '22 —————
            `;
            const fiveText = `
            UNDER CONSTRUCTION
            feeling a little behind my peers, i got my first job the summer before my sophomore year,
            right in the middle of the pandemic. 


            i operated and was proficient in all workstations. 
            working there for two years and with my level of experience, i was training people well beyond my age.

            · built effective communication skills with customers
            ~· operated and was proficient in all workstations
            ~· handled multiple stations in a fast paced environment
            `;

            const targetLocation = `
            bismarck, north dakota, united states
            ~————— jun '22 — aug '23 —————
            `;
            const targetText = `
            UNDER CONSTRUCTION
            after working at five guys for two years, i decided that it was time for a switch.
            i started working at target the summer before my senior year.

            · applied interdepartmental knowledge to locate items on the sales floor under timed deadlines
            ~· produced one of the highest productivity metrics in the department
            ~· assisted other departments or team members with tasks beyond the scope of the job description
            `;

            const ndsuLocation = `
            fargo, north dakota, united states
            ~————— nov '23 — present —————
            `;
            const ndsuText = `
            · performing undergraduate research in cybersecurity 
            ~· itar/cui/nda working with the electrical team
            ~· performing undergraduate research in mechanical engineering
            ~· assisting in projects
            `;

            const aigenLocation = `
            fargo, north dakota, united states
            ~————— mar '24 — present —————
            `;
            const aigenText = `
            · designated zimmerman field captain and technician
            ~· ensure robots are operating at all times
            ~· manage robots in the field for mechanical, electrical, or functional issues
            ~· communicate with seattle engineering support staff for high complexity issues and assist with troubleshooting
            `;

            const marvinLocation = `
            fargo, north dakota, united states
            ~————— aug '24 — present —————
            `;
            const marvinText = `
            · incoming intern, august 2024
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
                    stepPrint("five guys~——— crew member ———", fiveLocation, fiveText, container, function () {
                        currentlyTyping = false;
                    });
                    contract();
                    five.style.transform = "scale(1.1)";
                    five.style.filter = "grayscale(0) contrast(1) opacity(0.9)";
                    scroller.style.left = "9.75vw";
                    currentClicked = 1;
                    figure.style.opacity = "0";
                    figure.style.height = "5vw";
                    company.style.height = "16vw";
                    workLocation.style.height = "16vw";
                    container.style.height = "45vw";
                }
            });
            target.addEventListener("click", function () {
                if (currentlyTyping == false && currentClicked != targetLimiter) {
                    currentlyTyping = true;
                    stepPrint("target~——— fulfillment expert ———", targetLocation, targetText, container, function () {
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
                    workLocation.style.height = "16vw";
                    container.style.height = "45vw";
                }
            });
            ndsu.addEventListener("click", function () {
                if (currentlyTyping == false && currentClicked != ndsuLimiter) {
                    currentlyTyping = true;
                    stepPrint("north dakota state university~——— undergraduate researcher ———", ndsuLocation, ndsuText, container, function () {
                        currentlyTyping = false;
                    });
                    contract();
                    ndsu.style.transform = "scale(1.1)";
                    ndsu.style.filter = "grayscale(0) contrast(1) opacity(0.9)";
                    scroller.style.left = "47.75vw";
                    currentClicked = 3;
                    figure.style.opacity = "0";
                    figure.style.height = "5vw";
                    company.style.height = "16vw";
                    workLocation.style.height = "16vw";
                    container.style.height = "45vw";
                }
            });
            aigen.addEventListener("click", function () {
                if (currentlyTyping == false && currentClicked != aigenLimiter) {
                    currentlyTyping = true;
                    stepPrint("aigen~——— field robot operator ———", aigenLocation, aigenText, container, function () {
                        currentlyTyping = false;
                    });
                    contract();
                    aigen.style.transform = "scale(1.1)";
                    aigen.style.filter = "grayscale(0) contrast(1) opacity(0.9)";
                    scroller.style.left = "66.85vw";
                    currentClicked = 4;
                    figure.style.opacity = "0";
                    figure.style.height = "5vw";
                    company.style.height = "16vw";
                    workLocation.style.height = "16vw";
                    container.style.height = "45vw";
                }
            });
            marvin.addEventListener("click", function () {
                if (currentlyTyping == false && currentClicked != marvinLimiter) {
                    currentlyTyping = true;
                    stepPrint("marvin composites~—— research and development intern ——", marvinLocation, marvinText, container, function () {
                        currentlyTyping = false;
                    });
                    contract();
                    marvin.style.transform = "scale(1.1)";
                    marvin.style.filter = "grayscale(0) contrast(1) opacity(0.9)";
                    scroller.style.left = "85.85vw";
                    currentClicked = 5;
                    figure.style.opacity = "0";
                    figure.style.height = "5vw";
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