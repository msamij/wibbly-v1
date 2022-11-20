import React from 'react';
import './Booking.css';

interface IBookingProps {
  bookingTitleText: string;
  bookingDateText: string;
  bookingImageUrl: string;
}

function Booking(props: IBookingProps) {
  return (
    <a className="booking">
      <img src={props.bookingImageUrl} className="booking__image" alt="Booking item image" />
      <div>
        <p className="heading-default booking__title">{props.bookingTitleText}</p>
        <p className="heading-default booking__date">{props.bookingDateText}</p>
      </div>
    </a>
  );
}

export default Booking;
