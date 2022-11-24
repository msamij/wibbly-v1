import { BookingDates } from '@models/BookingDates';
import { IUIChange, IState } from '@globalTypes/types';

export interface IBookingDateProps extends IUIChange, IState<IBookingDateMapState> {
  pathName: string;
  // state: IBookingDateMapState;
  // setMessageText: (
  //   message: string
  // ) => {
  //   type: string;
  //   payload: string;
  // };
  // toggleMessage: (
  //   toggle: boolean
  // ) => {
  //   type: string;
  //   payload: boolean;
  // };
  // toggleOverlay: (
  //   toggle: boolean
  // ) => {
  //   type: string;
  //   payload: boolean;
  // };
  // toggleBookingDatePopup: (
  //   toggle: boolean
  // ) => {
  //   type: string;
  //   payload: boolean;
  // };
  saveBooking: (url: string, userId: string, bookingDate: string) => void;
  fetchBookingDates: (pathName: string, month: string, year: string) => void;
}

export interface IBookingDateMapState {
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
