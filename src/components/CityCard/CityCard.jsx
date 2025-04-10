import * as React from "react";
import { normalizeWeatherData } from "./helpers/normalizeWeatherData";
import { WeatherInfo } from "../WeatherInfo";

const CityCard = ({ 
  name,
  temp,
  pressure,
  humidity,
  tempColorCode
}) => {
  return (
    <div className="m-2 items-center flex flex-col md:flex-row md:justify-center cursor-default">
      <div className="w-60 transition duration-500 ease-in-out transform bg-white rounded-lg hover:scale-105 cursor-pointer border flex flex-col justify-center items-center text-center p-6">
        <div className="text-md flex flex-col text-gray-900 mb-2">
          <span className="uppercase font-bold">{name}</span>
        </div>

        <div className="flex gap-1">
          <WeatherInfo label="Temp" value={temp} className={tempColorCode} />
          <WeatherInfo label="Pressure" value={pressure} />
          <WeatherInfo label="Hum" value={humidity} />
        </div>
      </div>
    </div>
  )
};

const CityCardWrapper = (props) => {
  const data = normalizeWeatherData(props)

  return <CityCard {...data} />
};

export default CityCardWrapper
