import { TEMPERATURE_COLOR } from "@/utils/constants"

const getTemperatureColorCode = (temp) => {
  const isBiggerThan5 = temp > 5
  const isBiggerThan25 = temp > 25

  if (isBiggerThan25) return TEMPERATURE_COLOR.red
  if (isBiggerThan5) return TEMPERATURE_COLOR.orange

  return TEMPERATURE_COLOR.blue
}

export const normalizeWeatherData = ({ data: {
  name,
  current: { temp, pressure, humidity }
} }) => ({
  name,
  temp,
  temp: `${temp} °C`,
  pressure,
  humidity: `${humidity}%`,
  tempColorCode: getTemperatureColorCode(temp)
})