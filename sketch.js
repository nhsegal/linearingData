const numberOfDatapoints = 12;
let rawData = [];
let xlabels = [];
let xRange = [];
let yRange = [];
let coefficient = 1 + Math.random() * 3;
let noiseAmp = 0.7;
let exponent;
let fitExponent = 1;

let sqData = [];
let invData = [];
let invSqData = [];

let myChartJS;
let data = rawData;
let trendlineSlope = 0;
let preLineMax = 0;
let xMax;
let prevExp;

let xName;
let xSymbol;
let xUnits;
let yName;
let ySymbol;
let yUnits;

function pickExponent() {
  const num = Math.random();
  if (num > 0.96) {
    exponent = 2;
    return;
  }
  if (num > 0.93) {
    exponent = -1;
    return;
  }
  exponent = -2;
  return;
}

function alterHTML(exp) {
  const rawDat = document.querySelector('label[for="rawDat"]');
  const sqDat = document.querySelector('label[for="sqDat"]');
  const invDat = document.querySelector('label[for="invDat"]');
  const invSqDat = document.querySelector('label[for="invSqDat"]');
  const indepVar = document.querySelector('#indep-var');
  const depVar = document.querySelector('#dep-var');

  switch (exp) {
    case 2:
      xName = "Time";
      xSymbol = "\u{1D461}";
      yName = "Distance";
      ySymbol = "\u{1D451}";
      xUnits = "s";
      yUnits = "m";
      rawDat.textContent = `${xName}`;
      sqDat.textContent = `${xName}\u{00B2}`;
      invDat.textContent = `${xName}\u{207B}\u{00B9}`;
      invSqDat.textContent = `${xName}\u{207B}\u{00B2}`;
      indepVar.textContent = `${xSymbol}`
      depVar.textContent = `${ySymbol}`
      break;
    case -1:
      xName = "Mass";
      xSymbol = "\u{1D45A}";
      yName = "Acceleration";
      ySymbol = "\u{1D44E}";
      xUnits = "kg";
      yUnits = `m/s\u00B2`;
      rawDat.textContent = `${xName}`;
      sqDat.textContent = `${xName}\u{00B2}`;
      invDat.textContent = `${xName}\u{207B}\u{00B9}`;
      invSqDat.textContent = `${xName}\u{207B}\u{00B2}`;
      break;
    case -2:
      xName = "Distance";
      xSymbol = "\u{1D451}";
      yName = "Intensity";
      ySymbol = "\u{1D43C}";
      xUnits = "m";
      yUnits = `W/m\u00B2`;
      rawDat.textContent = `${xName}`;
      sqDat.textContent = `${xName}\u{00B2}`;
      invDat.textContent = `${xName}\u{207B}\u{00B9}`;
      invSqDat.textContent = `${xName}\u{207B}\u{00B2}`;
      break;
    default:
      console.log("error?");
  }
}

function makeData() {
  for (let i = 0; i < numberOfDatapoints; i++) { 
    let xx = 10*(1+i)/numberOfDatapoints + noiseAmp*(Math.round(Math.random()*10)/10 - 0.5);
    while (xx <= 0){
      xx = 10*(1+i)/numberOfDatapoints + noiseAmp*(Math.round(Math.random()*10)/10 - 0.5);
    }
    let yy = Math.round(100*(coefficient * (xx + (1+0.5*exponent)*(4/(i+4))*noiseAmp*(Math.round(Math.random()*10)/10 - 0.5))**exponent))/100;
   // while (yy <= 0){
   //   yy = Math.round(100*(coefficient * (xx + (1+0.5*exponent)*(5/i)*noiseAmp*(Math.round(Math.random()*10)/10 - 0.5))**exponent))/100;
   // }
    
  rawData.push({
    x: Math.round(100 * xx) / 100,
    y: Math.round(yy*100)/100,
  });
  sqData.push({
    x: Math.round(100 * xx ** 2) / 100,
    y: Math.round(yy*100)/100,
  });
  invData.push({
    x: Math.round(1000 * xx ** -1) / 1000,
    y: Math.round(yy*100)/100,
  });
  invSqData.push({
    x: Math.round(1000 * xx ** -2) / 1000,
    y: Math.round(yy*100)/100,
  });
 
  }
  data = rawData;
 
}

function chartData(data) {
  const ctx = document.getElementById("myChart").getContext("2d");
  let dataToPlot = data;
  myChartJS = new Chart(ctx, {
    type: "line",
    data: {
      datasets: [
        {
          label: "Sample Data Set",
          type: "scatter",
          data: dataToPlot,
          showLine: false,
          fill: false,
          borderColor: "rgba(255, 99, 132, 1)",
          backgroundColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      aspectRatio: 1,
      legend: {
        display: false,
      },
      annotation: {
        annotations: [
          {
            type: "line",
            mode: "horizontal",
            scaleID: "y-axis-0",
            value: 0,
            endValue: trendlineSlope,
            borderColor: "rgb(75, 192, 192)",
            borderWidth: 4,
          },
        ],
      },
      layout: {
        padding: {
          right: 30,
          bottom: 10,
        },
      },
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: `${yName} ${ySymbol} (${yUnits})`,
              fontSize: 16,
            },
            ticks: {
              beginAtZero: true,
              fontSize: 16,
            },
            afterSetDimensions: function (axes) {
              preLineMax = axes.max;
            },
          },
        ],
        xAxes: [
          {
            type: "linear", // MANDATORY TO SHOW YOUR POINTS! (THIS IS THE IMPORTANT BIT)
            display: true,
            scaleLabel: {
              display: true,
              labelString: `${xName} ${xSymbol} (${xUnits})`,
              fontSize: 16,
            },
            ticks: {
              beginAtZero: true,
              fontSize: 16,
            },
            afterSetDimensions: function (axes) {
              xMax = axes.max;
            },
          },
        ],
      },
    },
  });
}

window.addEventListener("DOMContentLoaded", (event) => {
  pickExponent();
  alterHTML(exponent);
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
  inputs[x].addEventListener(
    "change",
    function () {
      fitExponent = this.value;
      if (this.value == 1) {
        myChartJS.data.datasets[0].data = rawData;
        myChartJS.options.scales.xAxes[0].scaleLabel.labelString = `${xName} ${xSymbol} (${xUnits})`;
        if (myChartJS.data.datasets[1]) {
          for (i = 0; i < myChartJS.data.datasets[1].data.length; i++) {
            myChartJS.data.datasets[1].data[i].x =
              myChartJS.data.datasets[1].data[i].x ** (1 / prevExp);
          }
          prevExp = 1;
        }
      } else if (this.value == 2) {
        myChartJS.data.datasets[0].data = sqData;
        myChartJS.options.scales.xAxes[0].scaleLabel.labelString = `${xName}\u{00B2} ${xSymbol}\u{00B2} (${xUnits}\u{00B2})`;
        if (myChartJS.data.datasets[1]) {
          for (i = 0; i < myChartJS.data.datasets[1].data.length; i++) {
            myChartJS.data.datasets[1].data[i].x =
              myChartJS.data.datasets[1].data[i].x ** (2 / prevExp);
          }
          prevExp = 2;
        }
      } else if (this.value == -1) {
        myChartJS.data.datasets[0].data = invData;
        myChartJS.options.scales.xAxes[0].scaleLabel.labelString = `${xName}\u{207B}\u{00B9} ${xSymbol}\u{207B}\u{00B9} (${xUnits}\u{207B}\u{00B9})`;
        if (myChartJS.data.datasets[1]) {
          for (i = 0; i < myChartJS.data.datasets[1].data.length; i++) {
            myChartJS.data.datasets[1].data[i].x =
              myChartJS.data.datasets[1].data[i].x ** (-1 / prevExp);
          }
          prevExp = -1;
        }
      } else if (this.value == -2) {
        myChartJS.data.datasets[0].data = invSqData;
        myChartJS.options.scales.xAxes[0].scaleLabel.labelString = `${xName}\u{207B}\u{00B2} ${xSymbol}\u{207B}\u{00B2} (${xUnits}\u{207B}\u{00B2})`;
        if (myChartJS.data.datasets[1]) {
          for (i = 0; i < myChartJS.data.datasets[1].data.length; i++) {
            myChartJS.data.datasets[1].data[i].x =
              myChartJS.data.datasets[1].data[i].x ** (-2 / prevExp);
          }
          prevExp = -2;
        }
      }
      sliderFunction();
      myChartJS.update();
    },
    0
  );
}

function sliderFunction() {
  let val = document.getElementById("myRange").value;
  myChartJS.options.annotation.annotations[0].endValue = val;
  myChartJS.update();

  document.getElementById("trendline-equation-slope-math").textContent =
    Number.parseFloat(val / xMax).toFixed(2);
  document.getElementById("trendline-equation-x-math").textContent = "x";
  document.getElementById("trendline-equation-y").textContent = `${ySymbol} = (`;
  document.getElementById("trendline-equation-slope").textContent =
    Number.parseFloat(val / xMax).toFixed(2);
  document.getElementById("trendline-equation-y-math").textContent = `y = `;

  document.getElementById("fup").textContent = yUnits;


  if (fitExponent != 1) {
    document.getElementById(
      "trendline-equation-x"
    ).innerHTML = `) ${xSymbol}<sup>${fitExponent}</sup>`;
    document.getElementById("fdn").innerHTML = `${xUnits}${fitExponent.sup()}`;

  } else {
    document.getElementById("trendline-equation-x").innerHTML = `) ${xSymbol}`;
    document.getElementById("fdn").innerHTML = `${xUnits}`;

  }
}

function generateIdeal() {
  prevExp = exponent;
  let coeff = document.getElementById("coefficient").value;
  let exp = parseInt(document.getElementById("exp").value);
  let idealSet = [];
  console.log(exp);
  if (!(exp == -2 || exp == -1 || exp == 1 || exp == 2)) {
    document.getElementById("error").innerHTML =
      "To fit the data, try picking the exponent from the set [-2, -1, 1, 2].";
    return;
  }
  idealSet = [];
  for (let i = 1; i < 30; i++) {
    idealSet.push({
      x: (i * xMax) / 29,
      y: coeff * ((i * xMax) / 29) ** (exponent / exp),
    });
  }

  myChartJS.data.datasets[1] = {
    label: "Ideal Data Set",
    type: "scatter",
    data: idealSet,
    showLine: true,
    fill: false,
    borderColor: "rgba(0, 99, 232, 1)",
    backgroundColor: "rgba(0, 99, 232, 1)",
    borderWidth: 1,
    pointRadius: 0,
  };

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
  idealSet = [];
  coefficient = Math.random() * 5;
  pickExponent();
  makeData();
  myChartJS.options.scales.yAxes[0].ticks.max = undefined;
  myChartJS.data.datasets[0].data = rawData;
  if (myChartJS.data.datasets[1].data) {
    myChartJS.data.datasets[1].data = null;
  }
  myChartJS.options.animation.duration = 0;
  myChartJS.options.annotation.annotations[0].endValue = 0;
  myChartJS.update();
  let radiobtn = document.getElementById("rawDat");
  radiobtn.checked = true;
  myChartJS.options.animation.duration = 1000;
  myChartJS.options.scales.yAxes[0].ticks.max = preLineMax;
  document.getElementById("myRange").max = (1 + Math.random()) * preLineMax;
  document.getElementById("myRange").value = 0;
  myChartJS.update();
}
