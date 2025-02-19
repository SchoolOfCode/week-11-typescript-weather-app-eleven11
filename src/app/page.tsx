import WeatherResult from "./Components/WeatherResult";
import WeatherSearch from "./Components/WeatherSearch";

export default function Home() {
  return (
    <div>
      <main className="flex-grow container mx-auto px-4">
        <WeatherSearch className="py-11" />
        <WeatherResult />
      </main>
    </div>
  );
}
