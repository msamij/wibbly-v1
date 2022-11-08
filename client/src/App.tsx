import React from 'react';
import Products from './pages/products/components/App';
import ProductDetails from './pages/productDetails/components/App';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/" exact component={Products} />
        <Route path="/:product-type/:id" exact component={ProductDetails} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
