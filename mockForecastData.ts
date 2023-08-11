//for rain now
const mockForecastData = {
  lat: 40.7595,
  lon: -73.9672,
  timezone: 'America/New_York',
  timezone_offset: -14400,
  current: {
    dt: 1689974428,
    sunrise: 1689932517,
    sunset: 1689985332,
    temp: 84.31,
    feels_like: 86.72,
    pressure: 1006,
    humidity: 55,
    dew_point: 66.38,
    uvi: 2.09,
    clouds: 20,
    visibility: 10000,
    wind_speed: 14.97,
    wind_deg: 250,
    weather: [
      {
        id: 801,
        main: 'Clouds',
        description: 'few clouds',
        icon: '02d',
      },
    ],
  },
  "minutely": [
    {
      "dt": 1691709960,
      "precipitation": 0.1959
    },
    {
      "dt": 1691710020,
      "precipitation": 0.2381
    },
    {
      "dt": 1691710080,
      "precipitation": 0.2803
    },
    {
      "dt": 1691710140,
      "precipitation": 0.3225
    },
    {
      "dt": 1691710200,
      "precipitation": 0.3646
    },
    {
      "dt": 1691710260,
      "precipitation": 0.2927
    },
    {
      "dt": 1691710320,
      "precipitation": 0.2207
    },
    {
      "dt": 1691710380,
      "precipitation": 0.1488
    },
    {
      "dt": 1691710440,
      "precipitation": 0
    },
    {
      "dt": 1691710500,
      "precipitation": 0
    },
    {
      "dt": 1691710560,
      "precipitation": 0
    },
    {
      "dt": 1691710620,
      "precipitation": 0
    },
    {
      "dt": 1691710680,
      "precipitation": 0
    },
    {
      "dt": 1691710740,
      "precipitation": 0
    },
    {
      "dt": 1691710800,
      "precipitation": 0
    },
    {
      "dt": 1691710860,
      "precipitation": 0
    },
    {
      "dt": 1691710920,
      "precipitation": 0
    },
    {
      "dt": 1691710980,
      "precipitation": 0
    },
    {
      "dt": 1691711040,
      "precipitation": 0
    },
    {
      "dt": 1691711100,
      "precipitation": 0
    },
    {
      "dt": 1691711160,
      "precipitation": 0
    },
    {
      "dt": 1691711220,
      "precipitation": 0
    },
    {
      "dt": 1691711280,
      "precipitation": 0
    },
    {
      "dt": 1691711340,
      "precipitation": 0
    },
    {
      "dt": 1691711400,
      "precipitation": 0
    },
    {
      "dt": 1691711460,
      "precipitation": 0
    },
    {
      "dt": 1691711520,
      "precipitation": 0
    },
    {
      "dt": 1691711580,
      "precipitation": 0
    },
    {
      "dt": 1691711640,
      "precipitation": 0
    },
    {
      "dt": 1691711700,
      "precipitation": 0
    },
    {
      "dt": 1691711760,
      "precipitation": 0
    },
    {
      "dt": 1691711820,
      "precipitation": 0
    },
    {
      "dt": 1691711880,
      "precipitation": 0
    },
    {
      "dt": 1691711940,
      "precipitation": 0
    },
    {
      "dt": 1691712000,
      "precipitation": 0
    },
    {
      "dt": 1691712060,
      "precipitation": 0
    },
    {
      "dt": 1691712120,
      "precipitation": 0
    },
    {
      "dt": 1691712180,
      "precipitation": 0
    },
    {
      "dt": 1691712240,
      "precipitation": 0
    },
    {
      "dt": 1691712300,
      "precipitation": 0
    },
    {
      "dt": 1691712360,
      "precipitation": 0
    },
    {
      "dt": 1691712420,
      "precipitation": 0
    },
    {
      "dt": 1691712480,
      "precipitation": 0
    },
    {
      "dt": 1691712540,
      "precipitation": 0
    },
    {
      "dt": 1691712600,
      "precipitation": 0
    },
    {
      "dt": 1691712660,
      "precipitation": 0
    },
    {
      "dt": 1691712720,
      "precipitation": 0
    },
    {
      "dt": 1691712780,
      "precipitation": 0
    },
    {
      "dt": 1691712840,
      "precipitation": 0
    },
    {
      "dt": 1691712900,
      "precipitation": 0
    },
    {
      "dt": 1691712960,
      "precipitation": 0
    },
    {
      "dt": 1691713020,
      "precipitation": 0
    },
    {
      "dt": 1691713080,
      "precipitation": 0
    },
    {
      "dt": 1691713140,
      "precipitation": 0
    },
    {
      "dt": 1691713200,
      "precipitation": 0
    },
    {
      "dt": 1691713260,
      "precipitation": 0
    },
    {
      "dt": 1691713320,
      "precipitation": 0
    },
    {
      "dt": 1691713380,
      "precipitation": 0
    },
    {
      "dt": 1691713440,
      "precipitation": 0
    },
    {
      "dt": 1691713500,
      "precipitation": 0
    },
    {
      "dt": 1691713560,
      "precipitation": 0
    }
  ],
  hourly: [
    {
      dt: 1689973200,
      temp: 84.31,
      feels_like: 86.72,
      pressure: 1006,
      humidity: 55,
      dew_point: 66.38,
      uvi: 2.09,
      clouds: 20,
      visibility: 10000,
      wind_speed: 9.31,
      wind_deg: 258,
      wind_gust: 11.65,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      pop: 0.91,
      rain: {
        '1h': 0.49,
      },
    },
    {
      dt: 1689976800,
      temp: 83.91,
      feels_like: 86.36,
      pressure: 1006,
      humidity: 56,
      dew_point: 66.54,
      uvi: 1.07,
      clouds: 24,
      visibility: 10000,
      wind_speed: 7,
      wind_deg: 280,
      wind_gust: 9.84,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      pop: 0.8,
    },
    {
      dt: 1689980400,
      temp: 83.68,
      feels_like: 85.57,
      pressure: 1006,
      humidity: 54,
      dew_point: 65.28,
      uvi: 0.32,
      clouds: 24,
      visibility: 10000,
      wind_speed: 5.44,
      wind_deg: 269,
      wind_gust: 9.35,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      pop: 0.8,
    },
    {
      dt: 1689984000,
      temp: 82.31,
      feels_like: 84.31,
      pressure: 1006,
      humidity: 57,
      dew_point: 65.55,
      uvi: 0,
      clouds: 24,
      visibility: 10000,
      wind_speed: 6.33,
      wind_deg: 290,
      wind_gust: 11.12,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      pop: 1,
      rain: {
        '1h': 0.28,
      },
    },
    {
      dt: 1689987600,
      temp: 79.74,
      feels_like: 79.74,
      pressure: 1007,
      humidity: 60,
      dew_point: 64.63,
      uvi: 0,
      clouds: 48,
      visibility: 10000,
      wind_speed: 8.66,
      wind_deg: 325,
      wind_gust: 14.29,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 0.56,
      rain: {
        '1h': 0.22,
      },
    },
    {
      dt: 1689991200,
      temp: 75.72,
      feels_like: 76.1,
      pressure: 1007,
      humidity: 66,
      dew_point: 63.32,
      uvi: 0,
      clouds: 32,
      visibility: 10000,
      wind_speed: 10.63,
      wind_deg: 335,
      wind_gust: 18.77,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      pop: 0.57,
    },
    {
      dt: 1689994800,
      temp: 73.9,
      feels_like: 74.1,
      pressure: 1007,
      humidity: 66,
      dew_point: 61.83,
      uvi: 0,
      clouds: 22,
      visibility: 10000,
      wind_speed: 9.71,
      wind_deg: 335,
      wind_gust: 20.27,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      pop: 0.45,
    },
    {
      dt: 1689998400,
      temp: 72.86,
      feels_like: 72.9,
      pressure: 1008,
      humidity: 65,
      dew_point: 60.13,
      uvi: 0,
      clouds: 19,
      visibility: 10000,
      wind_speed: 9.31,
      wind_deg: 330,
      wind_gust: 21.61,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      pop: 0.41,
    },
    {
      dt: 1690002000,
      temp: 72,
      feels_like: 71.91,
      pressure: 1007,
      humidity: 64,
      dew_point: 59.18,
      uvi: 0,
      clouds: 21,
      visibility: 10000,
      wind_speed: 8.86,
      wind_deg: 325,
      wind_gust: 21.23,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      pop: 0.37,
    },
    {
      dt: 1690005600,
      temp: 71.13,
      feels_like: 71.01,
      pressure: 1007,
      humidity: 65,
      dew_point: 58.89,
      uvi: 0,
      clouds: 17,
      visibility: 10000,
      wind_speed: 8.55,
      wind_deg: 320,
      wind_gust: 20.07,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      pop: 0.33,
    },
    {
      dt: 1690009200,
      temp: 70.27,
      feels_like: 70.09,
      pressure: 1007,
      humidity: 66,
      dew_point: 58.59,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 8.37,
      wind_deg: 320,
      wind_gust: 19.13,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690012800,
      temp: 69.3,
      feels_like: 69.08,
      pressure: 1007,
      humidity: 67,
      dew_point: 58.06,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 8.43,
      wind_deg: 319,
      wind_gust: 19.93,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690016400,
      temp: 68.7,
      feels_like: 68.41,
      pressure: 1007,
      humidity: 67,
      dew_point: 57.22,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 8.93,
      wind_deg: 318,
      wind_gust: 21.14,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690020000,
      temp: 68.05,
      feels_like: 67.71,
      pressure: 1008,
      humidity: 67,
      dew_point: 56.66,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 9.35,
      wind_deg: 315,
      wind_gust: 19.53,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690023600,
      temp: 68.41,
      feels_like: 68.11,
      pressure: 1008,
      humidity: 67,
      dew_point: 56.84,
      uvi: 0.4,
      clouds: 0,
      visibility: 10000,
      wind_speed: 10,
      wind_deg: 325,
      wind_gust: 16.55,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690027200,
      temp: 70.83,
      feels_like: 70.48,
      pressure: 1009,
      humidity: 61,
      dew_point: 56.95,
      uvi: 1.26,
      clouds: 0,
      visibility: 10000,
      wind_speed: 9.48,
      wind_deg: 334,
      wind_gust: 13.24,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690030800,
      temp: 73.76,
      feels_like: 73.42,
      pressure: 1009,
      humidity: 55,
      dew_point: 56.48,
      uvi: 2.8,
      clouds: 0,
      visibility: 10000,
      wind_speed: 8.84,
      wind_deg: 338,
      wind_gust: 10.96,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690034400,
      temp: 76.55,
      feels_like: 76.15,
      pressure: 1009,
      humidity: 48,
      dew_point: 55.58,
      uvi: 4.82,
      clouds: 0,
      visibility: 10000,
      wind_speed: 8.37,
      wind_deg: 336,
      wind_gust: 9.95,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690038000,
      temp: 79.3,
      feels_like: 79.3,
      pressure: 1009,
      humidity: 43,
      dew_point: 54.81,
      uvi: 6.87,
      clouds: 0,
      visibility: 10000,
      wind_speed: 8.16,
      wind_deg: 337,
      wind_gust: 9.86,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690041600,
      temp: 81.75,
      feels_like: 81.03,
      pressure: 1009,
      humidity: 38,
      dew_point: 53.74,
      uvi: 8.44,
      clouds: 0,
      visibility: 10000,
      wind_speed: 8.01,
      wind_deg: 333,
      wind_gust: 9.71,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690045200,
      temp: 84.09,
      feels_like: 82.53,
      pressure: 1009,
      humidity: 34,
      dew_point: 52.77,
      uvi: 8.95,
      clouds: 0,
      visibility: 10000,
      wind_speed: 8.68,
      wind_deg: 324,
      wind_gust: 10.13,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690048800,
      temp: 85.91,
      feels_like: 83.8,
      pressure: 1008,
      humidity: 31,
      dew_point: 51.94,
      uvi: 8.3,
      clouds: 0,
      visibility: 10000,
      wind_speed: 10.22,
      wind_deg: 322,
      wind_gust: 11.72,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690052400,
      temp: 86.63,
      feels_like: 84.34,
      pressure: 1008,
      humidity: 30,
      dew_point: 51.67,
      uvi: 6.65,
      clouds: 100,
      visibility: 10000,
      wind_speed: 10.92,
      wind_deg: 321,
      wind_gust: 12.44,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690056000,
      temp: 87.03,
      feels_like: 84.6,
      pressure: 1008,
      humidity: 29,
      dew_point: 51.4,
      uvi: 4.57,
      clouds: 80,
      visibility: 10000,
      wind_speed: 11.01,
      wind_deg: 323,
      wind_gust: 12.68,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690059600,
      temp: 87.24,
      feels_like: 84.67,
      pressure: 1008,
      humidity: 28,
      dew_point: 50.7,
      uvi: 2.57,
      clouds: 54,
      visibility: 10000,
      wind_speed: 10.27,
      wind_deg: 331,
      wind_gust: 12.19,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690063200,
      temp: 86.47,
      feels_like: 84.06,
      pressure: 1008,
      humidity: 29,
      dew_point: 50.18,
      uvi: 1.12,
      clouds: 45,
      visibility: 10000,
      wind_speed: 10.6,
      wind_deg: 338,
      wind_gust: 11.74,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690066800,
      temp: 85.12,
      feels_like: 82.96,
      pressure: 1009,
      humidity: 30,
      dew_point: 50.27,
      uvi: 0.33,
      clouds: 39,
      visibility: 10000,
      wind_speed: 11.16,
      wind_deg: 340,
      wind_gust: 11.16,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690070400,
      temp: 82.9,
      feels_like: 81.54,
      pressure: 1009,
      humidity: 34,
      dew_point: 51.53,
      uvi: 0,
      clouds: 47,
      visibility: 10000,
      wind_speed: 9.66,
      wind_deg: 339,
      wind_gust: 12.77,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690074000,
      temp: 80.55,
      feels_like: 80.4,
      pressure: 1010,
      humidity: 41,
      dew_point: 54.97,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 9.62,
      wind_deg: 344,
      wind_gust: 14.85,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690077600,
      temp: 78.49,
      feels_like: 78.03,
      pressure: 1011,
      humidity: 42,
      dew_point: 53.6,
      uvi: 0,
      clouds: 60,
      visibility: 10000,
      wind_speed: 9.35,
      wind_deg: 359,
      wind_gust: 17,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690081200,
      temp: 76.96,
      feels_like: 76.42,
      pressure: 1011,
      humidity: 44,
      dew_point: 53.19,
      uvi: 0,
      clouds: 42,
      visibility: 10000,
      wind_speed: 7.34,
      wind_deg: 359,
      wind_gust: 15.64,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690084800,
      temp: 75.7,
      feels_like: 75.09,
      pressure: 1011,
      humidity: 45,
      dew_point: 52.99,
      uvi: 0,
      clouds: 31,
      visibility: 10000,
      wind_speed: 5.37,
      wind_deg: 359,
      wind_gust: 12.12,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690088400,
      temp: 74.59,
      feels_like: 73.9,
      pressure: 1011,
      humidity: 46,
      dew_point: 52.79,
      uvi: 0,
      clouds: 25,
      visibility: 10000,
      wind_speed: 4.54,
      wind_deg: 351,
      wind_gust: 11.21,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690092000,
      temp: 73.4,
      feels_like: 72.7,
      pressure: 1011,
      humidity: 48,
      dew_point: 52.45,
      uvi: 0,
      clouds: 21,
      visibility: 10000,
      wind_speed: 4.45,
      wind_deg: 335,
      wind_gust: 11.54,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690095600,
      temp: 72.45,
      feels_like: 71.69,
      pressure: 1012,
      humidity: 49,
      dew_point: 51.93,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 4.68,
      wind_deg: 335,
      wind_gust: 10.76,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690099200,
      temp: 71.35,
      feels_like: 70.54,
      pressure: 1012,
      humidity: 50,
      dew_point: 51.91,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 5.3,
      wind_deg: 335,
      wind_gust: 10.8,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690102800,
      temp: 70.36,
      feels_like: 69.53,
      pressure: 1012,
      humidity: 52,
      dew_point: 51.94,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 5.32,
      wind_deg: 347,
      wind_gust: 9.26,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690106400,
      temp: 69.55,
      feels_like: 68.74,
      pressure: 1013,
      humidity: 54,
      dew_point: 52.12,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 5.55,
      wind_deg: 360,
      wind_gust: 9.53,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690110000,
      temp: 70.63,
      feels_like: 69.84,
      pressure: 1014,
      humidity: 52,
      dew_point: 52.16,
      uvi: 0.38,
      clouds: 0,
      visibility: 10000,
      wind_speed: 5.64,
      wind_deg: 7,
      wind_gust: 8.28,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690113600,
      temp: 73.29,
      feels_like: 72.54,
      pressure: 1014,
      humidity: 47,
      dew_point: 51.82,
      uvi: 1.2,
      clouds: 0,
      visibility: 10000,
      wind_speed: 4.88,
      wind_deg: 11,
      wind_gust: 6.46,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690117200,
      temp: 76.53,
      feels_like: 75.81,
      pressure: 1015,
      humidity: 41,
      dew_point: 51.13,
      uvi: 2.65,
      clouds: 0,
      visibility: 10000,
      wind_speed: 4.61,
      wind_deg: 4,
      wind_gust: 5.53,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690120800,
      temp: 80.06,
      feels_like: 79.66,
      pressure: 1015,
      humidity: 36,
      dew_point: 50.65,
      uvi: 4.57,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.85,
      wind_deg: 2,
      wind_gust: 4,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690124400,
      temp: 83.25,
      feels_like: 81.5,
      pressure: 1015,
      humidity: 31,
      dew_point: 49.32,
      uvi: 6.5,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.13,
      wind_deg: 345,
      wind_gust: 4.38,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690128000,
      temp: 85.89,
      feels_like: 83.3,
      pressure: 1015,
      humidity: 27,
      dew_point: 48.42,
      uvi: 7.9,
      clouds: 0,
      visibility: 10000,
      wind_speed: 2.57,
      wind_deg: 316,
      wind_gust: 5.44,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690131600,
      temp: 87.33,
      feels_like: 84.61,
      pressure: 1015,
      humidity: 27,
      dew_point: 48.94,
      uvi: 8.36,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.2,
      wind_deg: 262,
      wind_gust: 6.76,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690135200,
      temp: 88.11,
      feels_like: 85.37,
      pressure: 1014,
      humidity: 27,
      dew_point: 49.32,
      uvi: 7.76,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.98,
      wind_deg: 240,
      wind_gust: 7.27,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690138800,
      temp: 88.59,
      feels_like: 85.71,
      pressure: 1014,
      humidity: 26,
      dew_point: 49.66,
      uvi: 6.01,
      clouds: 0,
      visibility: 10000,
      wind_speed: 4.34,
      wind_deg: 212,
      wind_gust: 8.01,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1690142400,
      temp: 88.81,
      feels_like: 86.07,
      pressure: 1014,
      humidity: 27,
      dew_point: 50.65,
      uvi: 4.12,
      clouds: 5,
      visibility: 10000,
      wind_speed: 7.2,
      wind_deg: 198,
      wind_gust: 9.1,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
  ],
  daily: [
    {
      dt: 1689958800,
      sunrise: 1689932517,
      sunset: 1689985332,
      moonrise: 1689945120,
      moonset: 1689993720,
      moon_phase: 0.12,
      summary: 'Expect a day of partly cloudy with rain',
      temp: {
        day: 83.95,
        min: 73,
        max: 84.52,
        night: 73.9,
        eve: 83.68,
        morn: 73.67,
      },
      feels_like: {
        day: 86.18,
        night: 74.1,
        eve: 85.57,
        morn: 74.55,
      },
      pressure: 1007,
      humidity: 55,
      dew_point: 66.06,
      wind_speed: 10.63,
      wind_deg: 335,
      wind_gust: 20.27,
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d',
        },
      ],
      clouds: 34,
      pop: 1,
      rain: 4.25,
      uvi: 8.25,
    },
    {
      dt: 1690045200,
      sunrise: 1690018970,
      sunset: 1690071686,
      moonrise: 1690035120,
      moonset: 1690081320,
      moon_phase: 0.15,
      summary: 'Expect a day of partly cloudy with clear spells',
      temp: {
        day: 84.09,
        min: 68.05,
        max: 87.24,
        night: 76.96,
        eve: 85.12,
        morn: 68.41,
      },
      feels_like: {
        day: 82.53,
        night: 76.42,
        eve: 82.96,
        morn: 68.11,
      },
      pressure: 1009,
      humidity: 34,
      dew_point: 52.77,
      wind_speed: 11.16,
      wind_deg: 340,
      wind_gust: 21.61,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: 0,
      pop: 0.41,
      uvi: 8.95,
    },
    {
      dt: 1690131600,
      sunrise: 1690105423,
      sunset: 1690158038,
      moonrise: 1690125120,
      moonset: 1690168860,
      moon_phase: 0.18,
      summary: 'Expect a day of partly cloudy with clear spells',
      temp: {
        day: 87.33,
        min: 69.55,
        max: 88.81,
        night: 78.58,
        eve: 82.42,
        morn: 70.63,
      },
      feels_like: {
        day: 84.61,
        night: 78.55,
        eve: 81.93,
        morn: 69.84,
      },
      pressure: 1015,
      humidity: 27,
      dew_point: 48.94,
      wind_speed: 8.19,
      wind_deg: 176,
      wind_gust: 14.52,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: 0,
      pop: 0.15,
      uvi: 8.36,
    },
    {
      dt: 1690218000,
      sunrise: 1690191877,
      sunset: 1690244388,
      moonrise: 1690215180,
      moonset: 1690256520,
      moon_phase: 0.21,
      summary: 'Expect a day of partly cloudy with rain',
      temp: {
        day: 87.58,
        min: 73.02,
        max: 87.58,
        night: 78.53,
        eve: 81.27,
        morn: 74.32,
      },
      feels_like: {
        day: 86.22,
        night: 78.62,
        eve: 82,
        morn: 74.5,
      },
      pressure: 1019,
      humidity: 35,
      dew_point: 56.66,
      wind_speed: 14.65,
      wind_deg: 166,
      wind_gust: 17.56,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: 11,
      pop: 0.27,
      rain: 0.17,
      uvi: 6.79,
    },
    {
      dt: 1690304400,
      sunrise: 1690278331,
      sunset: 1690330737,
      moonrise: 1690305420,
      moonset: 0,
      moon_phase: 0.25,
      summary: 'Expect a day of partly cloudy with clear spells',
      temp: {
        day: 87.89,
        min: 73.71,
        max: 87.89,
        night: 79.29,
        eve: 81.12,
        morn: 76.89,
      },
      feels_like: {
        day: 86.36,
        night: 79.29,
        eve: 82.92,
        morn: 76.77,
      },
      pressure: 1017,
      humidity: 34,
      dew_point: 55.83,
      wind_speed: 12.5,
      wind_deg: 166,
      wind_gust: 18.95,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      clouds: 17,
      pop: 0.24,
      uvi: 8.46,
    },
    {
      dt: 1690390800,
      sunrise: 1690364786,
      sunset: 1690417084,
      moonrise: 1690395840,
      moonset: 1690344240,
      moon_phase: 0.27,
      summary: 'Expect a day of partly cloudy with rain',
      temp: {
        day: 92.89,
        min: 76.35,
        max: 92.89,
        night: 83.52,
        eve: 87.48,
        morn: 77.49,
      },
      feels_like: {
        day: 95.7,
        night: 86.74,
        eve: 89.83,
        morn: 78.37,
      },
      pressure: 1010,
      humidity: 41,
      dew_point: 65.93,
      wind_speed: 15.68,
      wind_deg: 252,
      wind_gust: 28.25,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: 50,
      pop: 0.39,
      rain: 0.62,
      uvi: 0.97,
    },
    {
      dt: 1690477200,
      sunrise: 1690451241,
      sunset: 1690503429,
      moonrise: 1690486500,
      moonset: 1690432260,
      moon_phase: 0.31,
      summary: 'Expect a day of partly cloudy with clear spells',
      temp: {
        day: 94.37,
        min: 77.95,
        max: 94.37,
        night: 84.4,
        eve: 89.13,
        morn: 80.15,
      },
      feels_like: {
        day: 91.44,
        night: 87.37,
        eve: 89.13,
        morn: 81.14,
      },
      pressure: 1017,
      humidity: 23,
      dew_point: 51.19,
      wind_speed: 9.1,
      wind_deg: 201,
      wind_gust: 11.95,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: 1,
      pop: 0.03,
      uvi: 1,
    },
    {
      dt: 1690563600,
      sunrise: 1690537697,
      sunset: 1690589773,
      moonrise: 1690577280,
      moonset: 1690520700,
      moon_phase: 0.34,
      summary: 'There will be partly cloudy today',
      temp: {
        day: 97.81,
        min: 79.84,
        max: 98.49,
        night: 87.33,
        eve: 93.45,
        morn: 82.58,
      },
      feels_like: {
        day: 101.35,
        night: 92.12,
        eve: 97.18,
        morn: 85.91,
      },
      pressure: 1012,
      humidity: 35,
      dew_point: 65.86,
      wind_speed: 15.08,
      wind_deg: 212,
      wind_gust: 31.63,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: 89,
      pop: 0.15,
      uvi: 1,
    },
  ],
};

//for rain later
/*
const mockForecastData = {
  "lat": 40.7595,
  "lon": -73.9672,
  "timezone": "America/New_York",
  "timezone_offset": -14400,
  "current": {
    "dt": 1690200115,
    "sunrise": 1690191877,
    "sunset": 1690244388,
    "temp": 74.68,
    "feels_like": 75,
    "pressure": 1019,
    "humidity": 67,
    "dew_point": 63,
    "uvi": 1.21,
    "clouds": 0,
    "visibility": 10000,
    "wind_speed": 3.44,
    "wind_deg": 220,
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ]
  },
  "minutely": [
    {
      "dt": 1690200120,
      "precipitation": 0
    },
    {
      "dt": 1690200180,
      "precipitation": 0
    },
    {
      "dt": 1690200240,
      "precipitation": 0
    },
    {
      "dt": 1690200300,
      "precipitation": 0
    },
    {
      "dt": 1690200360,
      "precipitation": 0
    },
    {
      "dt": 1690200420,
      "precipitation": 0
    },
    {
      "dt": 1690200480,
      "precipitation": 0
    },
    {
      "dt": 1690200540,
      "precipitation": 0
    },
    {
      "dt": 1690200600,
      "precipitation": 0
    },
    {
      "dt": 1690200660,
      "precipitation": 0
    },
    {
      "dt": 1690200720,
      "precipitation": 0
    },
    {
      "dt": 1690200780,
      "precipitation": 0
    },
    {
      "dt": 1690200840,
      "precipitation": 0
    },
    {
      "dt": 1690200900,
      "precipitation": 0
    },
    {
      "dt": 1690200960,
      "precipitation": 0
    },
    {
      "dt": 1690201020,
      "precipitation": 0
    },
    {
      "dt": 1690201080,
      "precipitation": 0
    },
    {
      "dt": 1690201140,
      "precipitation": 0
    },
    {
      "dt": 1690201200,
      "precipitation": 0
    },
    {
      "dt": 1690201260,
      "precipitation": 0
    },
    {
      "dt": 1690201320,
      "precipitation": 0
    },
    {
      "dt": 1690201380,
      "precipitation": 0
    },
    {
      "dt": 1690201440,
      "precipitation": 0
    },
    {
      "dt": 1690201500,
      "precipitation": 0
    },
    {
      "dt": 1690201560,
      "precipitation": 0
    },
    {
      "dt": 1690201620,
      "precipitation": 0
    },
    {
      "dt": 1690201680,
      "precipitation": 0
    },
    {
      "dt": 1690201740,
      "precipitation": 0
    },
    {
      "dt": 1690201800,
      "precipitation": 0
    },
    {
      "dt": 1690201860,
      "precipitation": 0
    },
    {
      "dt": 1690201920,
      "precipitation": 0
    },
    {
      "dt": 1690201980,
      "precipitation": 0
    },
    {
      "dt": 1690202040,
      "precipitation": 0
    },
    {
      "dt": 1690202100,
      "precipitation": 0
    },
    {
      "dt": 1690202160,
      "precipitation": 0
    },
    {
      "dt": 1690202220,
      "precipitation": 0
    },
    {
      "dt": 1690202280,
      "precipitation": 0
    },
    {
      "dt": 1690202340,
      "precipitation": 0
    },
    {
      "dt": 1690202400,
      "precipitation": 0
    },
    {
      "dt": 1690202460,
      "precipitation": 0
    },
    {
      "dt": 1690202520,
      "precipitation": 0
    },
    {
      "dt": 1690202580,
      "precipitation": 0
    },
    {
      "dt": 1690202640,
      "precipitation": 0
    },
    {
      "dt": 1690202700,
      "precipitation": 0
    },
    {
      "dt": 1690202760,
      "precipitation": 0
    },
    {
      "dt": 1690202820,
      "precipitation": 0
    },
    {
      "dt": 1690202880,
      "precipitation": 0
    },
    {
      "dt": 1690202940,
      "precipitation": 0
    },
    {
      "dt": 1690203000,
      "precipitation": 0
    },
    {
      "dt": 1690203060,
      "precipitation": 0
    },
    {
      "dt": 1690203120,
      "precipitation": 0
    },
    {
      "dt": 1690203180,
      "precipitation": 0
    },
    {
      "dt": 1690203240,
      "precipitation": 0
    },
    {
      "dt": 1690203300,
      "precipitation": 0
    },
    {
      "dt": 1690203360,
      "precipitation": 0
    },
    {
      "dt": 1690203420,
      "precipitation": 0
    },
    {
      "dt": 1690203480,
      "precipitation": 0
    },
    {
      "dt": 1690203540,
      "precipitation": 0
    },
    {
      "dt": 1690203600,
      "precipitation": 0
    },
    {
      "dt": 1690203660,
      "precipitation": 0
    },
    {
      "dt": 1690203720,
      "precipitation": 0
    }
  ],
  "hourly": [
    {
      "dt": 1690200000,
      "temp": 74.68,
      "feels_like": 75,
      "pressure": 1019,
      "humidity": 67,
      "dew_point": 63,
      "uvi": 1.21,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 3.42,
      "wind_deg": 210,
      "wind_gust": 4.74,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1690203600,
      "temp": 75.69,
      "feels_like": 75.96,
      "pressure": 1019,
      "humidity": 64,
      "dew_point": 62.65,
      "uvi": 2.68,
      "clouds": 20,
      "visibility": 10000,
      "wind_speed": 4.99,
      "wind_deg": 204,
      "wind_gust": 6.96,
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1690207200,
      "temp": 77.63,
      "feels_like": 77.92,
      "pressure": 1019,
      "humidity": 60,
      "dew_point": 62.65,
      "uvi": 4.63,
      "clouds": 40,
      "visibility": 10000,
      "wind_speed": 7.92,
      "wind_deg": 201,
      "wind_gust": 10.47,
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1690210800,
      "temp": 80.42,
      "feels_like": 81.5,
      "pressure": 1019,
      "humidity": 53,
      "dew_point": 61.74,
      "uvi": 6.6,
      "clouds": 60,
      "visibility": 10000,
      "wind_speed": 9.98,
      "wind_deg": 195,
      "wind_gust": 13.22,
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "pop": 0.07
    },
    {
      "dt": 1690214400,
      "temp": 83.43,
      "feels_like": 83.86,
      "pressure": 1019,
      "humidity": 47,
      "dew_point": 61.09,
      "uvi": 8.26,
      "clouds": 80,
      "visibility": 10000,
      "wind_speed": 11.59,
      "wind_deg": 181,
      "wind_gust": 14.79,
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "pop": 0.18
    },
    {
      "dt": 1690218000,
      "temp": 86.92,
      "feels_like": 86.09,
      "pressure": 1019,
      "humidity": 38,
      "dew_point": 58.44,
      "uvi": 8.75,
      "clouds": 83,
      "visibility": 10000,
      "wind_speed": 12.77,
      "wind_deg": 172,
      "wind_gust": 14.83,
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "pop": 0.07
    },
    {
      "dt": 1690221600,
      "temp": 86.97,
      "feels_like": 85.93,
      "pressure": 1019,
      "humidity": 37,
      "dew_point": 57.25,
      "uvi": 8.12,
      "clouds": 86,
      "visibility": 10000,
      "wind_speed": 14.81,
      "wind_deg": 164,
      "wind_gust": 15.75,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "pop": 0.07
    },
    {
      "dt": 1690225200,
      "temp": 86.54,
      "feels_like": 85.24,
      "pressure": 1018,
      "humidity": 36,
      "dew_point": 55.99,
      "uvi": 6.07,
      "clouds": 53,
      "visibility": 10000,
      "wind_speed": 16.26,
      "wind_deg": 161,
      "wind_gust": 16.96,
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "pop": 0.07
    },
    {
      "dt": 1690228800,
      "temp": 85.62,
      "feels_like": 84.81,
      "pressure": 1018,
      "humidity": 39,
      "dew_point": 57.72,
      "uvi": 4.16,
      "clouds": 48,
      "visibility": 10000,
      "wind_speed": 13.22,
      "wind_deg": 184,
      "wind_gust": 16.06,
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "pop": 0.12
    },
    {
      "dt": 1690232400,
      "temp": 83.05,
      "feels_like": 83.61,
      "pressure": 1018,
      "humidity": 48,
      "dew_point": 61.12,
      "uvi": 2.33,
      "clouds": 62,
      "visibility": 10000,
      "wind_speed": 9.84,
      "wind_deg": 186,
      "wind_gust": 12.91,
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "pop": 0.27
    },
    {
      "dt": 1690236000,
      "temp": 83.59,
      "feels_like": 84.22,
      "pressure": 1018,
      "humidity": 48,
      "dew_point": 61.63,
      "uvi": 0.8,
      "clouds": 57,
      "visibility": 10000,
      "wind_speed": 9.66,
      "wind_deg": 163,
      "wind_gust": 11.23,
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "pop": 0.23
    },
    {
      "dt": 1690239600,
      "temp": 82.22,
      "feels_like": 83.32,
      "pressure": 1018,
      "humidity": 52,
      "dew_point": 63.09,
      "uvi": 0.23,
      "clouds": 62,
      "visibility": 10000,
      "wind_speed": 10.16,
      "wind_deg": 162,
      "wind_gust": 11.88,
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "pop": 0.15
    },
    {
      "dt": 1690243200,
      "temp": 82.6,
      "feels_like": 83.95,
      "pressure": 1018,
      "humidity": 53,
      "dew_point": 63.7,
      "uvi": 0,
      "clouds": 68,
      "visibility": 10000,
      "wind_speed": 8.21,
      "wind_deg": 196,
      "wind_gust": 13.22,
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "pop": 0.12
    },
    {
      "dt": 1690246800,
      "temp": 81.64,
      "feels_like": 83.12,
      "pressure": 1018,
      "humidity": 55,
      "dew_point": 63.63,
      "uvi": 0,
      "clouds": 81,
      "visibility": 10000,
      "wind_speed": 9.24,
      "wind_deg": 235,
      "wind_gust": 14.09,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10n"
        }
      ],
      "pop": 0.24
    },
    {
      "dt": 1690250400,
      "temp": 79.45,
      "feels_like": 79.45,
      "pressure": 1019,
      "humidity": 59,
      "dew_point": 64.2,
      "uvi": 0,
      "clouds": 40,
      "visibility": 10000,
      "wind_speed": 7.81,
      "wind_deg": 229,
      "wind_gust": 13.89,
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "pop": 0.28
    },
    {
      "dt": 1690254000,
      "temp": 78.35,
      "feels_like": 78.75,
      "pressure": 1019,
      "humidity": 61,
      "dew_point": 63.79,
      "uvi": 0,
      "clouds": 27,
      "visibility": 10000,
      "wind_speed": 8.14,
      "wind_deg": 227,
      "wind_gust": 14.41,
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "pop": 0.25
    },
    {
      "dt": 1690257600,
      "temp": 77.27,
      "feels_like": 77.61,
      "pressure": 1019,
      "humidity": 62,
      "dew_point": 63,
      "uvi": 0,
      "clouds": 20,
      "visibility": 10000,
      "wind_speed": 8.61,
      "wind_deg": 217,
      "wind_gust": 17,
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "pop": 0.32
    },
    {
      "dt": 1690261200,
      "temp": 76.21,
      "feels_like": 76.59,
      "pressure": 1019,
      "humidity": 65,
      "dew_point": 63.59,
      "uvi": 0,
      "clouds": 17,
      "visibility": 10000,
      "wind_speed": 8.43,
      "wind_deg": 212,
      "wind_gust": 16.8,
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "pop": 0.36
    },
    {
      "dt": 1690264800,
      "temp": 75.33,
      "feels_like": 75.76,
      "pressure": 1019,
      "humidity": 68,
      "dew_point": 63.84,
      "uvi": 0,
      "clouds": 15,
      "visibility": 10000,
      "wind_speed": 7.76,
      "wind_deg": 219,
      "wind_gust": 15.97,
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "pop": 0.36
    },
    {
      "dt": 1690268400,
      "temp": 74.62,
      "feels_like": 75.07,
      "pressure": 1019,
      "humidity": 70,
      "dew_point": 64.17,
      "uvi": 0,
      "clouds": 34,
      "visibility": 10000,
      "wind_speed": 6.71,
      "wind_deg": 227,
      "wind_gust": 14.94,
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "pop": 0.03
    },
    {
      "dt": 1690272000,
      "temp": 73.89,
      "feels_like": 74.35,
      "pressure": 1019,
      "humidity": 72,
      "dew_point": 64.36,
      "uvi": 0,
      "clouds": 17,
      "visibility": 10000,
      "wind_speed": 5.57,
      "wind_deg": 231,
      "wind_gust": 12.35,
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1690275600,
      "temp": 73.56,
      "feels_like": 74.1,
      "pressure": 1019,
      "humidity": 74,
      "dew_point": 64.53,
      "uvi": 0,
      "clouds": 11,
      "visibility": 10000,
      "wind_speed": 4.99,
      "wind_deg": 229,
      "wind_gust": 10.07,
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1690279200,
      "temp": 73.04,
      "feels_like": 73.56,
      "pressure": 1019,
      "humidity": 75,
      "dew_point": 64.76,
      "uvi": 0,
      "clouds": 9,
      "visibility": 10000,
      "wind_speed": 4.72,
      "wind_deg": 239,
      "wind_gust": 9.64,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "pop": 0.03
    },
    {
      "dt": 1690282800,
      "temp": 73.78,
      "feels_like": 74.34,
      "pressure": 1019,
      "humidity": 74,
      "dew_point": 65.01,
      "uvi": 0.36,
      "clouds": 7,
      "visibility": 10000,
      "wind_speed": 5.06,
      "wind_deg": 235,
      "wind_gust": 7.85,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "pop": 0.03
    },
    {
      "dt": 1690286400,
      "temp": 75.87,
      "feels_like": 76.39,
      "pressure": 1019,
      "humidity": 69,
      "dew_point": 64.96,
      "uvi": 1.16,
      "clouds": 6,
      "visibility": 10000,
      "wind_speed": 4.85,
      "wind_deg": 220,
      "wind_gust": 6.89,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "pop": 0.03
    },
    {
      "dt": 1690290000,
      "temp": 78.58,
      "feels_like": 79.05,
      "pressure": 1019,
      "humidity": 62,
      "dew_point": 64.6,
      "uvi": 2.69,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 6.06,
      "wind_deg": 205,
      "wind_gust": 7.52,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1690293600,
      "temp": 81.23,
      "feels_like": 82.78,
      "pressure": 1019,
      "humidity": 56,
      "dew_point": 63.95,
      "uvi": 4.65,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 6.55,
      "wind_deg": 203,
      "wind_gust": 7.05,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "pop": 0.03
    },
    {
      "dt": 1690297200,
      "temp": 83.46,
      "feels_like": 84.45,
      "pressure": 1019,
      "humidity": 50,
      "dew_point": 63.07,
      "uvi": 6.64,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 7.52,
      "wind_deg": 193,
      "wind_gust": 7.47,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "pop": 0.04
    },
    {
      "dt": 1690300800,
      "temp": 85.12,
      "feels_like": 85.91,
      "pressure": 1019,
      "humidity": 47,
      "dew_point": 62.53,
      "uvi": 8.17,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 8.66,
      "wind_deg": 182,
      "wind_gust": 8.39,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "pop": 0.11
    },
    {
      "dt": 1690304400,
      "temp": 86.5,
      "feels_like": 87.24,
      "pressure": 1018,
      "humidity": 45,
      "dew_point": 62.47,
      "uvi": 8.65,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 9.62,
      "wind_deg": 173,
      "wind_gust": 9.53,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "pop": 0.11
    },
    {
      "dt": 1690308000,
      "temp": 87.24,
      "feels_like": 87.98,
      "pressure": 1018,
      "humidity": 44,
      "dew_point": 62.73,
      "uvi": 8.02,
      "clouds": 2,
      "visibility": 10000,
      "wind_speed": 11.41,
      "wind_deg": 169,
      "wind_gust": 11.05,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "pop": 0.04
    },
    {
      "dt": 1690311600,
      "temp": 85.6,
      "feels_like": 86.79,
      "pressure": 1017,
      "humidity": 48,
      "dew_point": 63.25,
      "uvi": 5.63,
      "clouds": 61,
      "visibility": 10000,
      "wind_speed": 11.21,
      "wind_deg": 170,
      "wind_gust": 11.59,
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1690315200,
      "temp": 85.84,
      "feels_like": 87.12,
      "pressure": 1017,
      "humidity": 48,
      "dew_point": 63.97,
      "uvi": 3.85,
      "clouds": 56,
      "visibility": 10000,
      "wind_speed": 11.01,
      "wind_deg": 172,
      "wind_gust": 10.76,
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "pop": 0.17
    },
    {
      "dt": 1690318800,
      "temp": 84.02,
      "feels_like": 85.59,
      "pressure": 1016,
      "humidity": 52,
      "dew_point": 64.6,
      "uvi": 2.16,
      "clouds": 66,
      "visibility": 10000,
      "wind_speed": 10.16,
      "wind_deg": 161,
      "wind_gust": 8.66,
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "pop": 0.36
    },
    {
      "dt": 1690322400,
      "temp": 80.47,
      "feels_like": 83.03,
      "pressure": 1017,
      "humidity": 65,
      "dew_point": 67.24,
      "uvi": 0.89,
      "clouds": 51,
      "visibility": 10000,
      "wind_speed": 13.38,
      "wind_deg": 193,
      "wind_gust": 12.97,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "pop": 0.59,
      "rain": {
        "1h": 1.74
      }
    },
    {
      "dt": 1690326000,
      "temp": 75.07,
      "feels_like": 76.08,
      "pressure": 1017,
      "humidity": 81,
      "dew_point": 68.85,
      "uvi": 0.26,
      "clouds": 61,
      "visibility": 10000,
      "wind_speed": 8.61,
      "wind_deg": 164,
      "wind_gust": 12.59,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "pop": 0.94,
      "rain": {
        "1h": 3.19
      }
    },
    {
      "dt": 1690329600,
      "temp": 76.59,
      "feels_like": 77.38,
      "pressure": 1018,
      "humidity": 73,
      "dew_point": 67.24,
      "uvi": 0,
      "clouds": 68,
      "visibility": 10000,
      "wind_speed": 6.02,
      "wind_deg": 183,
      "wind_gust": 8.61,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "pop": 0.99,
      "rain": {
        "1h": 0.5
      }
    },
    {
      "dt": 1690333200,
      "temp": 74.91,
      "feels_like": 75.87,
      "pressure": 1018,
      "humidity": 80,
      "dew_point": 68.43,
      "uvi": 0,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 9.93,
      "wind_deg": 205,
      "wind_gust": 14.81,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "pop": 0.98,
      "rain": {
        "1h": 0.88
      }
    },
    {
      "dt": 1690336800,
      "temp": 74.26,
      "feels_like": 75.11,
      "pressure": 1018,
      "humidity": 79,
      "dew_point": 67.12,
      "uvi": 0,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 4.27,
      "wind_deg": 202,
      "wind_gust": 6.76,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "pop": 0.78
    },
    {
      "dt": 1690340400,
      "temp": 73.98,
      "feels_like": 74.64,
      "pressure": 1018,
      "humidity": 76,
      "dew_point": 65.66,
      "uvi": 0,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 6.33,
      "wind_deg": 227,
      "wind_gust": 9.89,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "pop": 0.78
    },
    {
      "dt": 1690344000,
      "temp": 72.5,
      "feels_like": 73.02,
      "pressure": 1018,
      "humidity": 76,
      "dew_point": 64.47,
      "uvi": 0,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 6.85,
      "wind_deg": 256,
      "wind_gust": 12.71,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "pop": 0.74
    },
    {
      "dt": 1690347600,
      "temp": 71.89,
      "feels_like": 72.48,
      "pressure": 1018,
      "humidity": 79,
      "dew_point": 64.96,
      "uvi": 0,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 6.58,
      "wind_deg": 286,
      "wind_gust": 13.78,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "pop": 0.87
    },
    {
      "dt": 1690351200,
      "temp": 71.85,
      "feels_like": 72.5,
      "pressure": 1018,
      "humidity": 80,
      "dew_point": 65.34,
      "uvi": 0,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 6.46,
      "wind_deg": 296,
      "wind_gust": 15.5,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "pop": 0.83
    },
    {
      "dt": 1690354800,
      "temp": 71.65,
      "feels_like": 72.32,
      "pressure": 1017,
      "humidity": 81,
      "dew_point": 65.52,
      "uvi": 0,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 5.46,
      "wind_deg": 292,
      "wind_gust": 14.97,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1690358400,
      "temp": 71.29,
      "feels_like": 71.92,
      "pressure": 1017,
      "humidity": 81,
      "dew_point": 65.35,
      "uvi": 0,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 3.47,
      "wind_deg": 276,
      "wind_gust": 9.53,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1690362000,
      "temp": 71.04,
      "feels_like": 71.65,
      "pressure": 1017,
      "humidity": 81,
      "dew_point": 64.98,
      "uvi": 0,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 3.18,
      "wind_deg": 264,
      "wind_gust": 6.38,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1690365600,
      "temp": 70.74,
      "feels_like": 71.31,
      "pressure": 1018,
      "humidity": 81,
      "dew_point": 64.47,
      "uvi": 0,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 3.53,
      "wind_deg": 281,
      "wind_gust": 7.2,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1690369200,
      "temp": 71.76,
      "feels_like": 72.12,
      "pressure": 1019,
      "humidity": 74,
      "dew_point": 63,
      "uvi": 0.36,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 4.07,
      "wind_deg": 304,
      "wind_gust": 8.23,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "pop": 0
    }
  ],
  "daily": [
    {
      "dt": 1690218000,
      "sunrise": 1690191877,
      "sunset": 1690244388,
      "moonrise": 1690215180,
      "moonset": 1690256520,
      "moon_phase": 0.21,
      "summary": "Expect a day of partly cloudy with clear spells",
      "temp": {
        "day": 86.92,
        "min": 74.5,
        "max": 86.97,
        "night": 78.35,
        "eve": 82.22,
        "morn": 74.77
      },
      "feels_like": {
        "day": 86.09,
        "night": 78.75,
        "eve": 83.32,
        "morn": 75.04
      },
      "pressure": 1019,
      "humidity": 38,
      "dew_point": 58.44,
      "wind_speed": 16.26,
      "wind_deg": 161,
      "wind_gust": 16.96,
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": 83,
      "pop": 0.28,
      "uvi": 8.75
    },
    {
      "dt": 1690304400,
      "sunrise": 1690278331,
      "sunset": 1690330737,
      "moonrise": 1690305420,
      "moonset": 0,
      "moon_phase": 0.25,
      "summary": "Expect a day of partly cloudy with rain",
      "temp": {
        "day": 86.5,
        "min": 73.04,
        "max": 87.24,
        "night": 73.98,
        "eve": 75.07,
        "morn": 73.78
      },
      "feels_like": {
        "day": 87.24,
        "night": 74.64,
        "eve": 76.08,
        "morn": 74.34
      },
      "pressure": 1018,
      "humidity": 45,
      "dew_point": 62.47,
      "wind_speed": 13.38,
      "wind_deg": 193,
      "wind_gust": 17,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "clouds": 0,
      "pop": 0.99,
      "rain": 6.31,
      "uvi": 8.65
    },
    {
      "dt": 1690390800,
      "sunrise": 1690364786,
      "sunset": 1690417084,
      "moonrise": 1690395840,
      "moonset": 1690344240,
      "moon_phase": 0.27,
      "summary": "Expect a day of partly cloudy with clear spells",
      "temp": {
        "day": 88.97,
        "min": 70.74,
        "max": 91.11,
        "night": 80.24,
        "eve": 87.4,
        "morn": 71.76
      },
      "feels_like": {
        "day": 86.58,
        "night": 82.22,
        "eve": 87.39,
        "morn": 72.12
      },
      "pressure": 1019,
      "humidity": 29,
      "dew_point": 53.01,
      "wind_speed": 11.48,
      "wind_deg": 192,
      "wind_gust": 19.6,
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": 26,
      "pop": 0.87,
      "uvi": 8.71
    },
    {
      "dt": 1690477200,
      "sunrise": 1690451241,
      "sunset": 1690503429,
      "moonrise": 1690486500,
      "moonset": 1690432260,
      "moon_phase": 0.31,
      "summary": "Expect a day of partly cloudy with rain",
      "temp": {
        "day": 95,
        "min": 76.35,
        "max": 96.13,
        "night": 77.76,
        "eve": 91.22,
        "morn": 79.12
      },
      "feels_like": {
        "day": 99,
        "night": 78.71,
        "eve": 95.97,
        "morn": 79.12
      },
      "pressure": 1016,
      "humidity": 40,
      "dew_point": 67.03,
      "wind_speed": 11.92,
      "wind_deg": 210,
      "wind_gust": 22.84,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "clouds": 38,
      "pop": 0.99,
      "rain": 5.84,
      "uvi": 7.64
    },
    {
      "dt": 1690563600,
      "sunrise": 1690537697,
      "sunset": 1690589773,
      "moonrise": 1690577280,
      "moonset": 1690520700,
      "moon_phase": 0.34,
      "summary": "Expect a day of partly cloudy with rain",
      "temp": {
        "day": 94.86,
        "min": 74.64,
        "max": 95.7,
        "night": 86.74,
        "eve": 90.7,
        "morn": 76.71
      },
      "feels_like": {
        "day": 98.73,
        "night": 90.32,
        "eve": 94.53,
        "morn": 77.61
      },
      "pressure": 1014,
      "humidity": 40,
      "dew_point": 67.03,
      "wind_speed": 15.32,
      "wind_deg": 246,
      "wind_gust": 28.68,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": 81,
      "pop": 0.8,
      "rain": 0.87,
      "uvi": 1.19
    },
    {
      "dt": 1690650000,
      "sunrise": 1690624154,
      "sunset": 1690676115,
      "moonrise": 1690667940,
      "moonset": 1690609680,
      "moon_phase": 0.38,
      "summary": "Expect a day of partly cloudy with rain",
      "temp": {
        "day": 86.94,
        "min": 75.52,
        "max": 88.9,
        "night": 80.44,
        "eve": 83.64,
        "morn": 77.49
      },
      "feels_like": {
        "day": 89.64,
        "night": 83.8,
        "eve": 87.98,
        "morn": 78.4
      },
      "pressure": 1012,
      "humidity": 51,
      "dew_point": 67.05,
      "wind_speed": 7.58,
      "wind_deg": 258,
      "wind_gust": 11.83,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": 100,
      "pop": 0.64,
      "rain": 4.84,
      "uvi": 2
    },
    {
      "dt": 1690736400,
      "sunrise": 1690710611,
      "sunset": 1690762455,
      "moonrise": 1690758300,
      "moonset": 1690699440,
      "moon_phase": 0.42,
      "summary": "Expect a day of partly cloudy with rain",
      "temp": {
        "day": 82.02,
        "min": 74.03,
        "max": 85.42,
        "night": 74.03,
        "eve": 78.15,
        "morn": 77.81
      },
      "feels_like": {
        "day": 86.05,
        "night": 74.14,
        "eve": 78.73,
        "morn": 78.87
      },
      "pressure": 1006,
      "humidity": 68,
      "dew_point": 70.16,
      "wind_speed": 10.22,
      "wind_deg": 336,
      "wind_gust": 18.92,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": 89,
      "pop": 1,
      "rain": 4.19,
      "uvi": 2
    },
    {
      "dt": 1690822800,
      "sunrise": 1690797068,
      "sunset": 1690848794,
      "moonrise": 1690847940,
      "moonset": 1690789980,
      "moon_phase": 0.46,
      "summary": "Expect a day of partly cloudy with rain",
      "temp": {
        "day": 82.69,
        "min": 69.93,
        "max": 82.69,
        "night": 72.86,
        "eve": 78.06,
        "morn": 71.2
      },
      "feels_like": {
        "day": 80.67,
        "night": 71.82,
        "eve": 77.07,
        "morn": 70.29
      },
      "pressure": 1015,
      "humidity": 26,
      "dew_point": 44.37,
      "wind_speed": 13.62,
      "wind_deg": 333,
      "wind_gust": 25.7,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": 0,
      "pop": 0.38,
      "uvi": 2
    }
  ]
}
*/

export default mockForecastData;
