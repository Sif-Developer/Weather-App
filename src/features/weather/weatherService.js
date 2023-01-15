import axios from "axios";

const API_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = "a6df6f401c9554abaf1170a36abaf462";

const getWeather = async (city) => {
  const res = await axios.get(
    `${API_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  const timestamp = res.data.dt + res.data.timezone;
  const localTime = new Date(timestamp * 1000);
  console.log("La hora local en " + city + " es: " + localTime);
  return res.data;
};




const weatherService = {
  getWeather,
};

export default weatherService;
