import { convertUnixTimeToLocal } from '../utils/utilities';

type LastUpdatedProps = {
  dt: number;
};

export default function LastUpdated({ dt }: LastUpdatedProps) {
  const { month, day, hour, minute } = convertUnixTimeToLocal(dt);
  const displayHour = hour > 12 ? hour - 12 : hour;
  const displayMinute = minute < 10 ? `0${minute}` : minute;
  const meridiem = hour > 12 ? 'PM' : 'AM';
  const lastUpdatedDateTime = `${month} ${day}, ${displayHour}:${displayMinute} ${meridiem}`;

  return <div>last updated {lastUpdatedDateTime}</div>;
}
