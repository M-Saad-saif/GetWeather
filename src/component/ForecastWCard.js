import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

const ForecastWCard = ({ city, ApiKey, onBack, days, selectedDate }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      const URL = `https://api.weatherapi.com/v1/forecast.json?key=${ApiKey}&q=${city}&days=${days}&aqi=yes&alerts=yes`;
      const data = await fetch(URL);
      const response = await data.json();
      if (response.error) {
        console.error(response.error.message);
        return;
      }
      setWeather(response);
    };

    fetchWeather();
  }, [city, ApiKey, days]);

  if (!weather) {
    return <Spinner />;
  }

  const hours = weather.forecast.forecastday[0].hour.slice(0, 24);

  return (
    <div className="fore-container">
      <h2>
        {weather.location.name}, {weather.location.region}
        {weather.location.country}
      </h2>
      <div>
        <p>Forecast Date: {selectedDate}</p>
      </div>

      <div className="fore-parent">
        {hours.map((item, index) => (
          <div className="fore-card" key={index}>
            <div className="fore-info">
              <h5>{item.time.split(" ")[1]}</h5>
              <h4>{item.temp_c}°C</h4>
              <img src={item.condition.icon} alt="" />

              <p id="fore-condition">Condition: <strong>{item.condition.text}</strong></p>
              <p>Feels like: <strong> {item.feelslike_c}</strong></p>

            </div>
          </div>
        ))}
      </div>

      <div className="fore-div6">
        <button onClick={onBack}>
          <i className="ri-home-fill"></i> back
        </button>
      </div>
    </div>
  );
};

export default ForecastWCard;
