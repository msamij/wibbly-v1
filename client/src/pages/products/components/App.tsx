import React from 'react';
import BookingList from '@bookingList/BookingList';
import Footer from '@footer/Footer';
import Form from '@form/Form';
import Header from '@header/Header';
import Main from '@main/Main';
import Message from '@message/Message';
import NotificationList from '@notificationList/NotificationsList';
import Overlay from '@overlay/Overlay';
import ReviewMenu from '@reviewMenu/ReviewMenu';

function Products() {
  return (
    <div className="container">
      <Overlay />
      <Message />
      <Form />
      <BookingList />
      <NotificationList />
      <ReviewMenu />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Products;
