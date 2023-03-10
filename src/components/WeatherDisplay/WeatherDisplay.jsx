import { useSelector } from "react-redux";
import WeatherIcon from "./WeatherIcon/WeatherIcon";
import "../WeatherDisplay/weatherDisplay.scss";
import WeatherClock from "./WeatherClock/WeatherClock";
import {
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import minTemp from  "../../assets/weatherIcons/3d weather icons/star/cold-temp.png"
import maxTemp from "../../assets/weatherIcons/3d weather icons/star/hot.temp.png"


const WeatherDisplay = () => {
  const weather = useSelector((state) => state.weather.weather);
  const status = useSelector((state) => state.weather.status);
  const error = useSelector((state) => state.weather.error);

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const date = new Date();
  const dateFormated = date.toLocaleDateString("en-US", options);

  if (status === "loading") {
    return <span class="loader"></span>;
  }

  if (status === "failed" && !error.payload) {
    return <p>City not found</p>;
  }
  if (status === "succeeded" && weather?.main) {
    return (
      <div className="weather-display-container">
        <span>
          <p className="date-text">{dateFormated}</p>
          <WeatherClock weatherData={weather} />
        </span>

        <div className="weather-theme">
          <WeatherIcon weather={weather} />
          <div className="text-container">
            {weather?.weather?.[0]?.description && (
              <p className="weather-description-box">
                {weather.weather[0].description.charAt(0).toUpperCase() +
                  weather.weather[0].description.slice(1)}
              </p>
            )}
            <p className="location-box">
              {weather?.name}, {weather?.sys?.country}
            </p>
          </div>
        </div>
        <div className="temperature-box">{weather?.main?.temp && <p> {weather.main.temp}ºC</p>}</div>
                  <div className="min-max-temperature-box">
        {weather?.main?.temp_min && (
          <p className="min-tempearure"> <img src={minTemp} className="min-temp-icon"/>Min: {weather.main.temp_min}ºC</p>
        )}
        {weather?.main?.temp_max && (
          <p className="max-temperature"><img src={maxTemp} className="max-temp-icon"/>Max: {weather.main.temp_max}ºC</p>
        )}
          </div>

      </div>
    );
  }

  return null;
};

export default WeatherDisplay;
