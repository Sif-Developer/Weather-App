import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getSuggestions, getWeather } from "../../features/weather/weatherSlice";

const WeatherForm = () => {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();

  const handleInputChange = async (e) => {
    setCity(e.target.value);
    if (e.target.value.length > 2) {
      dispatch(getSuggestions(e.target.value));
    } else {
      setSuggestions([]);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getWeather(city));
    setSuggestions([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        City:
        <input type="text" value={city} onChange={handleInputChange} />
      </label>
      <button type="submit">Get Weather</button>
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion) => (
            <li key={suggestion.id} onClick={() => setCity(suggestion.name)}>
              {suggestion.name}, {suggestion.sys.country}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default WeatherForm;
