import Chart from 'chart.js/auto';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(annotationPlugin);

const makeChart = (experiment, dataObject, option) => {
  let xLabel = experiment.indepVar;
  let xUnits = experiment.indepVarUnits;
  let dataToPlot;
  // let xAxesRange;
  // let yAxesRange;

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

  const ctx = document.getElementById('myChart').getContext('2d');
  let yAxesticks = [];
  const myChartJS = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [
        {
          label: 'Data Set',
          type: 'scatter',
          data: dataToPlot,
          showLine: false,
          fill: false,
          borderColor: 'rgba(245, 99, 80, 1)',
          backgroundColor: 'rgba(235, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    },
    options: {
      aspectRatio: 1,
      plugins: {
        title: {
          display: true,
          text: `${experiment.title} ${experiment.depVar} vs. ${xLabel}`,
          font: {
            size: 20,
          },
        },
        legend: {
          display: false,
        },
        annotation: {
          annotations: {
            line1: {
              type: 'line',
              scaleID: 'y',
              value: 0,
              endValue: 1,
              borderColor: 'rgb(55, 139, 132)',
              borderWidth: 2,
            },
          },
        },
      },
      layout: {
        padding: {
          right: 30,
          bottom: 10,
        },
      },
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        x: {
          type: 'linear',
          title: {
            display: true,
            text: `${xLabel} (${xUnits})`,
            font: {
              size: 16,
            },
          },
        },
        y: {
          type: 'linear',
          title: {
            display: true,
            text: `${experiment.depVar} (${experiment.depVarUnits})`,
            font: {
              size: 16,
            },
          },
          ticks: {
            beginAtZero: true,
            callback(value, index, values) {
              yAxesticks = values;
              return value;
            },
          },
        },
      //  beforeSetDimensions() {
      //    console.log('asdfasd');
      //  },
      },
    },
  });
  console.log(yAxesticks);
  return myChartJS;
};

export default makeChart;
