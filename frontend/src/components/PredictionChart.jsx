import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const PredictionChart = ({ data }) => {
  const chartData = {
    labels: data.map((_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: 'Predicted Deaths',
        data: data,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1
      }
    ]
  };

  return <Line data={chartData} />;
};

export default PredictionChart;