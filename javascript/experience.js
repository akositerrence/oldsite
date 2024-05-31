document.addEventListener("DOMContentLoaded", function () {
    const experienceEmbed = document.querySelector("#experience-embed");
    if (experienceEmbed) {
        experienceEmbed.addEventListener("load", function () {
            var experienceAccess = experienceEmbed.contentDocument || experienceEmbed.contentWindow.document;
            const five = experienceAccess.querySelector("#fiv");
            const target = experienceAccess.querySelector("#tar");
            const ndsu = experienceAccess.querySelector("#nds");
            const aigen = experienceAccess.querySelector("#aig");
            const marvin = experienceAccess.querySelector("#mar");
            const scroller = experienceAccess.querySelector("#experience-bar");

            five.addEventListener("click", function () {
                contract();
                five.style.transform = "scale(1.1)";
                five.style.filter = "grayscale(0) contrast(1) opacity(0.9)";
                scroller.style.left = "9.75vw"
            });
            target.addEventListener("click", function () {
                contract();
                target.style.transform = "scale(1.1)";
                target.style.filter = "grayscale(0) contrast(1) opacity(0.9)";
                scroller.style.left = "28.75vw"
            });
            ndsu.addEventListener("click", function () {
                contract();
                ndsu.style.transform = "scale(1.1)";
                ndsu.style.filter = "grayscale(0) contrast(1) opacity(0.9)";
                scroller.style.left = "47.75vw"
            });
            aigen.addEventListener("click", function () {
                contract();
                aigen.style.transform = "scale(1.1)";
                aigen.style.filter = "grayscale(0) contrast(1) opacity(0.9)";
                scroller.style.left = "66.85vw"
            });
            marvin.addEventListener("click", function () {
                contract();
                marvin.style.transform = "scale(1.1)";
                marvin.style.filter = "grayscale(0) contrast(1) opacity(0.9)";
                scroller.style.left = "85.85vw"
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