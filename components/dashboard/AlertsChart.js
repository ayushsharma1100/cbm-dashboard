import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Critical Alerts', 'Major Alerts', 'Low Alerts'],
  datasets: [
    {
      data: [12, 19, 7],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function AlertsChart() {
  return <div className='w-3/4'>
    <Doughnut data={data} options={{
      responsive: true,
      maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              font: {
                size: 10
              }
            }
          }
        }
    }} />
  </div>;
}
