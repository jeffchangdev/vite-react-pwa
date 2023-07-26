import { useEffect, useState } from 'react';
import { GeoLocation, Locale, Forecast } from './types/types';
import { fetchGeoLocation, fetchLocale, fetchForecast } from './api/api';
import Overlay from './components/RainChartOverlay';
import RainChart from './components/RainChart';
import CurrentWeather from './components/CurrentWeather';
import WeeklyForecastList from './components/WeeklyForecastList';
import RainChartTicks from './components/RachChartTicks';

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
        fetchForecast(latitude, longitude, apiKey, setForecast),
        // fetchMockForecast(latitude, longitude, apiKey, setForecast),
      ]);
    };
    fetchData();
  }, []);

  const canDisplay = location && forecast && locale;
  const latDisplay = canDisplay && +location.latitude.toFixed(2);
  const lonDisplay = canDisplay && +location.longitude.toFixed(2);

  return (
    canDisplay && (
      <div className="app">
        <div className="center">
          <div>{`${locale[0].local_names.en}, ${locale[0].state} ${locale[0].country}`}</div>
          <div>{`${latDisplay}, ${lonDisplay}`}</div>
        </div>
        <div className="primary">
          <CurrentWeather
            dt={forecast.current.dt}
            temp={forecast.current.temp}
            iconID={forecast.current.weather[0].icon}
          />
        </div>
        <div className="rain-display">
          <div className="chart-container">
            <RainChart rainData={forecast.minutely} />
            <div className="overlay-container">
              <Overlay />
            </div>
          </div>
          <div className="ticks-container">
            <RainChartTicks />
          </div>
        </div>
        <div className="weekly-container">
          <WeeklyForecastList arr={forecast.daily} />
        </div>
      </div>
    )
  );
}

export default App;
