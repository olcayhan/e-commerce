import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  const [products, setProducts] = useState([])


  const fetchData = () => {
    fetch("http://localhost:5000/products/allproducts")
      .then(response => response.json())
      .then(data => setProducts(data))
  }

  useEffect(() => {
    fetchData();
  }, [])


  console.log(products)


  return (
    <div className="App">
      <div className='containter'>
        {products.length > 0 ? products.map(product => {
          return (<>
            <h1>{product.name}</h1>
            <img src={product.image} alt="" style={{ width: "200px", height: "200px" }} />
            <a href='/'>Ürün Detaylerı</a>
          </>
          )
        }) : <h1>Yükleniyor ..... </h1>
        }
      </div>
    </div>
  );
}

export default App;
