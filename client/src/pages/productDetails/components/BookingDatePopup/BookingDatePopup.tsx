import { fetchBookingDates } from '@actions/httpGet';
import { saveBooking } from '@actions/httpPost';
import { setMessageText, toggleBookingDatePopup, toggleMessage, toggleOverlay } from '@actions/uiChange';
import NoOfRoomsInput from '@bookingDatePopup/Input/NoOfRooms';
import ButtonSecondary from '@button/ButtonSecondary/ButtonSecondary';
import React, { MouseEventHandler, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './BookingDatePopup.css';
import { IBookingDateMapState, IBookingDateProps } from './types';

enum HOTEL_BOOKING_STATUS {
  selectRooms = 'Select no of rooms',
  selectCheckInDate = 'Select check in date',
  selectCheckOutDate = 'Select check out date',
}

const currentDate = {
  currentMonth: new Date().getMonth() + 1 + '',
  currentYear: new Date().getFullYear() + '',
};

function BookingDatePopup(props: IBookingDateProps) {
  const [noOfRooms, setNoOfRooms] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [checkInDate, setCheckInDate] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [hotelBookingStatus, setHotelBookingStatus] = useState<HOTEL_BOOKING_STATUS>(
    HOTEL_BOOKING_STATUS.selectCheckInDate
  );

  useEffect(() => {
    props.fetchBookingDates(props.pathName, currentDate.currentMonth, currentDate.currentYear);
  }, []);

  useEffect(() => {
    if (isClicked && props.state.postData.bookingStatusMessage.length > 1) {
      props.toggleOverlay(false);
      props.toggleMessage(true);
      props.toggleBookingDatePopup(false);
      props.setMessageText(props.state.postData.bookingStatusMessage);
    }
  }, [props.state.postData.bookingStatusMessage]);

  const saveBooking = (data: any) => props.saveBooking(props.pathName, data);

  const saveHotelBookingStatus = () => {
    if (hotelBookingStatus === HOTEL_BOOKING_STATUS.selectCheckInDate && checkInDate.length > 1) {
      setHotelBookingStatus(HOTEL_BOOKING_STATUS.selectCheckOutDate);
    } else if (hotelBookingStatus === HOTEL_BOOKING_STATUS.selectCheckOutDate && checkOutDate.length > 1) {
      setHotelBookingStatus(HOTEL_BOOKING_STATUS.selectRooms);
    }

    if (checkInDate.length > 1 && checkOutDate.length > 1 && noOfRooms.length > 1) {
      console.log(typeof checkInDate, typeof checkOutDate, typeof noOfRooms);
      saveBooking({
        userId: props.state.auth.gapiAuth.currentUser.get().getId(),
        checkInDate,
        checkOutDate,
        noOfRooms: +noOfRooms,
      });
    }
  };

  const onSaveBookingButtonClicked = () => {
    setIsClicked(true);
    // Since we have multiple input fields for hotel booking we need inputs of all those fields only then we can do booking.
    if (props.productType === 'hotels') saveHotelBookingStatus();
    else saveBooking({ userId: props.state.auth.gapiAuth.currentUser.get().getId(), selectedDate });
  };

  const onSelectDateButtonClicked: MouseEventHandler<HTMLButtonElement> = e => {
    const date = (e.target as HTMLButtonElement).textContent as string;
    // Edge cases if user if trying to do a booking for a hotel.
    if (props.productType === 'hotels') selectHotelBookingDates(date);
    // For tours and activities just save the selected date for booking.
    else setSelectedDate(date);
  };

  const selectHotelBookingDates = (date: string) => {
    // Move on to next selection once we select one input.
    if (hotelBookingStatus === HOTEL_BOOKING_STATUS.selectCheckInDate) setCheckInDate(date);
    else if (hotelBookingStatus === HOTEL_BOOKING_STATUS.selectCheckOutDate) setCheckOutDate(date);
    else if (hotelBookingStatus === HOTEL_BOOKING_STATUS.selectRooms) selectNoOfRooms(date);
  };

  const selectNoOfRooms = (val: string) => {
    setNoOfRooms(val);
  };

  const returnBookingDatePopupTitle = () => {
    switch (props.productType) {
      case 'hotels':
        return hotelBookingStatus;
      case 'tours':
        return 'Select booking date';
      case 'activities':
        return 'Select booking day';
      default:
        return '';
    }
  };

  const returnMonthTitle = () =>
    props.productType === 'hotels' ? `Available rooms:` : `${currentDate.currentMonth} ${currentDate.currentYear}`;

  const returnAvailableDates = () => {
    if (props.productType === 'hotels' && hotelBookingStatus === HOTEL_BOOKING_STATUS.selectRooms) {
      return <NoOfRoomsInput onInputChange={selectHotelBookingDates} />;
    } else {
      return (
        <div className="booking-date-popup__date-selection">
          {props.state.fetchedData.bookingDates.bookingDates.map((date: string, index: number) => (
            <button key={index} className="btn btn-date" onClick={onSelectDateButtonClicked}>
              {date}
            </button>
          ))}
        </div>
      );
    }
  };

  const returnBookingDates = () => {
    return (
      <React.Fragment>
        {props.state.fetchedData.bookingDates.bookingDates.length > 1 && (
          <div className="booking-date-popup">
            <h2 className="heading-default booking-date-popup__heading">{returnBookingDatePopupTitle()}</h2>
            <div className="booking-date-popup__month">
              <h2 className="heading-default booking-date-popup__month-title">{returnMonthTitle()}</h2>
            </div>
            {returnAvailableDates()}
            <ButtonSecondary onButtonClick={() => onSaveBookingButtonClicked()} buttonText="Save" />
          </div>
        )}
      </React.Fragment>
    );
  };

  return returnBookingDates();
}

const mapStateToProps = (state: IBookingDateMapState) => ({
  state,
});

export default connect(mapStateToProps, {
  fetchBookingDates,
  saveBooking,
  setMessageText,
  toggleMessage,
  toggleOverlay,
  toggleBookingDatePopup,
})(BookingDatePopup);
