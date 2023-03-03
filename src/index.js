import './main.css';
import makeChart from './makeChart';
import { makeHeader, makeLeftside } from './buildHTML';
import pickExperiment from './pickExperiment';
import makeData from './makeData';

const N = 12; // Number of data points
const currentExperiment = pickExperiment(); // Object with exponent, labels, etc
const coefficient = Math.round(100 * currentExperiment.coefficientRange
  - (50 * currentExperiment.coefficientRange) * Math.random()) / 100;
const noise = 0.7;
const currentDataObject = makeData(
  N,
  noise,
  coefficient,
  currentExperiment.exponent,
  currentExperiment.indepVarRange,
);

const { chart: myChart, xAxesMax, yAxesMax } = makeChart(currentExperiment, currentDataObject, 1);
makeHeader();
makeLeftside(myChart);

// add eventlisteners and text to radio button
const axisChoices = document.querySelectorAll('input[type=radio]');
axisChoices.forEach((choice) => {
  choice.addEventListener('change', (e) => {
    const choiceVal = e.target.value;
    if (choiceVal === '1') {
      myChart.data.datasets[0].data = currentDataObject.rawData;
    } else if (choiceVal === '2') {
      myChart.data.datasets[0].data = currentDataObject.sqData;
    } else if (choiceVal === '-1') {
      myChart.data.datasets[0].data = currentDataObject.invData;
    } else if (choiceVal === '-2') {
      myChart.data.datasets[0].data = currentDataObject.invSqData;
    }
    myChart.update();
  });
});

document.querySelector('label[for="raw_data_option"]').innerHTML = ` ${currentExperiment.indepVar} <br>`;
document.querySelector('label[for="sqd_data_option"]').innerHTML = ` ${currentExperiment.indepVar}\u{00B2} <br>`;
document.querySelector('label[for="inv_data_option"]').innerHTML = ` ${currentExperiment.indepVar}\u{207B}\u{00B9} <br>`;
document.querySelector('label[for="invsqd_data_option"]').innerHTML = ` ${currentExperiment.indepVar}\u{207B}\u{00B2} <br>`;

// add eventlistener to slider
const sliderFunction = () => {
  const val = document.getElementById('slope_slider').value;
  // Get the maximum x and y values of the axes, save them and set
  // myChart.options.animation.duration = 50;
  myChart.options.plugins.annotation.animations = false;
  myChart.options.plugins.annotation.annotations.line1.endValue = val;
  console.log(val / xAxesMax);
  myChart.options.scales.y.max = yAxesMax;

  myChart.update();
  // document.getElementById('trendline-equation-slope-math').textContent
  //= Number.parseFloat(val / xMax).toFixed(2);
  // document.getElementById('trendline-equation-x-math').textContent = 'x';
  // document.getElementById('trendline-equation-y').textContent = `${ySymbol} = (`;
  // document.getElementById('trendline-equation-slope').textContent
  //= Number.parseFloat(val / xMax).toFixed(2);
  // document.getElementById('trendline-equation-y-math').textContent = 'y = ';
  // document.getElementById('fup').textContent = yUnits;
  /*

  */
};

const slopeSlider = document.querySelector('#slope_slider');
slopeSlider.addEventListener('input', sliderFunction);
