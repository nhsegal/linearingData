import './main.css';
import makeChart from './makeChart';
import {
  makeHeader, makeLeftside, makeRightside, makeCenter,
} from './buildHTML';
import pickExperiment from './pickExperiment';
import makeData from './makeData';
import { sliderFunction, radioButtonCallback, plotFunction } from './callbackFunctions';
import { produceXLabel, produceXUnits } from './helperFunctions';

const N = 12; // Number of data points
const currentExperiment = pickExperiment(); // Object with exponent, labels, etc
const coefficient = currentExperiment.coefficientRange * (0.85 + Math.random() * 0.3);
const noise = 0.05;

// (N, noise, coefficient, exponent, xMax, xPrecision, yPrecision)
const currentDataObject = makeData(
  N,
  noise,
  coefficient,
  currentExperiment.exponent,
  currentExperiment.indepVarRange,
  currentExperiment.indepVarPrecision,
  currentExperiment.depVarPrecision,
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

// Add eventlistener to slider
const slopeSlider = document.querySelector('#slope_slider');
slopeSlider.addEventListener('input', () => { sliderFunction(currentExperiment); });

makeRightside();
makeCenter();

const plotFxnButton = document.getElementById('submit');
plotFxnButton.addEventListener('click', () => { plotFunction(currentExperiment); });

document.querySelector('label[for="raw_data_option"]').innerHTML = ` ${produceXLabel(currentExperiment.indepVar, 1)} <br>`;
document.querySelector('label[for="sqd_data_option"]').innerHTML = ` ${produceXLabel(currentExperiment.indepVar, 2)} <br>`;
document.querySelector('label[for="inv_data_option"]').innerHTML = ` ${produceXLabel(currentExperiment.indepVar, -1)} <br>`;
document.querySelector('label[for="invsqd_data_option"]').innerHTML = ` ${produceXLabel(currentExperiment.indepVar, -2)} <br>`;
document.querySelector('#dep_var').textContent = `${currentExperiment.depVarSymbol} = (`;
document.querySelector('#indep_var').textContent = `) ${currentExperiment.indepVarSymbol}`;

document.querySelector('#dep_var').textContent = `${currentExperiment.depVarSymbol} = (`;
document.querySelector('#indep_var').textContent = `) ${currentExperiment.indepVarSymbol}`;
document.querySelector('#fup2').textContent = produceXUnits(currentExperiment.depVarUnits, 1);
document.querySelector('#fdn2').textContent = produceXUnits(currentExperiment.indepVarUnits, 1);
