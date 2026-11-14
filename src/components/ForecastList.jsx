
import WeatherIcon from "./WeatherIcon";

function ForecastList({ daily }) {

  return (
    <div className="forecast-section">

      <h2>5-Day Forecast</h2>

      <div className="forecast-list">

        {daily.time.map((date, index) => (

          <div className="forecast-item" key={date}>

            <p>
              {new Date(date + "T00:00:00").toLocaleDateString(
                "en-US",
                { weekday: "short" }
              )}
            </p>

            <WeatherIcon code={daily.weather_code[index]} />

            <h3>
              {Math.round(daily.temperature_2m_max[index])}°
            </h3>

            <p className="min-temp">
              {Math.round(daily.temperature_2m_min[index])}°
            </p>

            <small>
              Rain: {daily.precipitation_probability_max[index] ?? 0}%
            </small>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ForecastList;
