import BookingList from '@bookingList/BookingList';
import Footer from '@footer/Footer';
import Form from '@form/Form';
import Header from '@header/Header';
import Urls from '@http/constants';
import HTTP from '@http/http';
import Main from '@main/Main';
import Message from '@message/Message';
import NotificationList from '@notificationList/NotificationsList';
import Overlay from '@overlay/Overlay';
import ReviewMenu from '@reviewMenu/ReviewMenu';
import React, { useEffect, useState } from 'react';

function Products() {
  const [buttonType, setButtonType] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    (async () => {
      const response = await HTTP.get(`${Urls.baseUrl}${Urls.authUrl}${Urls.isLoggedIn}`);
      if (response.status === 200) setButtonType('Logout');
    })();
  }, []);

  return (
    <div className="container">
      {buttonType === 'Signup' || buttonType === 'Login' ? <Overlay onOverlayClick={setButtonType} /> : ''}
      {message ? <Message message={message} setMessage={setMessage} /> : ''}
      {buttonType === 'Signup' || buttonType === 'Login' ? (
        <Form buttonType={buttonType} upDateMessage={setMessage} upDateButtonType={setButtonType} />
      ) : (
        ''
      )}
      <BookingList />
      <NotificationList />
      <ReviewMenu />
      <Header buttonType={buttonType} onProfileButtonClick={setButtonType} />
      <Main />
      <Footer />
    </div>
  );
}

export default Products;
