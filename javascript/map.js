let position = 1;
let minPos = 1;
let maxPos = 5;

function forward() {
    if (position < maxPos) {
        position++;
    }
}

function back() {
    if (position > minPos) {
        position--;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let headImage = document.querySelector(".img-home");
    let mapFrame = document.querySelector("iframe.globe-embed");
    let container = document.querySelector("#specific-globe-description");
    let hours = document.querySelector("#location-hours");
    const figure = document.querySelector("#world-figure");
    let currentlyTyping = false;


    const sanMiguelTime = `
    ————— 2004 — 2017 —————
    `;
    const philippineDescriptor = `
    I was born in the Philippines in the province of Nueva Ecija and raised in Bulacan. 
    living in Rosemoor Village under the guardianship of my grandfather,
    I spent my elementary years at St Paul University at San Miguel, where
    I received eight years of education, taking kindergarten twice and studying
    there until grade six. While under the supervision of my grandfather, my parents 
    worked overseas in Singapore, where I lived over almost every summer. After living 
    in the Philipppines for thirteen years, my parents and I immigrated to the United States, 
    settling in Bismarck, North Dakota, where I would spend my middle school and 
    high school years, and where I would meet much of my self discovery. 
    I lived in Bismarck for seven years before moving to Fargo, North Dakota for college.
    `;

    function stepPrint(time, text, container, callback) {
        container.innerHTML = "";
        let i = 0;
        let j = 0;

        function type() {
            if (j < time.length) {
                hoursChar = document.createTextNode(time.charAt(j));
                hours.appendChild(hoursChar);
            }
            if (i < text.length) {
                character = document.createTextNode(text.charAt(i));
                container.appendChild(character);
                i++;
                j++;
                setTimeout(type, 7.5);
            } else {
                if (callback) { callback(); }
            }
        }
        type();
    }

    if (mapFrame) {
        mapFrame.addEventListener("load", function () {
            let inFlag = false;
            let mapAccess = mapFrame.contentDocument || mapFrame.contentWindow.document;
            let map = mapAccess.querySelector(".wrapper");
            let leftButton = mapAccess.querySelector("#left");
            let rightButton = mapAccess.querySelector("#right");
            let philippineText = mapAccess.querySelector(".philippines");
            let singaporeText = mapAccess.querySelector(".singapore");
            let bismarckText = mapAccess.querySelector(".bismarck");
            let fargoText = mapAccess.querySelector(".fargo");

            function sanMiguel() {
                if (currentlyTyping == false) {
                    if (inFlag == false) {
                        currentlyTyping = true;
                        stepPrint(sanMiguelTime, philippineDescriptor, container, function () {
                            currentlyTyping = false;
                        });
                    }
                    map.style.transform = "scale(6) translateY(-2vw) translateX(-32vw)";
                    philippineText.style.opacity = "80%";
                    singaporeText.style.opacity = "0%";
                    leftButton.style.opacity = "70%";
                    leftButton.style.transform = "scaleY(2) scaleX(0.65) translateX(-15vw)";
                    figure.style.opacity = "0%";
                    figure.style.paddingTop = "0vw";
                    if (window.innerWidth >= 768) {
                        container.style.paddingTop = "0vw";
                        container.style.paddingBottom = "0vw";
                        container.style.height = "15vw";
                        hours.style.paddingTop = "1vw";
                        hours.style.height = "1vw";
                        headImage.style.paddingTop = "9vw";
                    } else {
                        container.style.paddingTop = "5vw";
                        container.style.height = "106vw";
                        hours.style.height = "6.5vw";
                    }
                    inFlag = true;
                }
            }

            function singapore() {
                hours.textContent = "————— 2004 — 2017 —————";
                map.style.transform = "scale(6.5) translateY(-5vw) translateX(-24vw)"
                philippineText.style.opacity = "0%";
                singaporeText.style.opacity = "80%";
                bismarckText.style.opacity = "0%";
                leftButton.style.transform = "scaleY(2) scaleX(0.65) translateY(0.5vw)";
            }

            function bismarck() {
                hours.textContent = "————— 2017 — 2023 —————";
                map.style.transform = "scale(4) translateY(7vw) translateX(32vw)"
                singaporeText.style.opacity = "0%";
                bismarckText.style.opacity = "80%";
                fargoText.style.opacity = "0%";
                rightButton.style.opacity = "70%";
                rightButton.style.transform = "scaleY(2) scaleX(0.65) translateY(0.5vw)";

            }

            function fargo() {
                hours.textContent = "————— 2023 — Present —————";
                map.style.transform = "scale(4.25) translateY(3vw) translateX(20vw)"
                bismarckText.style.opacity = "0%";
                fargoText.style.opacity = "80%";
                rightButton.style.opacity = "100%";
                rightButton.style.transform = "scaleY(2) scaleX(0.65) translateX(15vw)";

            }

            function positionSwitch(position) {
                switch (position) {
                    case 1:
                        all();
                        break;
                    case 2:
                        sanMiguel();
                        break;
                    case 3:
                        singapore();
                        break;
                    case 4:
                        bismarck();
                        break;
                    case 5:
                        fargo();
                        break;
                    default:
                        null;
                }
            }

            leftButton.addEventListener("click", function () {
                if (currentlyTyping == false) {
                    back();
                    positionSwitch(position);
                }
            });
            rightButton.addEventListener("click", function () {
                if (currentlyTyping == false) {
                    forward();
                    positionSwitch(position);
                }
            });
        });
    }
});