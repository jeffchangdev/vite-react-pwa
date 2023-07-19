import {
  Chart as ChartJS,
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(Filler, CategoryScale, LinearScale, PointElement, LineElement);

export default function RainChart() {
  const options: ChartOptions<'line'> = {
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          callback: (_value, index) =>
            index % 3 === 0 ? `${index + 1} min` : null,
          padding: 0,
        },
        border: { display: false },
      },
      y: {
        grid: { display: true, z: 1 },
        ticks: {
          callback(value) {
            if (value === 30) return 'H';
            if (value === 20) return 'M';
            if (value === 10) return 'L';
            return null;
          },
          padding: 0,
        },
        border: { display: false },
        min: 0,
        max: 30,
      },
    },
    elements: {
      point: { pointStyle: false },
    },
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
    animations: {
      tension: {
        duration: 2500,
        easing: 'linear',
        from: 0.2,
        to: 0.5,
        loop: true,
      },
    },
    maintainAspectRatio: false,
  };

  const data: ChartData<'line'> = {
    labels: Array.from({ length: 10 }, (_, index) => index + 1),
    datasets: [
      {
        fill: true,
        data: [10, 15, 30, 2, 5, 1, 7, 42, 30, 40],
        borderColor: '#0059b3',
        backgroundColor: '#0066cc',
        tension: 0.3,
      },
    ],
  };

  return <Line options={options} data={data} />;
}
