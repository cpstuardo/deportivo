import "./App.css";
import ResponsiveRadar from "./components/radar";
import dataRadar from "./data/dataRadar";
import { Container, Col, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <Col>
          <h1>Evaluación de Rendimiento Deportivo</h1>
          <Row>
            <img src={require("./legends.jpeg")} width={"40%"} height={"50%"} />
          </Row>
          <Row>
            <ResponsiveRadar
              data={dataRadar}
              keys={["results"]}
              indexBy={"item"}
            />
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default App;
