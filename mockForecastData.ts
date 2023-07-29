
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
  minutely: [
    {
      "dt": 1690050060,
      "precipitation": 9.285
    },
    {
      "dt": 1690050120,
      "precipitation": 8.5848
    },
    {
      "dt": 1690050180,
      "precipitation": 7.8846
    },
    {
      "dt": 1690050240,
      "precipitation": 7.1844
    },
    {
      "dt": 1690050300,
      "precipitation": 6.4842
    },
    {
      "dt": 1690050360,
      "precipitation": 7.8505
    },
    {
      "dt": 1690050420,
      "precipitation": 9.2167
    },
    {
      "dt": 1690050480,
      "precipitation": 10.583
    },
    {
      "dt": 1690050540,
      "precipitation": 11.9492
    },
    {
      "dt": 1690050600,
      "precipitation": 13.3155
    },
    {
      "dt": 1690050660,
      "precipitation": 13.7277
    },
    {
      "dt": 1690050720,
      "precipitation": 14.1399
    },
    {
      "dt": 1690050780,
      "precipitation": 14.5521
    },
    {
      "dt": 1690050840,
      "precipitation": 14.9643
    },
    {
      "dt": 1690050900,
      "precipitation": 15.3765
    },
    {
      "dt": 1690050960,
      "precipitation": 17.0369
    },
    {
      "dt": 1690051020,
      "precipitation": 18.6973
    },
    {
      "dt": 1690051080,
      "precipitation": 20.3578
    },
    {
      "dt": 1690051140,
      "precipitation": 22.0182
    },
    {
      "dt": 1690051200,
      "precipitation": 23.6786
    },
    {
      "dt": 1690051260,
      "precipitation": 24.4116
    },
    {
      "dt": 1690051320,
      "precipitation": 25.1446
    },
    {
      "dt": 1690051380,
      "precipitation": 25.8776
    },
    {
      "dt": 1690051440,
      "precipitation": 26.6106
    },
    {
      "dt": 1690051500,
      "precipitation": 27.3436
    },
    {
      "dt": 1690051560,
      "precipitation": 29.1676
    },
    {
      "dt": 1690051620,
      "precipitation": 30.9915
    },
    {
      "dt": 1690051680,
      "precipitation": 32.8154
    },
    {
      "dt": 1690051740,
      "precipitation": 34.6394
    },
    {
      "dt": 1690051800,
      "precipitation": 36.4633
    },
    {
      "dt": 1690051860,
      "precipitation": 36.4633
    },
    {
      "dt": 1690051920,
      "precipitation": 36.4633
    },
    {
      "dt": 1690051980,
      "precipitation": 36.4633
    },
    {
      "dt": 1690052040,
      "precipitation": 36.4633
    },
    {
      "dt": 1690052100,
      "precipitation": 36.4633
    },
    {
      "dt": 1690052160,
      "precipitation": 35.4858
    },
    {
      "dt": 1690052220,
      "precipitation": 34.5084
    },
    {
      "dt": 1690052280,
      "precipitation": 33.5309
    },
    {
      "dt": 1690052340,
      "precipitation": 32.5534
    },
    {
      "dt": 1690052400,
      "precipitation": 31.5759
    },
    {
      "dt": 1690052460,
      "precipitation": 27.9238
    },
    {
      "dt": 1690052520,
      "precipitation": 24.2717
    },
    {
      "dt": 1690052580,
      "precipitation": 20.6197
    },
    {
      "dt": 1690052640,
      "precipitation": 16.9676
    },
    {
      "dt": 1690052700,
      "precipitation": 13.3155
    },
    {
      "dt": 1690052760,
      "precipitation": 11.2839
    },
    {
      "dt": 1690052820,
      "precipitation": 9.2523
    },
    {
      "dt": 1690052880,
      "precipitation": 7.2207
    },
    {
      "dt": 1690052940,
      "precipitation": 5.1892
    },
    {
      "dt": 1690053000,
      "precipitation": 3.1576
    },
    {
      "dt": 1690053060,
      "precipitation": 4.8322
    },
    {
      "dt": 1690053120,
      "precipitation": 6.5068
    },
    {
      "dt": 1690053180,
      "precipitation": 8.1815
    },
    {
      "dt": 1690053240,
      "precipitation": 9.8561
    },
    {
      "dt": 1690053300,
      "precipitation": 11.5307
    },
    {
      "dt": 1690053360,
      "precipitation": 15.5398
    },
    {
      "dt": 1690053420,
      "precipitation": 19.5488
    },
    {
      "dt": 1690053480,
      "precipitation": 23.5578
    },
    {
      "dt": 1690053540,
      "precipitation": 27.5669
    },
    {
      "dt": 1690053600,
      "precipitation": 31.5759
    },
    {
      "dt": 1690053660,
      "precipitation": 28.812
    },
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

/*
const mockForecastData = {
  "lat": 40.7595,
  "lon": -73.9672,
  "timezone": "America/New_York",
  "timezone_offset": -14400,
  "current": {
    "dt": 1690664502,
    "sunrise": 1690624154,
    "sunset": 1690676115,
    "temp": 89.98,
    "feels_like": 96.44,
    "pressure": 1005,
    "humidity": 54,
    "dew_point": 71.1,
    "uvi": 2.23,
    "clouds": 0,
    "visibility": 10000,
    "wind_speed": 23.02,
    "wind_deg": 240,
    "wind_gust": 28.77,
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
      "dt": 1690664520,
      "precipitation": 0
    },
    {
      "dt": 1690664580,
      "precipitation": 0
    },
    {
      "dt": 1690664640,
      "precipitation": 0
    },
    {
      "dt": 1690664700,
      "precipitation": 0
    },
    {
      "dt": 1690664760,
      "precipitation": 0
    },
    {
      "dt": 1690664820,
      "precipitation": 0
    },
    {
      "dt": 1690664880,
      "precipitation": 0
    },
    {
      "dt": 1690664940,
      "precipitation": 0
    },
    {
      "dt": 1690665000,
      "precipitation": 0
    },
    {
      "dt": 1690665060,
      "precipitation": 0
    },
    {
      "dt": 1690665120,
      "precipitation": 0
    },
    {
      "dt": 1690665180,
      "precipitation": 0
    },
    {
      "dt": 1690665240,
      "precipitation": 0
    },
    {
      "dt": 1690665300,
      "precipitation": 0
    },
    {
      "dt": 1690665360,
      "precipitation": 0
    },
    {
      "dt": 1690665420,
      "precipitation": 0
    },
    {
      "dt": 1690665480,
      "precipitation": 0
    },
    {
      "dt": 1690665540,
      "precipitation": 0
    },
    {
      "dt": 1690665600,
      "precipitation": 0
    },
    {
      "dt": 1690665660,
      "precipitation": 0
    },
    {
      "dt": 1690665720,
      "precipitation": 0
    },
    {
      "dt": 1690665780,
      "precipitation": 0
    },
    {
      "dt": 1690665840,
      "precipitation": 0
    },
    {
      "dt": 1690665900,
      "precipitation": 0
    },
    {
      "dt": 1690665960,
      "precipitation": 0
    },
    {
      "dt": 1690666020,
      "precipitation": 0
    },
    {
      "dt": 1690666080,
      "precipitation": 0
    },
    {
      "dt": 1690666140,
      "precipitation": 0
    },
    {
      "dt": 1690666200,
      "precipitation": 0
    },
    {
      "dt": 1690666260,
      "precipitation": 0
    },
    {
      "dt": 1690666320,
      "precipitation": 0
    },
    {
      "dt": 1690666380,
      "precipitation": 0
    },
    {
      "dt": 1690666440,
      "precipitation": 0
    },
    {
      "dt": 1690666500,
      "precipitation": 0
    },
    {
      "dt": 1690666560,
      "precipitation": 0
    },
    {
      "dt": 1690666620,
      "precipitation": 0
    },
    {
      "dt": 1690666680,
      "precipitation": 0
    },
    {
      "dt": 1690666740,
      "precipitation": 0
    },
    {
      "dt": 1690666800,
      "precipitation": 0
    },
    {
      "dt": 1690666860,
      "precipitation": 0
    },
    {
      "dt": 1690666920,
      "precipitation": 0
    },
    {
      "dt": 1690666980,
      "precipitation": 0
    },
    {
      "dt": 1690667040,
      "precipitation": 0
    },
    {
      "dt": 1690667100,
      "precipitation": 0
    },
    {
      "dt": 1690667160,
      "precipitation": 0
    },
    {
      "dt": 1690667220,
      "precipitation": 0
    },
    {
      "dt": 1690667280,
      "precipitation": 0
    },
    {
      "dt": 1690667340,
      "precipitation": 0
    },
    {
      "dt": 1690667400,
      "precipitation": 0
    },
    {
      "dt": 1690667460,
      "precipitation": 0
    },
    {
      "dt": 1690667520,
      "precipitation": 0
    },
    {
      "dt": 1690667580,
      "precipitation": 0
    },
    {
      "dt": 1690667640,
      "precipitation": 0
    },
    {
      "dt": 1690667700,
      "precipitation": 0
    },
    {
      "dt": 1690667760,
      "precipitation": 0
    },
    {
      "dt": 1690667820,
      "precipitation": 0
    },
    {
      "dt": 1690667880,
      "precipitation": 0
    },
    {
      "dt": 1690667940,
      "precipitation": 0
    },
    {
      "dt": 1690668000,
      "precipitation": 0
    },
    {
      "dt": 1690668060,
      "precipitation": 0
    },
    {
      "dt": 1690668120,
      "precipitation": 0
    }
  ],
  "hourly": [
    {
      "dt": 1690664400,
      "temp": 89.98,
      "feels_like": 96.44,
      "pressure": 1005,
      "humidity": 54,
      "dew_point": 71.1,
      "uvi": 2.23,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 19.64,
      "wind_deg": 239,
      "wind_gust": 28.3,
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
      "dt": 1690668000,
      "temp": 88.79,
      "feels_like": 95.43,
      "pressure": 1005,
      "humidity": 57,
      "dew_point": 71.6,
      "uvi": 0.66,
      "clouds": 6,
      "visibility": 4815,
      "wind_speed": 26.19,
      "wind_deg": 244,
      "wind_gust": 34.16,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "pop": 0.62
    },
    {
      "dt": 1690671600,
      "temp": 85.75,
      "feels_like": 92.07,
      "pressure": 1005,
      "humidity": 64,
      "dew_point": 72.16,
      "uvi": 0.18,
      "clouds": 17,
      "visibility": 10000,
      "wind_speed": 10.76,
      "wind_deg": 236,
      "wind_gust": 21.97,
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "pop": 0.8
    },
    {
      "dt": 1690675200,
      "temp": 83.97,
      "feels_like": 89.46,
      "pressure": 1006,
      "humidity": 67,
      "dew_point": 71.83,
      "uvi": 0,
      "clouds": 26,
      "visibility": 10000,
      "wind_speed": 9.57,
      "wind_deg": 245,
      "wind_gust": 17.83,
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "pop": 0.8
    },
    {
      "dt": 1690678800,
      "temp": 81.25,
      "feels_like": 85.42,
      "pressure": 1006,
      "humidity": 72,
      "dew_point": 71.37,
      "uvi": 0,
      "clouds": 42,
      "visibility": 10000,
      "wind_speed": 10.76,
      "wind_deg": 274,
      "wind_gust": 17.72,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "pop": 0.32,
      "rain": {
        "1h": 0.12
      }
    },
    {
      "dt": 1690682400,
      "temp": 77.14,
      "feels_like": 78.04,
      "pressure": 1007,
      "humidity": 74,
      "dew_point": 68.38,
      "uvi": 0,
      "clouds": 39,
      "visibility": 10000,
      "wind_speed": 13.6,
      "wind_deg": 295,
      "wind_gust": 21.34,
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "pop": 0.17
    },
    {
      "dt": 1690686000,
      "temp": 72.79,
      "feels_like": 73.2,
      "pressure": 1009,
      "humidity": 73,
      "dew_point": 63.5,
      "uvi": 0,
      "clouds": 28,
      "visibility": 10000,
      "wind_speed": 15.84,
      "wind_deg": 325,
      "wind_gust": 23.4,
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "pop": 0.1
    },
    {
      "dt": 1690689600,
      "temp": 71.96,
      "feels_like": 72.1,
      "pressure": 1009,
      "humidity": 69,
      "dew_point": 61.21,
      "uvi": 0,
      "clouds": 40,
      "visibility": 10000,
      "wind_speed": 13.6,
      "wind_deg": 340,
      "wind_gust": 20.15,
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "pop": 0.02
    },
    {
      "dt": 1690693200,
      "temp": 70.72,
      "feels_like": 70.68,
      "pressure": 1010,
      "humidity": 68,
      "dew_point": 60.01,
      "uvi": 0,
      "clouds": 46,
      "visibility": 10000,
      "wind_speed": 14.07,
      "wind_deg": 332,
      "wind_gust": 21.99,
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "pop": 0.02
    },
    {
      "dt": 1690696800,
      "temp": 69.04,
      "feels_like": 68.79,
      "pressure": 1010,
      "humidity": 67,
      "dew_point": 57.52,
      "uvi": 0,
      "clouds": 39,
      "visibility": 10000,
      "wind_speed": 13.87,
      "wind_deg": 332,
      "wind_gust": 22.41,
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "pop": 0.01
    },
    {
      "dt": 1690700400,
      "temp": 68.09,
      "feels_like": 67.6,
      "pressure": 1010,
      "humidity": 64,
      "dew_point": 55.49,
      "uvi": 0,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 13.13,
      "wind_deg": 334,
      "wind_gust": 22.44,
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
      "dt": 1690704000,
      "temp": 66.87,
      "feels_like": 66.25,
      "pressure": 1011,
      "humidity": 64,
      "dew_point": 54.14,
      "uvi": 0,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 12.77,
      "wind_deg": 336,
      "wind_gust": 21.12,
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
      "dt": 1690707600,
      "temp": 65.8,
      "feels_like": 65.05,
      "pressure": 1011,
      "humidity": 63,
      "dew_point": 52.97,
      "uvi": 0,
      "clouds": 1,
      "visibility": 10000,
      "wind_speed": 11.16,
      "wind_deg": 341,
      "wind_gust": 18.57,
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
      "dt": 1690711200,
      "temp": 65.68,
      "feels_like": 64.76,
      "pressure": 1012,
      "humidity": 60,
      "dew_point": 51.44,
      "uvi": 0,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 9.4,
      "wind_deg": 344,
      "wind_gust": 19.57,
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
      "dt": 1690714800,
      "temp": 66.65,
      "feels_like": 65.5,
      "pressure": 1013,
      "humidity": 53,
      "dew_point": 49.23,
      "uvi": 0.36,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 8.01,
      "wind_deg": 340,
      "wind_gust": 15.9,
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
      "dt": 1690718400,
      "temp": 68.74,
      "feels_like": 67.51,
      "pressure": 1014,
      "humidity": 47,
      "dew_point": 47.75,
      "uvi": 1.2,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 7.74,
      "wind_deg": 340,
      "wind_gust": 13.06,
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
      "dt": 1690722000,
      "temp": 71.2,
      "feels_like": 70,
      "pressure": 1014,
      "humidity": 42,
      "dew_point": 46.8,
      "uvi": 2.67,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 7.65,
      "wind_deg": 344,
      "wind_gust": 11.7,
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
      "dt": 1690725600,
      "temp": 73.67,
      "feels_like": 72.48,
      "pressure": 1014,
      "humidity": 37,
      "dew_point": 46.02,
      "uvi": 4.7,
      "clouds": 12,
      "visibility": 10000,
      "wind_speed": 7.05,
      "wind_deg": 341,
      "wind_gust": 10.63,
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
      "dt": 1690729200,
      "temp": 76.37,
      "feels_like": 75.31,
      "pressure": 1014,
      "humidity": 34,
      "dew_point": 46.24,
      "uvi": 6.75,
      "clouds": 9,
      "visibility": 10000,
      "wind_speed": 7.47,
      "wind_deg": 323,
      "wind_gust": 11.65,
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
      "dt": 1690732800,
      "temp": 78.55,
      "feels_like": 77.79,
      "pressure": 1014,
      "humidity": 36,
      "dew_point": 49.23,
      "uvi": 8.16,
      "clouds": 7,
      "visibility": 10000,
      "wind_speed": 9.19,
      "wind_deg": 319,
      "wind_gust": 13.04,
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
      "dt": 1690736400,
      "temp": 80.76,
      "feels_like": 79.88,
      "pressure": 1013,
      "humidity": 33,
      "dew_point": 48.79,
      "uvi": 8.65,
      "clouds": 8,
      "visibility": 10000,
      "wind_speed": 11.23,
      "wind_deg": 321,
      "wind_gust": 14.29,
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
      "dt": 1690740000,
      "temp": 81.97,
      "feels_like": 80.38,
      "pressure": 1013,
      "humidity": 29,
      "dew_point": 46.8,
      "uvi": 8,
      "clouds": 7,
      "visibility": 10000,
      "wind_speed": 13.04,
      "wind_deg": 323,
      "wind_gust": 15.19,
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
      "dt": 1690743600,
      "temp": 83.03,
      "feels_like": 81,
      "pressure": 1012,
      "humidity": 27,
      "dew_point": 45.45,
      "uvi": 6.4,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 11.07,
      "wind_deg": 322,
      "wind_gust": 14.7,
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
      "dt": 1690747200,
      "temp": 83.79,
      "feels_like": 81.41,
      "pressure": 1012,
      "humidity": 25,
      "dew_point": 44.67,
      "uvi": 4.35,
      "clouds": 1,
      "visibility": 10000,
      "wind_speed": 12.12,
      "wind_deg": 326,
      "wind_gust": 15.19,
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
      "dt": 1690750800,
      "temp": 83.35,
      "feels_like": 81.09,
      "pressure": 1012,
      "humidity": 25,
      "dew_point": 44.31,
      "uvi": 2.41,
      "clouds": 2,
      "visibility": 10000,
      "wind_speed": 13.42,
      "wind_deg": 332,
      "wind_gust": 15.55,
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
      "dt": 1690754400,
      "temp": 82.47,
      "feels_like": 80.6,
      "pressure": 1013,
      "humidity": 27,
      "dew_point": 44.67,
      "uvi": 1.04,
      "clouds": 1,
      "visibility": 10000,
      "wind_speed": 12.57,
      "wind_deg": 340,
      "wind_gust": 15.55,
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
      "dt": 1690758000,
      "temp": 81.16,
      "feels_like": 79.77,
      "pressure": 1013,
      "humidity": 28,
      "dew_point": 44.78,
      "uvi": 0.28,
      "clouds": 2,
      "visibility": 10000,
      "wind_speed": 11.74,
      "wind_deg": 346,
      "wind_gust": 14.38,
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
      "dt": 1690761600,
      "temp": 79.61,
      "feels_like": 79.61,
      "pressure": 1014,
      "humidity": 30,
      "dew_point": 45.01,
      "uvi": 0,
      "clouds": 2,
      "visibility": 10000,
      "wind_speed": 9.24,
      "wind_deg": 349,
      "wind_gust": 13.29,
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
      "dt": 1690765200,
      "temp": 78.08,
      "feels_like": 77.14,
      "pressure": 1014,
      "humidity": 33,
      "dew_point": 46.26,
      "uvi": 0,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 8.72,
      "wind_deg": 360,
      "wind_gust": 12.24,
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
      "dt": 1690768800,
      "temp": 75.76,
      "feels_like": 74.86,
      "pressure": 1014,
      "humidity": 39,
      "dew_point": 49.01,
      "uvi": 0,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 8.59,
      "wind_deg": 1,
      "wind_gust": 13.67,
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
      "dt": 1690772400,
      "temp": 74.7,
      "feels_like": 73.83,
      "pressure": 1014,
      "humidity": 42,
      "dew_point": 50.25,
      "uvi": 0,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 6.35,
      "wind_deg": 19,
      "wind_gust": 10.25,
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
      "dt": 1690776000,
      "temp": 74.21,
      "feels_like": 73.4,
      "pressure": 1014,
      "humidity": 44,
      "dew_point": 50.58,
      "uvi": 0,
      "clouds": 1,
      "visibility": 10000,
      "wind_speed": 4.79,
      "wind_deg": 15,
      "wind_gust": 7.43,
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
      "dt": 1690779600,
      "temp": 73.54,
      "feels_like": 72.66,
      "pressure": 1014,
      "humidity": 44,
      "dew_point": 50.43,
      "uvi": 0,
      "clouds": 1,
      "visibility": 10000,
      "wind_speed": 4.68,
      "wind_deg": 31,
      "wind_gust": 7.23,
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
      "dt": 1690783200,
      "temp": 73.09,
      "feels_like": 72.18,
      "pressure": 1014,
      "humidity": 44,
      "dew_point": 49.93,
      "uvi": 0,
      "clouds": 18,
      "visibility": 10000,
      "wind_speed": 5.23,
      "wind_deg": 344,
      "wind_gust": 6.78,
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
      "dt": 1690786800,
      "temp": 71.94,
      "feels_like": 70.95,
      "pressure": 1014,
      "humidity": 45,
      "dew_point": 49.26,
      "uvi": 0,
      "clouds": 22,
      "visibility": 10000,
      "wind_speed": 3.96,
      "wind_deg": 333,
      "wind_gust": 6.24,
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
      "dt": 1690790400,
      "temp": 71.19,
      "feels_like": 70.07,
      "pressure": 1014,
      "humidity": 44,
      "dew_point": 48.07,
      "uvi": 0,
      "clouds": 35,
      "visibility": 10000,
      "wind_speed": 4.47,
      "wind_deg": 333,
      "wind_gust": 7.16,
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1690794000,
      "temp": 71.19,
      "feels_like": 69.98,
      "pressure": 1014,
      "humidity": 42,
      "dew_point": 47.1,
      "uvi": 0,
      "clouds": 57,
      "visibility": 10000,
      "wind_speed": 5.97,
      "wind_deg": 323,
      "wind_gust": 8.61,
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1690797600,
      "temp": 70.61,
      "feels_like": 69.44,
      "pressure": 1015,
      "humidity": 44,
      "dew_point": 47.37,
      "uvi": 0,
      "clouds": 67,
      "visibility": 10000,
      "wind_speed": 6.93,
      "wind_deg": 326,
      "wind_gust": 10.36,
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
      "dt": 1690801200,
      "temp": 70.34,
      "feels_like": 69.19,
      "pressure": 1015,
      "humidity": 45,
      "dew_point": 48.09,
      "uvi": 0.33,
      "clouds": 69,
      "visibility": 10000,
      "wind_speed": 6.46,
      "wind_deg": 327,
      "wind_gust": 10.18,
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
      "dt": 1690804800,
      "temp": 72.1,
      "feels_like": 70.9,
      "pressure": 1015,
      "humidity": 40,
      "dew_point": 46.71,
      "uvi": 1.1,
      "clouds": 60,
      "visibility": 10000,
      "wind_speed": 7.85,
      "wind_deg": 332,
      "wind_gust": 11.45,
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
      "dt": 1690808400,
      "temp": 74.44,
      "feels_like": 73.18,
      "pressure": 1016,
      "humidity": 34,
      "dew_point": 44.58,
      "uvi": 2.54,
      "clouds": 11,
      "visibility": 10000,
      "wind_speed": 7.47,
      "wind_deg": 334,
      "wind_gust": 10.6,
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
      "dt": 1690812000,
      "temp": 77.07,
      "feels_like": 75.88,
      "pressure": 1016,
      "humidity": 30,
      "dew_point": 43.66,
      "uvi": 4.47,
      "clouds": 7,
      "visibility": 10000,
      "wind_speed": 7.45,
      "wind_deg": 344,
      "wind_gust": 9.73,
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
      "dt": 1690815600,
      "temp": 79.7,
      "feels_like": 79.7,
      "pressure": 1016,
      "humidity": 27,
      "dew_point": 42.57,
      "uvi": 6.44,
      "clouds": 5,
      "visibility": 10000,
      "wind_speed": 6.73,
      "wind_deg": 349,
      "wind_gust": 8.81,
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
      "dt": 1690819200,
      "temp": 81.63,
      "feels_like": 79.88,
      "pressure": 1015,
      "humidity": 25,
      "dew_point": 42.12,
      "uvi": 7.71,
      "clouds": 4,
      "visibility": 10000,
      "wind_speed": 6.2,
      "wind_deg": 336,
      "wind_gust": 9.01,
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
      "dt": 1690822800,
      "temp": 83.5,
      "feels_like": 81.07,
      "pressure": 1015,
      "humidity": 23,
      "dew_point": 41.76,
      "uvi": 8.18,
      "clouds": 3,
      "visibility": 10000,
      "wind_speed": 5.64,
      "wind_deg": 323,
      "wind_gust": 8.14,
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
      "dt": 1690826400,
      "temp": 84.69,
      "feels_like": 81.9,
      "pressure": 1014,
      "humidity": 22,
      "dew_point": 41.97,
      "uvi": 7.57,
      "clouds": 2,
      "visibility": 10000,
      "wind_speed": 5.61,
      "wind_deg": 311,
      "wind_gust": 7.92,
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
      "dt": 1690830000,
      "temp": 85.19,
      "feels_like": 82.29,
      "pressure": 1014,
      "humidity": 22,
      "dew_point": 42.84,
      "uvi": 5.94,
      "clouds": 1,
      "visibility": 10000,
      "wind_speed": 6.15,
      "wind_deg": 304,
      "wind_gust": 8.21,
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
      "dt": 1690833600,
      "temp": 85.28,
      "feels_like": 82.44,
      "pressure": 1014,
      "humidity": 23,
      "dew_point": 43.77,
      "uvi": 4.03,
      "clouds": 2,
      "visibility": 10000,
      "wind_speed": 5.5,
      "wind_deg": 293,
      "wind_gust": 8.25,
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
      "dt": 1690650000,
      "sunrise": 1690624154,
      "sunset": 1690676115,
      "moonrise": 1690667940,
      "moonset": 1690609680,
      "moon_phase": 0.38,
      "summary": "Expect a day of partly cloudy with rain",
      "temp": {
        "day": 90.32,
        "min": 72.79,
        "max": 91.69,
        "night": 72.79,
        "eve": 85.75,
        "morn": 76.91
      },
      "feels_like": {
        "day": 93.43,
        "night": 73.2,
        "eve": 92.07,
        "morn": 77.97
      },
      "pressure": 1007,
      "humidity": 46,
      "dew_point": 66.74,
      "wind_speed": 26.19,
      "wind_deg": 244,
      "wind_gust": 34.16,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "clouds": 62,
      "pop": 0.8,
      "rain": 1.84,
      "uvi": 9.25
    },
    {
      "dt": 1690736400,
      "sunrise": 1690710611,
      "sunset": 1690762455,
      "moonrise": 1690758300,
      "moonset": 1690699440,
      "moon_phase": 0.42,
      "summary": "Expect a day of partly cloudy with clear spells",
      "temp": {
        "day": 80.76,
        "min": 65.68,
        "max": 83.79,
        "night": 74.7,
        "eve": 81.16,
        "morn": 66.65
      },
      "feels_like": {
        "day": 79.88,
        "night": 73.83,
        "eve": 79.77,
        "morn": 65.5
      },
      "pressure": 1013,
      "humidity": 33,
      "dew_point": 48.79,
      "wind_speed": 14.07,
      "wind_deg": 332,
      "wind_gust": 22.44,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": 8,
      "pop": 0.02,
      "uvi": 8.65
    },
    {
      "dt": 1690822800,
      "sunrise": 1690797068,
      "sunset": 1690848794,
      "moonrise": 1690847940,
      "moonset": 1690789980,
      "moon_phase": 0.46,
      "summary": "Expect a day of partly cloudy with clear spells",
      "temp": {
        "day": 83.5,
        "min": 70.34,
        "max": 85.28,
        "night": 76.77,
        "eve": 82.27,
        "morn": 70.34
      },
      "feels_like": {
        "day": 81.07,
        "night": 76.12,
        "eve": 81.03,
        "morn": 69.19
      },
      "pressure": 1015,
      "humidity": 23,
      "dew_point": 41.76,
      "wind_speed": 9.37,
      "wind_deg": 2,
      "wind_gust": 11.99,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": 3,
      "pop": 0.12,
      "uvi": 8.18
    },
    {
      "dt": 1690909200,
      "sunrise": 1690883526,
      "sunset": 1690935131,
      "moonrise": 1690936980,
      "moonset": 1690881120,
      "moon_phase": 0.5,
      "summary": "You can expect partly cloudy in the morning, with rain in the afternoon",
      "temp": {
        "day": 83.7,
        "min": 69.17,
        "max": 83.7,
        "night": 69.6,
        "eve": 69.17,
        "morn": 69.28
      },
      "feels_like": {
        "day": 81.77,
        "night": 69.6,
        "eve": 69.17,
        "morn": 68.54
      },
      "pressure": 1016,
      "humidity": 30,
      "dew_point": 49.15,
      "wind_speed": 17.56,
      "wind_deg": 264,
      "wind_gust": 21.52,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "clouds": 30,
      "pop": 1,
      "rain": 9.58,
      "uvi": 7.33
    },
    {
      "dt": 1690995600,
      "sunrise": 1690969984,
      "sunset": 1691021467,
      "moonrise": 1691025480,
      "moonset": 1690972500,
      "moon_phase": 0.54,
      "summary": "Expect a day of partly cloudy with rain",
      "temp": {
        "day": 75.96,
        "min": 63.84,
        "max": 75.96,
        "night": 72.01,
        "eve": 73.06,
        "morn": 65.84
      },
      "feels_like": {
        "day": 75.27,
        "night": 71.46,
        "eve": 72.46,
        "morn": 65.52
      },
      "pressure": 1020,
      "humidity": 43,
      "dew_point": 52.12,
      "wind_speed": 11.86,
      "wind_deg": 50,
      "wind_gust": 14.58,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": 22,
      "pop": 0.87,
      "rain": 0.48,
      "uvi": 6.64
    },
    {
      "dt": 1691082000,
      "sunrise": 1691056442,
      "sunset": 1691107801,
      "moonrise": 1691113620,
      "moonset": 1691063820,
      "moon_phase": 0.57,
      "summary": "Expect a day of partly cloudy with rain",
      "temp": {
        "day": 79.63,
        "min": 68.74,
        "max": 79.63,
        "night": 73.67,
        "eve": 75.22,
        "morn": 70.16
      },
      "feels_like": {
        "day": 79.63,
        "night": 73.51,
        "eve": 74.93,
        "morn": 69.69
      },
      "pressure": 1019,
      "humidity": 39,
      "dew_point": 52.54,
      "wind_speed": 13.76,
      "wind_deg": 176,
      "wind_gust": 17.98,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": 90,
      "pop": 0.2,
      "rain": 0.12,
      "uvi": 0.95
    },
    {
      "dt": 1691168400,
      "sunrise": 1691142901,
      "sunset": 1691194134,
      "moonrise": 1691201580,
      "moonset": 1691154900,
      "moon_phase": 0.61,
      "summary": "There will be partly cloudy until morning, then rain",
      "temp": {
        "day": 78.67,
        "min": 70.63,
        "max": 78.67,
        "night": 70.63,
        "eve": 71.15,
        "morn": 75.79
      },
      "feels_like": {
        "day": 79.48,
        "night": 71.76,
        "eve": 72.25,
        "morn": 76.32
      },
      "pressure": 1012,
      "humidity": 69,
      "dew_point": 67.46,
      "wind_speed": 23.38,
      "wind_deg": 169,
      "wind_gust": 42.86,
      "weather": [
        {
          "id": 502,
          "main": "Rain",
          "description": "heavy intensity rain",
          "icon": "10d"
        }
      ],
      "clouds": 100,
      "pop": 1,
      "rain": 39.28,
      "uvi": 1
    },
    {
      "dt": 1691254800,
      "sunrise": 1691229360,
      "sunset": 1691280465,
      "moonrise": 1691289420,
      "moonset": 1691245800,
      "moon_phase": 0.65,
      "summary": "Expect a day of partly cloudy with rain",
      "temp": {
        "day": 86.11,
        "min": 69.35,
        "max": 86.11,
        "night": 72.99,
        "eve": 79.3,
        "morn": 71.56
      },
      "feels_like": {
        "day": 85.15,
        "night": 72.25,
        "eve": 79.3,
        "morn": 72.18
      },
      "pressure": 1009,
      "humidity": 38,
      "dew_point": 57.65,
      "wind_speed": 14.79,
      "wind_deg": 318,
      "wind_gust": 24.2,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": 2,
      "pop": 1,
      "rain": 1.84,
      "uvi": 1
    }
  ]
}
*/

export default mockForecastData;
