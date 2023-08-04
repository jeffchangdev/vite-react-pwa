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
import { useEffect, useState } from 'react';
import { MinutelyForecast } from '../types/types';
import { minMaxify } from '../utils/utilities';

ChartJS.register(Filler, CategoryScale, LinearScale, PointElement, LineElement);

type ChartProps = {
  rainData: MinutelyForecast[];
  isRaining?: boolean;
};

export default function RainChart({ rainData, isRaining }: ChartProps) {
  const [gradient, setGradient] = useState<CanvasGradient>();

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
        backgroundColor: gradient || 'rgba(197, 226, 247, 1)',
        borderColor: 'rgba(197, 226, 247, 1)',
        tension: 0.3,
        showLine: false,
        spanGaps: true,
      },
    ],
  };

  useEffect(() => {
    // eslint-disable-next-line prefer-destructuring
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    const linearGradient = ctx?.createLinearGradient(0, 25, 0, 300);

    if (linearGradient) {
      linearGradient.addColorStop(0, 'rgba(197, 226, 247, .9)');
      linearGradient.addColorStop(0.35, 'rgba(197, 226, 247, .7)');
      linearGradient.addColorStop(1, 'rgba(197, 226, 247, 0)');
      setGradient(linearGradient);
    }
  }, []);

  return <Line id="myChart" options={options} data={data} />;
}

RainChart.defaultProps = {
  isRaining: false,
};
