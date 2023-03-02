import './main.css';
import makeChart from './makeChart';
import { makeHeader, makeLeftside } from './buildHTML';
import pickExponent from './pickExponent';
import alterHTML from './alterHTML';
import makeData from './makeData';

const N = 12;
const dataObject = {
  rawData: [],
  sqData: [],
  invData: [],
  invSqData: [],
  xName: '',
  xSymbol: '',
  xUnits: '',
  yName: '',
  ySymbol: '',
  yUnits: '',
};

const coefficient = 10 + Math.random() * 5;
const noise = 0.7;
const exponent = pickExponent();
const fitExponent = 1;

let myChartJS;
const data = rawData;
const trendlineSlope = 0;
const preLineMax = 0;
let xMax;
let prevExp;

makeHeader();
makeLeftside();
makeChart();
alterHTML(exponent);
makeData(N, noise, coefficient, exponent, dataObject);
makeChart(dataObject.rawData);
myChartJS.options.scales.yAxes[0].ticks.max = preLineMax;
document.getElementById('slope-slider').max = (1 + Math.random()) * preLineMax;

// window.addEventListener('DOMContentLoaded', () => {

// });
