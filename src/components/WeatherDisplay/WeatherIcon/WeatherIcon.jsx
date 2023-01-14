import { WiDaySunny, WiNightClear, WiRain, WiSnow, WiWindy } from "react-icons/wi";

const WeatherIcon = ({ weather }) => {
    let icon;

    if (weather?.wind?.speed > 10) {
        icon = <WiWindy size={50} />;
    } else if (weather?.snow) {
        icon = <WiSnow size={50} />;
    } else if (weather?.rain) {
        icon = <WiRain size={50} />;
    } else if (weather?.weather?.[0]?.icon?.endsWith("d")) {
        icon = <WiDaySunny size={50} />;
    } else {
        icon = <WiNightClear size={50} />;
    }

    return icon;
};



export default WeatherIcon;