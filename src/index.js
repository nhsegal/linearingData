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
const currentDataObject = makeData(N, noise, coefficient, currentExperiment.exponent);
const myChart = makeChart(currentExperiment, currentDataObject, 1);

makeHeader();

makeLeftside(myChart);

const axisChoices = document.querySelectorAll('input[type=radio]');
axisChoices.forEach((choice) => {
  choice.addEventListener('change', (e) => {
    const choiceVal = e.target.value;
    console.log(choiceVal);
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

// myChartJS.options.scales.yAxes[0].ticks.max = preLineMax;
// document.getElementById('slope-slider').max = (1 + Math.random()) * preLineMax;
