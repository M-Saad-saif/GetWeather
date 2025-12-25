import "./App.css";
import Navbar from "./component/Navbar";
import Particles from "./component/Particles";
import Card from "./component/Card";
import CurrWeathCard from "./component/CurrWeathCard";
import ForecastWCard from "./component/ForecastWCard";
import About from "./component/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const ApiKey = process.env.REACT_APP_GETWEATHER_INFO;

  const [mode, setMode] = useState("Current");
  const [showResult, setshowResult] = useState(false);
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [days, setDays] = useState(1);
  const [selectDate, setSelecteDate] = useState("");

  const handlegetWeather = () => {
    if (!city) {
      setError("Please enter Place");

      setTimeout(() => {
        setError("");
      }, 1000);
      return;
    }

    if (mode === "forecast" && !selectDate) {
      setError("Please enter Date");
      setTimeout(() => setError(""), 1000);
      return;
    }

    setError("");
    setshowResult(true);
  };

  const handleBack = () => {
    setshowResult(false);
    setCity("");
    setError("");
  };

  return (
    <>
      <div
        style={{
          top: 0,
          width: "100%",
          height: "100vh",
          position: "absolute",
          zIndex: "-1",
          background: "linear-gradient(black, #010e28ff, #395489ff)",
        }}
      >
        <Particles
          particleColors={["#ffffffff"]}
          particleCount={200}
          particleSpread={11}
          speed={0.1}
          particleBaseSize={120}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <Router>
        <Navbar
          title="GetWeather"
          setMode={(newmode) => {
            setMode(newmode);
            setshowResult(false);
          }}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              !showResult ? (
                <Card
                  mode={mode}
                  setCity={setCity}
                  city={city}
                  getWeather={handlegetWeather}
                  setSelecteDate={setSelecteDate}
                  error={error}
                />
              ) : mode === "Current" ? (
                <CurrWeathCard
                  city={city}
                  onBack={handleBack}
                  ApiKey={ApiKey}
                />
              ) : (
                <ForecastWCard
                  city={city}
                  days={days}
                  onBack={handleBack}
                  selectDate={selectDate}
                  ApiKey={ApiKey}
                  selectedDate={selectDate}
                />
              )
            }
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
