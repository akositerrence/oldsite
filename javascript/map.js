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
    if (mapFrame) {
        mapFrame.addEventListener("load", function () {
            let mapAccess = mapFrame.contentDocument || mapFrame.contentWindow.document;
            let map = mapAccess.querySelector(".dot-img")
            leftButton = mapAccess.querySelector("#left");
            rightButton = mapAccess.querySelector("#right");
            philippineText = mapAccess.querySelector(".philippines");

            function all() {
                map.style.transform = "scale(1)"
                philippineText.style.opacity = "0%";
                philippineText.style.transform = "translateX(5vw)";
            }

            function sanMiguel() {
                map.style.transform = "scale(6) translateY(-2.7vw) translateX(-32vw)"
                philippineText.style.opacity = "70%";
                philippineText.style.transform = "translateX(-5vw)";
            }

            function singapore() {
                map.style.transform = "scale(6.5) translateY(-5vw) translateX(-24vw)"
                philippineText.style.opacity = "0%";
                philippineText.style.transform = "translateX(5vw)";
            }

            function bismarck() {
                map.style.transform = "scale(4) translateY(7vw) translateX(32vw)"
            }

            function fargo() {
                map.style.transform = "scale(4.25) translateY(7vw) translateX(27vw)"
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