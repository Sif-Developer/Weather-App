import axios from "axios";

const API_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = "a6df6f401c9554abaf1170a36abaf462";

const getWeatherByCoordinates = async (lat, lon) => {
  const res = await axios.get(
    "${API_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}"
  );
  return res.data;
};

const weatherService = {
    getWeatherByCoordinates
}

export default weatherService