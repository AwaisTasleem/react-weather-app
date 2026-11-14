
const GEO_URL =
  "https://geocoding-api.open-meteo.com/v1/search";

const WEATHER_URL =
  "https://api.open-meteo.com/v1/forecast";

// Function to search for a city
export async function getCoordinates(city) {

  const params = new URLSearchParams({
    name: city,
    count: "1",
    language: "en",
    format: "json"
  });

  const response = await fetch(
    `${GEO_URL}?${params}`
  );

  if (!response.ok) {
    throw new Error("Unable to search for city.");
  }

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("City not found. Try another city.");
  }

  return data.results[0];
}


// Function to get weather information
export async function getWeather(latitude, longitude) {

  const params = new URLSearchParams({
    latitude: latitude,
    longitude: longitude,

    current:
      "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m",

    daily:
      "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max",

    forecast_days: "5",
    timezone: "auto"
  });

  const response = await fetch(
    `${WEATHER_URL}?${params}`
  );

  if (!response.ok) {
    throw new Error("Unable to fetch weather data.");
  }

  return await response.json();
}


// Main function used by React
export async function getWeatherByCity(city) {

  const location = await getCoordinates(city);

  const weather = await getWeather(
    location.latitude,
    location.longitude
  );

  return {
    location,
    weather
  };
}
