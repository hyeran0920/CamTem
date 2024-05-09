let data = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1619827200,
      main: {
        temp: 18.26,
        feels_like: 17.93,
        temp_min: 16.99,
        temp_max: 18.26,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1015,
        humidity: 50,
        temp_kf: 0.72,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 75,
      },
      wind: {
        speed: 2.68,
        deg: 211,
        gust: 4.92,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-05-01 09:00:00",
    },
    {
      dt: 1619838000,
      main: {
        temp: 20.29,
        feels_like: 19.95,
        temp_min: 19.85,
        temp_max: 20.29,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1015,
        humidity: 40,
        temp_kf: 0.3,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 32,
      },
      wind: {
        speed: 3.25,
        deg: 237,
        gust: 5.36,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-05-01 12:00:00",
    },
    // 나머지 데이터 생략
  ],
  city: {
    id: 1835847,
    name: "Seoul",
    coord: {
      lat: 37.5667,
      lon: 126.9784,
    },
    country: "KR",
    population: 0,
    timezone: 32400,
    sunrise: 1619761627,
    sunset: 1619812087,
  },
};

export default data;
