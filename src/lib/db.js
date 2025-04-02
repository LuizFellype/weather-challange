import { allWeathers as dbAllWeathers} from "@/mock-db/weather";

export const getCityWeather = async ({lat, lon}) => {
  const wather = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.WEATHER_API_KEY}`).then((res) =>
    res.json()
  )

  return wather;
};


export const getAllCitiesWeather = async () => {
  // const allCitiesWeather = Promise.all([getCityWeather(Joinville), getCityWeather(SanFrancisco), getCityWeather(Urubici)])
console.log('now', new Date().toLocaleString())
  return dbAllWeathers;
};
