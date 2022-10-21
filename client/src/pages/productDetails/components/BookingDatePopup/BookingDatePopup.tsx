import React from 'react';
import ButtonSecondary from '@button/ButtonSecondary/ButtonSecondary';
import './BookingDatePopup.css';

function BookingDatePopup() {
  return (
    <div className="booking-date-popup">
      <h2 className="heading-default booking-date-popup__heading">Select Check in date</h2>
      <div className="booking-date-popup__month">
        <ButtonSecondary buttonText="prev ⇐" />
        <h2 className="heading-default booking-date-popup__month-title">March 2022</h2>
        <ButtonSecondary buttonText="next ⇒" />
      </div>
      <div className="booking-date-popup__date-selection">
        <button className="btn btn-date">20, Mar</button>
        <button className="btn btn-date">20, Mar</button>
        <button className="btn btn-date">20, Mar</button>
      </div>
      <ButtonSecondary buttonText="Save" />
    </div>
  );
}

export default BookingDatePopup;
