import { Forecast } from '../types/types';
import WeatherCard from './WeatherCard';

type WeeklyForecastListProps = {
  arr: Forecast['daily'];
};

export default function WeeklyForecastList({ arr }: WeeklyForecastListProps) {
  const list = arr.map(({ dt, temp: { min, max }, weather }, index) => {
    const [{ icon }] = weather;
    return (
      index !== 0 && (
        <WeatherCard key={dt} dt={dt} min={min} max={max} iconID={icon} />
      )
    );
  });

  return <div className="flex-down">{list}</div>;
}
