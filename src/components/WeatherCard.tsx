import { getIcon, convertUnixTimeToLocal } from '../utils/utilities';

type WeatherCardProps = {
  key: number;
  dt: number;
  min: number;
  max: number;
  iconID: string;
};

const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

export default function WeatherCard({
  key,
  dt,
  min,
  max,
  iconID,
}: WeatherCardProps) {
  const IconComponent = getIcon(iconID.substring(0, 2));

  const dateObj = new Date(dt * 1000);
  const dayNumber = dateObj.getDay();
  const dayName = daysOfWeek[dayNumber];

  const { month, day } = convertUnixTimeToLocal(dt);
  const displayDate = `${month} ${day}`;

  return (
    <div>
      <div key={key} className="flex-container">
        <div>{`${dayName}, ${displayDate} `}</div>
        <div className="flex-container">
          <div>{`${Math.round(min)} / ${Math.round(max)} °F`}</div>
          <div className="adjust">
            <IconComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
