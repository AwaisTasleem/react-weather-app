
import WeatherIcon, { getWeatherInfo } from "./WeatherIcon";

function WeatherCard({ location, current }) {

  const weatherInfo = getWeatherInfo(current.weather_code);

  return (
    <div className="weather-card">

      <div className="location">
        <h2>{location.name}</h2>
        <p>{location.country}</p>
      </div>

      <div className="main-weather">

        <WeatherIcon
          code={current.weather_code}
          large={true}
        />

        <div>
          <h1>{Math.round(current.temperature_2m)}°C</h1>
          <p>{weatherInfo.description}</p>
        </div>

      </div>

      <p className="feels-like">
        Feels like: {Math.round(current.apparent_temperature)}°C
      </p>

    </div>
  );
}

export default WeatherCard;
