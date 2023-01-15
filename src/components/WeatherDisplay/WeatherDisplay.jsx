import { useSelector } from "react-redux";
import WeatherIcon from "./WeatherIcon/WeatherIcon";
import "../WeatherDisplay/weatherDisplay.css";

const WeatherDisplay = () => {
  const weather = useSelector((state) => state.weather.weather);
  const status = useSelector((state) => state.weather.status);
  const error = useSelector((state) => state.weather.error);
  const date = new Date();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed" && !error.payload) {
    return <p>City not found</p>;
  }

  if (status === "succeeded" && weather?.main) {
    return (
      <div>
        <WeatherIcon weather={weather} />
        {weather?.name && weather?.sys?.country && <p>City: {weather.name}</p>}
        {weather?.sys?.country && <p>Country Code: {weather.sys.country}</p>}
        {weather?.weather?.[0]?.description && (
          <p>Weather: {weather.weather[0].description}</p>
        )}
        {weather?.main?.pressure && <p>Pressure: {weather.main.pressure}</p>}
        {weather?.main?.humidity && <p>Humidity: {weather.main.humidity}</p>}
        {weather?.main?.temp && <p>Temperature: {weather.main.temp}</p>}
        {weather?.main?.temp_min && (
          <p>Min temperature: {weather.main.temp_min}</p>
        )}
        {weather?.main?.temp_max && (
          <p>Max temperature: {weather.main.temp_max}</p>
        )}
        <p>
          Current date:{" "}
          {date.toLocaleDateString("en-EN", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p>Forecast for next 4 days:</p>
        {console.log(weather.daily)}
        <ul>
          {weather?.daily?.slice(0, 4).map((day, index) => (
            <li key={index}>
              Day {index + 1}: {day.weather[0].description}, Min Temp:{" "}
              {day.temp.min}°C, Max Temp: {day.temp.max}°C
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
};

export default WeatherDisplay;
