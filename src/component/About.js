import React from "react";
import CurrentWImg from "./CurrentWeatherImg.941Z.png";
import FOrecastWImg from "./ForecastWImg.png";
import MyImg from "./MyPic.png";

const about = () => {
  return (
    <>
      <div className="About-container">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>

            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>

            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={CurrentWImg} className="d-block w-20" alt="..." />

              <div className="carousel-caption d-none d-md-block">
                <h5>Current Weather Information</h5>
                <p>you will find Temperature, Regin, Humidity, Wind speed</p>
              </div>
            </div>

            <div className="carousel-item">
              <img src={FOrecastWImg} className="d-block w-100" alt="..." />

              <div className="carousel-caption d-none d-md-block">
                <h5>Forecast Weather Information</h5>
                <p>you will find Temperature, Regin, Humidity, Wind speed.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={MyImg} className="d-block " alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>
                  <small>Made by </small>
                  Muhammad Saad Saif
                </h5>
                <div className="Linkdin-Git-buttons">
                  <a
                    href="https://www.linkedin.com/in/muhammad-saad-saif-10b38a360/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button type="button" class="btn btn-secondary mb-3">
                      Linkedin
                    </button>
                  </a>

                  <a
                    href="https://github.com/M-Saad-saif"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button type="button" class="btn btn-secondary mb-3">
                      GitHub
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default about;
