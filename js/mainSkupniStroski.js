var chart;
var canvas;
var data =
{
    labels: ["11.11.2015", "12.11.2015", "13.11.2015"],
    datasets: [
        {
            label: "Skupni Račun 2",
            fillColor: "rgba(76,175,80,0.2)",
            strokeColor: "rgba(76,175,80,0.9)",
            pointColor: "rgba(76,175,80,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [20, 5, 0, ]
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


