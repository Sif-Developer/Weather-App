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
import "./WeatherIcon.css";

const WeatherIcon = ({ weather }) => {
  let icon = null;
  const { id } = weather.weather[0];
  let { description } = weather.weather[0];
  const lowercaseDescription = description.toLowerCase();

  let iconClass = "";
  if (id >= 200 && id <= 232) {
    iconClass = "rain-icon";
    icon = (
      <FontAwesomeIcon
        icon={faRainbow}
        size="10x"
        className={`icon-css ${iconClass}`}
      />
    );
  } else if (id >= 300 && id <= 321) {
    iconClass = "cloud-rain-icon";
    icon = (
      <FontAwesomeIcon
        icon={faCloudSunRain}
        size="10x"
        className={`icon-css ${iconClass}`}
      />
    );
  } else if (id >= 500 && id <= 531) {
    iconClass = "heavy-rain-icon";
    icon = (
      <FontAwesomeIcon
        icon={faCloudSunRain}
        size="10x"
        className={`icon-css ${iconClass}`}
      />
    );
  } else if (id >= 600 && id <= 622) {
    iconClass = "snow-icon";
    icon = (
      <FontAwesomeIcon
        icon={faSnowflake}
        size="10x"
        className={`icon-css ${iconClass}`}
      />
    );
  } else if (id >= 700 && id <= 781) {
    if (lowercaseDescription.includes("fog")) {
      iconClass = "fog-icon";
      icon = (
        <FontAwesomeIcon
          icon={faSmog}
          size="10x"
          className={`icon-css ${iconClass}`}
        />
      );
    } else if (lowercaseDescription.includes("mist")) {
      iconClass = "mist-icon";
      icon = (
        <FontAwesomeIcon
          icon={faSmog}
          size="10x"
          className={`icon-css ${iconClass}`}
        />
      );
    } else if (lowercaseDescription.includes("smoke")) {
      iconClass = "smoke-icon";
      icon = (
        <FontAwesomeIcon
          icon={faSmog}
          size="10x"
          className={`icon-css ${iconClass}`}
        />
      );
    } else if (lowercaseDescription.includes("haze")) {
      iconClass = "haze-icon";
      icon = (
        <FontAwesomeIcon
          icon={faSmog}
          size="10x"
          className={`icon-css ${iconClass}`}
        />
      );
    } else if (lowercaseDescription.includes("sand")) {
      iconClass = "sand-icon";
      icon = (
        <FontAwesomeIcon
          icon={faSmog}
          size="10x"
          className={`icon-css ${iconClass}`}
        />
      );
    } else if (lowercaseDescription.includes("dust")) {
      iconClass = "dust-icon";
      icon = (
        <FontAwesomeIcon
          icon={faSmog}
          size="10x"
          className={`icon-css ${iconClass}`}
        />
      );
    } else if (lowercaseDescription.includes("ash")) {
      iconClass = "ash-icon";
      icon = (
        <FontAwesomeIcon
          icon={faSmog}
          size="10x"
          className={`icon-css ${iconClass}`}
        />
      );
    } else if (lowercaseDescription.includes("squall")) {
      iconClass = "squall-icon";
      icon = (
        <FontAwesomeIcon
          icon={faRainbow}
          size="10x"
          className={`icon-css ${iconClass}`}
        />
      );
    } else if (lowercaseDescription.includes("tornado")) {
      iconClass = "tornado-icon";
      icon = (
        <FontAwesomeIcon
          icon={faWind}
          size="10x"
          className={`icon-css ${iconClass}`}
        />
      );
    }
  } else if (id === 800) {
    if (lowercaseDescription.includes("clear sky")) {
      iconClass = "clear-sky-icon";
      icon = (
        <FontAwesomeIcon
          icon={faSun}
          size="10x"
          className={`icon-css ${iconClass}`}
        />
      );
    }
  } else if (id >= 801 && id <= 8010) {
    if (lowercaseDescription.includes("few clouds")) {
      iconClass = "few-clouds-icon";
      icon = (
        <FontAwesomeIcon
          icon={faCloudSun}
          size="10x"
          className={`icon-css ${iconClass}`}
        />
      );
    } else if (lowercaseDescription.includes("scattered clouds")) {
      iconClass = "scattered-clouds-icon";
      icon = (
        <FontAwesomeIcon
          icon={faCloudSun}
          size="10x"
          className={`icon-css ${iconClass}`}
        />
      );
    } else if (lowercaseDescription.includes("broken clouds")) {
      iconClass = "broken-clouds-icon";
      icon = (
        <FontAwesomeIcon
          icon={faCloudSun}
          size="10x"
          className={`icon-css ${iconClass}`}
        />
      );
    } else if (lowercaseDescription.includes("overcast clouds")) {
      iconClass = "overcast-clouds-icon";
      icon = (
        <FontAwesomeIcon
          icon={faCloudMoonRain}
          size="10x"
          className={`icon-css ${iconClass}`}
        />
      );
    }
  } else {
    iconClass = "cloud-moon-icon";
    icon = (
      <FontAwesomeIcon
        icon={faCloudMoon}
        size="10x"
        className={`icon-css ${iconClass}`}
      />
    );
  }

  return icon;
};

export default WeatherIcon;
