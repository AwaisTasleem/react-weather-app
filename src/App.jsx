
import { useState, useEffect, useCallback } from "react";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherDetails from "./components/WeatherDetails";
import ForecastList from "./components/ForecastList";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";

import { getWeatherByCity } from "./weatherService";

import "./App.css";

function App() {

  const [weatherData, setWeatherData] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  // Function to search for weather
  const handleSearch = useCallback(async (city) => {

    setLoading(true);
    setError("");

    try {

      const data = await getWeatherByCity(city);

      setWeatherData(data);

    } catch (err) {

      setError(err.message);

    } finally {

      setLoading(false);

    }

  }, []);

  // Load default city when application starts
  useEffect(() => {

    handleSearch("Mirpur");

  }, [handleSearch]);

  return (

    <div className="app-container">

      <header>
        <h1>🌤️ Weather App</h1>
        <p>Check weather conditions around the world</p>
      </header>

      <SearchBar
        onSearch={handleSearch}
        loading={loading}
      />

      {loading && <Loading />}

      {error && <ErrorMessage message={error} />}

      {weatherData && !loading && (

        <div className="weather-content">

          <WeatherCard
            location={weatherData.location}
            current={weatherData.weather.current}
          />

          <WeatherDetails
            current={weatherData.weather.current}
          />

          <ForecastList
            daily={weatherData.weather.daily}
          />

        </div>

      )}

      <footer>
        Weather data provided by Open-Meteo
      </footer>

    </div>

  );
}

export default App;
