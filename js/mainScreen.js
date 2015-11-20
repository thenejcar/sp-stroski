var chart;
var canvas;
var data =
{
    labels: ["11.11.2015","12.11.2015","13.11.2015","14.11.2015","15.11.2015","16.11.2015",
        "17.11.2015","18.11.2015","19.11.2015","20.11.2015","21.11.2015","22.11.2015"],
    datasets:
        [{
            label: "račun 0",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [-15, 10, 5, 25, 15, 25, 45, -5, 5, 25, 15, 30]
        }]
};

$(document).ready(function()
{
    drawChart()

    $("#datepicker").datepicker( {
        format: "MM yyyy",
        startView: "months",
        minViewMode: "months",
        autoclose: true
    }).datepicker("update", new Date()).on('changeDate', function(){updateDate()})
});

$( window ).resize(function()
{
    console.log("resize chart")
    canvas = document.getElementById("chart");
    canvas.width = $("#right_tabs").width() - 20;
    var ctx = $("#chart").get(0).getContext("2d");
    chart = new Chart(ctx).Line(data, {bezierCurve: false});
});

function drawChart()
{
    console.log("drawing chart")
    canvas = document.getElementById("chart");
    canvas.width = $("#right").width() - 20;

    var ctx = $("#chart").get(0).getContext("2d");
    chart = new Chart(ctx).Line(data, {bezierCurve: false});
}

function updateDate()
{
    //TODO
    console.log("this will update the list")
}



