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
    let mapFrame = document.querySelector("iframe.globe-embed");
    let container = document.querySelector("#specific-globe-description");
    let hours = document.querySelector("#location-hours");
    const figure = document.querySelector("#world-figure");
    let currentlyTyping = false;


    const sanMiguelTime = `
    ————— 2004 — 2017 —————
    `;
    const philippineDescriptor = `
    placeholdersanmiguel placeholdersanmiguel placeholdersanmiguel
    placeholdersanmiguel placeholdersanmiguel placeholdersanmiguel
    placeholdersanmiguel placeholdersanmiguel placeholdersanmiguel end
    `;

    const singaporeTime = `
    ————— 2004 — 2017 —————
    `;
    const singaporeDescriptor = `
    placeholdersingapore placeholdersingapore placeholdersingapore
    placeholdersingapore placeholdersingapore placeholdersingapore
    placeholdersingapore placeholdersingapore placeholdersingapore end
    `;

    const bismarckTime = `
    ————— 2017 — 2023 —————
    `;
    const bismarckDescriptor = `
    placeholderbismarck placeholderbismarck placeholderbismarck
    placeholderbismarck placeholderbismarck placeholderbismarck
    placeholderbismarck placeholderbismarck placeholderbismarck end
    `;

    const fargoTime = `
    ————— 2023 — present —————
    `;
    const fargoDescriptor = `
    placeholderfargo placeholderfargo placeholderfargo
    placeholderfargo placeholderfargo placeholderfargo
    placeholderfargo placeholderfargo placeholderfargo end
    `;

    function stepPrint(time, text, container, callback) {
        container.innerHTML = "";
        hours.innerHTML = "";
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
                setTimeout(type, 10);
            } else {
                if (callback) { callback(); }
            }
        }
        type();
    }

    if (mapFrame) {
        mapFrame.addEventListener("load", function () {
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
                    currentlyTyping = true;
                    stepPrint(sanMiguelTime, philippineDescriptor, container, function () {
                        currentlyTyping = false;
                    });
                    map.style.transform = "scale(6) translateY(-2vw) translateX(-32vw)";
                    philippineText.style.opacity = "80%";
                    singaporeText.style.opacity = "0%";
                    leftButton.style.opacity = "70%";
                    leftButton.style.transform = "scaleY(2) scaleX(0.65) translateX(-15vw)";
                    hours.style.height = "6.5vw";
                    container.style.height = "40vw";
                    figure.style.opacity = "0%";
                }
            }

            function singapore() {
                if (currentlyTyping == false) {
                    currentlyTyping = true;
                    stepPrint(singaporeTime, singaporeDescriptor, container, function () {
                        currentlyTyping = false;
                    });
                    map.style.transform = "scale(6.5) translateY(-5vw) translateX(-24vw)"
                    philippineText.style.opacity = "0%";
                    singaporeText.style.opacity = "80%";
                    bismarckText.style.opacity = "0%";
                    leftButton.style.transform = "scaleY(2) scaleX(0.65) translateY(0.5vw)";
                }
            }

            function bismarck() {
                if (currentlyTyping == false) {
                    currentlyTyping = true;
                    stepPrint(bismarckTime, bismarckDescriptor, container, function () {
                        currentlyTyping = false;
                    });
                    map.style.transform = "scale(4) translateY(7vw) translateX(32vw)"
                    singaporeText.style.opacity = "0%";
                    bismarckText.style.opacity = "80%";
                    fargoText.style.opacity = "0%";
                    rightButton.style.opacity = "70%";
                    rightButton.style.transform = "scaleY(2) scaleX(0.65) translateY(0.5vw)";
                }
            }

            function fargo() {
                if (currentlyTyping == false) {
                    currentlyTyping = true;
                    stepPrint(fargoTime, fargoDescriptor, container, function () {
                        currentlyTyping = false;
                    });
                    map.style.transform = "scale(4.25) translateY(3vw) translateX(20vw)"
                    bismarckText.style.opacity = "0%";
                    fargoText.style.opacity = "80%";
                    rightButton.style.opacity = "100%";
                    rightButton.style.transform = "scaleY(2) scaleX(0.65) translateX(15vw)";
                }
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