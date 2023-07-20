import { useEffect, useState } from 'react';
import fetchMinutelyData from './mockApi';
import RainChart from './components/RainChart';

interface MinuteData {
  dt: number;
  precipitation: number;
}

interface GeoLocation {
  latitude: number;
  longitude: number;
}

interface Locale {
  name: string;
  local_names: { en: string };
  state: string;
}

function App() {
  const [location, setLocation] = useState<GeoLocation>();
  const [data, setData] = useState<{ minutely: MinuteData[] }>();
  const [locale, setLocale] = useState<Locale[]>();

  const apiKey = '3853991e651353fcbcf2e48d3efa1bb8';

  /*
  useEffect(() => {
    const url =
      'https://api.openweathermap.org/data/3.0/onecall' +
      '?lat=40.7831&lon=-73.9712&units=imperial&appid=3853991e651353fcbcf2e48d3efa1bb8';
    const fetchWeatherData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchWeatherData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  */

  useEffect(() => {
    const options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 };

    const fetchGeoLocation = async () => {
      const response = await new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(resolve, () => {}, options);
      });
      const pos = response as { coords: GeoLocation };
      const locationObj = {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      };
      setLocation(locationObj);
      return locationObj;
    };

    const fetchLocale = async (latitude: number, longitude: number) => {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${apiKey}`
      );
      const jsonData = await response.json();
      console.log(jsonData);
      setLocale(jsonData);
    };

    const fetchWeatherData = async (latitude: number, longitude: number) => {
      const response = await fetchMinutelyData(latitude, longitude);
      const minutelyData = response as { minutely: MinuteData[] };
      setData(minutelyData);
      return minutelyData;
    };

    // fetchGeoLocation();
    // fetchGeoLocation().then(({ lat, lon }) => fetchWeatherData(lat, lon));
    const fetchData = async () => {
      const { latitude, longitude } = await fetchGeoLocation();
      await Promise.all([
        fetchLocale(latitude, longitude),
        fetchWeatherData(latitude, longitude),
      ]);
    };
    fetchData();
  }, []);

  let city;
  if (locale && locale.length > 0) {
    city = locale[0].local_names.en;
  }

  return (
    <>
      <div>{`${location?.latitude} ${location?.longitude}`}</div>
      <div>{city}</div>
      <div>
        <RainChart />
      </div>
      <ul>
        {data?.minutely.map((item: MinuteData) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <span className="horizontal-list-item">
              {`${item.dt}: ${item.precipitation} `}
            </span>
          );
        })}
      </ul>
    </>
  );
}

export default App;
