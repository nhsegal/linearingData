import './main.css';
import makeChart from './makeChart';
import { makeHeader, makeLeftside } from './buildHTML';
import pickExperiment from './pickExperiment';
import makeData from './makeData';
import { sliderFunction, radioButtonCallback } from './callbackFunctions';

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

const myChart = makeChart(currentExperiment, currentDataObject, 1);
makeHeader();
makeLeftside(myChart);

/*
if (option === 1) {
  dataToPlot = dataObject.rawData;
}
if (option === 2) {
  dataToPlot = dataObject.sqData;
  xLabel = `${experiment.indepVar}\u{00B2}`;
  const xUnitsFrac = xUnits.split('/');
  if (xUnitsFrac.length > 1) {
    xUnits = `${xUnits[0]}\u{00B2}/${xUnits[2]}\u{00B2}`;
  } else {
    xUnits = `${experiment.indepVarUnits}\u{00B2}`;
  }
} else if (option === -1) {
  dataToPlot = dataObject.invData;
  xLabel = `${experiment.indepVar}\u{207B}\u{00B9}`;
  const xUnitsFrac = xUnits.split('/');
  if (xUnitsFrac.length > 1) {
    xUnits = `${xUnits[0]}\u{207B}\u{00B9}/${xUnits[2]}\u{207B}\u{00B9}`;
  } else {
    xUnits = `${experiment.indepVarUnits}\u{207B}\u{00B9}`;
  }
} else if (option === -2) {
  dataToPlot = dataObject.invSqData;
  xLabel = `${experiment.indepVar}\u{207B}\u{00B2}`;
  const xUnitsFrac = xUnits.split('/');
  if (xUnitsFrac.length > 1) {
    xUnits = `${xUnits[0]}\u{207B}\u{00B2}/${xUnits[2]}\u{207B}\u{00B2}`;
  } else {
    xUnits = `${experiment.indepVarUnits}\u{207B}\u{00B2}`;
  }
}
*/

const axisChoices = document.querySelectorAll('input[type=radio]');
axisChoices.forEach((choice) => {
  choice.addEventListener('change', (e) => radioButtonCallback(e, currentDataObject, currentExperiment));
});

document.querySelector('label[for="raw_data_option"]').innerHTML = ` ${currentExperiment.indepVar} <br>`;
document.querySelector('label[for="sqd_data_option"]').innerHTML = ` ${currentExperiment.indepVar}\u{00B2} <br>`;
document.querySelector('label[for="inv_data_option"]').innerHTML = ` ${currentExperiment.indepVar}\u{207B}\u{00B9} <br>`;
document.querySelector('label[for="invsqd_data_option"]').innerHTML = ` ${currentExperiment.indepVar}\u{207B}\u{00B2} <br>`;

// add eventlistener to slider

const slopeSlider = document.querySelector('#slope_slider');
slopeSlider.addEventListener('input', () => { sliderFunction(currentExperiment); });
