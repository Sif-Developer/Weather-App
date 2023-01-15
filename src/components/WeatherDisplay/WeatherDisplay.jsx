import { useSelector } from "react-redux";
import WeatherIcon from "./WeatherIcon/WeatherIcon";
import "../WeatherDisplay/weatherDisplay.scss";
import WeatherClock from "./WeatherClock/WeatherClock";

const WeatherDisplay = () => {
  const weather = useSelector((state) => state.weather.weather);
  const status = useSelector((state) => state.weather.status);
  const error = useSelector((state) => state.weather.error);

  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };

  const date = new Date();
  const dateFormated = date.toLocaleDateString('en-US', options);


  if (status === "loading") {
    return <span class="loader"></span>
  }

  if (status === "failed" && !error.payload) {
    return <p>City not found</p>;
  }
  if (status === "succeeded" && weather?.main) {
    return (
      <div className="weather-display-container">
        <span>
        <p className="date-text" >{dateFormated}</p>
        <WeatherClock weatherData={weather} />
        </span>

        <WeatherIcon weather={weather} />
        {weather?.name && weather?.sys?.country && <p> {weather.name},</p>}
        {weather?.sys?.country && <p> {weather.sys.country}</p>}
        {weather?.main?.temp && <p> {weather.main.temp}ºC</p>}
        
        {weather?.weather?.[0]?.description && (
          <p>Weather: {weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1)}</p>
          )}

        {weather?.main?.temp_min && (
          <p>Min temperature: {weather.main.temp_min}</p>
          )}
        {weather?.main?.temp_max && (
          <p>Max temperature: {weather.main.temp_max}</p>
          )}

        {weather?.main?.pressure && <p>Pressure: {weather.main.pressure}</p>}
        {weather?.main?.humidity && <p>Humidity: {weather.main.humidity}</p>}

      </div>
    );
  }

  return null;
};

export default WeatherDisplay;
