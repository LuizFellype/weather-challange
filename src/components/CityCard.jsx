import * as React from "react";

const WeatherInfo = ({ label, value, className = '' }) => {
  return (
    <div className={`flex flex-col items-center p-1 rounded-lg ${className}`}>
      <span className="text-xs text-gray-900">{label}</span>
      <span className="text-base font-bold text-gray-900">{value}</span>
    </div>
  )
}

const blue = 'bg-sky-500/20'
const orange = 'bg-orange-500/20'
const red = 'bg-red-500/20'
const getTemperatureColorCode = (temp) => {
  const isBiggerThan5 = temp > 5
  const isBiggerThan25 = temp > 25

  if (isBiggerThan25) return red
  if (isBiggerThan5) return orange

  return blue
}

const normalizeDataToParams = ({ data: {
  timezone,
  current: { temp, pressure, humidity }
} }) => ({
  timezone,
  temp,
  temp: `${temp} °C`,
  pressure,
  humidity: `${humidity}%`,
  tempColorCode: getTemperatureColorCode(temp)
})

const CityCard = ({ 
  timezone,
  temp,
  pressure,
  humidity,
  tempColorCode
}) => {
  return (
    <div className="m-2 items-center flex flex-col md:flex-row md:justify-center cursor-default">
      <div className="w-60 transition duration-500 ease-in-out transform bg-white rounded-lg hover:scale-105 cursor-pointer border flex flex-col justify-center items-center text-center p-6">
        <div className="text-md flex flex-col text-gray-900">
          <span className="uppercase font-bold">{timezone}</span>
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
  const data = normalizeDataToParams(props)

  return <CityCard {...data} />
};

export default CityCardWrapper
