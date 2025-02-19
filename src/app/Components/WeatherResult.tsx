"use client";
import type React from "react";

// Define an interface that specifies shape of the props that the WeatherResult component expects
// Classname prop is OPTIONAL
interface WeatherCondition {
  text: string;
  icon: string;
  code: number;
}

interface CurrentWeather {
  temp_c: number;
  condition: WeatherCondition;
}

interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: CurrentWeather;
}

interface WeatherResultProps {
  className?: string;
  currentWeather: WeatherData | null; // Allow null for initial state
}

// Define functional component using function syntax and pass in the WeatherResultProps interface
// ClassName prop used within JSX to dynamically apply css classes to the div element
export default function WeatherResult({
  className,
  currentWeather,
}: WeatherResultProps) {
  if (!currentWeather) {
    return <div className={`weather-result ${className}`}>Loading...</div>;
  }

  const { temp_c, condition } = currentWeather.current;

  return (
    <div className={`weather-result ${className}`}>
      <h2 className="text-2x1 font-semibold">Weather Result</h2>
      <div className="weather-grid">
        <div>
          <p>Temperature: {temp_c}°C</p>
          <p>Condition: {condition.text}</p>
          <img src={condition.icon} alt={condition.text} />
        </div>
      </div>
    </div>
  );
}
