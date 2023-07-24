import { convertUnixTimeToLocal } from '../utils/utilities';

type CurrentlyProps = {
  dt: number;
  temp: number;
};

export default function Currently({ dt, temp }: CurrentlyProps) {
  const { month, day, hour, minute } = convertUnixTimeToLocal(dt);
  const displayHour = hour > 12 ? hour - 12 : hour;
  const displayMinute = minute < 10 ? `0${minute}` : minute;
  const meridiem = hour > 12 ? 'PM' : 'AM';
  const lastUpdatedDateTime = `${month} ${day}, ${displayHour}:${displayMinute} ${meridiem}`;

  return (
    <>
      <div>{Math.round(temp)}°F</div>
      <div>last forecasted on {lastUpdatedDateTime}</div>
    </>
  );
}
