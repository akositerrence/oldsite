document.addEventListener("DOMContentLoaded", function () {
    var ctx1 = document.getElementById("running-log").getContext("2d");
    var chart = new Chart(ctx1, {
        type: "bar",
        data: {
            labels: ["05/28/24", "05/29/24", "05/30/24", "05/31/24", "06/01/24"],
            datasets: [{
                label: "running distance (miles)",
                backgroundColor: "white",
                borderColor: "transparent",
                data: [6.12, 6.17, 4.72, 0, 26.2]
            }]
        },
        options: {}
    });
});