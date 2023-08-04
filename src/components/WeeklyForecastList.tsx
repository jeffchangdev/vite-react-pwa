import { ReactNode } from 'react';
import { Forecast } from '../types/types';
import { getIcon, convertUnixTimeToLocal } from '../utils/utilities';

type ListProps<T> = {
  arr: T[];
};

// this should really be a generic
function List<T extends ReactNode>({ arr }: ListProps<T>) {
  const list = arr.map((item) => (
    // eslint-disable-next-line react/jsx-key
    <div style={{ padding: '0px' }}> {item} </div>
  ));
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '30vh',
      }}
    >
      {list}
    </div>
  );
}

type WeeklyForecastListProps = {
  arr: Forecast['daily'];
};

export default function WeeklyForecastList({ arr }: WeeklyForecastListProps) {
  const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

  const dates = [];
  const temps = [];
  const icons = [];

  // eslint-disable-next-line no-restricted-syntax, no-plusplus
  for (let i = 1; i < arr.length; i++) {
    const {
      dt,
      temp: { min, max },
      weather,
    } = arr[i];

    const dateObj = new Date(dt * 1000);
    const dayNumber = dateObj.getDay();
    const dayName = daysOfWeek[dayNumber];

    const { month, day } = convertUnixTimeToLocal(dt);
    const displayDate = `${dayName}, ${month} ${day}`;
    dates.push(displayDate);

    temps.push(`${min} | ${max} °F`);

    const [{ icon }] = weather;
    const IconComponent = getIcon(icon.substring(0, 2));
    icons.push(<IconComponent />);
  }

  /*
  const list = arr.map(({ dt, temp: { min, max }, weather }, index) => {
    const [{ icon }] = weather;
    return (
      index !== 0 && (
        <WeatherCard key={dt} dt={dt} min={min} max={max} iconID={icon} />
      )
    );
  });

  return <div className="flex-down">{list}</div>;
  */

  return (
    <div className="weekly-container2 center">
      <div className="flex-across-between">
        <List<string> arr={dates} />
      </div>
      <div className="flex-across-between">
        <List<string> arr={temps} />
        <div style={{ marginLeft: '3px', marginTop: '0px', color: 'gray', fontSize: '16px' }}>
          <List<JSX.Element> arr={icons} />
        </div>
      </div>
    </div>
  );
}
