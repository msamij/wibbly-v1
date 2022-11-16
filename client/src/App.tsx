import React from 'react';
import Header from '@header/Header';
import Overlay from '@overlay/Overlay';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductDetails from './pages/productDetails/components/App';
import Products from './pages/products/components/App';
import './App.css';

function App(props: { toggleOverlay: boolean }) {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        {props.toggleOverlay && <Overlay />}
        <Route path="/" exact component={Products} />
        <Route path="/hotels/:id" exact component={ProductDetails} />
        <Route path="/tours/:id" exact component={ProductDetails} />
        <Route path="/activities/:id" exact component={ProductDetails} />
      </BrowserRouter>
    </React.Fragment>
  );
}

interface IAppMapStore {
  uiChange: {
    toggleOverlay: boolean;
  };
}
const mapStateToProps = (state: IAppMapStore) => {
  return {
    toggleOverlay: state.uiChange.toggleOverlay,
  };
};

export default connect(mapStateToProps)(App);
