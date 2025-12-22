import React, { Component } from "react";

export default class card extends Component {
  render() {
    const { mode } = this.props;
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
              <input type="text" placeholder="Enter city" />
              {mode === "forecast" && <input type="date" />}
            </div>

            <div>
              <button
                onClick={() => {
                  setTimeout(() => {
                    this.props.getWeather();
                  }, 500); 
                }}
              >
                Get {mode} weather
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
