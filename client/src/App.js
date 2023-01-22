import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home';
import Product from './components/Product';

function App() {

  return (

    <BrowserRouter>
      <h1>Navbar</h1>
      
      <Routes>
        <Route>
          <Route path="/products" element={<Home />} />
          <Route path="/products/:id" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
