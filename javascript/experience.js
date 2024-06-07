document.addEventListener("DOMContentLoaded", function () {
    const experienceEmbed = document.querySelector("#experience-embed");
    const container = document.querySelector("#specific-experience-description");
    let currentlyTyping = false;

    function stepPrint(text, container, callback) {
        container.innerHTML = "";
        let i = 0;

        function type() {
            if (i < text.length) {
                if (text.charAt(i) === "~") {
                    container.appendChild(document.createElement("br"));
                } else {
                    character = document.createTextNode(text.charAt(i));
                    container.appendChild(character);
                }
                i++;
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

            const fiveText = `
            five guys
            ~crew member
            ~jun 2020 — jun 2022
            ~· built effective communication skills with customers
            ~· operated and was proficient in all workstations
            ~· handled multiple stations in a fast paced environment
            `;
            const targetText = `
            target
            ~fulfillment expert
            ~jun 2022 — aug 2022
            ~· applied interdepartmental knowledge to locate items on the sales floor under timed deadlines
            ~· produced one of the highest productivity metrics in the department
            ~· assisted other departments or team members with tasks beyond the scope of the job description
            `;
            const ndsuText = `
            north dakota state university
            ~innovation studio student volunteer technician 
            ~sep 2023 — present
            ~
            ~cybersecurity undergraduate researcher 
            ~nov 2023 — present
            ~
            ~mechanical engineering undergraduate researcher 
            ~jun 2024 — present
            `;
            const aigenText = `
            aigen
            ~field robot operator
            ~mar 2024 — present
            ~· designated field captain and technician
            `;
            const marvinText = `
            marvin composites
            ~research & development intern
            ~· incoming august 2024
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
                    stepPrint(fiveText, container, function () {
                        currentlyTyping = false;
                    });
                    contract();
                    five.style.transform = "scale(1.1)";
                    five.style.filter = "grayscale(0) contrast(1) opacity(0.9)";
                    scroller.style.left = "9.75vw";
                    currentClicked = 1;
                }
            });
            target.addEventListener("click", function () {
                if (currentlyTyping == false && currentClicked != targetLimiter) {
                    currentlyTyping = true;
                    stepPrint(targetText, container, function () {
                        currentlyTyping = false;
                    });
                    contract();
                    target.style.transform = "scale(1.1)";
                    target.style.filter = "grayscale(0) contrast(1) opacity(0.9)";
                    scroller.style.left = "28.75vw";
                    currentClicked = 2;
                }
            });
            ndsu.addEventListener("click", function () {
                if (currentlyTyping == false && currentClicked != ndsuLimiter) {
                    currentlyTyping = true;
                    stepPrint(ndsuText, container, function () {
                        currentlyTyping = false;
                    });
                    contract();
                    ndsu.style.transform = "scale(1.1)";
                    ndsu.style.filter = "grayscale(0) contrast(1) opacity(0.9)";
                    scroller.style.left = "47.75vw";
                    currentClicked = 3;
                }
            });
            aigen.addEventListener("click", function () {
                if (currentlyTyping == false && currentClicked != aigenLimiter) {
                    currentlyTyping = true;
                    stepPrint(aigenText, container, function () {
                        currentlyTyping = false;
                    });
                    contract();
                    aigen.style.transform = "scale(1.1)";
                    aigen.style.filter = "grayscale(0) contrast(1) opacity(0.9)";
                    scroller.style.left = "66.85vw";
                    currentClicked = 4;
                }
            });
            marvin.addEventListener("click", function () {
                if (currentlyTyping == false && currentClicked != marvinLimiter) {
                    currentlyTyping = true;
                    stepPrint(marvinText, container, function () {
                        currentlyTyping = false;
                    });
                    contract();
                    marvin.style.transform = "scale(1.1)";
                    marvin.style.filter = "grayscale(0) contrast(1) opacity(0.9)";
                    scroller.style.left = "85.85vw";
                    currentClicked = 5;
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