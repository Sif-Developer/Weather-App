import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getWeather } from "../../features/weather/weatherSlice";

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
    </form>
  );
};

export default WeatherForm;