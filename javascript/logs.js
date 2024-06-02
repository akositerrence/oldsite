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

    var ctx2 = document.getElementById("weight-log").getContext("2d");
    var chart = new Chart(ctx2, {
        type: "bar",
        data: {
            labels: ["01/05/24",
                "01/12/24",
                "01/19/24",
                "01/26/24",
                "02/02/24",
                "02/09/24",
                "02/16/24",
                "02/16/24",
                "02/23/24",
                "03/01/24",
                "03/08/24",
                "03/15/24",
                "03/22/24",
                "03/29/24",
                "04/05/24",
                "04/12/24",
                "04/19/24",
                "04/26/24",
                "05/03/24",
                "05/10/24",
                "05/17/24",
                "05/31/24"
            ],
            datasets: [{
                label: "weight (lbs)",
                backgroundColor: "white",
                borderColor: "transparent",
                data: [154.0,
                    155.6,
                    154.2,
                    154.4,
                    152.4,
                    154.6,
                    158.6,
                    158.7,
                    156.2,
                    156.2,
                    156.2,
                    160.2,
                    158.6,
                    159.2,
                    157.0,
                    157.0,
                    157.0,
                    160.0,
                    159.6,
                    159.6]
            }]
        },
        options: {}
    });
});