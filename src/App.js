import "./App.css";
import Navbar from "./component/Navbar";
import Particles from "./component/Particles";
import Card from "./component/Card";
import CurrWeathCard from "./component/CurrWeathCard";
import About from "./component/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("Current");
  const [showResult, setshowResult] = useState(false);

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
                  getWeather={() => {
                    setshowResult(true);
                  }}
                />
              ) : (
                <CurrWeathCard
                  onBack={() => {
                    setshowResult(false);
                  }}
                />
              )
            }
          />
          <Route exact path="/about"  element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
