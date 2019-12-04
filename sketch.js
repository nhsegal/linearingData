
const numberOfDatapoints = 12;
let rawData = [];
let xlabels = [];
let xRange = [];
let yRange = [];
let k = (1 + Math.random() * 3);
let noiseAmp;
let exponent;

let sqData = [];
let invData = [];
let invSqData = [];

let myChartJS;
let data = rawData;
let trendlineSlope = 0;
let preLineMax = 0;
let xMax;
let prevExp;



function pickExponent() {
  let num = Math.random();
  if (num > 0.66) {
    exponent = 2;
  } else if (num > 0.33) {
    exponent = -1;
  } else {
    exponent = -2;
  }

  if (exponent == 2) {
    noiseAmp = k * 4;
  }

  if (exponent == 1) {
    noiseAmp = k + 1;
  }

  if (exponent == -1) {
    noiseAmp = k / 10;
  }

  if (exponent == -2) {
    noiseAmp = k / 24;
  }

}

function makeData() {
  if (exponent == 1) {
    for (let i = 0; i < numberOfDatapoints; i++) {
      let xx = Math.floor(Math.random() * 41) / 4; //random between 0 and 10, .25 intervals
      let yy = Math.round(10 * Math.max(k * xx ** exponent + noiseAmp * (Math.random() - .5), 0)) / 10;
      rawData.push({
        x: xx,
        y: yy
      });
      sqData.push({
        x: Math.round(1000 * (xx ** 2)) / 1000,
        y: yy
      });
      invData.push({
        x: Math.round(1000 * (xx ** -1)) / 1000,
        y: yy
      });
      invSqData.push({
        x: Math.round(1000 * (xx ** -2)) / 1000,
        y: yy
      });
    }
  } else if (exponent == 2) {
    for (let i = 0; i < numberOfDatapoints; i++) {
      let xx = Math.floor(Math.random() * 41) / 4; //random between 0 and 10, .25 intervals
      let yy = Math.round(10 * Math.max((k / 3) * xx ** exponent + noiseAmp * (Math.random() - .5), 0)) / 10;
      rawData.push({
        x: xx,
        y: yy
      });
      sqData.push({
        x: Math.round(1000 * (xx ** 2)) / 1000,
        y: yy
      });
      invData.push({
        x: Math.round(1000 * (xx ** -1)) / 1000,
        y: yy
      });
      invSqData.push({
        x: Math.round(1000 * (xx ** -2)) / 1000,
        y: yy
      });
    }
  } else if (exponent < 0) {
    for (let i = 0; i < numberOfDatapoints; i++) {
      let upperBound = Math.random();
      let xx = Math.floor(k * 10) / 20 + Math.floor(upperBound * Math.random() * 41) / 4;
      let yy = Math.round(40 * Math.max(k * xx ** exponent + noiseAmp * (Math.random() - .5), 0)) / 4;
      rawData.push({
        x: xx,
        y: yy
      });
      sqData.push({
        x: Math.round(1000 * (xx ** 2)) / 1000,
        y: yy
      });
      invData.push({
        x: Math.round(1000 * (xx ** -1)) / 1000,
        y: yy
      });
      invSqData.push({
        x: Math.round(1000 * (xx ** -2)) / 1000,
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
      legend: {
        display: false
      },
      annotation: {
        annotations: [{
          type: 'line',
          mode: 'horizontal',
          scaleID: 'y-axis-0',
          value: 0,
          endValue: trendlineSlope,
          borderColor: 'rgb(75, 192, 192)',
          borderWidth: 4,
        }]
      },
      responsive: false,
      maintainAspectRatio: true,
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Dependent Variable',
            fontSize: 16
          },
          ticks: {
            beginAtZero: true,
            fontSize: 16
          },
          afterSetDimensions: function(axes) {
            preLineMax = axes.max;
          }
        }],
        xAxes: [{
          type: 'linear', // MANDATORY TO SHOW YOUR POINTS! (THIS IS THE IMPORTANT BIT)
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Independent Variable',
            fontSize: 16
          },
          ticks: {
            beginAtZero: true,
            fontSize: 16
          },
          afterSetDimensions: function(axes) {
              xMax = axes.max;
          }
        }]
      }
    }
  });
}

window.addEventListener('DOMContentLoaded', (event) => {
  pickExponent();
  makeData();
  chartData(data);
  myChartJS.options.scales.yAxes[0].ticks.max = preLineMax;
  document.getElementById("myRange").max = (1 + Math.random()) * preLineMax;
});

function toggleState() {
  transformed = !transformed;
}

let inputs = document.querySelectorAll("input[type=radio]"),
  x = inputs.length;
while (x--) {
  inputs[x].addEventListener("change", function() {
    if (this.value == 1) {
      myChartJS.data.datasets[0].data = rawData;
      myChartJS.options.scales.xAxes[0].scaleLabel.labelString = "[Independent Variable]";
      if (myChartJS.data.datasets[1]) {

        for (i = 0; i< myChartJS.data.datasets[1].data.length; i++){

          myChartJS.data.datasets[1].data[i].x = myChartJS.data.datasets[1].data[i].x**(1/prevExp);
        }
        prevExp = 1;
      }
    } else if (this.value == 2) {
      myChartJS.data.datasets[0].data = sqData;
      myChartJS.options.scales.xAxes[0].scaleLabel.labelString = "[Independent Variable]\u00B2";
      if (myChartJS.data.datasets[1]) {
        for (i = 0; i< myChartJS.data.datasets[1].data.length; i++){
          myChartJS.data.datasets[1].data[i].x = myChartJS.data.datasets[1].data[i].x**(2/prevExp);
        }
        prevExp = 2;
      }
    } else if (this.value == -1) {
      myChartJS.data.datasets[0].data = invData;
      myChartJS.options.scales.xAxes[0].scaleLabel.labelString = "[Independent Variable]\u207B\u00B9";
      if (myChartJS.data.datasets[1]) {
        for (i = 0; i< myChartJS.data.datasets[1].data.length; i++){
          myChartJS.data.datasets[1].data[i].x = myChartJS.data.datasets[1].data[i].x**(-1/prevExp);
        }
          prevExp = -1;
      }
    } else if (this.value == -2) {
      myChartJS.data.datasets[0].data = invSqData;
      myChartJS.options.scales.xAxes[0].scaleLabel.labelString = "[Independent Variable]\u207B\u00B2";
      if (myChartJS.data.datasets[1]) {
        for (i = 0; i< myChartJS.data.datasets[1].data.length; i++){
          myChartJS.data.datasets[1].data[i].x = myChartJS.data.datasets[1].data[i].x**(-2/prevExp);
        }
          prevExp = -2;
      }
    }




    myChartJS.update();
  }, 0);
}

function sliderFunction() {
  let val = document.getElementById("myRange").value;
  myChartJS.options.annotation.annotations[0].endValue = val;
  myChartJS.update();
  document.getElementById('tag-id').innerHTML = 'y = ' + Math.round(100 * val / xMax) / 100 + 'x ';
}


function generateIdeal() {
  prevExp = exponent;
  let coeff = document.getElementById("coefficient").value;
  let exp = parseInt(document.getElementById("exp").value);
  let idealSet = [];
  console.log(exp)
  if (!(exp == -2 || exp == -1 || exp == 1 || exp == 2  )){
    document.getElementById('error').innerHTML = "To fit the data, try picking the exponent from the set [-2, -1, 1, 2]."
    return;
  }
  for (let i = 1; i < 11; i++) {

    idealSet.push({
      x: (i * xMax/10),
      y: coeff *(i * xMax / 10)**(exponent/exp)
    });
  }

  myChartJS.data.datasets[1] = {
    label: 'Ideal Data Set',
    type: 'scatter',
    data: idealSet,
    showLine: true,
    fill: false,
    borderColor: 'rgba(0, 99, 232, 1)',
    backgroundColor: 'rgba(0, 99, 232, 1)',
    borderWidth: 1,
    pointRadius: 0
  }


  myChartJS.options.scales.yAxes[0].ticks.max = preLineMax;
  //myChartJS.options.scales.xAxes[0].ticks.max = xMax;

  myChartJS.update();

}

function reset() {

  myChart = null;
  rawData = [];
  sqData = [];
  invData = [];
  invSqData = [];
  k = (Math.random() * 5);
  pickExponent();
  makeData();
  myChartJS.options.scales.yAxes[0].ticks.max = undefined;
  myChartJS.data.datasets[0].data = rawData;
  if(myChartJS.data.datasets[1].data){myChartJS.data.datasets[1].data= null;}
  myChartJS.options.animation.duration = 0;
  myChartJS.options.annotation.annotations[0].endValue = 0;
  myChartJS.update();
  let radiobtn = document.getElementById("rawDat");
  radiobtn.checked = true;
  myChartJS.options.animation.duration = 1000;
  myChartJS.options.scales.yAxes[0].ticks.max = preLineMax;
  document.getElementById("myRange").max = (1 + Math.random()) * preLineMax;
  document.getElementById("myRange").value = 0;
}
