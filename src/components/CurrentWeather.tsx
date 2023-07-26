import { convertUnixTimeToLocal, getIcon } from '../utils/utilities';

type CurrentlyProps = {
  dt: number;
  temp: number;
  iconID: string;
};

export default function CurrentWeather({ dt, temp, iconID }: CurrentlyProps) {
  const { month, day, hour, minute } = convertUnixTimeToLocal(dt);
  const displayHour = hour > 12 ? hour - 12 : hour;
  const displayMinute = minute < 10 ? `0${minute}` : minute;
  const meridiem = hour > 12 ? 'PM' : 'AM';
  const lastUpdatedDateTime = `${month} ${day}, ${displayHour}:${displayMinute} ${meridiem}`;

  const IconComponent = getIcon(iconID.substring(0, 2));

  return (
    <>
      <div className="emphasis">
        <IconComponent />
      </div>
      <div className="emphasis">{Math.round(temp)}°F</div>
      <div>last updated on {lastUpdatedDateTime}</div>
    </>
  );
}
