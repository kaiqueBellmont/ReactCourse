import MyForm from './components/MyForm'

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      {/* Criaçao de form  */}
      <MyForm user={{ name: "joao da silva", email: "joaodasilva@gmail.com", bio: "Sou programador", role: "admin" }} />
    </div>
  );
}

export default App;
