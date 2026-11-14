
function getWeatherInfo(code) {

  if (code === 0) {
    return { icon: "☀️", description: "Clear sky" };
  }

  if (code === 1) {
    return { icon: "🌤️", description: "Mainly clear" };
  }

  if (code === 2) {
    return { icon: "⛅", description: "Partly cloudy" };
  }

  if (code === 3) {
    return { icon: "☁️", description: "Overcast" };
  }

  if (code === 45 || code === 48) {
    return { icon: "🌫️", description: "Foggy" };
  }

  if (code >= 51 && code <= 67) {
    return { icon: "🌧️", description: "Drizzle or rain" };
  }

  if (code >= 71 && code <= 77) {
    return { icon: "❄️", description: "Snow" };
  }

  if (code >= 80 && code <= 82) {
    return { icon: "🌦️", description: "Rain showers" };
  }

  if (code === 85 || code === 86) {
    return { icon: "🌨️", description: "Snow showers" };
  }

  if (code >= 95 && code <= 99) {
    return { icon: "⛈️", description: "Thunderstorm" };
  }

  return { icon: "🌡️", description: "Unknown weather" };
}


function WeatherIcon({ code, large = false }) {

  const weather = getWeatherInfo(code);

  return (
    <span className={large ? "weather-icon large" : "weather-icon"}>
      {weather.icon}
    </span>
  );
}

export { getWeatherInfo };
export default WeatherIcon;
