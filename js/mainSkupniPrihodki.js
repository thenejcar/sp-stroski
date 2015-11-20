var chart;
var canvas;
var data =
{
    labels: ["11.11.2015", "12.11.2015", "13.11.2015", "14.11.2015", "15.11.2015", "16.11.2015",
        "17.11.2015", "18.11.2015", "19.11.2015", "20.11.2015", "21.11.2015", "22.11.2015"],
    datasets: [
        {
            label: "Skupni Račun 1",
            fillColor: "rgba(76,175,80,0.2)",
            strokeColor: "rgba(76,175,80,0.9)",
            pointColor: "rgba(76,175,80,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [-15, 10, 5, 25, 15, 25, 45, -5, 5, 25, 15, 30]
        },
        {
            label: "asterix2",
            fillColor: "rgba(205,220,57,0)",
            strokeColor: "rgba(205,220,57,0.9)",
            pointColor: "rgba(205,220,57,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [-15, 10, 10, 10, 10, 20, 20, -30, -20, -20, -20, -20]
        },
        {
            label: "cveto2010",
            fillColor: "rgba(3,169,244,0)",
            strokeColor: "rgba(3,169,244,0.9)",
            pointColor: "rgba(3,169,244,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [0, 0, -5, 15, 5, 5, 25, 25, 25, 45, 35, 50]
        }
    ]
};

var ctxLwL = document.getElementById("chart").getContext("2d");

$(document).ready(function () {

    drawChart()

    $("#datepicker").datepicker(
    {
        format: "MM yyyy",
        startView: "months",
        minViewMode: "months",
        autoclose: true
    }).datepicker("update", new Date()).on('changeDate', function ()
    {
        updateDate()
    })
});

function updateDate() {
    //TODO
    console.log("this will update the list")
}

function drawChart() {
    console.log("drawing chart")
    canvas = document.getElementById("chart");
    canvas.width = $("#right").width() - 20;

    Chart.types.Line.extend({
        name: "LineWithLine",
        draw: function () {
            Chart.types.Line.prototype.draw.apply(this, arguments);

            var lines = this.options.limitLines;

            for (var i = lines.length; --i >= 0;) {

                var xStart = Math.round(this.scale.xScalePaddingLeft);
                var linePositionY = this.scale.calculateY(lines[i].value);

                this.chart.ctx.fillStyle = lines[i].color ? lines[i].color : this.scale.textColor;
                this.chart.ctx.font = this.scale.font;
                this.chart.ctx.textAlign = "left";
                this.chart.ctx.textBaseline = "top";

                if (this.scale.showLabels && lines[i].label) {
                    this.chart.ctx.fillText(lines[i].label, xStart + 5, linePositionY);
                }

                this.chart.ctx.lineWidth = this.scale.gridLineWidth;
                this.chart.ctx.strokeStyle = lines[i].color ? lines[i].color : this.scale.gridLineColor;

                if (this.scale.showHorizontalLines) {
                    this.chart.ctx.beginPath();
                    this.chart.ctx.moveTo(xStart, linePositionY);
                    this.chart.ctx.lineTo(this.scale.width, linePositionY);
                    this.chart.ctx.stroke();
                    this.chart.ctx.closePath();
                }

                this.chart.ctx.lineWidth = this.lineWidth;
                this.chart.ctx.strokeStyle = this.lineColor;
                this.chart.ctx.beginPath();
                this.chart.ctx.moveTo(xStart - 5, linePositionY);
                this.chart.ctx.lineTo(xStart, linePositionY);
                this.chart.ctx.stroke();
                this.chart.ctx.closePath();
            }
        }
    });

    var ctx = $("#chart").get(0).getContext("2d");
    chart = new Chart(ctx).LineWithLine(data,
        {
            responsive: true,
            bezierCurve: false,
            multiTooltipTemplate: "<%= datasetLabel %>: <%= value %>",
            limitLines:
            [
                {
                    label: '',
                    value: 0,
                    color: 'rgba(15, 15, 15, 0.8)',
                },
            ],
        });
}


