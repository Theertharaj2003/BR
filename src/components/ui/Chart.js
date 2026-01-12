import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const defaultOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
    },
  },
};

const Chart = {
  Line: ({ data, options = {}, ...props }) => (
    <div className="h-64">
      <Line
        data={data}
        options={{ ...defaultOptions, ...options }}
        {...props}
      />
    </div>
  ),

  Bar: ({ data, options = {}, ...props }) => (
    <div className="h-64">
      <Bar
        data={data}
        options={{ ...defaultOptions, ...options }}
        {...props}
      />
    </div>
  ),

  Doughnut: ({ data, options = {}, ...props }) => (
    <div className="h-64">
      <Doughnut
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'right',
            },
          },
          ...options,
        }}
        {...props}
      />
    </div>
  ),
};

export default Chart;