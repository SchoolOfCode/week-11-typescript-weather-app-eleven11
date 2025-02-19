"use client";
import type React from "react";

interface WeatherResultProps {
  className?: string;
}

const WeatherResult: React.FC<WeatherResultProps> = ({ className }) => {
  return (
    <div className={`weather-result ${className}`}>
      <h2 className="text-2x1 font-semibold">Weather Result</h2>
      <div className="weather-grid"></div>
      <div>
        <p>Temperature: x</p>
        <p>Precipitation: y</p>
      </div>
      <div>
        <p>Wind Speed: x</p>
        <p>Conditions: y</p>
      </div>
    </div>
  );
};

export default WeatherResult;
