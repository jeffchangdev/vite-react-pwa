export interface GeoLocation {
  latitude: number;
  longitude: number;
}

export interface Locale {
  name: string;
  local_names: { en: string };
  state: string;
}

export interface MinutelyForecast {
  dt: number;
  precipitation: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface HourlyForecast {
  dt: number;
  temp: number;
  feels_like: number;
  weather: Weather[];
}

export interface Forecast {
  timezone_offset: number;
  current: HourlyForecast;
  minutely: MinutelyForecast[];
  hourly: HourlyForecast[];
  daily: {
    dt: number;
    summary: string;
    temp: {
      min: number;
      max: number;
    };
    weather: Weather[];
  }[];
}
