import React, { useState } from 'react';
import ButtonSecondary from '@button/ButtonSecondary/ButtonSecondary';
import { BookingDates } from '@models/BookingDates';
import './BookingDatePopup.css';
import { connect } from 'react-redux';

interface IBookingDatePopupProps {
  products: {
    bookingDates: BookingDates;
  };
}

function BookingDatePopup() {
  const [products, setProducts] = useState<any>('');

  // Pass this as prop to description onCLick on reserve button and data fetched call this
  const callOnBookingDateAvailable = (products: any) => {
    // Update state
    setProducts(products);
  };

  return (
    <div className="booking-date-popup">
      <h2 className="heading-default booking-date-popup__heading">Select Check in date</h2>
      <div className="booking-date-popup__month">
        {/* <ButtonSecondary buttonText="prev ⇐" /> */}
        <h2 className="heading-default booking-date-popup__month-title">March 2022</h2>
        {/* <ButtonSecondary buttonText="next ⇒" /> */}
      </div>
      <div className="booking-date-popup__date-selection">
        {products.bookingDates.bookingDates.map((date: string) => (
          <button className="btn btn-date">{date}</button>
        ))}
      </div>
      {/* <ButtonSecondary buttonText="Save" /> */}
    </div>
  );
}

export default BookingDatePopup;
