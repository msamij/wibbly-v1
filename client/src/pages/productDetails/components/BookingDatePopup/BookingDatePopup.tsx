import React, { useEffect } from 'react';
import { fetchBookingDates } from '@actions/httpGet';
import ButtonSecondary from '@button/ButtonSecondary/ButtonSecondary';
import { BookingDates } from '@models/BookingDates';
import { connect } from 'react-redux';
import './BookingDatePopup.css';

interface IBookingDateProps {
  pathName: string;
  state: IBookingDateMapState;
  fetchBookingDates: (pathName: string, month: string, year: string) => void;
}

function BookingDatePopup(props: IBookingDateProps) {
  useEffect(() => {
    props.fetchBookingDates(props.pathName, new Date().getMonth() + 1 + '', new Date().getFullYear() + '');
  }, []);

  const returnBookingDates = () => {
    return (
      <React.Fragment>
        {props.state.fetchedData.bookingDates.bookingDates.length > 1 && (
          <div className="booking-date-popup">
            <h2 className="heading-default booking-date-popup__heading">Select Check in date</h2>
            <div className="booking-date-popup__month">
              {/* <ButtonSecondary onButtonClick={() => console.log('Prev')} buttonText="prev ⇐" /> */}
              <h2 className="heading-default booking-date-popup__month-title">March 2022</h2>
              {/* <ButtonSecondary onButtonClick={() => console.log('Next')} buttonText="next ⇒" /> */}
            </div>

            <div className="booking-date-popup__date-selection">
              {props.state.fetchedData.bookingDates.bookingDates.map((date: string, index: number) => (
                <button key={index} className="btn btn-date">
                  {date}
                </button>
              ))}
            </div>
            <ButtonSecondary onButtonClick={() => console.log('Save')} buttonText="Save" />
          </div>
        )}
      </React.Fragment>
    );
  };

  return returnBookingDates();
}

interface IBookingDateMapState {
  fetchedData: {
    bookingDates: BookingDates;
  };
  uiChange: {
    toggleBookingDatesPopup: boolean;
  };
}
const mapStateToProps = (state: IBookingDateMapState) => ({
  state,
});

export default connect(mapStateToProps, { fetchBookingDates })(BookingDatePopup);
