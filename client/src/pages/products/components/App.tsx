import BookingList from '@bookingList/BookingList';
import Footer from '@footer/Footer';
import Header from '@header/Header';
import Main from '@main/Main';
import Message from '@message/Message';
import NotificationList from '@notificationList/NotificationsList';
import Overlay from '@overlay/Overlay';
import ReviewMenu from '@reviewMenu/ReviewMenu';
import React, { useState } from 'react';

function Products() {
  return (
    <div className="container">
      {/* <BookingList /> */}
      {/* <NotificationList /> */}
      {/* <ReviewMenu /> */}
      {/* <Header /> */}
      <Main />
      <Footer />
    </div>
  );
}

export default Products;
