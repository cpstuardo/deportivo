import "./App.css";
import ResponsiveRadar from "./components/radar";
import dataRadar from "./data/dataRadar";

function App() {
  return (
    <div className="App">
      <h1>Evaluación de Rendimiento Deportivo</h1>
      <img src={require("./legends.jpeg")} width={"40%"} height={"50%"} />
      <div className="containerRadar">
        <ResponsiveRadar data={dataRadar} keys={["results"]} indexBy={"item"} />
      </div>
    </div>
  );
}

export default App;
