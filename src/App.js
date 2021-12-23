import "./App.css";
import ResponsiveRadar from "./components/radar";
import dataRadar from "./data/dataRadar";

function App() {
  return (
    <div className="App">
      <h1>Evaluación de Rendimiento Deportivo</h1>
      <div className="containerRadar">
        <ResponsiveRadar data={dataRadar} keys={["results"]} indexBy={"item"} />
      </div>
      <img src={require("./legends.jpeg")} width={400} height={170} />
    </div>
  );
}

export default App;
