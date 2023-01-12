import './App.css';
import { useState, useEffect } from 'react'

// 4 - custom hooks
import { useFetch } from './hooks/useFetch'


const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  // 4 - custom hooks
  // ps: ":" renomeando
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // resgatando dados
  // substituido pelo passo 4
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url)
  //     const data = await res.json()

  //     setProducts(data)
  //   }
  //   fetchData()
  // }, []);


  // 2 - add de produtos 
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    };

    // // requisição:
    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product),
    // })

    // //3 - Carregamento dinâmico
    // const addedProduct = await res.json();

    // setProducts((prevProduct) => [...prevProduct, addedProduct])

    // 5 -- Refatorando o POST
    httpConfig(product, "POST")

    setName("");
    setPrice("");


  };
  // 8-- desafio remove
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/* 6- loading */}
      {loading && <p>Carregamento de dados...</p>}
      {error && <p>{error}</p>}
      {!error && <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}
            <button onClick={() => handleRemove(product.id)}>Excluir</button>
          </li>
        ))}
      </ul>}

      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Price:
            <input type="nuumber" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
          </label>
          {/* 7- loading no post. evita criar o mesmo produto duas vezes, remoove o botao no loading */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
