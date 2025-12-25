import React from "react";
// import PropType from 'prop-types'

const card =(props)=> {
    const { city, mode, setCity, error } = props;
    return (
      <>
        <div className="card-container">
          <h2>Check Weather</h2>
          <div className="information">
            <div className="weather-info">
              <h5>Welcome to GetWeather information</h5>
              <p className="my-3">
                Enter City to get {mode} weather information
              </p>
            </div>

            <div>
              <input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              {mode === "forecast" && <input type="date" />}
                <p style={{color:"#ffb0b0ff", fontSize:"15px"}}>{error}</p>
            </div>

            <div>
              <button onClick={props.getWeather}>
                Get {mode} weather
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

card.prototype={
}

export default card