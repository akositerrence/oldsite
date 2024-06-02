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
    let generalText = document.querySelector("#specific-globe-description")
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

            function all() {
                map.style.transform = "scale(1)";
                philippineText.style.opacity = "0%";
                generalText.textContent = "placeholder - world map";
            }

            function sanMiguel() {
                map.style.transform = "scale(6) translateY(-2vw) translateX(-32vw)";
                philippineText.style.opacity = "80%";
                singaporeText.style.opacity = "0%";
                generalText.textContent = "placeholder - san miguel";
            }

            function singapore() {
                map.style.transform = "scale(6.5) translateY(-5vw) translateX(-24vw)"
                philippineText.style.opacity = "0%";
                singaporeText.style.opacity = "80%";
                bismarckText.style.opacity = "0%";
                generalText.textContent = "placeholder - singapore";
            }

            function bismarck() {
                map.style.transform = "scale(4) translateY(7vw) translateX(32vw)"
                singaporeText.style.opacity = "0%";
                bismarckText.style.opacity = "80%";
                fargoText.style.opacity = "0%";
                generalText.textContent = "placeholder - bismarck";
            }

            function fargo() {
                map.style.transform = "scale(4.25) translateY(3vw) translateX(20vw)"
                bismarckText.style.opacity = "0%";
                fargoText.style.opacity = "80%";
                generalText.textContent = "placeholder - fargo";
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
                back();
                positionSwitch(position);
            });
            rightButton.addEventListener("click", function () {
                forward();
                positionSwitch(position);
            });
        });
    }
});