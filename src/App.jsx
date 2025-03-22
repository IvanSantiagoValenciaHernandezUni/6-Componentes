import { useState } from "react";
import "./App.css";
import Booleano from "./Booleano";
import Estado from "./Estado";
import String from "./String";
import Lista from "./Lista";
import Objeto from "./Objeto";
import Clase from "./Clase";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>6 Componentes</h1>
      <p>1</p>
      <Booleano />
      <p>2</p>
      <Estado />
      <p>3</p>
      <String />
      <p>4</p>
      <Lista />
      <p>5</p>
      <Objeto />
      <p>6</p>
      <Clase />
    </div>
  );
}

export default App;
