export const getCityWeather = async ({ lat, lon, name }) => {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.WEATHER_API_KEY}`
    
    const weather = await fetch(url).then((res) => res.json())

    return { ...weather, name };
};
