import React from 'react';
import ButtonSecondary from '@button/ButtonSecondary/ButtonSecondary';
import './BookingDatePopup.css';

function BookingDatePopup() {
  return (
    <div className="booking-date-popup">
      <h2 className="heading-default booking-date-popup__heading">Select Check in date</h2>
      <div className="booking-date-popup__month">
        <ButtonSecondary btnText="prev ⇐" />
        <h2 className="heading-default booking-date-popup__month-title">March 2022</h2>
        <ButtonSecondary btnText="next ⇒" />
      </div>
      <div className="booking-date-popup__date-selection">
        <button className="btn btn-date">20, Mar</button>
        <button className="btn btn-date">20, Mar</button>
        <button className="btn btn-date">20, Mar</button>
      </div>
      <ButtonSecondary btnText="Save" />
    </div>
  );
}

export default BookingDatePopup;
