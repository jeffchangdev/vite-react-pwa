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
  isRaining?: boolean;
};

export default function RainChart({ rainData, isRaining }: ChartProps) {
  const options: ChartOptions<'line'> = {
    scales: {
      x: {
        grid: { display: false },
        ticks: { display: false },
        border: { display: true },
      },
      y: {
        grid: {
          display: isRaining,
          z: 1,
          drawTicks: false,
        },
        border: { display: false },
        ticks: {
          display: true,
          stepSize: 8,
          callback(value) {
            if (isRaining === false) return undefined;
            if (value === 0) return 'L';
            if (value === 8) return 'M';
            if (value === 16) return 'H';
            if (value === 24) return undefined;
            return undefined;
          },
          font: { size: 15 },
          mirror: true,
          labelOffset: -24,
          z: 1,
        },
        min: 0,
        max: 24,
      },
    },
    elements: {
      point: { pointStyle: false },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  const data: ChartData<'line'> = {
    labels: Array.from({ length: rainData.length }, (_, index) => index),
    datasets: [
      {
        data: minMaxify(rainData),
        fill: true,
        backgroundColor: 'rgba(197, 226, 247, 1)',
        borderColor: '#D3D3D3',
        tension: 0.3,
        showLine: false,
        spanGaps: true,
      },
    ],
  };

  return <Line options={options} data={data} />;
}

RainChart.defaultProps = {
  isRaining: false,
};
