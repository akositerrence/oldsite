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

            five.addEventListener("click", function () {
                contract();
                five.style.transform = "scale(1.1)";
                five.style.filter = "grayscale(0) contrast(1) opacity(0.9)";
            });
            target.addEventListener("click", function () {
                contract();
                target.style.transform = "scale(1.1)";
                target.style.filter = "grayscale(0) contrast(1) opacity(0.9)";
            });
            ndsu.addEventListener("click", function () {
                contract();
                ndsu.style.transform = "scale(1.1)";
                ndsu.style.filter = "grayscale(0) contrast(1) opacity(0.9)";
            });
            aigen.addEventListener("click", function () {
                contract();
                aigen.style.transform = "scale(1.1)";
                aigen.style.filter = "grayscale(0) contrast(1) opacity(0.9)";
            });
            marvin.addEventListener("click", function () {
                contract();
                marvin.style.transform = "scale(1.1)";
                marvin.style.filter = "grayscale(0) contrast(1) opacity(0.9)";
            });

            function contract() {
                five.style.transform = "scale(1)";
                five.style.filter = "grayscale(2) contrast(1.25) opacity(0.75)";
                target.style.transform = "scale(1)";
                target.style.filter = "grayscale(2) contrast(1.25) opacity(0.75)";
                ndsu.style.transform = "scale(1)";
                ndsu.style.filter = "grayscale(2) contrast(1.25) opacity(0.75)";
                aigen.style.transform = "scale(1)";
                aigen.style.filter = "grayscale(2) contrast(1.25) opacity(0.75)";
                marvin.style.transform = "scale(1)";
                marvin.style.filter = "grayscale(2) contrast(1.25) opacity(0.75)";
            }
        });
    }
});