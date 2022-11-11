import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import ProductDetails from './pages/productDetails/components/App';
import Products from './pages/products/components/App';
import Header from '@header/Header';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Products} />
        <Route path="/hotels/:id" exact component={ProductDetails} />
        <Route path="/tours/:id" exact component={ProductDetails} />
        <Route path="/activities/:id" exact component={ProductDetails} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
