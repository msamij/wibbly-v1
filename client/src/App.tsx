import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import ProductDetails from './pages/productDetails/components/App';
import Products from './pages/products/components/App';

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
