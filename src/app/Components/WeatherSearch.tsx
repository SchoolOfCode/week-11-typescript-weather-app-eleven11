import React from "react";

interface WeatherSearchProps {
  className?: string;
  search: string;
  setSearch: (query: string) => void; // function that takes a string and returns nothing
  searchFunction: (query: string) => void; // function that takes a string and returns nothing
}

export default function WeatherSearch({
  className,
  search,
  setSearch,
  searchFunction,
}: WeatherSearchProps) {
  return (
    <div className={className}>
      {/* Your WeatherSearch component content */}
      <h2 className="text-2x1 font-semibold">Weather Search</h2>
      <input
        type="text"
        placeholder="Enter city"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => searchFunction(search)}>Search</button>
    </div>
  );
}
