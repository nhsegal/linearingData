import './main.css';
import makeChart from './makeChart';
import { makeHeader, makeLeftside, makeRightside } from './buildHTML';
import pickExperiment from './pickExperiment';
import makeData from './makeData';
import { sliderFunction, radioButtonCallback, plotFunction } from './callbackFunctions';
import { produceXLabel } from './helperFunctions';

const N = 12; // Number of data points
const currentExperiment = pickExperiment(); // Object with exponent, labels, etc
const coefficient = Math.round(100 * currentExperiment.coefficientRange
  - (50 * currentExperiment.coefficientRange) * Math.random()) / 100;
const noise = 0.06;
const currentDataObject = makeData(
  N,
  noise,
  coefficient,
  currentExperiment.exponent,
  currentExperiment.indepVarRange,
);
let prevExponent = 1;

const myChart = makeChart(currentExperiment, currentDataObject, 1);
makeHeader();
makeLeftside(myChart);

const axisChoices = document.querySelectorAll('input[type=radio]');
axisChoices.forEach((choice) => {
  choice.addEventListener('change', (e) => {
    radioButtonCallback(e, currentDataObject, currentExperiment, prevExponent);
    prevExponent = document.querySelector("input[type='radio']:checked").value;
  });
});

// add eventlistener to slider

const slopeSlider = document.querySelector('#slope_slider');
slopeSlider.addEventListener('input', () => { sliderFunction(currentExperiment); });

makeRightside();
const plotFxnButton = document.getElementById('submit');
plotFxnButton.addEventListener('click', plotFunction);

document.querySelector('label[for="raw_data_option"]').innerHTML = ` ${produceXLabel(currentExperiment.indepVar, 1)} <br>`;
document.querySelector('label[for="sqd_data_option"]').innerHTML = ` ${produceXLabel(currentExperiment.indepVar, 2)} <br>`;
document.querySelector('label[for="inv_data_option"]').innerHTML = ` ${produceXLabel(currentExperiment.indepVar, -1)} <br>`;
document.querySelector('label[for="invsqd_data_option"]').innerHTML = ` ${produceXLabel(currentExperiment.indepVar, -2)} <br>`;
document.querySelector('#dep_var').textContent = `${currentExperiment.depVarSymbol} = (`;
document.querySelector('#indep_var').textContent = `) ${currentExperiment.indepVarSymbol}`;

/*
To do:
display slope on graph and
display slope units for submitted equation
update slope on slope slider after radio buton
*/
