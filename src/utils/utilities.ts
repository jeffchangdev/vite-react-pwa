/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
import {
  FaSun,
  FaCloudSun,
  FaCloud,
  FaUmbrella,
  FaCloudBolt,
  FaSnowflake,
  FaSmog,
} from 'react-icons/fa6';
import { HourlyForecast, MinutelyForecast } from '../types/types';

export function convertUnixTimeToLocal(dt: number) {
  const milliseconds = dt * 1000;
  const dateObject = new Date(milliseconds);
  const month = dateObject.toLocaleString('en-US', { month: 'long' });
  const day = dateObject.getDate();
  const hour = dateObject.getHours();
  const minute = dateObject.getMinutes();

  return { month, day, hour, minute };
}

export function displayHourMinute(dt: number) {
  const { hour, minute } = convertUnixTimeToLocal(dt);
  const displayHour = hour % 12 === 0 ? 12 : hour % 12;
  const displayMinute = minute < 10 ? `0${minute}` : minute;
  const meridiem = hour > 12 ? 'PM' : 'AM';

  return `${displayHour}:${displayMinute} ${meridiem}`;
}

export function minMaxify(arr: MinutelyForecast[]) {
  const data = arr.map(({ precipitation }) => precipitation);
  const localMinMaxArr = [data[0]];
  let sign = data[1] > data[0] ? '+' : '-';

  // eslint-disable-next-line no-plusplus
  for (let i = 2; i < data.length; i++) {
    const current = data[i] > data[i - 1] ? '+' : '-';

    // if sign is different i.e. local min/max detected
    if (current !== sign) {
      localMinMaxArr[i - 1] = data[i - 1];
      sign = current;
    }
  }

  localMinMaxArr[data.length - 1] = data[data.length - 1];
  console.log('localMinMaxArr: ', localMinMaxArr);
  return localMinMaxArr;
}

const iconMap: { [key: string]: React.ElementType } = {
  '01': FaSun,
  '02': FaCloudSun,
  '03': FaCloud,
  '04': FaCloud,
  '09': FaUmbrella,
  '10': FaUmbrella,
  '11': FaCloudBolt,
  '13': FaSnowflake,
  '50': FaSmog,
};

export function getIcon(id: string) {
  return iconMap[id];
}

export function isRainingNow(arr: MinutelyForecast[]) {
  for (const { precipitation } of arr) {
    if (precipitation > 0) return true;
  }

  return false;
}

export function isRainingLater(dt: number, arr: HourlyForecast[]) {
  for (const hourForecast of arr) {
    // arr contains previous + next 47 hours. if the hour in arr < current time, skip
    if (hourForecast.dt < dt) continue;

    const iconString = hourForecast.weather[0].icon;
    const iconNum = Number(iconString.substring(0, 2));
    if (iconNum > 8 && iconNum < 14) return hourForecast.dt;
  }

  return false;
}
