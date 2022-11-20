import React from 'react';
import Booking from '@bookingList/Booking/Booking';
import PopupMessage from '@popupMessage/PopupMessage';
import '../App.css';

function BookingList() {
  return (
    <div className="popup booking-popup">
      <PopupMessage messageText="Your Bookings" />
      <Booking bookingTitleText="Hotel Transalvania" bookingDateText="20, Jan 2021" bookingImageUrl="#" />
    </div>
  );
}

export default BookingList;
