import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { GeoLocation, Locale, Forecast } from './types/types';
import { fetchGeoLocation, fetchLocale, fetchForecast } from './api/api';
import Overlay from './components/RainChartOverlay';
import RainChart from './components/RainChart';
import CurrentWeather from './components/CurrentWeather';
import WeeklyForecastList from './components/WeeklyForecastList';
import RainChartTicks from './components/RachChartTicks';
import LastUpdated from './components/LastUpdatedLabel';
import {
  isRainingNow,
  isRainingLater,
  displayHourMinute,
} from './utils/utilities';

function App() {
  const [location, setLocation] = useState<GeoLocation>();
  const [forecast, setForecast] = useState<Forecast>();
  const [locale, setLocale] = useState<Locale[]>();

  const apiKey = process.env.ONECALL_API_KEY as string;

  useEffect(() => {
    const fetchData = async () => {
      const { latitude, longitude } = await fetchGeoLocation(setLocation);
      await Promise.all([
        fetchLocale(latitude, longitude, apiKey, setLocale),
        fetchForecast(latitude, longitude, apiKey, setForecast),
        // fetchMockForecast(latitude, longitude, apiKey, setForecast),
      ]);
    };
    fetchData();
    console.log('log: ', location, forecast, locale);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const canDisplay = location && forecast && locale;

  // eslint-disable-next-line one-var
  let currentTime, isRaining, willRain, message;

  if (canDisplay) {
    currentTime = forecast.current.dt;
    isRaining = isRainingNow(forecast.minutely);
    willRain = isRainingLater(currentTime, forecast.hourly);
    message = willRain
      ? `rain forecasted to start at ${displayHourMinute(willRain as number)}`
      : 'no rain for the rest of the day';
  }

  return (
    canDisplay && (
      <div className="app">
        <div className="flex-down-center">
          <div style={{ fontSize: '21px', color: 'black', fontWeight: '500' }}>
            {`${locale[0].local_names.en}, ${locale[0].state}`}
          </div>
          <div style={{ fontSize: '13px' }}>
            <LastUpdated dt={forecast.current.dt} />
          </div>
        </div>
        <div>
          <CurrentWeather
            temp={forecast.current.temp}
            iconID={forecast.current.weather[0].icon}
            description={forecast.current.weather[0].description}
            min={forecast.daily[0].temp.min}
            max={forecast.daily[0].temp.max}
          />
        </div>
        <div className="rain-display">
          <div className="chart-container">
            <RainChart rainData={forecast.minutely} />
            <div
              className={classNames('overlay-container', { hide: !isRaining })}
            >
              <Overlay />
            </div>
          </div>
          <div className={classNames('info-container', { hide: isRaining })}>
            <div
              style={{
                paddingBottom: '10%',
              }}
            >
              {message}
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
