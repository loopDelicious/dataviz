
// pull in HRdata from data.js
var days = [];
var submissions = [];
var topics = [];
var success = [];

function readData() {

    for (var i = 0; i < HRdata.length; i++) {
        days.push(HRdata[i][0]);
        submissions.push(HRdata[i][1]);
        topics.push(HRdata[i][2]);
        success.push(HRdata[i][3]);
    }
}

readData();

// set up chart data
var myChartData = {
    labels: topics,
    datasets: [{
        type: 'bar',
        label: '# of submissions',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        data: submissions,
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        yAxisID: "y-axis-1",
    }, {
        type: 'line',
        label: 'success rate',
        backgroundColor: "rgba(151,187,205,0.5)",
        data: success,
        borderColor: 'white',
        borderWidth: 2,
        yAxisID: "y-axis-2",
    }, ]
};

// instantiate chart object, and plot data on html canvas
window.onload = function() {
    var ctx = document.getElementById("myChart");
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: myChartData,
        options: {
            responsive: true,
            title: {
                display: true,
                text: '30 days of coding with HackerRank'
            },
            scales: {
                yAxes: [{
                    type: "linear",
                    display: true,
                    position: "left",
                    id: "y-axis-1",
                }, {
                    type: "linear",
                    display: true,
                    position: "right",
                    id: "y-axis-2",
                    gridLines: {
                        drawOnChartArea: false
                    }
                }],
            }
        }
    });
};

// https://github.com/chartjs/Chart.js/blob/v2.0-dev/samples/combo-bar-line.html
// https://github.com/chartjs/Chart.js/blob/v2.0-dev/samples/bar-multi-axis.html


//Take I:
//get chart canvas
// var ctx = document.getElementById("myChart");
// instantiate chart object
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: topics,
//         datasets: [
//             {
//             label: '# of submissions',
//             data: submissions,
//             backgroundColor: 'rgba(255, 99, 132, 0.2)',
//             borderColor: 'rgba(255,99,132,1)',
//             borderWidth: 1,
//             }
//         ]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });

// Chart.JS Example:
// var ctx = document.getElementById("myChart");
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });

