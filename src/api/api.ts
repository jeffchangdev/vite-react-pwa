import { Forecast, GeoLocation, Locale } from '../types/types';
import mockData from '../../mockForecastData';

export const fetchGeoLocation = async (
  setState: React.Dispatch<React.SetStateAction<GeoLocation | undefined>>,
  options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
) => {
  const response = await new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(resolve, () => {}, options);
  });
  const pos = response as { coords: GeoLocation };
  const locationObj = {
    latitude: pos.coords.latitude,
    longitude: pos.coords.longitude,
  };
  setState(locationObj);
  return locationObj;
};

export const fetchMockForecast = async (
  latitude: number,
  longitude: number,
  apiKey: string,
  setState: React.Dispatch<React.SetStateAction<Forecast | undefined>>
) => {
  console.log(
    'from fetchMockForeCast: ',
    latitude,
    longitude,
    apiKey,
    mockData
  );
  setTimeout(() => setState(mockData), 800);
};

export const fetchForecast = async (
  latitude: number,
  longitude: number,
  apiKey: string,
  setState: React.Dispatch<React.SetStateAction<Forecast | undefined>>
) => {
  const response = await fetch(
    'https://api.openweathermap.org/data/3.0/onecall' +
      `?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
  );
  const jsonData = await response.json();
  console.log('forecast object is: ', jsonData);
  setState(jsonData);
};

export const fetchLocale = async (
  latitude: number,
  longitude: number,
  apiKey: string,
  setState: React.Dispatch<React.SetStateAction<Locale[] | undefined>>
) => {
  const response = await fetch(
    'http://api.openweathermap.org/geo/1.0/reverse' +
      `?lat=${latitude}&lon=${longitude}&limit=1&appid=${apiKey}`
  );
  const jsonData = await response.json();
  console.log(jsonData);
  setState(jsonData);
};
