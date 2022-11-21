import React from 'react';
import Header from '@header/Header';
import Overlay from '@overlay/Overlay';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductDetails from './pages/productDetails/components/App';
import Products from './pages/products/components/App';
import Message from '@message/Message';
import './App.css';

function App(props: { state: IAppMapStore['uiChange'] }) {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        {props.state.toggleOverlay && <Overlay />}
        {props.state.toggleMessage && <Message message="" />}
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
    toggleMessage: boolean;
  };
}
const mapStateToProps = (state: IAppMapStore) => ({
  state: state.uiChange,
});

export default connect(mapStateToProps)(App);
