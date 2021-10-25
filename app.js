// ? Task:


// Solution 1


const ctx = $("#chart");

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 5, 6, 3, 8],
      lineTension: 0,
      pointBackgroundColor: "#FFF",
      pointBorderColor: "#5bb9ed",
      pointBorderWidth: 1.5,
      pointRadius: 5,
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255,99,132,1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 2,
    },
  ],
};

const myChart = new Chart(ctx, {
  type: "line",
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      enabled: true,
      mode: "single",
      callbacks: {
        label: function (tooltipItems, data) {
          return `${tooltipItems.yLabel} connected`;
        },
      },
    },
    scales: {
      xAxes: [
        {
          // display: false,
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            beginAtZero: true,
            stepSize: 1,
          },
          callback(value) {
            return value;
          },
          gridLines: {
            display: false,
          },
        },
      ],
    },
  },
});
// ! Explanation: 
