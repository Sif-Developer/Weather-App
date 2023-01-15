import React from "react";

const WeatherClock = (props) => {
  const weatherData = props.weatherData;
  let localTime;
  if (weatherData.dt && weatherData.timezone) {
    const timestamp = weatherData.dt + weatherData.timezone;
    localTime = new Date(timestamp * 1000);
  }

  return (
    <div>
      {localTime ? (
        <p>
          La hora local en {props.city} es: {localTime.toString()}
        </p>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default WeatherClock;
