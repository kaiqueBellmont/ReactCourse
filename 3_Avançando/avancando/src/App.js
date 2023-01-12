import './App.css';

/* imagem em src devem ser importadas como variaveis e podem ser reutilizadas como componentes podem ser. import com Maiscula*/
import City from './assets/city.jpg'
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUsername from './components/ShowUsername';
import { useState } from 'react';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import MessageState from './components/MessageState'
import ChangeMessageState from './components/ChangeMessageState'




function App() {
  // const name = "Kaique"
  const [userName] = useState("Kaique")
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
    { id: 2, brand: "KIA", color: "Branco", km: 200000 },
    { id: 3, brand: "Renault", color: "Azul", km: 32000 },
  ];

  function showMessage() {
    console.log("Evento do componente pai");
  }

  const [message, setMessage] = useState();

  const handleMessage = (msg) => {
    setMessage(msg);
  };


  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/*  Imagem em public */}
      {/* imagens em public, voce pode apenas passar o path */}
      <div>
        <img src="/img1.jpg" alt="paisage" />
      </div>
      <div>
        {/* img em src */}
        <img src={City} alt="city" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUsername name={userName} />
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      {/*reaproveitando */}
      <CarDetails brand="VW" km={0} color="vermelho" newCar={true} />
      {/* loop com array de obj */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}
      {/* fragments */}
      <Fragment propFragment="Teste"/>
      {/* children prop */}
      <Container containerValue="im a value in a container">
        <p>Eu sou do componente superior</p>
      </Container>
      <Container>
        <div>
          <p>Eu também</p>
        </div>
      </Container>
      {/* event as prop */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <MessageState msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  );
}

export default App;
