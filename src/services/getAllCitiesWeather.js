import { CITY } from "@/utils/constants";
import { getCityWeather } from "@/utils/getCityWeather";

export const getAllCitiesWeather = async () => {
  try {
    const citiesWeatherData = [
      getCityWeather(CITY.Joinville),
      getCityWeather(CITY.SanFrancisco), 
      getCityWeather(CITY.Urubici)
    ]

    const allCitiesWeather = await Promise.all(citiesWeatherData)

    return allCitiesWeather;

  } catch (e) {
    console.error('error getting weather data:', e)
    return [];
  }
};
