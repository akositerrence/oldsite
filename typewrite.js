document.addEventListener("DOMContentLoaded", function () {
    const pressme = document.querySelector("#butt");
    const container = document.querySelector("#work");
    const text = "youre cute";
    let currentlyTyping = false;

    console.log("reached 1");
    pressme.addEventListener("click", function () {
        if (currentlyTyping == false) {
            console.log("pressed button");
            currentlyTyping = true;
            stepPrint(text, container, function () {
                currentlyTyping = false;
            });
        }
    });
});

function stepPrint(text, container, callback) {
    container.innerHTML = "";
    let i = 0;

    function type() {
        if (i < text.length) {
            console.log("bruh")
            character = document.createTextNode(text.charAt(i));
            container.appendChild(character);
            i++;
            setTimeout(type, 35);
        } else {
            if (callback) { callback(); }
        }
    }
    type();
}