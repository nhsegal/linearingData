import Chart from 'chart.js/auto';
import annotationPlugin from 'chartjs-plugin-annotation';
import { produceXLabel, produceXUnits } from './helperFunctions';

Chart.register(annotationPlugin);

const sliderFunction = (experiment) => {
  const myChart = Chart.getChart(document.getElementById('myChart'));
  const choiceVal = document.querySelector("input[type='radio']:checked").value;
  const val = document.getElementById('slope_slider').value;
  const yTop = myChart.scales.y.end;
  myChart.options.plugins.annotation.animations = false;
  myChart.options.plugins.annotation.annotations.line1.endValue = val;
  let slope = val / myChart.scales.x.end;
  if (myChart.scales.y.end / myChart.scales.x.end > 100) {
    slope = 10 * (slope / 10).toFixed(1);
  } else if (myChart.scales.y.end / myChart.scales.x.end > 10) {
    slope = (slope).toFixed(1);
  } else if (myChart.scales.y.end / myChart.scales.x.end > 1) {
    slope = (slope).toFixed(2);
  } else if (myChart.scales.y.end / myChart.scales.x.end > 0.1) {
    slope = (slope).toFixed(3);
  } else if (myChart.scales.y.end / myChart.scales.x.end > 0.01) {
    slope = (slope).toFixed(4);
  } else if (myChart.scales.y.end / myChart.scales.x.end > 0.001) {
    slope = (slope).toFixed(5);
  }
  myChart.options.scales.y.max = yTop;
  myChart.update();
  document.getElementById('trendline-equation-y-math').textContent = 'y = ';
  document.getElementById('trendline-equation-slope-math').textContent = slope;
  document.getElementById('trendline-equation-x-math').textContent = 'x';
  document.getElementById('trendline-equation-y-physics').textContent = `${experiment.depVarSymbol} = `;
  document.getElementById('trendline-equation-slope-physics').textContent = `(${slope}`;
  document.getElementById('trendline-equation-x-physics').innerHTML = `${produceXLabel(experiment.indepVarSymbol, choiceVal, true)}`;
  document.getElementById('fup').textContent = `${produceXUnits(experiment.depVarUnits, 1, true)}`;
  document.getElementById('fdn').textContent = `${produceXUnits(experiment.indepVarUnits, choiceVal, true)}`;
  document.getElementById('closing_paren').textContent = ')';
};

const radioButtonCallback = (e, dataObject, experiment) => {
  const myChart = Chart.getChart(document.getElementById('myChart'));
  const xLabel = experiment.indepVar;
  const yLabel = experiment.depVar;
  const xSymbol = experiment.indepVarSymbol;
  const xUnits = experiment.indepVarUnits;
  const choiceVal = e.target.value;
  if (choiceVal === '1') {
    myChart.data.datasets[0].data = dataObject.rawData;
  } else if (choiceVal === '2') {
    myChart.data.datasets[0].data = dataObject.sqData;
  } else if (choiceVal === '-1') {
    myChart.data.datasets[0].data = dataObject.invData;
  } else if (choiceVal === '-2') {
    myChart.data.datasets[0].data = dataObject.invSqData;
  }
  myChart.options.scales.x.title.text = `${produceXLabel(xLabel, choiceVal)} `
  + `${produceXLabel(xSymbol, choiceVal)} (${produceXUnits(xUnits, choiceVal)})`;

  myChart.options.plugins.title.text = `${produceXLabel(yLabel, 1)} vs. ${produceXLabel(xLabel, choiceVal)}`;
  sliderFunction(experiment);
  myChart.update();
};

export { sliderFunction, radioButtonCallback };
