import React, { Component } from "react";
import Spinner from "./Spinner";

export default class CurrWeathCard extends Component {
  state = {
    weather: null,
  };

  async componentDidMount() {
    if (!this.props.city) return;
    const URL = `https://api.weatherapi.com/v1/current.json?key=${this.props.ApiKey}&q=${this.props.city}&aqi=yes`;

    let data = await fetch(URL);
    let response = await data.json();
    console.log(response);

    this.setState({ weather: response });
  }

  render() {
    const { weather } = this.state;

    if (!weather) {
      return (
        <h2>
          <Spinner />
        </h2>
      );
    }
    return (
      <div className="CurrWC-constaier">
        <div className="currWC-parent">
          <div className="currWC-div1">
            <h1>{weather.current.temp_c}</h1>
          </div>

          <div className="currWC-div2">
            <h2>
              {weather.location.name}, {weather.location.region}
              {weather.location.country}
            </h2>
          </div>

          <div className="currWC-div3">
            <img src={weather.current.condition.icon} alt="" />
          </div>

          <div className="currWC-div4">
            <p>
              local Time: <strong> {weather.location.localtime}</strong>
            </p>
          </div>
          <div className="currWC-div5">
            <p>
              Condition:<strong>{weather.current.condition.text}</strong>
            </p>
          </div>
          <div className="currWC-div6">
            <p>
              Wind Speed: <strong>{weather.current.wind_kph}</strong>
            </p>
          </div>
          <div className="currWC-div7">
            <p>
              Humidity:<strong>{weather.current.humidity}</strong>
            </p>
          </div>
          <div className="currWC-div8">
            <p>
              Feels Like:<strong>{weather.current.feelslike_c}</strong>
            </p>
          </div>
          <div className="currWC-div9">
            <p>
              DewPoints:<strong>{weather.current.dewpoint_c}</strong>
            </p>
          </div>
          <div className="currWC-div10">
            <p>
              Last Updated:<strong>{weather.current.last_updated}</strong>
            </p>
          </div>
          <div className="curr-div11">
            <button
              onClick={(e) => {
                e.preventDefault();
                this.props.onBack();
              }}
            >
              <i className="ri-home-fill"></i>Back
            </button>
          </div>
        </div>
      </div>
    );
  }
}
