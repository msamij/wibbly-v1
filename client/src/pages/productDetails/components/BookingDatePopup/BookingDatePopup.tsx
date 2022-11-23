import React, { MouseEventHandler, useEffect, useState } from 'react';
import { fetchBookingDates } from '@actions/httpGet';
import { saveBooking } from '@actions/httpPost';
import { setMessageText, toggleBookingDatePopup, toggleMessage, toggleOverlay } from '@actions/uiChange';
import ButtonSecondary from '@button/ButtonSecondary/ButtonSecondary';
import { BookingDates } from '@models/BookingDates';
import { connect } from 'react-redux';
import './BookingDatePopup.css';

interface IBookingDateProps {
  pathName: string;
  state: IBookingDateMapState;

  setMessageText: (
    message: string
  ) => {
    type: string;
    payload: string;
  };
  toggleMessage: (
    toggle: boolean
  ) => {
    type: string;
    payload: boolean;
  };
  toggleOverlay: (
    toggle: boolean
  ) => {
    type: string;
    payload: boolean;
  };
  toggleBookingDatePopup: (
    toggle: boolean
  ) => {
    type: string;
    payload: boolean;
  };
  saveBooking: (url: string, userId: string, bookingDate: string) => void;
  fetchBookingDates: (pathName: string, month: string, year: string) => void;
}

function BookingDatePopup(props: IBookingDateProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [date, setDate] = useState('');

  useEffect(() => {
    props.fetchBookingDates(props.pathName, new Date().getMonth() + 1 + '', new Date().getFullYear() + '');
  }, []);

  const onSaveBookingButtonClicked = () => {
    setIsClicked(true);
    props.saveBooking(props.pathName, props.state.auth.gapiAuth.currentUser.get().getId(), date);
  };

  const onDateSelectButtonClicked: MouseEventHandler<HTMLButtonElement> = e => {
    setDate((e.target as HTMLButtonElement).textContent as string);
  };

  useEffect(() => {
    if (isClicked && props.state.postData.bookingStatusMessage.length > 1) {
      props.toggleOverlay(false);
      props.toggleMessage(true);
      props.toggleBookingDatePopup(false);
      props.setMessageText(props.state.postData.bookingStatusMessage);
    }
  }, [props.state.postData.bookingStatusMessage]);

  const returnBookingDates = () => {
    return (
      <React.Fragment>
        {props.state.fetchedData.bookingDates.bookingDates.length > 1 && (
          <div className="booking-date-popup">
            <h2 className="heading-default booking-date-popup__heading">Select Check in date</h2>
            <div className="booking-date-popup__month">
              {/* <ButtonSecondary onButtonClick={() => console.log('Prev')} buttonText="prev ⇐" /> */}
              <h2 className="heading-default booking-date-popup__month-title">Nov 2022</h2>
              {/* <ButtonSecondary onButtonClick={() => console.log('Next')} buttonText="next ⇒" /> */}
            </div>

            <div className="booking-date-popup__date-selection">
              {props.state.fetchedData.bookingDates.bookingDates.map((date: string, index: number) => (
                <button key={index} className="btn btn-date" onClick={onDateSelectButtonClicked}>
                  {date}
                </button>
              ))}
            </div>
            <ButtonSecondary onButtonClick={() => onSaveBookingButtonClicked()} buttonText="Save" />
          </div>
        )}
      </React.Fragment>
    );
  };

  return returnBookingDates();
}

interface IBookingDateMapState {
  auth: {
    gapiAuth: any;
  };
  fetchedData: {
    bookingDates: BookingDates;
  };
  postData: {
    bookingStatusMessage: string;
  };
  uiChange: {
    toggleBookingDatesPopup: boolean;
  };
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
