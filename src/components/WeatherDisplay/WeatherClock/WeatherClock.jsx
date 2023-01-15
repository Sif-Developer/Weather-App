import { useEffect, useState } from "react";


const WeatherClock = (props) => {
  const weatherData = props.weatherData;
  let localTime = null;
  if (weatherData.dt && weatherData.timezone) {
    const timestamp = weatherData.dt + weatherData.timezone;
    localTime = new Date(timestamp * 1000);
  }
  const [hours, setHours] = useState(localTime ? localTime.getHours() : 0);
  const [minutes, setMinutes] = useState(localTime ? localTime.getMinutes() : 0);
  const [seconds, setSeconds] = useState(localTime ? localTime.getSeconds() : 0);

  const updateTime = () => {
    setSeconds((prevSeconds) => (prevSeconds + 1) % 60);
    if (seconds === 59) {
      setMinutes((prevMinutes) => (prevMinutes + 1) % 60);
      if (minutes === 59) {
        setHours((prevHours) => (prevHours + 1) % 24);
      }
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => updateTime(), 1000);
    return () => clearInterval(intervalId);
  }, [seconds, minutes]);

  return (
    <div>
      {localTime ? (
        <p>
          {hours}:{minutes}:{seconds}
        </p>
      ) : (
        <p>Loading time...</p>
      )}
    </div>
  );
};



export default WeatherClock;
