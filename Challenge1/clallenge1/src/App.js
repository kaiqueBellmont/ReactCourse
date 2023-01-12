import './App.css';
import Car from './components/Car'

function App() {
  const myCars = [
    { name: "fusca", km: 0, color: "Amarelo" },
    { name: "polo", km: 200000, color: "Branco" },
    { name: "onix", km: 32000, color: "Azul" },
  ];

  return (
    <div className="App">
      <h1>Showroom de carros</h1>
      <div className="car-container">
        {myCars.map((car) => (
          <Car car={car} />
        ))}
      </div>
    </div>
  );
}

export default App;
