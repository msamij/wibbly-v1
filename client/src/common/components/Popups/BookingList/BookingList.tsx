import React, { useEffect } from 'react';
import { fetchUserBookings } from '@actions/httpGet';
import Booking from '@bookingList/Booking/Booking';
import PopupMessage from '@popupMessage/PopupMessage';
import { connect } from 'react-redux';
import '../App.css';
import { IUserBookingsList } from '@http/Models/Bookings';
import { IState } from '@globalTypes/types';

interface IBookingListProps extends IState<IBookingListMapStore> {
  fetchUserBookings: (userId: string) => void;
}
function BookingList(props: IBookingListProps) {
  useEffect(() => {
    props.fetchUserBookings(props.state.auth.gapiAuth.currentUser.get().getId());
  }, []);

  const bookingInstance = (key: number, name: string, date: string) => {
    return <Booking key={key} productName={name} bookingDate={date} />;
  };

  const returnBooking = () => {
    let keyProp = 0;
    let jsx: JSX.Element[] = [];
    const { userBookingsList } = props.state.fetchedData;

    for (const key of Object.keys(userBookingsList)) {
      if (userBookingsList[key as keyof typeof userBookingsList].length > 0) {
        userBookingsList[key as keyof typeof userBookingsList].map((item: any) => {
          if (key === 'tourBookings') jsx.push(bookingInstance(keyProp, item.tourName, item.bookingDate));
          else if (key === 'activityBookings') jsx.push(bookingInstance(keyProp, item.activityName, item.bookingDay));
          keyProp += 1;
        });
      }
    }
    return jsx.map((item: any) => item);
  };

  return (
    <div className="popup booking-popup">
      <PopupMessage messageText="Your Bookings" />
      {returnBooking()}
    </div>
  );
}

interface IBookingListMapStore {
  fetchedData: {
    userBookingsList: IUserBookingsList;
  };
  auth: {
    gapiAuth: any;
  };
}
const mapStateToProps = (state: IBookingListMapStore) => ({ state });

export default connect(mapStateToProps, { fetchUserBookings })(BookingList);
