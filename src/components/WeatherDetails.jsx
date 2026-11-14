
function WeatherDetails({ current }) {

  return (
    <div className="details-grid">

      <div className="detail-box">
        <span>💧</span>
        <p>Humidity</p>
        <h3>{current.relative_humidity_2m}%</h3>
      </div>

      <div className="detail-box">
        <span>💨</span>
        <p>Wind Speed</p>
        <h3>{current.wind_speed_10m} km/h</h3>
      </div>

      <div className="detail-box">
        <span>🌧️</span>
        <p>Precipitation</p>
        <h3>{current.precipitation} mm</h3>
      </div>

      <div className="detail-box">
        <span>🌡️</span>
        <p>Feels Like</p>
        <h3>{Math.round(current.apparent_temperature)}°C</h3>
      </div>

    </div>
  );
}

export default WeatherDetails;
