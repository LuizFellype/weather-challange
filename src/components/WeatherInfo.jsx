import * as React from "react";

export const WeatherInfo = ({ label, value, className = '' }) => {
  return (
    <div className={`flex flex-col items-center p-1 rounded-lg ${className}`}>
      <span className="text-xs text-gray-900">{label}</span>
      <span className="text-base font-bold text-gray-900">{value}</span>
    </div>
  )
}