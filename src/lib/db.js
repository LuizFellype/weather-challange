export const getCityWeather = async ({ lat, lon, name }) => {
  const weather = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.WEATHER_API_KEY}`).then((res) =>
    res.json()
  )

  return { ...weather, name };
};


const Joinville = { lat: -26.2633205, lon: -49.1276891, name: 'Joinville' }
const SanFrancisco = { lat: 37.7575973, lon: -122.5934875, name: 'San Francisco' }
const Urubici = { lat: -28.0046466, lon: -49.6054824, name: 'Urubici' }

export const getAllCitiesWeather = async () => {
  try {
    const allCitiesWeather = await Promise.all([getCityWeather(Joinville), getCityWeather(SanFrancisco), getCityWeather(Urubici)])
    
    return allCitiesWeather;

  } catch (e) {
    console.error('error getting weather data:', e)
    return [];
  }
};
