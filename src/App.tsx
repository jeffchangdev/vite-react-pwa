import { useEffect, useState } from 'react';
import { GeoLocation, Locale, Forecast } from './types/types';
import { fetchGeoLocation, fetchLocale, fetchMockForecast } from './api/api';
import RainChart from './components/RainChart';
import CurrentWeather from './components/CurrentWeather';

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

  const canDisplay = location && forecast && locale;

  return (
    canDisplay && (
      <>
        <div>{`${location.latitude} ${location.longitude}`}</div>
        <div>{`${locale[0].local_names.en}, ${locale[0].state}`}</div>
        <div>
          <CurrentWeather
            dt={forecast.current.dt}
            temp={forecast.current.temp}
            iconID={forecast.current.weather[0].icon}
          />
        </div>
        <div>
          <RainChart rainData={forecast.minutely} />
        </div>
      </>
    )
  );
}

export default App;
