import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

const CurrWeathCard = ({ city, ApiKey, onBack }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      const URL = `https://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=${city}&aqi=yes`;
      const data = await fetch(URL);
      const response = await data.json();
      setWeather(response);
    };

    fetchWeather();
  }, [city, ApiKey]);

  if (!weather) {
    return <Spinner />;
  }

  return (
    <div className="CurrWC-constaier">
      <div className="currWC-parent">

        <div className="currWC-div1">
          <h1>{weather.current.temp_c}°C</h1>
          <img src={weather.current.condition.icon} alt="weather icon" />

        </div>

        <div className="currWC-div2">
          <h2>
            {weather.location.name}, {weather.location.region},{" "}
            {weather.location.country}
          </h2>
        </div>

        <div className="currWC-div4  ">
          <p>
            Local Time: <strong>{weather.location.localtime}</strong>
          </p>
        </div>

        <div className="currWC-div5 currWC">
          <p>
            Condition: <strong>{weather.current.condition.text}</strong>
          </p>
        </div>

        <div className="currWC-div6 currWC">
          <p>
            Wind Speed: <strong>{weather.current.wind_kph} kph</strong>
          </p>
        </div>

        <div className="currWC-div7 currWC">
          <p>
            Humidity: <strong>{weather.current.humidity}%</strong>
          </p>
        </div>

        <div className="currWC-div8 currWC">
          <p>
            Feels Like: <strong>{weather.current.feelslike_c}°C</strong>
          </p>
        </div>

        <div className="currWC-div9 currWC">
          <p>
            Dew Point: <strong>{weather.current.dewpoint_c}</strong>
          </p>
        </div>

        <div className="currWC-div10 currWC">
          <p>
            Last Updated: <strong>{weather.current.last_updated}</strong>
          </p>
        </div>

        <div className="curr-div11 ">
          <button onClick={onBack}>
            <i className="ri-home-fill"></i> Back
          </button>
        </div>

      </div>
    </div>
  );
};

export default CurrWeathCard;
