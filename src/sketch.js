import Chart from 'chart.js/auto';

const numberOfDatapoints = 12;
let rawData = [];
let coefficient = 10 + Math.random() * 5;
const noiseAmp = 0.7;
let exponent;
let fitExponent = 1;

let sqData = [];
let invData = [];
let invSqData = [];

let myChartJS;
let data = rawData;
const trendlineSlope = 0;
let preLineMax = 0;
let xMax;
let prevExp;

let xName;
let xSymbol;
let xUnits;
let yName;
let ySymbol;
let yUnits;

function alterHTML(exp) {
  const rawDataOption = document.querySelector('label[for="rawData"]');
  const sqDataOption = document.querySelector('label[for="sqData"]');
  const invDataOption = document.querySelector('label[for="invData"]');
  const invSqDataOption = document.querySelector('label[for="invSqData"]');
  const indepVar = document.querySelector('#indep-var');
  const depVar = document.querySelector('#dep-var');
  const fup2 = document.querySelector('#fup-2');
  const fdn2 = document.querySelector('#fdn-2');

  switch (exp) {
    case 2:
      xName = 'Side Length';
      xSymbol = '\u{1D459}';
      yName = 'Mass';
      ySymbol = '\u{1D45a}';
      xUnits = 'cm';
      yUnits = 'g';
      break;
    case -1:
      xName = 'Length';
      xSymbol = '\u{1D459}';
      yName = 'Height';
      ySymbol = '\u{210E}';
      xUnits = 'cm';
      yUnits = 'cm';
      break;
    case -2:
      xName = 'Distance';
      xSymbol = '\u{1D451}';
      yName = 'Intensity';
      ySymbol = '\u{1D43C}';
      xUnits = 'm';
      yUnits = 'W/m\u00B2';

      break;
    default:
      console.log('error?');
  }
  rawDataOption.textContent = `${xName}`;
  sqDataOption.textContent = `${xName}\u{00B2}`;
  invDataOption.textContent = `${xName}\u{207B}\u{00B9}`;
  invSqDataOption.textContent = `${xName}\u{207B}\u{00B2}`;
  indepVar.textContent = `${xSymbol}`;
  depVar.textContent = `${ySymbol}`;
  fup2.textContent = `${yUnits}`;
  fdn2.textContent = `${xUnits}`;
}

function makeData() {
  for (let i = 0; i < numberOfDatapoints; i += 1) {
    let xx = (10 * (1 + i)) / numberOfDatapoints + noiseAmp
      * (Math.round(Math.random() * 10) / 10 - 0.5);
    while (xx <= 0) {
      xx = (10 * (1 + i)) / numberOfDatapoints + noiseAmp
      * (Math.round(Math.random() * 10) / 10 - 0.5);
    }
    const yy = Math.round(100
      * (coefficient * (xx + (1 + 0.5 * exponent)
      * (4 / (i + 4)) * noiseAmp * (Math.round(Math.random() * 10)
      / 10 - 0.5)) ** exponent)) / 100;

    rawData.push({
      x: Math.round(100 * xx) / 100,
      y: Math.round(yy * 100) / 100,
    });
    sqData.push({
      x: Math.round(100 * xx ** 2) / 100,
      y: Math.round(yy * 100) / 100,
    });
    invData.push({
      x: Math.round(1000 * xx ** -1) / 1000,
      y: Math.round(yy * 100) / 100,
    });
    invSqData.push({
      x: Math.round(1000 * xx ** -2) / 1000,
      y: Math.round(yy * 100) / 100,
    });
  }
  data = rawData;
}

function chartData(dataToPlot) {
  const ctx = document.getElementById('myChart').getContext('2d');
  myChartJS = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [
        {
          label: 'Sample Data Set',
          type: 'scatter',
          data: dataToPlot,
          showLine: false,
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 1)',
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
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            value: 0,
            endValue: trendlineSlope,
            borderColor: 'rgb(75, 192, 192)',
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
            afterSetDimensions(axes) {
              preLineMax = axes.max;
            },
          },
        ],
        xAxes: [
          {
            type: 'linear', // MANDATORY TO SHOW YOUR POINTS! (THIS IS THE IMPORTANT BIT)
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
            afterSetDimensions(axes) {
              xMax = axes.max;
            },
          },
        ],
      },
    },
  });
}

window.addEventListener('DOMContentLoaded', () => {
  pickExponent();
  alterHTML(exponent);
  makeData();
  chartData(data);
  myChartJS.options.scales.yAxes[0].ticks.max = preLineMax;
  document.getElementById('slope-slider').max = (1 + Math.random()) * preLineMax;
});

const inputs = document.querySelectorAll('input[type=radio]');
let x = inputs.length;
while (x--) {
  inputs[x].addEventListener(
    'change',
    function () {
      fitExponent = this.value;
      if (this.value === 1) {
        myChartJS.data.datasets[0].data = rawData;
        myChartJS.options.scales.xAxes[0].scaleLabel.labelString = `${xName} ${xSymbol} (${xUnits})`;
        if (myChartJS.data.datasets[1]) {
          for (i = 0; i < myChartJS.data.datasets[1].data.length; i++) {
            myChartJS.data.datasets[1].data[i].x = myChartJS.data.datasets[1].data[i].x ** (1 / prevExp);
          }
          prevExp = 1;
        }
      } else if (this.value === 2) {
        myChartJS.data.datasets[0].data = sqData;
        myChartJS.options.scales.xAxes[0].scaleLabel.labelString = `${xName}\u{00B2} ${xSymbol}\u{00B2} (${xUnits}\u{00B2})`;
        if (myChartJS.data.datasets[1]) {
          for (i = 0; i < myChartJS.data.datasets[1].data.length; i++) {
            myChartJS.data.datasets[1].data[i].x = myChartJS.data.datasets[1].data[i].x ** (2 / prevExp);
          }
          prevExp = 2;
        }
      } else if (this.value === -1) {
        myChartJS.data.datasets[0].data = invData;
        myChartJS.options.scales.xAxes[0].scaleLabel.labelString = `${xName}\u{207B}\u{00B9} ${xSymbol}\u{207B}\u{00B9} (${xUnits}\u{207B}\u{00B9})`;
        if (myChartJS.data.datasets[1]) {
          for (i = 0; i < myChartJS.data.datasets[1].data.length; i += 1) {
            myChartJS.data.datasets[1].data[i].x = myChartJS.data.datasets[1].data[i].x ** (-1 / prevExp);
          }
          prevExp = -1;
        }
      } else if (this.value === -2) {
        myChartJS.data.datasets[0].data = invSqData;
        myChartJS.options.scales.xAxes[0].scaleLabel.labelString = `${xName}\u{207B}\u{00B2} ${xSymbol}\u{207B}\u{00B2} (${xUnits}\u{207B}\u{00B2})`;
        if (myChartJS.data.datasets[1]) {
          for (i = 0; i < myChartJS.data.datasets[1].data.length; i++) {
            myChartJS.data.datasets[1].data[i].x = myChartJS.data.datasets[1].data[i].x ** (-2 / prevExp);
          }
          prevExp = -2;
        }
      }

      if (fitExponent != 1) {
        document.getElementById('fdn-2').innerHTML = `${xUnits}${fitExponent.sup()}`;
      } else {
        document.getElementById('fdn').innerHTML = `${xUnits}`;
      }
      document.getElementById('fup-2').innerHTML = `${yUnits}`;

      sliderFunction();
      myChartJS.update();
    },
    0,
  );
}

function sliderFunction() {
  const val = document.getElementById('slope-slider').value;
  myChartJS.options.annotation.annotations[0].endValue = val;
  myChartJS.update();
  document.getElementById('trendline-equation-slope-math').textContent = Number.parseFloat(val / xMax).toFixed(2);
  document.getElementById('trendline-equation-x-math').textContent = 'x';
  document.getElementById('trendline-equation-y').textContent = `${ySymbol} = (`;
  document.getElementById('trendline-equation-slope').textContent = Number.parseFloat(val / xMax).toFixed(2);
  document.getElementById('trendline-equation-y-math').textContent = 'y = ';
  document.getElementById('fup').textContent = yUnits;
  if (fitExponent != 1) {
    document.getElementById(
      'trendline-equation-x',
    ).innerHTML = `) ${xSymbol}<sup>${fitExponent}</sup>`;
    document.getElementById('fdn').innerHTML = `${xUnits}${fitExponent.sup()}`;
  } else {
    document.getElementById('trendline-equation-x').innerHTML = `) ${xSymbol}`;
    document.getElementById('fdn').innerHTML = `${xUnits}`;
  }
}

function generateIdeal() {
  prevExp = exponent;
  const coeff = document.getElementById('coefficient').value;
  const exp = parseInt(document.getElementById('exp').value);
  const idealSet = [];

  if (!(exp === -2 || exp === -1 || exp === 1 || exp === 2)) {
    document.getElementById('error').innerHTML = 'To fit the data, try picking the exponent from the set [-2, -1, 1, 2].';
    return;
  }
  if (fitExponent === -2) {
    for (let i = 1; i < 10; i += 1) {
      idealSet.push({
        x: xMax * 0.002 * i,
        y: coeff * (xMax * 0.002 * i) ** (exp / fitExponent),
      });
    }
  }
  for (let i = 1; i < 30; i += 1) {
    idealSet.push({
      x: (i * xMax) / 29,
      y: coeff * ((i * xMax) / 29) ** (exp / fitExponent),
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
    pointRadius: 0,
  };

  myChartJS.options.scales.yAxes[0].ticks.max = preLineMax;
  myChartJS.update();

  const fup3 = document.querySelector('#fup3');
  const fdn3 = document.querySelector('#fdn3');
  const yvar = document.querySelector('#trendline-equation-y-3');
  const xvar = document.querySelector('#trendline-equation-x-3');
  const slope3 = document.querySelector('#trendline-equation-slope-3');
  yvar.textContent = `${ySymbol} = (`;
  slope3.textContent = `${coeff}`;
  if (exp !== 1) {
    xvar.innerHTML = `) ${xSymbol}<sup style= 'font-size: 0.75rem;'>${exp}</sup>`;
    fdn3.innerHTML = `${xUnits}<sup style= 'font-size: 0.5rem;'>${exp}</sup>`;
  } else {
    xvar.innerHTML = `) ${xSymbol}`;
    fdn3.innerHTML = `${xUnits}`;
  }
  fup3.textContent = `${yUnits}`;
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
  alterHTML(exponent);
  makeData();
  myChartJS.options.scales.yAxes[0].ticks.max = undefined;
  myChartJS.data.datasets[0].data = rawData;
  if (myChartJS.data.datasets[1]) {
    myChartJS.data.datasets[1] = {};
  }

  myChartJS.options.animation.duration = 0;
  myChartJS.options.annotation.annotations[0].endValue = 0;
  myChartJS.update();
  const radiobtn = document.getElementById('rawDat');
  radiobtn.checked = true;
  myChartJS.options.animation.duration = 1000;
  myChartJS.options.scales.yAxes[0].ticks.max = preLineMax;
  document.getElementById('slope-slider').max = (1 + Math.random()) * preLineMax;
  document.getElementById('slope-slider').value = 0;
  myChartJS.update();
  chartData(data);
  myChartJS.options.scales.yAxes[0].ticks.max = preLineMax;
  document.getElementById('slope-slider').max = (1 + Math.random()) * preLineMax;
  const fup3 = document.querySelector('#fup3');
  const fdn3 = document.querySelector('#fdn3');
  const yvar = document.querySelector('#trendline-equation-y-3');
  const xvar = document.querySelector('#trendline-equation-x-3');
  const slope3 = document.querySelector('#trendline-equation-slope-3');
  yvar.textContent = '';
  xvar.innerHTML = '';
  fup3.textContent = '';
  fdn3.textContent = '';
  slope3.textContent = '';
}
