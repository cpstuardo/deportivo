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

  if (width > 500) {
    return (
      <div className="App">
        <h1>Evaluación de Rendimiento Deportivo</h1>
        <img src={require("./legends.jpeg")} height={"130vh"} />
        <ResponsiveRadar
          data={dataRadar}
          keys={["results"]}
          indexBy={"item"}
          height={550}
          width={700}
          div={"containerRadar"}
        />
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>Evaluación de Rendimiento Deportivo</h1>
        <img src={require("./legends.jpeg")} height={"130vh"} />
        <ResponsiveRadar
          data={dataRadar}
          keys={["results"]}
          indexBy={"item"}
          height={300}
          width={450}
          div={"containerRadarMobile"}
        />
      </div>
    );
  }
}

export default App;
