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
import { MinutelyForecast } from '../types/types';
import { minMaxify } from '../utils/utilities';

ChartJS.register(Filler, CategoryScale, LinearScale, PointElement, LineElement);

type ChartProps = {
  rainData: MinutelyForecast[];
};

export default function RainChart({ rainData }: ChartProps) {
  const options: ChartOptions<'line'> = {
    scales: {
      x: {
        grid: { display: false },
        ticks: { display: false },
        border: { display: true },
      },
      y: {
        grid: { display: false, z: 1 },
        border: { display: true },
        ticks: { display: false },
        min: 0,
        max: 24,
      },
    },
    elements: {
      point: { pointStyle: false },
    },
    responsive: true,
    maintainAspectRatio: false,
    animations: {
      tension: {
        duration: 3000,
        easing: 'linear',
        from: 0.3,
        to: 0.3,
        loop: false,
      },
    },
  };

  const data: ChartData<'line'> = {
    labels: Array.from({ length: rainData.length }, (_, index) => index),
    datasets: [
      {
        data: minMaxify(rainData),
        fill: true,
        backgroundColor: 'rgba(197, 226, 247, 1)',
        tension: 0.3,
        showLine: false,
        spanGaps: true,
      },
    ],
  };

  return <Line options={options} data={data} />;
}
