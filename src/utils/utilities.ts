import {
  FaSun,
  FaCloudSun,
  FaCloud,
  FaUmbrella,
  FaCloudBolt,
  FaSnowflake,
  FaSmog,
} from 'react-icons/fa6';
import { MinutelyForecast } from '../types/types';

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

export function icon(id: string) {
  return iconMap[id];
}
