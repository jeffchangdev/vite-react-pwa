import { useEffect, useState } from 'react';
import { GeoLocation, Locale, Forecast } from './types/types';
import { fetchGeoLocation, fetchLocale, fetchMockForecast } from './api/api';
import RainChart from './components/RainChart';

function App() {
  const [location, setLocation] = useState<GeoLocation>();
  const [forecast, setForecast] = useState<Forecast>();
  const [locale, setLocale] = useState<Locale[]>();

  const apiKey = '3853991e651353fcbcf2e48d3efa1bb8';

  useEffect(() => {
    // fetchGeoLocation();
    // fetchGeoLocation().then(({ lat, lon }) => fetchWeatherData(lat, lon));
    const fetchData = async () => {
      const { latitude, longitude } = await fetchGeoLocation(setLocation);
      await Promise.all([
        fetchLocale(latitude, longitude, apiKey, setLocale),
        // fetchForecast(latitude, longitude, apiKey, setForecast),
        fetchMockForecast(latitude, longitude, apiKey, setForecast),
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
      <div>{forecast ? <RainChart rainData={forecast.minutely} /> : null}</div>
    </>
  );
}

export default App;
