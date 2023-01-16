
import "./WeatherIcon.css";
import sunny from '../../../assets/weatherIcons/3d weather icons/sun/26.png';
import fewClouds from "../../../assets/weatherIcons/3d weather icons/cloud/35.png"
import sunnyRainbow from "../../../assets/weatherIcons/3d weather icons/sun/6.png"
import sunCloudRain from "../../../assets/weatherIcons/3d weather icons/sun/8.png"
import sunCloudRainFun from "../../../assets/weatherIcons/3d weather icons/sun/13.png"
import snowFlake from "../../../assets/weatherIcons/3d weather icons/snow/36.png"
import fog from "../../../assets/weatherIcons/3d weather icons/cloud/33.png"
import mist from "../../../assets/weatherIcons/3d weather icons/cloud/32.png"
import cloudsMoving from "../../../assets/weatherIcons/3d weather icons/sun/4.png"
import cloudsSun from "../../../assets/weatherIcons/3d weather icons/sun/27.png"
import overcastClouds from "../../../assets/weatherIcons/3d weather icons/cloud/7.png"
import cloudMoon from "../../../assets/weatherIcons/3d weather icons/moon/31.png"


const WeatherIcon = ({ weather }) => {
  let icon = null;
  const { id } = weather.weather[0];
  let { description } = weather.weather[0];
  const lowercaseDescription = description.toLowerCase();

  let iconClass = "";
  if (id >= 200 && id <= 232) {
    icon = (
      <img src={sunnyRainbow} alt="Sunny weather icon" className="icon-class-2" 
        />
    );
  } else if (id >= 300 && id <= 321) {
    icon = (
      <img src={sunCloudRain} alt="Sunny weather icon" className="icon-class-2" 
      />
    );
  } else if (id >= 500 && id <= 531) {
    icon = (
      <img src={sunCloudRainFun} alt="Sunny weather icon" className="icon-class-2" 
      />
    );
  } else if (id >= 600 && id <= 622) {
    icon = (
      <img src={snowFlake} alt="Sunny weather icon" className="icon-class-2" 
      />
    );
  } else if (id >= 700 && id <= 781) {
    if (lowercaseDescription.includes("fog")) {
      icon = (
        <img src={fog} alt="Sunny weather icon" className="icon-class-2" 
      />
      );
    } else if (lowercaseDescription.includes("mist")) {
      icon = (
        <img src={mist} alt="Sunny weather icon" className="icon-class-2" 
      />
      );
    } else if (lowercaseDescription.includes("smoke")) {
      icon = (
        <img src={mist} alt="Sunny weather icon" className="icon-class-2" 
        />
      );
    } else if (lowercaseDescription.includes("haze")) {
      icon = (
        <img src={mist} alt="Sunny weather icon" className="icon-class-2" 
        />
      );
    } else if (lowercaseDescription.includes("sand")) {
      icon = (
        <img src={mist} alt="Sunny weather icon" className="icon-class-2" 
        />
      );
    } else if (lowercaseDescription.includes("dust")) {
      icon = (
        <img src={mist} alt="Sunny weather icon" className="icon-class-2" 
        />
      );
    } else if (lowercaseDescription.includes("ash")) {
      icon = (
        <img src={mist} alt="Sunny weather icon" className="icon-class-2" 
        />
      );
    } else if (lowercaseDescription.includes("squall")) {
      icon = (
        <img src={mist} alt="Sunny weather icon" className="icon-class-2" 
        />
      );
    } else if (lowercaseDescription.includes("tornado")) {
      icon = (
        <img src={mist} alt="Sunny weather icon" className="icon-class-2" 
        />
      );
    }
  } else if (id === 800) {
    if (lowercaseDescription.includes("clear sky")) {
      icon = (
        <img src={sunny} alt="Sunny weather icon" className="icon-class-2" />
      );
    }
  } else if (id >= 801 && id <= 8010) {
    if (lowercaseDescription.includes("few clouds")) {
      icon = (
        <img src={fewClouds} alt="Sunny weather icon" className="icon-class-2" 
        />
      );
    } else if (lowercaseDescription.includes("scattered clouds")) {
      icon = (
        <img src={cloudsMoving} alt="Sunny weather icon" className="icon-class-2" 
        />
      );
    } else if (lowercaseDescription.includes("broken clouds")) {
      icon = (
        <img src={cloudsSun} alt="Sunny weather icon" className="icon-class-2" 
        />
      );
    } else if (lowercaseDescription.includes("overcast clouds")) {
      icon = (
        <img src={overcastClouds} alt="Sunny weather icon" className="icon-class-2" 
        />
      );
    }
  } else {
    icon = (
      <img src={cloudMoon} alt="Sunny weather icon" className="icon-class-2" 
        />
    );
  }


  return icon;
};

export default WeatherIcon;
