import Chart from 'chart.js/auto';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(annotationPlugin);

const sliderFunction = (experiment) => {
  const myChart = Chart.getChart(document.getElementById('myChart'));
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
  document.getElementById('trendline-equation-slope-math').textContent = slope;
  document.getElementById('trendline-equation-x-math').textContent = 'x';
  document.getElementById('trendline-equation-y-physics').textContent = `${experiment.depVarSymbol} = `;
  document.getElementById('trendline-equation-slope-physics').textContent = `( ${slope}`;
  document.getElementById('trendline-equation-y-math').textContent = 'y = ';
  document.getElementById('fup').textContent = `${experiment.yUnits}`;
};

const radioButtonCallback = (e, dataObject, experiment) => {
  const myChart = Chart.getChart(document.getElementById('myChart'));
  const xLabel = experiment.indepVar;
  const xUnits = experiment.indepVarUnits;
  const choiceVal = e.target.value;
  if (choiceVal === '1') {
    myChart.data.datasets[0].data = dataObject.rawData;
    myChart.options.scales.x.title.text = `${xLabel} (${xUnits})`;
    sliderFunction(experiment);
  } else if (choiceVal === '2') {
    myChart.data.datasets[0].data = dataObject.sqData;
    // const xUnitsFrac = xUnits.split('/');
    // if (xUnitsFrac.length > 1) {
    //  xUnits = `${xUnits[0]}\u{00B2}/${xUnits[2]}\u{00B2}`;
    // } else {
    // xUnits = `${currentExperiment.indepVarUnits}\u{00B2}`;
    // }
    myChart.options.scales.x.title.text = `${xLabel}\u{00B2} (${xUnits}\u{00B2})`;
    sliderFunction(experiment);
  } else if (choiceVal === '-1') {
    myChart.data.datasets[0].data = dataObject.invData;
    sliderFunction(experiment);
  } else if (choiceVal === '-2') {
    myChart.data.datasets[0].data = dataObject.invSqData;
    sliderFunction(experiment);
  }
  myChart.update();
};

export { sliderFunction, radioButtonCallback };
