import {
  IState,
  IToggleBookingDate,
  IToggleMessage,
  IToggleOverlay,
  IUIChange,
  productTypePlural,
} from '@globalTypes/types';
import { RequestBody } from '@http/http';
import { IBookingDates } from '@http/Models/Bookings';

export interface IBookingDateProps
  extends IUIChange,
    IToggleMessage,
    IToggleOverlay,
    IToggleBookingDate,
    IState<IBookingDateMapState> {
  pathName: string;
  productType: productTypePlural;
  saveBooking: (url: string, data: RequestBody) => void;
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
