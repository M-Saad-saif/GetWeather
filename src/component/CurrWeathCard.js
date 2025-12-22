import React, { Component } from "react";

export default class CurrWeathCard extends Component {
  render() {
    return (
      <div className="CurrWC-constaier">
        <div className="currWC-parent">
          <div className="currWC-div1">
            <h1>55deg</h1>
          </div>

          <div className="currWC-div2">
            <h2>quetta, balochistan Pakistan</h2>
          </div>

          <div className="currWC-div3">
            <img
              src="//cdn.weatherapi.com/weather/64x64/night/113.png"
              alt=""
            />
          </div>

          <div className="currWC-div4">11-55-88</div>
          <div className="currWC-div5">condition</div>
          <div className="currWC-div6">wind speed</div>
          <div className="currWC-div7">humidity</div>
          <div className="currWC-div8">feelslike</div>
          <div className="currWC-div9">dew point</div>
          <div className="currWC-div10">temp_F</div>
          <div className="curr-div11">
            <button
              onClick={(e) => {
                e.preventDefault();
                this.props.onBack();
              }}
            >
              <i class="ri-home-fill"></i>Back
            </button>
          </div>
        </div>
      </div>
    );
  }
}
