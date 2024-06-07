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
    let container = document.querySelector("#specific-globe-description")
    let currentlyTyping = false;

    const allDescriptor = "placeholderallmap";
    const philippineDescriptor = "placeholdersanmiguel";
    const singaporeDescriptor = "placeholdersingapore";
    const bismarckDescriptor = "placeholderbismarck";
    const fargoDescriptor = "placeholderfargo";


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
                if (currentlyTyping == false) {
                    currentlyTyping = true;
                    stepPrint(allDescriptor, container, function () {
                        currentlyTyping = false;
                    });
                    map.style.transform = "scale(1)";
                    philippineText.style.opacity = "0%";
                    singaporeText.style.opacity = "0%";
                    bismarckText.style.opacity = "0%";
                    fargoText.style.opacity = "0%";
                    leftButton.style.opacity = "0%";
                    leftButton.style.transform = "scaleY(2) scaleX(0.65) translateX(-15vw)";
                }
            }

            function sanMiguel() {
                if (currentlyTyping == false) {
                    currentlyTyping = true;
                    stepPrint(philippineDescriptor, container, function () {
                        currentlyTyping = false;
                    });
                    map.style.transform = "scale(6) translateY(-2vw) translateX(-32vw)";
                    philippineText.style.opacity = "80%";
                    singaporeText.style.opacity = "0%";
                    leftButton.style.opacity = "70%";
                    leftButton.style.transform = "scaleY(2) scaleX(0.65) translateY(0.5vw)";
                }
            }

            function singapore() {
                if (currentlyTyping == false) {
                    currentlyTyping = true;
                    stepPrint(singaporeDescriptor, container, function () {
                        currentlyTyping = false;
                    });
                    map.style.transform = "scale(6.5) translateY(-5vw) translateX(-24vw)"
                    philippineText.style.opacity = "0%";
                    singaporeText.style.opacity = "80%";
                    bismarckText.style.opacity = "0%";
                }
            }

            function bismarck() {
                if (currentlyTyping == false) {
                    currentlyTyping = true;
                    stepPrint(bismarckDescriptor, container, function () {
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
                    stepPrint(fargoDescriptor, container, function () {
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