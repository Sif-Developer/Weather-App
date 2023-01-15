import {
  faSun,
  faCloudSun,
  faCloudSunRain,
  faCloudMoonRain,
  faRainbow,
  faCloudMoon,
  faSnowflake,
  faSmog,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./WeatherIcon.css"

const WeatherIcon = ({ weather }) => {
  let icon;
  const { id } = weather.weather[0];
  let { description } = weather.weather[0];
  const lowercaseDescription = description.toLowerCase();

  if (id >= 200 && id <= 232) {
    icon = <FontAwesomeIcon icon={faRainbow} size="4x" />;
  } else if (id >= 300 && id <= 321) {
    icon = <FontAwesomeIcon icon={faCloudSunRain} size="4x" />;
  } else if (id >= 500 && id <= 531) {
    icon = <FontAwesomeIcon icon={faCloudSunRain} size="4x" />;
  } else if (id >= 600 && id <= 622) {
    icon = <FontAwesomeIcon icon={faSnowflake} size="4x" />;
  } else if (id >= 700 && id <= 781) {
    if (lowercaseDescription.includes("fog")) {
      icon = <FontAwesomeIcon icon={faSmog} size="4x" />;
    } else if (lowercaseDescription.includes("mist")) {
      icon = <FontAwesomeIcon icon={faSmog} size="4x" />;
    } else if (lowercaseDescription.includes("smoke")) {
      icon = <FontAwesomeIcon icon={faSmog} size="4x" />;
    } else if (lowercaseDescription.includes("haze")) {
      icon = <FontAwesomeIcon icon={faSmog} size="4x" />;
    } else if (lowercaseDescription.includes("sand")) {
      icon = <FontAwesomeIcon icon={faSmog} size="4x" />;
    } else if (lowercaseDescription.includes("dust")) {
      icon = <FontAwesomeIcon icon={faSmog} size="4x" />;
    } else if (lowercaseDescription.includes("ash")) {
      icon = <FontAwesomeIcon icon={faSmog} size="4x" />;
    } else if (lowercaseDescription.includes("squall")) {
      icon = <FontAwesomeIcon icon={faRainbow} size="4x" />;
    } else if (lowercaseDescription.includes("tornado")) {
      icon = <FontAwesomeIcon icon={faWind} size="4x" />;
    }
  } else if (id === 800) {
    if (lowercaseDescription.includes("clear sky")) {
      icon = <FontAwesomeIcon icon={faSun} size="4x" />;
    }
  } else if (id >= 801 && id <= 804) {
    if (lowercaseDescription.includes("few clouds")) {
      icon = <FontAwesomeIcon icon={faCloudSun} size="4x" />;
    } else if (lowercaseDescription.includes("scattered clouds")) {
      icon = <FontAwesomeIcon icon={faCloudSun} size="4x" />;
    } else if (lowercaseDescription.includes("broken clouds")) {
      icon = <FontAwesomeIcon icon={faCloudSun} size="4x" />;
    } else if (lowercaseDescription.includes("overcast clouds")) {
      icon = <FontAwesomeIcon icon={faCloudMoonRain} size="4x" />;
    }
  } else {
    icon = <FontAwesomeIcon icon={faCloudMoon} size="4x" />;
  }

  return icon;
};

export default WeatherIcon;
