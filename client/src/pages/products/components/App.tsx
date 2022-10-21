import BookingList from '@bookingList/BookingList';
import Footer from '@footer/Footer';
import Form from '@form/Form';
import Header from '@header/Header';
import Main from '@main/Main';
import Message from '@message/Message';
import NotificationList from '@notificationList/NotificationsList';
import Overlay from '@overlay/Overlay';
import ReviewMenu from '@reviewMenu/ReviewMenu';
import React, { useState } from 'react';

function Products() {
  const [buttonType, setButtonType] = useState('');

  return (
    <div className="container">
      {buttonType ? <Overlay onProfileButtonClick={setButtonType} /> : ''}
      <Message />
      {buttonType ? <Form buttonType={buttonType} /> : ''}
      <BookingList />
      <NotificationList />
      <ReviewMenu />
      <Header onProfileButtonClick={setButtonType} />
      <Main />
      <Footer />
    </div>
  );
}

export default Products;
