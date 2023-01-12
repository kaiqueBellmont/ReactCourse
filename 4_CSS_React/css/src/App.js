import './App.css';
import MyComponent from './components/MyComponent';
import ChangeNameState from './components/ChangeNameState';

import { useState } from 'react';
import Title from './components/Title';

function App() {
  // const n = 100
  const [name, setName] = useState();

  const handleName = (name) => {
    setName(name);
  };

  const redTitle = true

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS de component */}
      <MyComponent />
      <p>este paragrafo e do app.js</p>
      {/* inline css (deve-se evitar) */}
      <p style={{ color: "yellow", padding: "25px", borderTop: "15px solid red", borderBottom: "15px solid red", fontSize: "35px" }}>
        <strong>Este elemento foi estilizado inline e deve ser evitado !!!!!!!!!!</strong>
      </p>
      {/* CSS inline dinâmico */}
      <p> O nome é: </p>
      {name === "Kaique"
        ?
        <h2 style={{ color: "green", background: "white" }}>{name}</h2>
        :
        <h2 style={{ color: "red", background: "pink" }}>{name}</h2>
      }
      <ChangeNameState handleName={handleName} />

      {/* classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        este titulo vai ter classe dinamica
      </h2>

      {/* css modules */}
      <Title />
    </div>
  );
}

export default App;
