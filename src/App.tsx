import { useEffect, useState } from 'react';
import fetchMinutelyData from './mockApi';
import RainChart from './components/RainChart';

interface MinuteData {
  dt: number;
  precipitation: number;
}

function App() {
  const [data, setData] = useState<{ minutely: MinuteData[] }>();

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
    const fetchWeatherData = async () => {
      const response = await fetchMinutelyData();
      const typedresponse = response as { minutely: MinuteData[] };
      setData(typedresponse);
    };
    fetchWeatherData();
  }, []);

  return (
    <>
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
