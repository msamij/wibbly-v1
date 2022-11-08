import React, { useEffect } from 'react';
import Description from '@description/Description';
import Main from '@productDetailsMain/Main';
import Header from '@productsDetailsHeader/Header';
import BookingDatePopup from '@bookingDatePopup/BookingDatePopup';
import { useLocation } from 'react-router-dom';

function ProductDetails() {
  useEffect(() => {
    let { pathname } = useLocation();
  }, []);

  return (
    <div className="container">
      <BookingDatePopup />
      <Header />
      <Main />
      <Description />
    </div>
  );
}

export default ProductDetails;
