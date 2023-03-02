import './main.css';
import makeChart from './makeChart';
import { makeHeader, makeLeftside } from './buildHTML';
import pickExperiment from './pickExperiment';

import makeData from './makeData';

const N = 12; // Number of data points
const currentExperiment = pickExperiment(); // Object with exp, labels, etc
const coefficient = Math.round(100 * currentExperiment.coefficientRange
- (50 * currentExperiment.coefficientRange) * Math.random()) / 100;

const noise = 0.7;
// const fitExponent = 1;

let myChartJS;
// const data = rawData;
// const trendlineSlope = 0;
const preLineMax = 0;
// let xMax;
// let prevExp;

makeHeader();
makeLeftside();
const currentDataobject = makeData(N, noise, coefficient, currentExperiment.exponent);
console.log(currentDataobject);
makeChart(currentExperiment, currentDataobject, 1);
myChartJS.options.scales.yAxes[0].ticks.max = preLineMax;
document.getElementById('slope-slider').max = (1 + Math.random()) * preLineMax;

// window.addEventListener('DOMContentLoaded', () => {

// });
