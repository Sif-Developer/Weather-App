import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getWeather } from "../../features/weather/weatherSlice";
import "./WeatherForm.css"
import WeatherFormButton from "./WeatherFormButton/WeatherFormButton";

const WeatherForm = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getWeather(city));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        City:
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="city" /> 
      </label>
      <button type="submit">Get Weather</button>
      <WeatherFormButton/>
    </form>
  );
};

export default WeatherForm;