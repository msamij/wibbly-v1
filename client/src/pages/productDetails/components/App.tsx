import React from 'react';
import Description from '@description/Description';
import Main from '@productDetailsMain/Main';
import Header from '@productsDetailsHeader/Header';
import BookingDatePopup from '@bookingDatePopup/BookingDatePopup';

function ProductDetails() {
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
