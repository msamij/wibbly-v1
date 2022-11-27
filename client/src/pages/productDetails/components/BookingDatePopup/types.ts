import { IBookingDates } from '@http/Models/Bookings';
import { IToggleBookingDate, IToggleMessage, IToggleOverlay, IUIChange, IState } from '@globalTypes/types';

export interface IBookingDateProps
  extends IUIChange,
    IToggleMessage,
    IToggleOverlay,
    IToggleBookingDate,
    IState<IBookingDateMapState> {
  pathName: string;
  saveBooking: (url: string, userId: string, bookingDate: string) => void;
  fetchBookingDates: (pathName: string, month: string, year: string) => void;
}

export interface IBookingDateMapState {
  auth: {
    gapiAuth: any;
  };
  fetchedData: {
    bookingDates: IBookingDates;
  };
  postData: {
    bookingStatusMessage: string;
  };
  uiChange: {
    toggleBookingDatesPopup: boolean;
  };
}
