$(document).ready(function()
{
    drawChart()
});

$( window ).resize(function()
{
    drawChart();
});

function drawChart()
{
    var canvas = document.getElementById("chart");
    canvas.width = $("#right_tabs").width();

    var data =
    {
        labels: ["11.11.2015","12.11.2015","13.11.2015","14.11.2015","15.11.2015","16.11.2015"],
        datasets:
            [{
                label: "račun 0",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [-15, 10, 5, 25, 15, 25]
            }]
    };
    var ctx = $("#chart").get(0).getContext("2d");
    var chart = new Chart(ctx).Line(data, {bezierCurve: false});
}