/* globals Chart:false, feather:false */

(() => {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })

  // Graphs
  const ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Asia',
        'Europa',
        'Africa',
        'Oceania',
        'Americas',
        'Polar',
        'Antartida',
        'Oceano Antartico'

       
      ],
      datasets: [{
        data: [
          4604576074,
          747707351,
          1343061213,
          43119438,
          1020973033,
          24092,
          1000,
          0,
          0
        ],
        lineTension: 0,
        backgroundColor: 'purple',
        borderColor: 'salmon',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
})()
