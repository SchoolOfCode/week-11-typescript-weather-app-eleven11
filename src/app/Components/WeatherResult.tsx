"use client";
import type React from "react";

// Define an interface that specifies shape of the props that the WeatherResult component expects
// Classname prop is OPTIONAL
interface WeatherResultProps {
  className?: string;
}

// Define functional component using React.FC and pass in the WeatherResultProps interface
// ClassName prop used within JSX to dynamically apply css classes to the div element
export default function WeatherResult({ className }: WeatherResultProps) {
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
}
