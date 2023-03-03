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

const sliderFunction = () => {
  const val = document.getElementById('slope_slider').value;
  console.log(val);

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
  if (fitExponent != 1) {
    document.getElementById(
      'trendline-equation-x',
    ).innerHTML = `) ${xSymbol}<sup>${fitExponent}</sup>`;
    document.getElementById('fdn').innerHTML = `${xUnits}${fitExponent.sup()}`;
  } else {
    document.getElementById('trendline-equation-x').innerHTML = `) ${xSymbol}`;
    document.getElementById('fdn').innerHTML = `${xUnits}`;
  }
  */
};

const slopeSlider = document.querySelector('#slope_slider');
slopeSlider.addEventListener('change', sliderFunction);
