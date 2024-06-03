document.addEventListener("DOMContentLoaded", function () {
    function getVW(vw) {
        return (vw / 100) * window.innerWidth;
    }

    var ctx1 = document.getElementById("running-log").getContext("2d");
    var chart1 = new Chart(ctx1, {
        type: "bar",
        data: {
            labels: ["05/28/24",
                "05/29/24",
                "05/30/24",
                "05/31/24",
                "06/01/24",
                "06/02/24"],
            datasets: [{
                label: "running distance (miles)",
                backgroundColor: "rgb(210,210,210)",
                borderColor: "transparent",
                data: [6.12,
                    6.17,
                    4.72,
                    0,
                    26.2,
                    0
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: { right: getVW(4.75) }
            },
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: {
                    title: { display: true, text: "time (days)", font: { family: "optima", size: getVW(3) } },
                    ticks: { font: { family: "optima", size: getVW(2) } },
                    grid: { display: "transparent" }
                },
                y: {
                    title: { display: true, text: "distance (miles)", font: { family: "optima", size: getVW(2.75) } },
                    ticks: { font: { family: "optima", size: getVW(1.5) } },
                    grid: { color: "rgba(255,255,255,0.2)" }
                }
            }
        }
    });

    var ctx2 = document.getElementById("weight-log").getContext("2d");
    var chart2 = new Chart(ctx2, {
        type: "bar",
        data: {
            labels: ["01/05/24",
                "01/12/24",
                "01/19/24",
                "01/26/24",
                "02/02/24",
                "02/09/24",
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
                backgroundColor: "rgb(210,210,210)",
                borderColor: "transparent",
                data: [154.0,
                    155.6,
                    154.2,
                    154.4,
                    156.4,
                    152.4,
                    154.6,
                    158.6,
                    154.9,
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
                    159.6
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: { right: getVW(4.75) }
            },
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: {
                    title: { display: true, text: "time (weeks)", font: { family: "optima", size: getVW(3) } },
                    ticks: { font: { family: "optima", size: getVW(0.5) } },
                    grid: { display: "transparent" }
                },
                y: {
                    title: { display: true, text: "weight (lbs)", font: { family: "optima", size: getVW(2.75) } },
                    ticks: { font: { family: "optima", size: getVW(1.5) } },
                    grid: { color: "rgba(255,255,255,0.2)" }
                }
            }
        }
    });

    window.addEventListener("resize", function () {
        chart1.options.scales.x.ticks.font.size = getVW(2);
        chart1.options.scales.y.ticks.font.size = getVW(2);
        chart1.options.scales.x.title.font.size = getVW(3);
        chart1.options.scales.y.title.font.size = getVW(2.75);
        chart1.options.layout.padding.right = getVW(4.75);
        chart1.update();
        chart2.options.scales.x.ticks.font.size = getVW(1);
        chart2.options.scales.y.ticks.font.size = getVW(2);
        chart2.options.scales.x.title.font.size = getVW(3);
        chart2.options.scales.y.title.font.size = getVW(2.75);
        chart2.options.layout.padding.right = getVW(4.75);
        chart2.update();
    });
});