// To DO: graph size
//
//       radio button change relationship
//       best fit line?


const numberOfDatapoints = 12;
let rawData = [];
let xlabels = [];
let xRange = [];
let yRange = [];
let k = (Math.random() * 5);
let noiseAmp;
let exponent = -1;
let transformedData = [];
let transformed = false;
let made = false;
let myChartJS;
let data = rawData;
let trendlineSlope = 1;

if (exponent == 2) {
  noiseAmp = k * 5;
}

if (exponent == 1) {
  noiseAmp = k * 2;
}

if (exponent == -1) {
  noiseAmp = k / 4;
}

if (exponent == -2) {
  noiseAmp = k / 7;
}

function makeData() {
  if (exponent > 0) {
    for (let i = 0; i < numberOfDatapoints; i++) {
      let xx = Math.floor(Math.random() * 41) / 4; //random between 0 and 10, .25 intervals
      let yy = Math.round(10 * Math.max(k * xx ** exponent + noiseAmp * (Math.random() - .5), 0)) / 10;
      rawData.push({
        x: xx,
        y: yy
      });
      transformedData.push({
        x: Math.round(1000 * (xx ** exponent)) / 1000,
        y: yy
      });
    }
  } else if (exponent < 0) {

    for (let i = 0; i < numberOfDatapoints; i++) {
      let upperBound = Math.random();
      let xx = Math.floor(k * 10) / 20 + Math.floor(upperBound * Math.random() * 41) / 4; //random between 0 and 10, .25 intervals
      let yy = Math.round(1000 * k * (xx + noiseAmp * (Math.random() - .5)) ** exponent) / 1000; //(noiseAmp/xx) * (Math.random() - .5)
      rawData.push({
        x: xx,
        y: yy
      });
      transformedData.push({
        x: Math.round(1000 * (xx ** exponent)) / 1000,
        y: yy
      });
    }
  }
  data = rawData;
}

function chartData(data) {
  const ctx = document.getElementById('myChart').getContext('2d');
  let dataToPlot = data;
  myChartJS = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [{
        label: 'Sample Data Set',
        type: 'scatter',
        data: dataToPlot,
        showLine: false,
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: false,
      maintainAspectRatio: true,
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Dependent Variable'
          },
          ticks: {
            beginAtZero: true
          }
        }],
        xAxes: [{
          type: 'linear', // MANDATORY TO SHOW YOUR POINTS! (THIS IS THE IMPORTANT BIT)
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Independent Variable'
          },
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  })
}

window.addEventListener('DOMContentLoaded', (event) => {
  makeData();
  chartData(data);

});

function toggleState() {
  transformed = !transformed;
}

document.getElementById('transbutton').addEventListener('click', function() {
  let elem = document.getElementById("transbutton");
  if (transformed) {
    myChartJS.data.datasets[0].data = transformedData;
    myChartJS.options.scales.xAxes[0].scaleLabel.labelString = "(Independent Variable)^" + exponent;
    let prelineMax = myChartJS.options.scales.yAxes[0].ticks.max;
    myChartJS.options.annotation = {
      annotations: [{
        type: 'line',
        mode: 'horizontal',
        scaleID: 'y-axis-0',
        value: 0,
        endValue: trendlineSlope,
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 4,
      }]
    };
    elem.value = 'Revert To Raw Data';
    console.log(prelineMax)
    myChartJS.options.scales.yAxes[0].ticks.max = prelineMax;




  } else {
    myChartJS.data.datasets[0].data = rawData;
    myChartJS.options.scales.xAxes[0].scaleLabel.labelString = "Independent Variable";
    myChartJS.options.annotation = {};
    elem.value = 'Transform Data';

  }
  myChartJS.update();
});


function sliderFunction() {
  let val = document.getElementById("myRange").value;
  myChartJS.options.annotation.annotations[0].endValue = val;
  myChartJS.update();
  console.log(myChartJS.options.scales.yAxes[0].ticks.max);
}
