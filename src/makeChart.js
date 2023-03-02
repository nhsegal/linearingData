import Chart from 'chart.js/auto';

const makeChart = (experiment, dataObject, option) => {
  /*
    \u{00B2}`;
  invDat.textContent = `${xName}\u{207B}\u{00B9}`;
  invSqDat.textContent = `${xName}\u{207B}\u{00B2}`;
    */
  const xLabel = experiment.indepVar;
  const xUnits = experiment.indepVarUnits;
  if (option === 2) {
    xLabel = `${experiment.indepVar}\u{00B2}`;
    /*
    \u{00B2}`;
  invDat.textContent = `${xName}\u{207B}\u{00B9}`;
  invSqDat.textContent = `${xName}\u{207B}\u{00B2}`;
    */
  }

  const ctx = document.getElementById('myChart').getContext('2d');
  const myChartJS = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [
        {
          label: 'Sample Data Set',
          type: 'scatter',
          data: dataObject.rawData,
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
          text: `${experiment.title} ${experiment.depVar} vs. ${experiment.indepVar}`,
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
        },
        y: {
          type: 'linear',
        },
      },
      /*
      {

        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: `${experiment.depVar} ${experiment.depVarSymbol} (${experiment.depVarUnits})`,
              fontSize: 16,
            },
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
            scaleLabel: {
              display: true,
              labelString: `${experiment.indepVar} ${experiment.indepVarSymbol} (${experiment.indepVarUnits})<sup>${option}</sup>`,
              fontSize: 16,
            },
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
