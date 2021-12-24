import React, { useState, useEffect } from "react";
import "./App.css";
import ResponsiveRadar from "./components/radar";
import dataRadar from "./data/dataRadar";

function App() {
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  if (width > 550) {
    return (
      <div className="App">
        <h1>Evaluación de Rendimiento Deportivo</h1>
        <img src={require("./legends.png")} height={"100vh"} />
        <ResponsiveRadar
          data={dataRadar}
          keys={["results"]}
          indexBy={"item"}
          height={550}
          width={700}
          css={"containerRadar"}
          fontSize={"13px"}
        />
      </div>
    );
  } else {
    return (
      <div className="App">
        <h2>Evaluación de Rendimiento Deportivo</h2>
        <img src={require("./legends2.png")} height={"150vh"} />
        <ResponsiveRadar
          data={dataRadar}
          keys={["results"]}
          indexBy={"item"}
          height={270}
          width={400}
          css={"containerRadarMobile"}
          fontSize={"9px"}
        />
      </div>
    );
  }
}

export default App;
