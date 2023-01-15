import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getWeather } from "../../features/weather/weatherSlice";
import "./WeatherForm.scss"
import "./WeatherButton.css"

const WeatherForm = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getWeather(city));
  };

  return (
    <div class="container">
    <form onSubmit={handleSubmit}>
      <p>Weather App</p>
      <label>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Write a city" /> 
      </label>
      <br/>

      <button class="bn632-hover bn20" type="submit">Get Weather</button>
    </form>
    <div class="drops">
    <div class="drop drop-1"></div>
    <div class="drop drop-2"></div>
    <div class="drop drop-3"></div>
    <div class="drop drop-4"></div>
    <div class="drop drop-5"></div>
  </div>
    </div>
  );
};

export default WeatherForm;