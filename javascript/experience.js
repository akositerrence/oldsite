document.addEventListener("DOMContentLoaded", function () {
    const experienceEmbed = document.querySelector("#experience-embed");
    const container = document.querySelector("#specific-experience-description");
    let currentlyTyping = false;

    function stepPrint(text, container, callback) {
        container.innerHTML = "";
        let i = 0;

        function type() {
            if (i < text.length) {
                character = document.createTextNode(text.charAt(i));
                container.appendChild(character);
                i++;
                setTimeout(type, 25);
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

            const fiveText = "crew member · five guys";
            const targetText = "fulfillment expert · target";
            const ndsuText = "researcher · north dakota state university";
            const aigenText = "field robot operator · aigen";
            const marvinText = "r&d intern · marvin composites";

            five.addEventListener("click", function () {
                if (currentlyTyping == false) {
                    currentlyTyping = true;
                    stepPrint(fiveText, container, function () {
                        currentlyTyping = false;
                    });
                    contract();
                    five.style.transform = "scale(1.1)";
                    five.style.filter = "grayscale(0) contrast(1) opacity(0.9)";
                    scroller.style.left = "9.75vw";
                }
            });
            target.addEventListener("click", function () {
                if (currentlyTyping == false) {
                    currentlyTyping = true;
                    stepPrint(targetText, container, function () {
                        currentlyTyping = false;
                    });
                    contract();
                    target.style.transform = "scale(1.1)";
                    target.style.filter = "grayscale(0) contrast(1) opacity(0.9)";
                    scroller.style.left = "28.75vw";
                }
            });
            ndsu.addEventListener("click", function () {
                if (currentlyTyping == false) {
                    currentlyTyping = true;
                    stepPrint(ndsuText, container, function () {
                        currentlyTyping = false;
                    });
                    contract();
                    ndsu.style.transform = "scale(1.1)";
                    ndsu.style.filter = "grayscale(0) contrast(1) opacity(0.9)";
                    scroller.style.left = "47.75vw";
                }
            });
            aigen.addEventListener("click", function () {
                if (currentlyTyping == false) {
                    currentlyTyping = true;
                    stepPrint(aigenText, container, function () {
                        currentlyTyping = false;
                    });
                    contract();
                    aigen.style.transform = "scale(1.1)";
                    aigen.style.filter = "grayscale(0) contrast(1) opacity(0.9)";
                    scroller.style.left = "66.85vw";
                }
            });
            marvin.addEventListener("click", function () {
                if (currentlyTyping == false) {
                    currentlyTyping = true;
                    stepPrint(marvinText, container, function () {
                        currentlyTyping = false;
                    });
                    contract();
                    marvin.style.transform = "scale(1.1)";
                    marvin.style.filter = "grayscale(0) contrast(1) opacity(0.9)";
                    scroller.style.left = "85.85vw";
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