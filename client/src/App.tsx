import React from 'react';
import BookingList from '@bookingList/BookingList';
import Header from '@header/Header';
import Message from '@message/Message';
import Overlay from '@overlay/Overlay';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import ProductDetails from './pages/productDetails/components/App';
import Products from './pages/products/components/App';

function App(props: { state: IAppMapStore['uiChange'] }) {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        {props.state.toggleOverlay && <Overlay />}
        {props.state.toggleMessage && <Message />}
        {props.state.toggleBookingListPopup && <BookingList />}
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
    toggleBookingListPopup: boolean;
  };
}
const mapStateToProps = (state: IAppMapStore) => ({
  state: state.uiChange,
});

export default connect(mapStateToProps)(App);
