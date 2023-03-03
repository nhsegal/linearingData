import Chart from 'chart.js/auto';

const makeChart = (experiment, dataObject, option) => {
  let xLabel = experiment.indepVar;
  let xUnits = experiment.indepVarUnits;
  let dataToPlot;

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
  const myChartJS = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [
        {
          label: 'Sample Data Set',
          type: 'scatter',
          data: dataToPlot,
          showLine: false,
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 1)',
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
      },
      annotation: {
        annotations: [
          {
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            value: 0,
            endValue: 10, // trendlineSlope,
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 4,
          },
        ],
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
        },
      },
      /*

      {

        yAxes: [
          {

            ticks: {
              beginAtZero: true,
              fontSize: 16,
            },
            afterSetDimensions(axes) {
            //  preLineMax = axes.max;
            // What do to here?
            },
          },
        ],
        xAxes: [
          {
            type: 'linear', // MANDATORY TO SHOW YOUR POINTS! (THIS IS THE IMPORTANT BIT)
            display: true,

            ticks: {
              beginAtZero: true,
              fontSize: 16,
            },
            afterSetDimensions(axes) {
            //  xMax = axes.max;
            },
          },
        ],
      },
*/
    },
  });
  return myChartJS;
};

export default makeChart;
