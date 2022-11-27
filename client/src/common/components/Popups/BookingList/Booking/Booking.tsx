import React from 'react';
import './Booking.css';

interface IBookingProps {
  productName: string;
  bookingDate: string;
  // bookingImageUrl: string;
}

function Booking(props: IBookingProps) {
  return (
    <a className="booking">
      {/* <img src={props.bookingImageUrl} className="booking__image" alt="Booking item image" /> */}
      <div>
        <p className="heading-default booking__title">{props.productName}</p>
        <p className="heading-default booking__date">Booking Date: {props.bookingDate}</p>
      </div>
    </a>
  );
}

export default Booking;
