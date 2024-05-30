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

            function all() {
                map.style.transform = "scale(1)"
            }

            function sanMiguel() {
                map.style.transform = "scale(1.5) translateY(-3.5vw) translateX(-27vw)"
            }

            function singapore() {
                map.style.transform = "scale(1.75) translateY(-6vw) translateX(-24vw)"
            }

            function bismarck() {
                map.style.transform = "scale(2) translateY(7vw) translateX(32vw)"
            }

            function fargo() {
                map.style.transform = "scale(2.25) translateY(7vw) translateX(27vw)"
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