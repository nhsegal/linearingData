import Chart from 'chart.js/auto';

const makeChart = (
  dataToPlot,
  trendlineSlope,
  yName,
  ySymbol,
  yUnits,
  xName,
  xUnits,
  xSymbol,
  title,
) => {
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
          text: 'Chart Title',
        },
      },
      legend: {
        display: false,
      },
      annotation: {
        annotations: [
          {
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            value: 0,
            endValue: trendlineSlope,
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
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: `${yName} ${ySymbol} (${yUnits})`,
              fontSize: 16,
            },
            ticks: {
              beginAtZero: true,
              fontSize: 16,
            },
            afterSetDimensions(axes) {
            //  preLineMax = axes.max;
            },
          },
        ],
        xAxes: [
          {
            type: 'linear', // MANDATORY TO SHOW YOUR POINTS! (THIS IS THE IMPORTANT BIT)
            display: true,
            scaleLabel: {
              display: true,
              labelString: `${xName} ${xSymbol} (${xUnits})`,
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
    },
  });
};

export default makeChart;
