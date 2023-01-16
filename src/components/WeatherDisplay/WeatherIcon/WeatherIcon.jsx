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
import sunny from '../../../assets/weatherIcons/3d weather icons/sun/26.png';

const WeatherIcon = ({ weather }) => {
  let icon = null;
  const { id } = weather.weather[0];
  let { description } = weather.weather[0];
  const lowercaseDescription = description.toLowerCase();

  let iconClass = "";
  if (id >= 200 && id <= 232) {
    icon = (
      <FontAwesomeIcon
        icon={faRainbow}
        size="10x"
      />
    );
  } else if (id >= 300 && id <= 321) {
    icon = (
      <FontAwesomeIcon
        icon={faCloudSunRain}
        size="10x"
      />
    );
  } else if (id >= 500 && id <= 531) {
    icon = (
      <FontAwesomeIcon
        icon={faCloudSunRain}
        size="10x"
      />
    );
  } else if (id >= 600 && id <= 622) {
    icon = (
      <FontAwesomeIcon
        icon={faSnowflake}
        size="10x"
      />
    );
  } else if (id >= 700 && id <= 781) {
    if (lowercaseDescription.includes("fog")) {
      icon = (
        <FontAwesomeIcon
          icon={faSmog}
          size="10x"
        />
      );
    } else if (lowercaseDescription.includes("mist")) {
      icon = (
        <FontAwesomeIcon
          icon={faSmog}
          size="10x"
        />
      );
    } else if (lowercaseDescription.includes("smoke")) {
      icon = (
        <FontAwesomeIcon
          icon={faSmog}
          size="10x"
        />
      );
    } else if (lowercaseDescription.includes("haze")) {
      icon = (
        <FontAwesomeIcon
          icon={faSmog}
          size="10x"
        />
      );
    } else if (lowercaseDescription.includes("sand")) {
      icon = (
        <FontAwesomeIcon
          icon={faSmog}
          size="10x"
        />
      );
    } else if (lowercaseDescription.includes("dust")) {
      icon = (
        <FontAwesomeIcon
          icon={faSmog}
          size="10x"
        />
      );
    } else if (lowercaseDescription.includes("ash")) {
      icon = (
        <FontAwesomeIcon
          icon={faSmog}
          size="10x"
        />
      );
    } else if (lowercaseDescription.includes("squall")) {
      icon = (
        <FontAwesomeIcon
          icon={faRainbow}
          size="10x"
        />
      );
    } else if (lowercaseDescription.includes("tornado")) {
      icon = (
        <FontAwesomeIcon
          icon={faWind}
          size="10x"
        />
      );
    }
  } else if (id === 800) {
    if (lowercaseDescription.includes("clear sky")) {
      icon = (
        <img src={sunny} alt="Sunny weather icon" className="icon-class" />
      );
    }
  } else if (id >= 801 && id <= 8010) {
    if (lowercaseDescription.includes("few clouds")) {
      icon = (
        <FontAwesomeIcon
          icon={faCloudSun}
          size="10x"
        />
      );
    } else if (lowercaseDescription.includes("scattered clouds")) {
      icon = (
        <FontAwesomeIcon
          icon={faCloudSun}
          size="10x"
        />
      );
    } else if (lowercaseDescription.includes("broken clouds")) {
      icon = (
        <FontAwesomeIcon
          icon={faCloudSun}
          size="10x"
        />
      );
    } else if (lowercaseDescription.includes("overcast clouds")) {
      icon = (
        <FontAwesomeIcon
          icon={faCloudMoonRain}
          size="10x"
        />
      );
    }
  } else {
    icon = (
      <FontAwesomeIcon
        icon={faCloudMoon}
        size="10x"
      />
    );
  }


  return icon;
};

export default WeatherIcon;
