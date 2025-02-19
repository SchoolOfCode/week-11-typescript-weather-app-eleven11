import React from "react";

interface WeatherSearchProps {
  className?: string;
}

const WeatherSearch: React.FC<WeatherSearchProps> = ({ className }) => {
  return (
    <div className={className}>
      {/* Your WeatherSearch component content */}
      <h2 className="text-2x1 font-semibold">Weather Search</h2>
      <input type="text" placeholder="Enter city" />
      <button>Search</button>
    </div>
  );
};

export default WeatherSearch;
