import { useEffect, useState } from 'react';

interface MinuteData {
  dt: number;
  precipitation: number;
}

function App() {
  const [data, setData] = useState<{ minutely: MinuteData[] }>();

/*   useEffect(() => {
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
  }, []); */

  return (
    <ul>
      {data?.minutely.map((item: MinuteData) => {
        // eslint-disable-next-line react/jsx-key
        return <li> {`${item.dt}: ${item.precipitation}`} </li>;
      })}
    </ul>
  );
}

export default App;
