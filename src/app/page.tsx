"use client";
import WeatherResult from "./Components/WeatherResult";
import WeatherSearch from "./Components/WeatherSearch";
import { useState } from "react";

export default function Home() {
  // Use state here to handle search input and fetched weather data
  const [searchQuery, setSearchQuery] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  // Lift state from the WeatherSearch up to the Home component
  // Pass a function from home to search that updates search query state
  const handleSearch = async (query: string) => {
    try {
      // Make the call to our defined backend route
      const response = await fetch(`/api/request?query=${query}`);
      // Parse the JSON response
      const data = await response.json();
      // Log the data to the console
      console.log(data);
      // Store fetched data in state
      setWeatherData(data);
    } catch (error) {
      console.error(`Error fetching data:`, error);
    }
  };

  return (
    <div>
      <main className="flex-grow container mx-auto px-4">
        <WeatherSearch
          className="py-11"
          search={searchQuery}
          setSearch={setSearchQuery}
          searchFunction={handleSearch}
        />
        <WeatherResult currentWeather={weatherData} />
      </main>
    </div>
  );
}
