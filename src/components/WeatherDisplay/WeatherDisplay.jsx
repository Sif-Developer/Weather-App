import { WiDaySunny, WiNightClear, WiRain, WiSnow, WiWindy } from "react-icons/wi";
import { useSelector } from "react-redux";

const WeatherDisplay = () => {
    const weather = useSelector((state) => state.weather.weather);
    const status = useSelector((state) => state.weather.status);
    const error = useSelector((state) => state.weather.error);

    if (status === "loading") {
        return <p>Loading...</p>;
    }

    if (status === "failed") {
        return <p>Error: {error}</p>;
    }

    if (status === "succeeded" && weather) {
        let icon;

        if (weather.wind.speed > 10) {
            icon = <WiWindy size={50} />;
        } else if (weather.snow) {
            icon = <WiSnow size={50} />;
        } else if (weather.rain) {
            icon = <WiRain size={50} />;
        } else if (weather.weather[0].icon.endsWith("d")) {
            icon = <WiDaySunny size={50} />;
        } else {
            icon = <WiNightClear size={50} />;
        }

        return (
            <div>
                {icon}
                <p>Temperature: {weather.main.temp}</p>
                <p>Pressure: {weather.main.pressure}</p>
                <p>Humidity: {weather.main.humidity}</p>
                <p>Min temperature: {weather.main.temp_min}</p>
                <p>Max temperature: {weather.main.temp_max}</p>
            </div>
        );
    }

    return null;
};


export default WeatherDisplay;
